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
    const { email, password, username } = request.all()

    const user = new User()

    user.email = email
    user.password = password
    user.username = username

    await user.save()

    const token = await auth.attempt(user.email, password)

    const body = Object.assign({}, user.toJSON(), { token })

    delete body.password

    return body
  }
}

module.exports = UserController
