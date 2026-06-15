export class User {
  private _id: number = 0;
  private _firstName: string = '';
  private _lastName: string = '';
  private _maidenName: string = '';
  private _age: number = 0;
  private _gender: string = '';
  private _email: string = '';
  private _phone: string = '';
  private _username: string = '';
  private _password: string = '';
  private _birthDate: string = '';
  private _image: string = '';
  private _bloodGroup: string = '';
  private _height: number = 0;
  private _weight: number = 0;
  private _eyeColor: string = '';
  private _hair: { color: string; type: string } = { color: '', type: '' };
  private _ip: string = '';
  private _address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: { lat: number; lng: number };
    country: string;
  } = {
    address: '',
    city: '',
    state: '',
    stateCode: '',
    postalCode: '',
    coordinates: { lat: 0, lng: 0 },
    country: ''
  };
  private _macAddress: string = '';
  private _university: string = '';
  private _bank: {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
  } = {
    cardExpire: '',
    cardNumber: '',
    cardType: '',
    currency: '',
    iban: ''
  };
  private _company: {
    department: string;
    name: string;
    title: string;
    address: {
      address: string;
      city: string;
      state: string;
      stateCode: string;
      postalCode: string;
      coordinates: { lat: number; lng: number };
      country: string;
    };
  } = {
    department: '',
    name: '',
    title: '',
    address: {
      address: '',
      city: '',
      state: '',
      stateCode: '',
      postalCode: '',
      coordinates: { lat: 0, lng: 0 },
      country: ''
    }
  };
  private _ein: string = '';
  private _ssn: string = '';
  private _userAgent: string = '';
  private _crypto: { coin: string; wallet: string; network: string } = { coin: '', wallet: '', network: '' };
  private _role: string = '';

  // Constructor que permite instanciar vacío o con datos de la petición
  constructor(data?: any) {
    if (data) {
      this.fill(data);
    }
  }

  // Método para rellenar o actualizar los datos limpiamente
  public fill(data: any): void {
    this.id = data.id ?? 0;
    this.firstName = data.firstName ?? '';
    this.lastName = data.lastName ?? '';
    this.maidenName = data.maidenName ?? '';
    this.age = data.age ?? 0;
    this.gender = data.gender ?? '';
    this.email = data.email ?? '';
    this.phone = data.phone ?? '';
    this.username = data.username ?? '';
    this.password = data.password ?? '';
    this.birthDate = data.birthDate ?? '';
    this.image = data.image ?? '';
    this.bloodGroup = data.bloodGroup ?? '';
    this.height = data.height ?? 0;
    this.weight = data.weight ?? 0;
    this.eyeColor = data.eyeColor ?? '';
    this.hair = data.hair ?? { color: '', type: '' };
    this.ip = data.ip ?? '';
    this.address = data.address ?? { address: '', city: '', state: '', stateCode: '', postalCode: '', coordinates: { lat: 0, lng: 0 }, country: '' };
    this.macAddress = data.macAddress ?? '';
    this.university = data.university ?? '';
    this.bank = data.bank ?? { cardExpire: '', cardNumber: '', cardType: '', currency: '', iban: '' };
    this.company = data.company ?? { department: '', name: '', title: '', address: { address: '', city: '', state: '', stateCode: '', postalCode: '', coordinates: { lat: 0, lng: 0 }, country: '' } };
    this.ein = data.ein ?? '';
    this.ssn = data.ssn ?? '';
    this.userAgent = data.userAgent ?? '';
    this.crypto = data.crypto ?? { coin: '', wallet: '', network: '' };
    this.role = data.role ?? '';
  }

  // --- GETTERS Y SETTERS ---

  get id(): number { return this._id; }
  set id(value: number) { this._id = value; }

  get firstName(): string { return this._firstName; }
  set firstName(value: string) { this._firstName = value; }

  get lastName(): string { return this._lastName; }
  set lastName(value: string) { this._lastName = value; }

  get maidenName(): string { return this._maidenName; }
  set maidenName(value: string) { this._maidenName = value; }

  get age(): number { return this._age; }
  set age(value: number) { this._age = value; }

  get gender(): string { return this._gender; }
  set gender(value: string) { this._gender = value; }

  get email(): string { return this._email; }
  set email(value: string) { this._email = value; }

  get phone(): string { return this._phone; }
  set phone(value: string) { this._phone = value; }

  get username(): string { return this._username; }
  set username(value: string) { this._username = value; }

  get password(): string { return this._password; }
  set password(value: string) { this._password = value; }

  get birthDate(): string { return this._birthDate; }
  set birthDate(value: string) { this._birthDate = value; }

  get image(): string { return this._image; }
  set image(value: string) { this._image = value; }

  get bloodGroup(): string { return this._bloodGroup; }
  set bloodGroup(value: string) { this._bloodGroup = value; }

  get height(): number { return this._height; }
  set height(value: number) { this._height = value; }

  get weight(): number { return this._weight; }
  set weight(value: number) { this._weight = value; }

  get eyeColor(): string { return this._eyeColor; }
  set eyeColor(value: string) { this._eyeColor = value; }

  get hair(): { color: string; type: string } { return this._hair; }
  set hair(value: { color: string; type: string }) { this._hair = value; }

  get ip(): string { return this._ip; }
  set ip(value: string) { this._ip = value; }

  get address(): { address: string; city: string; state: string; stateCode: string; postalCode: string; coordinates: { lat: number; lng: number }; country: string } {
    return this._address;
  }
  set address(value: { address: string; city: string; state: string; stateCode: string; postalCode: string; coordinates: { lat: number; lng: number }; country: string }) {
    this._address = value;
  }

  get macAddress(): string { return this._macAddress; }
  set macAddress(value: string) { this._macAddress = value; }

  get university(): string { return this._university; }
  set university(value: string) { this._university = value; }

  get bank(): { cardExpire: string; cardNumber: string; cardType: string; currency: string; iban: string } { return this._bank; }
  set bank(value: { cardExpire: string; cardNumber: string; cardType: string; currency: string; iban: string }) { this._bank = value; }

  get company(): { department: string; name: string; title: string; address: { address: string; city: string; state: string; stateCode: string; postalCode: string; coordinates: { lat: number; lng: number }; country: string } } {
    return this._company;
  }
  set company(value: { department: string; name: string; title: string; address: { address: string; city: string; state: string; stateCode: string; postalCode: string; coordinates: { lat: number; lng: number }; country: string } }) {
    this._company = value;
  }

  get ein(): string { return this._ein; }
  set ein(value: string) { this._ein = value; }

  get ssn(): string { return this._ssn; }
  set ssn(value: string) { this._ssn = value; }

  get userAgent(): string { return this._userAgent; }
  set userAgent(value: string) { this._userAgent = value; }

  get crypto(): { coin: string; wallet: string; network: string } { return this._crypto; }
  set crypto(value: { coin: string; wallet: string; network: string }) { this._crypto = value; }

  get role(): string { return this._role; }
  set role(value: string) { this._role = value; }
}