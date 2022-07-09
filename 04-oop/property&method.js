// cara 1
class Mail {
  constructor() {
    this.from = 'pengirim@dicoding.com';
    this.contacts = [];
    this.yourOtherProperty = 'the values';
  }
  sendMessage(msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
    this.contacts.push(to); // menyimpan kontak baru
  }
}

// cara 2
function Mail() {
  this.from = 'pengirim@dicoding.com';
  this.contacts = [];
  this.yourOtherPrototype = 'the values';
}

Mail.prototype.sendMessage = function (msg, to) {
  console.log(`you send: ${msg} to  ${to} from ${this.from}`);
  this.contacts.push(to); // menyimpan kontak baru
};

class Mail {
  constructor() {
    this.from = 'pengirim@dicoding.com';
    this.contacts = [];
  }
  sendMessage(msg, to, from) {
    console.log(`you send: ${msg} to ${to} from ${from}`);
    // from di sini merujuk ke `from` parameter, bukan ke `from` dari global value yaitu pengirim@dicoding.com
    this.contacts.push(to);
  }
}

const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com', 'aku@gmail.com');

/**
you send: hallo to penerima@dicoding.com from aku@gmail.com
**/

/** 
cara 1, menggunakan var (hanya dapat digunakan pada penulisan kelas menggunakan statement `function`)
**/
var contacts = [];
// contoh
function Mail() {
  this.from = 'pengirim@dicoding.com';
  var contacts = [];
}

/**
cara 2, cara ini dapat digunakan pada penulisan kelas menggunakan statement `function` dan `class`
**/
this._contacts = [];
// contoh
class Mail {
  constructor() {
    this._contacts = [];
    this.from = 'pengirim@dicoding.com';
  }
}

/** 
cara 3, menambahkan prefix # , cara ini dapat digunakan pada penulisan kelas menggunakan statement `class` saja 
  **/
contacts = [];
// contoh
class Mail {
  contacts = [];
  constructor() {
    this.from = 'pengirim@dicoding.com';
  }
}

//

class Mail {
  static isValidPhone(phone) {
    return typeof phone === 'number';
  }
}

// cara 1, jika kita menggunakan statement class
class Mail2 {
  constructor(params1, params2) {
    this.yourPropertyName = params1;
    // do something here
  }
}

// cara 2, jika kita menggunakan statement function
function Mail2(params1, params2) {
  this.yourPropertyName = params1;
  // do something here
}

// cara 1
class Mail {
  constructor(author) {
    this.from = author;
    console.log('is instantiated', author);
  }
}

// cara 2
function Mail(author) {
  this.from = author;
  console.log('is instantiated', author);
}

// const mail1 = new Mail('emailku@dicoding.com');

// const mail1 = new Mail(085000111222); // misalkan untuk SMS
const mail2 = new Mail('emailku@dicoding.com'); // misalkan untuk Email
