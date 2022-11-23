window.addEventListener("load", () => {
      cuerpo = document.body;

      //header
      header = document.getElementsByTagName("header")[0];
      menu = document.getElementById("circulo");
      nav = document.getElementsByTagName("nav")[0];
      imagenes = document.getElementsByTagName("img");
      abrir = true;

      //secciones
      secciones_div = document.getElementById("contenedor-secciones");
      secciones = document.getElementsByClassName("secciones");

      function abrirMenu(){
            lineas = document.getElementsByClassName("linea");
            if(abrir == true){
                  menu.style.backgroundColor = "#FFCF03";
                  secciones_div.style.opacity = "0.6";
                  header.style.height = "15vh";
                  nav.style.visibility = "visible";
                  for(let i=0; i<3; i++){
                        lineas[0].className = "linea_abierta";
                  }
                  abrir = false;
            }else{
                  menu.style.backgroundColor = "white";
                  secciones_div.style.opacity = "1";
                  header.style.height = "5vh";
                  nav.style.visibility = "hidden";
                  lineas = document.getElementsByClassName("linea_abierta");
                  for(let i=0; i<3; i++){
                        lineas[0].className = "linea";
                  }
                  abrir = true;
            }

      }
      
      function manejoSecciones(e,i){      
            if (e.target.alt == secciones[i].id){
                  for (seccion of secciones){
                        seccion.style.display = "none";
                  }
                  secciones[i].style.display = "block";
            }
            menu.style.backgroundColor = "white";
      }

      menu.addEventListener("click", abrirMenu);
      for (let i=0; i<imagenes.length; i++){
            imagenes[i].addEventListener("click", (e) => {
                  manejoSecciones(e,i);
                  secciones_div.style.opacity = "1";
                  header.style.height = "5vh";
                  nav.style.visibility = "hidden";
                  lineas = document.getElementsByClassName("linea_abierta");
                  for(let j=0; j<3; j++){
                        lineas[0].className = "linea";
                  }
                  abrir = true;
            })
      }
})