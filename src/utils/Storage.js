import {
    Encrypt,
    Decrypt
} from './dec'

export default {
    getItem(key) {
        if (!key) {
            return;
        }
        console.log(Encrypt(key));
        let data = localStorage.getItem(Encrypt(key))
        if (data) {
            return JSON.parse(Decrypt(data))
        }
    },
    setItem(key, value) {
        if (!key || !value) {
            return;
        }
        let dv = JSON.stringify(value)
        localStorage.setItem(Encrypt(key), Encrypt(dv))
    },
    removeItem(key) {
        localStorage.removeItem(key)
    },
    clear() {
        localStorage.clear();
    }
}