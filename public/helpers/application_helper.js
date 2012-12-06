$.loadTemplate = function (o, callback) {
  if (!o.htmlTemplate) {
    $.get(o.template, function (html) {
      o.htmlTemplate = html;
      callback(html);
    });
  }
  else {
    callback(o.htmlTemplate);
  }
};

$.renderTemplate = function (o, templateObject, callback) {
  $.loadTemplate(o, function (html) {
    html = _.template(html, templateObject);
    $(o.el).html(html);
    if (typeof callback === 'function') {
      callback();
    }
  });
};
