import { html, fixture, expect } from '@open-wc/testing';

import { WcPolymorphic } from '../src/WcPolymorphic.js';
import '../wc-polymorphic.js';

describe('WcPolymorphic', () => {

  it('passes the a11y audit', async () => {
    const el = await fixture<WcPolymorphic>(html`<wc-polymorphic></wc-polymorphic>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
