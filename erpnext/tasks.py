import frappe
import string
import random
def all():
    pass
def cron():

    print("Inserting New Note")
    letters = string.ascii_letters
    note =" ".join( random.choice(letters) for i in range(15))

    new_note  = frappe.get_doc({"doctype" : "Note",
    "title" : note,
    })

    new_note.insert()
    frappe.db.commit()
