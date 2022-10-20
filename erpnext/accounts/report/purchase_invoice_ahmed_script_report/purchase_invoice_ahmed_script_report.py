# Copyright (c) 2022, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

import frappe
from frappe import _, msgprint
from frappe.model.document import Document
from frappe.model.docstatus import DocStatus

def execute(filters=None):
	if not filters: filters = {}
 
	
	columns, data = [], []

	columns = get_columns()
	cs_data = get_cs_data(filters)

	if not cs_data:
		msgprint(_('No records found'))
		return columns, cs_data


	data = []
	for d in cs_data:
		row = frappe._dict({
				'name': d.name,
				'supplier': d.supplier,
				'status': d.status,
				'grand_total': d.grand_total,
				'outstanding_amount': d.outstanding_amount,
				'posting_date': d.posting_date,
				'due_date': d.due_date,
				
				
			})
		data.append(row)
  
    
	chart = get_chart_data(data)
	report_summary = get_report_summary(data)
	return columns, data,None ,chart ,report_summary
	

def get_columns():
	return [
		{
			"fieldname" : "name",
			"label"     : _("Invoice ID"),
			"fieldtype" : "Data",
			"width"     :'200'	
				
		},
		{
			"fieldname" : "supplier",
			"label"     : _("Supplier Name"),
			"fieldtype" : "Data",
			"width"     :'150'	
				
		},
		{
			"fieldname" : "status",
			"label"     : _("Status"),
			"fieldtype" : "Data",
			"width"     :'100'	
			
		},
		{
			"fieldname" : "grand_total",
			"label"     : _("Grand Total"),
			"fieldtype" : "Data",
			"width"     :'100'	
			
		}
		,
		{
			"fieldname" : "outstanding_amount",
			"label"     : _("Outstanding Amount"),
			"fieldtype" : "Data",
			"width"     :'100'	
			
		}
		,
		{
			"fieldname" : "posting_date",
			"label"     : _("Created Date"),
			"fieldtype" : "Data",
			"width"     :'120'	
			
		}
		,
		{
			"fieldname" : "due_date",
			"label"     : _("Delivery Date"),
			"fieldtype" : "Data",
			"width"     :'120'	
			
		}
	]

def get_cs_data(filters):
	conditions = get_conditions(filters)
	data = frappe.get_all(
		doctype='Purchase Invoice',
		
		fields=['name','supplier', 'status','grand_total','outstanding_amount','posting_date','due_date'],
		filters=conditions,
		order_by='name desc'
	)
	return data

def get_conditions(filters):
	conditions = {}
	for key, value in filters.items():
		if filters.get(key):
			conditions[key] = value

	return conditions



def get_chart_data(data):
	if not data:
		return None

	labels = [  'Draft',
				'Return',
				'Debit Note Issued',
				'Submitted',
				'Paid',
				'Partly Paid',
				'Unpaid',
				'Overdue',
				'Cancelled',
				'Internal Transfer'
    ]

	status_data = {
		            'Draft' : 0,
					'Return' : 0,
					'Debit Note Issued' : 0,
					'Submitted' : 0,
					'Paid' : 0,
					'Partly Paid' : 0,
					'Unpaid' : 0,
					'Overdue' : 0,
					'Cancelled' : 0,
					'Internal Transfer' : 0
	}
	datasets = []

	for entry in data:
		if entry.status == 'Draft':
			status_data['Draft'] += 1
   
		elif entry.status == 'Return' :
			status_data['Return'] += 1
   
		elif entry.status == 'Debit Note Issued':
			status_data['Debit Note Issued'] += 1
   
		elif entry.status == 'Submitted':
			status_data['Submitted'] += 1
   
		elif entry.status == 'Paid':
			status_data['Paid'] += 1
   
		elif entry.status == 'Partly Paid':
			status_data['Partly Paid'] += 1
   
		elif entry.status == 'Unpaid':
			status_data['Unpaid'] += 1
   
		elif entry.status == 'Overdue':
			status_data['Overdue'] += 1
   
		elif entry.status == 'Cancelled':
			status_data['Cancelled'] += 1
   
		elif entry.status =='Internal Transfer' :
			status_data['Internal Transfer' ] += 1

	datasets.append({
		'name': ' Status',
		'values': [
      				status_data.get('Draft'),
      				status_data.get('Return'),
					status_data.get('Debit Note Issued'),
					status_data.get('Submitted'),
					status_data.get('Paid'),
					status_data.get('Partly Paid'),
					status_data.get('Unpaid'),
					status_data.get('Overdue'),
					status_data.get('Cancelled'),
					status_data.get('Internal Transfer')
                ]
	})

	chart = {
		'data': {
			'labels': labels,
			'datasets': datasets
		},
		'type': 'bar',
		'height': 300,
	}

	return chart


def get_report_summary(data):
	if not data:
		return None

	Draft, Return, Debit_Note_Issued, Submitted, Paid, Partly_Paid, Unpaid, Overdue, Cancelled,  Internal_Transfer= 0, 0, 0, 0, 0, 0, 0, 0, 0, 0

	for entry in data:
		if entry.status == "Draft":
			Draft += 1
			
		elif entry.status == "Return":
			Return += 1
   
		elif entry.status == 'Debit_Note_Issued':
			Debit_Note_Issued += 1
   
		elif entry.status == 'Submitted':
			Submitted += 1
   
		elif entry.status == 'Paid':
			Paid += 1
   
		elif entry.status == 'Partly_Paid':
			Partly_Paid += 1
   
		elif entry.status == 'Unpaid':
			Unpaid += 1
   
		elif entry.status == 'Overdue':
			Overdue += 1
   
		elif entry.status == 'Cancelled':
			Cancelled += 1
   
		elif entry.status =='Internal_Transfer':
			Internal_Transfer += 1
  
	
    
	return [
		{
			'value': Draft,
			'indicator': "grey",
			'label': 'Draft',
			'datatype': 'Int',
		},
		{
			'value': Return,
			'indicator':"gray",
			'label': 'Return',
			'datatype': 'Int',
		}
		,
		{
			'value': Debit_Note_Issued,
			'indicator':"gray",
			'label': 'Debit Note Issued',
			'datatype': 'Int',
		}
		,
		{
			'value': Submitted,
			'indicator': 'Blue',
			'label': 'Submitted',
			'datatype': 'Int',
		}
		,
		{
			'value': Paid,
			'indicator': 'Green',
			'label': 'Paid',
			'datatype': 'Int',
		}
		,
		{
			'value': Partly_Paid,
			'indicator': "yellow",
			'label': 'Partly Paid',
			'datatype': 'Int',
		}
		,
		{
			'value': Unpaid,
			'indicator': "orange",
			'label': 'Unpaid',
			'datatype': 'Int',
		}
		,
		{
			'value': Overdue,
			'indicator': 'Red',
			'label': 'Overdue',
			'datatype': 'Int',
		}
		,
		{
			'value': Cancelled,
			'indicator': 'Red',
			'label': 'Cancelled',
			'datatype': 'Int',
		}
		,
		{
			'value': Internal_Transfer,
			'indicator': "darkgrey",
			'label': 'Internal Transfer',
			'datatype': 'Int',
		}
	]
const status_colors = {
			
			
			
			
			
			
			
			
		

