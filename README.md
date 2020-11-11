# genshin-api
Genshin public REST API serving data from a Web Scraping approach

![Aerith & tricks at Genshin Impact world giving welcome for contributors!](docs/readme.png)

## Development
```
yarn install
node index.js
```

## Roadmap

| Feature              | Endpoint                   | Status          |
|----------------------|----------------------------|-----------------|
| Puppeteer Setup      | -                          | :no_entry_sign: |
| Database Setup       | -                          | :white_check_mark: |
| Authentication Setup | POST /api/v1/login         | :no_entry_sign: |
| Characters List      | GET /api/v1/characters     | :no_entry_sign: |
| Character Details    | GET /api/v1/characters/:id | :no_entry_sign: |

## Development

1. Fulfill .env variables as needed

2. Run following commands:
```
yarn install
adonis migration:run
yarn dev
```

3. Done 🎉 (access http://localhost:3333)