const asignaturas = [
  {
    nombre: "Química general",
    semestre: "1",
    año: "Primer año",
    requisitos: []
  },
  {
    nombre: "Biología",
    semestre: "1",
    año: "Primer año",
    requisitos: []
  },
  {
    nombre: "Zoología",
    semestre: "1",
    año: "Primer año",
    requisitos: []
  },
  {
    nombre: "Introducción a la medicina veterinaria",
    semestre: "1",
    año: "Primer año",
    requisitos: []
  },
  {
    nombre: "Tecnología e innovación",
    semestre: "1",
    año: "Primer año",
    requisitos: []
  },
  {
    nombre: "Práctica I",
    semestre: "1",
    año: "Primer año",
    requisitos: []
  },
  {
    nombre: "Química orgánica y bioquímica",
    semestre: "2",
    año: "Primer año",
    requisitos: ["Química general"]
  },
  {
    nombre: "Histología y embriología",
    semestre: "2",
    año: "Primer año",
    requisitos: ["Biología"]
  },
  {
    nombre: "Estadística",
    semestre: "2",
    año: "Primer año",
    requisitos: []
  },
  {
    nombre: "Ecología",
    semestre: "2",
    año: "Primer año",
    requisitos: ["Zoología"]
  },
  {
    nombre: "Inglés básico",
    semestre: "2",
    año: "Primer año",
    requisitos: []
  },
  {
    nombre: "Práctica II",
    semestre: "2",
    año: "Primer año",
    requisitos: ["Práctica I"]
  },
  {
    nombre: "Anatomía I",
    semestre: "3",
    año: "Segundo año",
    requisitos: ["Histología y embriología"]
  },
  {
    nombre: "Fisiología veterinaria",
    semestre: "3",
    año: "Segundo año",
    requisitos: ["Histología y embriología"]
  },
  {
    nombre: "Etología y bienestar animal",
    semestre: "3",
    año: "Segundo año",
    requisitos: []
  },
  {
    nombre: "Gestión ambiental y conservación",
    semestre: "3",
    año: "Segundo año",
    requisitos: ["Ecología"]
  },
  {
    nombre: "Práctica III",
    semestre: "3",
    año: "Segundo año",
    requisitos: ["Práctica II"]
  },
  {
    nombre: "Anatomía II",
    semestre: "4",
    año: "Segundo año",
    requisitos: ["Anatomía I"]
  },
  {
    nombre: "Fisiología especial",
    semestre: "4",
    año: "Segundo año",
    requisitos: ["Fisiología veterinaria"]
  },
  {
    nombre: "Interacción hospedero patógeno",
    semestre: "4",
    año: "Segundo año",
    requisitos: ["Fisiología veterinaria"]
  },
  {
    nombre: "Módulo integrador ciclo inicial",
    semestre: "4",
    año: "Segundo año",
    requisitos: ["Etología y bienestar animal", "Gestión ambiental y conservación", "Práctica III"]
  },
  {
    nombre: "Principios éticos veterinarios",
    semestre: "4",
    año: "Segundo año",
    requisitos: []
  },
  {
    nombre: "Genética pecuaria",
    semestre: "4",
    año: "Segundo año",
    requisitos: []
  },
  {
    nombre: "Alimentación y nutrición animal",
    semestre: "5",
    año: "Tercer año",
    requisitos: ["Fisiología especial"]
  },
  {
    nombre: "Patología funcional",
    semestre: "5",
    año: "Tercer año",
    requisitos: ["Fisiología especial"]
  },
  {
    nombre: "Inspección y control de alimentos",
    semestre: "5",
    año: "Tercer año",
    requisitos: ["Interacción hospedero patógeno"]
  },
  {
    nombre: "Epidemiología",
    semestre: "5",
    año: "Tercer año",
    requisitos: ["Interacción hospedero patógeno"]
  },
  {
    nombre: "Desarrollo sostenible",
    semestre: "5",
    año: "Tercer año",
    requisitos: []
  },
  {
    nombre: "Práctica IV",
    semestre: "5",
    año: "Tercer año",
    requisitos: ["Módulo integrador ciclo inicial"]
  },
  {
    nombre: "Farmacología y terapéutica",
    semestre: "6",
    año: "Tercer año",
    requisitos: []
  },
  {
    nombre: "Semiología",
    semestre: "6",
    año: "Tercer año",
    requisitos: []
  },
  {
    nombre: "Hematología y laboratorio clínico",
    semestre: "6",
    año: "Tercer año",
    requisitos: ["Fisiología especial"]
  },
  {
    nombre: "Patología especial",
    semestre: "6",
    año: "Tercer año",
    requisitos: ["Patología funcional"]
  },
  {
    nombre: "Inglés técnico",
    semestre: "6",
    año: "Tercer año",
    requisitos: []
  },
  {
    nombre: "Práctica V",
    semestre: "6",
    año: "Tercer año",
    requisitos: ["Práctica IV"]
  },
  {
    nombre: "Producción animal I",
    semestre: "7",
    año: "Cuarto año",
    requisitos: ["Alimentación y nutrición animal"]
  },
  {
    nombre: "Enfermedades infecciosas y parasitarias",
    semestre: "7",
    año: "Cuarto año",
    requisitos: ["Patología especial"]
  },
  {
    nombre: "Ginecología y obstetricia",
    semestre: "7",
    año: "Cuarto año",
    requisitos: ["Semiología"]
  },
  {
    nombre: "Metodología de la investigación",
    semestre: "7",
    año: "Cuarto año",
    requisitos: []
  },
  {
    nombre: "Responsabilidad social y emprendimiento",
    semestre: "7",
    año: "Cuarto año",
    requisitos: []
  },
  {
    nombre: "Práctica VI",
    semestre: "7",
    año: "Cuarto año",
    requisitos: ["Práctica V"]
  },
  {
    nombre: "Producción animal II",
    semestre: "8",
    año: "Cuarto año",
    requisitos: ["Producción animal I"]
  },
  {
    nombre: "Medicina interna",
    semestre: "8",
    año: "Cuarto año",
    requisitos: ["Enfermedades infecciosas y parasitarias"]
  },
  {
    nombre: "Cirugía General",
    semestre: "8",
    año: "Cuarto año",
    requisitos: ["Farmacología y terapéutica"]
  },
  {
    nombre: "Salud pública",
    semestre: "8",
    año: "Cuarto año",
    requisitos: ["Epidemiología"]
  },
  {
    nombre: "Módulo integrador ciclo intermedio",
    semestre: "8",
    año: "Cuarto año",
    requisitos: ["Producción animal I", "Práctica VI"]
  },
  {
    nombre: "Preparación para la vida laboral",
    semestre: "8",
    año: "Cuarto año",
    requisitos: []
  },
  {
    nombre: "Técnicas quirúrgicas",
    semestre: "9",
    año: "Quinto año",
    requisitos: ["Cirugía General"]
  },
  {
    nombre: "Imagenologia",
    semestre: "9",
    año: "Quinto año",
    requisitos: []
  },
  {
    nombre: "Clínica de animal mayores",
    semestre: "9",
    año: "Quinto año",
    requisitos: ["Medicina interna"]
  },
  {
    nombre: "Economía y administración de empresas veterinarias",
    semestre: "9",
    año: "Quinto año",
    requisitos: []
  },
  {
    nombre: "Clínica de animales menores",
    semestre: "9",
    año: "Quinto año",
    requisitos: ["Medicina interna"]
  },
  {
    nombre: "Electivo de especialidad I",
    semestre: "9",
    año: "Quinto año",
    requisitos: []
  },
  {
    nombre: "Módulo integrador profesional",
    semestre: "10",
    año: "Quinto año",
    requisitos: ["Clínica de animal mayores", "Clínica de animales menores"]
  },
  {
    nombre: "Evaluación de proyectos",
    semestre: "10",
    año: "Quinto año",
    requisitos: ["Economía y administración de empresas veterinarias"]
  },
  {
    nombre: "Salud laboral y legislación veterinaria",
    semestre: "10",
    año: "Quinto año",
    requisitos: []
  },
  {
    nombre: "Electivo de especialidad II",
    semestre: "10",
    año: "Quinto año",
    requisitos: []
  }
];

