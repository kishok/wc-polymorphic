import { html, css, LitElement, property } from 'lit-element';
import { templateLoader } from './poly-template-directive';

export class WcPolymorphic extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--wc-polymorphic-text-color, #000);
    }
  `;

  @property({ type: Object }) template = { id: 'sample-one' , context:{ message : 'hi kishok', value : 1947}};


  render(){
    return html`${templateLoader(this.template)}`;
  }
}
