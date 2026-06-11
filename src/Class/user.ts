// --- Interfaces para los objetos anidados ---
interface Hair {
  color: string;
  type: string;
}

interface Coordinates {
  lat: number;
  lng: number;
}

interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates;
  country: string;
}

interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

interface CompanyAddress {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates;
  country: string;
}

interface Company {
  department: string;
  name: string;
  title: string;
  address: CompanyAddress;
}

interface Crypto {
  coin: string;
  wallet: string;
  network: string;
}

// --- Clase Principal ---
export class User {
  // Atributos privados
  private _id: number;
  private _firstName: string;
  private _lastName: string;
  private _maidenName: string;
  private _age: number;
  private _gender: string;
  private _email: string;
  private _phone: string;
  private _username: string;
  private _password: string;
  private _birthDate: string;
  private _image: string;
  private _bloodGroup: string;
  private _height: number;
  private _weight: number;
  private _eyeColor: string;
  private _hair: Hair;
  private _ip: string;
  private _address: Address;
  private _macAddress: string;
  private _university: string;
  private _bank: Bank;
  private _company: Company;
  private _ein: string;
  private _ssn: string;
  private _userAgent: string;
  private _crypto: Crypto;
  private _role: string;

  // Constructor vacío (inicializa valores por defecto)
  constructor() {
    this._id = 0;
    this._firstName = "";
    this._lastName = "";
    this._maidenName = "";
    this._age = 0;
    this._gender = "";
    this._email = "";
    this._phone = "";
    this._username = "";
    this._password = "";
    this._birthDate = "";
    this._image = "";
    this._bloodGroup = "";
    this._height = 0;
    this._weight = 0;
    this._eyeColor = "";
    this._hair = { color: "", type: "" };
    this._ip = "";
    this._address = {
      address: "",
      city: "",
      state: "",
      stateCode: "",
      postalCode: "",
      coordinates: { lat: 0, lng: 0 },
      country: ""
    };
    this._macAddress = "";
    this._university = "";
    this._bank = { cardExpire: "", cardNumber: "", cardType: "", currency: "", iban: "" };
    this._company = {
      department: "",
      name: "",
      title: "",
      address: { address: "", city: "", state: "", stateCode: "", postalCode: "", coordinates: { lat: 0, lng: 0 }, country: "" }
    };
    this._ein = "";
    this._ssn = "";
    this._userAgent = "";
    this._crypto = { coin: "", wallet: "", network: "" };
    this._role = "";
  }

  // --- Getters y Setters ---

  public get id(): number { return this._id; }
  public set id(value: number) { this._id = value; }

  public get firstName(): string { return this._firstName; }
  public set firstName(value: string) { this._firstName = value; }

  public get lastName(): string { return this._lastName; }
  public set lastName(value: string) { this._lastName = value; }

  public get maidenName(): string { return this._maidenName; }
  public set maidenName(value: string) { this._maidenName = value; }

  public get age(): number { return this._age; }
  public set age(value: number) { this._age = value; }

  public get gender(): string { return this._gender; }
  public set gender(value: string) { this._gender = value; }

  public get email(): string { return this._email; }
  public set email(value: string) { this._email = value; }

  public get phone(): string { return this._phone; }
  public set phone(value: string) { this._phone = value; }

  public get username(): string { return this._username; }
  public set username(value: string) { this._username = value; }

  public get password(): string { return this._password; }
  public set password(value: string) { this._password = value; }

  public get birthDate(): string { return this._birthDate; }
  public set birthDate(value: string) { this._birthDate = value; }

  public get image(): string { return this._image; }
  public set image(value: string) { this._image = value; }

  public get bloodGroup(): string { return this._bloodGroup; }
  public set bloodGroup(value: string) { this._bloodGroup = value; }

  public get height(): number { return this._height; }
  public set height(value: number) { this._height = value; }

  public get weight(): number { return this._weight; }
  public set weight(value: number) { this._weight = value; }

  public get eyeColor(): string { return this._eyeColor; }
  public set eyeColor(value: string) { this._eyeColor = value; }

  public get hair(): Hair { return this._hair; }
  public set hair(value: Hair) { this._hair = value; }

  public get ip(): string { return this._ip; }
  public set ip(value: string) { this._ip = value; }

  public get address(): Address { return this._address; }
  public set address(value: Address) { this._address = value; }

  public get macAddress(): string { return this._macAddress; }
  public set macAddress(value: string) { this._macAddress = value; }

  public get university(): string { return this._university; }
  public set university(value: string) { this._university = value; }

  public get bank(): Bank { return this._bank; }
  public set bank(value: Bank) { this._bank = value; }

  public get company(): Company { return this._company; }
  public set company(value: Company) { this._company = value; }

  public get ein(): string { return this._ein; }
  public set ein(value: string) { this._ein = value; }

  public get ssn(): string { return this._ssn; }
  public set ssn(value: string) { this._ssn = value; }

  public get userAgent(): string { return this._userAgent; }
  public set userAgent(value: string) { this._userAgent = value; }

  public get crypto(): Crypto { return this._crypto; }
  public set crypto(value: Crypto) { this._crypto = value; }

  public get role(): string { return this._role; }
  public set role(value: string) { this._role = value; }
}
