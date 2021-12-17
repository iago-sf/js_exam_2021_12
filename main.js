const body = document.getElementsByTagName("body")[0];

const header = body.getElementsByTagName("div")[0];
const navbar = body.getElementsByTagName("div")[1];
const main = body.getElementsByTagName("div")[2];
const aside = body.getElementsByTagName("div")[3];
const content =
  body.getElementsByTagName("div")[body.getElementsByTagName("div").length - 4];
const footer =
  body.getElementsByTagName("div")[body.getElementsByTagName("div").length - 1];

/********************************************
 *                  HEADER                  *
 ********************************************/
const head_title = header.getElementsByTagName("h1")[0];
const head_parr = header.getElementsByTagName("p")[0];

header.addEventListener("mouseover", () => {
  header.classList.add("header-image");

  head_title.innerHTML = "Examen de Iago Senín";
  head_title.style.color = "purple";
  head_parr.innerHTML =
    "An <span>exam</span> website created by <span>you</span>.";

  head_parr_elements = head_parr.getElementsByTagName("span");
  for (let i = 0; i < head_parr_elements.length; i++) {
    head_parr_elements[i].style.fontSize = Math.random() * 5 + 1 + "rem";
    head_parr_elements[i].style.color = `rgb(${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )})`;

    if (i % 2) {
      head_parr_elements[i].style.fontFamily =
        "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
    } else {
      head_parr_elements[i].style.fontFamily =
        "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
    }
  }
});

header.addEventListener("mouseout", () => {
  header.classList.remove("header-image");
  head_title.innerHTML = "Examen primer trimestre";
  head_title.style.color = "white";
  head_parr.innerHTML = "A test website created by me.";
});

/********************************************
 *                  NAVBAR                  *
 ********************************************/
const links = navbar.getElementsByTagName("a");

links[0].addEventListener("click", () => {
  let params = `scrollbars=yes, resizable=yes, status=no, location=no, toolbar=no, menubar=no, width=0, height=0, left=-1000, top=-1000`;
  window.open("materials/examen.pdf", "Requerimientos del examen", params);
});
links[0].addEventListener("mouseover", () => {
  links[0].style.backgroundColor = "#333";
  links[0].style.color = "white";
});

links[1].innerHTML = "Inicio";
links[1].setAttribute("href", " ");

links[3].style.position = "absolute";
links[3].style.right = "0";
links[3].setAttribute("href", "#footer");
footer.setAttribute("id", "footer");

/********************************************
 *                   ASIDE                  *
 ********************************************/
aside.replaceChild(
  document.createElement("div"),
  aside.getElementsByTagName("h5")[0]
);
const about = aside.getElementsByTagName("div")[0];

// about me
let createdElement = document.createElement("h5");
createdElement.innerHTML = "Inserte su nombre y edad y una imagen:";
about.appendChild(createdElement);

about.appendChild(h6child("nombre"));
about.appendChild(h6child("edad", "number"));
about.appendChild(h6child("imagen", "file"));

function h6child(id, type = "text") {
  createdElement = document.createElement("h6");
  createdElement.innerHTML = id;
  createdElement.style.textTransform = "capitalize";
  inputchild(createdElement, id, type);

  return createdElement;
}

function inputchild(div, id, type) {
  let createdElement = document.createElement("input");
  createdElement.style.marginLeft = "0.5rem";
  createdElement.setAttribute("id", id);
  createdElement.setAttribute("type", type);

  if (type == "file") {
    createdElement.setAttribute("accept", "image/*");
  }

  div.appendChild(createdElement);
}

// imagen
const image_input = document.getElementById("imagen");
const image_box = document.getElementsByClassName("fakeimg")[0];
image_box.innerHTML = "";
image_box.style = "";

const text_display = image_box.appendChild(document.createElement("div"));
text_display.innerHTML = "Aquí se mostrará tu imagen";

const image_display = image_box.appendChild(document.createElement("img"));
image_display.classList.add("images");

let counter = 0; // evita que el programa intente eliminar el elemento text_display mas de una vez