const malla = document.getElementById("malla");

function renderMalla() {
  const años = [...new Set(asignaturas.map(a => a.año))];
  malla.innerHTML = "";

  años.forEach(año => {
    const contenedorAño = document.createElement("div");
    contenedorAño.className = "año";
    contenedorAño.innerHTML = `<h2>${año}</h2><div class="semestres"><div class="semestre" id="${año}-1"><h3>1 Semestre</h3></div><div class="semestre" id="${año}-2"><h3>2 Semestre</h3></div></div>`;
    malla.appendChild(contenedorAño);
  });

  asignaturas.forEach(asig => {
    const el = document.createElement("div");
    el.className = "asignatura";
    el.innerText = asig.nombre;

    if (!asig.requisitos.length || asig.requisitos.every(r => localStorage.getItem(r) === "true")) {
      el.classList.remove("bloqueada");
    } else {
      el.classList.add("bloqueada");
    }

    if (localStorage.getItem(asig.nombre) === "true") {
      el.classList.add("aprobada");
    }

    el.addEventListener("click", () => {
      if (el.classList.contains("bloqueada")) return;

      const aprobada = el.classList.toggle("aprobada");
      localStorage.setItem(asig.nombre, aprobada);

      renderMalla();
    });

    document.getElementById(`${asig.año}-${asig.semestre}`).appendChild(el);
  });
}

renderMalla();
