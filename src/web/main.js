import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js'
import '@webcomponents/webcomponentsjs/webcomponents-loader.js'

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'

class XBook extends PolymerElement {
  constructor() {
    super()
  }
  static get properties() {
    return {
      id: {
        type: Number,
        value: ''
      },
      title: {
        type: String,
        value: ''
      }
    }
  }
  static get template() {
    return html`
      <li>[[id]] -- [[title]] <slot /></li>
    `
  }
}

// Register the new element with the browser
customElements.define('x-book', XBook)
