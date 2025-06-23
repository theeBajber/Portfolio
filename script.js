// Get the div element
const divElement = document.getElementById('Boss');

// Define an array of colors to transition through
const colors = ['orange', 'red', 'indigo', 'cyan', 'magenta', 'pink', 'brown', 'teal', 'lightblue', 'lightgreen', 'lightyellow', 'lightgrey', 'lightpink', 'lightcoral', 'lightseagreen', 'lightsalmon', 'lightsteelblue', 'lightgoldenrodyellow', 'lightcyan', 'lightgreen', 'lightgrey', 'blue', 'purple', 'green', 'yellow'];

let colorIndex = 0;

// Define the animation function
function changeColor() {
  // Smooth transition for font color
  divElement.style.transition = 'color 2s ease';
  // Change the font color to the next color
  divElement.style.color = colors[colorIndex];
  // Move to the next color in the array
  colorIndex = (colorIndex + 1) % colors.length;
  // Call the animation function recursively with a delay
  setTimeout(changeColor, 2000);
}

// Call the animation function to start the loop
changeColor();

const calc = document.getElementById('calc')
const desc = document.getElementById('Description')
const nectar = document.getElementById('nectar')
const soda = document.getElementById('soda')
const temp = document.getElementById('Temp')
const film = document.getElementById('film')
const brief = document.getElementById('bottom')
const figure = document.querySelectorAll('.figure')

const explanations = {
    './Icons/calc.jpg':'<h2>Calculator</h2> <p>A simple web calculator.</p> <a href="">Open Project</a>',
    './Icons/Nectar.jpg':'<h2>Nekta</h2> <p>A database system created for handling logistics in a beekeeping company.</p> <a href="">Open Project</a>',
    './Icons/soda.jpg':'<h2>Bin Salim</h2> <p>A database system used in manging logistics of a soda distributor store.</p> <a href="">Open Project</a>',
    './Icons/Thermo.jpg':'<h2>Temperature</h2> <p>A front-end website used to convert temperature to and from its different units.</p> <a href="">Open Project</a>',
    './Icons/film.webp':'<h2>Soap2day</h2> <p>A simulation of the streaming website "soap2day".</p> <a href="">Open Project</a>'
}

function changeImg(image) {
    desc.style.backgroundImage = `url(${image})`;
    desc.style.backgroundPosition = 'center';
    desc.style.backgroundSize = 'cover';
    brief.innerHTML = explanations[image];
    brief.style.background = '#e0e0cea1';
    figure.style.background = '#ad343e95';

}
function revertImg() {
    desc.style.backgroundImage = `url('./Icons/abstract-black-textured-background-with-scratches_130265-12474.avif')`;
    brief.innerHTML = '';
    brief.style.background = '';
}
calc.addEventListener('mouseover',() =>changeImg('./Icons/calc.jpg'))
calc.addEventListener('mouseout', revertImg);
nectar.addEventListener('mouseover',() =>changeImg('./Icons/Nectar.jpg'))
nectar.addEventListener('mouseout', revertImg);
soda.addEventListener('mouseover',() =>changeImg('./Icons/soda.jpg'))
soda.addEventListener('mouseout', revertImg);
temp.addEventListener('mouseover',() =>changeImg('./Icons/Thermo.jpg'))
temp.addEventListener('mouseout', revertImg);
film.addEventListener('mouseover',() =>changeImg('./Icons/film.webp'))
film.addEventListener('mouseout', revertImg);