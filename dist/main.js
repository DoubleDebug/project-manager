/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/databaseAPI.ts":
/*!*******************************!*\
  !*** ./src/ts/databaseAPI.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseAPI": () => (/* binding */ DatabaseAPI)
/* harmony export */ });
/* harmony import */ var _project_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project/controller */ "./src/ts/project/controller.ts");
/* harmony import */ var _task_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task/controller */ "./src/ts/task/controller.ts");
/* harmony import */ var _user_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/controller */ "./src/ts/user/controller.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var DatabaseAPI = /** @class */ (function () {
    function DatabaseAPI() {
    }
    DatabaseAPI.setRootURL = function (url) {
        DatabaseAPI.rootURL = url;
    };
    // CONVERSION methods
    DatabaseAPI.convertTaskFromDbToMvc = function (taskData) {
        if (taskData.length == 0)
            return null;
        var tasks = [];
        taskData.forEach(function (task) {
            tasks.push(new _task_controller__WEBPACK_IMPORTED_MODULE_1__.Task(task.id, task.name, task.description, Number(task.state)));
        });
        return tasks;
    };
    DatabaseAPI.convertProjectFromDbToMvc = function (projData) {
        if (projData.length == 0)
            return null;
        var projects = [];
        projData.forEach(function (proj) {
            var newProject = new _project_controller__WEBPACK_IMPORTED_MODULE_0__.Project(proj.id, proj.name, proj.dueDate);
            DatabaseAPI.getTasksByProject(proj.id)
                .then(function (tasks) { return newProject.model.setTasks(tasks); });
            projects.push(newProject);
        });
        return projects;
    };
    DatabaseAPI.convertUserFromDbToMvc = function (userData) {
        if (userData.length == 0)
            return null;
        var users = [];
        userData.forEach(function (user) {
            var newUser = new _user_controller__WEBPACK_IMPORTED_MODULE_2__.User(user.id, user.nickname, user.password);
            DatabaseAPI.getProjectsByUser(user.id)
                .then(function (projects) { return newUser.model.setProjects(projects); });
            users.push(newUser);
        });
        return users;
    };
    // USER table methods
    DatabaseAPI.getAllUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(DatabaseAPI.rootURL + "/users")
                        .then(function (data) { return data.json(); })
                        .then(function (userData) { return DatabaseAPI.convertUserFromDbToMvc(userData); })];
            });
        });
    };
    DatabaseAPI.getUserById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(DatabaseAPI.rootURL + "/users/" + id)
                        .then(function (data) { return data.json(); })
                        .then(function (userData) {
                        if (userData.length === undefined || userData.length === 0)
                            return null;
                        return DatabaseAPI.convertUserFromDbToMvc(userData).pop();
                    })];
            });
        });
    };
    DatabaseAPI.getUserByNickname = function (nickname) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(DatabaseAPI.rootURL + "/users?nickname=" + nickname)
                        .then(function (data) { return data.json(); })
                        .then(function (userData) {
                        if (userData.length === undefined || userData.length === 0)
                            return null;
                        return DatabaseAPI.convertUserFromDbToMvc(userData).pop();
                    })];
            });
        });
    };
    DatabaseAPI.addUser = function (nickname, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(DatabaseAPI.rootURL + "/users", {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            nickname: nickname,
                            password: password
                        })
                    })];
            });
        });
    };
    // PROJECT table methods
    DatabaseAPI.getAllProjects = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(DatabaseAPI.rootURL + "/projects")
                        .then(function (data) { return data.json(); })
                        .then(function (projectData) { return DatabaseAPI.convertProjectFromDbToMvc(projectData); })];
            });
        });
    };
    DatabaseAPI.getProjectsByUser = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(DatabaseAPI.rootURL + "/user/" + userId + "/projects")
                        .then(function (data) { return data.json(); })
                        .then(function (projectData) { return DatabaseAPI.convertProjectFromDbToMvc(projectData); })];
            });
        });
    };
    // TASK table methods
    DatabaseAPI.getAllTasks = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(DatabaseAPI.rootURL + "/tasks")
                        .then(function (data) { return data.json(); })
                        .then(function (taskData) { return DatabaseAPI.convertTaskFromDbToMvc(taskData); })];
            });
        });
    };
    DatabaseAPI.getTasksByProject = function (projId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(DatabaseAPI.rootURL + "/projects/" + projId + "/tasks")
                        .then(function (data) { return data.json(); })
                        .then(function (taskData) { return DatabaseAPI.convertTaskFromDbToMvc(taskData); })];
            });
        });
    };
    return DatabaseAPI;
}());



/***/ }),

/***/ "./src/ts/manager/controller.ts":
/*!**************************************!*\
  !*** ./src/ts/manager/controller.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Manager": () => (/* binding */ Manager)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/ts/manager/model.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/ts/manager/view.ts");


var Manager = /** @class */ (function () {
    function Manager() {
        this.model = new _model__WEBPACK_IMPORTED_MODULE_0__.ManagerModel();
        this.view = new _view__WEBPACK_IMPORTED_MODULE_1__.ManagerView();
    }
    Manager.prototype.draw = function (parent) {
        this.view.draw(parent, this.model);
    };
    return Manager;
}());



/***/ }),

/***/ "./src/ts/manager/model.ts":
/*!*********************************!*\
  !*** ./src/ts/manager/model.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagerModel": () => (/* binding */ ManagerModel)
/* harmony export */ });
/* harmony import */ var _databaseAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../databaseAPI */ "./src/ts/databaseAPI.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var ManagerModel = /** @class */ (function () {
    function ManagerModel() {
        var _this = this;
        var currentUserId = this.getUserCookie();
        if (currentUserId === -1)
            this.currentUser = null;
        else {
            _databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.getUserById(Number(currentUserId)).then(function (user) { return _this.currentUser = user; });
        }
    }
    ManagerModel.prototype.getCurrentUser = function () {
        return this.currentUser;
    };
    ManagerModel.prototype.setUserCookie = function (id) {
        if (this.currentUser === null)
            return;
        var d = new Date();
        d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000)); // expires in 7 days
        var expires = 'expires=' + d.toUTCString();
        document.cookie = "userId=" + id + "; expires=" + expires + "; path=/;";
    };
    /**
     * @returns user's id stored in cookies (or -1 if there's no cookie)
     */
    ManagerModel.prototype.getUserCookie = function () {
        var name = 'userId=';
        var decodedCookie = decodeURIComponent(document.cookie);
        var cookieArray = decodedCookie.split(';');
        for (var i = 0; i < cookieArray.length; i++) {
            var cookie = cookieArray[i];
            while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(name) == 0) {
                return Number(cookie.substring(name.length, cookie.length));
            }
        }
        return -1;
    };
    /**
     * Nicknames can consist of:
     * lower case letters,
     * upper case letters,
     * numbers,
     * underscores and
     * dots.
     */
    ManagerModel.prototype.validateInputData = function (nickname, password) {
        if (nickname === '' || password === '')
            return false;
        if (nickname.length < 4 || nickname.length > 15)
            return false;
        if (password.length < 4 || password.length > 15)
            return false;
        var matchesRegex = /^[a-zA-Z0-9_\.]+$/.exec(nickname);
        return (matchesRegex !== null);
    };
    /**
     * @returns a login result message ('success' if login successful)
     */
    ManagerModel.prototype.tryLoginUser = function (nickname, password) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.getUserByNickname(nickname)];
                    case 1:
                        user = _a.sent();
                        if (user === null)
                            return [2 /*return*/, 'user doesn\'t exist'];
                        if (user.model.getPassword() !== password)
                            return [2 /*return*/, 'wrong password'];
                        // save current user in cookies
                        this.currentUser = user;
                        this.setUserCookie(this.currentUser.model.getId());
                        return [2 /*return*/, 'success'];
                }
            });
        });
    };
    /**
     * @returns a sign up result message ('success' if login successful)
     */
    ManagerModel.prototype.trySignUpUser = function (nickname, password) {
        return __awaiter(this, void 0, void 0, function () {
            var userWithSameNickname, response, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, _databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.getUserByNickname(nickname)];
                    case 1:
                        userWithSameNickname = _b.sent();
                        if (userWithSameNickname !== null)
                            return [2 /*return*/, 'nickname already taken'];
                        return [4 /*yield*/, _databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.addUser(nickname, password)];
                    case 2:
                        response = _b.sent();
                        if (!response.ok)
                            return [2 /*return*/, 'fetch error'];
                        // save current user in cookies
                        _a = this;
                        return [4 /*yield*/, _databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.getUserByNickname(nickname)];
                    case 3:
                        // save current user in cookies
                        _a.currentUser = _b.sent();
                        this.setUserCookie(this.currentUser.model.getId());
                        return [2 /*return*/, 'success'];
                }
            });
        });
    };
    return ManagerModel;
}());



