var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
  var element = elements[i];

  for (var j = 0; j < element.childNodes.length; j++) {
    var node = element.childNodes[j];

    if (node.nodeType === 3) {
      var text = node.nodeValue;

      var replacedText = text.replace(/alt-right/g, 'neo-nazi')
        .replace(/Alt-right/g, 'Neo-nazi')
        .replace(/alt-Right/g, 'neo-Nazi')
        .replace(/Alt-Right/g, 'Neo-Nazi')
        .replace(/alt right/g, 'neo nazi')
        .replace(/Alt right/g, 'Neo nazi')
        .replace(/alt Right/g, 'neo Nazi')
        .replace(/Alt Right/g, 'Neo Nazi')
        .replace(/alt.right/gi, 'neo-nazi');

      if (replacedText !== text) {
        element.replaceChild(document.createTextNode(replacedText), node);
      }
    }
  }
}
