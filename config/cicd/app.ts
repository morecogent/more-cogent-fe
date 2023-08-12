import {App} from 'aws-cdk-lib'
import {CiCdStack} from "./stacks/cicd/_stack-cicd"
import * as process from "process";

const APP_NAME = 'MoreCogent'
const MODULE_NAME = 'FE'

const app = new App()
new CiCdStack(app, `${APP_NAME}-CI-${MODULE_NAME}`, {
    env: {
        account: process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_DEFAULT_REGION,
    },
    projectName: APP_NAME,
    github: {
        repoOwner: 'morecogent',
        repoName: 'more-cogent-fe',
        oauthToken: 'Github_PAT'
    }
})
app.synth()