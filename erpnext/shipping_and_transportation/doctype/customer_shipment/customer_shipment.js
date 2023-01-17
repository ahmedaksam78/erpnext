// Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt




frappe.ui.form.on('Customer Shipment',"sales_invoice" , function(frm) {

		 let sales_invoice_name;
		 sales_invoice_name=(frm.doc.sales_invoice!=null)?frm.doc.sales_invoice:"";

		
		console.log (sales_invoice_name)

        // frappe call Start
        if (sales_invoice_name){
			frappe.call({

				method :'erpnext.api.get_sales_invoice',
				args :  {name:sales_invoice_name}   ,

				callback : function(r){
					console.log(r.message);
					let message_address = r.message.address_display;

					let res = message_address.replaceAll("<br>\n", "\n");
					let address = res.replaceAll("/<br>/", "\n");
					frm.set_value("customer_address",address)
					//set items from fetch api
					let items = r.message.items;
					console.log(items);


					// frm.doc.items =[]
					// $.each(r.message.items, function(_i, e){
					// 	let entry =frm.add_child("items");
					// 	entry.item= e.item;

					// })

					// refresh_field("items");

					//set items in the form
					frm.doc.items=[];
					frm.refresh_field("items");
					items.forEach(item=>{
					    // frm.add_child(frm.items,item);
						// e.action = "Apply";
						// frm.set_value("delivery_date",r.message.delivery_date);
						var child = frm.add_child("items");
						frappe.model.set_value(child,item);
						// frappe.model.set_value( child, item);

					});

					frm.refresh_field("items");
				}
			});
		 //frappe call End
		}else{
			frm.doc.items=[];
			frm.set_value("customer_address","")
			frm.refresh_field("items");
		}
	});

 // onload: function(frm) {

	// 		frm.clear_table("items");
    //         frm.refresh_fields();
	// 		frm.set_value("customer_address","")
	// 	 // frappe call Start
	// 	 frappe.call({
	// 		 method :'erpnext.api.get_sales_invoice',
	// 		 args :  {name:frm.doc.sales_invoice}   ,
	// 		 callback : function(r){
	// 					console.log(r.message);
	// 					let message_address = r.message.address_display;
	// 					let res = message_address.replace(/<br>\n/g, "\n");
	// 					let address = res.replace(/<br>/g, "\n");
	// 					frm.set_value("customer_address",address)
	// 					//set items from fetch api
	// 					let items = r.message.items;
	// 					console.log(items);

	// 					//set items in the form
	// 					items.forEach(item=>{
	// 						frm.add_child("items",item);
	// 						// frm.set_value("delivery_date",r.message.delivery_date);
	// 			 });

	// 			 frm.refresh_field("items");
	// 		 }
	// 	 });
	// 	 //frappe call End

	// },

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




