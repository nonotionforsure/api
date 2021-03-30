'use strict'
const User = use("App/Models/User")

class AuthController {

    async register({ request, response }) {
        try {
            const data = request.only(['username', 'email', 'password']);
            const user = await User.create(data);
            return user;
        }
        catch (error) {
            response.status(500).send("Erro ao cadastrar usuário")
        }
    }
    async authenticate({ request, auth, response }) {
        try {
            const { email, password } = request.all();
            const token = await auth.attempt(email, password);
            const user = await User.findBy({ email })
            return { token, user }

        }
        catch (error) {
            response.status(500).send("Erro ao autenticar senha")
        }

    }
}

module.exports = AuthController
