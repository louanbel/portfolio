const CLASS_FOR_TYPE = new Map([
    ["x-small", "pt"],
    ["small", "ps"],
    ["normal", "pm"],
    ["medium", "pg"],
    ["large", "ph"],
]);
function openBubble(div, type) {
    let className = CLASS_FOR_TYPE.get(type);
    if ($(div).hasClass(className)) {
        $(div).removeClass(className);
    }
    else {
        $(div).addClass(className);
        $(div)
            .delay(5000)
            .queue(function () {
            // automatically close the bubble
            $(div).removeClass(className);
            $(div).dequeue();
        });
    }
}
