document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();

  let inputs = document.querySelector("form").getElementsByTagName("input");

  document.getElementById("form").appendChild(elemento(compara(inputs)));
});

function compara(inputs) {
  let data = [];

  for (let i = 0; i < inputs.length; i++) {
    switch (inputs[i].id) {
      case "name":
        data["name"] = inputs[i].value;
        break;
      case "surnames":
        data["surnames"] = inputs[i].value;
        break;
      case "email":
        data["email"] = inputs[i].value;
        break;
      case "pass":
        data["pass"] = inputs[i].value;
        break;
    }
  }

  return data;
}

function elemento(data) {
  let info = document.createElement("div");
  info.innerHTML = `Bienvenido ${data["name"]} ${data["surnames"]}, te has registrado con el email: ${data["email"]}`;

  return info;
}
