// Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Client Side Scripting', {
	refresh: function(frm) {
		// this commond to print A message 
		// if (frm.doc.full_name!=undefined)
		// frappe.msgprint("You now See : " + frm.doc.full_name )

	// this code to throw an error
	// frappe.throw("there Are some thing error here")

	//this code to add custom button in the form 
	frm.add_custom_button('Click Me Button 1', () => {
		frappe.msgprint("You now clicked Me  1 " )
     } , 'Click Me Button')

	frm.add_custom_button('Click Me Button 2', () => {
		frappe.msgprint("You now clicked Me  2 " )
     } , 'Click Me Button')


	},
	validate:function(frm){
		// to set full name steade of in creating fetch from field
       frm.set_value('full_name',frm.doc.first_name+" "+frm.doc.middle_name+" "+frm.doc.last_name)
	   //to set arow in the table in client scripting grid table
	    
	   let row =frm.add_child( 'family_members',{
			name1: 'Adam',
			relation: 'Grand Father',
			age:'455654'
		})
		frm.refresh_field("family_members")

	}  
	,dob: function (frm) {
		// this commond to print A message 
		// frappe.msgprint("You now are 'age' filedname event  " )
		frm.set_value('age', moment().diff(frm.doc.dob, 'years'));
		frm.refresh_field('age')
	}

	,enable: function (frm) {
		// this commond to print A message 
		// frappe.msgprint("You now are 'enable' filedname event  " )
		//when we enable check box first name will be mandatory

		frm.set_df_property('first_name','reqd',1)
		// frm.refresh_field('first_name')

		frm.set_df_property('middle_name','read_only',1)
		// frm.refresh_field('first_name')
		
		frm.toggle_reqd('last_name',true)
		// frm.refresh_field('first_name')

	}
//================ 
	//20
	// refresh: function (frm) {

		// 	frappe.msgprint("You now are 'refresh' event " )

		// this commond to print A message 
		// if (frm.doc.full_name != undefined)
		// 	frappe.msgprint("You now See : " + frm.doc.full_name)

		// this code to throw an error
		// frappe.throw("there Are some thing error here")

		// }
	//===================
		// ,onload: function (frm) {
		// 	// this commond to print A message 
		// 	frappe.msgprint("You now are 'onload' event " )

		// }
	//================
		//validate: function (frm) {
			// this commond to print A message 
			//frappe.throw(" An Error occured during validation " )

		// }
	//================
		// before_save: function (frm) {
		// 	// this commond to print A message 
		// 	frappe.throw(" An Error occured during 'Before Save' event " )

		// }
	//================
		// after_save: function (frm) {
		// 	// this commond to print A message 
		// 	frappe.throw(" An Error occured during 'After Save' event " )

		// }
	//================
		// enable: function (frm) {
		// 	// this commond to print A message 
		// 	frappe.msgprint("You now are 'enable' filedname event  " )

		// }
	//================
		,dob: function (frm) {
			// this commond to print A message 
			// frappe.msgprint("You now are 'age' filedname event  " )
			frm.set_value('age', moment().diff(frm.doc.dob, 'years'));
			frm.refresh_field('age')
		}
	//================
		// before_submit: function (frm) {
		// 	// this commond to print A message 
		// 	frappe.throw("You now are 'before_submit'  event  " )

		// }
	//================
		// on_submit: function (frm) {
		// 	// this commond to print A message 
		// 	frappe.msgprint("You now are 'on_submit'  event  " )

		// }
	//================
		// on_submit: function (frm) {
		// 	// this commond to print A message 
		// 	frappe.throw("You now are 'on_submit'  event  " )

		// }
	//================
		// before_cancel: function (frm) {
		// 	// this commond to print A message 
		// 	frappe.throw("You now are ' before_cancel'  event  " )

		// }
	//================
		// after_cancel: function (frm) {
		// 	// this commond to print A message 
		// 	frappe.throw("You now are ' after_cancel'  event  " )

		// }
	//================
    //22 Fetching
	// after_save:function(frm){
	// 	frappe.msgprint(
	// 		__("the full name is '{0}'",[
	// 			frm.doc.first_name+" "+	frm.doc.middle_name+" "+ frm.doc.last_name
	// 		]))
	// 	for (let row of frm.doc.family_members){
	// 	    frappe.msgprint(
	// 			__("{0}. The family name is '{1}' and relation is '{2}'",[
	// 				row.idx , row.name1 , row.relation
	// 			]))
	// 	}	
	// }
});

/** 
 * //21  
 * Child Tables Scripts
 *   frappe.ui.form.on("Family Members",{
    // name1:function(frm){
	// 	frappe.msgprint("hello from Child Doctype 'name1' Event ")
	// }
	//----------------------
    // age:function(frm,cdt,cdn){
	// 	frappe.msgprint("hello from Child Doctype 'name1' Event ")
	// }

 })
 */
