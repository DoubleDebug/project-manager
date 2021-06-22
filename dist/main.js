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
                        .then(function (userData) { return DatabaseAPI.convertUserFromDbToMvc([userData]).pop(); })];
            });
        });
    };
    DatabaseAPI.getUserByNickname = function (nickname) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(DatabaseAPI.rootURL + "/users?nickname=" + nickname)
                        .then(function (data) { return data.json(); })
                        .then(function (userData) {
                        if (userData.length === 0)
                            return null;
                        return DatabaseAPI.convertUserFromDbToMvc(userData).pop();
                    })];
            });
        });
    };
    DatabaseAPI.addUser = function (nickname, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, $.ajax({
                        url: DatabaseAPI.rootURL + "/users",
                        type: 'POST',
                        data: {
                            nickname: nickname,
                            password: password
                        },
                        async: true
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
                return [2 /*return*/, fetch(DatabaseAPI.rootURL + "/users/" + userId + "/projects")
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
        var _this = this;
        this.model.setCurrentUser().then(function () {
            _this.view.draw(parent, _this.model);
        });
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
    }
    ManagerModel.prototype.setCurrentUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentUserId;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentUserId = this.getUserCookie();
                        if (!(currentUserId === -1)) return [3 /*break*/, 1];
                        this.currentUser = null;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, _databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.getUserById(Number(currentUserId)).then(function (user) { return _this.currentUser = user; })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
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
            var userWithSameNickname, newUser, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, _databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.getUserByNickname(nickname)];
                    case 1:
                        userWithSameNickname = _b.sent();
                        if (userWithSameNickname !== null)
                            return [2 /*return*/, 'nickname already taken'];
                        return [4 /*yield*/, _databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.addUser(nickname, password)];
                    case 2:
                        newUser = _b.sent();
                        // save current user in cookies
                        _a = this;
                        return [4 /*yield*/, _databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.getUserById(newUser.id)];
                    case 3:
                        // save current user in cookies
                        _a.currentUser = _b.sent();
                        this.setUserCookie(this.currentUser.model.getId());
                        return [2 /*return*/, 'success'];
                }
            });
        });
    };
    ManagerModel.prototype.logoutUser = function () {
        document.cookie = 'userId=;expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=127.0.0.1; path="/"';
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
            this.drawProfileHeader(model);
            this.drawDashboard();
        }
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
                            this.drawProfileHeader(model);
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
                            this.drawProfileHeader(model);
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
    ManagerView.prototype.drawProfileHeader = function (model) {
        var header = document.createElement('div');
        header.className = 'profileHeader';
        this.container.appendChild(header);
        var title = document.createElement('label');
        title.className = 'headerTitle';
        title.innerHTML = 'Project Manager';
        header.appendChild(title);
        var menu = document.createElement('div');
        menu.className = 'headerMenu';
        header.appendChild(menu);
        var dropdown = document.createElement('div');
        dropdown.className = 'dropdown';
        menu.appendChild(dropdown);
        var dropdownMenu = document.createElement('div');
        dropdownMenu.className = 'dropdown-menu';
        dropdownMenu['aria-labelledby'] = 'dropdownMenuButton';
        var user = model.getCurrentUser();
        var nicknameItem = document.createElement('div');
        nicknameItem.className = 'dropdown-item';
        nicknameItem.innerHTML = "#" + user.model.getId() + " | " + user.model.nickname + " (" + user.model.getNumOfProjects() + ")";
        dropdownMenu.appendChild(nicknameItem);
        var btnLogout = document.createElement('a');
        btnLogout.className = 'dropdown-item';
        btnLogout.innerHTML = 'Log out';
        btnLogout.onclick = function () { return model.logoutUser(); };
        dropdownMenu.appendChild(btnLogout);
        var btnProfile = document.createElement('button');
        dropdown.appendChild(btnProfile);
        var btnHtml = '<button class="btn btn-secondary dropdown-toggle" type="button" ';
        btnHtml += 'id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" ';
        btnHtml += 'aria-expanded="false"><i class="fas fa-user iconColor"></i></button>';
        btnProfile.outerHTML = btnHtml;
        dropdown.appendChild(dropdownMenu);
    };
    ManagerView.prototype.drawDashboard = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvZGF0YWJhc2VBUEkudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL21hbmFnZXIvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvbWFuYWdlci9tb2RlbC50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvbWFuYWdlci92aWV3LnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy9wcm9qZWN0L2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL3Byb2plY3QvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL3Byb2plY3Qvdmlldy50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvdGFzay9jb250cm9sbGVyLnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy90YXNrL21vZGVsLnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy90YXNrL3ZpZXcudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL3VzZXIvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvdXNlci9tb2RlbC50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvdXNlci92aWV3LnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStDO0FBQ047QUFDQTtBQUV6QztJQUFBO0lBZ0hBLENBQUM7SUE3R1Usc0JBQVUsR0FBakIsVUFBa0IsR0FBVztRQUN6QixXQUFXLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztJQUM5QixDQUFDO0lBRUQscUJBQXFCO0lBRWQsa0NBQXNCLEdBQTdCLFVBQThCLFFBQWE7UUFDdkMsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUM7WUFDcEIsT0FBTyxJQUFJLENBQUM7UUFFaEIsSUFBTSxLQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFTO1lBQ3ZCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxrREFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25GLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVNLHFDQUF5QixHQUFoQyxVQUFpQyxRQUFhO1FBQzFDLElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBQ3BCLE9BQU8sSUFBSSxDQUFDO1FBRWhCLElBQU0sUUFBUSxHQUFjLEVBQUUsQ0FBQztRQUMvQixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBUztZQUN2QixJQUFNLFVBQVUsR0FBRyxJQUFJLHdEQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFF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Q0FBQyxLQUFLLENBQUMsQ0FBQztBQUU5QixJQUFNLE9BQU8sR0FBWSxJQUFJLHdEQUFPLEVBQUUsQ0FBQztBQUN2QyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QvY29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFzay9jb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyL2NvbnRyb2xsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhYmFzZUFQSSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByb290VVJMOiBzdHJpbmc7XHJcblxyXG4gICAgc3RhdGljIHNldFJvb3RVUkwodXJsOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBEYXRhYmFzZUFQSS5yb290VVJMID0gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENPTlZFUlNJT04gbWV0aG9kc1xyXG5cclxuICAgIHN0YXRpYyBjb252ZXJ0VGFza0Zyb21EYlRvTXZjKHRhc2tEYXRhOiBhbnkpOiBUYXNrW10ge1xyXG4gICAgICAgIGlmICh0YXNrRGF0YS5sZW5ndGggPT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2tzOiBUYXNrW10gPSBbXTtcclxuICAgICAgICB0YXNrRGF0YS5mb3JFYWNoKCh0YXNrOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGFza3MucHVzaChuZXcgVGFzayh0YXNrLmlkLCB0YXNrLm5hbWUsIHRhc2suZGVzY3JpcHRpb24sIE51bWJlcih0YXNrLnN0YXRlKSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0YXNrcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY29udmVydFByb2plY3RGcm9tRGJUb012Yyhwcm9qRGF0YTogYW55KTogUHJvamVjdFtdIHtcclxuICAgICAgICBpZiAocHJvakRhdGEubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0czogUHJvamVjdFtdID0gW107ICAgICAgICAgICAgXHJcbiAgICAgICAgcHJvakRhdGEuZm9yRWFjaCgocHJvajogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qLmlkLCBwcm9qLm5hbWUsIHByb2ouZHVlRGF0ZSk7XHJcbiAgICAgICAgICAgIERhdGFiYXNlQVBJLmdldFRhc2tzQnlQcm9qZWN0KHByb2ouaWQpXHJcbiAgICAgICAgICAgIC50aGVuKHRhc2tzID0+IG5ld1Byb2plY3QubW9kZWwuc2V0VGFza3ModGFza3MpKTtcclxuICAgICAgICAgICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcHJvamVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNvbnZlcnRVc2VyRnJvbURiVG9NdmModXNlckRhdGE6IGFueSk6IFVzZXJbXSB7XHJcbiAgICAgICAgaWYgKHVzZXJEYXRhLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlcnM6IFVzZXJbXSA9IFtdO1xyXG4gICAgICAgIHVzZXJEYXRhLmZvckVhY2goKHVzZXI6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdVc2VyID0gbmV3IFVzZXIodXNlci5pZCwgdXNlci5uaWNrbmFtZSwgdXNlci5wYXNzd29yZCk7XHJcbiAgICAgICAgICAgIERhdGFiYXNlQVBJLmdldFByb2plY3RzQnlVc2VyKHVzZXIuaWQpXHJcbiAgICAgICAgICAgIC50aGVuKHByb2plY3RzID0+IG5ld1VzZXIubW9kZWwuc2V0UHJvamVjdHMocHJvamVjdHMpKTtcclxuICAgICAgICAgICAgdXNlcnMucHVzaChuZXdVc2VyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdXNlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVVNFUiB0YWJsZSBtZXRob2RzXHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEFsbFVzZXJzKCk6IFByb21pc2U8VXNlcltdPiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke0RhdGFiYXNlQVBJLnJvb3RVUkx9L3VzZXJzYClcclxuICAgICAgICAudGhlbihkYXRhID0+IGRhdGEuanNvbigpKVxyXG4gICAgICAgIC50aGVuKHVzZXJEYXRhID0+IERhdGFiYXNlQVBJLmNvbnZlcnRVc2VyRnJvbURiVG9NdmModXNlckRhdGEpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0VXNlckJ5SWQoaWQ6IG51bWJlcik6IFByb21pc2U8VXNlcj4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHtEYXRhYmFzZUFQSS5yb290VVJMfS91c2Vycy8ke2lkfWApXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSlcclxuICAgICAgICAudGhlbih1c2VyRGF0YSA9PiBEYXRhYmFzZUFQSS5jb252ZXJ0VXNlckZyb21EYlRvTXZjKFt1c2VyRGF0YV0pLnBvcCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0VXNlckJ5Tmlja25hbWUobmlja25hbWU6IHN0cmluZyk6IFByb21pc2U8VXNlcj4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHtEYXRhYmFzZUFQSS5yb290VVJMfS91c2Vycz9uaWNrbmFtZT0ke25pY2tuYW1lfWApXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSlcclxuICAgICAgICAudGhlbih1c2VyRGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyRGF0YS5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBEYXRhYmFzZUFQSS5jb252ZXJ0VXNlckZyb21EYlRvTXZjKHVzZXJEYXRhKS5wb3AoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgYWRkVXNlcihuaWNrbmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybCA6IGAke0RhdGFiYXNlQVBJLnJvb3RVUkx9L3VzZXJzYCxcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQUk9KRUNUIHRhYmxlIG1ldGhvZHNcclxuICAgIFxyXG4gICAgc3RhdGljIGFzeW5jIGdldEFsbFByb2plY3RzKCk6IFByb21pc2U8UHJvamVjdFtdPiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke0RhdGFiYXNlQVBJLnJvb3RVUkx9L3Byb2plY3RzYClcclxuICAgICAgICAudGhlbihkYXRhID0+IGRhdGEuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChwcm9qZWN0RGF0YTogYW55KSA9PiBEYXRhYmFzZUFQSS5jb252ZXJ0UHJvamVjdEZyb21EYlRvTXZjKHByb2plY3REYXRhKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBhc3luYyBnZXRQcm9qZWN0c0J5VXNlcih1c2VySWQ6IG51bWJlcik6IFByb21pc2U8UHJvamVjdFtdPiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke0RhdGFiYXNlQVBJLnJvb3RVUkx9L3VzZXJzLyR7dXNlcklkfS9wcm9qZWN0c2ApXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSlcclxuICAgICAgICAudGhlbigocHJvamVjdERhdGE6IGFueSkgPT4gRGF0YWJhc2VBUEkuY29udmVydFByb2plY3RGcm9tRGJUb012Yyhwcm9qZWN0RGF0YSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBU0sgdGFibGUgbWV0aG9kc1xyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRBbGxUYXNrcygpOiBQcm9taXNlPFRhc2tbXT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHtEYXRhYmFzZUFQSS5yb290VVJMfS90YXNrc2ApXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSlcclxuICAgICAgICAudGhlbigodGFza0RhdGE6IGFueSkgPT4gRGF0YWJhc2VBUEkuY29udmVydFRhc2tGcm9tRGJUb012Yyh0YXNrRGF0YSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRUYXNrc0J5UHJvamVjdChwcm9qSWQ6IG51bWJlcik6IFByb21pc2U8VGFza1tdPiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke0RhdGFiYXNlQVBJLnJvb3RVUkx9L3Byb2plY3RzLyR7cHJvaklkfS90YXNrc2ApXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSlcclxuICAgICAgICAudGhlbigodGFza0RhdGE6IGFueSkgPT4gRGF0YWJhc2VBUEkuY29udmVydFRhc2tGcm9tRGJUb012Yyh0YXNrRGF0YSkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTWFuYWdlck1vZGVsIH0gZnJvbSBcIi4vbW9kZWxcIjtcclxuaW1wb3J0IHsgTWFuYWdlclZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFuYWdlciB7XHJcbiAgICBwdWJsaWMgbW9kZWw6IE1hbmFnZXJNb2RlbDtcclxuICAgIHB1YmxpYyB2aWV3OiBNYW5hZ2VyVmlldztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IE1hbmFnZXJNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMudmlldyA9IG5ldyBNYW5hZ2VyVmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcocGFyZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwuc2V0Q3VycmVudFVzZXIoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LmRyYXcocGFyZW50LCB0aGlzLm1vZGVsKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERhdGFiYXNlQVBJIH0gZnJvbSBcIi4uL2RhdGFiYXNlQVBJXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vdXNlci9jb250cm9sbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFuYWdlck1vZGVsIHtcclxuICAgIHByaXZhdGUgY3VycmVudFVzZXI6IFVzZXI7XHJcbiAgICBcclxuICAgIGFzeW5jIHNldEN1cnJlbnRVc2VyKCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VySWQgPSB0aGlzLmdldFVzZXJDb29raWUoKTtcclxuICAgICAgICBpZiAoY3VycmVudFVzZXJJZCA9PT0gLTEpXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBudWxsO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhd2FpdCBEYXRhYmFzZUFQSS5nZXRVc2VyQnlJZChOdW1iZXIoY3VycmVudFVzZXJJZCkpLnRoZW4odXNlciA9PiB0aGlzLmN1cnJlbnRVc2VyID0gdXNlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEN1cnJlbnRVc2VyKCk6IFVzZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRVc2VyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFVzZXJDb29raWUoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRVc2VyID09PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcclxuICAgICAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyAoNyoyNCo2MCo2MCoxMDAwKSk7ICAgICAvLyBleHBpcmVzIGluIDcgZGF5c1xyXG4gICAgICAgIHZhciBleHBpcmVzID0gJ2V4cGlyZXM9JysgZC50b1VUQ1N0cmluZygpO1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGB1c2VySWQ9JHtpZH07IGV4cGlyZXM9JHtleHBpcmVzfTsgcGF0aD0vO2A7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyB1c2VyJ3MgaWQgc3RvcmVkIGluIGNvb2tpZXMgKG9yIC0xIGlmIHRoZXJlJ3Mgbm8gY29va2llKVxyXG4gICAgICovXHJcbiAgICBnZXRVc2VyQ29va2llKCk6IG51bWJlciB7XHJcbiAgICAgICAgdmFyIG5hbWUgPSAndXNlcklkPSc7XHJcbiAgICAgICAgdmFyIGRlY29kZWRDb29raWUgPSBkZWNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQuY29va2llKTtcclxuICAgICAgICB2YXIgY29va2llQXJyYXkgPSBkZWNvZGVkQ29va2llLnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPGNvb2tpZUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjb29raWUgPSBjb29raWVBcnJheVtpXTtcclxuICAgICAgICAgICAgd2hpbGUgKGNvb2tpZS5jaGFyQXQoMCkgPT0gJyAnKSB7XHJcbiAgICAgICAgICAgICAgICBjb29raWUgPSBjb29raWUuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjb29raWUuaW5kZXhPZihuYW1lKSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKGNvb2tpZS5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGNvb2tpZS5sZW5ndGgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE5pY2tuYW1lcyBjYW4gY29uc2lzdCBvZjpcclxuICAgICAqIGxvd2VyIGNhc2UgbGV0dGVycyxcclxuICAgICAqIHVwcGVyIGNhc2UgbGV0dGVycyxcclxuICAgICAqIG51bWJlcnMsXHJcbiAgICAgKiB1bmRlcnNjb3JlcyBhbmRcclxuICAgICAqIGRvdHMuXHJcbiAgICAgKi9cclxuICAgIHZhbGlkYXRlSW5wdXREYXRhKG5pY2tuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAobmlja25hbWUgPT09ICcnIHx8IHBhc3N3b3JkID09PSAnJylcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAobmlja25hbWUubGVuZ3RoIDwgNCB8fCBuaWNrbmFtZS5sZW5ndGggPiAxNSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAocGFzc3dvcmQubGVuZ3RoIDwgNCB8fCBwYXNzd29yZC5sZW5ndGggPiAxNSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBtYXRjaGVzUmVnZXggPSAvXlthLXpBLVowLTlfXFwuXSskLy5leGVjKG5pY2tuYW1lKTtcclxuICAgICAgICByZXR1cm4gKG1hdGNoZXNSZWdleCAhPT0gbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyBhIGxvZ2luIHJlc3VsdCBtZXNzYWdlICgnc3VjY2VzcycgaWYgbG9naW4gc3VjY2Vzc2Z1bClcclxuICAgICAqL1xyXG4gICAgYXN5bmMgdHJ5TG9naW5Vc2VyKG5pY2tuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBEYXRhYmFzZUFQSS5nZXRVc2VyQnlOaWNrbmFtZShuaWNrbmFtZSk7XHJcbiAgICAgICAgaWYgKHVzZXIgPT09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiAndXNlciBkb2VzblxcJ3QgZXhpc3QnO1xyXG5cclxuICAgICAgICBpZiAodXNlci5tb2RlbC5nZXRQYXNzd29yZCgpICE9PSBwYXNzd29yZClcclxuICAgICAgICAgICAgcmV0dXJuICd3cm9uZyBwYXNzd29yZCc7XHJcblxyXG4gICAgICAgIC8vIHNhdmUgY3VycmVudCB1c2VyIGluIGNvb2tpZXNcclxuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdXNlcjtcclxuICAgICAgICB0aGlzLnNldFVzZXJDb29raWUodGhpcy5jdXJyZW50VXNlci5tb2RlbC5nZXRJZCgpKTtcclxuICAgICAgICByZXR1cm4gJ3N1Y2Nlc3MnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybnMgYSBzaWduIHVwIHJlc3VsdCBtZXNzYWdlICgnc3VjY2VzcycgaWYgbG9naW4gc3VjY2Vzc2Z1bClcclxuICAgICAqL1xyXG4gICAgYXN5bmMgdHJ5U2lnblVwVXNlcihuaWNrbmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICBjb25zdCB1c2VyV2l0aFNhbWVOaWNrbmFtZSA9IGF3YWl0IERhdGFiYXNlQVBJLmdldFVzZXJCeU5pY2tuYW1lKG5pY2tuYW1lKTtcclxuICAgICAgICBpZiAodXNlcldpdGhTYW1lTmlja25hbWUgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiAnbmlja25hbWUgYWxyZWFkeSB0YWtlbic7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1VzZXIgPSBhd2FpdCBEYXRhYmFzZUFQSS5hZGRVc2VyKG5pY2tuYW1lLCBwYXNzd29yZCk7XHJcblxyXG4gICAgICAgIC8vIHNhdmUgY3VycmVudCB1c2VyIGluIGNvb2tpZXNcclxuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gYXdhaXQgRGF0YWJhc2VBUEkuZ2V0VXNlckJ5SWQobmV3VXNlci5pZCk7XHJcbiAgICAgICAgdGhpcy5zZXRVc2VyQ29va2llKHRoaXMuY3VycmVudFVzZXIubW9kZWwuZ2V0SWQoKSk7XHJcbiAgICAgICAgcmV0dXJuICdzdWNjZXNzJztcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXRVc2VyKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9ICd1c2VySWQ9O2V4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMSBHTVQ7IGRvbWFpbj0xMjcuMC4wLjE7IHBhdGg9XCIvXCInO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi91c2VyL2NvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgTWFuYWdlck1vZGVsIH0gZnJvbSBcIi4vbW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYW5hZ2VyVmlldyB7XHJcbiAgICBwcml2YXRlIHBhcmVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc05hbWUgPSAnbWFuYWdlcic7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhwYXJlbnQ6IEhUTUxFbGVtZW50LCBtb2RlbDogTWFuYWdlck1vZGVsKSB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xyXG5cclxuICAgICAgICAvLyBjaGVja2luZyBmb3Igc2F2ZWQgdXNlciBpbiBjb29raWVzXHJcbiAgICAgICAgaWYgKG1vZGVsLmdldFVzZXJDb29raWUoKSA9PT0gLTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBkcmF3IHN0YXJ0IHBhZ2UgbG9nb1xyXG4gICAgICAgICAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgIGxvZ28uY2xhc3NOYW1lID0gJ3VuZHJhd0xvZ28nO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRyYXcgbG9naW4gcGFnZVxyXG4gICAgICAgICAgICB0aGlzLmRyYXdMb2dpblBhZ2UobW9kZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdQcm9maWxlSGVhZGVyKG1vZGVsKTtcclxuICAgICAgICAgICAgdGhpcy5kcmF3RGFzaGJvYXJkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGRhdGEgcmVxdWlyZXMgQ09MT1IsIFRJVExFIGFuZCBNRVNTQUdFIHByb3BlcnR5XHJcbiAgICAgKi9cclxuICAgIGRpc3BsYXlQb3B1cChkYXRhOiBhbnkpIHtcclxuICAgICAgICB2YXIgdG9hc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9hc3ROb3RpZicpO1xyXG4gICAgICAgIGlmICh0b2FzdCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0b2FzdCA9IHRoaXMuY3JlYXRlUG9wdXAoZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAoPGFueT4kKCcjdG9hc3ROb3RpZicpKS50b2FzdCgnc2hvdycpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVBvcHVwKGRhdGE6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHRvYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdG9hc3QuY2xhc3NOYW1lID0gJ3RvYXN0JztcclxuICAgICAgICB0b2FzdC5pZCA9ICd0b2FzdE5vdGlmJztcclxuXHJcbiAgICAgICAgY29uc3QgdG9hc3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0b2FzdEhlYWRlci5jbGFzc05hbWUgPSAndG9hc3QtaGVhZGVyJztcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhdHVzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHN0YXR1c0ljb24uY2xhc3NOYW1lID0gJ3N0YXR1c0ljb24nO1xyXG4gICAgICAgIHN0YXR1c0ljb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZGF0YS5jb2xvcjtcclxuICAgICAgICB0b2FzdEhlYWRlci5hcHBlbmRDaGlsZChzdGF0dXNJY29uKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGJsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3Ryb25nJyk7XHJcbiAgICAgICAgbGJsSGVhZGVyLmNsYXNzTmFtZSA9ICdtci1hdXRvJztcclxuICAgICAgICBsYmxIZWFkZXIuaW5uZXJIVE1MID0gZGF0YS50aXRsZTtcclxuICAgICAgICB0b2FzdEhlYWRlci5hcHBlbmRDaGlsZChsYmxIZWFkZXIpO1xyXG5cclxuICAgICAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hbGwnKTtcclxuICAgICAgICB0b2FzdEhlYWRlci5hcHBlbmRDaGlsZCh0aW1lKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidG5DbG9zZS50eXBlID0gJ2J1dHRvbic7XHJcbiAgICAgICAgYnRuQ2xvc2UuY2xhc3NOYW1lID0gJ21sLTIgbWItMSBjbG9zZSc7XHJcbiAgICAgICAgdG9hc3RIZWFkZXIuYXBwZW5kQ2hpbGQoYnRuQ2xvc2UpO1xyXG5cclxuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHNwYW4uaW5uZXJIVE1MID0gJyZ0aW1lczsnXHJcbiAgICAgICAgYnRuQ2xvc2UuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblxyXG4gICAgICAgIHRvYXN0LmFwcGVuZENoaWxkKHRvYXN0SGVhZGVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGJvZHkuY2xhc3NOYW1lID0gJ3RvYXN0LWJvZHknO1xyXG4gICAgICAgIGJvZHkuaW5uZXJIVE1MID0gZGF0YS5tZXNzYWdlO1xyXG5cclxuICAgICAgICB0b2FzdC5hcHBlbmRDaGlsZChib2R5KTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvYXN0KTtcclxuICAgICAgICAoPGFueT4kKCcjdG9hc3ROb3RpZicpKS50b2FzdCh7ZGVsYXk6IDMwMDB9KTtcclxuICAgICAgICByZXR1cm4gdG9hc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0xvZ2luUGFnZShtb2RlbDogTWFuYWdlck1vZGVsKSB7XHJcbiAgICAgICAgY29uc3QgbG9naW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsb2dpbkNvbnRhaW5lci5jbGFzc05hbWUgPSAnbG9naW5Db250YWluZXInO1xyXG5cclxuICAgICAgICBjb25zdCBsYmxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgbGJsVGl0bGUuaW5uZXJIVE1MID0gJ1Byb2plY3QgbWFuYWdlcic7XHJcbiAgICAgICAgbGJsVGl0bGUuY2xhc3NOYW1lID0gJ3RpdGxlJztcclxuICAgICAgICBsb2dpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsYmxUaXRsZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGJ0bkNvbnRhaW5lci5jbGFzc05hbWUgPSAnYnRuQ29udGFpbmVyJztcclxuXHJcbiAgICAgICAgY29uc3QgYnRuU2lnblVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnRuU2lnblVwLmlkID0gJ2J0blNpZ25VcCc7XHJcbiAgICAgICAgYnRuU2lnblVwLmNsYXNzTmFtZSA9ICdidG4gYnRuLXN1Y2Nlc3MnO1xyXG4gICAgICAgIGJ0blNpZ25VcC5pbm5lckhUTUwgPSAnU2lnbiB1cCc7XHJcbiAgICAgICAgYnRuU2lnblVwLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIHNpZ25VcEZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG5cclxuICAgICAgICAgICAgLy8gZm9jdXMgb24gbmlja25hbWUgaW5wdXQgZmllbGQgYWZ0ZXIgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0U2lnblVwTmlja25hbWUnKS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5TaWduVXApO1xyXG5cclxuICAgICAgICBjb25zdCBidG5Mb2dpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ0bkxvZ2luLmlkID0gJ2J0bkxvZ2luJztcclxuICAgICAgICBidG5Mb2dpbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi1saWdodCc7XHJcbiAgICAgICAgYnRuTG9naW4uaW5uZXJIVE1MID0gJ0xvZyBpbic7XHJcbiAgICAgICAgYnRuTG9naW4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuICAgICAgICAgICAgbG9naW5Gb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGZvY3VzIG9uIG5pY2tuYW1lIGlucHV0IGZpZWxkIGFmdGVyIGFuaW1hdGlvblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dExvZ2luTmlja25hbWUnKS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkxvZ2luKTtcclxuICAgICAgICBsb2dpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xyXG5cclxuICAgICAgICAvLyBkcmF3IGxvZ2luIGFuZCBzaW5nIHVwIGZvcm1zICAgICAgICBcclxuICAgICAgICBjb25zdCBsb2dpbkZvcm0gPSB0aGlzLmRyYXdGb3JtKGxvZ2luQ29udGFpbmVyLCBidG5Db250YWluZXIsIHtcclxuICAgICAgICAgICAgZm9ybVR5cGU6ICdMb2dpbicsXHJcbiAgICAgICAgICAgIGxibFRleHQ6ICdMb2cgaW4gdG8gUHJvamVjdCBNYW5hZ2VyJyxcclxuICAgICAgICAgICAgYnRuVGV4dDogJ0xvZyBpbicsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrRnVuY3Rpb246ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGxvYWRpbmcgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5jbGFzc05hbWUgPSAnc3Bpbm5lci1ib3JkZXIgc3Bpbm5lci1ib3JkZXItc20gdGV4dC1saWdodCc7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuTG9naW5Ob3cnKS5pbm5lckhUTUwgPSBhbmltYXRpb24ub3V0ZXJIVE1MO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGxvZ2luXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyeUxvZ2luKG1vZGVsLCBsb2dpbkZvcm0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qgc2lnblVwRm9ybSA9IHRoaXMuZHJhd0Zvcm0obG9naW5Db250YWluZXIsIGJ0bkNvbnRhaW5lciwge1xyXG4gICAgICAgICAgICBmb3JtVHlwZTogJ1NpZ25VcCcsXHJcbiAgICAgICAgICAgIGxibFRleHQ6ICdTaWduIHVwIHRvIFByb2plY3QgTWFuYWdlcicsXHJcbiAgICAgICAgICAgIGJ0blRleHQ6ICdTaWduIHVwJyxcclxuICAgICAgICAgICAgY2FsbGJhY2tGdW5jdGlvbjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gbG9hZGluZyBhbmltYXRpb25cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLmNsYXNzTmFtZSA9ICdzcGlubmVyLWJvcmRlciBzcGlubmVyLWJvcmRlci1zbSB0ZXh0LWxpZ2h0JztcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5TaWduVXBOb3cnKS5pbm5lckhUTUwgPSBhbmltYXRpb24ub3V0ZXJIVE1MO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGxvZ2luXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyeVNpZ25VcChtb2RlbCwgc2lnblVwRm9ybSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobG9naW5Db250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdGb3JtKHBhcmVudDogSFRNTEVsZW1lbnQsIGJ0bkNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGRhdGE6IGFueSk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsb2dpbkZvcm0uY2xhc3NOYW1lID0gJ2xvZ2luRm9ybSBoaWRlJztcclxuXHJcbiAgICAgICAgY29uc3QgbGJsTG9naW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGxibExvZ2luLmlubmVySFRNTCA9IGRhdGEubGJsVGV4dDtcclxuICAgICAgICBsYmxMb2dpbi5pZCA9ICdsYmxMb2dpbic7XHJcbiAgICAgICAgbG9naW5Gb3JtLmFwcGVuZENoaWxkKGxibExvZ2luKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXROaWNrbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgaW5wdXROaWNrbmFtZS5pZCA9IGBpbnB1dCR7ZGF0YS5mb3JtVHlwZX1OaWNrbmFtZWA7XHJcbiAgICAgICAgaW5wdXROaWNrbmFtZS50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgIGlucHV0Tmlja25hbWUuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCc7XHJcbiAgICAgICAgaW5wdXROaWNrbmFtZS5wbGFjZWhvbGRlciA9ICdOaWNrbmFtZSc7XHJcbiAgICAgICAgbG9naW5Gb3JtLmFwcGVuZENoaWxkKGlucHV0Tmlja25hbWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGlucHV0UGFzc3dvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGlucHV0UGFzc3dvcmQuaWQgPSBgaW5wdXQke2RhdGEuZm9ybVR5cGV9UGFzc3dvcmRgO1xyXG4gICAgICAgIGlucHV0UGFzc3dvcmQudHlwZSA9ICdwYXNzd29yZCc7XHJcbiAgICAgICAgaW5wdXRQYXNzd29yZC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcclxuICAgICAgICBpbnB1dFBhc3N3b3JkLnBsYWNlaG9sZGVyID0gJ1Bhc3N3b3JkJztcclxuICAgICAgICBpbnB1dFBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmNhbGxiYWNrRnVuY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWZyZXNoZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxvZ2luRm9ybS5hcHBlbmRDaGlsZChpbnB1dFBhc3N3b3JkKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuTG9naW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidG5Mb2dpbi5pZCA9IGBidG4ke2RhdGEuZm9ybVR5cGV9Tm93YDtcclxuICAgICAgICBidG5Mb2dpbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi1zdWNjZXNzJztcclxuICAgICAgICBidG5Mb2dpbi5pbm5lckhUTUwgPSBkYXRhLmJ0blRleHQ7XHJcbiAgICAgICAgYnRuTG9naW4ub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGRhdGEuY2FsbGJhY2tGdW5jdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVmcmVzaGVkJyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsb2dpbkZvcm0uYXBwZW5kQ2hpbGQoYnRuTG9naW4pO1xyXG5cclxuICAgICAgICBjb25zdCBidG5Hb0JhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidG5Hb0JhY2suY2xhc3NOYW1lID0gJ2J0biBidG4tbGluayc7XHJcbiAgICAgICAgYnRuR29CYWNrLmlubmVySFRNTCA9ICdCYWNrJztcclxuICAgICAgICBidG5Hb0JhY2sub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgbG9naW5Gb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuICAgICAgICAgICAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxvZ2luRm9ybS5hcHBlbmRDaGlsZChidG5Hb0JhY2spO1xyXG5cclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobG9naW5Gb3JtKTtcclxuICAgICAgICByZXR1cm4gbG9naW5Gb3JtO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHRyeUxvZ2luKG1vZGVsOiBNYW5hZ2VyTW9kZWwsIGxvZ2luRm9ybTogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBubiA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRMb2dpbk5pY2tuYW1lJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICAgICAgY29uc3QgcHN3ZCA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRMb2dpblBhc3N3b3JkJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICAgICAgbGV0IGVycm9yTXNnOiBzdHJpbmcgPSAnTG9naW4gZmFpbGVkOiAnO1xyXG4gICAgICAgIGxldCBsb2dpbk1zZyA9ICcnO1xyXG4gICAgICAgIGlmIChtb2RlbC52YWxpZGF0ZUlucHV0RGF0YShubiwgcHN3ZCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsb2dpbk1zZyA9IGF3YWl0IG1vZGVsLnRyeUxvZ2luVXNlcihubiwgcHN3ZCk7XHJcbiAgICAgICAgICAgIGlmIChsb2dpbk1zZyA9PT0gJ3N1Y2Nlc3MnKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgbG9naW4gcGFnZVxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndW5kcmF3TG9nbycpWzBdLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbG9naW5Db250YWluZXInKVswXS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBkcmF3IGRhc2hib2FyZFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3UHJvZmlsZUhlYWRlcihtb2RlbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdEYXNoYm9hcmQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5IHN1Y2Nlc3MgbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5UG9wdXAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTG9naW4gc3VjY2Vzc2Z1bCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1dlbGNvbWUgYmFjayB0byB0aGUgUHJvamVjdCBNYW5hZ2VyISdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGVycm9yTXNnICs9IGxvZ2luTXNnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBlcnJvck1zZyArPSAnSW52YWxpZCBpbnB1dC4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxvZ2luTXNnICE9PSAnc3VjY2VzcycpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgbGJsRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGJsRXJyb3InKTtcclxuICAgICAgICAgICAgaWYgKGxibEVycm9yID09PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgbGJsRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICBsYmxFcnJvci5pZCA9ICdsYmxFcnJvcic7XHJcbiAgICAgICAgICAgIGxibEVycm9yLmlubmVySFRNTCA9IGVycm9yTXNnO1xyXG4gICAgICAgICAgICBsb2dpbkZvcm0uYXBwZW5kQ2hpbGQobGJsRXJyb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIGFuaW1hdGlvblxyXG4gICAgICAgIGNvbnN0IGxvZ2luQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bkxvZ2luTm93Jyk7XHJcbiAgICAgICAgaWYgKGxvZ2luQnRuICE9IG51bGwpXHJcbiAgICAgICAgICAgIGxvZ2luQnRuLmlubmVySFRNTCA9ICdMb2cgaW4nO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHRyeVNpZ25VcChtb2RlbDogTWFuYWdlck1vZGVsLCBsb2dpbkZvcm06IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3Qgbm4gPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0U2lnblVwTmlja25hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgICAgICBjb25zdCBwc3dkID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFNpZ25VcFBhc3N3b3JkJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICAgICAgbGV0IGVycm9yTXNnOiBzdHJpbmcgPSAnU2lnbiB1cCBmYWlsZWQ6ICc7XHJcbiAgICAgICAgbGV0IHNpZ251cE1zZyA9ICcnO1xyXG4gICAgICAgIGlmIChtb2RlbC52YWxpZGF0ZUlucHV0RGF0YShubiwgcHN3ZCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzaWdudXBNc2cgPSBhd2FpdCBtb2RlbC50cnlTaWduVXBVc2VyKG5uLCBwc3dkKTtcclxuICAgICAgICAgICAgaWYgKHNpZ251cE1zZyA9PT0gJ3N1Y2Nlc3MnKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgbG9naW4gcGFnZVxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndW5kcmF3TG9nbycpWzBdLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbG9naW5Db250YWluZXInKVswXS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBkcmF3IGRhc2hib2FyZFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3UHJvZmlsZUhlYWRlcihtb2RlbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdEYXNoYm9hcmQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5IHN1Y2Nlc3MgbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5UG9wdXAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU2lnbiB1cCBzdWNjZXNzZnVsJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnV2VsY29tZSB0byB0aGUgUHJvamVjdCBNYW5hZ2VyISdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGVycm9yTXNnICs9IHNpZ251cE1zZztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZXJyb3JNc2cgKz0gJ0ludmFsaWQgaW5wdXQuJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzaWdudXBNc2cgIT09ICdzdWNjZXNzJylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBsYmxFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYmxFcnJvcicpO1xyXG4gICAgICAgICAgICBpZiAobGJsRXJyb3IgPT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBsYmxFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgIGxibEVycm9yLmlkID0gJ2xibEVycm9yJztcclxuICAgICAgICAgICAgbGJsRXJyb3IuaW5uZXJIVE1MID0gZXJyb3JNc2c7XHJcbiAgICAgICAgICAgIGxvZ2luRm9ybS5hcHBlbmRDaGlsZChsYmxFcnJvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZW1vdmUgYW5pbWF0aW9uXHJcbiAgICAgICAgY29uc3Qgc2lnbnVwQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0blNpZ25VcE5vdycpO1xyXG4gICAgICAgIGlmIChzaWdudXBCdG4gIT0gbnVsbClcclxuICAgICAgICAgICAgc2lnbnVwQnRuLmlubmVySFRNTCA9ICdTaWduIHVwJztcclxuICAgIH1cclxuXHJcbiAgICBkcmF3UHJvZmlsZUhlYWRlcihtb2RlbDogTWFuYWdlck1vZGVsKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdwcm9maWxlSGVhZGVyJztcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgdGl0bGUuY2xhc3NOYW1lID0gJ2hlYWRlclRpdGxlJztcclxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSAnUHJvamVjdCBNYW5hZ2VyJztcclxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbWVudS5jbGFzc05hbWUgPSAnaGVhZGVyTWVudSc7XHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKG1lbnUpO1xyXG5cclxuICAgICAgICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRyb3Bkb3duLmNsYXNzTmFtZSA9ICdkcm9wZG93bic7XHJcbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChkcm9wZG93bik7XHJcblxyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRyb3Bkb3duTWVudS5jbGFzc05hbWUgPSAnZHJvcGRvd24tbWVudSc7XHJcbiAgICAgICAgKDxhbnk+ZHJvcGRvd25NZW51KVsnYXJpYS1sYWJlbGxlZGJ5J10gPSAnZHJvcGRvd25NZW51QnV0dG9uJztcclxuXHJcbiAgICAgICAgY29uc3QgdXNlcjogVXNlciA9IG1vZGVsLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICAgICAgY29uc3Qgbmlja25hbWVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbmlja25hbWVJdGVtLmNsYXNzTmFtZSA9ICdkcm9wZG93bi1pdGVtJztcclxuICAgICAgICBuaWNrbmFtZUl0ZW0uaW5uZXJIVE1MID0gYCMke3VzZXIubW9kZWwuZ2V0SWQoKX0gfCAke3VzZXIubW9kZWwubmlja25hbWV9ICgke3VzZXIubW9kZWwuZ2V0TnVtT2ZQcm9qZWN0cygpfSlgO1xyXG4gICAgICAgIGRyb3Bkb3duTWVudS5hcHBlbmRDaGlsZChuaWNrbmFtZUl0ZW0pO1xyXG5cclxuICAgICAgICBjb25zdCBidG5Mb2dvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgYnRuTG9nb3V0LmNsYXNzTmFtZSA9ICdkcm9wZG93bi1pdGVtJztcclxuICAgICAgICBidG5Mb2dvdXQuaW5uZXJIVE1MID0gJ0xvZyBvdXQnO1xyXG4gICAgICAgIGJ0bkxvZ291dC5vbmNsaWNrID0gKCkgPT4gbW9kZWwubG9nb3V0VXNlcigpO1xyXG4gICAgICAgIGRyb3Bkb3duTWVudS5hcHBlbmRDaGlsZChidG5Mb2dvdXQpO1xyXG5cclxuICAgICAgICBjb25zdCBidG5Qcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQoYnRuUHJvZmlsZSk7XHJcbiAgICAgICAgbGV0IGJ0bkh0bWwgPSAnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGRyb3Bkb3duLXRvZ2dsZVwiIHR5cGU9XCJidXR0b25cIiAnO1xyXG4gICAgICAgIGJ0bkh0bWwgKz0gJ2lkPVwiZHJvcGRvd25NZW51QnV0dG9uXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgJztcclxuICAgICAgICBidG5IdG1sICs9ICdhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj48aSBjbGFzcz1cImZhcyBmYS11c2VyIGljb25Db2xvclwiPjwvaT48L2J1dHRvbj4nO1xyXG4gICAgICAgIGJ0blByb2ZpbGUub3V0ZXJIVE1MID0gYnRuSHRtbDtcclxuICAgICAgICBcclxuICAgICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChkcm9wZG93bk1lbnUpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdEYXNoYm9hcmQoKSB7XHJcblxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuLi90YXNrL2NvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgUHJvamVjdE1vZGVsIH0gZnJvbSBcIi4vbW9kZWxcIjtcclxuaW1wb3J0IHsgUHJvamVjdFZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XHJcbiAgICBwdWJsaWMgbW9kZWw6IFByb2plY3RNb2RlbDtcclxuICAgIHB1YmxpYyB2aWV3OiBQcm9qZWN0VmlldztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIGR1ZURhdGU6IERhdGUpIHtcclxuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IFByb2plY3RNb2RlbChpZCwgbmFtZSwgZHVlRGF0ZSk7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gbmV3IFByb2plY3RWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhwYXJlbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52aWV3LmRyYXcocGFyZW50LCB0aGlzLm1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYXNrKHQ6IFRhc2spOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1vZGVsLmFkZFRhc2sodCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlVGFzayhpZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5yZW1vdmVUYXNrKGlkKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi4vdGFzay9jb250cm9sbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdE1vZGVsIHtcclxuICAgIHByaXZhdGUgaWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHRhc2tzOiBUYXNrW107XHJcbiAgICBwdWJsaWMgZHVlRGF0ZTogRGF0ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIGR1ZURhdGU6IERhdGUpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRhc2tzKCk6IFRhc2tbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3M7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGFza3ModDogVGFza1tdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50YXNrcyA9IHQ7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGFzayh0OiBUYXNrKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVRhc2soaWQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodDogVGFzaykgPT4gdC5tb2RlbC5nZXRJZCgpICE9PSBpZCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQcm9qZWN0TW9kZWwgfSBmcm9tIFwiLi9tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RWaWV3IHtcclxuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgcGFyZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkcmF3KHBhcmVudDogSFRNTEVsZW1lbnQsIG1vZGVsOiBQcm9qZWN0TW9kZWwpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NOYW1lID0gJ3Byb2plY3QnO1xyXG4gICAgICAgIGNvbnN0IGxibFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBsYmxUaXRsZS5pbm5lckhUTUwgPSBgIyR7bW9kZWwuZ2V0SWQoKX0gfCAke21vZGVsLm5hbWV9PGJyPmA7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGJsVGl0bGUpO1xyXG5cclxuICAgICAgICBtb2RlbC5nZXRUYXNrcygpLmZvckVhY2godGFzayA9PiB0YXNrLmRyYXcodGhpcy5jb250YWluZXIpKTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGFza1N0YXRlIH0gZnJvbSBcIi4uL3Rhc2tTdGF0ZVwiO1xyXG5pbXBvcnQgeyBUYXNrTW9kZWwgfSBmcm9tIFwiLi9tb2RlbFwiO1xyXG5pbXBvcnQgeyBUYXNrVmlldyB9IGZyb20gXCIuL3ZpZXdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUYXNrIHtcclxuICAgIHB1YmxpYyBtb2RlbDogVGFza01vZGVsO1xyXG4gICAgcHVibGljIHZpZXc6IFRhc2tWaWV3O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgc3RhdGU6IFRhc2tTdGF0ZSkge1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBuZXcgVGFza01vZGVsKGlkLCBuYW1lLCBkZXNjcmlwdGlvbiwgc3RhdGUpO1xyXG4gICAgICAgIHRoaXMudmlldyA9IG5ldyBUYXNrVmlldygpO1xyXG4gICAgfSAgICBcclxuXHJcbiAgICBkcmF3KHBhcmVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnZpZXcuZHJhdyhwYXJlbnQsIHRoaXMubW9kZWwpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGFza1N0YXRlIH0gZnJvbSBcIi4uL3Rhc2tTdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhc2tNb2RlbCB7XHJcbiAgICBwcml2YXRlIGlkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHN0YXRlOiBUYXNrU3RhdGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCBzdGF0ZTogVGFza1N0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0YXRlKCk6IFRhc2tTdGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUYXNrTW9kZWwgfSBmcm9tIFwiLi9tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhc2tWaWV3IHtcclxuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgcGFyZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcocGFyZW50OiBIVE1MRWxlbWVudCwgbW9kZWw6IFRhc2tNb2RlbCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc05hbWUgPSAndGFzayc7XHJcbiAgICAgICAgY29uc3QgbGJsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgbGJsTmFtZS5pbm5lckhUTUwgPSBgTmFtZTogJHttb2RlbC5uYW1lfTxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNjcmlwdGlvbjogJHttb2RlbC5kZXNjcmlwdGlvbn08YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdGU6ICR7bW9kZWwuZ2V0U3RhdGUoKS50b1N0cmluZygpfWA7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGJsTmFtZSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi9wcm9qZWN0L2NvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4vbW9kZWxcIjtcclxuaW1wb3J0IHsgVXNlclZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlciB7XHJcbiAgICBwdWJsaWMgbW9kZWw6IFVzZXJNb2RlbDtcclxuICAgIHB1YmxpYyB2aWV3OiBVc2VyVmlldztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBuaWNrbmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBVc2VyTW9kZWwoaWQsIG5pY2tuYW1lLCBwYXNzd29yZCk7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gbmV3IFVzZXJWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUHJvamVjdChwOiBQcm9qZWN0KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hZGRQcm9qZWN0KHApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVByb2plY3QoaWQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubW9kZWwucmVtb3ZlUHJvamVjdChpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhwYXJlbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52aWV3LmRyYXcocGFyZW50LCB0aGlzLm1vZGVsKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi4vcHJvamVjdC9jb250cm9sbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlck1vZGVsIHtcclxuICAgIHByaXZhdGUgaWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBuaWNrbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBwYXNzd29yZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBwcm9qZWN0czogUHJvamVjdFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIG5pY2tuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5uaWNrbmFtZSA9IG5pY2tuYW1lO1xyXG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBwYXNzd29yZDtcclxuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQYXNzd29yZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhc3N3b3JkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2plY3RzKCk6IFByb2plY3RbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvamVjdHMocDogUHJvamVjdFtdKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TnVtT2ZQcm9qZWN0cygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBhZGRQcm9qZWN0KHA6IFByb2plY3QpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlUHJvamVjdChpZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKChwOiBQcm9qZWN0KSA9PiBwLm1vZGVsLmdldElkKCkgIT09IGlkKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuL21vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlclZpZXcge1xyXG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBwYXJlbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhwYXJlbnQ6IEhUTUxFbGVtZW50LCBtb2RlbDogVXNlck1vZGVsKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTmFtZSA9ICd1c2VyJztcclxuICAgICAgICBjb25zdCBsYmxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBsYmxOYW1lLmlubmVySFRNTCA9IGAke21vZGVsLm5pY2tuYW1lfTxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoJHttb2RlbC5nZXROdW1PZlByb2plY3RzKCl9IHByb2plY3RzKWA7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobGJsTmFtZSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBEYXRhYmFzZUFQSSB9IGZyb20gXCIuL2RhdGFiYXNlQVBJXCI7XHJcbmltcG9ydCB7IE1hbmFnZXIgfSBmcm9tIFwiLi9tYW5hZ2VyL2NvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IGRiVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XHJcbkRhdGFiYXNlQVBJLnNldFJvb3RVUkwoZGJVUkwpO1xyXG5cclxuY29uc3QgbWFuYWdlcjogTWFuYWdlciA9IG5ldyBNYW5hZ2VyKCk7XHJcbm1hbmFnZXIuZHJhdyhkb2N1bWVudC5ib2R5KTsiXSwic291cmNlUm9vdCI6IiJ9