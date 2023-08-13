import {Construct} from "constructs"
import {Bucket} from "aws-cdk-lib/aws-s3";
import {S3Origin} from "aws-cdk-lib/aws-cloudfront-origins";
import {Distribution, PriceClass} from "aws-cdk-lib/aws-cloudfront";
import {aws_certificatemanager, Duration} from "aws-cdk-lib";
import {Certificate} from "aws-cdk-lib/aws-certificatemanager";

interface MyCDNProps {
    projectName: string,
    hostingBucket: Bucket,
    path: string
}

export interface IDomainProps {
    domainNames: string[],
    certificateArn: string
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

        const certificate = aws_certificatemanager.Certificate.fromCertificateArn(this, 'domainCertificate', 'arn:aws:acm:us-east-1:966855986707:certificate/6444dfa6-9faf-4901-9146-28695d00b1d8')

        this.distribution = new Distribution(this, `${projectName}Distribution`, {
            defaultBehavior: {
                origin: s3Origin,
                cachePolicy: {
                    cachePolicyId: '4135ea2d-6df8-44a3-9df3-4b5a84be39ad'
                }
            },
            domainNames: [
                'www.morecogent.org',
                'morecogent.org'
            ],
            certificate,
            priceClass: PriceClass.PRICE_CLASS_100,
            defaultRootObject: 'index.html',
            // When user navigates to e.g. `domain.org/design` he should be re-directed to application router instead.
            errorResponses: [{
                httpStatus: 403,
                responseHttpStatus: 200,
                responsePagePath: '/index.html',
                ttl: Duration.minutes(30)
            }]
        })
    }
}