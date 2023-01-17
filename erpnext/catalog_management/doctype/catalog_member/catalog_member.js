// Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Catalog Member', {
    onload:function(frm){
		

		
		//  //cannot able to add rows
		  frm.set_df_property("catalogs", "cannot_add_rows", true);
		// //cannot able to delete rows
		 frm.set_df_property("catalogs", "cannot_delete_rows", true);

		 
		//  frm.fields_dict["shipment_status"].grid.wrapper.find(".grid-insert-row-below").hide();
		//  frm.fields_dict["shipment_status"].grid.wrapper.find(".grid-insert-row").hide();
		 frm.get_field("catalogs").grid.wrapper.find('.btn-open-row').hide();
        // frm.get_field("shipment_status").grid.cannot_add_rows = true;
        // refresh_fields("shipment_status");
	},


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
    },

    // triger code down when we change value of filed author
	author: function(frm){

		let author = frm.doc.author;
		if(author){
			frappe.call({
				method: "erpnext.api.get_author_catalog",
				args:{author: author}
			}).done((r) =>{
                
                console.log(r.message)
				frm.doc.catalogs =[]
				$.each(r.message, function(_i, e){
					let entry =frm.add_child("catalogs");
                    let catalogId=10000000* Math.random(new Date()*1000);
                    
					entry.catalog_name = e.name;
					entry.catalog_status = e.status;
                    entry.catalog_id =parseInt( catalogId);
                    

                   

				})

                frm.get_field("catalogs").grid.wrapper.find('.btn-open-row').hide();
                refresh_field("catalogs");
			})
		}else{
            frm.doc.catalogs =[]
            refresh_field("catalogs");
        }
	},
   

    
});

frappe.ui.form.on("Catalog Details",{
    
    // catalog_name:function(frm,cdt,cdn){
    //     let item =locals[cdt][cdn]
    //     let catalogId=Math.round(new Date()/1000);
    //     item.catalog_id = catalogId;
    //     frm.refresh_field("catalogs");
    // },

    // form_render:function(frm,cdt,cdn ){
    //     let item =locals[cdt][cdn]
    //     let catalogId=Math.round(new Date()/1000);
    //     item.catalog_id = catalogId;
    //     frm.refresh_field("catalogs");

    // }


});




