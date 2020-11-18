# genshin-api
Genshin public REST API serving data from a Web Scraping approach

[![Aerith & tricks at Genshin Impact world giving welcome for contributors!](docs/readme.png)](https://genshin-api-release.santospatrick.com/docs)

## API Docs

| Environment | Swagger Online Docs |
|-------------|---------------------|
| Release     | [![Swagger Release Badge](https://validator.swagger.io/validator?url=https://genshin-api-release.santospatrick.com/swagger.json)](https://genshin-api-release.santospatrick.com/docs/) |
| Production  | [![Swagger Production Badge](https://validator.swagger.io/validator?url=https://genshin-api.santospatrick.com/swagger.json)](https://genshin-api.santospatrick.com/docs/) |

## Roadmap

| Feature              | Endpoint                   | Status          |
|----------------------|----------------------------|-----------------|
| Puppeteer Setup      | -                          | :white_check_mark: |
| Database Setup       | -                          | :white_check_mark: |
| Docker Setup         | -                          | :white_check_mark: |
| Public Swagger       | GET /docs                  | :white_check_mark: |
| Signup               | POST /api/v1/auth/register | :white_check_mark: |
| Login                | POST /api/v1/auth/login    | :white_check_mark: |
| Characters List      | GET /api/v1/characters     | :white_check_mark: |
| Character Details    | GET /api/v1/characters/:id | :white_check_mark: |
| Deploy v0.1.0        | https://genshin-api.santospatrick.com/docs | :white_check_mark: |

## Development

1. Setup a PostgreSQL database (example with docker):
```
docker run --name database -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```

2. Duplicate `.env.example` to `.env` fulfilling variables as needed

3. Run the following commands:
```
yarn install
yarn adonis key:generate
yarn adonis migration:run
yarn dev
```

4. Done 🎉 (access http://localhost:3333)

## Production

1. Clone this repo:
```
git clone git@github.com:santospatrick/genshin-api.git
```

2. Duplicate `.env.example` to `.env` fulfilling variables as needed
```bash
cp .env.example .env
vim .env
# edit variables
```

3. Run docker-compose and migrations:
```
docker-compose up -d
docker exec -it YourAppName sh
yarn adonis key:generate
yarn adonis migration:run
```

4. Done 🎉 

## Postman

[Download project's postman collection](https://raw.githubusercontent.com/santospatrick/genshin-api/main/postman/Genshin.postman_collection.json) to test endpoints
