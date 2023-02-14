from flask import Flask, request
from src.scrape_comments import scrape_comments


app = Flask(__name__)

@app.route('/getResult', methods=['POST'])
def get_result():
    request_data = request.get_json()
    url = request_data["url"]

    res = False

    if(url):
        res = scrape_comments(url)
    if(res == False):
        return {'error': "Something went wrong" }
    else: 
        return {'response': res }
