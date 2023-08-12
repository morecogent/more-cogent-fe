import {Construct} from "constructs"
import {BuildSpec, ComputeType, LinuxBuildImage, PipelineProject} from "aws-cdk-lib/aws-codebuild"

/**
 * Pricing: $0.01/build (2 minutes).
 * (https://aws.amazon.com/codebuild/pricing/)
 * */
export function addBuildProject(scope: Construct){
    return new PipelineProject(scope, 'CodeBuild', {
        buildSpec: BuildSpec.fromSourceFilename('config/cicd/stacks/cicd/constructs/buildspec.yml'),
        environment: {
            computeType: ComputeType.SMALL,
            buildImage: LinuxBuildImage.fromCodeBuildImageId('aws/codebuild/standard:6.0')
        }
    })
}
