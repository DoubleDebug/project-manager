import { ManagerModel } from "./model";

export class ManagerView {
    private parent: HTMLElement;
    private container: HTMLElement;

    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'manager';
    }

    draw(parent: HTMLElement, model: ManagerModel) {
        this.parent = parent;
        this.parent.appendChild(this.container);

        // checking for saved user in cookies
        if (model.getUserCookie() === -1)
        {
            // draw start page logo
            const logo = document.createElement('img');
            logo.className = 'undrawLogo';
            this.container.appendChild(logo);

            // draw login page
            this.drawLoginPage(model);
        }
        else
        {
            this.drawDashboard();
        }
    }

    drawLoginPage(model: ManagerModel) {
        const loginContainer = document.createElement('div');
        loginContainer.className = 'loginContainer';

        const lblTitle = document.createElement('label');
        lblTitle.innerHTML = 'Project manager';
        lblTitle.className = 'title';
        loginContainer.appendChild(lblTitle);

        const btnContainer = document.createElement('div');
        btnContainer.className = 'btnContainer';

        const btnSignUp = document.createElement('button');
        btnSignUp.id = 'btnSignUp';
        btnSignUp.className = 'btn btn-success';
        btnSignUp.innerHTML = 'Sign up';
        btnSignUp.onclick = () => {
            btnContainer.classList.toggle('hide');
            signUpForm.classList.toggle('hide');

            // focus on nickname input field after animation
            setTimeout(() => {
                document.getElementById('inputSignUpNickname').focus();
            }, 1000);
        };
        btnContainer.appendChild(btnSignUp);

        const btnLogin = document.createElement('button');
        btnLogin.id = 'btnLogin';
        btnLogin.className = 'btn btn-light';
        btnLogin.innerHTML = 'Log in';
        btnLogin.onclick = () => {
            btnContainer.classList.toggle('hide');
            loginForm.classList.toggle('hide');

            // focus on nickname input field after animation
            setTimeout(() => {
                document.getElementById('inputLoginNickname').focus();
            }, 1000);
        }
        btnContainer.appendChild(btnLogin);
        loginContainer.appendChild(btnContainer);

        // draw login and sing up forms        
        const loginForm = this.drawForm(loginContainer, btnContainer, {
            formType: 'Login',
            lblText: 'Log in to Project Manager',
            btnText: 'Log in',
            callbackFunction: () => {
                // loading animation
                const animation = document.createElement('div');
                animation.className = 'spinner-border spinner-border-sm text-light';
                document.getElementById('btnLoginNow').innerHTML = animation.outerHTML;

                // login
                this.tryLogin(model, loginForm);
            }
        });
        const signUpForm = this.drawForm(loginContainer, btnContainer, {
            formType: 'SignUp',
            lblText: 'Sign up to Project Manager',
            btnText: 'Sign up',
            callbackFunction: () => {
                // loading animation
                const animation = document.createElement('div');
                animation.className = 'spinner-border spinner-border-sm text-light';
                document.getElementById('btnSignUpNow').innerHTML = animation.outerHTML;

                // login
                this.trySignUp(model, signUpForm);
            }
        });

        this.container.appendChild(loginContainer);
    }

    drawForm(parent: HTMLElement, btnContainer: HTMLElement, data: any): HTMLElement {
        const loginForm = document.createElement('div');
        loginForm.className = 'loginForm hide';

        const lblLogin = document.createElement('label');
        lblLogin.innerHTML = data.lblText;
        lblLogin.id = 'lblLogin';
        loginForm.appendChild(lblLogin);

        const inputNickname = document.createElement('input');
        inputNickname.id = `input${data.formType}Nickname`;
        inputNickname.type = 'text';
        inputNickname.className = 'form-control';
        inputNickname.placeholder = 'Nickname';
        loginForm.appendChild(inputNickname);
        
        const inputPassword = document.createElement('input');
        inputPassword.id = `input${data.formType}Password`;
        inputPassword.type = 'password';
        inputPassword.className = 'form-control';
        inputPassword.placeholder = 'Password';
        inputPassword.addEventListener('keyup', (e) => {
            if (e.key === 'Enter')
            {
                e.preventDefault();
                data.callbackFunction();
                console.log('refreshed');
            }
        });
        loginForm.appendChild(inputPassword);

        const btnLogin = document.createElement('button');
        btnLogin.id = `btn${data.formType}Now`;
        btnLogin.className = 'btn btn-success';
        btnLogin.innerHTML = data.btnText;
        btnLogin.onclick = (e: Event) => {
            e.preventDefault();
            data.callbackFunction();
            console.log('refreshed');
        };
        loginForm.appendChild(btnLogin);

        const btnGoBack = document.createElement('button');
        btnGoBack.className = 'btn btn-link';
        btnGoBack.innerHTML = 'Back';
        btnGoBack.onclick = () => {
            loginForm.classList.toggle('hide');
            btnContainer.classList.toggle('hide');
        };
        loginForm.appendChild(btnGoBack);

        parent.appendChild(loginForm);
        return loginForm;
    }

    async tryLogin(model: ManagerModel, loginForm: HTMLElement) {
        const nn = (document.getElementById('inputLoginNickname') as HTMLInputElement).value;
        const pswd = (document.getElementById('inputLoginPassword') as HTMLInputElement).value;
        let errorMsg: string = 'Login failed: ';
        let loginMsg = '';
        if (model.validateInputData(nn, pswd))
        {
            loginMsg = await model.tryLoginUser(nn, pswd);
            if (loginMsg === 'success')
            {
                // remove login page
                document.getElementsByClassName('undrawLogo')[0].remove();
                document.getElementsByClassName('loginContainer')[0].remove();

                // draw dashboard
                this.drawDashboard();

                // display success message
                this.displayPopup({
                    color: 'green',
                    title: 'Login successful',
                    message: 'Welcome back to the Project Manager!'
                });
            }
            else
                errorMsg += loginMsg;
        }
        else
        {
            errorMsg += 'Invalid input.';
        }

        if (loginMsg !== 'success')
        {
            let lblError = document.getElementById('lblError');
            if (lblError === null)
                lblError = document.createElement('label');
            lblError.id = 'lblError';
            lblError.innerHTML = errorMsg;
            loginForm.appendChild(lblError);
        }

        // remove animation
        const loginBtn = document.getElementById('btnLoginNow');
        if (loginBtn != null)
            loginBtn.innerHTML = 'Log in';
    }

    async trySignUp(model: ManagerModel, loginForm: HTMLElement) {
        const nn = (document.getElementById('inputSignUpNickname') as HTMLInputElement).value;
        const pswd = (document.getElementById('inputSignUpPassword') as HTMLInputElement).value;
        let errorMsg: string = 'Sign up failed: ';
        let signupMsg = '';
        if (model.validateInputData(nn, pswd))
        {
            signupMsg = await model.trySignUpUser(nn, pswd);
            if (signupMsg === 'success')
            {
                // remove login page
                document.getElementsByClassName('undrawLogo')[0].remove();
                document.getElementsByClassName('loginContainer')[0].remove();

                // draw dashboard
                this.drawDashboard();

                // display success message
                this.displayPopup({
                    color: 'green',
                    title: 'Sign up successful',
                    message: 'Welcome to the Project Manager!'
                });
            }
            else
                errorMsg += signupMsg;
        }
        else
        {
            errorMsg += 'Invalid input.';
        }

        if (signupMsg !== 'success')
        {
            let lblError = document.getElementById('lblError');
            if (lblError === null)
                lblError = document.createElement('label');
            lblError.id = 'lblError';
            lblError.innerHTML = errorMsg;
            loginForm.appendChild(lblError);
        }

        // remove animation
        const signupBtn = document.getElementById('btnSignUpNow');
        if (signupBtn != null)
            signupBtn.innerHTML = 'Sign up';
    }

    drawDashboard() {

    }

    /**
     * @param data requires COLOR, TITLE and MESSAGE property
     */
    displayPopup(data: any) {
        var toast = document.getElementById('toastNotif');
        if (toast === null) {
            toast = this.createPopup(data);
        }

        (<any>$('#toastNotif')).toast('show');
    }

    createPopup(data: any) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.id = 'toastNotif';

        const toastHeader = document.createElement('div');
        toastHeader.className = 'toast-header';

        const statusIcon = document.createElement('div');
        statusIcon.className = 'statusIcon';
        statusIcon.style.backgroundColor = data.color;
        toastHeader.appendChild(statusIcon);

        const lblHeader = document.createElement('strong');
        lblHeader.className = 'mr-auto';
        lblHeader.innerHTML = data.title;
        toastHeader.appendChild(lblHeader);

        const time = document.createElement('small');
        toastHeader.appendChild(time);

        const btnClose = document.createElement('button');
        btnClose.type = 'button';
        btnClose.className = 'ml-2 mb-1 close';
        toastHeader.appendChild(btnClose);

        const span = document.createElement('span');
        span.innerHTML = '&times;'
        btnClose.appendChild(span);

        toast.appendChild(toastHeader);

        const body = document.createElement('div');
        body.className = 'toast-body';
        body.innerHTML = data.message;

        toast.appendChild(body);
        document.body.appendChild(toast);
        (<any>$('#toastNotif')).toast({delay: 3000});
        return toast;
    }
}