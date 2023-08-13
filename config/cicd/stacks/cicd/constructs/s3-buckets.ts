import {Bucket, HttpMethods} from "aws-cdk-lib/aws-s3"
import {Construct} from "constructs";

export type CIBuckets = {
    artifactBucket: Bucket
    deploymentBucket: Bucket
}

function toDash(str: string) {
    return str
        .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
        .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`)
}

interface IBucketsProps {
    projectName: string
}

/**
 * Creates buckets for CI CD:
 * 1) Pipeline Artifacts - to store artifacts created by the pipeline
 * 2) Hosting - to host the actual web application
 *
 * Pricing: Free. (https://aws.amazon.com/s3/pricing/)
 * */
export class Buckets extends Construct {

    buckets: CIBuckets = <CIBuckets>{}

    constructor(scope: Construct, id: string, props: IBucketsProps) {
        super(scope, id)
        const {projectName} = props
        const bucketNamePrefix = toDash(projectName)

        this.buckets.deploymentBucket = new Bucket(scope, 'BucketHostingDev', {
            bucketName: `${bucketNamePrefix}.hosting.dev`,
            cors: [{
                allowedMethods: [HttpMethods.GET],
                allowedOrigins: ['*']
            }]
        })

        this.buckets.artifactBucket = new Bucket(scope, 'BucketPipelineArtifacts', {
            bucketName: `${bucketNamePrefix}.pipeline`
        })
    }
}
