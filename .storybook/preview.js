import Twig from 'twig';

Twig.extendFunction('inlineSvg', (value) => {
  return value;
});

Twig.extendFilter('t', (value) => {
  return value;
});

Twig.extendFilter('kebab', (value) => {
  return value
    .replace(/([A-Z])([A-Z])/g, '$1-$2')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
});

// Not working, unknown why
Twig.extend(function (Twig) {
  Twig.exports.extendTag({
    type: 'js',
    regex: /^js$/,
    next: ['endjs'],
    open: true,
    parse: function (token, context, chain) {
      const tagContents = token.output[token.match.index].value;
      const output = `<script type="text/javascript">${tagContents}</script>`;
      return {
        chain: chain,
        output: output,
      };
    },
  });
  Twig.exports.extendTag({
    type: 'endjs',
    regex: /^endjs$/,
    next: [],
    open: false,
  });
});
