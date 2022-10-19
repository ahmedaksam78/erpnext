// Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Server Side Scripting', {
	// refresh: function(frm) {

	// },


	///// 13      ///////////////////////////////
	////// frm_call()  /////////////////////////
	///// form Server Side Scripting Python file
	// enable: function(frm){
	// 	frm.call({
	// 		doc: frm.doc,
	// 		method: 'frm_call',
	// 		args: {
	// 			msg: 'Hello at call function'
	// 		},
	// 		freeze:true,
	// 		freeze_message:__('Calling frm_call Method'),
	// 		callback: function(r){
	// 			frappe.msgprint(r.message)
	// 		}
	// 	});


	// },

	///// 13      ///////////////////////////////
	////// frm_call()  /////////////////////////
	///// form Client Side Scripting Python file
	enable: function(frm){
		frappe.call({
			// doc: frm.doc,
			
			method: "erpnext.catalog_management.doctype.client_side_scripting.client_side_scripting.frappe_call",
			args: {
				msg: 'Hi This Message From Frappe_call '
			},
			freeze:true,
			freeze_message:__('Calling Frappe_call Method'),
			callback: function(r){
				frappe.msgprint(r.message)
			}
		});


	},

	dob: function (frm) {
	 	// this commond to print A message 
		// frappe.msgprint("You now are 'age' filedname event  " )
		frm.set_value('age', moment().diff(frm.doc.dob, 'years'));
		frm.refresh_field('age')
	}
});
