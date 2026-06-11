
export interface PostReactions {
  likes: number;
  dislikes: number;
}

export class Post {
  private _id: number = 0;
  private _title: string = '';
  private _body: string = '';
  private _tags: string[] = [];
  private _reactions: PostReactions = { likes: 0, dislikes: 0 };
  private _views: number = 0;
  private _userId: number = 0;

  // Constructor vacío
  constructor() {}

  // ID
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }

  // Title
  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }

  // Body
  get body(): string {
    return this._body;
  }
  set body(value: string) {
    this._body = value;
  }

  // Tags
  get tags(): string[] {
    return this._tags;
  }
  set tags(value: string[]) {
    this._tags = value;
  }

  // Reactions
  get reactions(): PostReactions {
    return this._reactions;
  }
  set reactions(value: PostReactions) {
    this._reactions = value;
  }

  // Views
  get views(): number {
    return this._views;
  }
  set views(value: number) {
    this._views = value;
  }

  // UserId
  get userId(): number {
    return this._userId;
  }
  set userId(value: number) {
    this._userId = value;
  }
}
