// Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Catalog Member', {
    refresh: function(frm) {
      // this commond to print A message 
       if (frm.doc.full_name!=undefined)
           frappe.msgprint("You now See : " + frm.doc.full_name )

        // this code to throw an error
        // frappe.throw("there Are some thing error here")

        //this code to add custom button in the form 
        frm.add_custom_button('Create Membership', () => {
            frappe.new_doc('Catalog Membership', {
                catalog_member: frm.doc.name
            })
        })

         //this code to add custom button in the form 
        frm.add_custom_button('Create Transaction', () => {
            frappe.new_doc('Catalog Transaction', {
                catalog_member: frm.doc.name
            })
        })
    }
 


});