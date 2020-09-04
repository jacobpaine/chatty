import navBar from './navBar';
import messageBox from './messageBox';

const load = (name) => {
  const app = $('#app');
  $('.loginWindow').html('');
  app.append(navBar.load(name));
  navBar.loadListeners(name);
  app.append(messageBox.load());
};

export default { load };
