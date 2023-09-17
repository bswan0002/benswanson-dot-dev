---
title: "Custom GitHub Notifications in Slack with AWS Lambda & API Gateway"
description: "Lorem ipsum dolor sit amet"
pubDate: "Jul 08 2022"
heroImage: "/blog-placeholder-3.jpg"
---

Custom GitHub Notifications in Slack with AWS Lambda & API Gateway

Why lambda for this usecase?

1. Create a Slack Incoming Webhook:

- Visit https://yourworkspace.slack.com/apps/manage/custom-integrations.
- Click on "Incoming Webhooks".
- Click "Add to Slack".
- Select a channel or create a new one for GitHub notifications.
- Click on "Add Incoming WebHooks integration".
- Copy the Webhook URL. You'll use this URL to post messages from AWS Lambda.

Issues: Slack apps instead of legacy integrations thing

2. Set up an AWS Lambda function:

- Navigate to the AWS Lambda service in your AWS Management Console.
- Click "Create function".
- Name your function, for example, "GitHubToSlack".
- Choose a runtime (for instance, Python 3.x).
- Create a new execution role with basic AWS Lambda permissions.
- Add the following code as the Lambda function body (for Python):

Issues: not all python packages available, don't want to deal with layers, just want to copy paste working code into aws console editor. Also, trouble receiving request headers in event payload.

3. Set up API Gateway:

- Navigate to the API Gateway service in your AWS Management Console.
- Click "Create API".
- Choose "REST API".
- Click "Build".
- Under "Actions", click "Create Resource".
- Name it "webhook" or similar.
- Once created, select "Create Method" > "POST".
- For the integration type, select "Lambda Function" and choose the function you created earlier.
- Deploy your API: From "Actions", select "Deploy API". Choose a new deployment stage or an existing one.
- Note the "Invoke URL" – this is where GitHub will send its webhooks.

Note: API Method Request settings has no auth, no api key, no validator, no specific params/headers/etc. Integration request is just lambda pointing at our lambda function with "Lambda proxy integration": true.

4. Configure GitHub Webhook:

- Go to the GitHub repository you want to monitor.
- Navigate to Settings > Webhooks > "Add webhook".
- Set the "Payload URL" to the "Invoke URL" you got from API Gateway.
- Set the content type to "application/json".
- Choose which events you'd like to be notified about.
- Click "Add webhook".

5. Add GH Secret to AWS Secrets Manager or Systems Manager Parameter Store
