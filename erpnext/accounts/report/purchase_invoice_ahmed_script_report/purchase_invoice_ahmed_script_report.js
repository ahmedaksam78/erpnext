// Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Purchase Invoice Ahmed Script Report"] = {
	"filters": [

		{
			"fieldname" : "supplier",
			"label"     : __("Supplier"),
			"fieldtype" : "Link",
			"options"   : "Supplier",
			
				
		},
		{
			"fieldname" : "status",
			"label"     : __("Status"),
			"fieldtype" : "Select",
			options: [
				" ",
				'Draft',
				'Return',
				'Debit Note Issued',
				'Submitted',
				'Paid',
				'Partly Paid',
				'Unpaid',
				'Overdue',
				'Cancelled',
				'Internal Transfer'
			],
			
		}
	]
};
