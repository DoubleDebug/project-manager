import { DatabaseAPI } from '../utils/databaseAPI';
import { Project } from '../project/controller';
import { ProjectView } from '../project/view';
import { TaskState } from '../utils/taskState';
import { User } from '../user/controller';
import { ManagerModel } from './model';
import { removeElementsChildren } from '../utils/removeElementsChildren';
import { displayPopup } from '../utils/toast';
import { drawDropdownButton } from '../utils/dropdown';
import { displayModal } from '../utils/modal';
import { from, fromEvent } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';

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

        // check for saved user in cookies
        if (model.getUserCookie() === -1) this.drawLoginPage(model);
        else {
            this.drawProfileHeader(model);

            const user = model.getCurrentUser();
            this.drawDashboard(user.model.getProjects(), model);
        }
    }

    drawLoginPage(model: ManagerModel) {
        const loginContainer = document.createElement('div');
        loginContainer.className = 'loginContainer';

        const logo = document.createElement('img');
        logo.className = 'imgStartPage';
        loginContainer.appendChild(logo);

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
        };
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
                animation.className =
                    'spinner-border spinner-border-sm text-light';
                document.getElementById('btnLoginNow').innerHTML =
                    animation.outerHTML;

                // login
                this.tryLogin(model, loginForm);
            },
        });
        const signUpForm = this.drawForm(loginContainer, btnContainer, {
            formType: 'SignUp',
            lblText: 'Sign up to Project Manager',
            btnText: 'Sign up',
            callbackFunction: () => {
                // loading animation
                const animation = document.createElement('div');
                animation.className =
                    'spinner-border spinner-border-sm text-light';
                document.getElementById('btnSignUpNow').innerHTML =
                    animation.outerHTML;

                // login
                this.trySignUp(model, signUpForm);
            },
        });

        this.container.appendChild(loginContainer);
    }

    drawForm(
        parent: HTMLElement,
        btnContainer: HTMLElement,
        data: any
    ): HTMLElement {
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
            if (e.key === 'Enter') {
                data.callbackFunction();
                console.log('refreshed');
            }
        });
        loginForm.appendChild(inputPassword);

        const btnLogin = document.createElement('button');
        btnLogin.id = `btn${data.formType}Now`;
        btnLogin.className = 'btn btn-success';
        btnLogin.innerHTML = data.btnText;
        btnLogin.onclick = (e) => {
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
        const nn = (
            document.getElementById('inputLoginNickname') as HTMLInputElement
        ).value;
        const pswd = (
            document.getElementById('inputLoginPassword') as HTMLInputElement
        ).value;
        let errorMsg: string = 'Login failed: ';
        let loginMsg = '';
        if (model.validateInputData(nn, pswd)) {
            loginMsg = await model.tryLoginUser(nn, pswd);
            if (loginMsg === 'success') {
                // remove login page
                document.getElementsByClassName('imgStartPage')[0].remove();
                document.getElementsByClassName('loginContainer')[0].remove();

                // draw dashboard
                this.drawProfileHeader(model);
                const user = model.getCurrentUser();
                this.drawDashboard(user.model.getProjects(), model);

                // display success message
                displayPopup({
                    color: 'green',
                    title: 'Login successful',
                    message: 'Welcome back to the Project Manager!',
                });
            } else errorMsg += loginMsg;
        } else {
            errorMsg += 'Invalid input.';
        }

        if (loginMsg !== 'success') {
            let lblError = document.getElementById('lblError');
            if (lblError === null) lblError = document.createElement('label');
            lblError.id = 'lblError';
            lblError.innerHTML = errorMsg;
            loginForm.appendChild(lblError);
        }

        // remove animation
        const loginBtn = document.getElementById('btnLoginNow');
        if (loginBtn != null) loginBtn.innerHTML = 'Log in';
    }

    async trySignUp(model: ManagerModel, loginForm: HTMLElement) {
        const nn = (
            document.getElementById('inputSignUpNickname') as HTMLInputElement
        ).value;
        const pswd = (
            document.getElementById('inputSignUpPassword') as HTMLInputElement
        ).value;
        let errorMsg: string = 'Sign up failed: ';
        let signupMsg = '';
        if (model.validateInputData(nn, pswd)) {
            signupMsg = await model.trySignUpUser(nn, pswd);
            if (signupMsg === 'success') {
                // remove login page
                document.getElementsByClassName('imgStartPage')[0].remove();
                document.getElementsByClassName('loginContainer')[0].remove();

                // draw dashboard
                this.drawProfileHeader(model);
                const user = model.getCurrentUser();
                this.drawDashboard(user.model.getProjects(), model);

                // display success message
                displayPopup({
                    color: 'green',
                    title: 'Sign up successful',
                    message: 'Welcome to the Project Manager!',
                });
            } else errorMsg += signupMsg;
        } else {
            errorMsg += 'Invalid input.';
        }

        if (signupMsg !== 'success') {
            let lblError = document.getElementById('lblError');
            if (lblError === null) lblError = document.createElement('label');
            lblError.id = 'lblError';
            lblError.innerHTML = errorMsg;
            loginForm.appendChild(lblError);
        }

        // remove animation
        const signupBtn = document.getElementById('btnSignUpNow');
        if (signupBtn != null) signupBtn.innerHTML = 'Sign up';
    }

    drawProfileHeader(model: ManagerModel) {
        const header = document.createElement('div');
        header.className = 'profileHeader';
        this.container.appendChild(header);

        // Project Manager label (top left)
        const title = document.createElement('label');
        title.className = 'headerTitle';
        title.innerHTML = 'Project Manager';
        header.appendChild(title);

        const menu = document.createElement('div');
        menu.className = 'headerMenu';
        header.appendChild(menu);

        // Search bar
        this.drawSearchBar(menu, model);

        // Add project button
        const btnAddProject = document.createElement('button');
        btnAddProject.className = 'btn btn-success menuButton';
        btnAddProject.id = 'btnAddProject';
        btnAddProject.onclick = () => {
            // clear dashboard
            let dashboard = <HTMLElement>(
                document.getElementsByClassName('dashboard')[0]
            );
            if (dashboard) {
                while (dashboard.children[0]) dashboard.children[0].remove();
            } else {
                dashboard = document.createElement('div');
            }
            dashboard.className = 'dashboard';

            // draw project editor
            const newProj: ProjectView = new ProjectView();
            const user = model.getCurrentUser();
            newProj.drawEditor(
                dashboard,
                null,
                () => this.drawDashboard(user.model.getProjects(), model),
                model
            );
        };
        const plusIcon = document.createElement('i');
        plusIcon.className = 'fas fa-plus';
        btnAddProject.appendChild(plusIcon);
        menu.appendChild(btnAddProject);

        // Dropdown buttons
        this.drawActionDropdown(menu, model);
        this.drawSortingDropdown(menu, model);
        this.drawFilterDropdown(menu, model);
        this.drawProfileDropdown(menu, model);
    }

    drawSearchBar(parent: HTMLElement, model: ManagerModel) {
        const inputGroup = document.createElement('div');
        inputGroup.id = 'searchInputGroup';
        inputGroup.className = 'input-group';
        parent.appendChild(inputGroup);

        const form = document.createElement('div');
        form.className = 'form-outline';
        inputGroup.appendChild(form);

        const inputSearch = document.createElement('input');
        inputSearch.id = 'inputSearch';
        inputSearch.type = 'search';
        inputSearch.className = 'form-control hide';
        inputSearch.placeholder = 'Search public projects';
        inputSearch.oninput = () => {
            this.clearDashboard();
            if (inputSearch.value === '')
                this.drawDashboard(
                    model.getCurrentUser().model.getProjects(),
                    model
                );
        };
        form.appendChild(inputSearch);

        const btnSearch = document.createElement('i');
        btnSearch.id = 'btnSearch';
        btnSearch.className = 'fas fa-search fa-lg';
        btnSearch.onmouseenter = () => {
            inputSearch.classList.remove('hide');
            inputSearch.focus();
        };
        btnSearch.onclick = () => inputSearch.classList.toggle('hide');
        inputGroup.appendChild(btnSearch);

        fromEvent(inputSearch, 'input')
            .pipe(
                map((event: Event) => (<HTMLInputElement>event.target).value),
                filter((searchQuery: string) => searchQuery.length >= 0),
                switchMap((searchQuery: string) => {
                    // console.log('Searching for ' + searchQuery);
                    return DatabaseAPI.getProjectsByText(searchQuery);
                }),
                switchMap((projects) => from(projects).pipe(take(2)))
            )
            .subscribe((project: Project) => {
                this.drawDashboard([project], model, false);
            });
    }

    drawDashboard(
        projects: Project[],
        model: ManagerModel,
        clickableProjects: boolean = true
    ) {
        if (projects.length === 0) {
            this.drawEmptyDashboard(model);
            return;
        }

        let dashboard = <HTMLElement>(
            document.getElementsByClassName('dashboard')[0]
        );
        if (!dashboard) dashboard = document.createElement('div');
        dashboard.className = 'dashboard';
        projects.forEach((proj: Project) => {
            const user = model.getCurrentUser().model;
            proj.drawPreview(
                dashboard,
                () => {
                    const projs = user.getProjects();
                    this.drawDashboard(projs, model);
                },
                model,
                clickableProjects
            );
        });

        this.container.appendChild(dashboard);
    }

    drawEmptyDashboard(model: ManagerModel) {
        if (document.getElementsByClassName('emptyDashboardMessage')[0]) return;

        const container = document.createElement('div');
        container.className = 'emptyDashboardMessage';

        const imgEmpty = document.createElement('img');
        imgEmpty.className = 'imgEmptyDashboard';
        container.appendChild(imgEmpty);

        const lblMessage = document.createElement('label');
        lblMessage.className = 'lblEmptyDashboard';
        lblMessage.innerHTML = 'Your dashboard is empty...';
        container.appendChild(lblMessage);

        const btnAdd = document.createElement('button');
        btnAdd.id = 'btnAddProjectEmpty';
        btnAdd.className = 'btn btn-success';
        btnAdd.onclick = () => {
            // clear dashboard
            let dashboard = <HTMLElement>(
                document.getElementsByClassName('dashboard')[0]
            );
            if (dashboard) {
                while (dashboard.children[0]) dashboard.children[0].remove();
            } else {
                dashboard = document.createElement('div');
            }
            dashboard.className = 'dashboard';

            // clear empty dashboard message
            container.remove();

            const newProj: ProjectView = new ProjectView();
            const user = model.getCurrentUser();
            newProj.drawEditor(
                dashboard,
                null,
                () => this.drawDashboard(user.model.getProjects(), model),
                model
            );
        };
        btnAdd.innerHTML =
            '<i class="fas fa-plus" id="iconPlus"></i>Add project';
        container.appendChild(btnAdd);

        this.container.appendChild(container);
    }

    drawProfileDropdown(parent: HTMLElement, model: ManagerModel) {
        // User dropdown menu
        let dropdownItems = [];

        // User nickname
        const user: User = model.getCurrentUser();
        const nicknameItem = document.createElement('button');
        nicknameItem.disabled = true;
        nicknameItem.className = 'dropdown-item';
        nicknameItem.innerHTML = `#${user.model.getId()} | ${
            user.model.nickname
        }`;
        dropdownItems.push(nicknameItem);

        // Logout button
        const btnLogout = document.createElement('a');
        btnLogout.className = 'dropdown-item';
        btnLogout.innerHTML = 'Log out';
        btnLogout.onclick = () => model.logoutUser();
        dropdownItems.push(btnLogout);

        const dropdown = drawDropdownButton(
            parent,
            'btnProfileDropdown',
            dropdownItems
        );
        const btnProfile = document.createElement('button');
        dropdown.appendChild(btnProfile);
        btnProfile.className = 'btn btn-light dropdown-toggle menuButton';
        btnProfile.id = 'btnProfileDropdown';
        btnProfile.setAttribute('data-toggle', 'dropdown');
        btnProfile.innerHTML = '<i class="fas fa-user iconColor"></i>';
    }

    drawSortingDropdown(parent: HTMLDivElement, model: ManagerModel) {
        // Sorting dropdown
        let dropdownItems: HTMLAnchorElement[] = [];

        // Sort by date added
        const btnSortDateAdded = document.createElement('a');
        btnSortDateAdded.className = 'dropdown-item';
        btnSortDateAdded.innerHTML = 'Date added ✓';
        btnSortDateAdded.onclick = () =>
            this.changeSortingMethod(
                'getTimestamp',
                btnSortDateAdded,
                dropdownItems,
                model,
                true
            );
        dropdownItems.push(btnSortDateAdded);

        // Sort by urgency
        const btnSortUrgency = document.createElement('a');
        btnSortUrgency.className = 'dropdown-item';
        btnSortUrgency.innerHTML = 'Urgency';
        btnSortUrgency.onclick = () =>
            this.changeSortingMethod(
                'getDueDate',
                btnSortUrgency,
                dropdownItems,
                model
            );
        dropdownItems.push(btnSortUrgency);

        // Sort by number of tasks
        const btnSortTasks = document.createElement('a');
        btnSortTasks.className = 'dropdown-item';
        btnSortTasks.innerHTML = 'Number of tasks';
        btnSortTasks.onclick = () =>
            this.changeSortingMethod(
                'getNumOfTasks',
                btnSortTasks,
                dropdownItems,
                model,
                true
            );
        dropdownItems.push(btnSortTasks);

        const dropdown = drawDropdownButton(
            parent,
            'btnSortDropdown',
            dropdownItems
        );
        const btnSortBy = document.createElement('button');
        dropdown.appendChild(btnSortBy);
        btnSortBy.className = 'btn btn-light dropdown-toggle menuButton';
        btnSortBy.id = 'btnSortDropdown';
        btnSortBy.setAttribute('data-toggle', 'dropdown');
        btnSortBy.innerHTML = 'Sort by';
    }

    drawActionDropdown(parent: HTMLDivElement, model: ManagerModel) {
        // Action dropdown
        let dropdownItems: HTMLAnchorElement[] = [];

        // Mark all as finished
        const btnMarkAll = document.createElement('a');
        btnMarkAll.className = 'dropdown-item';
        btnMarkAll.innerHTML = 'Mark all as finished';
        btnMarkAll.onclick = () => {
            // display confirmation message
            displayModal({
                color: 'red',
                title: 'Confirmation',
                message:
                    'Are you sure you want to mark all projects as finished?',
                buttons: [
                    {
                        text: 'Yes',
                        type: 'primary',
                        callback: () => {
                            // Perform action
                            const user = model.getCurrentUser();
                            user.model.markAllAsFinished();
                            const projects = user.model.getProjects();
                            DatabaseAPI.updateProjects(projects).then(() => {
                                // redraw projects
                                this.redrawDashboard(projects, model);
                                // notify user
                                displayPopup({
                                    color: 'green',
                                    title: 'Successful action',
                                    message:
                                        'Successfully marked all projects as finished.',
                                });
                            });
                        },
                    },
                    {
                        text: 'No',
                        type: 'secondary',
                        callback: () => {},
                    },
                ],
            });
        };
        dropdownItems.push(btnMarkAll);

        // Delete all
        const btnDeleteAll = document.createElement('a');
        btnDeleteAll.className = 'dropdown-item';
        btnDeleteAll.innerHTML = 'Delete all projects';
        btnDeleteAll.onclick = () => {
            // display confirmation message
            displayModal({
                color: 'red',
                title: 'Confirmation',
                message: 'Are you sure you want to delete all projects?',
                buttons: [
                    {
                        text: 'Yes',
                        type: 'danger',
                        callback: () => {
                            // Perform action
                            const user = model.getCurrentUser();
                            DatabaseAPI.deleteProjects(
                                user.model.getProjects()
                            ).then(() => {
                                user.model.setProjects([]);
                                // update ui
                                this.redrawDashboard([], model);
                                // notify user
                                displayPopup({
                                    color: 'green',
                                    title: 'Successful action',
                                    message:
                                        'Successfully deleted all projects.',
                                });
                            });
                        },
                    },
                    {
                        text: 'No',
                        type: 'secondary',
                        callback: () => {},
                    },
                ],
            });
        };
        dropdownItems.push(btnDeleteAll);

        // Action button
        const dropdown = drawDropdownButton(parent, 'btnAction', dropdownItems);
        const btnAction = document.createElement('button');
        dropdown.appendChild(btnAction);
        btnAction.className = 'btn btn-light dropdown-toggle menuButton';
        btnAction.id = 'btnAction';
        btnAction.setAttribute('data-toggle', 'dropdown');
        btnAction.innerHTML = 'Action';
    }

    drawFilterDropdown(parent: HTMLDivElement, model: ManagerModel) {
        // Filter dropdown
        let dropdownItems: HTMLElement[] = [];
        const user = model.getCurrentUser();
        const projects = user.model.getProjects();

        // Filter ALL projects
        const btnFilterAll = this.createFilterDropdownItem(
            'All ✓',
            model,
            dropdownItems
        );
        dropdownItems.push(btnFilterAll);

        // Filter TO DO projects
        const btnFilterToDo = this.createFilterDropdownItem(
            'To do',
            model,
            dropdownItems,
            TaskState.TO_DO
        );
        dropdownItems.push(btnFilterToDo);

        // Filter IN PROGRESS projects
        const btnInProgress = this.createFilterDropdownItem(
            'In progress',
            model,
            dropdownItems,
            TaskState.IN_PROGRESS
        );
        dropdownItems.push(btnInProgress);

        // Filter FINISHED projects
        const btnFinished = this.createFilterDropdownItem(
            'Finished',
            model,
            dropdownItems,
            TaskState.FINISHED
        );
        dropdownItems.push(btnFinished);

        // Filter button
        const dropdown = drawDropdownButton(
            parent,
            'btnFilterDropdown',
            dropdownItems
        );
        const btnFilter = document.createElement('button');
        dropdown.appendChild(btnFilter);
        btnFilter.className = 'btn btn-light dropdown-toggle menuButton';
        btnFilter.id = 'btnFilterDropdown';
        btnFilter.setAttribute('data-toggle', 'dropdown');
        btnFilter.innerHTML = 'Filter';
    }

    createFilterDropdownItem(
        btnText: string,
        model: ManagerModel,
        dropdownItems: HTMLElement[],
        state: TaskState = null
    ): HTMLElement {
        const btn = document.createElement('a');
        btn.className = 'dropdown-item';
        btn.innerHTML = btnText;
        btn.onclick = () => {
            const user = model.getCurrentUser().model;
            if (state) {
                this.redrawDashboard(
                    user
                        .getProjects()
                        .filter(
                            (p: Project) => p.model.getProjectState() === state
                        ),
                    model
                );
            } else this.redrawDashboard(user.getProjects(), model);
            this.changeFilteringCheckmark(dropdownItems, btn);
        };
        return btn;
    }

    changeFilteringCheckmark(dropdownItems: Element[], selectedItem: Element) {
        // make this sorting method active
        dropdownItems.map(
            (el) => (el.innerHTML = el.innerHTML.replace(' ✓', ''))
        );
        selectedItem.innerHTML += ' ✓';
    }

    changeSortingMethod(
        method: 'getTimestamp' | 'getDueDate' | 'getNumOfTasks',
        sortingButtonEl: HTMLElement,
        dropdownArray: HTMLElement[],
        model: ManagerModel,
        reverseOperators: boolean = false
    ) {
        // make this sorting method active
        dropdownArray.map(
            (el) => (el.innerHTML = el.innerHTML.replace(' ✓', ''))
        );
        sortingButtonEl.innerHTML += ' ✓';

        // apply sorting method
        const user = model.getCurrentUser();
        user.model.sortProjects(method, reverseOperators);

        // redraw dashboard
        this.redrawDashboard(user.model.getProjects(), model);

        // reset filtering method
        const filterDropdownItems =
            document.getElementById('btnFilterDropdown').parentElement
                .children[0].children;
        const items: Element[] = Array.from(filterDropdownItems);
        this.changeFilteringCheckmark(items, items[0]);
    }

    redrawDashboard(
        projects: Project[],
        model: ManagerModel,
        clickableProjects: boolean = true
    ) {
        // clear empty dashboard message (if exists)
        const empty = document.getElementsByClassName(
            'emptyDashboardMessage'
        )[0];
        if (empty) empty.remove();

        // clear previous dashboard
        this.clearDashboard();

        // redraw
        this.drawDashboard(projects, model, clickableProjects);
    }

    clearDashboard() {
        const dashboard = document.getElementsByClassName('dashboard')[0];
        removeElementsChildren(dashboard);
    }

    toggleLoadingScreen(parent: HTMLElement, show: boolean) {
        if (show) {
            const container = document.createElement('div');
            container.className = 'spinnerContainer';

            const animation = document.createElement('div');
            animation.className = 'spinner-border spinnerAnimation';
            animation.innerHTML = '<span class="sr-only">Loading...</span>';
            container.appendChild(animation);

            const title = document.createElement('label');
            title.className = 'loadingTitle';
            title.innerHTML = 'Loading...';
            container.appendChild(title);

            parent.appendChild(container);
        } else {
            parent.getElementsByClassName('spinnerContainer')[0].remove();
        }
    }
}
