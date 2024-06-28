from flask import Flask, render_template
import gunicorn

app = Flask(__name__)

@app.route("/")
def home():
  return render_template('projeto2.html')
