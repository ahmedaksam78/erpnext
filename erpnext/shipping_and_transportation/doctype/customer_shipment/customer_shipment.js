// Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Customer Shipment', {
	sales_invoice: function(frm) {
		 // frappe call Start
		 frappe.call({
			 method :'erpnext.api.get_sales_invoice',
			 args :  {name:frm.doc.sales_invoice}   ,
			 callback : function(r){
						console.log(r.message);
						let message_address = r.message.address_display;
						let res = message_address.replace(/<br>\n/g, "\n");
						let address = res.replace(/<br>/g, "\n");
						frm.set_value("customer_address",address)
						//set items from fetch api
						let items = r.message.items;
						console.log(items);
						
						//set items in the form
						items.forEach(item=>{
							frm.add_child("items",item);
							// frm.set_value("delivery_date",r.message.delivery_date);
 
				 });
				 
				 frm.refresh_field("items");
			 }
		 });
		 //frappe call End
		 
	 }
	 
	 
 
 
	// setup:function(frm){
	// 	frm.set_query('customer_primary_address', function(doc) {
	// 		return {
	// 			filters: {
	// 				'link_doctype': 'Customer',
	// 				'link_name': doc.name
	// 			}
	// 		}
	// 	})

	// },
	// sales_invoice: function(frm){
	// 	if(frm.doc.customer_primary_address){
	// 		frappe.call({
	// 			method: 'frappe.contacts.doctype.address.address.get_address_display',
	// 			args: {
	// 				"address_dict": frm.doc.customer_primary_address
	// 			},
	// 			callback: function(r) {
	// 				frm.set_value("primary_address", r.message);
	// 			}
	// 		});
	// 	}
	// 	if(!frm.doc.customer_primary_address){
	// 		frm.set_value("primary_address", "");
	// 	}
	// },

	
	
});
