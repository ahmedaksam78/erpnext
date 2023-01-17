import frappe

def send_sms (doc, event):
    print(f'\n\n\n\n    {doc},   \n\n {event} \n\n\n\n')
    frappe.msgprint("Function Reached")