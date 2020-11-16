// Utilizzare due input, in cui inseriremo Nome e Cognome.
// In un paragrafo utilizzare Nome e Cognome per salutare l’utente

// istanziamo Vue agganciando l'istanza al nostro contenitore

var app = new Vue({
  el: "#app",
  data: {
    nome: "nome",
    cognome: "cognome",
    mieClassi: "classe2"
  },
  methods: {
    changeTitle: changeTitle() {
      //alert("ciao dal metodo interno");
      if (this.mieClassi === "classe2"){
        this.mieClassi = "classe1";
      } else {
        this.mieClassi = "classe2";
      }
      console.log(this.cognome);
    }
  }
});
