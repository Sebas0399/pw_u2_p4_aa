console.log("Componente VUE");
console.log(Vue);
//Option API
const app = Vue.createApp({
  //template: `
  //<h1>Hola Mundo</h1>
  //<p>Desde Vue.js</p>
  //<p>{{1+1}}</p>
  //`,
  data() {
    return {
      nombre:"Antony",
      apellido:"Arguello",
      mensaje:"Hola Mundo 2 desde Vue.js"
    };
  },
  methods: {
    cambiarNombre(){
      console.log("boton cambiar nombre")
      this.nombre="Sebastian"
    },
    cambiarApellido(){
      console.log("boton cambiar apellido")
      this.apellido="Aguay"
    }
  },
});
app.mount("#miApp");
