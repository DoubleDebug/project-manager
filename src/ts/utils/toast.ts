type popupData = {
    color: string;
    title: string;
    message: string;
};

export function displayPopup(data: popupData) {
    var toast = document.getElementById('toastNotif');
    if (toast !== null) toast.remove();
    toast = createPopup(data);
    $('.manager')[0].appendChild(toast);

    (<any>$('#toastNotif')).toast({ delay: 4000 });
    (<any>$('#toastNotif')).toast('show');
}

function createPopup(data: popupData) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.id = 'toastNotif';

    const toastHeader = document.createElement('div');
    toastHeader.className = 'toast-header';
    toast.appendChild(toastHeader);

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
    toastHeader.appendChild(btnClose);
    btnClose.type = 'button';
    btnClose.className = 'ml-2 mb-1 close';
    btnClose.setAttribute('data-dismiss', 'toast');
    toastHeader.appendChild(btnClose);

    const span = document.createElement('span');
    span.innerHTML = '&times;';
    btnClose.appendChild(span);

    const body = document.createElement('div');
    body.className = 'toast-body';
    body.innerHTML = data.message;
    toast.appendChild(body);

    return toast;
}
