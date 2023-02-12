
// DOM - document object model


const inputFirstNote = document.querySelector('#firstNote');
const inputSecondNote = document.querySelector('#secondNote');
const inputThirdNote = document.querySelector('#thirdNote');

const totalMessageElement = document.querySelector('#totalMessage');
const recoveryMessageElement = document.querySelector('#recoveryMessage');
const needMessageElement = document.querySelector('#needMessage');
const honorMessageElement = document.querySelector('#honorMessage');

// primer paso: Crear una variable para guardar el objeto (button)
//segundo paso: Llamar el button desde el html

const buttonCalculate = document.querySelector('#btn-calculate')
// tercero: Añadir evento al button
//nombre de la variable, addEventListener, ('click', funcion)
buttonCalculate.addEventListener('click', calculateNotes)
// crear la función
function calculateNotes() {
  const note1 = (parseFloat(inputFirstNote.value) * 0.3).toFixed(2);
  const note2 = (parseFloat(inputSecondNote.value) * 0.3).toFixed(2);
  const note3 = (parseFloat(inputThirdNote.value) * 0.4).toFixed(2);
  const total = parseFloat(Number(note1) + Number(note2) + Number(note3))

  console.log(typeof note3);
  totalMessageElement.textContent = total;
  if (note1 !== "0.00" && note2 !== "0.00") {
    const recovery = parseFloat(2.1 - total).toFixed(2);
    const approve = parseFloat(3.5 - total).toFixed(2);
    const honor = parseFloat(4.6 - total).toFixed(2);
    recoveryMessageElement.textContent = "Si deseas recuperar necesitas: " + recovery
    needMessageElement.textContent = "Para ganar necesitarias minimo: " + approve
    honorMessageElement.textContent = "Para ganar con honores necesitarias minimo:" + honor
  }
}
