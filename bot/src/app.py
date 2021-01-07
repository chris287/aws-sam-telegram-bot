import json
import requests
import os
from telegram.ext import Updater, CommandHandler





TELE_TOKEN=os.environ['TELE_TOKEN']
URL = "https://api.telegram.org/bot{}/".format(TELE_TOKEN)




def send_message(text, chat_id):
    url = URL + "sendMessage?text={}&chat_id={}".format(text, chat_id)
    requests.get(url)

def lambda_handler(event, context):
    message = json.loads(event['body'])
    chat_id = message['message']['chat']['id']
    reply = message['message']['text']
    if reply=="/start":
        reply = "Hey "+message['message']['from']['username']+" ! Welcome to LZ Bot."
    send_message(reply, chat_id)
    return {
        'body': json.dumps(event['body']),
        'statusCode': 200
    }
