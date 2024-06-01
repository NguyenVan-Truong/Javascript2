// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // % lãi xuất
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

let currentAccount;
btnLogin.addEventListener('click', function (e) {
 // Prevent form from submitting
 e.preventDefault();
 currentAccount = accounts.find(
 acc => acc.username === inputLoginUsername.value
 );
 console.log(currentAccount);
 if (currentAccount?.pin === Number(inputLoginPin.value)) {
 // Display UI and message
 labelWelcome.textContent = `Welcome back, ${
 currentAccount.owner.split(' ')[0]
 }`;
 containerApp.style.opacity = 100;
 // Clear input fields
 inputLoginUsername.value = inputLoginPin.value = '';
 inputLoginPin.blur();
 // Update UI
 updateUI(currentAccount);
 }
});



   //1.
   const bankDepositSum = accounts
   .flatMap(acc => acc.movements)
   .filter(mov => mov > 0)
   .reduce((sum, cur) => sum + cur, 0);
   console.log(bankDepositSum);
   // 2.
   // const numDeposits1000 = accounts
   // .flatMap(acc => acc.movements)
   // .filter(mov => mov >= 1000).length;
   const numDeposits1000 = accounts
    .flatMap(acc => acc.movements)
    .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
   console.log(numDeposits1000);
   // Prefixed ++ oeprator
   let a = 10;
   console.log(++a);
   console.log(a);
   // 3.
   const { deposits, withdrawals } = accounts
    .flatMap(acc => acc.movements)
    .reduce(
    (sums, cur) => {
    // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
    sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
    return sums;
    },
    { deposits: 0, withdrawals: 0 }
    );
   console.log(deposits, withdrawals);
   // 4.
   // this is a nice title -> This Is a Nice Title
   const convertTitleCase = function (title) {
    const capitzalize = str => str[0].toUpperCase() + str.slice(1);
    const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in',
   'with'];
    const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitzalize(word)))
    .join(' ');
    return capitzalize(titleCase);
   };
   console.log(convertTitleCase('this is a nice title'));
   console.log(convertTitleCase('this is a LONG title but not too long'));
   console.log(convertTitleCase('and here is another title with an EXAMPLE'));