import Page from './page';

class LoginPage extends Page {

    get inputUsername () { return $('#normal_login_email'); }
    get inputPassword () { return $('#normal_login_password'); }
    get SubmitButton () { return $('.login-form-button'); }

    setLogin (email){
        this.inputUsername.setValue(email);
    }

    setPassword (password){
        this.inputPassword.setValue(password);
    }

    clickSubmitButton (){
        this.SubmitButton.click();
    }

    open () {
        return super.open('/');
    }
}

export default new LoginPage();
