const malla = [
  {
    año: "Primer Año",
    semestres: [
      {
        nombre: "1° semestre",
        ramos: [
          { nombre: "Química general", abre: ["Química orgánica y bioquímica"], desbloqueado: true },
          { nombre: "Biología", abre: ["Histología y embriología"], desbloqueado: true },
          { nombre: "Zoología", abre: ["Ecología"], desbloqueado: true },
          { nombre: "Introducción a la medicina veterinaria" },
          { nombre: "Tecnología e innovación" },
          { nombre: "Práctica I", abre: ["Práctica II"], desbloqueado: true }
        ]
      },
      {
        nombre: "2° semestre",
        ramos: [
          { nombre: "Química orgánica y bioquímica" },
          { nombre: "Histología y embriología", abre: ["Fisiología veterinaria", "Anatomía I"] },
          { nombre: "Estadística" },
          { nombre: "Ecología", abre: ["Gestión ambiental y conservación"] },
          { nombre: "Inglés básico" },
          { nombre: "Práctica II", abre: ["Práctica III"] }
        ]
      }
    ]
  },
  {
    año: "Segundo Año",
    semestres: [
      {
        nombre: "3° semestre",
        ramos: [
          { nombre: "Anatomía I", abre: ["Anatomía II"] },
          { nombre: "Fisiología veterinaria", abre: ["Interacción hospedero patógeno", "Fisiología especial"] },
          { nombre: "Etología y bienestar animal", abre: ["Módulo integrador ciclo inicial"] },
          { nombre: "Gestión ambiental y conservación", abre: ["Módulo integrador ciclo inicial"] },
          { nombre: "Práctica III", abre: ["Módulo integrador ciclo inicial"] }
        ]
      },
      {
        nombre: "4° semestre",
        ramos: [
          { nombre: "Anatomía II" },
          { nombre: "Fisiología especial", abre: ["Alimentación y nutrición animal", "Patología funcional", "Hematología y laboratorio clínico"] },
          { nombre: "Interacción hospedero patógeno", abre: ["Inspección y control de alimentos", "Epidemiología"] },
          { nombre: "Módulo integrador ciclo inicial", abre: ["Práctica IV"] },
          { nombre: "Principios éticos veterinarios" },
          { nombre: "Genética pecuaria" }
        ]
      }
    ]
  },
  {
    año: "Tercer Año",
    semestres: [
      {
        nombre: "5° semestre",
        ramos: [
          { nombre: "Alimentación y nutrición animal", abre: ["Producción animal I"] },
          { nombre: "Patología funcional", abre: ["Patología especial"] },
          { nombre: "Inspección y control de alimentos" },
          { nombre: "Epidemiología", abre: ["Salud pública"] },
          { nombre: "Desarrollo sostenible" },
          { nombre: "Práctica IV", abre: ["Práctica V"] }
        ]
      },
      {
        nombre: "6° semestre",
        ramos: [
          { nombre: "Farmacología y terapéutica", abre: ["Cirugía General"] },
          { nombre: "Semiología", abre: ["Ginecología y obstetricia"] },
          { nombre: "Hematología y laboratorio clínico" },
          { nombre: "Patología especial", abre: ["Enfermedades infecciosas y parasitarias"] },
          { nombre: "Inglés técnico" },
          { nombre: "Práctica V", abre: ["Práctica VI"] }
        ]
      }
    ]
  },
  {
    año: "Cuarto Año",
    semestres: [
      {
        nombre: "7° semestre",
        ramos: [
          { nombre: "Producción animal I", abre: ["Producción animal II", "Módulo integrador ciclo intermedio"] },
          { nombre: "Enfermedades infecciosas y parasitarias", abre: ["Medicina interna"] },
          { nombre: "Ginecología y obstetricia" },
          { nombre: "Metodología de la investigación" },
          { nombre: "Responsabilidad social y emprendimiento" },
          { nombre: "Práctica VI", abre: ["Módulo integrador ciclo intermedio"] }
        ]
      },
      {
        nombre: "8° semestre",
        ramos: [
          { nombre: "Producción animal II" },
          { nombre: "Medicina interna", abre: ["Clínica de animal mayores", "Clínica de animales menores", "Imagenologia"] },
          { nombre: "Cirugía General", abre: ["Técnicas quirúrgicas"] },
          { nombre: "Salud pública" },
          { nombre: "Módulo integrador ciclo intermedio" },
          { nombre: "Preparación para la vida laboral" }
        ]
      }
    ]
  },
  {
    año: "Quinto Año",
    semestres: [
      {
        nombre: "9° semestre",
        ramos: [
          { nombre: "Técnicas quirúrgicas" },
          { nombre: "Imagenologia" },
          { nombre: "Clínica de animal mayores", abre: ["Módulo integrador profesional"] },
          { nombre: "Economía y administración de empresas veterinarias", abre: ["Evaluación de proyectos"] },
          { nombre: "Clínica de animales menores", abre: ["Módulo integrador profesional"] },
          { nombre: "Electivo de especialidad I" }
        ]
      },
      {
        nombre: "10° semestre",
        ramos: [
          { nombre: "Módulo integrador profesional" },
          { nombre: "Evaluación de proyectos" },
          { nombre: "Salud laboral y legislación veterinaria" },
          { nombre: "Electivo de especialidad II" }
        ]
      }
    ]
  }
];

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

    const semestres = document.createElement("div");
    semestres.className = "semestres";

    añoObj.semestres.forEach((semestre) => {
      const columna = document.createElement("div");
      columna.className = "semestre";

      const h3 = document.createElement("h3");
      h3.textContent = semestre.nombre;
      columna.appendChild(h3);

      const lista = document.createElement("div");
      lista.className = "asignaturas";

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

        lista.appendChild(div);
      });

      columna.appendChild(lista);
      semestres.appendChild(columna);
    });

    divAño.appendChild(semestres);
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
        if (nodo && estado[nombre]) {
          nodo.classList.remove("bloqueada");
        }
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
