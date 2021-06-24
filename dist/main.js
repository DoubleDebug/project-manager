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
        return __awaiter(this, void 0, void 0, function () {
            var projects, _loop_1, _i, projData_1, proj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (projData.length == 0)
                            return [2 /*return*/, null];
                        projects = [];
                        _loop_1 = function (proj) {
                            var newProject;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        newProject = new _project_controller__WEBPACK_IMPORTED_MODULE_0__.Project(proj.id, proj.name, proj.dueDate);
                                        return [4 /*yield*/, DatabaseAPI.getTasksByProject(proj.id)
                                                .then(function (tasks) { return newProject.model.setTasks(tasks); })];
                                    case 1:
                                        _b.sent();
                                        projects.push(newProject);
                                        return [2 /*return*/];
                                }
                            });
                        };
                        _i = 0, projData_1 = projData;
                        _a.label = 1;
                    case 1:
                        if (!(_i < projData_1.length)) return [3 /*break*/, 4];
                        proj = projData_1[_i];
                        return [5 /*yield**/, _loop_1(proj)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, projects];
                }
            });
        });
    };
    DatabaseAPI.convertUserFromDbToMvc = function (userData) {
        return __awaiter(this, void 0, void 0, function () {
            var users, _loop_2, _i, userData_1, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (userData.length == 0)
                            return [2 /*return*/, null];
                        users = [];
                        _loop_2 = function (user) {
                            var newUser;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        newUser = new _user_controller__WEBPACK_IMPORTED_MODULE_2__.User(user.id, user.nickname, user.password);
                                        return [4 /*yield*/, DatabaseAPI.getProjectsByUser(user.id)
                                                .then(function (projects) { return newUser.model.setProjects(projects); })];
                                    case 1:
                                        _b.sent();
                                        users.push(newUser);
                                        return [2 /*return*/];
                                }
                            });
                        };
                        _i = 0, userData_1 = userData;
                        _a.label = 1;
                    case 1:
                        if (!(_i < userData_1.length)) return [3 /*break*/, 4];
                        user = userData_1[_i];
                        return [5 /*yield**/, _loop_2(user)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, users];
                }
            });
        });
    };
    // USER table methods
    DatabaseAPI.getAllUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(DatabaseAPI.rootURL + "/users")
                        .then(function (data) { return data.json(); })
                        .then(function (userData) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, DatabaseAPI.convertUserFromDbToMvc(userData)];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); })];
            });
        });
    };
    DatabaseAPI.getUserById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(DatabaseAPI.rootURL + "/users/" + id)
                        .then(function (data) { return data.json(); })
                        .then(function (userData) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, DatabaseAPI.convertUserFromDbToMvc([userData])];
                            case 1: return [2 /*return*/, (_a.sent()).pop()];
                        }
                    }); }); })];
            });
        });
    };
    DatabaseAPI.getUserByNickname = function (nickname) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(DatabaseAPI.rootURL + "/users?nickname=" + nickname)
                        .then(function (data) { return data.json(); })
                        .then(function (userData) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (userData.length === 0)
                                        return [2 /*return*/, null];
                                    return [4 /*yield*/, DatabaseAPI.convertUserFromDbToMvc(userData)];
                                case 1: return [2 /*return*/, (_a.sent()).pop()];
                            }
                        });
                    }); })];
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
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(DatabaseAPI.rootURL + "/projects")
                        .then(function (data) { return data.json(); })
                        .then(function (projectData) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, DatabaseAPI.convertProjectFromDbToMvc(projectData)];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); })];
            });
        });
    };
    DatabaseAPI.getProjectsByUser = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(DatabaseAPI.rootURL + "/users/" + userId + "/projects")
                        .then(function (data) { return data.json(); })
                        .then(function (projectData) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, DatabaseAPI.convertProjectFromDbToMvc(projectData)];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); })];
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
        this.model.loadLoggedInUser().then(function () {
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
    ManagerModel.prototype.loadLoggedInUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentUserId, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        currentUserId = this.getUserCookie();
                        if (!(currentUserId === -1)) return [3 /*break*/, 1];
                        this.currentUser = null;
                        return [3 /*break*/, 3];
                    case 1:
                        _a = this;
                        return [4 /*yield*/, _databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.getUserById(Number(currentUserId))];
                    case 2:
                        _a.currentUser = _b.sent();
                        _b.label = 3;
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
        document.cookie = 'userId=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
        location.reload();
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
            this.drawDashboard(model);
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
                            this.drawDashboard(model);
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
                            this.drawDashboard(model);
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
        var btnAddProject = document.createElement('button');
        btnAddProject.className = 'btn btn-success';
        btnAddProject.id = 'btnAddProject';
        var plusIcon = document.createElement('i');
        plusIcon.className = 'fas fa-plus';
        btnAddProject.appendChild(plusIcon);
        dropdown.appendChild(btnAddProject);
        var dropdownMenu = document.createElement('div');
        dropdownMenu.className = 'dropdown-menu';
        dropdownMenu['aria-labelledby'] = 'dropdownMenuButton';
        var user = model.getCurrentUser();
        var nicknameItem = document.createElement('div');
        nicknameItem.className = 'dropdown-item';
        nicknameItem.innerHTML = "#" + user.model.getId() + " | " + user.model.nickname;
        dropdownMenu.appendChild(nicknameItem);
        var btnLogout = document.createElement('a');
        btnLogout.className = 'dropdown-item';
        btnLogout.innerHTML = 'Log out';
        btnLogout.onclick = function () { return model.logoutUser(); };
        dropdownMenu.appendChild(btnLogout);
        var btnProfile = document.createElement('button');
        dropdown.appendChild(btnProfile);
        var btnHtml = '<button class="btn btn-light dropdown-toggle" type="button" ';
        btnHtml += 'id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" ';
        btnHtml += 'aria-expanded="false"><i class="fas fa-user iconColor"></i></button>';
        btnProfile.outerHTML = btnHtml;
        dropdown.appendChild(dropdownMenu);
    };
    ManagerView.prototype.drawDashboard = function (model) {
        var _this = this;
        var projects = model.getCurrentUser().model.getProjects();
        projects.forEach(function (proj) { return proj.draw(_this.container); });
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

/***/ "./src/ts/taskState.ts":
/*!*****************************!*\
  !*** ./src/ts/taskState.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskState": () => (/* binding */ TaskState)
/* harmony export */ });
var TaskState;
(function (TaskState) {
    TaskState[TaskState["To do"] = 0] = "To do";
    TaskState[TaskState["In progress"] = 1] = "In progress";
    TaskState[TaskState["Finished"] = 2] = "Finished";
})(TaskState || (TaskState = {}));


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
/* harmony import */ var _taskState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../taskState */ "./src/ts/taskState.ts");

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
        return _taskState__WEBPACK_IMPORTED_MODULE_0__.TaskState[this.state];
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
        lblName.innerHTML = "Name: " + model.name + "<br>\n                             Description: " + model.description + "<br>\n                             State: " + model.getState();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvZGF0YWJhc2VBUEkudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL21hbmFnZXIvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvbWFuYWdlci9tb2RlbC50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvbWFuYWdlci92aWV3LnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy9wcm9qZWN0L2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL3Byb2plY3QvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL3Byb2plY3Qvdmlldy50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvdGFza1N0YXRlLnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy90YXNrL2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL3Rhc2svbW9kZWwudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL3Rhc2svdmlldy50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvdXNlci9jb250cm9sbGVyLnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy91c2VyL21vZGVsLnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy91c2VyL3ZpZXcudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDTjtBQUNBO0FBRXpDO0lBQUE7SUFnSEEsQ0FBQztJQTdHVSxzQkFBVSxHQUFqQixVQUFrQixHQUFXO1FBQ3pCLFdBQVcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO0lBQzlCLENBQUM7SUFFRCxxQkFBcUI7SUFFZCxrQ0FBc0IsR0FBN0IsVUFBOEIsUUFBYTtRQUN2QyxJQUFJLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQztZQUNwQixPQUFPLElBQUksQ0FBQztRQUVoQixJQUFNLEtBQUssR0FBVyxFQUFFLENBQUM7UUFDekIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQVM7WUFDdkIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLGtEQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkYsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRVkscUNBQXlCLEdBQXRDLFVBQXVDLFFBQWE7Ozs7Ozt3QkFDaEQsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUM7NEJBQ3BCLHNCQUFPLElBQUksRUFBQzt3QkFFVixRQUFRLEdBQWMsRUFBRSxDQUFDOzRDQUN0QixJQUFJOzs7Ozt3Q0FDSCxVQUFVLEdBQUcsSUFBSSx3REFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7d0NBQ2pFLHFCQUFNLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2lEQUMzQyxJQUFJLENBQUMsZUFBSyxJQUFJLGlCQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQzs7d0NBRGhELFNBQ2dELENBQUM7d0NBQ2pELFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Ozs7OzhCQUpMLEVBQVIscUJBQVE7Ozs2QkFBUix1QkFBUTt3QkFBaEIsSUFBSTtzREFBSixJQUFJOzs7Ozt3QkFBSSxJQUFROzs0QkFNekIsc0JBQU8sUUFBUSxFQUFDOzs7O0tBQ25CO0lBRVksa0NBQXNCLEdBQW5DLFVBQW9DLFFBQWE7Ozs7Ozt3QkFDN0MsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUM7NEJBQ3BCLHNCQUFPLElBQUksRUFBQzt3QkFFVixLQUFLLEdBQVcsRUFBRSxDQUFDOzRDQUNoQixJQUFJOzs7Ozt3Q0FDSCxPQUFPLEdBQUcsSUFBSSxrREFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7d0NBQ2hFLHFCQUFNLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2lEQUMzQyxJQUFJLENBQUMsa0JBQVEsSUFBSSxjQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQzs7d0NBRHRELFNBQ3NELENBQUM7d0NBQ3ZELEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7OzhCQUpDLEVBQVIscUJBQVE7Ozs2QkFBUix1QkFBUTt3QkFBaEIsSUFBSTtzREFBSixJQUFJOzs7Ozt3QkFBSSxJQUFROzs0QkFNekIsc0JBQU8sS0FBSyxFQUFDOzs7O0tBQ2hCO0lBRUQscUJBQXFCO0lBRVIsdUJBQVcsR0FBeEI7Ozs7Z0JBQ0ksc0JBQU8sS0FBSyxDQUFJLFdBQVcsQ0FBQyxPQUFPLFdBQVEsQ0FBQzt5QkFDM0MsSUFBSSxDQUFDLGNBQUksSUFBSSxXQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDO3lCQUN6QixJQUFJLENBQUMsVUFBTyxRQUFROztvQ0FBSyxxQkFBTSxXQUFXLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDO29DQUFsRCwrQkFBa0Q7OzZCQUFBLENBQUMsRUFBQzs7O0tBQ2pGO0lBRVksdUJBQVcsR0FBeEIsVUFBeUIsRUFBVTs7OztnQkFDL0Isc0JBQU8sS0FBSyxDQUFJLFdBQVcsQ0FBQyxPQUFPLGVBQVUsRUFBSSxDQUFDO3lCQUNqRCxJQUFJLENBQUMsY0FBSSxJQUFJLFdBQUksQ0FBQyxJQUFJLEVBQUUsRUFBWCxDQUFXLENBQUM7eUJBQ3pCLElBQUksQ0FBQyxVQUFPLFFBQVE7O29DQUFNLHFCQUFNLFdBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29DQUFyRCx1QkFBQyxTQUFvRCxDQUFDLENBQUMsR0FBRyxFQUFFOzs2QkFBQSxDQUFDLEVBQUM7OztLQUMzRjtJQUVZLDZCQUFpQixHQUE5QixVQUErQixRQUFnQjs7OztnQkFDM0Msc0JBQU8sS0FBSyxDQUFJLFdBQVcsQ0FBQyxPQUFPLHdCQUFtQixRQUFVLENBQUM7eUJBQ2hFLElBQUksQ0FBQyxjQUFJLElBQUksV0FBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQzt5QkFDekIsSUFBSSxDQUFDLFVBQU8sUUFBUTs7OztvQ0FDakIsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUM7d0NBQ3JCLHNCQUFPLElBQUksRUFBQztvQ0FFUixxQkFBTSxXQUFXLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDO3dDQUExRCxzQkFBTyxDQUFDLFNBQWtELENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBQzs7O3lCQUNyRSxDQUFDLEVBQUM7OztLQUNOO0lBRVksbUJBQU8sR0FBcEIsVUFBcUIsUUFBZ0IsRUFBRSxRQUFnQjs7O2dCQUNuRCxzQkFBTyxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUNWLEdBQUcsRUFBTSxXQUFXLENBQUMsT0FBTyxXQUFRO3dCQUNwQyxJQUFJLEVBQUUsTUFBTTt3QkFDWixJQUFJLEVBQUU7NEJBQ0YsUUFBUSxFQUFFLFFBQVE7NEJBQ2xCLFFBQVEsRUFBRSxRQUFRO3lCQUNyQjt3QkFDRCxLQUFLLEVBQUUsSUFBSTtxQkFDZCxDQUFDLEVBQUM7OztLQUNOO0lBRUQsd0JBQXdCO0lBRVgsMEJBQWMsR0FBM0I7Ozs7Z0JBQ0ksc0JBQU8sS0FBSyxDQUFJLFdBQVcsQ0FBQyxPQUFPLGNBQVcsQ0FBQzt5QkFDOUMsSUFBSSxDQUFDLGNBQUksSUFBSSxXQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDO3lCQUN6QixJQUFJLENBQUMsVUFBTyxXQUFnQjs7b0NBQUsscUJBQU0sV0FBVyxDQUFDLHlCQUF5QixDQUFDLFdBQVcsQ0FBQztvQ0FBeEQsK0JBQXdEOzs2QkFBQSxDQUFDLEVBQUM7OztLQUMvRjtJQUVZLDZCQUFpQixHQUE5QixVQUErQixNQUFjOzs7O2dCQUN6QyxzQkFBTyxLQUFLLENBQUksV0FBVyxDQUFDLE9BQU8sZUFBVSxNQUFNLGNBQVcsQ0FBQzt5QkFDOUQsSUFBSSxDQUFDLGNBQUksSUFBSSxXQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDO3lCQUN6QixJQUFJLENBQUMsVUFBTyxXQUFnQjs7b0NBQUsscUJBQU0sV0FBVyxDQUFDLHlCQUF5QixDQUFDLFdBQVcsQ0FBQztvQ0FBeEQsK0JBQXdEOzs2QkFBQSxDQUFDLEVBQUM7OztLQUMvRjtJQUVELHFCQUFxQjtJQUVSLHVCQUFXLEdBQXhCOzs7Z0JBQ0ksc0JBQU8sS0FBSyxDQUFJLFdBQVcsQ0FBQyxPQUFPLFdBQVEsQ0FBQzt5QkFDM0MsSUFBSSxDQUFDLGNBQUksSUFBSSxXQUFJLENBQUMsSUFBSSxFQUFFLEVBQVgsQ0FBVyxDQUFDO3lCQUN6QixJQUFJLENBQUMsVUFBQyxRQUFhLElBQUssa0JBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsRUFBNUMsQ0FBNEMsQ0FBQyxFQUFDOzs7S0FDMUU7SUFFWSw2QkFBaUIsR0FBOUIsVUFBK0IsTUFBYzs7O2dCQUN6QyxzQkFBTyxLQUFLLENBQUksV0FBVyxDQUFDLE9BQU8sa0JBQWEsTUFBTSxXQUFRLENBQUM7eUJBQzlELElBQUksQ0FBQyxjQUFJLElBQUksV0FBSSxDQUFDLElBQUksRUFBRSxFQUFYLENBQVcsQ0FBQzt5QkFDekIsSUFBSSxDQUFDLFVBQUMsUUFBYSxJQUFLLGtCQUFXLENBQUMsc0JBQXNCLENBQUMsUUFBUSxDQUFDLEVBQTVDLENBQTRDLENBQUMsRUFBQzs7O0tBQzFFO0lBQ0wsa0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSHNDO0FBQ0Y7QUFFckM7SUFJSTtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxnREFBWSxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLDhDQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsc0JBQUksR0FBSixVQUFLLE1BQW1CO1FBQXhCLGlCQUlDO1FBSEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQztZQUMvQixLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCNEM7QUFHN0M7SUFBQTtJQXlHQSxDQUFDO0lBdEdTLHVDQUFnQixHQUF0Qjs7Ozs7O3dCQUNVLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7NkJBQ3ZDLGNBQWEsS0FBSyxDQUFDLENBQUMsR0FBcEIsd0JBQW9CO3dCQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzs7O3dCQUV4QixTQUFJO3dCQUFlLHFCQUFNLGlFQUF1QixDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQzs7d0JBQXZFLEdBQUssV0FBVyxHQUFHLFNBQW9ELENBQUM7Ozs7OztLQUUvRTtJQUVELHFDQUFjLEdBQWQ7UUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVELG9DQUFhLEdBQWIsVUFBYyxFQUFVO1FBQ3BCLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJO1lBQ3pCLE9BQU87UUFFWCxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBSyxvQkFBb0I7UUFDcEUsSUFBSSxPQUFPLEdBQUcsVUFBVSxHQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxQyxRQUFRLENBQUMsTUFBTSxHQUFHLFlBQVUsRUFBRSxrQkFBYSxPQUFPLGNBQVcsQ0FBQztJQUNsRSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxvQ0FBYSxHQUFiO1FBQ0ksSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ3JCLElBQUksYUFBYSxHQUFHLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4RCxJQUFJLFdBQVcsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLEtBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JDLElBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFO2dCQUM1QixNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM5QjtZQUVILElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzNCLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUMvRDtTQUNKO1FBQ0QsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNkLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsd0NBQWlCLEdBQWpCLFVBQWtCLFFBQWdCLEVBQUUsUUFBZ0I7UUFDaEQsSUFBSSxRQUFRLEtBQUssRUFBRSxJQUFJLFFBQVEsS0FBSyxFQUFFO1lBQ2xDLE9BQU8sS0FBSyxDQUFDO1FBRWpCLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxFQUFFO1lBQzNDLE9BQU8sS0FBSyxDQUFDO1FBRWpCLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxFQUFFO1lBQzNDLE9BQU8sS0FBSyxDQUFDO1FBRWpCLElBQU0sWUFBWSxHQUFHLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxPQUFPLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRDs7T0FFRztJQUNHLG1DQUFZLEdBQWxCLFVBQW1CLFFBQWdCLEVBQUUsUUFBZ0I7Ozs7OzRCQUNwQyxxQkFBTSx1RUFBNkIsQ0FBQyxRQUFRLENBQUM7O3dCQUFwRCxJQUFJLEdBQUcsU0FBNkM7d0JBQzFELElBQUksSUFBSSxLQUFLLElBQUk7NEJBQ2Isc0JBQU8scUJBQXFCLEVBQUM7d0JBRWpDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxRQUFROzRCQUNyQyxzQkFBTyxnQkFBZ0IsRUFBQzt3QkFFNUIsK0JBQStCO3dCQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzt3QkFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO3dCQUNuRCxzQkFBTyxTQUFTLEVBQUM7Ozs7S0FDcEI7SUFFRDs7T0FFRztJQUNHLG9DQUFhLEdBQW5CLFVBQW9CLFFBQWdCLEVBQUUsUUFBZ0I7Ozs7OzRCQUNyQixxQkFBTSx1RUFBNkIsQ0FBQyxRQUFRLENBQUM7O3dCQUFwRSxvQkFBb0IsR0FBRyxTQUE2Qzt3QkFDMUUsSUFBSSxvQkFBb0IsS0FBSyxJQUFJOzRCQUM3QixzQkFBTyx3QkFBd0IsRUFBQzt3QkFFcEIscUJBQU0sNkRBQW1CLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQzs7d0JBQXZELE9BQU8sR0FBRyxTQUE2Qzt3QkFFN0QsK0JBQStCO3dCQUMvQixTQUFJO3dCQUFlLHFCQUFNLGlFQUF1QixDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7O3dCQUQ1RCwrQkFBK0I7d0JBQy9CLEdBQUssV0FBVyxHQUFHLFNBQXlDLENBQUM7d0JBQzdELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQzt3QkFDbkQsc0JBQU8sU0FBUyxFQUFDOzs7O0tBQ3BCO0lBRUQsaUNBQVUsR0FBVjtRQUNJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsdURBQXVELENBQUM7UUFDMUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4R0Q7SUFJSTtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDekMsQ0FBQztJQUVELDBCQUFJLEdBQUosVUFBSyxNQUFtQixFQUFFLEtBQW1CO1FBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV4QyxxQ0FBcUM7UUFDckMsSUFBSSxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQ2hDO1lBQ0ksdUJBQXVCO1lBQ3ZCLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7WUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFakMsa0JBQWtCO1lBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7YUFFRDtZQUNJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0NBQVksR0FBWixVQUFhLElBQVM7UUFDbEIsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsRCxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDaEIsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEM7UUFFSyxDQUFDLENBQUMsYUFBYSxDQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQVksSUFBUztRQUNqQixJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLEtBQUssQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQzFCLEtBQUssQ0FBQyxFQUFFLEdBQUcsWUFBWSxDQUFDO1FBRXhCLElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsV0FBVyxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7UUFFdkMsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxVQUFVLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztRQUNwQyxVQUFVLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlDLFdBQVcsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFcEMsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRCxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUNoQyxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDakMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVuQyxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFOUIsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxRQUFRLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUN6QixRQUFRLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDO1FBQ3ZDLFdBQVcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbEMsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVM7UUFDMUIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUzQixLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRS9CLElBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRTlCLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLGFBQWEsQ0FBRSxDQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzdDLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxtQ0FBYSxHQUFiLFVBQWMsS0FBbUI7UUFBakMsaUJBMEVDO1FBekVHLElBQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsY0FBYyxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztRQUU1QyxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELFFBQVEsQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7UUFDdkMsUUFBUSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFDN0IsY0FBYyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVyQyxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25ELFlBQVksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBRXhDLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsU0FBUyxDQUFDLEVBQUUsR0FBRyxXQUFXLENBQUM7UUFDM0IsU0FBUyxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQztRQUN4QyxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUNoQyxTQUFTLENBQUMsT0FBTyxHQUFHO1lBQ2hCLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3RDLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXBDLGdEQUFnRDtZQUNoRCxVQUFVLENBQUM7Z0JBQ1AsUUFBUSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzNELENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQztRQUNGLFlBQVksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFcEMsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxRQUFRLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQztRQUN6QixRQUFRLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztRQUNyQyxRQUFRLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUM5QixRQUFRLENBQUMsT0FBTyxHQUFHO1lBQ2YsWUFBWSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFbkMsZ0RBQWdEO1lBQ2hELFVBQVUsQ0FBQztnQkFDUCxRQUFRLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDMUQsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2IsQ0FBQztRQUNELFlBQVksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV6Qyx1Q0FBdUM7UUFDdkMsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsWUFBWSxFQUFFO1lBQzFELFFBQVEsRUFBRSxPQUFPO1lBQ2pCLE9BQU8sRUFBRSwyQkFBMkI7WUFDcEMsT0FBTyxFQUFFLFFBQVE7WUFDakIsZ0JBQWdCLEVBQUU7Z0JBQ2Qsb0JBQW9CO2dCQUNwQixJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoRCxTQUFTLENBQUMsU0FBUyxHQUFHLDZDQUE2QyxDQUFDO2dCQUNwRSxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDO2dCQUV2RSxRQUFRO2dCQUNSLEtBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3BDLENBQUM7U0FDSixDQUFDLENBQUM7UUFDSCxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxZQUFZLEVBQUU7WUFDM0QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsT0FBTyxFQUFFLDRCQUE0QjtZQUNyQyxPQUFPLEVBQUUsU0FBUztZQUNsQixnQkFBZ0IsRUFBRTtnQkFDZCxvQkFBb0I7Z0JBQ3BCLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hELFNBQVMsQ0FBQyxTQUFTLEdBQUcsNkNBQTZDLENBQUM7Z0JBQ3BFLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUM7Z0JBRXhFLFFBQVE7Z0JBQ1IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDdEMsQ0FBQztTQUNKLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCw4QkFBUSxHQUFSLFVBQVMsTUFBbUIsRUFBRSxZQUF5QixFQUFFLElBQVM7UUFDOUQsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxTQUFTLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO1FBRXZDLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2xDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsVUFBVSxDQUFDO1FBQ3pCLFNBQVMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFaEMsSUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0RCxhQUFhLENBQUMsRUFBRSxHQUFHLFVBQVEsSUFBSSxDQUFDLFFBQVEsYUFBVSxDQUFDO1FBQ25ELGFBQWEsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQzVCLGFBQWEsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBQ3pDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQ3ZDLFNBQVMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFckMsSUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0RCxhQUFhLENBQUMsRUFBRSxHQUFHLFVBQVEsSUFBSSxDQUFDLFFBQVEsYUFBVSxDQUFDO1FBQ25ELGFBQWEsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ2hDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBQ3pDLGFBQWEsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQ3ZDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQ3JCO2dCQUNJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzVCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxTQUFTLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXJDLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsUUFBUSxDQUFDLEVBQUUsR0FBRyxRQUFNLElBQUksQ0FBQyxRQUFRLFFBQUssQ0FBQztRQUN2QyxRQUFRLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDO1FBQ3ZDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNsQyxRQUFRLENBQUMsT0FBTyxHQUFHLFVBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQztRQUNGLFNBQVMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFaEMsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRCxTQUFTLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxTQUFTLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUM3QixTQUFTLENBQUMsT0FBTyxHQUFHO1lBQ2hCLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQztRQUNGLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFakMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QixPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRUssOEJBQVEsR0FBZCxVQUFlLEtBQW1CLEVBQUUsU0FBc0I7Ozs7Ozt3QkFDaEQsRUFBRSxHQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQXNCLENBQUMsS0FBSyxDQUFDO3dCQUMvRSxJQUFJLEdBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBc0IsQ0FBQyxLQUFLLENBQUM7d0JBQ25GLFFBQVEsR0FBVyxnQkFBZ0IsQ0FBQzt3QkFDcEMsUUFBUSxHQUFHLEVBQUUsQ0FBQzs2QkFDZCxLQUFLLENBQUMsaUJBQWlCLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFqQyx3QkFBaUM7d0JBRXRCLHFCQUFNLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQzs7d0JBQTdDLFFBQVEsR0FBRyxTQUFrQyxDQUFDO3dCQUM5QyxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQzFCOzRCQUNJLG9CQUFvQjs0QkFDcEIsUUFBUSxDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDOzRCQUMxRCxRQUFRLENBQUMsc0JBQXNCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs0QkFFOUQsaUJBQWlCOzRCQUNqQixJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBRTFCLDBCQUEwQjs0QkFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQztnQ0FDZCxLQUFLLEVBQUUsT0FBTztnQ0FDZCxLQUFLLEVBQUUsa0JBQWtCO2dDQUN6QixPQUFPLEVBQUUsc0NBQXNDOzZCQUNsRCxDQUFDLENBQUM7eUJBQ047OzRCQUVHLFFBQVEsSUFBSSxRQUFRLENBQUM7Ozt3QkFJekIsUUFBUSxJQUFJLGdCQUFnQixDQUFDOzs7d0JBR2pDLElBQUksUUFBUSxLQUFLLFNBQVMsRUFDMUI7NEJBQ1EsUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7NEJBQ25ELElBQUksUUFBUSxLQUFLLElBQUk7Z0NBQ2pCLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzRCQUMvQyxRQUFRLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQzs0QkFDekIsUUFBUSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7NEJBQzlCLFNBQVMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7eUJBQ25DO3dCQUdLLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO3dCQUN4RCxJQUFJLFFBQVEsSUFBSSxJQUFJOzRCQUNoQixRQUFRLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQzs7Ozs7S0FDckM7SUFFSywrQkFBUyxHQUFmLFVBQWdCLEtBQW1CLEVBQUUsU0FBc0I7Ozs7Ozt3QkFDakQsRUFBRSxHQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQXNCLENBQUMsS0FBSyxDQUFDO3dCQUNoRixJQUFJLEdBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBc0IsQ0FBQyxLQUFLLENBQUM7d0JBQ3BGLFFBQVEsR0FBVyxrQkFBa0IsQ0FBQzt3QkFDdEMsU0FBUyxHQUFHLEVBQUUsQ0FBQzs2QkFDZixLQUFLLENBQUMsaUJBQWlCLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFqQyx3QkFBaUM7d0JBRXJCLHFCQUFNLEtBQUssQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQzs7d0JBQS9DLFNBQVMsR0FBRyxTQUFtQyxDQUFDO3dCQUNoRCxJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQzNCOzRCQUNJLG9CQUFvQjs0QkFDcEIsUUFBUSxDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDOzRCQUMxRCxRQUFRLENBQUMsc0JBQXNCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs0QkFFOUQsaUJBQWlCOzRCQUNqQixJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBRTFCLDBCQUEwQjs0QkFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQztnQ0FDZCxLQUFLLEVBQUUsT0FBTztnQ0FDZCxLQUFLLEVBQUUsb0JBQW9CO2dDQUMzQixPQUFPLEVBQUUsaUNBQWlDOzZCQUM3QyxDQUFDLENBQUM7eUJBQ047OzRCQUVHLFFBQVEsSUFBSSxTQUFTLENBQUM7Ozt3QkFJMUIsUUFBUSxJQUFJLGdCQUFnQixDQUFDOzs7d0JBR2pDLElBQUksU0FBUyxLQUFLLFNBQVMsRUFDM0I7NEJBQ1EsUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7NEJBQ25ELElBQUksUUFBUSxLQUFLLElBQUk7Z0NBQ2pCLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzRCQUMvQyxRQUFRLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQzs0QkFDekIsUUFBUSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7NEJBQzlCLFNBQVMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7eUJBQ25DO3dCQUdLLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dCQUMxRCxJQUFJLFNBQVMsSUFBSSxJQUFJOzRCQUNqQixTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzs7Ozs7S0FDdkM7SUFFRCx1Q0FBaUIsR0FBakIsVUFBa0IsS0FBbUI7UUFDakMsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxNQUFNLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVuQyxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLEtBQUssQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1FBQ2hDLEtBQUssQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7UUFDcEMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUxQixJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekIsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxRQUFRLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTNCLElBQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkQsYUFBYSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQztRQUM1QyxhQUFhLENBQUMsRUFBRSxHQUFHLGVBQWUsQ0FBQztRQUNuQyxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO1FBQ25DLGFBQWEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVwQyxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25ELFlBQVksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDO1FBQ25DLFlBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLG9CQUFvQixDQUFDO1FBRTlELElBQU0sSUFBSSxHQUFTLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMxQyxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25ELFlBQVksQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDO1FBQ3pDLFlBQVksQ0FBQyxTQUFTLEdBQUcsTUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxXQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBVSxDQUFDO1FBQzNFLFlBQVksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFdkMsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QyxTQUFTLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztRQUN0QyxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUNoQyxTQUFTLENBQUMsT0FBTyxHQUFHLGNBQU0sWUFBSyxDQUFDLFVBQVUsRUFBRSxFQUFsQixDQUFrQixDQUFDO1FBQzdDLFlBQVksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFcEMsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwRCxRQUFRLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pDLElBQUksT0FBTyxHQUFHLDhEQUE4RCxDQUFDO1FBQzdFLE9BQU8sSUFBSSxzRUFBc0UsQ0FBQztRQUNsRixPQUFPLElBQUksc0VBQXNFLENBQUM7UUFDbEYsVUFBVSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7UUFFL0IsUUFBUSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsbUNBQWEsR0FBYixVQUFjLEtBQW1CO1FBQWpDLGlCQUlDO1FBSEcsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUU1RCxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBYSxJQUFLLFdBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcFhzQztBQUNGO0FBRXJDO0lBSUksaUJBQVksRUFBVSxFQUFFLElBQVksRUFBRSxPQUFhO1FBQy9DLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxnREFBWSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLDhDQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsc0JBQUksR0FBSixVQUFLLE1BQW1CO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHlCQUFPLEdBQVAsVUFBUSxDQUFPO1FBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELDRCQUFVLEdBQVYsVUFBVyxFQUFVO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCRDtJQU1JLHNCQUFZLEVBQVUsRUFBRSxJQUFZLEVBQUUsT0FBYTtRQUMvQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFRCw0QkFBSyxHQUFMO1FBQ0ksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCwrQkFBUSxHQUFSLFVBQVMsQ0FBUztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCw4QkFBTyxHQUFQLFVBQVEsQ0FBTztRQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxpQ0FBVSxHQUFWLFVBQVcsRUFBVTtRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBTyxJQUFLLFFBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUF0QixDQUFzQixDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDRDtJQUlJO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCwwQkFBSSxHQUFKLFVBQUssTUFBbUIsRUFBRSxLQUFtQjtRQUE3QyxpQkFXQztRQVZHLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBRXJCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUNyQyxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELFFBQVEsQ0FBQyxTQUFTLEdBQUcsTUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFLFdBQU0sS0FBSyxDQUFDLElBQUksU0FBTSxDQUFDO1FBQzdELElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXJDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsY0FBSSxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkQsSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ2pCLDJDQUFPO0lBQ1AsdURBQWE7SUFDYixpREFBVTtBQUNkLENBQUMsRUFKVyxTQUFTLEtBQVQsU0FBUyxRQUlwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIbUM7QUFDRjtBQUVsQztJQUlJLGNBQVksRUFBVSxFQUFFLElBQVksRUFBRSxXQUFtQixFQUFFLEtBQWdCO1FBQ3ZFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSw2Q0FBUyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSwyQ0FBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELG1CQUFJLEdBQUosVUFBSyxNQUFtQjtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQndDO0FBRXpDO0lBTUksbUJBQVksRUFBVSxFQUFFLElBQVksRUFBRSxXQUFtQixFQUFFLEtBQWdCO1FBQ3ZFLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELHlCQUFLLEdBQUw7UUFDSSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELDRCQUFRLEdBQVI7UUFDSSxPQUFPLGlEQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkQ7SUFJSTtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsdUJBQUksR0FBSixVQUFLLE1BQW1CLEVBQUUsS0FBZ0I7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ2xDLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLFNBQVMsR0FBRyxXQUFTLEtBQUssQ0FBQyxJQUFJLHdEQUNILEtBQUssQ0FBQyxXQUFXLGtEQUN2QixLQUFLLENBQUMsUUFBUSxFQUFJLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJtQztBQUNGO0FBRWxDO0lBSUksY0FBWSxFQUFVLEVBQUUsUUFBZ0IsRUFBRSxRQUFnQjtRQUN0RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksNkNBQVMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSwyQ0FBUSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELG1CQUFJLEdBQUosVUFBSyxNQUFtQjtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2REO0lBTUksbUJBQVksRUFBVSxFQUFFLFFBQWdCLEVBQUUsUUFBZ0I7UUFDdEQsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQseUJBQUssR0FBTDtRQUNJLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsK0JBQVcsR0FBWDtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQsK0JBQVcsR0FBWDtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQsK0JBQVcsR0FBWCxVQUFZLENBQVk7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELG9DQUFnQixHQUFoQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDaEMsQ0FBQztJQUVELDhCQUFVLEdBQVYsVUFBVyxDQUFVO1FBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxpQ0FBYSxHQUFiLFVBQWMsRUFBVTtRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBVSxJQUFLLFFBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUF0QixDQUFzQixDQUFDLENBQUM7SUFDakYsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDRDtJQUlJO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCx1QkFBSSxHQUFKLFVBQUssTUFBbUIsRUFBRSxLQUFnQjtRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDbEMsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRCxPQUFPLENBQUMsU0FBUyxHQUFNLEtBQUssQ0FBQyxRQUFRLDRDQUNiLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxlQUFZLENBQUM7UUFDN0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7VUNwQkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ0c7QUFFL0MsSUFBTSxLQUFLLEdBQUcsdUJBQXVCLENBQUM7QUFDdEMsZ0VBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFOUIsSUFBTSxPQUFPLEdBQVksSUFBSSx3REFBTyxFQUFFLENBQUM7QUFDdkMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0L2NvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2svY29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlci9jb250cm9sbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YWJhc2VBUEkge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcm9vdFVSTDogc3RyaW5nO1xyXG5cclxuICAgIHN0YXRpYyBzZXRSb290VVJMKHVybDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgRGF0YWJhc2VBUEkucm9vdFVSTCA9IHVybDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDT05WRVJTSU9OIG1ldGhvZHNcclxuXHJcbiAgICBzdGF0aWMgY29udmVydFRhc2tGcm9tRGJUb012Yyh0YXNrRGF0YTogYW55KTogVGFza1tdIHtcclxuICAgICAgICBpZiAodGFza0RhdGEubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrczogVGFza1tdID0gW107XHJcbiAgICAgICAgdGFza0RhdGEuZm9yRWFjaCgodGFzazogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRhc2tzLnB1c2gobmV3IFRhc2sodGFzay5pZCwgdGFzay5uYW1lLCB0YXNrLmRlc2NyaXB0aW9uLCBOdW1iZXIodGFzay5zdGF0ZSkpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGFza3M7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGNvbnZlcnRQcm9qZWN0RnJvbURiVG9NdmMocHJvakRhdGE6IGFueSk6IFByb21pc2U8UHJvamVjdFtdPiB7XHJcbiAgICAgICAgaWYgKHByb2pEYXRhLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdHM6IFByb2plY3RbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHByb2ogb2YgcHJvakRhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2ouaWQsIHByb2oubmFtZSwgcHJvai5kdWVEYXRlKTtcclxuICAgICAgICAgICAgYXdhaXQgRGF0YWJhc2VBUEkuZ2V0VGFza3NCeVByb2plY3QocHJvai5pZClcclxuICAgICAgICAgICAgLnRoZW4odGFza3MgPT4gbmV3UHJvamVjdC5tb2RlbC5zZXRUYXNrcyh0YXNrcykpO1xyXG4gICAgICAgICAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJvamVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGNvbnZlcnRVc2VyRnJvbURiVG9NdmModXNlckRhdGE6IGFueSk6IFByb21pc2U8VXNlcltdPiB7XHJcbiAgICAgICAgaWYgKHVzZXJEYXRhLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlcnM6IFVzZXJbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHVzZXIgb2YgdXNlckRhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3VXNlciA9IG5ldyBVc2VyKHVzZXIuaWQsIHVzZXIubmlja25hbWUsIHVzZXIucGFzc3dvcmQpO1xyXG4gICAgICAgICAgICBhd2FpdCBEYXRhYmFzZUFQSS5nZXRQcm9qZWN0c0J5VXNlcih1c2VyLmlkKVxyXG4gICAgICAgICAgICAudGhlbihwcm9qZWN0cyA9PiBuZXdVc2VyLm1vZGVsLnNldFByb2plY3RzKHByb2plY3RzKSk7XHJcbiAgICAgICAgICAgIHVzZXJzLnB1c2gobmV3VXNlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1c2VycztcclxuICAgIH1cclxuXHJcbiAgICAvLyBVU0VSIHRhYmxlIG1ldGhvZHNcclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0QWxsVXNlcnMoKTogUHJvbWlzZTxVc2VyW10+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7RGF0YWJhc2VBUEkucm9vdFVSTH0vdXNlcnNgKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oYXN5bmMgKHVzZXJEYXRhKSA9PiBhd2FpdCBEYXRhYmFzZUFQSS5jb252ZXJ0VXNlckZyb21EYlRvTXZjKHVzZXJEYXRhKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldFVzZXJCeUlkKGlkOiBudW1iZXIpOiBQcm9taXNlPFVzZXI+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7RGF0YWJhc2VBUEkucm9vdFVSTH0vdXNlcnMvJHtpZH1gKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oYXN5bmMgKHVzZXJEYXRhKSA9PiAoYXdhaXQgRGF0YWJhc2VBUEkuY29udmVydFVzZXJGcm9tRGJUb012YyhbdXNlckRhdGFdKSkucG9wKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRVc2VyQnlOaWNrbmFtZShuaWNrbmFtZTogc3RyaW5nKTogUHJvbWlzZTxVc2VyPiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke0RhdGFiYXNlQVBJLnJvb3RVUkx9L3VzZXJzP25pY2tuYW1lPSR7bmlja25hbWV9YClcclxuICAgICAgICAudGhlbihkYXRhID0+IGRhdGEuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGFzeW5jICh1c2VyRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodXNlckRhdGEubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKGF3YWl0IERhdGFiYXNlQVBJLmNvbnZlcnRVc2VyRnJvbURiVG9NdmModXNlckRhdGEpKS5wb3AoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgYWRkVXNlcihuaWNrbmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybCA6IGAke0RhdGFiYXNlQVBJLnJvb3RVUkx9L3VzZXJzYCxcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQUk9KRUNUIHRhYmxlIG1ldGhvZHNcclxuICAgIFxyXG4gICAgc3RhdGljIGFzeW5jIGdldEFsbFByb2plY3RzKCk6IFByb21pc2U8UHJvamVjdFtdPiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke0RhdGFiYXNlQVBJLnJvb3RVUkx9L3Byb2plY3RzYClcclxuICAgICAgICAudGhlbihkYXRhID0+IGRhdGEuanNvbigpKVxyXG4gICAgICAgIC50aGVuKGFzeW5jIChwcm9qZWN0RGF0YTogYW55KSA9PiBhd2FpdCBEYXRhYmFzZUFQSS5jb252ZXJ0UHJvamVjdEZyb21EYlRvTXZjKHByb2plY3REYXRhKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBhc3luYyBnZXRQcm9qZWN0c0J5VXNlcih1c2VySWQ6IG51bWJlcik6IFByb21pc2U8UHJvamVjdFtdPiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke0RhdGFiYXNlQVBJLnJvb3RVUkx9L3VzZXJzLyR7dXNlcklkfS9wcm9qZWN0c2ApXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSlcclxuICAgICAgICAudGhlbihhc3luYyAocHJvamVjdERhdGE6IGFueSkgPT4gYXdhaXQgRGF0YWJhc2VBUEkuY29udmVydFByb2plY3RGcm9tRGJUb012Yyhwcm9qZWN0RGF0YSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRBU0sgdGFibGUgbWV0aG9kc1xyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRBbGxUYXNrcygpOiBQcm9taXNlPFRhc2tbXT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHtEYXRhYmFzZUFQSS5yb290VVJMfS90YXNrc2ApXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSlcclxuICAgICAgICAudGhlbigodGFza0RhdGE6IGFueSkgPT4gRGF0YWJhc2VBUEkuY29udmVydFRhc2tGcm9tRGJUb012Yyh0YXNrRGF0YSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRUYXNrc0J5UHJvamVjdChwcm9qSWQ6IG51bWJlcik6IFByb21pc2U8VGFza1tdPiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke0RhdGFiYXNlQVBJLnJvb3RVUkx9L3Byb2plY3RzLyR7cHJvaklkfS90YXNrc2ApXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSlcclxuICAgICAgICAudGhlbigodGFza0RhdGE6IGFueSkgPT4gRGF0YWJhc2VBUEkuY29udmVydFRhc2tGcm9tRGJUb012Yyh0YXNrRGF0YSkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTWFuYWdlck1vZGVsIH0gZnJvbSBcIi4vbW9kZWxcIjtcclxuaW1wb3J0IHsgTWFuYWdlclZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFuYWdlciB7XHJcbiAgICBwdWJsaWMgbW9kZWw6IE1hbmFnZXJNb2RlbDtcclxuICAgIHB1YmxpYyB2aWV3OiBNYW5hZ2VyVmlldztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IE1hbmFnZXJNb2RlbCgpO1xyXG4gICAgICAgIHRoaXMudmlldyA9IG5ldyBNYW5hZ2VyVmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcocGFyZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMubW9kZWwubG9hZExvZ2dlZEluVXNlcigpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcuZHJhdyhwYXJlbnQsIHRoaXMubW9kZWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGF0YWJhc2VBUEkgfSBmcm9tIFwiLi4vZGF0YWJhc2VBUElcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi91c2VyL2NvbnRyb2xsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYW5hZ2VyTW9kZWwge1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VXNlcjogVXNlcjtcclxuICAgIFxyXG4gICAgYXN5bmMgbG9hZExvZ2dlZEluVXNlcigpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VXNlcklkID0gdGhpcy5nZXRVc2VyQ29va2llKCk7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRVc2VySWQgPT09IC0xKVxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gbnVsbDtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IGF3YWl0IERhdGFiYXNlQVBJLmdldFVzZXJCeUlkKE51bWJlcihjdXJyZW50VXNlcklkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEN1cnJlbnRVc2VyKCk6IFVzZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRVc2VyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFVzZXJDb29raWUoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRVc2VyID09PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcclxuICAgICAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyAoNyoyNCo2MCo2MCoxMDAwKSk7ICAgICAvLyBleHBpcmVzIGluIDcgZGF5c1xyXG4gICAgICAgIHZhciBleHBpcmVzID0gJ2V4cGlyZXM9JysgZC50b1VUQ1N0cmluZygpO1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGB1c2VySWQ9JHtpZH07IGV4cGlyZXM9JHtleHBpcmVzfTsgcGF0aD0vO2A7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyB1c2VyJ3MgaWQgc3RvcmVkIGluIGNvb2tpZXMgKG9yIC0xIGlmIHRoZXJlJ3Mgbm8gY29va2llKVxyXG4gICAgICovXHJcbiAgICBnZXRVc2VyQ29va2llKCk6IG51bWJlciB7XHJcbiAgICAgICAgdmFyIG5hbWUgPSAndXNlcklkPSc7XHJcbiAgICAgICAgdmFyIGRlY29kZWRDb29raWUgPSBkZWNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQuY29va2llKTtcclxuICAgICAgICB2YXIgY29va2llQXJyYXkgPSBkZWNvZGVkQ29va2llLnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPGNvb2tpZUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjb29raWUgPSBjb29raWVBcnJheVtpXTtcclxuICAgICAgICAgICAgd2hpbGUgKGNvb2tpZS5jaGFyQXQoMCkgPT0gJyAnKSB7XHJcbiAgICAgICAgICAgICAgICBjb29raWUgPSBjb29raWUuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjb29raWUuaW5kZXhPZihuYW1lKSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKGNvb2tpZS5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGNvb2tpZS5sZW5ndGgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE5pY2tuYW1lcyBjYW4gY29uc2lzdCBvZjpcclxuICAgICAqIGxvd2VyIGNhc2UgbGV0dGVycyxcclxuICAgICAqIHVwcGVyIGNhc2UgbGV0dGVycyxcclxuICAgICAqIG51bWJlcnMsXHJcbiAgICAgKiB1bmRlcnNjb3JlcyBhbmRcclxuICAgICAqIGRvdHMuXHJcbiAgICAgKi9cclxuICAgIHZhbGlkYXRlSW5wdXREYXRhKG5pY2tuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAobmlja25hbWUgPT09ICcnIHx8IHBhc3N3b3JkID09PSAnJylcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAobmlja25hbWUubGVuZ3RoIDwgNCB8fCBuaWNrbmFtZS5sZW5ndGggPiAxNSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAocGFzc3dvcmQubGVuZ3RoIDwgNCB8fCBwYXNzd29yZC5sZW5ndGggPiAxNSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBtYXRjaGVzUmVnZXggPSAvXlthLXpBLVowLTlfXFwuXSskLy5leGVjKG5pY2tuYW1lKTtcclxuICAgICAgICByZXR1cm4gKG1hdGNoZXNSZWdleCAhPT0gbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyBhIGxvZ2luIHJlc3VsdCBtZXNzYWdlICgnc3VjY2VzcycgaWYgbG9naW4gc3VjY2Vzc2Z1bClcclxuICAgICAqL1xyXG4gICAgYXN5bmMgdHJ5TG9naW5Vc2VyKG5pY2tuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBEYXRhYmFzZUFQSS5nZXRVc2VyQnlOaWNrbmFtZShuaWNrbmFtZSk7XHJcbiAgICAgICAgaWYgKHVzZXIgPT09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiAndXNlciBkb2VzblxcJ3QgZXhpc3QnO1xyXG5cclxuICAgICAgICBpZiAodXNlci5tb2RlbC5nZXRQYXNzd29yZCgpICE9PSBwYXNzd29yZClcclxuICAgICAgICAgICAgcmV0dXJuICd3cm9uZyBwYXNzd29yZCc7XHJcblxyXG4gICAgICAgIC8vIHNhdmUgY3VycmVudCB1c2VyIGluIGNvb2tpZXNcclxuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdXNlcjtcclxuICAgICAgICB0aGlzLnNldFVzZXJDb29raWUodGhpcy5jdXJyZW50VXNlci5tb2RlbC5nZXRJZCgpKTtcclxuICAgICAgICByZXR1cm4gJ3N1Y2Nlc3MnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybnMgYSBzaWduIHVwIHJlc3VsdCBtZXNzYWdlICgnc3VjY2VzcycgaWYgbG9naW4gc3VjY2Vzc2Z1bClcclxuICAgICAqL1xyXG4gICAgYXN5bmMgdHJ5U2lnblVwVXNlcihuaWNrbmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICBjb25zdCB1c2VyV2l0aFNhbWVOaWNrbmFtZSA9IGF3YWl0IERhdGFiYXNlQVBJLmdldFVzZXJCeU5pY2tuYW1lKG5pY2tuYW1lKTtcclxuICAgICAgICBpZiAodXNlcldpdGhTYW1lTmlja25hbWUgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHJldHVybiAnbmlja25hbWUgYWxyZWFkeSB0YWtlbic7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1VzZXIgPSBhd2FpdCBEYXRhYmFzZUFQSS5hZGRVc2VyKG5pY2tuYW1lLCBwYXNzd29yZCk7XHJcblxyXG4gICAgICAgIC8vIHNhdmUgY3VycmVudCB1c2VyIGluIGNvb2tpZXNcclxuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gYXdhaXQgRGF0YWJhc2VBUEkuZ2V0VXNlckJ5SWQobmV3VXNlci5pZCk7XHJcbiAgICAgICAgdGhpcy5zZXRVc2VyQ29va2llKHRoaXMuY3VycmVudFVzZXIubW9kZWwuZ2V0SWQoKSk7XHJcbiAgICAgICAgcmV0dXJuICdzdWNjZXNzJztcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXRVc2VyKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9ICd1c2VySWQ9O2V4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMSBHTVQ7IHBhdGg9Lyc7XHJcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4uL3Byb2plY3QvY29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3VzZXIvY29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBNYW5hZ2VyTW9kZWwgfSBmcm9tIFwiLi9tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hbmFnZXJWaWV3IHtcclxuICAgIHByaXZhdGUgcGFyZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTmFtZSA9ICdtYW5hZ2VyJztcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KHBhcmVudDogSFRNTEVsZW1lbnQsIG1vZGVsOiBNYW5hZ2VyTW9kZWwpIHtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIC8vIGNoZWNraW5nIGZvciBzYXZlZCB1c2VyIGluIGNvb2tpZXNcclxuICAgICAgICBpZiAobW9kZWwuZ2V0VXNlckNvb2tpZSgpID09PSAtMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGRyYXcgc3RhcnQgcGFnZSBsb2dvXHJcbiAgICAgICAgICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgbG9nby5jbGFzc05hbWUgPSAndW5kcmF3TG9nbyc7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ28pO1xyXG5cclxuICAgICAgICAgICAgLy8gZHJhdyBsb2dpbiBwYWdlXHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0xvZ2luUGFnZShtb2RlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1Byb2ZpbGVIZWFkZXIobW9kZWwpO1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdEYXNoYm9hcmQobW9kZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBkYXRhIHJlcXVpcmVzIENPTE9SLCBUSVRMRSBhbmQgTUVTU0FHRSBwcm9wZXJ0eVxyXG4gICAgICovXHJcbiAgICBkaXNwbGF5UG9wdXAoZGF0YTogYW55KSB7XHJcbiAgICAgICAgdmFyIHRvYXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvYXN0Tm90aWYnKTtcclxuICAgICAgICBpZiAodG9hc3QgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdG9hc3QgPSB0aGlzLmNyZWF0ZVBvcHVwKGRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKDxhbnk+JCgnI3RvYXN0Tm90aWYnKSkudG9hc3QoJ3Nob3cnKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVQb3B1cChkYXRhOiBhbnkpIHtcclxuICAgICAgICBjb25zdCB0b2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRvYXN0LmNsYXNzTmFtZSA9ICd0b2FzdCc7XHJcbiAgICAgICAgdG9hc3QuaWQgPSAndG9hc3ROb3RpZic7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvYXN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdG9hc3RIZWFkZXIuY2xhc3NOYW1lID0gJ3RvYXN0LWhlYWRlcic7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0YXR1c0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzdGF0dXNJY29uLmNsYXNzTmFtZSA9ICdzdGF0dXNJY29uJztcclxuICAgICAgICBzdGF0dXNJY29uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGRhdGEuY29sb3I7XHJcbiAgICAgICAgdG9hc3RIZWFkZXIuYXBwZW5kQ2hpbGQoc3RhdHVzSWNvbik7XHJcblxyXG4gICAgICAgIGNvbnN0IGxibEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0cm9uZycpO1xyXG4gICAgICAgIGxibEhlYWRlci5jbGFzc05hbWUgPSAnbXItYXV0byc7XHJcbiAgICAgICAgbGJsSGVhZGVyLmlubmVySFRNTCA9IGRhdGEudGl0bGU7XHJcbiAgICAgICAgdG9hc3RIZWFkZXIuYXBwZW5kQ2hpbGQobGJsSGVhZGVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYWxsJyk7XHJcbiAgICAgICAgdG9hc3RIZWFkZXIuYXBwZW5kQ2hpbGQodGltZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0bkNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnRuQ2xvc2UudHlwZSA9ICdidXR0b24nO1xyXG4gICAgICAgIGJ0bkNsb3NlLmNsYXNzTmFtZSA9ICdtbC0yIG1iLTEgY2xvc2UnO1xyXG4gICAgICAgIHRvYXN0SGVhZGVyLmFwcGVuZENoaWxkKGJ0bkNsb3NlKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBzcGFuLmlubmVySFRNTCA9ICcmdGltZXM7J1xyXG4gICAgICAgIGJ0bkNsb3NlLmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cclxuICAgICAgICB0b2FzdC5hcHBlbmRDaGlsZCh0b2FzdEhlYWRlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBib2R5LmNsYXNzTmFtZSA9ICd0b2FzdC1ib2R5JztcclxuICAgICAgICBib2R5LmlubmVySFRNTCA9IGRhdGEubWVzc2FnZTtcclxuXHJcbiAgICAgICAgdG9hc3QuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b2FzdCk7XHJcbiAgICAgICAgKDxhbnk+JCgnI3RvYXN0Tm90aWYnKSkudG9hc3Qoe2RlbGF5OiAzMDAwfSk7XHJcbiAgICAgICAgcmV0dXJuIHRvYXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdMb2dpblBhZ2UobW9kZWw6IE1hbmFnZXJNb2RlbCkge1xyXG4gICAgICAgIGNvbnN0IGxvZ2luQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbG9naW5Db250YWluZXIuY2xhc3NOYW1lID0gJ2xvZ2luQ29udGFpbmVyJztcclxuXHJcbiAgICAgICAgY29uc3QgbGJsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGxibFRpdGxlLmlubmVySFRNTCA9ICdQcm9qZWN0IG1hbmFnZXInO1xyXG4gICAgICAgIGxibFRpdGxlLmNsYXNzTmFtZSA9ICd0aXRsZSc7XHJcbiAgICAgICAgbG9naW5Db250YWluZXIuYXBwZW5kQ2hpbGQobGJsVGl0bGUpO1xyXG5cclxuICAgICAgICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBidG5Db250YWluZXIuY2xhc3NOYW1lID0gJ2J0bkNvbnRhaW5lcic7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0blNpZ25VcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ0blNpZ25VcC5pZCA9ICdidG5TaWduVXAnO1xyXG4gICAgICAgIGJ0blNpZ25VcC5jbGFzc05hbWUgPSAnYnRuIGJ0bi1zdWNjZXNzJztcclxuICAgICAgICBidG5TaWduVXAuaW5uZXJIVE1MID0gJ1NpZ24gdXAnO1xyXG4gICAgICAgIGJ0blNpZ25VcC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBidG5Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG4gICAgICAgICAgICBzaWduVXBGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGZvY3VzIG9uIG5pY2tuYW1lIGlucHV0IGZpZWxkIGFmdGVyIGFuaW1hdGlvblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFNpZ25VcE5pY2tuYW1lJykuZm9jdXMoKTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuU2lnblVwKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuTG9naW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidG5Mb2dpbi5pZCA9ICdidG5Mb2dpbic7XHJcbiAgICAgICAgYnRuTG9naW4uY2xhc3NOYW1lID0gJ2J0biBidG4tbGlnaHQnO1xyXG4gICAgICAgIGJ0bkxvZ2luLmlubmVySFRNTCA9ICdMb2cgaW4nO1xyXG4gICAgICAgIGJ0bkxvZ2luLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIGxvZ2luRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBmb2N1cyBvbiBuaWNrbmFtZSBpbnB1dCBmaWVsZCBhZnRlciBhbmltYXRpb25cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRMb2dpbk5pY2tuYW1lJykuZm9jdXMoKTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Mb2dpbik7XHJcbiAgICAgICAgbG9naW5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgLy8gZHJhdyBsb2dpbiBhbmQgc2luZyB1cCBmb3JtcyAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbG9naW5Gb3JtID0gdGhpcy5kcmF3Rm9ybShsb2dpbkNvbnRhaW5lciwgYnRuQ29udGFpbmVyLCB7XHJcbiAgICAgICAgICAgIGZvcm1UeXBlOiAnTG9naW4nLFxyXG4gICAgICAgICAgICBsYmxUZXh0OiAnTG9nIGluIHRvIFByb2plY3QgTWFuYWdlcicsXHJcbiAgICAgICAgICAgIGJ0blRleHQ6ICdMb2cgaW4nLFxyXG4gICAgICAgICAgICBjYWxsYmFja0Z1bmN0aW9uOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBsb2FkaW5nIGFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24uY2xhc3NOYW1lID0gJ3NwaW5uZXItYm9yZGVyIHNwaW5uZXItYm9yZGVyLXNtIHRleHQtbGlnaHQnO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bkxvZ2luTm93JykuaW5uZXJIVE1MID0gYW5pbWF0aW9uLm91dGVySFRNTDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBsb2dpblxyXG4gICAgICAgICAgICAgICAgdGhpcy50cnlMb2dpbihtb2RlbCwgbG9naW5Gb3JtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHNpZ25VcEZvcm0gPSB0aGlzLmRyYXdGb3JtKGxvZ2luQ29udGFpbmVyLCBidG5Db250YWluZXIsIHtcclxuICAgICAgICAgICAgZm9ybVR5cGU6ICdTaWduVXAnLFxyXG4gICAgICAgICAgICBsYmxUZXh0OiAnU2lnbiB1cCB0byBQcm9qZWN0IE1hbmFnZXInLFxyXG4gICAgICAgICAgICBidG5UZXh0OiAnU2lnbiB1cCcsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrRnVuY3Rpb246ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGxvYWRpbmcgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbmltYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5jbGFzc05hbWUgPSAnc3Bpbm5lci1ib3JkZXIgc3Bpbm5lci1ib3JkZXItc20gdGV4dC1saWdodCc7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuU2lnblVwTm93JykuaW5uZXJIVE1MID0gYW5pbWF0aW9uLm91dGVySFRNTDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBsb2dpblxyXG4gICAgICAgICAgICAgICAgdGhpcy50cnlTaWduVXAobW9kZWwsIHNpZ25VcEZvcm0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ2luQ29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3Rm9ybShwYXJlbnQ6IEhUTUxFbGVtZW50LCBidG5Db250YWluZXI6IEhUTUxFbGVtZW50LCBkYXRhOiBhbnkpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbG9naW5Gb3JtLmNsYXNzTmFtZSA9ICdsb2dpbkZvcm0gaGlkZSc7XHJcblxyXG4gICAgICAgIGNvbnN0IGxibExvZ2luID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBsYmxMb2dpbi5pbm5lckhUTUwgPSBkYXRhLmxibFRleHQ7XHJcbiAgICAgICAgbGJsTG9naW4uaWQgPSAnbGJsTG9naW4nO1xyXG4gICAgICAgIGxvZ2luRm9ybS5hcHBlbmRDaGlsZChsYmxMb2dpbik7XHJcblxyXG4gICAgICAgIGNvbnN0IGlucHV0Tmlja25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGlucHV0Tmlja25hbWUuaWQgPSBgaW5wdXQke2RhdGEuZm9ybVR5cGV9Tmlja25hbWVgO1xyXG4gICAgICAgIGlucHV0Tmlja25hbWUudHlwZSA9ICd0ZXh0JztcclxuICAgICAgICBpbnB1dE5pY2tuYW1lLmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xyXG4gICAgICAgIGlucHV0Tmlja25hbWUucGxhY2Vob2xkZXIgPSAnTmlja25hbWUnO1xyXG4gICAgICAgIGxvZ2luRm9ybS5hcHBlbmRDaGlsZChpbnB1dE5pY2tuYW1lKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBpbnB1dFBhc3N3b3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBpbnB1dFBhc3N3b3JkLmlkID0gYGlucHV0JHtkYXRhLmZvcm1UeXBlfVBhc3N3b3JkYDtcclxuICAgICAgICBpbnB1dFBhc3N3b3JkLnR5cGUgPSAncGFzc3dvcmQnO1xyXG4gICAgICAgIGlucHV0UGFzc3dvcmQuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCc7XHJcbiAgICAgICAgaW5wdXRQYXNzd29yZC5wbGFjZWhvbGRlciA9ICdQYXNzd29yZCc7XHJcbiAgICAgICAgaW5wdXRQYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5jYWxsYmFja0Z1bmN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVmcmVzaGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBsb2dpbkZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRQYXNzd29yZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0bkxvZ2luID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnRuTG9naW4uaWQgPSBgYnRuJHtkYXRhLmZvcm1UeXBlfU5vd2A7XHJcbiAgICAgICAgYnRuTG9naW4uY2xhc3NOYW1lID0gJ2J0biBidG4tc3VjY2Vzcyc7XHJcbiAgICAgICAgYnRuTG9naW4uaW5uZXJIVE1MID0gZGF0YS5idG5UZXh0O1xyXG4gICAgICAgIGJ0bkxvZ2luLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBkYXRhLmNhbGxiYWNrRnVuY3Rpb24oKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlZnJlc2hlZCcpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbG9naW5Gb3JtLmFwcGVuZENoaWxkKGJ0bkxvZ2luKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuR29CYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnRuR29CYWNrLmNsYXNzTmFtZSA9ICdidG4gYnRuLWxpbmsnO1xyXG4gICAgICAgIGJ0bkdvQmFjay5pbm5lckhUTUwgPSAnQmFjayc7XHJcbiAgICAgICAgYnRuR29CYWNrLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxvZ2luRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsb2dpbkZvcm0uYXBwZW5kQ2hpbGQoYnRuR29CYWNrKTtcclxuXHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGxvZ2luRm9ybSk7XHJcbiAgICAgICAgcmV0dXJuIGxvZ2luRm9ybTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyB0cnlMb2dpbihtb2RlbDogTWFuYWdlck1vZGVsLCBsb2dpbkZvcm06IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3Qgbm4gPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0TG9naW5OaWNrbmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHBzd2QgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0TG9naW5QYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG4gICAgICAgIGxldCBlcnJvck1zZzogc3RyaW5nID0gJ0xvZ2luIGZhaWxlZDogJztcclxuICAgICAgICBsZXQgbG9naW5Nc2cgPSAnJztcclxuICAgICAgICBpZiAobW9kZWwudmFsaWRhdGVJbnB1dERhdGEobm4sIHBzd2QpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbG9naW5Nc2cgPSBhd2FpdCBtb2RlbC50cnlMb2dpblVzZXIobm4sIHBzd2QpO1xyXG4gICAgICAgICAgICBpZiAobG9naW5Nc2cgPT09ICdzdWNjZXNzJylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGxvZ2luIHBhZ2VcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3VuZHJhd0xvZ28nKVswXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xvZ2luQ29udGFpbmVyJylbMF0ucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZHJhdyBkYXNoYm9hcmRcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1Byb2ZpbGVIZWFkZXIobW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3RGFzaGJvYXJkKG1vZGVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5IHN1Y2Nlc3MgbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5UG9wdXAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTG9naW4gc3VjY2Vzc2Z1bCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1dlbGNvbWUgYmFjayB0byB0aGUgUHJvamVjdCBNYW5hZ2VyISdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGVycm9yTXNnICs9IGxvZ2luTXNnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBlcnJvck1zZyArPSAnSW52YWxpZCBpbnB1dC4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGxvZ2luTXNnICE9PSAnc3VjY2VzcycpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgbGJsRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGJsRXJyb3InKTtcclxuICAgICAgICAgICAgaWYgKGxibEVycm9yID09PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgbGJsRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICBsYmxFcnJvci5pZCA9ICdsYmxFcnJvcic7XHJcbiAgICAgICAgICAgIGxibEVycm9yLmlubmVySFRNTCA9IGVycm9yTXNnO1xyXG4gICAgICAgICAgICBsb2dpbkZvcm0uYXBwZW5kQ2hpbGQobGJsRXJyb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIGFuaW1hdGlvblxyXG4gICAgICAgIGNvbnN0IGxvZ2luQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bkxvZ2luTm93Jyk7XHJcbiAgICAgICAgaWYgKGxvZ2luQnRuICE9IG51bGwpXHJcbiAgICAgICAgICAgIGxvZ2luQnRuLmlubmVySFRNTCA9ICdMb2cgaW4nO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHRyeVNpZ25VcChtb2RlbDogTWFuYWdlck1vZGVsLCBsb2dpbkZvcm06IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgY29uc3Qgbm4gPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0U2lnblVwTmlja25hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcclxuICAgICAgICBjb25zdCBwc3dkID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFNpZ25VcFBhc3N3b3JkJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICAgICAgbGV0IGVycm9yTXNnOiBzdHJpbmcgPSAnU2lnbiB1cCBmYWlsZWQ6ICc7XHJcbiAgICAgICAgbGV0IHNpZ251cE1zZyA9ICcnO1xyXG4gICAgICAgIGlmIChtb2RlbC52YWxpZGF0ZUlucHV0RGF0YShubiwgcHN3ZCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzaWdudXBNc2cgPSBhd2FpdCBtb2RlbC50cnlTaWduVXBVc2VyKG5uLCBwc3dkKTtcclxuICAgICAgICAgICAgaWYgKHNpZ251cE1zZyA9PT0gJ3N1Y2Nlc3MnKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgbG9naW4gcGFnZVxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndW5kcmF3TG9nbycpWzBdLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbG9naW5Db250YWluZXInKVswXS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBkcmF3IGRhc2hib2FyZFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3UHJvZmlsZUhlYWRlcihtb2RlbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdEYXNoYm9hcmQobW9kZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGRpc3BsYXkgc3VjY2VzcyBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlQb3B1cCh7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmVlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTaWduIHVwIHN1Y2Nlc3NmdWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdXZWxjb21lIHRvIHRoZSBQcm9qZWN0IE1hbmFnZXIhJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgZXJyb3JNc2cgKz0gc2lnbnVwTXNnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBlcnJvck1zZyArPSAnSW52YWxpZCBpbnB1dC4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNpZ251cE1zZyAhPT0gJ3N1Y2Nlc3MnKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGxibEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xibEVycm9yJyk7XHJcbiAgICAgICAgICAgIGlmIChsYmxFcnJvciA9PT0gbnVsbClcclxuICAgICAgICAgICAgICAgIGxibEVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgbGJsRXJyb3IuaWQgPSAnbGJsRXJyb3InO1xyXG4gICAgICAgICAgICBsYmxFcnJvci5pbm5lckhUTUwgPSBlcnJvck1zZztcclxuICAgICAgICAgICAgbG9naW5Gb3JtLmFwcGVuZENoaWxkKGxibEVycm9yKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJlbW92ZSBhbmltYXRpb25cclxuICAgICAgICBjb25zdCBzaWdudXBCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuU2lnblVwTm93Jyk7XHJcbiAgICAgICAgaWYgKHNpZ251cEJ0biAhPSBudWxsKVxyXG4gICAgICAgICAgICBzaWdudXBCdG4uaW5uZXJIVE1MID0gJ1NpZ24gdXAnO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdQcm9maWxlSGVhZGVyKG1vZGVsOiBNYW5hZ2VyTW9kZWwpIHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBoZWFkZXIuY2xhc3NOYW1lID0gJ3Byb2ZpbGVIZWFkZXInO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICB0aXRsZS5jbGFzc05hbWUgPSAnaGVhZGVyVGl0bGUnO1xyXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9ICdQcm9qZWN0IE1hbmFnZXInO1xyXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtZW51LmNsYXNzTmFtZSA9ICdoZWFkZXJNZW51JztcclxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZHJvcGRvd24uY2xhc3NOYW1lID0gJ2Ryb3Bkb3duJztcclxuICAgICAgICBtZW51LmFwcGVuZENoaWxkKGRyb3Bkb3duKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuQWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ0bkFkZFByb2plY3QuY2xhc3NOYW1lID0gJ2J0biBidG4tc3VjY2Vzcyc7XHJcbiAgICAgICAgYnRuQWRkUHJvamVjdC5pZCA9ICdidG5BZGRQcm9qZWN0JztcclxuICAgICAgICBjb25zdCBwbHVzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgICBwbHVzSWNvbi5jbGFzc05hbWUgPSAnZmFzIGZhLXBsdXMnO1xyXG4gICAgICAgIGJ0bkFkZFByb2plY3QuYXBwZW5kQ2hpbGQocGx1c0ljb24pO1xyXG4gICAgICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKGJ0bkFkZFByb2plY3QpO1xyXG5cclxuICAgICAgICBjb25zdCBkcm9wZG93bk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkcm9wZG93bk1lbnUuY2xhc3NOYW1lID0gJ2Ryb3Bkb3duLW1lbnUnO1xyXG4gICAgICAgICg8YW55PmRyb3Bkb3duTWVudSlbJ2FyaWEtbGFiZWxsZWRieSddID0gJ2Ryb3Bkb3duTWVudUJ1dHRvbic7XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXI6IFVzZXIgPSBtb2RlbC5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgICAgIGNvbnN0IG5pY2tuYW1lSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG5pY2tuYW1lSXRlbS5jbGFzc05hbWUgPSAnZHJvcGRvd24taXRlbSc7XHJcbiAgICAgICAgbmlja25hbWVJdGVtLmlubmVySFRNTCA9IGAjJHt1c2VyLm1vZGVsLmdldElkKCl9IHwgJHt1c2VyLm1vZGVsLm5pY2tuYW1lfWA7XHJcbiAgICAgICAgZHJvcGRvd25NZW51LmFwcGVuZENoaWxkKG5pY2tuYW1lSXRlbSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0bkxvZ291dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBidG5Mb2dvdXQuY2xhc3NOYW1lID0gJ2Ryb3Bkb3duLWl0ZW0nO1xyXG4gICAgICAgIGJ0bkxvZ291dC5pbm5lckhUTUwgPSAnTG9nIG91dCc7XHJcbiAgICAgICAgYnRuTG9nb3V0Lm9uY2xpY2sgPSAoKSA9PiBtb2RlbC5sb2dvdXRVc2VyKCk7XHJcbiAgICAgICAgZHJvcGRvd25NZW51LmFwcGVuZENoaWxkKGJ0bkxvZ291dCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0blByb2ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChidG5Qcm9maWxlKTtcclxuICAgICAgICBsZXQgYnRuSHRtbCA9ICc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1saWdodCBkcm9wZG93bi10b2dnbGVcIiB0eXBlPVwiYnV0dG9uXCIgJztcclxuICAgICAgICBidG5IdG1sICs9ICdpZD1cImRyb3Bkb3duTWVudUJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiICc7XHJcbiAgICAgICAgYnRuSHRtbCArPSAnYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+PGkgY2xhc3M9XCJmYXMgZmEtdXNlciBpY29uQ29sb3JcIj48L2k+PC9idXR0b24+JztcclxuICAgICAgICBidG5Qcm9maWxlLm91dGVySFRNTCA9IGJ0bkh0bWw7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQoZHJvcGRvd25NZW51KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3RGFzaGJvYXJkKG1vZGVsOiBNYW5hZ2VyTW9kZWwpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IG1vZGVsLmdldEN1cnJlbnRVc2VyKCkubW9kZWwuZ2V0UHJvamVjdHMoKTtcclxuICAgICAgICBcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qOiBQcm9qZWN0KSA9PiBwcm9qLmRyYXcodGhpcy5jb250YWluZXIpKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi4vdGFzay9jb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFByb2plY3RNb2RlbCB9IGZyb20gXCIuL21vZGVsXCI7XHJcbmltcG9ydCB7IFByb2plY3RWaWV3IH0gZnJvbSBcIi4vdmlld1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xyXG4gICAgcHVibGljIG1vZGVsOiBQcm9qZWN0TW9kZWw7XHJcbiAgICBwdWJsaWMgdmlldzogUHJvamVjdFZpZXc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBkdWVEYXRlOiBEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBQcm9qZWN0TW9kZWwoaWQsIG5hbWUsIGR1ZURhdGUpO1xyXG4gICAgICAgIHRoaXMudmlldyA9IG5ldyBQcm9qZWN0VmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcocGFyZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudmlldy5kcmF3KHBhcmVudCwgdGhpcy5tb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGFzayh0OiBUYXNrKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5hZGRUYXNrKHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVRhc2soaWQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubW9kZWwucmVtb3ZlVGFzayhpZCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4uL3Rhc2svY29udHJvbGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RNb2RlbCB7XHJcbiAgICBwcml2YXRlIGlkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSB0YXNrczogVGFza1tdO1xyXG4gICAgcHVibGljIGR1ZURhdGU6IERhdGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBkdWVEYXRlOiBEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYXNrcygpOiBUYXNrW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRhc2tzKHQ6IFRhc2tbXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudGFza3MgPSB0O1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRhc2sodDogVGFzayk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0KTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVUYXNrKGlkOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHQ6IFRhc2spID0+IHQubW9kZWwuZ2V0SWQoKSAhPT0gaWQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUHJvamVjdE1vZGVsIH0gZnJvbSBcIi4vbW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0VmlldyB7XHJcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHBhcmVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZHJhdyhwYXJlbnQ6IEhUTUxFbGVtZW50LCBtb2RlbDogUHJvamVjdE1vZGVsKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTmFtZSA9ICdwcm9qZWN0JztcclxuICAgICAgICBjb25zdCBsYmxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgbGJsVGl0bGUuaW5uZXJIVE1MID0gYCMke21vZGVsLmdldElkKCl9IHwgJHttb2RlbC5uYW1lfTxicj5gO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxibFRpdGxlKTtcclxuXHJcbiAgICAgICAgbW9kZWwuZ2V0VGFza3MoKS5mb3JFYWNoKHRhc2sgPT4gdGFzay5kcmF3KHRoaXMuY29udGFpbmVyKSk7XHJcblxyXG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBlbnVtIFRhc2tTdGF0ZSB7XHJcbiAgICBcIlRvIGRvXCIsXHJcbiAgICBcIkluIHByb2dyZXNzXCIsXHJcbiAgICBcIkZpbmlzaGVkXCJcclxufSIsImltcG9ydCB7IFRhc2tTdGF0ZSB9IGZyb20gXCIuLi90YXNrU3RhdGVcIjtcclxuaW1wb3J0IHsgVGFza01vZGVsIH0gZnJvbSBcIi4vbW9kZWxcIjtcclxuaW1wb3J0IHsgVGFza1ZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGFzayB7XHJcbiAgICBwdWJsaWMgbW9kZWw6IFRhc2tNb2RlbDtcclxuICAgIHB1YmxpYyB2aWV3OiBUYXNrVmlldztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIHN0YXRlOiBUYXNrU3RhdGUpIHtcclxuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IFRhc2tNb2RlbChpZCwgbmFtZSwgZGVzY3JpcHRpb24sIHN0YXRlKTtcclxuICAgICAgICB0aGlzLnZpZXcgPSBuZXcgVGFza1ZpZXcoKTtcclxuICAgIH0gICAgXHJcblxyXG4gICAgZHJhdyhwYXJlbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52aWV3LmRyYXcocGFyZW50LCB0aGlzLm1vZGVsKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRhc2tTdGF0ZSB9IGZyb20gXCIuLi90YXNrU3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUYXNrTW9kZWwge1xyXG4gICAgcHJpdmF0ZSBpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogVGFza1N0YXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgc3RhdGU6IFRhc2tTdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdGF0ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBUYXNrU3RhdGVbdGhpcy5zdGF0ZV07XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUYXNrTW9kZWwgfSBmcm9tIFwiLi9tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhc2tWaWV3IHtcclxuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgcGFyZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcocGFyZW50OiBIVE1MRWxlbWVudCwgbW9kZWw6IFRhc2tNb2RlbCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc05hbWUgPSAndGFzayc7XHJcbiAgICAgICAgY29uc3QgbGJsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgbGJsTmFtZS5pbm5lckhUTUwgPSBgTmFtZTogJHttb2RlbC5uYW1lfTxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNjcmlwdGlvbjogJHttb2RlbC5kZXNjcmlwdGlvbn08YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhdGU6ICR7bW9kZWwuZ2V0U3RhdGUoKX1gO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxibE5hbWUpO1xyXG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi4vcHJvamVjdC9jb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuL21vZGVsXCI7XHJcbmltcG9ydCB7IFVzZXJWaWV3IH0gZnJvbSBcIi4vdmlld1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gICAgcHVibGljIG1vZGVsOiBVc2VyTW9kZWw7XHJcbiAgICBwdWJsaWMgdmlldzogVXNlclZpZXc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgbmlja25hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBuZXcgVXNlck1vZGVsKGlkLCBuaWNrbmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICAgIHRoaXMudmlldyA9IG5ldyBVc2VyVmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcocGFyZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudmlldy5kcmF3KHBhcmVudCwgdGhpcy5tb2RlbCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4uL3Byb2plY3QvY29udHJvbGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJNb2RlbCB7XHJcbiAgICBwcml2YXRlIGlkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbmlja25hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgcGFzc3dvcmQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgcHJvamVjdHM6IFByb2plY3RbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBuaWNrbmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubmlja25hbWUgPSBuaWNrbmFtZTtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFzc3dvcmQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXNzd29yZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9qZWN0cygpOiBQcm9qZWN0W10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFByb2plY3RzKHA6IFByb2plY3RbXSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE51bU9mUHJvamVjdHMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUHJvamVjdChwOiBQcm9qZWN0KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVByb2plY3QoaWQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcigocDogUHJvamVjdCkgPT4gcC5tb2RlbC5nZXRJZCgpICE9PSBpZCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi9tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJWaWV3IHtcclxuICAgIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgcGFyZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcocGFyZW50OiBIVE1MRWxlbWVudCwgbW9kZWw6IFVzZXJNb2RlbCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc05hbWUgPSAndXNlcic7XHJcbiAgICAgICAgY29uc3QgbGJsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgbGJsTmFtZS5pbm5lckhUTUwgPSBgJHttb2RlbC5uaWNrbmFtZX08YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCR7bW9kZWwuZ2V0TnVtT2ZQcm9qZWN0cygpfSBwcm9qZWN0cylgO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGxibE5hbWUpO1xyXG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgRGF0YWJhc2VBUEkgfSBmcm9tIFwiLi9kYXRhYmFzZUFQSVwiO1xyXG5pbXBvcnQgeyBNYW5hZ2VyIH0gZnJvbSBcIi4vbWFuYWdlci9jb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCBkYlVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnO1xyXG5EYXRhYmFzZUFQSS5zZXRSb290VVJMKGRiVVJMKTtcclxuXHJcbmNvbnN0IG1hbmFnZXI6IE1hbmFnZXIgPSBuZXcgTWFuYWdlcigpO1xyXG5tYW5hZ2VyLmRyYXcoZG9jdW1lbnQuYm9keSk7Il0sInNvdXJjZVJvb3QiOiIifQ==