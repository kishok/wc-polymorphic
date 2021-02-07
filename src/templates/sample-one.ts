import { html, TemplateResult } from "lit-element";

const templateContainer = (data: any): TemplateResult => {
    return html`This content loads from ${data.id} - ${data.message}
    <input .value=${data.value} />
    <slot></slot>
    `
}

export default templateContainer;