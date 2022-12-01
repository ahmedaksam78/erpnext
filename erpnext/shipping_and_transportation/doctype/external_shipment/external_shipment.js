// Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

// change on grid table


frappe.ui.form.on("Shipments Details",{
	
	
	
	customer_shipment:function(frm){

		let items=[];

		frm.get_field('shipment_status').grid.cannot_add_rows = true;

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
					console.log(r)
					var childTable = frm.add_child("shipment_status");
                    childTable.customer_shipment=r.message.name;
					childTable.shipment_status=r.message.shipment_status;

                    frm.refresh_fields("shipment_status");
					

					items = r.message.items;
					
					// set items in the form
					items.forEach(item=> {
						frm.add_child("items",item);

					});

					frm.refresh_field("items");
				}	
				
			});
			
		}
	},
	
	onload:function(frm){
		frm.refresh_fields();
		frm.fields_dict["shipment_status"].grid.wrapper.find(".grid-delete-row").hide();
		frm.fields_dict["shipment_status"].grid.wrapper.find(".grid-insert-row-below").hide();
		frm.fields_dict["shipment_status"].grid.wrapper.find(".grid-insert-row").hide();
		},


});









