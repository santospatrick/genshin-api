'use strict'

class StoreUser {
  get validateAll() {
    return true
  }

  get sanitizationRules() {
    return {
      email: 'normalize_email',
    }
  }

  get rules() {
    return {
      email: 'required|email|unique:users',
      username: 'required',
      password: 'required',
    }
  }

  async fails(errorMessages) {
    const errorsAsObject = errorMessages.reduce((acc, next) => {
      acc[next.field] = next.message
      return acc
    }, {})

    return this.ctx.response.status(422).send(errorsAsObject)
  }
}

module.exports = StoreUser
