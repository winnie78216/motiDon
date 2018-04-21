import firebase from '../firebase/firebaseSetting';
import config from '../configs/config';
import store from "../store/store";
import { setAuthCheckTrue, setUserName } from "../appState/appStateActionCreator";

var co = require('co');

const email = document.getElementById('email');
const password = document.getElementById('password');

const inputFields = [email, password];

function reset() {
    email.classList.remove('error', 'semi-bold');
    password.classList.remove('error', 'semi-bold');
}

function showError(errorMsg) {
    document.getElementById('error-message').innerHTML = errorMsg;
}

function fireBaseLogin(email, password) {
    return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
            return firebase.auth().signInWithEmailAndPassword(email, password)
        }
        )
        .catch(function (error) {
            throw new Error(error.message);
        });
}

export function login() {
    co(function* () {
        const email = document.getElementsByClassName('login-input')[0].value
        const password = document.getElementsByClassName('login-input')[1].value
        const user = yield fireBaseLogin(email, password); // throw error if failed to login
        const token = yield user.getIdToken();
        //document.getElementsByClassName('login-panel')[0].style.display="none"
        document.cookie = config.cookie.jwt + '=' + token + '; path=/;' + (config.cookie.domain || '');
        window.location.replace('/home')

    }).catch(error => {
        showError(error.message);
    });

}
window.login = login;