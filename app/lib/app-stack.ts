import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import { Stack, StackProps, Duration } from 'aws-cdk-lib';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
export class AppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    const queue = new sqs.Queue(this, 'AppQueue', {
      visibilityTimeout: Duration.seconds(300)
    });

     // Create a Lambda function
     const helloWorldLambda = new Function(this, 'HelloWorldLambda', {
      runtime: Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: Code.fromInline(`
        exports.handler = async (event) => {
          const response = {
            statusCode: 200,
            body: JSON.stringify('Hello, World!'),
          };
          return response;
        };
      `),
    });




  }
}
