// class WhatsApp extends Mail {
//   constructor() {
//     super();
//     this.username = 'dicoding';
//     this.isBussinessAccount = true;
//   }
// }

//pemanggilan
// const wa1 = new WhatsApp('080111000222');

// class WhatsApp extends Mail {
//   constructor(username, isBussinessAccount, phoneNumber) {
//     super();
//     this.username = username;
//     this.isBussinessAccount = isBussinessAccount;
//   }
// }

// const wa1 = new WhatsApp('dicoding', true, '089989090898');

class Mail {
  constructor(author) {
    this.from = author;
    this._contacts = [];
  }

  sendMessage(msg, to) {
    console.log(`you send: ${msg} to ${to} from ${this.from}`);
    this._contacts.push(to);
  }

  showAllContacts() {
    return this._contacts;
  }
}

// class WhatsApp extends Mail {
//   constructor(username, isBussinessAccount, phoneNumber) {
//     super(phoneNumber);
//     this.username = username;
//     this.isBussinessAccount = isBussinessAccount;
//   }
// }

// const wa1 = new WhatsApp('dicoding', true, '6281111111');

// console.log(wa1.from); // undefined

class WhatsApp extends Mail {
  constructor(username, isBussinessAccount, phoneNumber) {
    super(phoneNumber);
    this.username = username;
    this.isBussinessAccount = isBussinessAccount;
  }

  // Overriding method => Melakukan Override Total
  sendMessage(msg, to) {
    super.sendMessage(msg, to);
    console.log('Send by WA');
  }
}

const wa1 = new WhatsApp('di', true, '089000999888');
wa1.sendMessage('halo', '089000999888');

/**
Output:
Send by WA
**/
