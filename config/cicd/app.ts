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
    },
    domain: {
        domainNames: [
            'www.morecogent.org',
            'morecogent.org'
        ],
        certificateArn: 'arn:aws:acm:us-east-1:966855986707:certificate/6444dfa6-9faf-4901-9146-28695d00b1d8'
    }
})
app.synth()