from flask import Flask, render_template
from utility import read_data_json

app = Flask(__name__)

@app.route('/')
def index():
    data_projects = read_data_json()
    return render_template('index.html', projects=data_projects['projects'])

@app.route('/project.html/<int:project_id>')
def project(project_id):
    data_projects = read_data_json()
    project = data_projects['projects'][project_id]
    return render_template('project.html', project=project)

if __name__ == '__main__':
    app.run(debug=True)
