import Api from './api';

class Session {
    cookies = null;

    setEngine(engine) {
        this.cookies = engine;
    }

    save(token) {
        if (typeof token === 'string' && token.length > 0) {
            this.cookies.set('token', token);
        } else {
            this.clear();
            throw new Error('Invalid Token');
        }
    }

    clear() {
        this.cookies.remove('token');
    }

    autoLogin() {
        const token = this.cookies.get('token');

        if (typeof token === 'string' && token.length > 0) {
            return Api.loginWithToken(token)
                .then((user) => {
                    console.log(user);
                    this.save(user.Token.token);

                    return user;
                })
                .catch((_) => {
                    this.clear();
                    console.error('Invalid session Token');
                    return false;
                });
        }

        return false;
    }
}

export default new Session();
