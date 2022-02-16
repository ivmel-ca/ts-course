export class UserForm {
  constructor(public parent: Element) {}

  onButtonClick(): void {
    console.log("hello world!");
  }

  onHeaderHover(): void {
    console.log("hovering over h1");
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick,
      "mouseover:h1": this.onHeaderHover
    };
  }

  template(): string {
    return `
    <div class="">
      <h1>User Form</h1>
      <input />
      <button>Click me</button>
    </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
