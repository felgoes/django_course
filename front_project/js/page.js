var button_list = []
for (var v = 0; v < 5; v++) {
  document.write ("<br>");
  for (var i = 0; i < 7; i++) {
    var btn = document.createElement("BUTTON");        // Create a <button> element
    var t = document.createTextNode("BOTÃO "+v+i);       // Create a text node
    btn.appendChild(t);                                // Append the text to <button>
    document.body.appendChild(btn);
    button_list.push(t)
  }
  console.log($('button[name*='BOTÃO 01']'))
}
