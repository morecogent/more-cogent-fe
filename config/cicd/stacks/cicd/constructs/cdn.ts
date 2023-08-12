import {Construct} from "constructs"
import {Bucket} from "aws-cdk-lib/aws-s3";
import {S3Origin} from "aws-cdk-lib/aws-cloudfront-origins";
import {Distribution, PriceClass} from "aws-cdk-lib/aws-cloudfront";

interface MyCDNProps {
    projectName: string,
    hostingBucket: Bucket,
    path: string
}

/**
* Pricing: Free (https://aws.amazon.com/cloudfront/pricing/)
* */
export class MyCDN extends Construct {

    distribution: Distribution

    constructor(scope: Construct, id: string, props: MyCDNProps) {
        super(scope, id)
        const {projectName, hostingBucket, path} = props

        const s3Origin = new S3Origin(hostingBucket, {
            originPath: path
        })
        this.distribution = new Distribution(this, `${projectName}Distribution`, {
            defaultBehavior: {
                origin: s3Origin,
                cachePolicy: {
                    cachePolicyId: '4135ea2d-6df8-44a3-9df3-4b5a84be39ad'
                }
            },
            priceClass: PriceClass.PRICE_CLASS_100,
            defaultRootObject: 'index.html'
        })
    }
}