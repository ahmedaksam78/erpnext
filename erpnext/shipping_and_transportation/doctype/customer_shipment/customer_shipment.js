// Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Customer Shipment', {
	refresh: function(frm) {
		
		frappe.call({
			method :'erpnext.api.get_sales_invoice',
			args :  {name:"ACC-SINV-2022-00001"}   ,
			callback : function(r){
				console.log(r);
			}
		})
	}
	
});
