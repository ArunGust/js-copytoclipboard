Add this button to html
<button onclick='copycontrolid(this); return false;'>Copy</button>

var copycontrolid = function (elem) {
  copyToClipboard(elem.parentNode.id);
}

function copyToClipboard(text) {
  if (navigator.clipboard) { // default: modern asynchronous API
      return navigator.clipboard.writeText(text);
  } else if (window.clipboardData && window.clipboardData.setData) {     // for IE11
      window.clipboardData.setData('Text', text);
      return Promise.resolve();
  } else {
      // workaround: create dummy input
      const input = h('input', { type: 'text' });
      input.value = text;
      document.body.append(input);
      input.focus();
      input.select();
      document.execCommand('copy');
      input.remove();
      return Promise.resolve();
  }
}
