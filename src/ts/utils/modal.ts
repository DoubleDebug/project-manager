/**
 * @param data requires TITLE, MESSAGE and BUTTONS property.
 * Each button requires TEXT, TYPE (class name - e.g. 'primary', 'danger', etc.) and CALLBACK FUNCTION.
 */
export function displayModal(data: any) {
    let modal = document.getElementById('modalDialog');
    if (modal !== null) modal.remove();
    modal = createModal(data);
    $('.manager')[0].appendChild(modal);

    (<any>$('#modalDialog')).modal('show');
}

function createModal(data: any) {
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
    btnClose.className = 'close';
    btnClose.setAttribute('data-dismiss', 'modal');
    btnClose.innerHTML = '<span>&times;</span>';
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
