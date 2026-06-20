export class EndPoints {
    private URL:string = "https://dummyjson.com";
    private USERS:string = `${this.URL}/users`;
    private LOGIN:string = `${this.URL}/user/login`;
    private AUTHENTICATED:string = `${this.URL}/user/me`;
    private POSTS:string = `${this.URL}/posts`;
    private TAGS:string = `${this.URL}/posts/tags`;
    private QUOTES:string = `${this.URL}/quotes/random`;

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

    get getPost():string {
        return this.POSTS;
    }

    get getTags():string {
        return this.TAGS;
    }

    get getQuotes():string {
        return this.QUOTES;
    }
}
