import { html, TemplateResult } from 'lit-html';
import '../wc-polymorphic.js';
import demoStyle from "../src/templates/shared/demo.css";

export default {
  title: 'WcPolymorphic',
  component: 'wc-polymorphic',
  argTypes: {
    template: { control: 'object' },
  },
  args :{
    template : {
      id : "sample-two",
      context : {
         message: 'hi polymorphic',
         value: 1946
      }
    }
  }
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
  storyName: string;
}

interface ArgTypes {
  template: ITemplate;
}

interface ITemplate{
  id:string;
  context:any;
}

export const polymorphicTemplate: Story<ArgTypes> = ({
  template = {
    id : "sample-one",
    context : {
       message: 'hi polymorphic',
       value: 1946
    }
  }
}: ArgTypes) => html`
  <style>
    ${demoStyle}
  </style>
  <wc-polymorphic .template="${template}">
  </wc-polymorphic>
`;

polymorphicTemplate.storyName = "Dynamic Template";