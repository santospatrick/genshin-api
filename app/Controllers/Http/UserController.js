'use strict'

const User = use('App/Models/User')

class UserController {
  async login({ auth, request }) {
    const { email, password } = request.all()
    return auth.attempt(email, password)
  }

  show({ auth, params }) {
    if (auth.user.id !== Number(params.id)) {
      return "You cannot see someone else's profile"
    }
    return auth.user
  }

  async store({ auth, request }) {
    const data = request.only(['email', 'password', 'username'])
    const user = await User.create(data)
    const token = await auth.attempt(user.email, data.password)

    const body = Object.assign({}, user.toJSON(), { token })

    return body
  }
}

module.exports = UserController
