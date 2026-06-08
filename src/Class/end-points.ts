export class EndPoints {
    private URL:string = "https://dummyjson.com";
    private USERS:string = `${this.URL}/users`;
    private LOGIN:string = `${this.URL}/user/login`;
    private AUTHENTICATED:string = `${this.URL}/user/me`;

    constructor() {}

    get getUrl():string {
        return this.URL;
    }

    get getUser():string {
        return this.USERS;
    }

    get getLogin(): string {
        return this.LOGIN;
    }

    get getAuthenticated():string {
        return this.AUTHENTICATED;
    }
}
