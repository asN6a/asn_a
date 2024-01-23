import json

def read_data_json():
    with open('projects.json', 'r') as projects_json:
        data = json.load(projects_json)
    return data