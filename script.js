const malla = document.getElementById("malla");

const data = [
  {
    year: "Primer año",
    semesters: [
      [
        { name: "Química general", key: "quimica_general", unlocks: ["quimica_organica"] },
        { name: "Biología", key: "biologia", unlocks: ["histologia"] },
        { name: "Zoología", key: "zoologia", unlocks: ["ecologia"] },
        { name: "Introducción a la medicina veterinaria", key: "intro_vet" },
        { name: "Tecnología e innovación", key: "tecnologia" },
        { name: "Práctica I", key: "practica_1", unlocks: ["practica_2"] },
      ],
      [
        { name: "Química orgánica y bioquímica", key: "quimica_organica", requires: ["quimica_general"] },
        { name: "Histología y embriología", key: "histologia", requires: ["biologia"], unlocks: ["fisiologia", "anatomia_1"] },
        { name: "Estadística", key: "estadistica" },
        { name: "Ecología", key: "ecologia", requires: ["zoologia"], unlocks: ["gestion"] },
        { name: "Inglés básico", key: "ingles_basico" },
        { name: "Práctica II", key: "practica_2", requires: ["practica_1"], unlocks: ["practica_3"] },
      ]
    ]
  },
  {
    year: "Segundo año",
    semesters: [
      [
        { name: "Anatomía I", key: "anatomia_1", requires: ["histologia"], unlocks: ["anatomia_2"] },
        { name: "Fisiología veterinaria", key: "fisiologia", requires: ["histologia"], unlocks: ["interaccion", "fisiologia_esp"] },
        { name: "Etología y bienestar animal", key: "etologia", unlocks: ["modulo_ini"] },
        { name: "Gestión ambiental y conservación", key: "gestion", requires: ["ecologia"], unlocks: ["modulo_ini"] },
        { name: "Práctica III", key: "practica_3", requires: ["practica_2"], unlocks: ["modulo_ini"] },
      ],
      [
        { name: "Anatomía II", key: "anatomia_2", requires: ["anatomia_1"] },
        { name: "Fisiología especial", key: "fisiologia_esp", requires: ["fisiologia"], unlocks: ["nutricion", "patologia_func", "hematologia"] },
        { name: "Interacción hospedero-patógeno", key: "interaccion", requires: ["fisiologia"], unlocks: ["inspeccion", "epidemiologia"] },
        { name: "Módulo integrador ciclo inicial", key: "modulo_ini", requires: ["etologia", "gestion", "practica_3"], unlocks: ["practica_4"] },
        { name: "Principios éticos veterinarios", key: "etica" },
        { name: "Genética pecuaria", key: "genetica" },
      ]
    ]
  },
  {
    year: "Tercer año",
    semesters: [
      [
        { name: "Alimentación y nutrición animal", key: "nutricion", requires: ["fisiologia_esp"], unlocks: ["produccion_1"] },
        { name: "Patología funcional", key: "patologia_func", requires: ["fisiologia_esp"], unlocks: ["patologia_esp"] },
        { name: "Inspección y control de alimentos", key: "inspeccion", requires: ["interaccion"] },
        { name: "Epidemiología", key: "epidemiologia", requires: ["interaccion"], unlocks: ["salud_publica"] },
        { name: "Desarrollo sostenible", key: "desarrollo" },
        { name: "Práctica IV", key: "practica_4", requires: ["modulo_ini"], unlocks: ["practica_5"] },
      ],
      [
        { name: "Farmacología y terapéutica", key: "farmacologia", unlocks: ["cirugia"] },
        { name: "Semiología", key: "semiologia", unlocks: ["gineco"] },
        { name: "Hematología y laboratorio clínico", key: "hematologia", requires: ["fisiologia_esp"] },
        { name: "Patología especial", key: "patologia_esp", requires: ["patologia_func"], unlocks: ["enfermedades"] },
        { name: "Inglés técnico", key: "ingles_tec" },
        { name: "Práctica V", key: "practica_5", requires: ["practica_4"], unlocks: ["practica_6"] },
      ]
    ]
  },
  {
    year: "Cuarto año",
    semesters: [
      [
        { name: "Producción animal I", key: "produccion_1", requires: ["nutricion"], unlocks: ["produccion_2", "modulo_med"] },
        { name: "Enfermedades infecciosas y parasitarias", key: "enfermedades", requires: ["patologia_esp"], unlocks: ["medicina_interna"] },
        { name: "Ginecología y obstetricia", key: "gineco", requires: ["semiologia"] },
        { name: "Metodología de la investigación", key: "investigacion" },
        { name: "Responsabilidad social y emprendimiento", key: "responsabilidad" },
        { name: "Práctica VI", key: "practica_6", requires: ["practica_5"], unlocks: ["modulo_med"] },
      ],
      [
        { name: "Producción animal II", key: "produccion_2", requires: ["produccion_1"] },
        { name: "Medicina interna", key: "medicina_interna", requires: ["enfermedades"], unlocks: ["clinica_mayores", "clinica_menores", "imagenologia"] },
        { name: "Cirugía General", key: "cirugia", requires: ["farmacologia"], unlocks: ["tecnicas"] },
        { name: "Salud pública", key: "salud_publica", requires: ["epidemiologia"] },
        { name: "Módulo integrador ciclo intermedio", key: "modulo_med", requires: ["produccion_1", "practica_6"] },
        { name: "Preparación para la vida laboral", key: "vida_laboral" },
      ]
    ]
  },
  {
    year: "Quinto año",
    semesters: [
      [
        { name: "Técnicas quirúrgicas", key: "tecnicas", requires: ["cirugia"] },
        { name: "Imagenologia", key: "imagenologia", requires: ["medicina_interna"] },
        { name: "Clínica de animal mayores", key: "clinica_mayores", requires: ["medicina_interna"], unlocks: ["modulo_pro"] },
        { name: "Economía y administración de empresas veterinarias", key: "economia", unlocks: ["evaluacion"] },
        { name: "Clínica de animales menores", key: "clinica_menores", requires: ["medicina_interna"], unlocks: ["modulo_pro"] },
        { name: "Electivo de especialidad I", key: "electivo_1" },
      ],
      [
        { name: "Módulo integrador profesional", key: "modulo_pro", requires: ["clinica_mayores", "clinica_menores"] },
        { name: "Evaluación de proyectos", key: "evaluacion", requires: ["economia"] },
        { name: "Salud laboral y legislación veterinaria", key: "legislacion" },
        { name: "Electivo de especialidad II", key: "electivo_2" },
      ]
    ]
  }
];

