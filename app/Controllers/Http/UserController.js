'use strict'

class UserController {
    async login ({ auth, request }) {
        const { email, password } = request.all();
        await auth.attempt(email, password);

        return 'Logged in successfully';
    }

    show ({ auth, params}) {
        if (auth.user.id !== Number(params.id)) {
            return "You cannot see someone else's profile";
        }
        return auth.user;
    }
}

module.exports = UserController