image_input.addEventListener("change", () => {
  if (counter == 0) image_box.removeChild(text_display);
  counter++;

  const image_url = URL.createObjectURL(image_input.files[0]);

  image_display.src = image_url;
});

// historia
const name_input = document.getElementById("nombre");
const age_input = document.getElementById("edad");

aside.getElementsByTagName("p")[0].innerHTML =
  "Aquí se creará tu gran historia.";

name_input.addEventListener("change", historyCreator);
age_input.addEventListener("change", historyCreator);

function historyCreator() {
  if (name_input.value.trim() != "" && age_input.value.trim() != "") {
    let name = name_input.value;
    let age = age_input.value;

    const history = [
      ` Era un domingo en la tarde y ${name} fue a los coches de choque con sus ${age} años.`,
      ` ${name} no solía salir de casa y durante sus ${age} años siempre tuvo una vida tranquila.`,
      ` ${name} se acababa de encontrar con un dragón que decía tener ${
        age * 3
      } años, ¡el triple de su edad!.`,
      ` Era algo que no desanimaba a ${name} ya que sabía que no pasaría nada.`,
      ` Fue extraño poder ir a su bar de siempre sin problema, ${age} años y ${name} se sentía como la primera vez.`,
      ` ${name} empezó a beber y se dió cuenta de algo extraño, a su lado estaba bebiendo un dragón algo familiar.`,
      ` Sin mucha demora ${name} volvió a su casa, casa que heredó hacía ${
        age - 5
      } años, sus cinco de edad.`,
    ];

    history.sort(() => Math.random() - 0.5);

    let history_out = "";
    for (let i = 0; i < 3; i++) {
      history_out += history[i];
    }

    aside.getElementsByTagName("p")[0].innerHTML = history_out;
  }
}

// muestra de opciones
aside.getElementsByTagName("p")[1].innerHTML =
  "Elige entre las categorías para mostrarte cosas según tus intereses:";
aside.removeChild(aside.getElementsByClassName("fakeimg")[3]);
aside.removeChild(aside.getElementsByClassName("fakeimg")[2]);
aside.removeChild(aside.getElementsByTagName("br")[1]);
aside.removeChild(aside.getElementsByTagName("br")[0]);

const categorias = aside.getElementsByClassName("fakeimg")[1];
categorias.setAttribute("id", "categorias");
categorias.style = "";
categorias.innerHTML = "";

categorias.appendChild(
  categories(
    "Deportes",
    "#/#deportes",
    "https://www.barriodelcristo.es/sites/www.barriodelcristo.es/files/Im%C3%A1genes/Areas/Deportes/Deportes.jpg"
  )
);
categorias.appendChild(
  categories(
    "Videojuegos",
    "#/#videojuegos",
    "https://www.trecebits.com/wp-content/uploads/2019/04/11854.jpg"
  )
);
categorias.appendChild(
  categories(
    "Arte",
    "#/#arte",
    "https://grupenciclopedia.cat/blog/wp-content/uploads/2020/08/Arte-japone%CC%81s-Bajo-la-ola-.jpeg"
  )
);
categorias.appendChild(
  categories(
    "Musica",
    "#/#musica",
    "https://conceptodefinicion.de/wp-content/uploads/2021/03/musica.jpg"
  )
);
categorias.appendChild(
  categories(
    "Programación",
    "#/#programacion",
    "https://media.istockphoto.com/photos/programming-source-code-abstract-background-picture-id1047259374?k=20&m=1047259374&s=612x612&w=0&h=pt3XbBvrmiYgoYmVzsaUeXtV8vw_jJI9Ly8P7AL6Qig="
  )
);

function categories(text, href, src) {
  let cat = document.createElement("div");
  cat.classList.add("categories");

  let dcat = cat.appendChild(document.createElement("div"));
  let acat = dcat.appendChild(document.createElement("a"));
  acat.setAttribute("href", href);
  acat.innerHTML = text;
  let icat = cat.appendChild(document.createElement("img"));
  icat.setAttribute("src", src);

  return cat;
}

/********************************************
 *                   MAIN                   *
 ********************************************/
