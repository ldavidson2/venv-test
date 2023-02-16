import json
import boto3

def handler(event, context):
    dynamodb = boto3.resource('dynamodb', region_name="us-east-2", aws_access_key_id="AKIAX3FHVXYSKFFYPGE7", aws_secret_access_key= "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")
    table = dynamodb.Table('resttest-staging')
    print('received event:')
    print(event)
    response = table.get_item(
        Key={
            'PK': 'COMP#0'
        }
    )
  
    return response['Items']