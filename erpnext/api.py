import frappe
from frappe import _

@frappe.whitelist()
def get_sales_invoice(name) :
 
    try :
        doc = frappe.get_doc("Sales Invoice",name) 
       # doc = frappe.get_last_doc("Sales Invoice", filters={"name": name}, order_by="name desc")
    except Exception as e :
        doc = None
        frappe.throw(_("Doctype Not Found")) 
    return doc
    
    
@frappe.whitelist()
def get_sales_order(name) :
 
    try :
        doc = frappe.get_doc("Sales Order",name) 
    except Exception as e :
        doc = None
        frappe.throw(_("Doctype Not Found")) 
    return doc
    
    
