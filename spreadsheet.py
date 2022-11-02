from firebase_admin import credentials, firestore, initialize_app

# Spreadsheet to push the rows to, make sure that the service account is shared and has edit access.
spreadsheet_id = ''

# Tokens for the service account
tokens_keys_for_spreadsheet_service_account_file_name = "*.json"
tokens_keys_for_firebase_service_account = "*.json"

def update_values_in_spreadsheet(spreadsheet_id: str, row: list, index: int = 2, print_rows_added_to_spreadsheet:bool = False):
    '''
    '''
    import gspread
    gc = gspread.service_account(filename=tokens_keys_for_spreadsheet_service_account_file_name)
    spreadsheet = gc.open_by_key(spreadsheet_id)
    sheet_in_spreadsheet = spreadsheet.get_worksheet(0)
    sheet_in_spreadsheet.insert_row(values=row, index=index)
    if print_rows_added_to_spreadsheet:
        print(f"Added a row to spreadsheet. {row}")
    else:
        print(f"Printed for {row[0]}")


cred = credentials.Certificate(tokens_keys_for_firebase_service_account)
app = initialize_app(cred)
db = firestore.client(app)
docs = db.collection("users").stream()

index = 2

for doc in docs:
    # Header = [Name, Email, Number, Course, Reg Num, College Year, Date and Time preference, Personal email, Dept 1, Reason, Dept 2, Reason	Dept 3, Reason, Dept 4, Reason, Dept 5, Reason, Dept 6, Reason]
    user_data_dict = doc.to_dict()
    if "personalData" in user_data_dict:
        if "name" in user_data_dict["personalData"]:
            user_data_row = [
                user_data_dict["personalData"]["name"],
                user_data_dict["uid"],
                user_data_dict["personalData"]["phoneNumber"],
                user_data_dict["personalData"]["registerationNumber"],
                user_data_dict["personalData"]["collegeYear"],
                user_data_dict["personalData"]["datePreference"] + "th" + " " + user_data_dict["personalData"]["timePreference"],
                user_data_dict["personalData"]["personalEmail"],
            ]

            user_data_row.append(user_data_dict["departmentData"]["CTF"]["reason"]) if ("CTF" in user_data_dict["departmentData"]) else user_data_row.append("")
            user_data_row.append(user_data_dict["departmentData"]["Development (Web-Dev and Projects)"]["reason"]) if ("Development (Web-Dev and Projects)" in user_data_dict["departmentData"]) else user_data_row.append("")
            user_data_row.append(user_data_dict["departmentData"]["Content"]["reason"]) if ("Content" in user_data_dict["departmentData"]) else user_data_row.append("")
            user_data_row.append(user_data_dict["departmentData"]["Design"]["reason"]) if ("Design" in user_data_dict["departmentData"]) else user_data_row.append("")
            user_data_row.append(user_data_dict["departmentData"]["Social media"]["reason"]) if ("Social media" in user_data_dict["departmentData"]) else user_data_row.append("")
            user_data_row.append(user_data_dict["departmentData"]["Event Management"]["reason"]) if ("Event Management" in user_data_dict["departmentData"]) else user_data_row.append("")
            user_data_row.append(user_data_dict["departmentData"]["Sponsorship and Finance"]["reason"]) if ("Sponsorship and Finance" in user_data_dict["departmentData"]) else user_data_row.append("")


            update_values_in_spreadsheet(spreadsheet_id, user_data_row, index,print_rows_added_to_spreadsheet=True)
            index += 1