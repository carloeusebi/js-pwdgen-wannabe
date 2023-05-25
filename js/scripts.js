console.log("JSOK");

// # Declaration

const pwdNumber = '21';
const pwdPlaceholder = document.getElementById('password');
console.log(pwdPlaceholder);

// # Collecting user inputs

// Firstname
const userFirstName = prompt('Inserisci il nome', 'Carlo');
console.log(userFirstName);

// Lastname
const userLastName = prompt('Inserisci il tuo cognome', 'Eusebi');
console.log(userLastName);

// Colors
const userFavColor = prompt('Inserisci il tuo colore preferito', 'Blallo');
console.log(userFavColor);

// # Logic

const generatedPwd = userFirstName + userLastName + userFavColor + pwdNumber;
console.log(generatedPwd);