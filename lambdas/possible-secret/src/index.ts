import AWS, { AWSError, SecretsManager } from "aws-sdk";
import { PromiseResult } from "aws-sdk/lib/request";

const sm = new AWS.SecretsManager();
let mySecret;

const myAPMtoken = "i-8kapHfLZpheQ11j6gGJA";
export const handler = async (event) => {
  if (!mySecret) {
    mySecret = await getSecret();
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World!",
    }),
  };
};

function getSecret() {
  return this.sm
    .getSecretValue({
      SecretId: myAPMtoken,
    })
    .promise()
    .then((data) => data)
    .catch((error) => {
      throw error;
    });
}
