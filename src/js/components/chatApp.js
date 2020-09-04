import navBar from './navBar';
import messageBox from './messageBox';

const load = (name, messages) => {
  const app = $('#app');
  $('.loginWindow').html('');
  app.append(navBar.load, messageBox.load);
};

export default { load };
