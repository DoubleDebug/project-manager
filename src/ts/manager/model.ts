import { DatabaseAPI } from "../databaseAPI";
import { User } from "../user/controller";

export class ManagerModel {
    private currentUser: User;

    constructor() {
        const currentUserId = this.getUserCookie();

        if (currentUserId === '')
            this.currentUser = null;
        else {
            DatabaseAPI.getUserById(Number(currentUserId)).then((user: User) => {
                this.currentUser = user;
                console.log(user);
            });
        }
    }

    setUserCookie(id: number) {
        if (this.currentUser === null)
            return;

        var d = new Date();
        d.setTime(d.getTime() + (7*24*60*60*1000));     // expires in 7 days
        var expires = 'expires='+ d.toUTCString();
        document.cookie = `userId=${id}; expires=${expires}; path=/;`;
    }

    getUserCookie() {
        var name = 'userId=';
        var decodedCookie = decodeURIComponent(document.cookie);
        var cookieArray = decodedCookie.split(';');
        cookieArray.forEach(cookie => {
            while (cookie.charAt(0) == ' ') {
              cookie = cookie.substring(1);
            }
            if (cookie.indexOf(name) == 0) {
              return cookie.substring(name.length, cookie.length);
            }
        });
        return '';
    }

    /**
     * Nicknames can consist of:
     * lower case letters,
     * upper case letters,
     * numbers,
     * underscores and
     * dots.
     */
    validateInputData(nickname: string, password: string): boolean {
        if (nickname === '' || password === '')
            return false;

        const matchesRegex = /^[a-zA-Z0-9_\.]+$/.exec(nickname);
        return (matchesRegex !== null);
    }

    /**
     * @returns a login result message ('success' if login successful)
     */
    async tryLoginUser(nickname: string, password: string): Promise<string> {
        const user = await DatabaseAPI.getUserByNickname(nickname);
        if (user === null)
            return 'user doesn\'t exist';

        if (user.model.getPassword() !== password)
            return 'wrong password';

        this.currentUser = user;
        this.setUserCookie(this.currentUser.model.getId());
        return 'success';
    }

    /**
     * @returns a sign up result message ('success' if login successful)
     */
    async trySignUpUser(nickname: string, password: string): Promise<string> {
        const response = await DatabaseAPI.addUser(nickname, password);
        console.log(response);
        return '';
    }
}