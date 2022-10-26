// Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt
 
frappe.ui.form.on('Sales Invoice', {
	refresh: function(frm) {
	
		frappe.call({
			method :'erpnext.api.get_sales_order',
			args :  {name:frm.doc.sales_order}   ,
			callback : function(r){
            	// console.log(r)
				// let items = r.message.items;
				// console.log(items);
				// frm.set_value("delivery_date",r.message.delivery_date)

			}
		})
	}
});
