// Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt



	
frappe.ui.form.on('Customer Shipment',"sales_invoice" , function(cur_frm,frm) {
	      
		 let sales_invoice_name;
		 sales_invoice_name=(cur_frm.doc.sales_invoice!=null)?cur_frm.doc.sales_invoice:"";

		// frappe call Start
			console.log (sales_invoice_name)
			frappe.call({
	
				method :'erpnext.api.get_sales_invoice',
				args :  {name:sales_invoice_name}   ,

				callback : function(r){
					console.log(r.message);
					let message_address = r.message.address_display;

					let res = message_address.replaceAll("<br>\n", "\n");
					let address = res.replaceAll("/<br>/", "\n");
					cur_frm.set_value("customer_address",address)
					//set items from fetch api
					let items = r.message.items;
					console.log(items);
					
					//set items in the form
					cur_frm.clear_table("items");
					items.forEach(item=>{
					    	// cur_frm.add_child(cur_frm.items,item);
						// e.action = "Apply";    
						// cur_frm.set_value("delivery_date",r.message.delivery_date);
						var child = cur_frm.add_child("items");
						frappe.model.set_value(child,item);
						// frappe.model.set_value( child, item);
						

					});
					
					cur_frm.refresh_field("items");
					
				}
			});
		 //frappe call End
		
	});
	 
 // onload: function(cur_frm) {
		
	// 		cur_frm.clear_table("items");
    //         cur_frm.refresh_fields();
	// 		cur_frm.set_value("customer_address","")
	// 	 // frappe call Start
	// 	 frappe.call({
	// 		 method :'erpnext.api.get_sales_invoice',
	// 		 args :  {name:cur_frm.doc.sales_invoice}   ,
	// 		 callback : function(r){
	// 					console.log(r.message);
	// 					let message_address = r.message.address_display;
	// 					let res = message_address.replace(/<br>\n/g, "\n");
	// 					let address = res.replace(/<br>/g, "\n");
	// 					cur_frm.set_value("customer_address",address)
	// 					//set items from fetch api
	// 					let items = r.message.items;
	// 					console.log(items);
						
	// 					//set items in the form
	// 					items.forEach(item=>{
	// 						cur_frm.add_child("items",item);
	// 						// cur_frm.set_value("delivery_date",r.message.delivery_date);
	// 			 });
				 
	// 			 cur_frm.refresh_field("items");
	// 		 }
	// 	 });
	// 	 //frappe call End
		 
	// },
 
	// setup:function(cur_frm){
	// 	cur_frm.set_query('customer_primary_address', function(doc) {
	// 		return {
	// 			filters: {
	// 				'link_doctype': 'Customer',
	// 				'link_name': doc.name
	// 			}
	// 		}
	// 	})

	// },

	// sales_invoice: function(cur_frm){
	// 	if(cur_frm.doc.customer_primary_address){
	// 		frappe.call({
	// 			method: 'frappe.contacts.doctype.address.address.get_address_display',
	// 			args: {
	// 				"address_dict": cur_frm.doc.customer_primary_address
	// 			},
	// 			callback: function(r) {
	// 				cur_frm.set_value("primary_address", r.message);
	// 			}
	// 		});
	// 	}
	// 	if(!cur_frm.doc.customer_primary_address){
	// 		cur_frm.set_value("primary_address", "");
	// 	}
	// },

	
	

