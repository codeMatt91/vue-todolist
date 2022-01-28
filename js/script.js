console.log('Vuejs OK!', Vue);

Vue.config.devtools = true;

/*

|Descrizione:
Rifare l'esercizio della to do list.
Ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
#MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
#MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
#MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

|Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

*/


const root = new Vue({
   el: '#root',
   data: {
      newTask: '',
      ingredients: [
         {text:'Sugar: 150g', done:false},
         {text:'Flour: 300g', done:false},
         {text:'Eggs: 4', done:false},
         {text:'Milk: 250ml', done:false},
         {text:'Yeast: 15g', done:false},
         {text:'Butter: 100g', done:false},
         {text:'Cream: 150g', done:false},
      ]
   },
   methods: {
      deletElement(element) {
         if (element.done) {
            element.done = false;
         } else {
            element.done = true;
         };
      },
      addTask() {
         if (this.newTask == '') {
            
         } else {
            let newLine = this.newTask.trim();
            this.ingredients.push({ text: newLine, done: false });
         }
         this.newTask = '';
      },
      removeTask(index) {
         this.ingredients = this.ingredients.filter((item, i) => {
            if (i !== index) return true;
            else return false;
         })
      }
   }
})