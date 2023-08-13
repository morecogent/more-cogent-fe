import {
    CodeBuildAction,
    GitHubSourceAction,
    GitHubTrigger,
    ManualApprovalAction, S3DeployAction
} from "aws-cdk-lib/aws-codepipeline-actions"
import {SecretValue, StackProps} from "aws-cdk-lib"
import {Artifact, Pipeline} from "aws-cdk-lib/aws-codepipeline"
import {Construct} from "constructs"
import {IProject} from "aws-cdk-lib/aws-codebuild"
import {CIBuckets} from "./s3-buckets";


export type GithubProps = {
    repoOwner: string
    repoName: string
    oauthToken: string
}

interface MyPipelineProps extends StackProps {
    projectName: string
    github: GithubProps
    buckets: CIBuckets
    buildProject: IProject
}

/**
* Pricing: $1/month each pipeline.
* Pipeline must be active for the full month with at least 1 activation (https://aws.amazon.com/codepipeline/pricing/)
* */
export class MyPipeline extends Construct {

    pipeline: Pipeline

    constructor(scope: Construct, id: string, props: MyPipelineProps) {
        super(scope, id)
        const {projectName, buckets, buildProject, github} = props

        const githubArtifact = new Artifact('Github-Dev')
        const builtDevArtifact = new Artifact('Build-Dev')

        const githubAction = new GitHubSourceAction({
            actionName: 'fetch',
            owner: github.repoOwner,
            repo: github.repoName,
            oauthToken: SecretValue.secretsManager(github.oauthToken),
            output: githubArtifact,
            branch: 'main',
            trigger: GitHubTrigger.WEBHOOK
        })

        const buildAction = new CodeBuildAction({
            actionName: 'build',
            input: githubArtifact,
            project: buildProject,
            outputs: [builtDevArtifact]
        })

        const deployAction = new S3DeployAction({
            actionName: 'deploy',
            input: builtDevArtifact,
            bucket: buckets.deploymentBucket
        })

        const approvalAction = new ManualApprovalAction({
            actionName: 'approve'
        })

        this.pipeline = new Pipeline(this, 'Pipeline', {
            pipelineName: `${projectName}-Pipeline`,
            artifactBucket: buckets.artifactBucket,
            stages: [{
                stageName: 'stage-1',
                actions: [githubAction]
            }, {
                stageName: 'stage-2',
                actions: [buildAction]
            }, {
                stageName: 'stage-3',
                actions: [deployAction]
            }],
            crossAccountKeys: false
        })

    }
}