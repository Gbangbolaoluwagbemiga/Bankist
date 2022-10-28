'use strict';

const account1 = {
  owner: 'Gbangbola Oluwagbemiga',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1701,

  movementsDates: [
    '2022-11-18T21:31:17.178Z',
    '2022-12-23T07:42:02.383Z',
    '2022-01-28T09:15:04.904Z',
    '2022-04-01T10:17:24.185Z',
    '2022-05-08T14:11:59.604Z',
    '2022-07-26T17:01:17.194Z',
    '2022-07-28T23:36:17.929Z',
    '2022-08-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Awokoya opeyemi',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2020-02-01T13:15:33.035Z',
    '2022-01-30T09:48:16.867Z',
    '2022-02-25T06:04:23.907Z',
    '2022-04-25T14:18:46.235Z',
    '2022-01-05T16:33:06.386Z',
    '2022-04-10T14:43:26.374Z',
    '2022-05-25T18:49:59.371Z',
    '2022-01-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Okekeye Oluwatunmise',
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

/////////////////////////////////////////////////
// Elements
const icon = document.querySelectorAll('.icon');
const iconDismiss = document.querySelector('.icon__dismiss');
const hamIcon = document.querySelector('.ham--icon');
const logInUrl = document.querySelector('.login__url');
const inputSignUp = document.querySelector('.input__signUp');
const SignUpBtn = document.querySelector('.signUp__btn');
const loginBtn = document.querySelector('.login--btn');
const hamburger = document.querySelector('.hamsburger');
const signupName = document.querySelector('.input__signUp--name');
const formDetails = document.querySelector('.form--details');
const verifyInputSignUP = document.querySelector('.input__verifysignUp');
const errorMessage = document.querySelectorAll('.error__message');
const sideBar = document.querySelectorAll('.gen__style');
const sideBarContainer = document.querySelector('.detail--row');
const helper = document.getElementById('helper');
const Login = document.getElementById('log__in');
const signUp = document.getElementById('sign__up');
const signUpUrl = document.getElementById('signUp__url');
const helperUrl = document.getElementById('helper__url');
const Operations = document.querySelectorAll('.operation');

// additional elements
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
const login = document.querySelector('.login');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Dark mode

// Targetting of classes and id
const toggle = document.getElementById('toggler');
const theme = document.querySelector('.theme');
const element = document.querySelector('.styling');
const iconDark = document.querySelector('.icon__dark');

// function for toggling of color
const color = () => {
  element.classList.contains('Color-toggle')
    ? (theme.style.color = 'black')
    : (theme.style.color = 'white');
};

const colorFilter = () => {
  if (element.classList.contains('Color-toggle')) {
    for (let i = 0; i < Operations.length; i++) {
      Operations[i].style.filter = ` invert(1) hue-rotate(180deg)`;
      console.log('hi');
    }
  }
};

// function for toggling of text
const textDisplayed = () => {
  element.classList.contains('Color-toggle')
    ? (theme.textContent = 'Dark')
    : (theme.textContent = 'Light');
};

// function for toggling of icon
const icons = () => {
  iconDark.innerHTML = '';
  element.classList.contains('Color-toggle')
    ? (iconDark.innerHTML = `<i class="fa-solid fa-moon"></i>`)
    : (iconDark.innerHTML = `<i class="fa-solid fa-moon"></i>`);
};

// Events for controlling the toggle button
toggle.addEventListener('click', function () {
  element.classList.toggle('Color-toggle');
  textDisplayed();
  icons();
  color();
  colorFilter();
});

// loooping through icons item
for (let i = 0; i < icon.length; i++) {
  icon[i].addEventListener('click', function () {
    Login.classList.add('hidden');
    signUp.classList.add('hidden');
    helper.classList.add('hidden');
  });
}
// looping through the side bar
const callSidebar = function () {
  for (let i = 0; i < sideBar.length; i++) {
    sideBar[i].addEventListener('click', function () {
      formDetails.style.display = 'none';
      hamIcon.classList.remove('hidden');
      iconDismiss.classList.add('hidden');
    });
  }
};
// help function
helperUrl.addEventListener('click', function () {
  helper.classList.remove('hidden');
  console.log('hi');
});

logInUrl.addEventListener('click', function () {
  Login.classList.remove('hidden');
  containerApp.style.opacity = 0;
  if (!signUp.classList.contains('hidden')) {
    Login.classList.toggle('hidden');
  }
});
signUpUrl.addEventListener('click', function () {
  signUp.classList.remove('hidden');
  containerApp.style.opacity = 0;
  if (!Login.classList.contains('hidden')) {
    signUp.classList.toggle('hidden');
  }
});

const errMessage = function () {
  for (let i = 0; i < errorMessage.length; i++) {
    errorMessage[i].classList.remove('hidden');
  }
};

const verifier = function () {
  if (
    inputSignUp.value !== '' &&
    inputSignUp.value === verifyInputSignUP.value &&
    signupName.value !== ''
  ) {
    signUp.classList.add('hidden');
    const userFullName = signupName.value;
    const userId = userFullName
      .toUpperCase()
      .split(' ')
      .map(Name => Name[0])
      .join('');
    const ownerName = signupName.value;
    const ownerPin = +verifyInputSignUP.value;

    account2.owner = ownerName;
    account2.pin = ownerPin;
    account2.userName = userId;
    alert(`your user Id is ${userId}`);
    inputSignUp.value = verifyInputSignUP.value = '';
  } else {
    errMessage();
  }
};
SignUpBtn.addEventListener('click', function (e) {
  e.preventDefault();
  verifier();
});

let visible = true;
hamburger.addEventListener('click', function () {
  if (visible) {
    formDetails.style.display = 'block';
    hamIcon.classList.add('hidden');
    formDetails.classList.remove('col-3');
    iconDismiss.classList.remove('hidden');
  } else {
    formDetails.style.display = 'none';
    hamIcon.classList.remove('hidden');
    iconDismiss.classList.add('hidden');
  }
  visible = !visible;
  callSidebar();
});

// Timer
const startLogOutTimer = function () {
  let time = 120;
  const timer = setInterval(function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;
    if (time === 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = `Log in to get started`;
    }

    if (time <= 30) {
      labelTimer.style.color = ' rgb(247, 35, 35)';
    }
    time--;
  }, 1000);
};

const locale = navigator.language;

const formatCur = function (cur, movs) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: cur,
  }).format(movs);
};

