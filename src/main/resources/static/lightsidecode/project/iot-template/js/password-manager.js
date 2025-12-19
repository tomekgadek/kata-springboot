class PasswordManager {
    static savePassword(password) {
        try {
            localStorage.setItem('userPassword', password);
        } catch (error) {
            console.error('Wystąpił błąd podczas zapisywania hasła użytkownika:', error);
        }
    }

    static getPassword() {
        try {
            const password = localStorage.getItem('userPassword');
            if (password === null) {
                return null;
            }

            return password;
        } catch (error) {
            return null;
        }
    }

    static clearPassword() {
        try {
            localStorage.removeItem('userPassword');
        } catch (error) {
            console.error('Wystąpił błąd podczas usuwania hasła użytkownika:', error);
        }
    }
}