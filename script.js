const btnDOM = document.querySelector('button')
const p = document.querySelector('p')
const url = 'https://api.chucknorris.io/jokes/random'
btnDOM.addEventListener('click', getJoke)
function getJoke(){
fetch(url)
.then(res => res.json())
.then(data => p.innerHTML= data.value
)

}







// document.addEventListener('DOMContentLoaded', () => {
//     const jokeButton = document.getElementById('jokeButton');
//     const jokeText = document.getElementById('jokeText');

//     jokeButton.addEventListener('click', async () => {
//         try {
//             const response = await fetch('https://api.chucknorris.io/jokes/random');
//             const data = await response.json();
//             jokeText.textContent = data.value;
//         } catch (error) {
//             jokeText.textContent = 'Failed to fetch a joke. Please try again later.';
//         }
//     });
// });