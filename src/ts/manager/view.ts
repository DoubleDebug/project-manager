import { DatabaseAPI } from '../databaseAPI';
import { Project } from '../project/controller';
import { TaskState } from '../taskState';
import { User } from '../user/controller';
import { ManagerModel } from './model';

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
    if (model.getUserCookie() === -1)
      this.drawLoginPage(model);
    else {
      this.drawProfileHeader(model);
      this.drawDashboard(model.getCurrentUser().model.getProjects());
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
        animation.className = 'spinner-border spinner-border-sm text-light';
        document.getElementById('btnLoginNow').innerHTML = animation.outerHTML;

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
        animation.className = 'spinner-border spinner-border-sm text-light';
        document.getElementById('btnSignUpNow').innerHTML = animation.outerHTML;

        // login
        this.trySignUp(model, signUpForm);
      },
    });

    this.container.appendChild(loginContainer);
  }

  /**
   * @param data requires COLOR, TITLE and MESSAGE property
   */
  static displayPopup(data: any) {
    var toast = document.getElementById('toastNotif');
    if (toast !== null) toast.remove();
    toast = ManagerView.createPopup(data);
    $('.manager')[0].appendChild(toast);

    (<any>$('#toastNotif')).toast({ delay: 4000 });
    (<any>$('#toastNotif')).toast('show');
  }

  private static createPopup(data: any) {
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
    span.innerHTML = '&times;';
    btnClose.appendChild(span);

    toast.appendChild(toastHeader);

    const body = document.createElement('div');
    body.className = 'toast-body';
    body.innerHTML = data.message;

    toast.appendChild(body);
    return toast;
  }

  /**
   * @param data requires COLOR, TITLE, MESSAGE and BUTTONS property.
   * Each button requires TEXT, TYPE (class name) and CALLBACK FUNCTION.
   */
  static displayModal(data: any) {
    let modal = document.getElementById('modalDialog');
    if (modal !== null) modal.remove();
    modal = ManagerView.createModal(data);
    $('.manager')[0].appendChild(modal);

    (<any>$('#modalDialog')).modal('show');
  }

  private static createModal(data: any) {
    const modal = document.createElement('div');
    modal.id = 'modalDialog';
    modal.className = 'modal fade';
    modal.tabIndex = -1;

    const dialog = document.createElement('div');
    dialog.className = 'modal-dialog modal-dialog-centered';

    const content = document.createElement('div');
    content.className = 'modal-content';

    const header = document.createElement('div');
    header.className = 'modal-header';

    const title = document.createElement('h5');
    title.className = 'modal-title';
    title.innerHTML = data.title;
    header.appendChild(title);

    const btnClose = document.createElement('button');
    header.appendChild(btnClose);
    let btnHtml = '<button class="close" ';
    btnHtml += 'data-dismiss="modal"><span>&times;</span></button>';
    btnClose.outerHTML = btnHtml;
    content.appendChild(header);

    const body = document.createElement('div');
    body.className = 'modal-body';

    const paragraph = document.createElement('p');
    paragraph.innerHTML = data.message;
    body.appendChild(paragraph);
    content.appendChild(body);

    const footer = document.createElement('div');
    footer.className = 'modal-footer';

    data.buttons.forEach((btn: any) => {
      const btnElement = document.createElement('button');
      btnElement.className = `btn btn-${btn.type} btnModal`;
      btnElement.innerHTML = btn.text;
      btnElement.onclick = () => {
        btn.callback();
        (<any>$('#modalDialog')).modal('toggle');
      };
      footer.appendChild(btnElement);
    });

    content.appendChild(footer);
    dialog.appendChild(content);
    modal.appendChild(dialog);
    return modal;
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
        this.drawDashboard(model.getCurrentUser().model.getProjects());

        // display success message
        ManagerView.displayPopup({
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
        this.drawDashboard(model.getCurrentUser().model.getProjects());

        // display success message
        ManagerView.displayPopup({
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

    // Add project button
    const btnAddProject = document.createElement('button');
    btnAddProject.className = 'btn btn-success menuButton';
    btnAddProject.id = 'btnAddProject';
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

  drawDropdownButton(
    parent: HTMLElement,
    btnId: string,
    items: HTMLElement[]
  ): HTMLElement {
    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown';
    parent.appendChild(dropdown);

    const dropdownMenu = document.createElement('div');
    dropdownMenu.className = 'dropdown-menu dropdown-menu-right';
    (<any>dropdownMenu)['aria-labelledby'] = btnId;
    dropdown.appendChild(dropdownMenu);

    items.forEach((item) => dropdownMenu.appendChild(item));

    return dropdown;
  }

  drawDashboard(projects: Project[]) {
    if (projects.length === 0) {
      this.drawEmptyDashboard();
      return;
    }

    let dashboard = <HTMLElement>(
      document.getElementsByClassName('dashboard')[0]
    );
    if (!dashboard) dashboard = document.createElement('div');
    dashboard.className = 'dashboard';
    projects.forEach((proj: Project) => {
      proj.drawPreview(dashboard, () => this.drawDashboard(projects));
    });

    this.container.appendChild(dashboard);
  }

  drawEmptyDashboard() {
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
    btnAdd.innerHTML = '<i class="fas fa-plus" id="iconPlus"></i>Add project';
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
    nicknameItem.innerHTML = `#${user.model.getId()} | ${user.model.nickname}`;
    dropdownItems.push(nicknameItem);

    // Logout button
    const btnLogout = document.createElement('a');
    btnLogout.className = 'dropdown-item';
    btnLogout.innerHTML = 'Log out';
    btnLogout.onclick = () => model.logoutUser();
    dropdownItems.push(btnLogout);

    const dropdown = this.drawDropdownButton(
      parent,
      'btnProfileDropdown',
      dropdownItems
    );
    const btnProfile = document.createElement('button');
    dropdown.appendChild(btnProfile);
    let btnHtml =
      '<button class="btn btn-light dropdown-toggle menuButton" type="button" ';
    btnHtml +=
      'id="btnProfileDropdown" data-toggle="dropdown" aria-haspopup="true" ';
    btnHtml +=
      'aria-expanded="false"><i class="fas fa-user iconColor"></i></button>';
    btnProfile.outerHTML = btnHtml;
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

    const dropdown = this.drawDropdownButton(
      parent,
      'btnSortDropdown',
      dropdownItems
    );
    const btnSortBy = document.createElement('button');
    dropdown.appendChild(btnSortBy);
    let btnHtml =
      '<button class="btn btn-light dropdown-toggle menuButton" type="button" ';
    btnHtml +=
      'id="btnSortDropdown" data-toggle="dropdown" aria-haspopup="true" ';
    btnHtml += 'aria-expanded="false">Sort by</button>';
    btnSortBy.outerHTML = btnHtml;
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
      ManagerView.displayModal({
        color: 'red',
        title: 'Confirmation',
        message: 'Are you sure you want to mark all projects as finished?',
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
                this.redrawDashboard(projects);
                // notify user
                ManagerView.displayPopup({
                  color: 'green',
                  title: 'Successful action',
                  message: 'Successfully marked all projects as finished.',
                });
              });
            },
          },
          {
            text: 'No',
            type: 'secondary',
            callback: () => { },
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
      ManagerView.displayModal({
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
              DatabaseAPI.deleteProjects(user.model.getProjects()).then(() => {
                user.model.setProjects([]);
                // update ui
                this.redrawDashboard([]);
                // notify user
                ManagerView.displayPopup({
                  color: 'green',
                  title: 'Successful action',
                  message: 'Successfully deleted all projects.',
                });
              });
            },
          },
          {
            text: 'No',
            type: 'secondary',
            callback: () => { },
          },
        ],
      });
    };
    dropdownItems.push(btnDeleteAll);

    // Action button
    const dropdown = this.drawDropdownButton(
      parent,
      'btnAction',
      dropdownItems
    );
    const btnAction = document.createElement('button');
    dropdown.appendChild(btnAction);
    let btnHtml =
      '<button class="btn btn-light dropdown-toggle menuButton" type="button" ';
    btnHtml += 'id="btnAction" data-toggle="dropdown" aria-haspopup="true" ';
    btnHtml += 'aria-expanded="false">Action</button>';
    btnAction.outerHTML = btnHtml;
  }

  drawFilterDropdown(parent: HTMLDivElement, model: ManagerModel) {
    // Filter dropdown
    let dropdownItems: HTMLElement[] = [];
    const user = model.getCurrentUser();
    const projects = user.model.getProjects();

    // Filter ALL projects
    const btnFilterAll = this.createFilterDropdownItem('All ✓', projects, dropdownItems);
    dropdownItems.push(btnFilterAll);

    // Filter TO DO projects
    const btnFilterToDo = this.createFilterDropdownItem(
      'To do',
      projects.filter((p: Project) => p.model.getProjectState() === TaskState.TO_DO),
      dropdownItems
    );
    dropdownItems.push(btnFilterToDo);

    // Filter IN PROGRESS projects
    const btnInProgress = this.createFilterDropdownItem(
      'In progress',
      projects.filter((p: Project) => p.model.getProjectState() === TaskState.IN_PROGRESS),
      dropdownItems
    );
    dropdownItems.push(btnInProgress);

    // Filter FINISHED projects
    const btnFinished = this.createFilterDropdownItem(
      'Finished',
      projects.filter((p: Project) => p.model.getProjectState() === TaskState.FINISHED),
      dropdownItems
    );
    dropdownItems.push(btnFinished);

    // Filter button
    const dropdown = this.drawDropdownButton(
      parent,
      'btnFilterDropdown',
      dropdownItems
    );
    const btnFilter = document.createElement('button');
    dropdown.appendChild(btnFilter);
    let btnHtml =
      '<button class="btn btn-light dropdown-toggle menuButton" type="button" ';
    btnHtml +=
      'id="btnFilterDropdown" data-toggle="dropdown" aria-haspopup="true" ';
    btnHtml += 'aria-expanded="false">Filter</button>';
    btnFilter.outerHTML = btnHtml;
  }

  createFilterDropdownItem(
    btnText: string,
    projects: Project[],
    dropdownItems: HTMLElement[]
  ): HTMLElement {
    const btn = document.createElement('a');
    btn.className = 'dropdown-item';
    btn.innerHTML = btnText;
    btn.onclick = () => {
      this.redrawDashboard(projects);
      this.changeFilteringCheckmark(dropdownItems, btn);
    }
    return btn;
  }

  changeFilteringCheckmark(dropdownItems: Element[], selectedItem: Element) {
    // make this sorting method active
    dropdownItems.map((el) => (el.innerHTML = el.innerHTML.replace(' ✓', '')));
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
    dropdownArray.map((el) => (el.innerHTML = el.innerHTML.replace(' ✓', '')));
    sortingButtonEl.innerHTML += ' ✓';

    // apply sorting method
    const user = model.getCurrentUser();
    user.model.sortProjects(method, reverseOperators);

    // redraw dashboard
    this.redrawDashboard(user.model.getProjects());

    // reset filtering method
    const filterDropdownItems = document.getElementById('btnFilterDropdown').parentElement.children[0].children;
    const items: Element[] = Array.from(filterDropdownItems);
    this.changeFilteringCheckmark(items, items[0]);
  }

  redrawDashboard(projects: Project[]) {
    // clear empty dashboard message (if exists)
    const empty = document.getElementsByClassName('emptyDashboardMessage')[0];
    if (empty) empty.remove();

    // clear previous dashboard
    const dashboard = document.getElementsByClassName('dashboard')[0];
    ManagerView.removeElementsChildren(dashboard);

    // redraw
    this.drawDashboard(projects);
  }

  static removeElementsChildren(element: Element) {
    if (element === undefined) return;

    while (element.children[0]) element.removeChild(element.children[0]);
  }
}