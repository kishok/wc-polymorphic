import { html, NodePart,directive, Part } from "lit-html";
import { until } from "lit-html/directives/until";

const previousValues = new WeakMap();

export const templateLoader = directive((template) => (part: Part) => {

    if (!(part instanceof NodePart)) {
        throw new Error('Templates can only be used in text bindings');
      }
    
      const previousValue = previousValues.get(part);
      if (previousValue !== undefined &&
          template.id === previousValue.id &&
          part.value === previousValue) {
        return;
      }

      if(!['sample-one','sample-two'].includes(template.id)){
           part.setValue('❌ Invalid template Id');
           return;
      }

    const getTemplate = import(`./templates/${template.id}.js`).then(module => {

        const tNode = module.default;

        return tNode(Object.assign({}, template.context, {'id': template.id}));

    });

    part.setValue(until(getTemplate, html`<span>⌛ Loading...</span>`));

    previousValues.set(part, template);

});