import Session from '../services/session';

export const actions = {
    async nuxtServerInit({ state, commit, dispatch }, { $cookies }) {
        if (process.server && state.auth.logged_in === false) {
            Session.setEngine($cookies);
            const user = await Session.autoLogin();

            if (user) {
                dispatch('auth/setUser', user);
            }
        }
    },
};
