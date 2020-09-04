import messages from '../../data/messages.json';
import chatApp from './chatApp';

let loggedIn;

const loadLogin = () => {
  $('#app').html('');
  $('#login').html(`
  <div class="loginWindow">
    <label for="userName">Username</label>
    <input id="userName"></input>
    <button id="loginSubmit" type="button">Submit </button>
  </div>
  `);
};

const loginError = () => {
  console.error('login Error');
  loggedIn = false;
  return loggedIn;
};

const checkUserName = (name) => {
  const nameCheck = Object.keys(messages).filter(
    (el) => el.toLowerCase() === name.toLowerCase()
  );
  if (nameCheck[0]) {
    const messageDisplay = messages[nameCheck].messages;
    chatApp.load(nameCheck, messageDisplay);
    loggedIn = true;
  } else {
    loginError();
  }
};

const loadListeners = () => {
  $('#loginSubmit').click(() => {
    checkUserName($('#userName').val());
  });

  $('#userName').keypress((evt) => {
    if (evt.which === 13) {
      checkUserName($('#userName').val());
    }
  });
};

export default { loadLogin, loadListeners, loggedIn };