// usuario
const title1 = content.getElementsByTagName("h2")[0];
const description1 = content.getElementsByTagName("h5")[0];
const foto1 = content.getElementsByTagName("div")[0];
const fotodes1 = content.getElementsByTagName("p")[0];

//título y descripción
title1.innerHTML = "Añade un título y descripción con el botón inferior";
description1.innerHTML = "";

// imagen y descripción
foto1.innerHTML = "";
const foto1_input = document.createElement("input");
foto1_input.setAttribute("type", "file");
foto1_input.setAttribute("accept", "image/*");

foto1_input.addEventListener("change", () => {
  let image_url = URL.createObjectURL(foto1_input.files[0]);

  foto1.innerHTML = "";
  let imagen = document.createElement("img");
  imagen.classList.add("images");
  imagen.setAttribute("src", image_url);

  let diferencia =
    (new Date() - new Date(foto1_input.files[0].lastModifiedDate)) / 1000;

  let days = Math.floor(diferencia / 86400);
  let hours = Math.floor((diferencia - days * 86400) / 3600);
  let minutes = Math.floor((diferencia - (days * 86400 + hours * 3600)) / 60);
  let seconds = Math.floor(
    diferencia - (days * 86400 + hours * 3600 + minutes * 60)
  );

  title1.innerHTML = prompt("Pon un título:");
  description1.innerHTML =
    prompt("Pon una descripción") +
    "<br>La imagen introducida fue modificada por última vez hace " +
    days +
    " días  y " +
    hours +
    " horas.";

  foto1.appendChild(imagen);
});

foto1.appendChild(foto1_input);

fotodes1.innerHTML = "";
const imagen_description = document.createElement("input");
imagen_description.setAttribute("type", "text");
imagen_description.setAttribute(
  "placeholder",
  "Escribe aqui la descripción de tu imagen"
);
imagen_description.classList.add("w-100");
imagen_description.addEventListener("change", () => {
  fotodes1.innerHTML = imagen_description.value;
});
fotodes1.appendChild(imagen_description);

// venta
//limpiar los componentes
const title2 = content.getElementsByTagName("h2")[1];
const description2 = content.getElementsByTagName("h5")[1];
const foto2 = content.getElementsByTagName("div")[1];
const contenido_1 = content.getElementsByTagName("p")[2];
const contenido_2 = content.getElementsByTagName("p")[3];

content.removeChild(title2);
content.removeChild(description2);
content.removeChild(foto2);
content.removeChild(contenido_1);
content.removeChild(contenido_2);

// coger el nuevo componente padre
const pFather = content.getElementsByTagName("p")[1];

// array con el contenido
const data = [
  {
    type: "#deportes",
    title: "Destacados del deporte",
    links: [
      "https://as.com/",
      "https://www.marca.com/",
      "https://www.mundodeportivo.com/",
    ],
    fotos:
      "https://contents.mediadecathlon.com/p2086156/k$58fe933d2060432d96f36e6138744c39/sq/BAL+N+ADIDAS+TOP+R+PLICA+LIGA+DE+CAMPEONES+21+22.jpg",
  },
  {
    type: "#videojuegos",
    title: "Destacados de los videojuegos",
    links: [
      "https://www.nintendo.es//",
      "https://www.epicgames.com/",
      "https://www.g2a.com/",
    ],
    fotos:
      "https://cdn02.nintendo-europe.com/media/images/10_share_images/systems_11/nintendo_switch_1/nintendo_switch_oled_2/H2x1_NintendoSwitch_Family_esES_ptPT.jpg",
  },
  {
    type: "#arte",
    title: "Destacados del arte",
    links: [
      "https://artsandculture.google.com/",
      "https://www.artsy.net/",
      "https://www.artistasdelatierra.com/",
    ],
    fotos:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ2q6HqE51-nGmOJtl1yltruw-XCILL7nlnS140bgviPxkAOb4m6WYip_JNlveVT66RINns7v1ie3K37hSYyp0pU6FwBbL-ho_8mZ6_JclsIMwjBlXGYDEe&usqp=CAE",
  },
  {
    type: "#musica",
    title: "Destacados de la música",
    links: [
      "https://open.spotify.com/",
      "https://music.amazon.es/",
      "https://soundcloud.com/",
    ],
    fotos:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSHfYGldH4XDz8_4a-bjI_E3QpzOVvye-G9yfS60ylVbortsDSrZaA_1rasCtnOLkL9bXS9j5XOk1dR7Mzmz30kSGA-Il6TsWiLvJipIVI&usqp=CAE",
  },
  {
    type: "#programacion",
    title: "Destacados de la programación",
    links: [
      "https://developer.mozilla.org/",
      "https://github.com/",
      "https://docs.microsoft.com/",
    ],
    fotos:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRjMYib8F7Gsx9RCbgm-w9rn48r0lrfGdHSLLimjAt-ggie0PVkI43NC3A8HQ_NA6-uWJS3GlLQNwbOxOaN9Qh2zqkp7lcDccGEGsd4uTd2DHRx5AVRDas1&usqp=CAE",
  },
];

