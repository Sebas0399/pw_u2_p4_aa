var miArreglo = [
  { nombre: "Pera", codigo: "AB10", precio: 5, stock: 10 },
  { nombre: "Sandia", codigo: "AB11", precio: 5, stock: 40 },
  { nombre: "Galleta", codigo: "AB12", precio: 5, stock: 20 },
  { nombre: "Aceite", codigo: "AB13", precio: 5, stock: 5 },
  { nombre: "Jabon", codigo: "AB14", precio: 5, stock: 5 },
  { nombre: "Azucar", codigo: "AB15", precio: 5, stock: 10 },
  { nombre: "Sal", codigo: "AB16", precio: 5, stock: 11 },
  { nombre: "Atun", codigo: "AB17", precio: 5, stock: 4 },
  { nombre: "Harina", codigo: "AB18", precio: 5, stock: 2 },
];
const orden=(a,b)=>{
    var nombreA = a.nombre.toUpperCase();
    var nombreB = b.nombre.toUpperCase();
    if (nombreA < nombreB) {
      return -1;
    }
    if (nombreA > nombreB) {
      return 1;
    }
    return 0;
 }
miArreglo.sort(orden);

console.log(miArreglo)

var titulos = Object.keys(miArreglo[0]);

const app = Vue.createApp({
  data() {
    return {
      miArreglo,
      titulos,
      nombre: "",
      codigo: "",
      precio: 0,
      stock: 0,
    };
  },
  methods: {
    agregarProducto() {
      const nuevoProducto = {
        nombre: this.nombre,
        codigo: this.codigo,
        precio: this.precio,
        stock: this.stock,
      };
      if (
        this.nombre == "" ||
        this.codigo == "" ||
        this.precio == 0 ||
        this.stock == 0
      ) {
        alert("Complete el formulario");
      } else {
        this.miArreglo.unshift(nuevoProducto);
        miArreglo.sort(orden);
      }
    },
  },
});
app.mount("#miEjercicio");
