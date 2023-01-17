# Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe import _

class CatalogMember(Document):
	#this method will run every time a document is saved
    def before_save(self):
        self.full_name = f'{self.first_name} {self.last_name or ""}'
       
        
    def validate(self):
        
        if (self.has_relation == 1):
            
            for row in self.catalogs :
                if(row.relation == "No Relation" ):
                    frappe.throw(_("This Catalg Can't get No Relation  "))
               
        
         
                        
                    
