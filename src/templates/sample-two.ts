import { html, TemplateResult } from "lit-element";
import "@lion/dialog/lion-dialog";
import { styleMap } from "lit-html/directives/style-map";

const templateContainer = (data: any): TemplateResult => {
    return html`This content loads from ${data.id} - ${data.message}
  <lion-dialog>
    <button slot="invoker" style="${styleMap({color:'green'})}">Click me to open dialog</button>
    <div slot="content" class="dialog">
      Hello! You can close this dialog here:
      <button
        class="close-button"
        @click=${(e:any) => e.target.dispatchEvent(new Event('close-overlay', { bubbles: true }))}
      >
        ⨯
      </button>
    </div>
  </lion-dialog>
    `
}

export default templateContainer;