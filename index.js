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


      //aside
      flecha = document.getElementById("flecha");
      contenedor_aside = document.getElementById("contenedor-aside");
      aside_global = document.getElementById("aside-global");

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

      flecha.addEventListener("click", abrirAside)
})

function abrirMenu(){
      lineas = document.getElementsByClassName("linea");
      if(abrir){
            menu.style.backgroundColor = "var(--principal)";
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
      img = document.getElementById("img-sobre-mi");
      div = document.getElementById("contenedor-info-sobre-mi");

      img_ani = document.getElementById("img-sobre-mi-ani");
      div_ani = document.getElementById("contenedor-info-sobre-mi-ani");
      
      if (e.target.alt == secciones[i].id){
            for (seccion of secciones){
                  seccion.style.display = "none";
                  if(img_ani != null){
                        img_ani.id = "img-sobre-mi";
                        div_ani.id = "contenedor-info-sobre-mi";
                  }
            }
            secciones[i].style.display = "block";
            if(secciones[i].id == "sobre_mi"){
                  img.id = "img-sobre-mi-ani";
                  div.id = "contenedor-info-sobre-mi-ani";
            }
      }
      menu.style.backgroundColor = "white";
}

function abrirAside(){
      lineas = document.getElementsByClassName("linea-flecha");
      if(abrir){
            secciones_div.style.opacity = "0.4";
            aside_global.style.opacity = "1";
            flecha.style.backgroundColor = "#ffd52f00";
            contenedor_aside.style.zIndex = "29";
            contenedor_aside.style.width = "15vw";
            for(let i=0; i<2; i++){
                  lineas[0].className = "linea-flecha-reves";
            }
            abrir = false;
      }else{
            secciones_div.style.opacity = "1";
            aside_global.style.opacity = "0";
            flecha.style.backgroundColor = "rgba(193, 193, 193, 0.411)";
            contenedor_aside.style.zIndex = "0";
            contenedor_aside.style.width = "5vw";
            lineas = document.getElementsByClassName("linea-flecha-reves");
            for(let i=0; i<2; i++){
                  lineas[0].className = "linea-flecha";
            }
            abrir = true;
      }

}