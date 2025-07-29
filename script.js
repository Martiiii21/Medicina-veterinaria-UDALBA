const asignaturas = {
  "quimica-general": { nombre: "Química general", requisitos: [] },
  "biologia": { nombre: "Biología", requisitos: [] },
  "zoologia": { nombre: "Zoología", requisitos: [] },
  "introduccion": { nombre: "Introducción a la medicina veterinaria", requisitos: [] },
  "tecnologia": { nombre: "Tecnología e innovación", requisitos: [] },
  "practica-i": { nombre: "Práctica I", requisitos: [] },

  "quimica-organica": { nombre: "Química orgánica y bioquímica", requisitos: ["quimica-general"] },
  "histologia": { nombre: "Histología y embriología", requisitos: ["biologia"] },
  "estadistica": { nombre: "Estadística", requisitos: [] },
  "ecologia": { nombre: "Ecología", requisitos: ["zoologia"] },
  "ingles-basico": { nombre: "Inglés básico", requisitos: [] },
  "practica-ii": { nombre: "Práctica II", requisitos: ["practica-i"] },

  "anatomia-i": { nombre: "Anatomía I", requisitos: ["histologia"] },
  "fisiologia": { nombre: "Fisiología veterinaria", requisitos: ["histologia"] },
  "etologia": { nombre: "Etología y bienestar animal", requisitos: [] },
  "gestion": { nombre: "Gestión ambiental y conservación", requisitos: ["ecologia"] },
  "practica-iii": { nombre: "Práctica III", requisitos: ["practica-ii"] },

  "anatomia-ii": { nombre: "Anatomía II", requisitos: ["anatomia-i"] },
  "fisiologia-especial": { nombre: "Fisiología especial", requisitos: ["fisiologia"] },
  "interaccion": { nombre: "Interacción hospedero patógeno", requisitos: ["fisiologia"] },
  "modulo-inicial": {
    nombre: "Módulo integrador ciclo inicial",
    requisitos: ["etologia", "gestion", "practica-iii"]
  },
  "etica": { nombre: "Principios éticos veterinarios", requisitos: [] },
  "genetica": { nombre: "Genética pecuaria", requisitos: [] },

  "alimentacion": { nombre: "Alimentación y nutrición animal", requisitos: ["fisiologia-especial"] },
  "patologia-funcional": { nombre: "Patología funcional", requisitos: ["fisiologia-especial"] },
  "inspeccion": { nombre: "Inspección y control de alimentos", requisitos: ["interaccion"] },
  "epidemiologia": { nombre: "Epidemiología", requisitos: ["interaccion"] },
  "sostenible": { nombre: "Desarrollo sostenible", requisitos: [] },
  "practica-iv": { nombre: "Práctica IV", requisitos: ["modulo-inicial"] },

  "farmacologia": { nombre: "Farmacología y terapéutica", requisitos: [] },
  "semiologia": { nombre: "Semiología", requisitos: [] },
  "hematologia": { nombre: "Hematología y laboratorio clínico", requisitos: ["fisiologia-especial"] },
  "patologia-especial": { nombre: "Patología especial", requisitos: ["patologia-funcional"] },
  "ingles-tecnico": { nombre: "Inglés técnico", requisitos: [] },
  "practica-v": { nombre: "Práctica V", requisitos: ["practica-iv"] },

  "produccion-i": { nombre: "Producción animal I", requisitos: ["alimentacion"] },
  "enfermedades": { nombre: "Enfermedades infecciosas y parasitarias", requisitos: ["patologia-especial"] },
  "ginecologia": { nombre: "Ginecología y obstetricia", requisitos: ["semiologia"] },
  "metodologia": { nombre: "Metodología de la investigación", requisitos: [] },
  "responsabilidad": { nombre: "Responsabilidad social y emprendimiento", requisitos: [] },
  "practica-vi": { nombre: "Práctica VI", requisitos: ["practica-v"] },

  "produccion-ii": { nombre: "Producción animal II", requisitos: ["produccion-i"] },
  "medicina-interna": { nombre: "Medicina interna", requisitos: ["enfermedades"] },
  "cirugia": { nombre: "Cirugía General", requisitos: ["farmacologia"] },
  "salud-publica": { nombre: "Salud pública", requisitos: ["epidemiologia"] },
  "modulo-intermedio": {
    nombre: "Módulo integrador ciclo intermedio",
    requisitos: ["produccion-i", "practica-vi"]
  },
  "vida-laboral": { nombre: "Preparación para la vida laboral", requisitos: [] },

  "tecnicas": { nombre: "Técnicas quirúrgicas", requisitos: ["cirugia"] },
  "imagenologia": { nombre: "Imagenologia", requisitos: ["medicina-interna"] },
  "clinica-mayores": {
    nombre: "Clínica de animal mayores",
    requisitos: ["medicina-interna"]
  },
  "economia": {
    nombre: "Economía y administración de empresas veterinarias",
    requisitos: []
  },
  "clinica-menores": {
    nombre: "Clínica de animales menores",
    requisitos: ["medicina-interna"]
  },
  "electivo-i": { nombre: "Electivo de especialidad I", requisitos: [] },

  "modulo-profesional": {
    nombre: "Módulo integrador profesional",
    requisitos: ["clinica-menores", "clinica-mayores"]
  },
  "evaluacion": {
    nombre: "Evaluación de proyectos",
    requisitos: ["economia"]
  },
  "legislacion": {
    nombre: "Salud laboral y legislación veterinaria",
    requisitos: []
  },
  "electivo-ii": { nombre: "Electivo de especialidad II", requisitos: [] },
};

