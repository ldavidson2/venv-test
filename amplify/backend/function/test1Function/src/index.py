import json
import boto3

def handler(event, context):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('test1DB-staging')
    print('received event:')
    print(event)
    response = table.get_item(
        Key={
            'PK': 'COMP#0'
        }
    )
  
    return response