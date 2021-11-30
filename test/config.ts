import { Clients } from '@interfaces/clients';
import { Roles } from '@interfaces/credentials';
import { Sites } from '@interfaces/sites';
import { TestConfig } from '@interfaces/config';

export const siteUrl: Sites = {
  ui: 'https://tmsandbox.co.nz',
  api: 'https://api.tmsandbox.co.nz/v1',
};

export const testConfig: TestConfig = {
  headless: false,
  viewport: {
    width: 1280,
    height: 600
  }
};

const getPassword = (): string => {
  if (process.env.testpassword) {
    return process.env.testpassword;
  } else {
    throw new Error('No password was set for the test role. Add environment variable testpassword');
  }
};

const getUserName = (): string => {
  if (process.env.testuser) {
    return process.env.testuser;
  } else {
    throw new Error('No username was set for the test role. Add environment variable username');
  }
};

export const roles: Roles = {
  testRole: {
    username: getUserName(),
    password: getPassword()
  }
};

const getToken = (): string => {
  if (process.env.token) {
    return process.env.token;
  } else {
    throw new Error('No oauthToken was set for client. Add environment variable token');
  }
};

const getTokenSecret = (): string => {
  if (process.env.tokensecret) {
    return process.env.tokensecret;
  } else {
    throw new Error('No oauthTokenSecret was set for the client. Add environment variable tokensecret');
  }
};

const getKey = (): string => {
  if (process.env.key) {
    return process.env.key;
  } else {
    throw new Error('No consumerKey was set for the client. Add environment variable key');
  }
};

const getKeySecret = (): string => {
  if (process.env.keysecret) {
    return process.env.keysecret;
  } else {
    throw new Error('No consumerSecret was set for the client. Add environment variable keysecret');
  }
};

export const clients: Clients = {
  testClient: {
    oauthToken: getToken(),
    oauthTokenSecret: getTokenSecret(),
    consumerKey: getKey(),
    consumerSecret: getKeySecret()
  }
};
