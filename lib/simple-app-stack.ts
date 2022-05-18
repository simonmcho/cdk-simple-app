import { CfnOutput, Duration, Stack, StackProps } from "aws-cdk-lib";
import { Bucket, BucketEncryption } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class SimpleAppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const APP_NAME = "MySimpleApp";

    // The code that defines your stack goes here
    const bucket = new Bucket(this, APP_NAME, {
      encryption: BucketEncryption.S3_MANAGED,
      lifecycleRules: [
        {
          expiration: Duration.days(5),
        },
      ],
    });

    // new CfnOutput(this, `${APP_NAME}BucketNameExport`, {
    //   value: bucket.bucketName,
    //   exportName: `${APP_NAME}BucketName`,
    // });
    // example resource
    // const queue = new sqs.Queue(this, 'SimpleAppQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
