import { DatabaseAPI } from "../databaseAPI";
import { User } from "../user/controller";

export class ManagerModel {
    private currentUser: User;
    
    async loadLoggedInUser() {
        const currentUserId = this.getUserCookie();
        if (currentUserId === -1)
            this.currentUser = null;
        else {
            this.currentUser = await DatabaseAPI.getUserById(Number(currentUserId));
        }
    }

    getCurrentUser(): User {
        return this.currentUser;
    }

    setUserCookie(id: number) {
        if (this.currentUser === null)
            return;

        var d = new Date();
        d.setTime(d.getTime() + (7*24*60*60*1000));     // expires in 7 days
        var expires = 'expires='+ d.toUTCString();
        document.cookie = `userId=${id}; expires=${expires}; path=/;`;
    }

    /**
     * @returns user's id stored in cookies (or -1 if there's no cookie)
     */
    getUserCookie(): number {
        var name = 'userId=';
        var decodedCookie = decodeURIComponent(document.cookie);
        var cookieArray = decodedCookie.split(';');
        for (var i=0; i<cookieArray.length; i++) {
            var cookie = cookieArray[i];
            while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1);
              }

            if (cookie.indexOf(name) == 0) {
                return Number(cookie.substring(name.length, cookie.length));
            }
        }        
        return -1;
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

        if (nickname.length < 4 || nickname.length > 15)
            return false;

        if (password.length < 4 || password.length > 15)
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

        // save current user in cookies
        this.currentUser = user;
        this.setUserCookie(this.currentUser.model.getId());
        return 'success';
    }

    /**
     * @returns a sign up result message ('success' if login successful)
     */
    async trySignUpUser(nickname: string, password: string): Promise<string> {
        const userWithSameNickname = await DatabaseAPI.getUserByNickname(nickname);
        if (userWithSameNickname !== null)
            return 'nickname already taken';

        const newUser = await DatabaseAPI.addUser(nickname, password);

        // save current user in cookies
        this.currentUser = await DatabaseAPI.getUserById(newUser.id);
        this.setUserCookie(this.currentUser.model.getId());
        return 'success';
    }

    logoutUser() {
        document.cookie = 'userId=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
        location.reload();
    }
}