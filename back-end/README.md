[![Known Vulnerabilities](https://snyk.io/test/github/{username}/{repo}/badge.svg)](https://snyk.io/test/github/{username}/{repo})

# Unilever-Platform (based on Node.js Boilerplate)

## Project setup

* Install `nvm` using instructions found at [https://github.com/creationix/nvm#installation](https://github.com/creationix/nvm#installation). You can skip if `nvm` is already installed.
* `npm install -g yarn` - this installs `yarn` globally. You can skip if `yarn` is already installed.
* `yarn` - this will install all our dependencies.

Any new dependencies MUST be installed by running `yarn add <module name>`

Install [Docker](https://www.docker.com) which will allow you to run a local database. There is a `docker-compose.yml` file which is be used to set up a local PostgreSQL database. You will need to set up the `POSTGRES_USER` environment variable before running to set your database user name. You will also need to change the database username in `config/default.js` - read the comments in that file for details.

## Running locally

- Clone repo to local folder
- Access to the root folder of the project
- run `docker-compose up --build`
- access to docker image `docker-compose run api sh`

If you try to use the app now, the social auth will be redirect to 'fail' since the database may not have been created properly. To fix this issue, you will need to manually create the database via it's migrations after the docker finishes building. So, run `docker-compose run api knex migrate:latest` and `docker-compose run api knex seed:run` to create the fake data into the database.

## Environment Variables

* `ROLLBAR_ACCESS_TOKEN` - Server access token used to access Rollbar
* `ROLLBAR_ENVIRONMENT` - Server environment (development, staging, production etc)
* `DEFAULT_LOG_LEVEL` - Default log level for anything that hasn't been specified under `log` in `config/default.js`
* `DB_HOST` - PostgreSQL database host
* `DB_USER` - PostgreSQL database username
* `DB_PASSWORD` - PostgreSQL database password
* `DB_NAME` - PostgreSQL database name
* `DB_CONNECTION_STRING` - PostgreSQL connection string
* `JWT_SECRET` - Secret used for verifying/signing jwts

Any extra overrides should be set up in `config/custom-environment-variables.js` - see
[https://github.com/lorenwest/node-config/wiki/Environment-Variables#custom-environment-variables](https://github.com/lorenwest/node-config/wiki/Environment-Variables#custom-environment-variables)
for details. All overrides should be documented in this README file.

## Generators

`./bin/generate route <routename>`
`./bin/generate service <routename>`

## Code Linting & Formatting

This project uses [eslint](http://eslint.org/) to enforce good coding practices. We specify the rules in `.eslint.json` and should not be modified/disabled unless there is a pressing need.

Also included is [prettier](https://github.com/prettier/prettier) which enforces our coding style. This is a set of standard javascript formatting rules and also should not be modified. Consistent looking code is essential for projects to remain readable and maintainable.

You can check if your code passes all the linting rules by running `yarn run lint`. If there are violations, some of the violations can be fixed automatically by running `yarn run lint:fix`. All of the `prettier` violations can be fixed in this way.

## Preparing for production deploy

Increment the version in `package.json` and push the tag to bitbucket:

* `npm version patch`
* `git push`
* `git push --tags`