const dateMovement = function (date) {
  const calcDays = (curDay, transactDay) =>
    Math.round(Math.abs((curDay - transactDay) / (1000 * 60 * 60 * 24)));
  const daysPassed = calcDays(new Date(), date);
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed > 2 && daysPassed <= 7) return `${daysPassed} days ago`;

  const day = `${date.getDate()}`.padStart(2, 0);
  const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const year = date.getFullYear();
  return `${day} / ${month} / ${year}`;
};

// Displayment of the UI
const displayMovements = function (acc, sorted = false) {
  containerMovements.innerHTML = '';

  const Arrange = sorted
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  Arrange.forEach((movs, i) => {
    const date = acc.movementsDates[i];
    const dates = new Date(date);
    const currentDate = dateMovement(dates);

    const type = movs > 0 ? 'deposit' : 'withdrawal';
    const color = movs > 0 ? '#d0dfd9a9' : '#f8d4d6e1';

    const html = `
                <div class="row movements__row" style=background-color:${color}>
                  <div class="col-4 movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
                  <div class="col-4 movements__date">${currentDate}</div>
                  <div class="col-4 movements__value">${formatCur(
                    account2.currency,
                    movs
                  )}</div>
                </div>`;

    {
      /* const html = ` <div class="movements__row" style=background-color:${color}>
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">${currentDate}</div>
    <div class="movements__value">${movs.toFixed(2)}</div>
  </div>
 `; */
    }

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//Creation of usernames
const userNames = function (accs) {
  accs.forEach(acc => {
    acc.userName = acc.owner
      .toUpperCase()
      .split(' ')
      .map(Name => Name[0])
      .join('');
  });
};
userNames(accounts);

// calculation of balance
const calcBalance = function (accs) {
  accs.balance = accs.movements.reduce((acc, movs) => {
    return acc + movs;
  }, 0);
  const totalBalance = accs.balance;
  labelBalance.textContent = `${formatCur(account2.currency, totalBalance)}`;
};

// Display Total money
const calcDisplaySummary = function (mov) {
  const income = mov.movements
    .filter(movs => movs > 0)
    .reduce((acc, movs) => acc + movs, 0);
  labelSumIn.textContent = `${formatCur(account2.currency, income)}`;
  const outcome = mov.movements
    .filter(movs => movs < 0)
    .reduce((acc, movs) => acc + movs, 0);
  labelSumOut.textContent = `${formatCur(account2.currency, outcome)}`;
  const interest = mov.movements
    .filter(movs => movs > 0)
    .map(movs => movs * mov.interestRate)
    .reduce((acc, movs) => acc + movs, 0);
  labelSumInterest.textContent = `${formatCur(account2.currency, interest)}`;
};

function updateUI() {
  displayMovements(currentAccount);
  calcBalance(currentAccount);
  calcDisplaySummary(currentAccount);
}

let currentAccount;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  const dates = new Date();

  // const day = `${dates.getDate()}`.padStart(2, 0);
  // const month = `${dates.getMonth() + 1}`.padStart(2, 0);
  // const year = dates.getFullYear();
  // const min = `${dates.getMinutes()}`.padStart(2, 0);
  // const hour = `${dates.getHours()}`.padStart(2, 0);
  // const currentDate = `${day} / ${month} / ${year}`;

  const options = {
    hour: 'numeric',
    minute: 'numeric',
    year: 'numeric',
    day: 'numeric',
    month: 'long',
    weekday: 'long',
  };

  labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(
    dates
  );
  console.log('hi');
  currentAccount = accounts.find(
    acc => acc.userName === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    containerApp.style.opacity = 100;
    Login.classList.add('hidden');
    labelWelcome.textContent = `You are welcome ${
      currentAccount.owner.split(' ')[0]
    }`;
    startLogOutTimer();
    updateUI();
  } else {
    errMessage();
  }
});
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  if (
    receiverAcc &&
    Number(inputTransferAmount.value) > 0 &&
    currentAccount.balance >= Number(inputTransferAmount.value) &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    const amount = Number(inputTransferAmount.value);

    currentAccount?.movements.push(-amount);
    receiverAcc?.movements.push(amount);

    const time = new Date();
    currentAccount?.movementsDates.push(time.toISOString());
    receiverAcc?.movementsDates.push(time.toISOString());

    updateUI();
  }
  inputTransferTo.value = inputTransferAmount.value = '';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);
  if (
    inputLoanAmount.value !== '' &&
    currentAccount.movements.some(movs => movs >= amount * 0.1)
  ) {
    setTimeout(function () {
      currentAccount.movements.push(amount);

      const time = new Date();
      currentAccount?.movementsDates.push(time.toISOString());

      inputLoanAmount.value = '';
      inputLoanAmount.blur();
      updateUI();
    }, 3000);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    currentAccount.pin === Number(inputClosePin.value) &&
    currentAccount.userName === inputCloseUsername.value
  ) {
    const accountNumber = accounts.findIndex(
      acc => acc.userName === inputCloseUsername.value
    );
    if (confirm(`Do you want to close ${currentAccount.owner}'s account`)) {
      accounts.splice(accountNumber, 1);
      containerApp.style.opacity = 0;
    }

    labelWelcome.textContent = `Log in to get started`;
  } else {
    inputClosePin.value = '';
    inputCloseUsername.value = '';
    inputClosePin.blur();
  }
});
let Sort = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !Sort);
  Sort = !Sort;
});
