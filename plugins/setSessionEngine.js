import Session from '../services/session';

export default function ({ $cookies }) {
    if (Session.cookies === null) {
        Session.setEngine($cookies);
    }
}
