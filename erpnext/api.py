import frappe
from frappe import auth
from frappe import _


@frappe.whitelist()
def get_sales_invoice(name) :

    try :
        doc = frappe.get_doc("Sales Invoice",name)
        # doc = frappe.get_last_doc("Sales Invoice", filters={"name": name}, order_by="name desc")
        # sales_invoice=frappe.db.sql(f""" SELECT name  """)
    except Exception as e :
        doc = None
        frappe.throw(_(" Sales Invoice Doctype Not Found"))
    return doc


@frappe.whitelist()
def get_sales_order(name) :

    try :
        doc = frappe.get_doc("Sales Order",name)
    except Exception as e :
        doc = None
        frappe.throw(_(" Sales Order Doctype Not Found"))
    return doc

@frappe.whitelist()
def get_customer_shipment(name) :

    try :
        doc = frappe.get_doc("Customer Shipment",name)
    except Exception as e :
        doc = None
        frappe.throw(_("Customer Shipment Doctype Not Found"))
    return doc

# to get get catalogs that author made
@frappe.whitelist(allow_guest=True)
def get_author_catalog(author) :

    try :
        catalogs=frappe.db.sql(f""" SELECT name, status FROM `tabCatalog` WHERE author='{author}' """,as_dict=True)
    except Exception as e :
        catalogs = None
        frappe.throw(_("Catalogs Not Found"))
    return catalogs


@frappe.whitelist( allow_guest=True)
def login(usr, pwd):
    try:
        login_manager = frappe.auth.LoginManager()
        login_manager.authenticate(user=usr, pwd=pwd)
        login_manager.post_login()
    except frappe.exceptions.AuthenticationError:
        frappe.clear_messages()
        frappe.local.response["message"] = {
            "success_key":0,
            "message":"Authentication Error!"
        }

        return

    api_generate = generate_keys(frappe.session.user)
    user = frappe.get_doc('User', frappe.session.user)

    frappe.response["message"] = {
        "success_key":1,
        "message":"Authentication success",
        "sid":frappe.session.sid,
        "api_key":user.api_key,
        "api_secret":api_generate,
        "username":user.username,
        "email":user.email
    }



def generate_keys(user):
    user_details = frappe.get_doc('User', user)
    api_secret = frappe.generate_hash(length=15)

    if not user_details.api_key:
        api_key = frappe.generate_hash(length=15)
        user_details.api_key = api_key

    user_details.api_secret = api_secret
    user_details.save()

    return api_secret