/***/ }),

/***/ "./src/ts/manager/view.ts":
/*!********************************!*\
  !*** ./src/ts/manager/view.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagerView": () => (/* binding */ ManagerView)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var ManagerView = /** @class */ (function () {
    function ManagerView() {
        this.container = document.createElement('div');
        this.container.className = 'manager';
    }
    ManagerView.prototype.draw = function (parent, model) {
        this.parent = parent;
        this.parent.appendChild(this.container);
        // checking for saved user in cookies
        if (model.getUserCookie() === -1) {
            // draw start page logo
            var logo = document.createElement('img');
            logo.className = 'undrawLogo';
            this.container.appendChild(logo);
            // draw login page
            this.drawLoginPage(model);
        }
        else {
            this.drawDashboard();
        }
    };
    ManagerView.prototype.drawLoginPage = function (model) {
        var _this = this;
        var loginContainer = document.createElement('div');
        loginContainer.className = 'loginContainer';
        var lblTitle = document.createElement('label');
        lblTitle.innerHTML = 'Project manager';
        lblTitle.className = 'title';
        loginContainer.appendChild(lblTitle);
        var btnContainer = document.createElement('div');
        btnContainer.className = 'btnContainer';
        var btnSignUp = document.createElement('button');
        btnSignUp.id = 'btnSignUp';
        btnSignUp.className = 'btn btn-success';
        btnSignUp.innerHTML = 'Sign up';
        btnSignUp.onclick = function () {
            btnContainer.classList.toggle('hide');
            signUpForm.classList.toggle('hide');
            // focus on nickname input field after animation
            setTimeout(function () {
                document.getElementById('inputSignUpNickname').focus();
            }, 1000);
        };
        btnContainer.appendChild(btnSignUp);
        var btnLogin = document.createElement('button');
        btnLogin.id = 'btnLogin';
        btnLogin.className = 'btn btn-light';
        btnLogin.innerHTML = 'Log in';
        btnLogin.onclick = function () {
            btnContainer.classList.toggle('hide');
            loginForm.classList.toggle('hide');
            // focus on nickname input field after animation
            setTimeout(function () {
                document.getElementById('inputLoginNickname').focus();
            }, 1000);
        };
        btnContainer.appendChild(btnLogin);
        loginContainer.appendChild(btnContainer);
        // draw login and sing up forms        
        var loginForm = this.drawForm(loginContainer, btnContainer, {
            formType: 'Login',
            lblText: 'Log in to Project Manager',
            btnText: 'Log in',
            callbackFunction: function () {
                // loading animation
                var animation = document.createElement('div');
                animation.className = 'spinner-border spinner-border-sm text-light';
                document.getElementById('btnLoginNow').innerHTML = animation.outerHTML;
                // login
                _this.tryLogin(model, loginForm);
            }
        });
        var signUpForm = this.drawForm(loginContainer, btnContainer, {
            formType: 'SignUp',
            lblText: 'Sign up to Project Manager',
            btnText: 'Sign up',
            callbackFunction: function () {
                // loading animation
                var animation = document.createElement('div');
                animation.className = 'spinner-border spinner-border-sm text-light';
                document.getElementById('btnSignUpNow').innerHTML = animation.outerHTML;
                // login
                _this.trySignUp(model, signUpForm);
            }
        });
        this.container.appendChild(loginContainer);
    };
    ManagerView.prototype.drawForm = function (parent, btnContainer, data) {
        var loginForm = document.createElement('div');
        loginForm.className = 'loginForm hide';
        var lblLogin = document.createElement('label');
        lblLogin.innerHTML = data.lblText;
        lblLogin.id = 'lblLogin';
        loginForm.appendChild(lblLogin);
        var inputNickname = document.createElement('input');
        inputNickname.id = "input" + data.formType + "Nickname";
        inputNickname.type = 'text';
        inputNickname.className = 'form-control';
        inputNickname.placeholder = 'Nickname';
        loginForm.appendChild(inputNickname);
        var inputPassword = document.createElement('input');
        inputPassword.id = "input" + data.formType + "Password";
        inputPassword.type = 'password';
        inputPassword.className = 'form-control';
        inputPassword.placeholder = 'Password';
        inputPassword.addEventListener('keyup', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                data.callbackFunction();
                console.log('refreshed');
            }
        });
        loginForm.appendChild(inputPassword);
        var btnLogin = document.createElement('button');
        btnLogin.id = "btn" + data.formType + "Now";
        btnLogin.className = 'btn btn-success';
        btnLogin.innerHTML = data.btnText;
        btnLogin.onclick = function (e) {
            e.preventDefault();
            data.callbackFunction();
            console.log('refreshed');
        };
        loginForm.appendChild(btnLogin);
        var btnGoBack = document.createElement('button');
        btnGoBack.className = 'btn btn-link';
        btnGoBack.innerHTML = 'Back';
        btnGoBack.onclick = function () {
            loginForm.classList.toggle('hide');
            btnContainer.classList.toggle('hide');
        };
        loginForm.appendChild(btnGoBack);
        parent.appendChild(loginForm);
        return loginForm;
    };
    ManagerView.prototype.tryLogin = function (model, loginForm) {
        return __awaiter(this, void 0, void 0, function () {
            var nn, pswd, errorMsg, loginMsg, lblError, loginBtn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nn = document.getElementById('inputLoginNickname').value;
                        pswd = document.getElementById('inputLoginPassword').value;
                        errorMsg = 'Login failed: ';
                        loginMsg = '';
                        if (!model.validateInputData(nn, pswd)) return [3 /*break*/, 2];
                        return [4 /*yield*/, model.tryLoginUser(nn, pswd)];
                    case 1:
                        loginMsg = _a.sent();
                        if (loginMsg === 'success') {
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
                        return [3 /*break*/, 3];
                    case 2:
                        errorMsg += 'Invalid input.';
                        _a.label = 3;
                    case 3:
                        if (loginMsg !== 'success') {
                            lblError = document.getElementById('lblError');
                            if (lblError === null)
                                lblError = document.createElement('label');
                            lblError.id = 'lblError';
                            lblError.innerHTML = errorMsg;
                            loginForm.appendChild(lblError);
                        }
                        loginBtn = document.getElementById('btnLoginNow');
                        if (loginBtn != null)
                            loginBtn.innerHTML = 'Log in';
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagerView.prototype.trySignUp = function (model, loginForm) {
        return __awaiter(this, void 0, void 0, function () {
            var nn, pswd, errorMsg, signupMsg, lblError, signupBtn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nn = document.getElementById('inputSignUpNickname').value;
                        pswd = document.getElementById('inputSignUpPassword').value;
                        errorMsg = 'Sign up failed: ';
                        signupMsg = '';
                        if (!model.validateInputData(nn, pswd)) return [3 /*break*/, 2];
                        return [4 /*yield*/, model.trySignUpUser(nn, pswd)];
                    case 1:
                        signupMsg = _a.sent();
                        if (signupMsg === 'success') {
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
                        return [3 /*break*/, 3];
                    case 2:
                        errorMsg += 'Invalid input.';
                        _a.label = 3;
                    case 3:
                        if (signupMsg !== 'success') {
                            lblError = document.getElementById('lblError');
                            if (lblError === null)
                                lblError = document.createElement('label');
                            lblError.id = 'lblError';
                            lblError.innerHTML = errorMsg;
                            loginForm.appendChild(lblError);
                        }
                        signupBtn = document.getElementById('btnSignUpNow');
                        if (signupBtn != null)
                            signupBtn.innerHTML = 'Sign up';
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagerView.prototype.drawDashboard = function () {
    };
    /**
     * @param data requires COLOR, TITLE and MESSAGE property
     */
    ManagerView.prototype.displayPopup = function (data) {
        var toast = document.getElementById('toastNotif');
        if (toast === null) {
            toast = this.createPopup(data);
        }
        $('#toastNotif').toast('show');
    };
    ManagerView.prototype.createPopup = function (data) {
        var toast = document.createElement('div');
        toast.className = 'toast';
        toast.id = 'toastNotif';
        var toastHeader = document.createElement('div');
        toastHeader.className = 'toast-header';
        var statusIcon = document.createElement('div');
        statusIcon.className = 'statusIcon';
        statusIcon.style.backgroundColor = data.color;
        toastHeader.appendChild(statusIcon);
        var lblHeader = document.createElement('strong');
        lblHeader.className = 'mr-auto';
        lblHeader.innerHTML = data.title;
        toastHeader.appendChild(lblHeader);
        var time = document.createElement('small');
        toastHeader.appendChild(time);
        var btnClose = document.createElement('button');
        btnClose.type = 'button';
        btnClose.className = 'ml-2 mb-1 close';
        toastHeader.appendChild(btnClose);
        var span = document.createElement('span');
        span.innerHTML = '&times;';
        btnClose.appendChild(span);
        toast.appendChild(toastHeader);
        var body = document.createElement('div');
        body.className = 'toast-body';
        body.innerHTML = data.message;
        toast.appendChild(body);
        document.body.appendChild(toast);
        $('#toastNotif').toast({ delay: 3000 });
        return toast;
    };
    return ManagerView;
}());



/***/ }),

/***/ "./src/ts/project/controller.ts":
/*!**************************************!*\
  !*** ./src/ts/project/controller.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/ts/project/model.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/ts/project/view.ts");


var Project = /** @class */ (function () {
    function Project(id, name, dueDate) {
        this.model = new _model__WEBPACK_IMPORTED_MODULE_0__.ProjectModel(id, name, dueDate);
        this.view = new _view__WEBPACK_IMPORTED_MODULE_1__.ProjectView();
    }
    Project.prototype.draw = function (parent) {
        this.view.draw(parent, this.model);
    };
    Project.prototype.addTask = function (t) {
        this.model.addTask(t);
    };
    Project.prototype.removeTask = function (id) {
        this.model.removeTask(id);
    };
    return Project;
}());



/***/ }),

/***/ "./src/ts/project/model.ts":
/*!*********************************!*\
  !*** ./src/ts/project/model.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectModel": () => (/* binding */ ProjectModel)
/* harmony export */ });
var ProjectModel = /** @class */ (function () {
    function ProjectModel(id, name, dueDate) {
        this.id = id;
        this.name = name;
        this.tasks = [];
        this.dueDate = dueDate;
    }
    ProjectModel.prototype.getId = function () {
        return this.id;
    };
    ProjectModel.prototype.getTasks = function () {
        return this.tasks;
    };
    ProjectModel.prototype.setTasks = function (t) {
        this.tasks = t;
    };
    ProjectModel.prototype.addTask = function (t) {
        this.tasks.push(t);
    };
    ProjectModel.prototype.removeTask = function (id) {
        this.tasks = this.tasks.filter(function (t) { return t.model.getId() !== id; });
    };
    return ProjectModel;
}());



