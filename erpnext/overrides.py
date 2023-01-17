from frappe.model.document import Document
from erpnext.education.doctype.student.student import Student

class AhmedStudent(Document):
    def validate(self):
        print("\n\n\n\n    This is the place  we put our logic.....    \n\n\n\n\n ")