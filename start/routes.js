'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

const Env = use('Env')
const appUrl = Env.get('APP_URL')

Route.get('/', ({ request }) => {
  return {
    greeting: 'Welcome to the Genshin Public REST API!',
    link: `Access our documentation: ${appUrl}/docs`,
  }
})

Route.group(() => {
  Route.post('auth/login', 'UserController.login').middleware('guest')
  Route.post('auth/register', 'UserController.store').validator('StoreUser')
}).prefix('api/v1')