/***/ }),

/***/ "./src/ts/project/view.ts":
/*!********************************!*\
  !*** ./src/ts/project/view.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectView": () => (/* binding */ ProjectView)
/* harmony export */ });
var ProjectView = /** @class */ (function () {
    function ProjectView() {
        this.container = document.createElement('div');
    }
    ProjectView.prototype.draw = function (parent, model) {
        var _this = this;
        this.parent = parent;
        this.container.className = 'project';
        var lblTitle = document.createElement('label');
        lblTitle.innerHTML = "#" + model.getId() + " | " + model.name + "<br>";
        this.container.appendChild(lblTitle);
        model.getTasks().forEach(function (task) { return task.draw(_this.container); });
        this.parent.appendChild(this.container);
    };
    return ProjectView;
}());



/***/ }),

/***/ "./src/ts/task/controller.ts":
/*!***********************************!*\
  !*** ./src/ts/task/controller.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/ts/task/model.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/ts/task/view.ts");


var Task = /** @class */ (function () {
    function Task(id, name, description, state) {
        this.model = new _model__WEBPACK_IMPORTED_MODULE_0__.TaskModel(id, name, description, state);
        this.view = new _view__WEBPACK_IMPORTED_MODULE_1__.TaskView();
    }
    Task.prototype.draw = function (parent) {
        this.view.draw(parent, this.model);
    };
    return Task;
}());



/***/ }),

/***/ "./src/ts/task/model.ts":
/*!******************************!*\
  !*** ./src/ts/task/model.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskModel": () => (/* binding */ TaskModel)
/* harmony export */ });
var TaskModel = /** @class */ (function () {
    function TaskModel(id, name, description, state) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.state = state;
    }
    TaskModel.prototype.getId = function () {
        return this.id;
    };
    TaskModel.prototype.getState = function () {
        return this.state;
    };
    return TaskModel;
}());



/***/ }),

/***/ "./src/ts/task/view.ts":
/*!*****************************!*\
  !*** ./src/ts/task/view.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskView": () => (/* binding */ TaskView)
/* harmony export */ });
var TaskView = /** @class */ (function () {
    function TaskView() {
        this.container = document.createElement('div');
    }
    TaskView.prototype.draw = function (parent, model) {
        this.parent = parent;
        this.container.className = 'task';
        var lblName = document.createElement('label');
        lblName.innerHTML = "Name: " + model.name + "<br>\n                             Description: " + model.description + "<br>\n                             State: " + model.getState().toString();
        this.container.appendChild(lblName);
        this.parent.appendChild(this.container);
    };
    return TaskView;
}());



/***/ }),

/***/ "./src/ts/user/controller.ts":
/*!***********************************!*\
  !*** ./src/ts/user/controller.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/ts/user/model.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/ts/user/view.ts");


var User = /** @class */ (function () {
    function User(id, nickname, password) {
        this.model = new _model__WEBPACK_IMPORTED_MODULE_0__.UserModel(id, nickname, password);
        this.view = new _view__WEBPACK_IMPORTED_MODULE_1__.UserView();
    }
    User.prototype.addProject = function (p) {
        this.model.addProject(p);
    };
    User.prototype.removeProject = function (id) {
        this.model.removeProject(id);
    };
    User.prototype.draw = function (parent) {
        this.view.draw(parent, this.model);
    };
    return User;
}());



/***/ }),

/***/ "./src/ts/user/model.ts":
/*!******************************!*\
  !*** ./src/ts/user/model.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModel": () => (/* binding */ UserModel)
/* harmony export */ });
var UserModel = /** @class */ (function () {
    function UserModel(id, nickname, password) {
        this.id = id;
        this.nickname = nickname;
        this.password = password;
        this.projects = [];
    }
    UserModel.prototype.getId = function () {
        return this.id;
    };
    UserModel.prototype.getPassword = function () {
        return this.password;
    };
    UserModel.prototype.getProjects = function () {
        return this.projects;
    };
    UserModel.prototype.setProjects = function (p) {
        this.projects = p;
    };
    UserModel.prototype.getNumOfProjects = function () {
        return this.projects.length;
    };
    UserModel.prototype.addProject = function (p) {
        this.projects.push(p);
    };
    UserModel.prototype.removeProject = function (id) {
        this.projects = this.projects.filter(function (p) { return p.model.getId() !== id; });
    };
    return UserModel;
}());



/***/ }),

/***/ "./src/ts/user/view.ts":
/*!*****************************!*\
  !*** ./src/ts/user/view.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserView": () => (/* binding */ UserView)
/* harmony export */ });
var UserView = /** @class */ (function () {
    function UserView() {
        this.container = document.createElement('div');
    }
    UserView.prototype.draw = function (parent, model) {
        this.parent = parent;
        this.container.className = 'user';
        var lblName = document.createElement('label');
        lblName.innerHTML = model.nickname + "<br>\n                             (" + model.getNumOfProjects() + " projects)";
        this.container.appendChild(lblName);
        this.parent.appendChild(this.container);
    };
    return UserView;
}());



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _databaseAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./databaseAPI */ "./src/ts/databaseAPI.ts");
/* harmony import */ var _manager_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manager/controller */ "./src/ts/manager/controller.ts");


