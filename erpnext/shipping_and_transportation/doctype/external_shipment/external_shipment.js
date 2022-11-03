// Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

// change on grid table


frappe.ui.form.on("Shipments Details","customer_shipment",function(frm){
		let items=[], old_list=[], new_list=[];
		
		let message_customer_shipment;
		items = frm.doc.shipments_details; 
	    console.log(items);
		if(items!=[]){
			console.log("there are a data")
			
			//updating  items on car
				message_customer_shipment=items[items.length-1].customer_shipment;
				console.log(message_customer_shipment);
		
			// frappe call Start
			frappe.call({
				method :'erpnext.api.get_customer_shipment',
				args :  { name: message_customer_shipment},
				callback : function(r){
						items = r.message.items;

						// set items in the form
						items.forEach(item=> {
						 	frm.add_child("items",item);

						});

						frm.refresh_field("items");
				}	
				
			});
			
		}
	}
 );




