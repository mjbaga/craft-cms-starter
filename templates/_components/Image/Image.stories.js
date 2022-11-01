import Image from './Image.twig';

export default {
  title: 'Basic/Image',
  component: Image,
};

export const _default = (args) => Image({ ...args });

_default.args = {
  src: 'https://via.placeholder.com/640/0000FF/808080',
  class: 'image',
  alt: '',
};
