# Video-Titles

### Implemented features:

- Rest API
- API Documentation (Swagger)

## Dependencies

```bash
$ yarn install
```

## Running the app locally:

```bash
$ docker-compose up api
```

## Migrations: 

```bash
# apply migrations

# production mode
$ npm run migrate:run

# development mode
$ npm run dev:migrate:run

# generate migrations

# production mode
$ npm run migrate:generate <MIGRATION_NAME>

# development mode
$ npm run dev:migrate:generate <MIGRATION_NAME>

```

More commands are available in the `package.json` file.

## Available users in the development server (or local environment)

| email               | role            | status | password   |
|---------------------|-----------------|--------|------------|
| admin@mail.com      | ADMIN           | ACTIVE | 1111       |
|---------------------|-----------------|--------|------------|
| super_admin@mail.com| SUPER_ADMIN     | ACTIVE | 1111       |
|---------------------|-----------------|--------|------------|
| user@mail.com       | USER            | ACTIVE | 1111       |
|---------------------|-----------------|--------|------------|
| client@mail.com     | CLIENT          | ACTIVE | 1111       |