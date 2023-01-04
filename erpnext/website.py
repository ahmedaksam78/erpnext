def get_home_page(user):
    if is_projects_user(user):
        return "projects"
    if is_partner(user):
        return "partner-dashboard"
    return "index"