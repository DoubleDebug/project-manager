/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    function Project(id, name, tasks, dueDate) {
        this.model = new _model__WEBPACK_IMPORTED_MODULE_0__.ProjectModel(id, name, tasks, dueDate);
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
    function ProjectModel(id, name, tasks, dueDate) {
        this.id = id;
        this.name = name;
        if (tasks === null)
            this.tasks = [];
        else
            this.tasks = tasks;
        this.dueDate = dueDate;
    }
    ProjectModel.prototype.getId = function () {
        return this.id;
    };
    ProjectModel.prototype.getTasks = function () {
        return this.tasks;
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
    TaskState["TO_DO"] = "To do";
    TaskState["IN_PROGRESS"] = "In progress";
    TaskState["FINISHED"] = "Finished";
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
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ts_project_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ts/project/controller */ "./src/ts/project/controller.ts");
/* harmony import */ var _ts_task_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ts/task/controller */ "./src/ts/task/controller.ts");
/* harmony import */ var _ts_taskState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ts/taskState */ "./src/ts/taskState.ts");
/* harmony import */ var _ts_user_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ts/user/controller */ "./src/ts/user/controller.ts");




var container = document.body;
var user1 = new _ts_user_controller__WEBPACK_IMPORTED_MODULE_3__.User(1, "Double Debug", "pswd123");
var user2 = new _ts_user_controller__WEBPACK_IMPORTED_MODULE_3__.User(2, "John Snow", "pswd321");
var proj1 = new _ts_project_controller__WEBPACK_IMPORTED_MODULE_0__.Project(1, "RWA", null, new Date());
var proj2 = new _ts_project_controller__WEBPACK_IMPORTED_MODULE_0__.Project(2, "SWE", null, new Date());
var task1 = new _ts_task_controller__WEBPACK_IMPORTED_MODULE_1__.Task(1, "Babel", "Configure babel", _ts_taskState__WEBPACK_IMPORTED_MODULE_2__.TaskState.TO_DO);
var task2 = new _ts_task_controller__WEBPACK_IMPORTED_MODULE_1__.Task(2, "Webpack", "Configure webpack", _ts_taskState__WEBPACK_IMPORTED_MODULE_2__.TaskState.TO_DO);
var task3 = new _ts_task_controller__WEBPACK_IMPORTED_MODULE_1__.Task(3, "Classes", "Add classes", _ts_taskState__WEBPACK_IMPORTED_MODULE_2__.TaskState.TO_DO);
proj1.addTask(task1);
proj1.addTask(task2);
proj2.addTask(task3);
user1.addProject(proj1);
user1.addProject(proj2);
proj1.draw(container);
proj2.draw(container);
user1.draw(container);
user2.draw(container);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvcHJvamVjdC9jb250cm9sbGVyLnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy9wcm9qZWN0L21vZGVsLnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy9wcm9qZWN0L3ZpZXcudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL3Rhc2tTdGF0ZS50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvdGFzay9jb250cm9sbGVyLnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy90YXNrL21vZGVsLnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy90YXNrL3ZpZXcudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL3VzZXIvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvdXNlci9tb2RlbC50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvdXNlci92aWV3LnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDdUM7QUFDRjtBQUVy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LENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQy9ELElBQU0sS0FBSyxHQUFZLElBQUksMkRBQU8sQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7QUFFL0QsSUFBTSxLQUFLLEdBQVMsSUFBSSxxREFBSSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsMERBQWUsQ0FBQyxDQUFDO0FBQzdFLElBQU0sS0FBSyxHQUFTLElBQUkscURBQUksQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFLDBEQUFlLENBQUMsQ0FBQztBQUNqRixJQUFNLEtBQUssR0FBUyxJQUFJLHFEQUFJLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsMERBQWUsQ0FBQyxDQUFDO0FBRTNFLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRXJCLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUV4QixLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3RCLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN0QixLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4uL3Rhc2svY29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBQcm9qZWN0TW9kZWwgfSBmcm9tIFwiLi9tb2RlbFwiO1xyXG5pbXBvcnQgeyBQcm9qZWN0VmlldyB9IGZyb20gXCIuL3ZpZXdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcclxuICAgIHB1YmxpYyBtb2RlbDogUHJvamVjdE1vZGVsO1xyXG4gICAgcHVibGljIHZpZXc6IFByb2plY3RWaWV3O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgdGFza3M6IFRhc2tbXSwgZHVlRGF0ZTogRGF0ZSkge1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBuZXcgUHJvamVjdE1vZGVsKGlkLCBuYW1lLCB0YXNrcywgZHVlRGF0ZSk7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gbmV3IFByb2plY3RWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhwYXJlbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52aWV3LmRyYXcocGFyZW50LCB0aGlzLm1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYXNrKHQ6IFRhc2spOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1vZGVsLmFkZFRhc2sodCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlVGFzayhpZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5yZW1vdmVUYXNrKGlkKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi4vdGFzay9jb250cm9sbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdE1vZGVsIHtcclxuICAgIHByaXZhdGUgaWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHRhc2tzOiBUYXNrW107XHJcbiAgICBwdWJsaWMgZHVlRGF0ZTogRGF0ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIHRhc2tzOiBUYXNrW10sIGR1ZURhdGU6IERhdGUpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICBpZiAodGFza3MgPT09IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMudGFza3MgPSBbXTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMudGFza3MgPSB0YXNrcztcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFza3MoKTogVGFza1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YXNrcztcclxuICAgIH1cclxuXHJcbiAgICBhZGRUYXNrKHQ6IFRhc2spOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRhc2tzLnB1c2godCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlVGFzayhpZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0OiBUYXNrKSA9PiB0Lm1vZGVsLmdldElkKCkgIT09IGlkKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFByb2plY3RNb2RlbCB9IGZyb20gXCIuL21vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdFZpZXcge1xyXG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBwYXJlbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRyYXcocGFyZW50OiBIVE1MRWxlbWVudCwgbW9kZWw6IFByb2plY3RNb2RlbCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc05hbWUgPSAncHJvamVjdCc7XHJcbiAgICAgICAgY29uc3QgbGJsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGxibFRpdGxlLmlubmVySFRNTCA9IGAjJHttb2RlbC5nZXRJZCgpfSB8ICR7bW9kZWwubmFtZX08YnI+YDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYmxUaXRsZSk7XHJcblxyXG4gICAgICAgIG1vZGVsLmdldFRhc2tzKCkuZm9yRWFjaCh0YXNrID0+IHRhc2suZHJhdyh0aGlzLmNvbnRhaW5lcikpO1xyXG5cclxuICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZW51bSBUYXNrU3RhdGUge1xyXG4gICAgVE9fRE8gPSBcIlRvIGRvXCIsXHJcbiAgICBJTl9QUk9HUkVTUyA9IFwiSW4gcHJvZ3Jlc3NcIixcclxuICAgIEZJTklTSEVEID0gXCJGaW5pc2hlZFwiXHJcbn0iLCJpbXBvcnQgeyBUYXNrU3RhdGUgfSBmcm9tIFwiLi4vdGFza1N0YXRlXCI7XHJcbmltcG9ydCB7IFRhc2tNb2RlbCB9IGZyb20gXCIuL21vZGVsXCI7XHJcbmltcG9ydCB7IFRhc2tWaWV3IH0gZnJvbSBcIi4vdmlld1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhc2sge1xyXG4gICAgcHVibGljIG1vZGVsOiBUYXNrTW9kZWw7XHJcbiAgICBwdWJsaWMgdmlldzogVGFza1ZpZXc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCBzdGF0ZTogVGFza1N0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBUYXNrTW9kZWwoaWQsIG5hbWUsIGRlc2NyaXB0aW9uLCBzdGF0ZSk7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gbmV3IFRhc2tWaWV3KCk7XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIGRyYXcocGFyZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudmlldy5kcmF3KHBhcmVudCwgdGhpcy5tb2RlbCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUYXNrU3RhdGUgfSBmcm9tIFwiLi4vdGFza1N0YXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGFza01vZGVsIHtcclxuICAgIHByaXZhdGUgaWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIHByaXZhdGUgc3RhdGU6IFRhc2tTdGF0ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIHN0YXRlOiBUYXNrU3RhdGUpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhdGUoKTogVGFza1N0YXRlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRhc2tNb2RlbCB9IGZyb20gXCIuL21vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGFza1ZpZXcge1xyXG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBwYXJlbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhwYXJlbnQ6IEhUTUxFbGVtZW50LCBtb2RlbDogVGFza01vZGVsKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTmFtZSA9ICd0YXNrJztcclxuICAgICAgICBjb25zdCBsYmxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBsYmxOYW1lLmlubmVySFRNTCA9IGBOYW1lOiAke21vZGVsLm5hbWV9PGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOiAke21vZGVsLmRlc2NyaXB0aW9ufTxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdGF0ZTogJHttb2RlbC5nZXRTdGF0ZSgpLnRvU3RyaW5nKCl9YDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYmxOYW1lKTtcclxuICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4uL3Byb2plY3QvY29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tIFwiLi9tb2RlbFwiO1xyXG5pbXBvcnQgeyBVc2VyVmlldyB9IGZyb20gXCIuL3ZpZXdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyIHtcclxuICAgIHB1YmxpYyBtb2RlbDogVXNlck1vZGVsO1xyXG4gICAgcHVibGljIHZpZXc6IFVzZXJWaWV3O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIG5pY2tuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IFVzZXJNb2RlbChpZCwgbmlja25hbWUsIHBhc3N3b3JkKTtcclxuICAgICAgICB0aGlzLnZpZXcgPSBuZXcgVXNlclZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRQcm9qZWN0KHA6IFByb2plY3QpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1vZGVsLmFkZFByb2plY3QocCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlUHJvamVjdChpZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5yZW1vdmVQcm9qZWN0KGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KHBhcmVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnZpZXcuZHJhdyhwYXJlbnQsIHRoaXMubW9kZWwpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi9wcm9qZWN0L2NvbnRyb2xsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyTW9kZWwge1xyXG4gICAgcHJpdmF0ZSBpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIG5pY2tuYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHByb2plY3RzOiBQcm9qZWN0W107XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgbmlja25hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLm5pY2tuYW1lID0gbmlja25hbWU7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBhc3N3b3JkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFzc3dvcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvamVjdHMoKTogUHJvamVjdFtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcclxuICAgIH1cclxuXHJcbiAgICBnZXROdW1PZlByb2plY3RzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFByb2plY3QocDogUHJvamVjdCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChwKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVQcm9qZWN0KGlkOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoKHA6IFByb2plY3QpID0+IHAubW9kZWwuZ2V0SWQoKSAhPT0gaWQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4vbW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyVmlldyB7XHJcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHBhcmVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KHBhcmVudDogSFRNTEVsZW1lbnQsIG1vZGVsOiBVc2VyTW9kZWwpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NOYW1lID0gJ3VzZXInO1xyXG4gICAgICAgIGNvbnN0IGxibE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGxibE5hbWUuaW5uZXJIVE1MID0gYCR7bW9kZWwubmlja25hbWV9PGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICgke21vZGVsLmdldE51bU9mUHJvamVjdHMoKX0gcHJvamVjdHMpYDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsYmxOYW1lKTtcclxuICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi90cy9wcm9qZWN0L2NvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3RzL3Rhc2svY29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBUYXNrU3RhdGUgfSBmcm9tIFwiLi90cy90YXNrU3RhdGVcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3RzL3VzZXIvY29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgY29udGFpbmVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XHJcbmNvbnN0IHVzZXIxOiBVc2VyID0gbmV3IFVzZXIoMSwgXCJEb3VibGUgRGVidWdcIiwgXCJwc3dkMTIzXCIpO1xyXG5jb25zdCB1c2VyMjogVXNlciA9IG5ldyBVc2VyKDIsIFwiSm9obiBTbm93XCIsIFwicHN3ZDMyMVwiKTtcclxuXHJcbmNvbnN0IHByb2oxOiBQcm9qZWN0ID0gbmV3IFByb2plY3QoMSwgXCJSV0FcIiwgbnVsbCwgbmV3IERhdGUoKSk7XHJcbmNvbnN0IHByb2oyOiBQcm9qZWN0ID0gbmV3IFByb2plY3QoMiwgXCJTV0VcIiwgbnVsbCwgbmV3IERhdGUoKSk7XHJcblxyXG5jb25zdCB0YXNrMTogVGFzayA9IG5ldyBUYXNrKDEsIFwiQmFiZWxcIiwgXCJDb25maWd1cmUgYmFiZWxcIiwgVGFza1N0YXRlLlRPX0RPKTtcclxuY29uc3QgdGFzazI6IFRhc2sgPSBuZXcgVGFzaygyLCBcIldlYnBhY2tcIiwgXCJDb25maWd1cmUgd2VicGFja1wiLCBUYXNrU3RhdGUuVE9fRE8pO1xyXG5jb25zdCB0YXNrMzogVGFzayA9IG5ldyBUYXNrKDMsIFwiQ2xhc3Nlc1wiLCBcIkFkZCBjbGFzc2VzXCIsIFRhc2tTdGF0ZS5UT19ETyk7XHJcblxyXG5wcm9qMS5hZGRUYXNrKHRhc2sxKTtcclxucHJvajEuYWRkVGFzayh0YXNrMik7XHJcbnByb2oyLmFkZFRhc2sodGFzazMpO1xyXG5cclxudXNlcjEuYWRkUHJvamVjdChwcm9qMSk7XHJcbnVzZXIxLmFkZFByb2plY3QocHJvajIpO1xyXG5cclxucHJvajEuZHJhdyhjb250YWluZXIpO1xyXG5wcm9qMi5kcmF3KGNvbnRhaW5lcik7XHJcblxyXG51c2VyMS5kcmF3KGNvbnRhaW5lcik7XHJcbnVzZXIyLmRyYXcoY29udGFpbmVyKTsiXSwic291cmNlUm9vdCI6IiJ9