const estructura = [
  {
    anio: "Primer año",
    semestres: [
      ["quimica-general", "biologia", "zoologia", "introduccion", "tecnologia", "practica-i"],
      ["quimica-organica", "histologia", "estadistica", "ecologia", "ingles-basico", "practica-ii"],
    ],
  },
  {
    anio: "Segundo año",
    semestres: [
      ["anatomia-i", "fisiologia", "etologia", "gestion", "practica-iii"],
      ["anatomia-ii", "fisiologia-especial", "interaccion", "modulo-inicial", "etica", "genetica"],
    ],
  },
  {
    anio: "Tercer año",
    semestres: [
      ["alimentacion", "patologia-funcional", "inspeccion", "epidemiologia", "sostenible", "practica-iv"],
      ["farmacologia", "semiologia", "hematologia", "patologia-especial", "ingles-tecnico", "practica-v"],
    ],
  },
  {
    anio: "Cuarto año",
    semestres: [
      ["produccion-i", "enfermedades", "ginecologia", "metodologia", "responsabilidad", "practica-vi"],
      ["produccion-ii", "medicina-interna", "cirugia", "salud-publica", "modulo-intermedio", "vida-laboral"],
    ],
  },
  {
    anio: "Quinto año",
    semestres: [
      ["tecnicas", "imagenologia", "clinica-mayores", "economia", "clinica-menores", "electivo-i"],
      ["modulo-profesional", "evaluacion", "legislacion", "electivo-ii"],
    ],
  },
];

let aprobadas = new Set();

function render() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  estructura.forEach(({ anio, semestres }) => {
    const divAnio = document.createElement("div");
    divAnio.className = "anio";
    divAnio.innerHTML = `<div class="titulo-anio">${anio}</div><div class="fila-semestres"></div>`;
    const fila = divAnio.querySelector(".fila-semestres");

    semestres.forEach((asigs, idx) => {
      const divSemestre = document.createElement("div");
      divSemestre.className = "semestre";
      divSemestre.innerHTML = `<h3>${idx + 1}° semestre</h3><div class="asignaturas"></div>`;
      const lista = divSemestre.querySelector(".asignaturas");

      asigs.forEach(id => {
        const { nombre, requisitos } = asignaturas[id];
        const div = document.createElement("div");
        div.textContent = nombre;
        div.className = "asignatura";
        div.dataset.id = id;

        const desbloqueada = requisitos.every(req => aprobadas.has(req));
        if (desbloqueada || requisitos.length === 0) div.classList.add("desbloqueada");
        if (aprobadas.has(id)) div.classList.add("aprobada");

        if (desbloqueada || requisitos.length === 0) {
          div.addEventListener("click", () => {
            if (aprobadas.has(id)) {
              aprobadas.delete(id);
            } else {
              aprobadas.add(id);
            }
            render();
          });
        }

        lista.appendChild(div);
      });

      fila.appendChild(divSemestre);
    });

    contenedor.appendChild(divAnio);
  });
}

render();
