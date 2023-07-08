document.querySelector("#boton").addEventListener("click", function() {
    var texto = document.querySelector("#texto").value;
    var item = document.createElement("li");
    item.appendChild(document.createTextNode(texto));
    document.querySelector("#lista").appendChild(item);
    document.querySelector("#texto").value = "";
  });