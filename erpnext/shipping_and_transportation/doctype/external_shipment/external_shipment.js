// Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on("External Shipment",{
	onload:function(frm, cdt, cdn){
		

		
		//  //cannot able to add rows
		  frm.set_df_property("shipment_status", "cannot_add_rows", true);
		// //cannot able to delete rows
		 frm.set_df_property("shipment_status", "cannot_delete_rows", true);

		 
		//  frm.fields_dict["shipment_status"].grid.wrapper.find(".grid-insert-row-below").hide();
		//  frm.fields_dict["shipment_status"].grid.wrapper.find(".grid-insert-row").hide();
		// frm.get_field("shipment_status").grid.wrapper.find('.btn-open-row').hide();
        // frm.get_field("shipment_status").grid.cannot_add_rows = true;
        // refresh_fields("shipment_status");
	},

})





// change on grid table
frappe.ui.form.on("Shipments Details",{
	



	// ("shipment_status")_on_form_rendered:function(frm, cdt, cdn){

	// },

	
	customer_shipment:function(frm){

		let items=[];

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
					//to set value in row in child table 
					var childTable = frm.add_child("shipment_status");
                    childTable.customer_shipment=r.message.name;
					childTable.shipment_status=r.message.shipment_status;
                    frm.refresh_fields("shipment_status");
					

					items = r.message.items;
					
					// set items in row in child table
					items.forEach(item=> {
						frm.add_child("items",item);

					});

					frm.refresh_field("items");
				}	
				
			});
			
		}
	},
	

		
			
			
});









