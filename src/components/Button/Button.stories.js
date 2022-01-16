import Button from './Button.vue';
import {ButtonType} from '../../types/components/Button';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    type: ButtonType,
    text: 'click me',
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {Button},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Button v-bind="args" :class="[`root`, args.type]"/>',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  type: ButtonType.primary,
  text: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: ButtonType.secondary,
  text: 'Secondary',
};

export const Warning = Template.bind({});
Warning.args = {
  type: ButtonType.warning,
  text: 'Warning',
};

export const Ghost = Template.bind({});
Ghost.args = {
  type: ButtonType.ghost,
  text: 'Ghost',
};
