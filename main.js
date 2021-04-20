const marked = require("marked");
const html = marked('# Marked in Node.js\n\nRendered by **marked**.');

marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function(code, language) {
      const hljs = require('highlight.js');
      const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
      return hljs.highlight(validLanguage, code).value;
    },
    pedantic: false,
    gfm: false,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  });

console.log(html);