'use strict'

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Swagger Information
  | Please use Swagger 2 Spesification Docs
  | https://swagger.io/docs/specification/2-0/basic-structure/
  |--------------------------------------------------------------------------
  */

  enable: true,
  specUrl: '/swagger.json',

  options: {
    swaggerDefinition: {
      info: {
        title: 'Genshin Public REST API 💘',
        version: '0.1.0',
      },

      basePath: '/api/v1',

      securityDefinitions: {
        Bearer: {
          type: 'apiKey',
          in: 'header',
          name: 'Authorization',
          description: 'Type "Bearer {paste your token}" in the field below',
        },
      },
    },

    apis: ['docs/**/*.yml'],
  },
}
