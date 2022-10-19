# Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.model.docstatus import DocStatus


class  CatalogTransaction(Document):
    def before_submit(self):
        if self.type == "Issue":
            self.validate_issue()
            self.validate_maximum_limit()
            # set the catalog status to be Issued
            catalog = frappe.get_doc("Catalog", self.catalog)
            catalog.status = "Issued"
            catalog.save()

        elif self.type == "Return":
            self.validate_return()
            # set the catalog status to be Available
            catalog = frappe.get_doc("Catalog", self.catalog)
            catalog.status = "Available"
            catalog.save()

    def validate_issue(self):
        self.validate_membership()
        catalog = frappe.get_doc("Catalog", self.catalog)
        # catalog cannot be issued if it is already issued
        if catalog.status == "Issued":
            frappe.throw("Catalog is already issued by another member")

    def validate_return(self):
        catalog = frappe.get_doc("Catalog", self.catalog)
        # catalog cannot be returned if it is not issued first
        if catalog.status == "Available": 
            frappe.throw("Catalog cannot be returned without being issued first")

   

    def validate_membership(self):
        # check if a valid membership exist for this Catalog member
        valid_membership = frappe.db.exists(
            "Catalog Membership",
            {
                "catalog_member": self.catalog_member,
                "docstatus": DocStatus.submitted(),
                "from_date": ("<", self.date),
                "to_date": (">", self.date),
            },
        )
        if not valid_membership:
            frappe.throw("The member does not have a valid membership")



    def validate_maximum_limit(self):
        max_catalogs = frappe.db.get_single_value("Catalog Settings", "max_catalogs")
        count = frappe.db.count(
            "Catalog Transaction",
            {
             "catalog_member": self.catalog_member,
             "type": "Issue",
             "docstatus": DocStatus.submitted()
            },
        )
        if count >= max_catalogs:
            frappe.throw("Maximum limit reached for issuing catalogs")
