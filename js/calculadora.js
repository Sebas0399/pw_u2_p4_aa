var numbers = [];
var opcion = "";
var res=0
var numero="";
const app = Vue.createApp({
  data() {
    return {
        numero,
      numbers,
      opcion,
      res,
    };
  },
  methods: {
    saveNum(n){
        this.numero=this.numero.concat(n)
    },
    saveOpt(o){
        numbers.push(parseInt(this.numero))
        this.numero=""
        this.opcion=o
    },
    solve(){
        this.numero=""
        if(this.opcion=="suma"){
            this.res=this.sumar(this.numbers[0],this.numbers[1])
           
        }
        else if(this.opcion=="multiplicacion"){
            this.res=this.multiplicar(this.numbers[0],this.numbers[1])
        }
        else if(this.opcion=="resta"){
            this.res=this.restar(this.numbers[0],this.numbers[1])
        }
        else{
            this.res=this.dividir(this.numbers[0],this.numbers[1])

        }
        this.numbers=[]
        this.opcion=""
        
       
    },
    sumar(num1, num2) {
      return num1 + num2;
    },

    restar(num1, num2) {
      return num1 - num2;
    },

    multiplicar(num1, num2) {
      return num1 * num2;
    },
    dividir(num1, num2) {
      return num1 / num2;
    },
  },
});
app.mount("#miCalculadora");