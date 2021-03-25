import Page from './page.js';

class LoginPage extends Page {

    get inputUsername () { return $('#normal_login_email'); }
    get inputPassword () { return $('#normal_login_password'); }
    get SubmitButton () { return $('.login-form-button'); }
    get InputWrongPassword () { return $('#normal_login_password');}
    get ErrorMessage () {return $('.ant-notification-notice-message');}

    setLogin (email){
        this.inputUsername.setValue(email);
    }

    setPassword (password){
        this.inputPassword.setValue(password);
    }

    setWrongPassword (wrongPassword){
        this.InputWrongPassword.setValue(wrongPassword);
    }

    setError (error){
        expect(this.ErrorMessage);
    }

    clickSubmitButton (){
        this.SubmitButton.click();
    }

    SubmitButtonIsDisabled(){
        expect(this.SubmitButton).toBeDisabled()
    }

    open () {
        return super.open('/');
    }



}

export default new LoginPage();
