import data from '../../data/messages.json';
import messageBox from './messageBox';

const app = $('#app');
const load = (name) => {
  const navbar = `<nav>
            <div>Logo</div>
            <div> Hey ${name}</div>
            <input id='addMessage' placeholder="Chat here..."></input>
            <button id="submitMessage">Chat!</button>
            <button id="clearMessages">Clear</button>
          </nav>`;
  return navbar;
};

const add = (name, msg) => {
  const timestamp = String(Date.now());
  data.messages.push({ name, msg, timestamp });
  console.log(data.messages);
  app.append(messageBox.load());
};

const loadListeners = (name) => {
  $('#submitMessage').click(() => {
    const message = $('#addMessage');
    add(name, message.val());
  });

  $('#addMessage').keypress((evt) => {
    if (evt.which === 13) {
      const message = $('#addMessage');
      add(name, message.val());
    }
  });
  $('#clearMessages').click(() => {
    console.log('clear Page');
  });
};

export default { load, loadListeners };
