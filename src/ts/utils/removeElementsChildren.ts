export function removeElementsChildren(element: Element) {
    if (element === undefined) return;
    while (element.children[0]) element.removeChild(element.children[0]);
}
