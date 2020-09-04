import data from '../../data/messages.json';

const load = () => {
  const currentMessages = data.messages.sort(function (a, b) {
    return a.timestamp > b.timestamp ? 1 : -1;
  });

  const app = $('#app');
  const messageBox = currentMessages.forEach(function (msg) {
    app.append(`<div class="msgBox">
                    <div class="msgLine">${msg.name}: ${msg.msg}</div>
                </div>`);
  });
};

export default { load };
