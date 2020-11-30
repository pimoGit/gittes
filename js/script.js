axios.get('https://flynn.boolean.careers/exercises/api/random/int')
.then(function (risposta) {
   const result = risposta.data;
   console.log(result);
 });
