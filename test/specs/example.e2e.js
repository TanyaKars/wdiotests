import LoginPage from '../pageobjects/login.page.js';
import ProfilePage from '../pageobjects/profile.page.js';


describe('Auth', () => {
    beforeEach( () =>{
        LoginPage.open();
    });
    afterEach(() => {
        browser.execute('window.localStorage.clear()')
    });

    it('User login with valid data', () => {

        LoginPage.setLogin('nawopav413@gameqo.com');
        LoginPage.setPassword('qwerty');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });

    it('submit button is disabled if login and password are absent',() =>{
        LoginPage.SubmitButtonIsDisabled();
    });

    it('Error message appears if password incorrect',() => {
        LoginPage.setLogin('nawopav413@gameqo.com');
        LoginPage.setWrongPassword('lakhb');
        LoginPage.clickSubmitButton();
        LoginPage.setError();

    });

});

