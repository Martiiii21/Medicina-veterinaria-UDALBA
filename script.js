const malla = [
  // ...mismo objeto malla que ya definimos antes,
  // pero incluyendo desbloqueado: true para las primeras asignaturas sin requisito...
];

// Estado global
const estado = {};
const container = document.getElementById("malla-container");

function crearMalla() {
  malla.forEach((añoObj, idxAño) => {
    const divAño = document.createElement("div");
    divAño.className = "año";

    const titulo = document.createElement("div");
    titulo.className = "titulo-año";
    titulo.textContent = añoObj.año;
    divAño.appendChild(titulo);

    const sems = document.createElement("div");
    sems.className = "semestres";

    añoObj.semestres.forEach((semestre) => {
      const columna = document.createElement("div");
      columna.className = "semestre";

      const h3 = document.createElement("h3");
      h3.textContent = semestre.nombre;
      columna.appendChild(h3);

      const cont = document.createElement("div");
      cont.className = "asignaturas";

      semestre.ramos.forEach((ramo, idx) => {
        const div = document.createElement("div");
        div.className = "asignatura bloqueada";
        div.textContent = ramo.nombre;
        div.dataset.nombre = ramo.nombre;

        if (ramo.desbloqueado || !ramo.abre || ramo.abre.length === 0) {
          div.classList.remove("bloqueada");
        }

        div.style.animationDelay = `${idx * 0.1 + idxAño * 0.2}s`;

        div.addEventListener("click", () => {
          if (!div.classList.contains("bloqueada")) {
            div.classList.toggle("aprobada");
            estado[ramo.nombre] = div.classList.contains("aprobada");
            desbloquear();
          }
        });

        cont.appendChild(div);
      });

      columna.appendChild(cont);
      sems.appendChild(columna);
    });

    divAño.appendChild(sems);
    container.appendChild(divAño);
  });
}

function desbloquear() {
  document.querySelectorAll(".asignatura").forEach(el => {
    const nombre = el.dataset.nombre;
    const ramo = buscarRamo(nombre);
    if (ramo && ramo.abre) {
      ramo.abre.forEach(hijo => {
        const nodo = document.querySelector(`.asignatura[data-nombre="${hijo}"]`);
        if (nodo && estado[nombre]) nodo.classList.remove("bloqueada");
      });
    }
  });
}

function buscarRamo(nombre) {
  for (const año of malla) {
    for (const sem of año.semestres) {
      for (const ramo of sem.ramos) {
        if (ramo.nombre === nombre) return ramo;
      }
    }
  }
  return null;
}

crearMalla();
