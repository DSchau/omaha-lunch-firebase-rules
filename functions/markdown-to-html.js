const unified = require('unified');
const markdown = require('remark-parse');
const html = require('remark-html');

const markdownToHTML = markdownStr => {
  return new Promise((resolve, reject) => {
    unified()
      .use(markdown)
      .use(html)
      .process(markdownStr, (err, vfile) => {
        if (err) {
          reject(err);
        }
        resolve(vfile.contents);
      });
  });
};

module.exports = ({ admin, functions }, ref = `/comments/{commentId}/text`) => {
  return functions.database.ref(ref).onCreate(event => {
    const text = event.data.val();

    if (!text) {
      return;
    }

    return markdownToHTML(text)
      .then(html => {
        return event.data.ref.parent.child('html').set(html)
      });
  });
};
