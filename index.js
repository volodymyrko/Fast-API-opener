var config = require("./config.js");

var contextMenu = require("sdk/context-menu");
var tabs = require("sdk/tabs");

var IntMenuItem = contextMenu.Item({
  label: config["INT_LABEL"],
  context: contextMenu.SelectionContext(),
  contentScript: 'self.on("click", function () {' +
                 '  var text = window.getSelection().toString();' +
                 '  self.postMessage(text);' +
                 '});',
  onMessage: function (selectionText) {
    tabs.open(config['INT_API_URL'] + selectionText);
  }
});

var ProdMenuItem = contextMenu.Item({
  label: config["PROD_LABEL"],
  context: contextMenu.SelectionContext(),
  contentScript: 'self.on("click", function () {' +
                 '  var text = window.getSelection().toString();' +
                 '  self.postMessage(text);' +
                 '});',
  onMessage: function (selectionText) {
    tabs.open(config['PROD_API_URL'] + selectionText);
  }
});
