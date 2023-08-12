import {Construct} from "constructs"
import {Stack, StackProps} from 'aws-cdk-lib'

import {addBuildProject} from "./constructs/codebuild-project"
import {Buckets} from "./constructs/s3-buckets"
import {MyPipeline} from "./constructs/pipeline"
import {MyCDN} from "./constructs/cdn"

export interface CiCdStackProps extends StackProps {
    projectName: string
    github: {
        repoOwner: string
        repoName: string,
        oauthToken: string
    }
}

export class CiCdStack extends Stack {
    props: CiCdStackProps

    pipeline: MyPipeline
    buckets: Buckets
    codebuild

    constructor(scope: Construct, id: string, props: CiCdStackProps) {
        super(scope, id, props)
        this.props = props

        this.addBuckets()
        this.addCodeBuild()
        this.addPipeline()
        this.addCDN()
    }

    addBuckets() {
        this.buckets = new Buckets(this, 'Buckets', {projectName: this.props.projectName})
    }

    addCodeBuild(){
        this.codebuild = addBuildProject(this)
    }

    addPipeline(){
        this.pipeline = new MyPipeline(this, 'MyPipeline', {
            projectName: this.props.projectName,
            github: this.props.github,
            artifactBucket: this.buckets.buckets.pipelineArtifacts,
            deploymentBucket: this.buckets.buckets.hostingDev,
            buildProject: this.codebuild
        })
    }

    addCDN(){
        new MyCDN(this, 'CDN', {
            projectName: this.props.projectName,
            hostingBucket: this.buckets.buckets.hostingDev,
            path: 'dist'
        })
    }
}