import {
    Encrypt,
    Decrypt
} from './dec'

console.log(Encrypt(111));

export default {
    getItem(key) {
        if (!key) {
            return;
        }
        console.log(Encrypt(key));



        return JSON.parse(Decrypt(localStorage.getItem(Encrypt(key))))
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