const CLASS_FOR_TYPE: Map<string, string> = new Map([
  ["x-small", "pt"],
  ["small", "ps"],
  ["normal", "pm"],
  ["medium", "pg"],
  ["large", "ph"],
]);

function openBubble(div: HTMLElement, type: string): void {
  let className: string = CLASS_FOR_TYPE.get(type);

  if ($(div).hasClass(className)) {
    $(div).removeClass(className);
  } else {
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
