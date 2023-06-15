var numbers = [];
var opcion = "";
var res=0
var numero="";
const app = Vue.createApp({
  data() {
    return {
        
      numero,
      res,
    };
  },
  methods: {
    saveNum(n){
      console.log(this.res)
        this.numero=this.numero+n
        numbers.push(parseInt(this.numero))
      
       
    },
    saveOpt(o){
      
        
        this.numero=""
        numero=""
        opcion=o
    },
    solve(){
        numero=""
        if(opcion=="suma"){
            this.res=this.sumar(numbers[0],numbers[1])
     
           
        }
        else if(opcion=="multiplicacion"){
          this.res=this.multiplicar(numbers[0],numbers[1])
        }
        else if(opcion=="resta"){
          this.res=this.restar(numbers[0],numbers[1])
        }
        else{
          this.res=this.dividir(numbers[0],numbers[1])

        }
        numbers=[]
        opcion=""
        this.numero=""
       
        
       
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