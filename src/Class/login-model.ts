export class LoginModel {

    private username:string = "";
    private password:string = "";

    constructor() {}

    get getUsername():string {
        return this.username;
    }

    set setUsername(username:string) {
        this.username = username;
    }

    get getPassword():string {
        return this.password;
    }

    set setPassword(password:string) {
        this.password = password;
    }
}
