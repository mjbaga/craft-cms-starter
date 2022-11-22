import Button from './Button.twig';

export default {
  title: 'Basic/Button',
  component: Button,
};

export const _default = (args) => Button({ ...args });

_default.args = {
  text: 'My button',
  class: 'button',
};
