import {Bucket, BucketAccessControl, HttpMethods, BlockPublicAccess} from "aws-cdk-lib/aws-s3"
import {Construct} from "constructs";

export interface ICiCdBuckets {
    hostingDev: Bucket,
    pipelineArtifacts: Bucket,
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

    buckets: ICiCdBuckets = <ICiCdBuckets>{}

    constructor(scope: Construct, id: string, props: IBucketsProps) {
        super(scope, id)
        const {projectName} = props
        const bucketNamePrefix = toDash(projectName)

        this.buckets.hostingDev = new Bucket(scope, 'BucketHostingDev', {
            bucketName: `${bucketNamePrefix}.hosting.dev`,
            // blockPublicAccess: new BlockPublicAccess({
            //     blockPublicAcls: false
            // }),
            cors: [{
                allowedMethods: [HttpMethods.GET],
                allowedOrigins: ['*']
            }],
            // accessControl: BucketAccessControl.PUBLIC_READ,
        })

        this.buckets.pipelineArtifacts = new Bucket(scope, 'BucketPipelineArtifacts', {
            bucketName: `${bucketNamePrefix}.pipeline`
        })
    }
}
