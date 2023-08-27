const CLASS_FOR_TYPE = new Map([
    ["xx-small", "px"],
    ["x-small", "pt"],
    ["small", "ps"],
    ["normal", "pm"],
    ["medium", "pg"],
    ["large", "ph"],
]);
function openBubble(div, type) {
    let className = CLASS_FOR_TYPE.get(type);
    if (!className) {
        console.error(`No class found for type: ${type}`);
        return;
    }
    if (div.classList.contains(className)) {
        div.classList.remove(className);
    }
    else {
        div.classList.add(className);
        setTimeout(() => {
            // automatically close the bubble after 5000ms
            div.classList.remove(className);
        }, 5000);
    }
}
