export class User {
  private id: any = null;
  private firstName: string = '';
  private lastName: string = '';
  private maidenName: string = '';
  private age: number = 0;
  private gender: string = '';
  private email: string = '';
  private phone: string = '';
  private username: string = '';
  private password: string = '';
  private birthDate: string = '';
  private image: string = '';
  private bloodGroup: string = '';
  private height: number = 0;
  private weight: number = 0;
  private eyeColor: string = '';
  private hair: { color: string; type: string } = { color: '', type: '' };
  private ip: string = '';
  private address: {
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
  private macAddress: string = '';
  private university: string = '';
  private bank: {
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
  private company: {
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
  private ein: string = '';
  private ssn: string = '';
  private userAgent: string = '';
  private crypto: { coin: string; wallet: string; network: string } = { coin: '', wallet: '', network: '' };
  private role: string = '';

  // Constructor que permite instanciar vacío o con datos de la petición
  constructor(data?: any) {
    if (data) {
      this.fill(data);
    }
  }

  // Método para rellenar o actualizar los datos limpiamente
  public fill(data: any): void {
    this.setid = data.id ?? null;
    this.setfirstName = data.firstName ?? '';
    this.setlastName = data.lastName ?? '';
    this.setmaidenName = data.maidenName ?? '';
    this.setage = data.age ?? 0;
    this.setgender = data.gender ?? '';
    this.setemail = data.email ?? '';
    this.setphone = data.phone ?? '';
    this.setusername = data.username ?? '';
    this.setpassword = data.password ?? '';
    this.setbirthDate = data.birthDate ?? '';
    this.setimage = data.image ?? '';
    this.setbloodGroup = data.bloodGroup ?? '';
    this.setheight = data.height ?? 0;
    this.setweight = data.weight ?? 0;
    this.seteyeColor = data.eyeColor ?? '';
    this.sethair = data.hair ?? { color: '', type: '' };
    this.setip = data.ip ?? '';
    this.setaddress = data.address ?? { address: '', city: '', state: '', stateCode: '', postalCode: '', coordinates: { lat: 0, lng: 0 }, country: '' };
    this.setmacAddress = data.macAddress ?? '';
    this.setuniversity = data.university ?? '';
    this.setbank = data.bank ?? { cardExpire: '', cardNumber: '', cardType: '', currency: '', iban: '' };
    this.setcompany = data.company ?? { department: '', name: '', title: '', address: { address: '', city: '', state: '', stateCode: '', postalCode: '', coordinates: { lat: 0, lng: 0 }, country: '' } };
    this.setein = data.ein ?? '';
    this.setssn = data.ssn ?? '';
    this.setuserAgent = data.userAgent ?? '';
    this.setcrypto = data.crypto ?? { coin: '', wallet: '', network: '' };
    this.setrole = data.role ?? '';
  }

  // --- GETTERS Y SETTERS ---

  get getid(): number { return this.id; }
  set setid(value: number) { this.id = value; }

  get getfirstName(): string { return this.firstName; }
  set setfirstName(value: string) { this.firstName = value; }

  get getlastName(): string { return this.lastName; }
  set setlastName(value: string) { this.lastName = value; }

  get getmaidenName(): string { return this.maidenName; }
  set setmaidenName(value: string) { this.maidenName = value; }

  get getage(): number { return this.age; }
  set setage(value: number) { this.age = value; }

  get getgender(): string { return this.gender; }
  set setgender(value: string) { this.gender = value; }

  get getemail(): string { return this.email; }
  set setemail(value: string) { this.email = value; }

  get getphone(): string { return this.phone; }
  set setphone(value: string) { this.phone = value; }

  get getusername(): string { return this.username; }
  set setusername(value: string) { this.username = value; }

  get getpassword(): string { return this.password; }
  set setpassword(value: string) { this.password = value; }

  get getbirthDate(): string { return this.birthDate; }
  set setbirthDate(value: string) { this.birthDate = value; }

  get getimage(): string { return this.image; }
  set setimage(value: string) { this.image = value; }

  get getbloodGroup(): string { return this.bloodGroup; }
  set setbloodGroup(value: string) { this.bloodGroup = value; }

  get getheight(): number { return this.height; }
  set setheight(value: number) { this.height = value; }

  get getweight(): number { return this.weight; }
  set setweight(value: number) { this.weight = value; }

  get geteyeColor(): string { return this.eyeColor; }
  set seteyeColor(value: string) { this.eyeColor = value; }

  get gethair(): { color: string; type: string } { return this.hair; }
  set sethair(value: { color: string; type: string }) { this.hair = value; }

  get getip(): string { return this.ip; }
  set setip(value: string) { this.ip = value; }

  get getaddress(): { address: string; city: string; state: string; stateCode: string; postalCode: string; coordinates: { lat: number; lng: number }; country: string } {
    return this.address;
  }
  set setaddress(value: { address: string; city: string; state: string; stateCode: string; postalCode: string; coordinates: { lat: number; lng: number }; country: string }) {
    this.address = value;
  }

  get getmacAddress(): string { return this.macAddress; }
  set setmacAddress(value: string) { this.macAddress = value; }

  get getuniversity(): string { return this.university; }
  set setuniversity(value: string) { this.university = value; }

  get getbank(): { cardExpire: string; cardNumber: string; cardType: string; currency: string; iban: string } { return this.bank; }
  set setbank(value: { cardExpire: string; cardNumber: string; cardType: string; currency: string; iban: string }) { this.bank = value; }

  get getcompany(): { department: string; name: string; title: string; address: { address: string; city: string; state: string; stateCode: string; postalCode: string; coordinates: { lat: number; lng: number }; country: string } } {
    return this.company;
  }
  set setcompany(value: { department: string; name: string; title: string; address: { address: string; city: string; state: string; stateCode: string; postalCode: string; coordinates: { lat: number; lng: number }; country: string } }) {
    this.company = value;
  }

  get getein(): string { return this.ein; }
  set setein(value: string) { this.ein = value; }

  get getssn(): string { return this.ssn; }
  set setssn(value: string) { this.ssn = value; }

  get getuserAgent(): string { return this.userAgent; }
  set setuserAgent(value: string) { this.userAgent = value; }

  get getcrypto(): { coin: string; wallet: string; network: string } { return this.crypto; }
  set setcrypto(value: { coin: string; wallet: string; network: string }) { this.crypto = value; }

  get getrole(): string { return this.role; }
  set setrole(value: string) { this.role = value; }
}