var dbURL = 'http://localhost:3000';
_databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.setRootURL(dbURL);
var manager = new _manager_controller__WEBPACK_IMPORTED_MODULE_1__.Manager();
manager.draw(document.body);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvZGF0YWJhc2VBUEkudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL21hbmFnZXIvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvbWFuYWdlci9tb2RlbC50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvbWFuYWdlci92aWV3LnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy9wcm9qZWN0L2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL3Byb2plY3QvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL3Byb2plY3Qvdmlldy50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvdGFzay9jb250cm9sbGVyLnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy90YXNrL21vZGVsLnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy90YXNrL3ZpZXcudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL3VzZXIvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvdXNlci9tb2RlbC50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvdXNlci92aWV3LnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ047QUFDQTtBQUV6QztJQUFBO0lBdUhBLENBQUM7SUFwSFUsc0JBQVUsR0FBakIsVUFBa0IsR0FBVztRQUN6QixXQUFXLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUM5QixDQUFDO0lBRUQscUJBQXFCO0lBRWQsa0NBQXNCLEdBQTdCLFVBQThCLFFBQWE7UUFDdkMsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUM7WUFDcEIsT0FBTyxJQUFJLENBQUM7UUFFaEIsSUFBTSxLQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFTO1lBQ3ZCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxrREFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25GLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVNLHFDQUF5QixHQUFoQyxVQUFpQyxRQUFhO1FBQzFDLElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQ3BCLE9BQU8sSUFBSSxDQUFDO1FBRWhCLElBQU0sUUFBUSxHQUFjLEVBQUUsQ0FBQztRQUMvQixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBUztZQUN2QixJQUFNLFVBQVUsR0FBRyxJQUFJLHdEQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFF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QSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ0c7QUFFL0MsSUFBTSxLQUFLLEdBQUcsdUJBQXVCLENBQUM7QUFDdEMsZ0VBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFOUIsSUFBTSxPQUFPLEdBQVksSUFBSSx3REFBTyxFQUFFLENBQUM7QUFDdkMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0L2NvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2svY29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlci9jb250cm9sbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YWJhc2VBUEkge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcm9vdFVSTDogc3RyaW5nO1xyXG5cclxuICAgIHN0YXRpYyBzZXRSb290VVJMKHVybDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgRGF0YWJhc2VBUEkucm9vdFVSTCA9IHVybDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDT05WRVJTSU9OIG1ldGhvZHNcclxuXHJcbiAgICBzdGF0aWMgY29udmVydFRhc2tGcm9tRGJUb012Yyh0YXNrRGF0YTogYW55KTogVGFza1tdIHtcclxuICAgICAgICBpZiAodGFza0RhdGEubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrczogVGFza1tdID0gW107XHJcbiAgICAgICAgdGFza0RhdGEuZm9yRWFjaCgodGFzazogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRhc2tzLnB1c2gobmV3IFRhc2sodGFzay5pZCwgdGFzay5uYW1lLCB0YXNrLmRlc2NyaXB0aW9uLCBOdW1iZXIodGFzay5zdGF0ZSkpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGFza3M7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNvbnZlcnRQcm9qZWN0RnJvbURiVG9NdmMocHJvakRhdGE6IGFueSk6IFByb2plY3RbXSB7XHJcbiAgICAgICAgaWYgKHByb2pEYXRhLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdHM6IFByb2plY3RbXSA9IFtdOyAgICAgICAgICAgIFxyXG4gICAgICAgIHByb2pEYXRhLmZvckVhY2goKHByb2o6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvai5pZCwgcHJvai5uYW1lLCBwcm9qLmR1ZURhdGUpO1xyXG4gICAgICAgICAgICBEYXRhYmFzZUFQSS5nZXRUYXNrc0J5UHJvamVjdChwcm9qLmlkKVxyXG4gICAgICAgICAgICAudGhlbih0YXNrcyA9PiBuZXdQcm9qZWN0Lm1vZGVsLnNldFRhc2tzKHRhc2tzKSk7XHJcbiAgICAgICAgICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RzO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjb252ZXJ0VXNlckZyb21EYlRvTXZjKHVzZXJEYXRhOiBhbnkpOiBVc2VyW10ge1xyXG4gICAgICAgIGlmICh1c2VyRGF0YS5sZW5ndGggPT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXJzOiBVc2VyW10gPSBbXTtcclxuICAgICAgICB1c2VyRGF0YS5mb3JFYWNoKCh1c2VyOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3VXNlciA9IG5ldyBVc2VyKHVzZXIuaWQsIHVzZXIubmlja25hbWUsIHVzZXIucGFzc3dvcmQpO1xyXG4gICAgICAgICAgICBEYXRhYmFzZUFQSS5nZXRQcm9qZWN0c0J5VXNlcih1c2VyLmlkKVxyXG4gICAgICAgICAgICAudGhlbihwcm9qZWN0cyA9PiBuZXdVc2VyLm1vZGVsLnNldFByb2plY3RzKHByb2plY3RzKSk7XHJcbiAgICAgICAgICAgIHVzZXJzLnB1c2gobmV3VXNlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHVzZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVTRVIgdGFibGUgbWV0aG9kc1xyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRBbGxVc2VycygpOiBQcm9taXNlPFVzZXJbXT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHtEYXRhYmFzZUFQSS5yb290VVJMfS91c2Vyc2ApXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSlcclxuICAgICAgICAudGhlbih1c2VyRGF0YSA9PiBEYXRhYmFzZUFQSS5jb252ZXJ0VXNlckZyb21EYlRvTXZjKHVzZXJEYXRhKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldFVzZXJCeUlkKGlkOiBudW1iZXIpOiBQcm9taXNlPFVzZXI+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7RGF0YWJhc2VBUEkucm9vdFVSTH0vdXNlcnMvJHtpZH1gKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4odXNlckRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlckRhdGEubGVuZ3RoID09PSB1bmRlZmluZWQgfHwgdXNlckRhdGEubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIERhdGFiYXNlQVBJLmNvbnZlcnRVc2VyRnJvbURiVG9NdmModXNlckRhdGEpLnBvcCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRVc2VyQnlOaWNrbmFtZShuaWNrbmFtZTogc3RyaW5nKTogUHJvbWlzZTxVc2VyPiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke0RhdGFiYXNlQVBJLnJvb3RVUkx9L3VzZXJzP25pY2tuYW1lPSR7bmlja25hbWV9YClcclxuICAgICAgICAudGhlbihkYXRhID0+IGRhdGEuanNvbigpKVxyXG4gICAgICAgIC50aGVuKHVzZXJEYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKHVzZXJEYXRhLmxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IHVzZXJEYXRhLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIERhdGFiYXNlQVBJLmNvbnZlcnRVc2VyRnJvbURiVG9NdmModXNlckRhdGEpLnBvcCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBhZGRVc2VyKG5pY2tuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7RGF0YWJhc2VBUEkucm9vdFVSTH0vdXNlcnNgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQUk9KRUNUIHRhYmxlIG1ldGhvZHNcclxuICAgIFxyXG4gICAgc3RhdGljIGFzeW5jIGdldEFsbFByb2plY3RzKCk6IFByb21pc2U8UHJvamVjdFtdPiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke0RhdGFiYXNlQVBJLnJvb3RVUkx9L3Byb2plY3RzYClcclxuICAgICAgICAudGhlbihkYXRhID0+IGRhdGEuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChwcm9qZWN0RGF0YTogYW55KSA9PiBEYXRhYmFzZUFQSS5jb252ZXJ0UHJvamVjdEZyb21EYlRvTXZjKHByb2plY3REYXRhKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBhc3luYyBnZXRQcm9qZWN0c0J5VXNlcih1c2VySWQ6IG51bWJlcik6IFByb21pc2U8UHJvamVjdFtdPiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke0RhdGFiYXNlQVBJLnJvb3RVUkx9L3VzZXIvJHt1c2VySWR9L3Byb2plY3RzYClcclxuICAgICAgICAudGhlbihkYXRhID0+IGRhdGEuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChwcm9qZWN0RGF0YTogYW55KSA9PiBEYXRhYmFzZUFQSS5jb252ZXJ0UHJvamVjdEZyb21EYlRvTXZjKHByb2plY3REYXRhKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVEFTSyB0YWJsZSBtZXRob2RzXHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEFsbFRhc2tzKCk6IFByb21pc2U8VGFza1tdPiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke0RhdGFiYXNlQVBJLnJvb3RVUkx9L3Rhc2tzYClcclxuICAgICAgICAudGhlbihkYXRhID0+IGRhdGEuanNvbigpKVxyXG4gICAgICAgIC50aGVuKCh0YXNrRGF0YTogYW55KSA9PiBEYXRhYmFzZUFQSS5jb252ZXJ0VGFza0Zyb21EYlRvTXZjKHRhc2tEYXRhKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldFRhc2tzQnlQcm9qZWN0KHByb2pJZDogbnVtYmVyKTogUHJvbWlzZTxUYXNrW10+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7RGF0YWJhc2VBUEkucm9vdFVSTH0vcHJvamVjdHMvJHtwcm9qSWR9L3Rhc2tzYClcclxuICAgICAgICAudGhlbihkYXRhID0+IGRhdGEuanNvbigpKVxyXG4gICAgICAgIC50aGVuKCh0YXNrRGF0YTogYW55KSA9PiBEYXRhYmFzZUFQSS5jb252ZXJ0VGFza0Zyb21EYlRvTXZjKHRhc2tEYXRhKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBNYW5hZ2VyTW9kZWwgfSBmcm9tIFwiLi9tb2RlbFwiO1xyXG5pbXBvcnQgeyBNYW5hZ2VyVmlldyB9IGZyb20gXCIuL3ZpZXdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYW5hZ2VyIHtcclxuICAgIHB1YmxpYyBtb2RlbDogTWFuYWdlck1vZGVsO1xyXG4gICAgcHVibGljIHZpZXc6IE1hbmFnZXJWaWV3O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBuZXcgTWFuYWdlck1vZGVsKCk7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gbmV3IE1hbmFnZXJWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhwYXJlbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy52aWV3LmRyYXcocGFyZW50LCB0aGlzLm1vZGVsKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERhdGFiYXNlQVBJIH0gZnJvbSBcIi4uL2RhdGFiYXNlQVBJXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vdXNlci9jb250cm9sbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFuYWdlck1vZGVsIHtcclxuICAgIHByaXZhdGUgY3VycmVudFVzZXI6IFVzZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXJJZCA9IHRoaXMuZ2V0VXNlckNvb2tpZSgpO1xyXG4gICAgICAgIGlmIChjdXJyZW50VXNlcklkID09PSAtMSlcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IG51bGw7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIERhdGFiYXNlQVBJLmdldFVzZXJCeUlkKE51bWJlcihjdXJyZW50VXNlcklkKSkudGhlbih1c2VyID0+IHRoaXMuY3VycmVudFVzZXIgPSB1c2VyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VycmVudFVzZXIoKTogVXNlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFVzZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXNlckNvb2tpZShpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFVzZXIgPT09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGQuc2V0VGltZShkLmdldFRpbWUoKSArICg3KjI0KjYwKjYwKjEwMDApKTsgICAgIC8vIGV4cGlyZXMgaW4gNyBkYXlzXHJcbiAgICAgICAgdmFyIGV4cGlyZXMgPSAnZXhwaXJlcz0nKyBkLnRvVVRDU3RyaW5nKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gYHVzZXJJZD0ke2lkfTsgZXhwaXJlcz0ke2V4cGlyZXN9OyBwYXRoPS87YDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIHVzZXIncyBpZCBzdG9yZWQgaW4gY29va2llcyAob3IgLTEgaWYgdGhlcmUncyBubyBjb29raWUpXHJcbiAgICAgKi9cclxuICAgIGdldFVzZXJDb29raWUoKTogbnVtYmVyIHtcclxuICAgICAgICB2YXIgbmFtZSA9ICd1c2VySWQ9JztcclxuICAgICAgICB2YXIgZGVjb2RlZENvb2tpZSA9IGRlY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5jb29raWUpO1xyXG4gICAgICAgIHZhciBjb29raWVBcnJheSA9IGRlY29kZWRDb29raWUuc3BsaXQoJzsnKTtcclxuICAgICAgICBmb3IgKHZhciBpPTA7IGk8Y29va2llQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGNvb2tpZSA9IGNvb2tpZUFycmF5W2ldO1xyXG4gICAgICAgICAgICB3aGlsZSAoY29va2llLmNoYXJBdCgwKSA9PSAnICcpIHtcclxuICAgICAgICAgICAgICAgIGNvb2tpZSA9IGNvb2tpZS5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNvb2tpZS5pbmRleE9mKG5hbWUpID09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIoY29va2llLnN1YnN0cmluZyhuYW1lLmxlbmd0aCwgY29va2llLmxlbmd0aCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTmlja25hbWVzIGNhbiBjb25zaXN0IG9mOlxyXG4gICAgICogbG93ZXIgY2FzZSBsZXR0ZXJzLFxyXG4gICAgICogdXBwZXIgY2FzZSBsZXR0ZXJzLFxyXG4gICAgICogbnVtYmVycyxcclxuICAgICAqIHVuZGVyc2NvcmVzIGFuZFxyXG4gICAgICogZG90cy5cclxuICAgICAqL1xyXG4gICAgdmFsaWRhdGVJbnB1dERhdGEobmlja25hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChuaWNrbmFtZSA9PT0gJycgfHwgcGFzc3dvcmQgPT09ICcnKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChuaWNrbmFtZS5sZW5ndGggPCA0IHx8IG5pY2tuYW1lLmxlbmd0aCA+IDE1KVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChwYXNzd29yZC5sZW5ndGggPCA0IHx8IHBhc3N3b3JkLmxlbmd0aCA+IDE1KVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IG1hdGNoZXNSZWdleCA9IC9eW2EtekEtWjAtOV9cXC5dKyQvLmV4ZWMobmlja25hbWUpO1xyXG4gICAgICAgIHJldHVybiAobWF0Y2hlc1JlZ2V4ICE9PSBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIGEgbG9naW4gcmVzdWx0IG1lc3NhZ2UgKCdzdWNjZXNzJyBpZiBsb2dpbiBzdWNjZXNzZnVsKVxyXG4gICAgICovXHJcbiAgICBhc3luYyB0cnlMb2dpblVzZXIobmlja25hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IERhdGFiYXNlQVBJLmdldFVzZXJCeU5pY2tuYW1lKG5pY2tuYW1lKTtcclxuICAgICAgICBpZiAodXNlciA9PT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuICd1c2VyIGRvZXNuXFwndCBleGlzdCc7XHJcblxyXG4gICAgICAgIGlmICh1c2VyLm1vZGVsLmdldFBhc3N3b3JkKCkgIT09IHBhc3N3b3JkKVxyXG4gICAgICAgICAgICByZXR1cm4gJ3dyb25nIHBhc3N3b3JkJztcclxuXHJcbiAgICAgICAgLy8gc2F2ZSBjdXJyZW50IHVzZXIgaW4gY29va2llc1xyXG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB1c2VyO1xyXG4gICAgICAgIHRoaXMuc2V0VXNlckNvb2tpZSh0aGlzLmN1cnJlbnRVc2VyLm1vZGVsLmdldElkKCkpO1xyXG4gICAgICAgIHJldHVybiAnc3VjY2Vzcyc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyBhIHNpZ24gdXAgcmVzdWx0IG1lc3NhZ2UgKCdzdWNjZXNzJyBpZiBsb2dpbiBzdWNjZXNzZnVsKVxyXG4gICAgICovXHJcbiAgICBhc3luYyB0cnlTaWduVXBVc2VyKG5pY2tuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXJXaXRoU2FtZU5pY2tuYW1lID0gYXdhaXQgRGF0YWJhc2VBUEkuZ2V0VXNlckJ5Tmlja25hbWUobmlja25hbWUpO1xyXG4gICAgICAgIGlmICh1c2VyV2l0aFNhbWVOaWNrbmFtZSAhPT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuICduaWNrbmFtZSBhbHJlYWR5IHRha2VuJztcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBEYXRhYmFzZUFQSS5hZGRVc2VyKG5pY2tuYW1lLCBwYXNzd29yZCk7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaylcclxuICAgICAgICAgICAgcmV0dXJuICdmZXRjaCBlcnJvcic7XHJcblxyXG4gICAgICAgIC8vIHNhdmUgY3VycmVudCB1c2VyIGluIGNvb2tpZXNcclxuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gYXdhaXQgRGF0YWJhc2VBUEkuZ2V0VXNlckJ5Tmlja25hbWUobmlja25hbWUpO1xyXG4gICAgICAgIHRoaXMuc2V0VXNlckNvb2tpZSh0aGlzLmN1cnJlbnRVc2VyLm1vZGVsLmdldElkKCkpO1xyXG4gICAgICAgIHJldHVybiAnc3VjY2Vzcyc7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBNYW5hZ2VyTW9kZWwgfSBmcm9tIFwiLi9tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hbmFnZXJWaWV3IHtcclxuICAgIHByaXZhdGUgcGFyZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTmFtZSA9ICdtYW5hZ2VyJztcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KHBhcmVudDogSFRNTEVsZW1lbnQsIG1vZGVsOiBNYW5hZ2VyTW9kZWwpIHtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIC8vIGNoZWNraW5nIGZvciBzYXZlZCB1c2VyIGluIGNvb2tpZXNcclxuICAgICAgICBpZiAobW9kZWwuZ2V0VXNlckNvb2tpZSgpID09PSAtMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGRyYXcgc3RhcnQgcGFnZSBsb2dvXHJcbiAgICAgICAgICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgbG9nby5jbGFzc05hbWUgPSAndW5kcmF3TG9nbyc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ28pO1xyXG5cclxuICAgICAgICAgICAgLy8gZHJhdyBsb2dpbiBwYWdlXHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0xvZ2luUGFnZShtb2RlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0Rhc2hib2FyZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3TG9naW5QYWdlKG1vZGVsOiBNYW5hZ2VyTW9kZWwpIHtcclxuICAgICAgICBjb25zdCBsb2dpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGxvZ2luQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdsb2dpbkNvbnRhaW5lcic7XHJcblxyXG4gICAgICAgIGNvbnN0IGxibFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBsYmxUaXRsZS5pbm5lckhUTUwgPSAnUHJvamVjdCBtYW5hZ2VyJztcclxuICAgICAgICBsYmxUaXRsZS5jbGFzc05hbWUgPSAndGl0bGUnO1xyXG4gICAgICAgIGxvZ2luQ29udGFpbmVyLmFwcGVuZENoaWxkKGxibFRpdGxlKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYnRuQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdidG5Db250YWluZXInO1xyXG5cclxuICAgICAgICBjb25zdCBidG5TaWduVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidG5TaWduVXAuaWQgPSAnYnRuU2lnblVwJztcclxuICAgICAgICBidG5TaWduVXAuY2xhc3NOYW1lID0gJ2J0biBidG4tc3VjY2Vzcyc7XHJcbiAgICAgICAgYnRuU2lnblVwLmlubmVySFRNTCA9ICdTaWduIHVwJztcclxuICAgICAgICBidG5TaWduVXAub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuICAgICAgICAgICAgc2lnblVwRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBmb2N1cyBvbiBuaWNrbmFtZSBpbnB1dCBmaWVsZCBhZnRlciBhbmltYXRpb25cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRTaWduVXBOaWNrbmFtZScpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0blNpZ25VcCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0bkxvZ2luID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnRuTG9naW4uaWQgPSAnYnRuTG9naW4nO1xyXG4gICAgICAgIGJ0bkxvZ2luLmNsYXNzTmFtZSA9ICdidG4gYnRuLWxpZ2h0JztcclxuICAgICAgICBidG5Mb2dpbi5pbm5lckhUTUwgPSAnTG9nIGluJztcclxuICAgICAgICBidG5Mb2dpbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBidG5Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG4gICAgICAgICAgICBsb2dpbkZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG5cclxuICAgICAgICAgICAgLy8gZm9jdXMgb24gbmlja25hbWUgaW5wdXQgZmllbGQgYWZ0ZXIgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0TG9naW5OaWNrbmFtZScpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuTG9naW4pO1xyXG4gICAgICAgIGxvZ2luQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIC8vIGRyYXcgbG9naW4gYW5kIHNpbmcgdXAgZm9ybXMgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGxvZ2luRm9ybSA9IHRoaXMuZHJhd0Zvcm0obG9naW5Db250YWluZXIsIGJ0bkNvbnRhaW5lciwge1xyXG4gICAgICAgICAgICBmb3JtVHlwZTogJ0xvZ2luJyxcclxuICAgICAgICAgICAgbGJsVGV4dDogJ0xvZyBpbiB0byBQcm9qZWN0IE1hbmFnZXInLFxyXG4gICAgICAgICAgICBidG5UZXh0OiAnTG9nIGluJyxcclxuICAgICAgICAgICAgY2FsbGJhY2tGdW5jdGlvbjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gbG9hZGluZyBhbmltYXRpb25cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLmNsYXNzTmFtZSA9ICdzcGlubmVyLWJvcmRlciBzcGlubmVyLWJvcmRlci1zbSB0ZXh0LWxpZ2h0JztcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5Mb2dpbk5vdycpLmlubmVySFRNTCA9IGFuaW1hdGlvbi5vdXRlckhUTUw7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbG9naW5cclxuICAgICAgICAgICAgICAgIHRoaXMudHJ5TG9naW4obW9kZWwsIGxvZ2luRm9ybSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBzaWduVXBGb3JtID0gdGhpcy5kcmF3Rm9ybShsb2dpbkNvbnRhaW5lciwgYnRuQ29udGFpbmVyLCB7XHJcbiAgICAgICAgICAgIGZvcm1UeXBlOiAnU2lnblVwJyxcclxuICAgICAgICAgICAgbGJsVGV4dDogJ1NpZ24gdXAgdG8gUHJvamVjdCBNYW5hZ2VyJyxcclxuICAgICAgICAgICAgYnRuVGV4dDogJ1NpZ24gdXAnLFxyXG4gICAgICAgICAgICBjYWxsYmFja0Z1bmN0aW9uOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBsb2FkaW5nIGFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24uY2xhc3NOYW1lID0gJ3NwaW5uZXItYm9yZGVyIHNwaW5uZXItYm9yZGVyLXNtIHRleHQtbGlnaHQnO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0blNpZ25VcE5vdycpLmlubmVySFRNTCA9IGFuaW1hdGlvbi5vdXRlckhUTUw7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbG9naW5cclxuICAgICAgICAgICAgICAgIHRoaXMudHJ5U2lnblVwKG1vZGVsLCBzaWduVXBGb3JtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dpbkNvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0Zvcm0ocGFyZW50OiBIVE1MRWxlbWVudCwgYnRuQ29udGFpbmVyOiBIVE1MRWxlbWVudCwgZGF0YTogYW55KTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGxvZ2luRm9ybS5jbGFzc05hbWUgPSAnbG9naW5Gb3JtIGhpZGUnO1xyXG5cclxuICAgICAgICBjb25zdCBsYmxMb2dpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgbGJsTG9naW4uaW5uZXJIVE1MID0gZGF0YS5sYmxUZXh0O1xyXG4gICAgICAgIGxibExvZ2luLmlkID0gJ2xibExvZ2luJztcclxuICAgICAgICBsb2dpbkZvcm0uYXBwZW5kQ2hpbGQobGJsTG9naW4pO1xyXG5cclxuICAgICAgICBjb25zdCBpbnB1dE5pY2tuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBpbnB1dE5pY2tuYW1lLmlkID0gYGlucHV0JHtkYXRhLmZvcm1UeXBlfU5pY2tuYW1lYDtcclxuICAgICAgICBpbnB1dE5pY2tuYW1lLnR5cGUgPSAndGV4dCc7XHJcbiAgICAgICAgaW5wdXROaWNrbmFtZS5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcclxuICAgICAgICBpbnB1dE5pY2tuYW1lLnBsYWNlaG9sZGVyID0gJ05pY2tuYW1lJztcclxuICAgICAgICBsb2dpbkZvcm0uYXBwZW5kQ2hpbGQoaW5wdXROaWNrbmFtZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaW5wdXRQYXNzd29yZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgaW5wdXRQYXNzd29yZC5pZCA9IGBpbnB1dCR7ZGF0YS5mb3JtVHlwZX1QYXNzd29yZGA7XHJcbiAgICAgICAgaW5wdXRQYXNzd29yZC50eXBlID0gJ3Bhc3N3b3JkJztcclxuICAgICAgICBpbnB1dFBhc3N3b3JkLmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xyXG4gICAgICAgIGlucHV0UGFzc3dvcmQucGxhY2Vob2xkZXIgPSAnUGFzc3dvcmQnO1xyXG4gICAgICAgIGlucHV0UGFzc3dvcmQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGRhdGEuY2FsbGJhY2tGdW5jdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZnJlc2hlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbG9naW5Gb3JtLmFwcGVuZENoaWxkKGlucHV0UGFzc3dvcmQpO1xyXG5cclxuICAgICAgICBjb25zdCBidG5Mb2dpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ0bkxvZ2luLmlkID0gYGJ0biR7ZGF0YS5mb3JtVHlwZX1Ob3dgO1xyXG4gICAgICAgIGJ0bkxvZ2luLmNsYXNzTmFtZSA9ICdidG4gYnRuLXN1Y2Nlc3MnO1xyXG4gICAgICAgIGJ0bkxvZ2luLmlubmVySFRNTCA9IGRhdGEuYnRuVGV4dDtcclxuICAgICAgICBidG5Mb2dpbi5vbmNsaWNrID0gKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZGF0YS5jYWxsYmFja0Z1bmN0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWZyZXNoZWQnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxvZ2luRm9ybS5hcHBlbmRDaGlsZChidG5Mb2dpbik7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0bkdvQmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ0bkdvQmFjay5jbGFzc05hbWUgPSAnYnRuIGJ0bi1saW5rJztcclxuICAgICAgICBidG5Hb0JhY2suaW5uZXJIVE1MID0gJ0JhY2snO1xyXG4gICAgICAgIGJ0bkdvQmFjay5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsb2dpbkZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG4gICAgICAgICAgICBidG5Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbG9naW5Gb3JtLmFwcGVuZENoaWxkKGJ0bkdvQmFjayk7XHJcblxyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChsb2dpbkZvcm0pO1xyXG4gICAgICAgIHJldHVybiBsb2dpbkZvcm07XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdHJ5TG9naW4obW9kZWw6IE1hbmFnZXJNb2RlbCwgbG9naW5Gb3JtOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IG5uID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dExvZ2luTmlja25hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgICAgICBjb25zdCBwc3dkID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dExvZ2luUGFzc3dvcmQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgICAgICBsZXQgZXJyb3JNc2c6IHN0cmluZyA9ICdMb2dpbiBmYWlsZWQ6ICc7XHJcbiAgICAgICAgbGV0IGxvZ2luTXNnID0gJyc7XHJcbiAgICAgICAgaWYgKG1vZGVsLnZhbGlkYXRlSW5wdXREYXRhKG5uLCBwc3dkKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxvZ2luTXNnID0gYXdhaXQgbW9kZWwudHJ5TG9naW5Vc2VyKG5uLCBwc3dkKTtcclxuICAgICAgICAgICAgaWYgKGxvZ2luTXNnID09PSAnc3VjY2VzcycpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBsb2dpbiBwYWdlXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd1bmRyYXdMb2dvJylbMF0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsb2dpbkNvbnRhaW5lcicpWzBdLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGRyYXcgZGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdEYXNoYm9hcmQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5IHN1Y2Nlc3MgbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5UG9wdXAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTG9naW4gc3VjY2Vzc2Z1bCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1dlbGNvbWUgYmFjayB0byB0aGUgUHJvamVjdCBNYW5hZ2VyISdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGVycm9yTXNnICs9IGxvZ2luTXNnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBlcnJvck1zZyArPSAnSW52YWxpZCBpbnB1dC4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxvZ2luTXNnICE9PSAnc3VjY2VzcycpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgbGJsRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGJsRXJyb3InKTtcclxuICAgICAgICAgICAgaWYgKGxibEVycm9yID09PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgbGJsRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICBsYmxFcnJvci5pZCA9ICdsYmxFcnJvcic7XHJcbiAgICAgICAgICAgIGxibEVycm9yLmlubmVySFRNTCA9IGVycm9yTXNnO1xyXG4gICAgICAgICAgICBsb2dpbkZvcm0uYXBwZW5kQ2hpbGQobGJsRXJyb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIGFuaW1hdGlvblxyXG4gICAgICAgIGNvbnN0IGxvZ2luQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bkxvZ2luTm93Jyk7XHJcbiAgICAgICAgaWYgKGxvZ2luQnRuICE9IG51bGwpXHJcbiAgICAgICAgICAgIGxvZ2luQnRuLmlubmVySFRNTCA9ICdMb2cgaW4nO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHRyeVNpZ25VcChtb2RlbDogTWFuYWdlck1vZGVsLCBsb2dpbkZvcm06IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3Qgbm4gPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0U2lnblVwTmlja25hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgICAgICBjb25zdCBwc3dkID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFNpZ25VcFBhc3N3b3JkJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICAgICAgbGV0IGVycm9yTXNnOiBzdHJpbmcgPSAnU2lnbiB1cCBmYWlsZWQ6ICc7XHJcbiAgICAgICAgbGV0IHNpZ251cE1zZyA9ICcnO1xyXG4gICAgICAgIGlmIChtb2RlbC52YWxpZGF0ZUlucHV0RGF0YShubiwgcHN3ZCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzaWdudXBNc2cgPSBhd2FpdCBtb2RlbC50cnlTaWduVXBVc2VyKG5uLCBwc3dkKTtcclxuICAgICAgICAgICAgaWYgKHNpZ251cE1zZyA9PT0gJ3N1Y2Nlc3MnKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgbG9naW4gcGFnZVxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndW5kcmF3TG9nbycpWzBdLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbG9naW5Db250YWluZXInKVswXS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBkcmF3IGRhc2hib2FyZFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3RGFzaGJvYXJkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZGlzcGxheSBzdWNjZXNzIG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVBvcHVwKHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1NpZ24gdXAgc3VjY2Vzc2Z1bCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1dlbGNvbWUgdG8gdGhlIFByb2plY3QgTWFuYWdlciEnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBlcnJvck1zZyArPSBzaWdudXBNc2c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGVycm9yTXNnICs9ICdJbnZhbGlkIGlucHV0Lic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2lnbnVwTXNnICE9PSAnc3VjY2VzcycpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgbGJsRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGJsRXJyb3InKTtcclxuICAgICAgICAgICAgaWYgKGxibEVycm9yID09PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgbGJsRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICBsYmxFcnJvci5pZCA9ICdsYmxFcnJvcic7XHJcbiAgICAgICAgICAgIGxibEVycm9yLmlubmVySFRNTCA9IGVycm9yTXNnO1xyXG4gICAgICAgICAgICBsb2dpbkZvcm0uYXBwZW5kQ2hpbGQobGJsRXJyb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIGFuaW1hdGlvblxyXG4gICAgICAgIGNvbnN0IHNpZ251cEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5TaWduVXBOb3cnKTtcclxuICAgICAgICBpZiAoc2lnbnVwQnRuICE9IG51bGwpXHJcbiAgICAgICAgICAgIHNpZ251cEJ0bi5pbm5lckhUTUwgPSAnU2lnbiB1cCc7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0Rhc2hib2FyZCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gZGF0YSByZXF1aXJlcyBDT0xPUiwgVElUTEUgYW5kIE1FU1NBR0UgcHJvcGVydHlcclxuICAgICAqL1xyXG4gICAgZGlzcGxheVBvcHVwKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHZhciB0b2FzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2FzdE5vdGlmJyk7XHJcbiAgICAgICAgaWYgKHRvYXN0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRvYXN0ID0gdGhpcy5jcmVhdGVQb3B1cChkYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICg8YW55PiQoJyN0b2FzdE5vdGlmJykpLnRvYXN0KCdzaG93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlUG9wdXAoZGF0YTogYW55KSB7XHJcbiAgICAgICAgY29uc3QgdG9hc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0b2FzdC5jbGFzc05hbWUgPSAndG9hc3QnO1xyXG4gICAgICAgIHRvYXN0LmlkID0gJ3RvYXN0Tm90aWYnO1xyXG5cclxuICAgICAgICBjb25zdCB0b2FzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRvYXN0SGVhZGVyLmNsYXNzTmFtZSA9ICd0b2FzdC1oZWFkZXInO1xyXG5cclxuICAgICAgICBjb25zdCBzdGF0dXNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc3RhdHVzSWNvbi5jbGFzc05hbWUgPSAnc3RhdHVzSWNvbic7XHJcbiAgICAgICAgc3RhdHVzSWNvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBkYXRhLmNvbG9yO1xyXG4gICAgICAgIHRvYXN0SGVhZGVyLmFwcGVuZENoaWxkKHN0YXR1c0ljb24pO1xyXG5cclxuICAgICAgICBjb25zdCBsYmxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHJvbmcnKTtcclxuICAgICAgICBsYmxIZWFkZXIuY2xhc3NOYW1lID0gJ21yLWF1dG8nO1xyXG4gICAgICAgIGxibEhlYWRlci5pbm5lckhUTUwgPSBkYXRhLnRpdGxlO1xyXG4gICAgICAgIHRvYXN0SGVhZGVyLmFwcGVuZENoaWxkKGxibEhlYWRlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpO1xyXG4gICAgICAgIHRvYXN0SGVhZGVyLmFwcGVuZENoaWxkKHRpbWUpO1xyXG5cclxuICAgICAgICBjb25zdCBidG5DbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ0bkNsb3NlLnR5cGUgPSAnYnV0dG9uJztcclxuICAgICAgICBidG5DbG9zZS5jbGFzc05hbWUgPSAnbWwtMiBtYi0xIGNsb3NlJztcclxuICAgICAgICB0b2FzdEhlYWRlci5hcHBlbmRDaGlsZChidG5DbG9zZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSAnJnRpbWVzOydcclxuICAgICAgICBidG5DbG9zZS5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHJcbiAgICAgICAgdG9hc3QuYXBwZW5kQ2hpbGQodG9hc3RIZWFkZXIpO1xyXG5cclxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYm9keS5jbGFzc05hbWUgPSAndG9hc3QtYm9keSc7XHJcbiAgICAgICAgYm9keS5pbm5lckhUTUwgPSBkYXRhLm1lc3NhZ2U7XHJcblxyXG4gICAgICAgIHRvYXN0LmFwcGVuZENoaWxkKGJvZHkpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9hc3QpO1xyXG4gICAgICAgICg8YW55PiQoJyN0b2FzdE5vdGlmJykpLnRvYXN0KHtkZWxheTogMzAwMH0pO1xyXG4gICAgICAgIHJldHVybiB0b2FzdDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi4vdGFzay9jb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFByb2plY3RNb2RlbCB9IGZyb20gXCIuL21vZGVsXCI7XHJcbmltcG9ydCB7IFByb2plY3RWaWV3IH0gZnJvbSBcIi4vdmlld1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xyXG4gICAgcHVibGljIG1vZGVsOiBQcm9qZWN0TW9kZWw7XHJcbiAgICBwdWJsaWMgdmlldzogUHJvamVjdFZpZXc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBkdWVEYXRlOiBEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBQcm9qZWN0TW9kZWwoaWQsIG5hbWUsIGR1ZURhdGUpO1xyXG4gICAgICAgIHRoaXMudmlldyA9IG5ldyBQcm9qZWN0VmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcocGFyZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudmlldy5kcmF3KHBhcmVudCwgdGhpcy5tb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGFzayh0OiBUYXNrKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hZGRUYXNrKHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVRhc2soaWQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubW9kZWwucmVtb3ZlVGFzayhpZCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4uL3Rhc2svY29udHJvbGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RNb2RlbCB7XHJcbiAgICBwcml2YXRlIGlkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSB0YXNrczogVGFza1tdO1xyXG4gICAgcHVibGljIGR1ZURhdGU6IERhdGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBkdWVEYXRlOiBEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYXNrcygpOiBUYXNrW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRhc2tzKHQ6IFRhc2tbXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudGFza3MgPSB0O1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRhc2sodDogVGFzayk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0KTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVUYXNrKGlkOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHQ6IFRhc2spID0+IHQubW9kZWwuZ2V0SWQoKSAhPT0gaWQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUHJvamVjdE1vZGVsIH0gZnJvbSBcIi4vbW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0VmlldyB7XHJcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHBhcmVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZHJhdyhwYXJlbnQ6IEhUTUxFbGVtZW50LCBtb2RlbDogUHJvamVjdE1vZGVsKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTmFtZSA9ICdwcm9qZWN0JztcclxuICAgICAgICBjb25zdCBsYmxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgbGJsVGl0bGUuaW5uZXJIVE1MID0gYCMke21vZGVsLmdldElkKCl9IHwgJHttb2RlbC5uYW1lfTxicj5gO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxibFRpdGxlKTtcclxuXHJcbiAgICAgICAgbW9kZWwuZ2V0VGFza3MoKS5mb3JFYWNoKHRhc2sgPT4gdGFzay5kcmF3KHRoaXMuY29udGFpbmVyKSk7XHJcblxyXG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRhc2tTdGF0ZSB9IGZyb20gXCIuLi90YXNrU3RhdGVcIjtcclxuaW1wb3J0IHsgVGFza01vZGVsIH0gZnJvbSBcIi4vbW9kZWxcIjtcclxuaW1wb3J0IHsgVGFza1ZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGFzayB7XHJcbiAgICBwdWJsaWMgbW9kZWw6IFRhc2tNb2RlbDtcclxuICAgIHB1YmxpYyB2aWV3OiBUYXNrVmlldztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIHN0YXRlOiBUYXNrU3RhdGUpIHtcclxuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IFRhc2tNb2RlbChpZCwgbmFtZSwgZGVzY3JpcHRpb24sIHN0YXRlKTtcclxuICAgICAgICB0aGlzLnZpZXcgPSBuZXcgVGFza1ZpZXcoKTtcclxuICAgIH0gICAgXHJcblxyXG4gICAgZHJhdyhwYXJlbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52aWV3LmRyYXcocGFyZW50LCB0aGlzLm1vZGVsKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRhc2tTdGF0ZSB9IGZyb20gXCIuLi90YXNrU3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUYXNrTW9kZWwge1xyXG4gICAgcHJpdmF0ZSBpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogVGFza1N0YXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgc3RhdGU6IFRhc2tTdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdGF0ZSgpOiBUYXNrU3RhdGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGFza01vZGVsIH0gZnJvbSBcIi4vbW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUYXNrVmlldyB7XHJcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHBhcmVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KHBhcmVudDogSFRNTEVsZW1lbnQsIG1vZGVsOiBUYXNrTW9kZWwpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NOYW1lID0gJ3Rhc2snO1xyXG4gICAgICAgIGNvbnN0IGxibE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGxibE5hbWUuaW5uZXJIVE1MID0gYE5hbWU6ICR7bW9kZWwubmFtZX08YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb246ICR7bW9kZWwuZGVzY3JpcHRpb259PGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRlOiAke21vZGVsLmdldFN0YXRlKCkudG9TdHJpbmcoKX1gO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxibE5hbWUpO1xyXG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi4vcHJvamVjdC9jb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuL21vZGVsXCI7XHJcbmltcG9ydCB7IFVzZXJWaWV3IH0gZnJvbSBcIi4vdmlld1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gICAgcHVibGljIG1vZGVsOiBVc2VyTW9kZWw7XHJcbiAgICBwdWJsaWMgdmlldzogVXNlclZpZXc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgbmlja25hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBuZXcgVXNlck1vZGVsKGlkLCBuaWNrbmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICAgIHRoaXMudmlldyA9IG5ldyBVc2VyVmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFByb2plY3QocDogUHJvamVjdCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubW9kZWwuYWRkUHJvamVjdChwKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVQcm9qZWN0KGlkOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1vZGVsLnJlbW92ZVByb2plY3QoaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcocGFyZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudmlldy5kcmF3KHBhcmVudCwgdGhpcy5tb2RlbCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4uL3Byb2plY3QvY29udHJvbGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJNb2RlbCB7XHJcbiAgICBwcml2YXRlIGlkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbmlja25hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgcGFzc3dvcmQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgcHJvamVjdHM6IFByb2plY3RbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBuaWNrbmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubmlja25hbWUgPSBuaWNrbmFtZTtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFzc3dvcmQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXNzd29yZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9qZWN0cygpOiBQcm9qZWN0W10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFByb2plY3RzKHA6IFByb2plY3RbXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE51bU9mUHJvamVjdHMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUHJvamVjdChwOiBQcm9qZWN0KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVByb2plY3QoaWQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcigocDogUHJvamVjdCkgPT4gcC5tb2RlbC5nZXRJZCgpICE9PSBpZCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi9tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJWaWV3IHtcclxuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgcGFyZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcocGFyZW50OiBIVE1MRWxlbWVudCwgbW9kZWw6IFVzZXJNb2RlbCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc05hbWUgPSAndXNlcic7XHJcbiAgICAgICAgY29uc3QgbGJsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgbGJsTmFtZS5pbm5lckhUTUwgPSBgJHttb2RlbC5uaWNrbmFtZX08YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCR7bW9kZWwuZ2V0TnVtT2ZQcm9qZWN0cygpfSBwcm9qZWN0cylgO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxibE5hbWUpO1xyXG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgRGF0YWJhc2VBUEkgfSBmcm9tIFwiLi9kYXRhYmFzZUFQSVwiO1xyXG5pbXBvcnQgeyBNYW5hZ2VyIH0gZnJvbSBcIi4vbWFuYWdlci9jb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCBkYlVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnO1xyXG5EYXRhYmFzZUFQSS5zZXRSb290VVJMKGRiVVJMKTtcclxuXHJcbmNvbnN0IG1hbmFnZXI6IE1hbmFnZXIgPSBuZXcgTWFuYWdlcigpO1xyXG5tYW5hZ2VyLmRyYXcoZG9jdW1lbnQuYm9keSk7Il0sInNvdXJjZVJvb3QiOiIifQ==