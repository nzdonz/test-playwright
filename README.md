# Description

This is a sample test suite for testing web UI and APIs.

The tests runs on node and is written on Typescript. It uses [axios](https://axios-http.com/) as the http client for testing the services and [playwright](https://playwright.dev/docs/intro) for the website. Both are using [Mocha](https://mochajs.org/) for the test framework and [chai](https://www.chaijs.com/api/) for assertions.

# Sample

There is a sample test suite branch in this repo called `sample-test-suite`. Check out the branch to have a sample test to run.

# Prerequisites

You will need to have [Node](https://nodejs.org/en/) and [yarn](https://classic.yarnpkg.com/en/docs/install) installed and able to run yarn commands. Run the commands shown here from bash or shell.

# Setup

To set up the project, install the node packages by running

```bash
yarn ci
```

# Test
The tests involves logging in and providing authorisation tokens retreived from the environment variables. When running these tests from a build pipeline, add these to the pipeline environment variables.

To set this on your machine, you will need to add these environment variables with the corresponding value **OR** you can **use the two test commands provided below under the Run test section**.

```text
testuser=REPLACEWITHtestusername
testpassword=REPLACEWITHuserpassword
token=REPLACEWITHoauthtoken
tokensecret=REPLACEWITHoauthtokensecret
key=REPLACEWITHconsumerkey
keysecret=REPLACEWITHconsumersecret
```

## Run test

For running the ui tests, use:
```bash
yarn test-ui
```

**to include the required environment variables from the command line:**
```bash
testuser=**REPLACEWITHtestusername** testpassword=**REPLACEWITHuserpassword** token=**REPLACEWITHoauthtoken** tokensecret=**REPLACEWITHoauthtokensecret** key=**REPLACEWITHconsumerkey** keysecret=**REPLACEWITHconsumersecret** yarn test-ui
```

For running the api tests, use:
```bash
yarn test-api
```

**to include the required environment variables from the command line:**
```bash
testuser=**REPLACEWITHtestusername** testpassword=**REPLACEWITHuserpassword** token=**REPLACEWITHoauthtoken** tokensecret=**REPLACEWITHoauthtokensecret** key=**REPLACEWITHconsumerkey** keysecret=**REPLACEWITHconsumersecret** yarn test-api
```
