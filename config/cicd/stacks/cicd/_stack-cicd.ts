import {Construct} from "constructs"
import {Stack, StackProps} from 'aws-cdk-lib'

import {addBuildProject} from "./constructs/codebuild-project"
import {Buckets, CIBuckets} from "./constructs/s3-buckets"
import {GithubProps, MyPipeline} from "./constructs/pipeline"
import {IDomainProps, MyCDN} from "./constructs/cdn"
import {IProject} from "aws-cdk-lib/aws-codebuild";
import {Bucket} from "aws-cdk-lib/aws-s3";

export interface CiCdStackProps extends StackProps {
    projectName: string
    github: GithubProps
    domain: IDomainProps
}

export class CiCdStack extends Stack {
    props: CiCdStackProps

    pipeline: MyPipeline

    constructor(scope: Construct, id: string, props: CiCdStackProps) {
        super(scope, id, props)
        const {projectName, github, domain} = props

        const buckets = this.addBuckets(projectName).buckets
        const buildProject = this.addCodeBuild()
        this.addPipeline(projectName, github, buckets, buildProject)
        this.addCDN(projectName, buckets.deploymentBucket)
    }

    addBuckets(projectName: string): Buckets {
        return new Buckets(this, 'Buckets', {projectName})
    }

    addCodeBuild(): IProject {
        return addBuildProject(this)
    }

    addPipeline(projectName: string, github: GithubProps, buckets: CIBuckets, buildProject: IProject): MyPipeline {
        return new MyPipeline(this, 'MyPipeline', {
            projectName,
            buckets,
            buildProject,
            github,
        })
    }

    addCDN(projectName: string, bucket: Bucket): MyCDN {
        return new MyCDN(this, 'CDN', {
            projectName,
            hostingBucket: bucket,
            path: 'dist'
        })
    }
}