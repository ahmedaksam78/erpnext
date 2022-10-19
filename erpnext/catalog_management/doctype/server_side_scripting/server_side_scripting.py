# Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.model.docstatus import DocStatus

class ServerSideScripting(Document):



    ###### 2	##################################
    ###### Fetching #############################

    # function validate to ensure the validation of 
    # def validate(self):
    # 	frappe.msgprint("Hello My Full Name is '{0}' " .format(
    # 		self.first_name +" "+self.middle_name +" "+self.last_name
    # 	) )


    # function validate to ensure the validation of 
    # def validate(self):
    # 	for row in self.get("family_members"):
    # 	    frappe.msgprint("{0}. the family member name is '{1}' and relation is '{2}' ".format(
    # 		    row.idx,row.name1,row.relation) 
    # 		)


    ###### 1	##################################
    ###### Server Side Events  ###################

    # function validate to ensure the validation of 
    # def validate(self):
    # 	frappe.msgprint("Hello frappe from 'validate' Event ") 

    # function before save to ensure the some thing  before saving the doctype
    # def before_save(self):
    # 	frappe.throw("Hello frappe from 'before save' Event ") 

    # function before insert to throw an error message before inserting  in the doctype
    # def before_insert(self):
    # 	frappe.throw("Hello frappe from 'before_insert' Event ") 

    # function after insert to throw an error message after inserting  in the doctype
    # def after_insert(self):
    # 	frappe.throw("Hello frappe from 'after_insert' Event ") 

    # function on_update  throw an error message on_update  the doctype
    # def on_update(self):
    # 	frappe.msgprint("Hello frappe from 'on_update' Event ") 

    # function before_submit   message before_submit  the doctype
    # def before_submit(self):
    # 	frappe.msgprint("Hello frappe from 'before_submit' Event ")

    # function on_submit  throw an error message on_submit  the doctype
    # def on_submit(self):
    # 	frappe.msgprint("Hello frappe from 'on_submit' Event ")

    # function on_cancel  throw an error message on_cancel  the doctype
    # def on_cancel(self):
    # 	frappe.msgprint("Hello frappe from 'on_cancel' Event ")

    # function on_trash  throw an error message deleting the doctype
    # def on_trash(self):
    # 	frappe.throw("Hello frappe from 'on_trash (deleting)' Event ")

    # function after_delete  throw an error message after deleting the doctype
    # def after_delete(self):
    # 	frappe.msgprint("Hello frappe from 'after_delete' Event ")


    ###### 3 		 ##################################
    ######	geting doctype	 frappe.get_doc(doctype, name) #############################
    

    # def validate(self):
    #     self.get_document()

    # def get_document(self):
    #     doc = frappe.get_doc('Client Side Scripting',self.client_side_doc)
    #     frappe.msgprint("The client first name is {0} and Age is {1}".format(doc.first_name,doc.age))

    #     for row in doc.get("family_members"):
    # 	    frappe.msgprint("{0}. the family member name is '{1}' and relation is '{2}' ".format(
    # 		    row.idx,row.name1,row.relation) 
    # 		)

    ###### 4		 ##################################
    ######	cerating new  doctype	 frappe.new_doc(doctype, name) #############################
    
    # def validate(self):
    #     self.get_document() 


    # def get_document(self):
    #     doc = frappe.new_doc('Client Side Scripting')
    #     doc.first_name = 'Jake'
    #     doc.middle_name = 'Romany'
    #     doc.last_name = 'Ahmed'
    #     doc.dob ="18-08-1999" 
    #     doc.append('family_members',{
    #         'name1': "jain",
    #         'relation': "Sister",
    #         'age': 18
    #     })
    #     doc.insert()

    ###### 5		 ##################################
    ######	deleting a doctype	 frappe.delete_doc(doctype, name) #############################
    
    # def validate(self):
    #     frappe.delete_doc('Client Side Scripting', 'PR0023') 


    ###### 6		 ##################################
    ######	Documents Methods #############################
    ######### doc.insert()
    
    # def validate(self):
    #     self.insert_document() 


    # def insert_document(self):
    #     doc = frappe.new_doc('Client Side Scripting')
    #     doc.first_name = 'Jake'
    #     doc.middle_name = 'Romany'
    #     doc.last_name = 'Ahmed'
    #     doc.append('family_members',{
    #         'name1': "jain",
    #         'relation': "Sister",
    #         'age': 18
    #     })
    #     doc.insert()

    # some escape hates that can br used to skip certian checks
    # doc.insert(
    #     ignore_permissions = True ,
    #     ignore_links=True,
    #     ignore_if_duplicate=True,
    #     ignore_mandatory=True
    # )

    ######### doc.save()

    # def validate(self):
    #     self.save_document() 

    # def save_document(self):
    #     doc = frappe.new_doc('Client Side Scripting')
    #     doc.first_name = 'Jake'
    #     doc.middle_name = 'Romany'
    #     doc.last_name = 'Ahmed'
    #     doc.append('family_members',{
    #         'name1': "jain",
    #         'relation': "Sister",
    #         'age': 18
    #     })
    #     doc.save()

    # doc.save(
    #     ignore_permissions = True ,
    #     ignore_version=True,
    
    # )
    
    ######### doc.delete()

    # def validate(self):
    #     self.delete_document() 

    # def delete_document(self):
        # doc = frappe.get_doc('Client Side Scripting', 'PR0023') 
        # doc.delete()        
    
    ######### doc.db_set()

    # def validate(self):
    #     self.db_set_document() 

    # def db_set_document(self):
        # doc = frappe.get_doc('Client Side Scripting', 'PR0023') 
        # doc.db_set('first_name',"samy")       
    
    ###### 7		 ##################################
    ######	Database API #############################
   
    #frappe.db_set.get_list( doctype, filters, or_filters, fields , order_by, start, page_length)

    # def validate(self):
    #     self.get_list()

    # def get_list(self):
    #     doc = frappe.db.get_list(
    #         'Client Side Scripting',
    #         filters={
    #            # 'enable': 1 ,
    #            "docstatus": DocStatus.submitted()
    #         },
    #         fields=[
    #             'first_name',
    #             'age'
    #         ]
    #     ) 

    #     for d in doc:
    #         frappe.msgprint('The parent first name is {0} and age is {1}'.format(
    #             d.first_name,d.age
    #         ))


    ###### 8		 ##################################
    ######	 get_value() #############################
    
    #frappe.db.get_value( doctype, name, filedname)  or frappe.db.get_value( doctype, filters, filedname)

    # def validate(self):
    #     self.get_value()

    # def get_value(self):
    #     first_name = frappe.db.get_value('Client Side Scripting', 'CR00002',['first_name'])
    #     age = frappe.db.get_value('Client Side Scripting', 'CR00002',['age'])
 
    #     frappe.msgprint('The parent first name is {0} and age is {1}'.format(first_name , age ))


    ###### 9		 ##################################
    ######	 set_value() #############################
    
    #frappe.db.set_value( doctype, name, filedname,value)  or frappe.db.get_value( doctype, filters, filedname,value)

    # def validate(self):
    #     self.set_value()

    # def set_value(self):
    #     frappe.db.set_value('Client Side Scripting', 'CR00002','first_name',"Samar")
    #     frappe.db.set_value('Client Side Scripting', 'CR00002','last_name',"Omar")

    #     first_name = frappe.db.get_value('Client Side Scripting', 'CR00002',['first_name'])
    #     last_name = frappe.db.get_value('Client Side Scripting', 'CR00002',['last_name'])
 
    #     frappe.msgprint('The new first name is {0} and new last name {1}  '.format(first_name,last_name))
    
    
    
    ###### 10		 ##################################
    ######	 exists() #############################
    
    #frappe.db.exists( doctype, name) 
    # def validate(self):
    #     doctype='Client Side Scripting'
    #     doc='CR000021'

    #     if frappe.db.exists( doctype, doc):
    #         frappe.msgprint('The document ' + doc+' is Exist in Database ')
    #     else:
    #         frappe.msgprint('The document  ' + doc +'  is  not Exist in Database ')


    ###### 11		 ##################################
    ######	 count() #############################
    
    #frappe.db.count( doctype, filters) 

    # def validate(self):
    #     doctype='Client Side Scripting'
    #     filters={
    #            # 'enable': 1 ,
    #            "docstatus": DocStatus.draft()
    #         }
    #     # doc_count_draft = frappe.db.count( doctype, filters)
    #     doc_count_draft = frappe.db.count( doctype, {  "docstatus": DocStatus.draft() })
    #     doc_count_submit = frappe.db.count( doctype, {  "docstatus": DocStatus.submitted() })
    #     doc_count_cancel = frappe.db.count( doctype, {  "docstatus": DocStatus.cancelled() })
        
    #     frappe.msgprint('The Document  Which is Submitted  Count  is {0}'.format(doc_count_submit))
    #     frappe.msgprint('The Document  Which is Drafted  Count  is {0}'.format(doc_count_draft))
    #     frappe.msgprint('The Document  Which is Canceled  Count  is {0}'.format(doc_count_cancel))
        
 ###### 12  	 ##################################
    ######	 sql() #############################
    
    #frappe.db.sql( query, filters, as_dict) 

    # def validate(self):
       
    #     self.sql()
    
    # def sql(self):
    #     query=""" 
    #         SELECT
    #             first_name,
    #             last_name
    #         FROM
    #             `tabServer Side Scripting`
    #         WHERE
    #             enable = 1
    #         """
          
    #     data= frappe.db.sql(query, as_dict=1 )
    #     for row in data :
    #         frappe.msgprint('The First Name is {0} and Last Name is {1}'.format(row.first_name, row.last_name))
  


    ###### 13	 	 ##################################
    ######	 frm_call() #############################
    # @frappe.whitelist()
    # def frm_call(self,msg):

    #     import time
    #     time.sleep(0.5)
    #     frappe.msgprint(msg)
    #     # self.phone ='0102334223'
    #     return 'Hi This Message From frm_call in the Client Side Scripting File '

   


    pass