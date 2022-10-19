# Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class ClientSideScripting(Document):
	pass

	 ###### 13	 	 ##################################
    ######	 frm_call() #############################
@frappe.whitelist()
def frappe_call(msg):

	import time
	time.sleep(0.5)
	# frappe.msgprint(msg)
	# self.phone ='0102334223'
	return 'Hi return This Message From frappe_call in the Client Side Scripting File'