from flask import Flask, render_template
from flask.ext.sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)
print os.environ['APP_SETTINGS']
print os.environ['DATABASE_URL']
app.config.from_object(os.environ['APP_SETTINGS'])
db = SQLAlchemy(app)

@app.route('/')
def hello():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()