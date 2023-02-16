import json
import boto3

dynamodb = boto3.resource('dynamodb', region_name="us-east-2", aws_access_key_id="AKIAX3FHVXYSKFFYPGE7", aws_secret_access_key= "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")
table = dynamodb.Table('resttest-staging')

def handler(event, context):
  print('received event:')
  print(event)
  response = table.query(KeyConditionExpression=Key('PK').eq('COMP#0'))
  
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': json.dumps(response)
  }