const approvedSubjects = new Set(JSON.parse(localStorage.getItem("aprobadas")) || []);

function createSubject(subject) {
  const div = document.createElement("div");
  div.textContent = subject.name;
  div.className = "subject";
  div.dataset.key = subject.key;

  if (subject.requires && !subject.requires.every(req => approvedSubjects.has(req))) {
    div.classList.add("locked");
  } else if (approvedSubjects.has(subject.key)) {
    div.classList.add("approved");
  }

  div.addEventListener("click", () => {
    if (approvedSubjects.has(subject.key)) {
      approvedSubjects.delete(subject.key);
    } else {
      approvedSubjects.add(subject.key);
    }
    localStorage.setItem("aprobadas", JSON.stringify([...approvedSubjects]));
    renderMalla();
  });

  return div;
}

function renderMalla() {
  malla.innerHTML = "";
  data.forEach(yearData => {
    const yearDiv = document.createElement("div");
    yearDiv.className = "year";

    const yearTitle = document.createElement("h2");
    yearTitle.textContent = yearData.year;
    yearDiv.appendChild(yearTitle);

    const semestersDiv = document.createElement("div");
    semestersDiv.className = "semesters";

    yearData.semesters.forEach((semester, index) => {
      const semesterDiv = document.createElement("div");
      semesterDiv.className = "semester";

      const semesterTitle = document.createElement("h3");
      semesterTitle.textContent = `${index + 1} semestre`;
      semesterDiv.appendChild(semesterTitle);

      semester.forEach(subject => {
        const subjectDiv = createSubject(subject);
        semesterDiv.appendChild(subjectDiv);
      });

      semestersDiv.appendChild(semesterDiv);
    });

    yearDiv.appendChild(semestersDiv);
    malla.appendChild(yearDiv);
  });
}

renderMalla();
