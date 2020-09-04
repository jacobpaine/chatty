import loginPage from './components/loginPage';

let loggedIn = false;

// function showNavBar() {
//   console.log('showNav');
// }

const init = () => {
  if (!loggedIn) {
    loginPage.loadLogin();
    loginPage.loadListeners();
    loggedIn = loginPage.loggedIn;
  }
};

init();
