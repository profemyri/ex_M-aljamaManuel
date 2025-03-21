document.getElementById("cuenta").oninput = function(){
    document.getElementById("contador").textContent = this.value.length;
};
document.getElementById("cambiarFondo").onclick=function(){
    document.body.style.backgroundColor = "black";
};



  let boton = document.getElementById("boton");

  boton.addEventListener("mouseover", function () {
    boton.style.backgroundColor = "white";
    boton.style.color = "blue";
  });

  boton.addEventListener("mouseout", function () {
    boton.style.backgroundColor = "blue";
    boton.style.color = "white";
  });

  let nombre = document.getElementById("nombre");
boton.addEventListener("click", function(){
    alert("¿Seguro que quieres enviarlo?")
    alert("Gracias por tu pedido"+nombre)
});