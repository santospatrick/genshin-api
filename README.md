# genshin-api
Genshin public REST API serving data from a Web Scraping approach

![Aerith & tricks at Genshin Impact world giving welcome for contributors!](docs/readme.png)

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

## Roadmap

| Feature              | Endpoint                   | Status          |
|----------------------|----------------------------|-----------------|
| Puppeteer Setup      | -                          | :no_entry_sign: |
| Database Setup       | -                          | :white_check_mark: |
| Signup               | POST /api/v1/auth/register | :white_check_mark: |
| Login                | POST /api/v1/auth/login    | :white_check_mark: |
| Characters List      | GET /api/v1/characters     | :no_entry_sign: |
| Character Details    | GET /api/v1/characters/:id | :no_entry_sign: |
| Public Swagger       | GET /api/v1/docs           | :no_entry_sign: |

## Postman

[Download project's postman collection](https://raw.githubusercontent.com/santospatrick/genshin-api/adonis/postman/Genshin.postman_collection.json) to test endpoints
