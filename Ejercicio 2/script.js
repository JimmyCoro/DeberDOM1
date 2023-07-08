document.querySelector("#barraBusqueda").addEventListener("input", function() {
    var filtro = this.value.toLowerCase();
    var lista = document.getElementById("lista").getElementsByTagName("li");
  
    for (var i = 0; i < lista.length; i++) {
      var textoElemento = lista[i].textContent.toLowerCase();
      if (textoElemento.includes(filtro)) {
        lista[i].style.display = "block";
      } else {
        lista[i].style.display = "none";
      }
    }
  });