export default function ({ store, redirect }) {
    if (!store.state.auth.logged_in || (store.state.auth.usuario === null && store.state.auth.logged_in)) {
        return redirect('/login');
    }
}
