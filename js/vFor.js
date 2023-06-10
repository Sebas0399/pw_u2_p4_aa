var miArreglo = [
  { nombre: "Antony", apellido: "Arguello" },
  { nombre: "Sebastian", apellido: "Aguay" },
  { nombre: "Josue", apellido: "Masabanda" },
  { nombre: "David", apellido: "Chancusi" },
  { nombre: "Domenica", apellido: "Vizcarra" },
  { nombre: "Tamara", apellido: "Cabrera" },
  { nombre: "Luis", apellido: "Mosquera" },
  { nombre: "Feranando", apellido: "Romero" },
  { nombre: "Juan", apellido: "Jiminez" },
  { nombre: "Ignacio", apellido: "Yaguari" },
];
console.log(miArreglo);

const app = Vue.createApp({
  data() {
    return {
      miArreglo: miArreglo,
      nombre: "",
    };
  },
  methods: {
    agregarEstudiante(event) {
      if (event.charCode == "13") {
        const nuevoEstudiate={
          nombre:this.nombre,
          apellido:'nuevoApellido'
        }
        this.miArreglo.unshift(nuevoEstudiate)
        console.log(event)
      } else {
        console.log("no es enter");
      }
    },
    agregarEstudiante2() {
   
        const nuevoEstudiate={
          nombre:this.nombre,
          apellido:'nuevoApellido'
        }
        this.miArreglo.unshift(nuevoEstudiate)
       
    }
  },
});
app.mount("#miApp2");