// añadir funcionalidad a los componentes laterales
const link_categorias = document
  .getElementById("categorias")
  .getElementsByTagName("a");
for (let i = 0; i < link_categorias.length; i++) {
  link_categorias[i].addEventListener("click", () => {
    data.forEach((e) => {
      let url = link_categorias[i].href.split("/");
      url = url[url.length - 1];
      console.log(url);

      if (e.type == url) {
        let new_category = document.createElement("div");

        let new_category_title = document.createElement("h3");
        new_category_title.innerHTML = e.title;

        let new_category_image = document.createElement("img");
        new_category_image.classList.add("images");
        new_category_image.src = e.fotos;
        new_category_image.addEventListener('click', () => {
          let params = `scrollbars=yes, resizable=yes, status=no, location=no, toolbar=no, menubar=no, width=400, height=300, left=-1000, top=-1000`;
          window.open("form.html", "Formulario de inscripción", params);
        });

        let new_category_references = document.createElement("div");
        new_category_references.innerHTML =
          "Aquí tienes algunas páginas de interés";
        e.links.forEach((el) => {
          let container = document.createElement("p");

          let link = document.createElement("a");
          link.innerHTML = el;
          link.href = el;
          link.setAttribute("target", "_blank");

          container.appendChild(link);
          new_category_references.appendChild(container);
        });

        new_category.appendChild(new_category_title);
        new_category.appendChild(new_category_image);
        new_category.appendChild(new_category_references);

        pFather.appendChild(new_category);

        let holder = link_categorias[i].parentElement.innerHTML;
        link_categorias[i].parentElement.innerHTML = holder;
      }
    });
  });
}

/********************************************
 *                  FOOTER                  *
 ********************************************/
footer.classList.add("footer-image");
footer.removeChild(footer.getElementsByTagName("h2")[0]);

// fecha
let date = new Date();
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

let footer_date = document.createElement("div");
footer_date.classList.add("footer-component");
footer_date.innerHTML = "Hoy es " + date.toLocaleDateString("es", options);
footer.appendChild(footer_date);

// copyright
let footer_copy = document.createElement("div");
footer_copy.classList.add("footer-component");

let footer_copy_img = document.createElement("img");
footer_copy_img.style.margin = "auto";
footer_copy_img.style.width = "50%";
footer_copy_img.src =
  "https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-nc-sa.png";

footer_copy.appendChild(footer_copy_img);

footer.appendChild(footer_copy);

// links
let footer_links = document.createElement("div");
footer_links.classList.add("footer-row");

let footer_links_i = document.createElement("div");
footer_links_i.classList.add("footer-component");
let footer_links_i_recarga = document.createElement("a");
footer_links_i_recarga.classList.add("footer-row");
footer_links_i_recarga.innerHTML = "Recargar";
footer_links_i_recarga.href = " ";

let footer_links_i_ancla = document.createElement("button");
footer_links_i_ancla.innerHTML = "Volver arriba";
footer_links_i_ancla.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

footer_links_i.appendChild(footer_links_i_recarga);
footer_links_i.appendChild(footer_links_i_ancla);
footer_links.appendChild(footer_links_i);
footer.appendChild(footer_links);