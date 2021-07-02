export function drawDropdownButton(
    parent: HTMLElement,
    btnId: string,
    items: HTMLElement[]
): HTMLElement {
    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown';
    parent.appendChild(dropdown);

    const dropdownMenu = document.createElement('div');
    dropdownMenu.className = 'dropdown-menu dropdown-menu-right';
    dropdownMenu.setAttribute('aria-labelledby', btnId);
    dropdown.appendChild(dropdownMenu);

    items.forEach((item) => dropdownMenu.appendChild(item));

    return dropdown;
}
