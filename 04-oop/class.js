function Mail() {
  this.from = 'pengirim@dicoding.com';
}

Mail.prototype.sendMessage = function n(msg, to) {
  console.log(`you send: ${msg} to ${to} from ${this.from}`);
};

function Mail() {
  (this.from = 'pengirim@dicoding.com'),
    (this.sendMessage = function (msg, to) {
      console.log(`you send: ${msg} to ${to} from ${this.from}`);
    });
}

// pemanggilan

const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com');

/**
output:
you send: hallo to penerima@dicoding.com from pengirim@dicoding.com
**/

// menggunakan prototype
const mail = new Mail();
mail.hasOwnProperty('sendMessage');
// hasilnya = false

// tanpa prototype
// const mail = new Mail();
mail.hasOwnProperty('sendMessage');
// hasilnya = true
