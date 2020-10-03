const constants = require('../constants');

const render =  (req, res) => {
  let html = '<h1>dyson</h1><p>Example endpoints:</p>';

  const examples = [
    constants.endpoints.QUESTION_EDIT,
  ];

  html += `<ul>${  examples.map((example) => {
    return `<li><a href="${  example  }">${  example  }</a></li>`;
  }).join('')  }</ul>`;

  res.status(200).send(html);
}

module.exports = {
  path: '/',
  render,
};
