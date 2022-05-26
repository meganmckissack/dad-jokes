//import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import getJoke from './dadJokeService.js';

// $(document).ready(function() {
//   $('#dadJoke').click(function() {
//     //async function(){
//     const joke = getJoke();
//     $('.showJoke').html(joke);
//     //}
//   });
// });
const jokeButton = document.querySelector('#dadJoke');
const jokeText = document.querySelector('.showJoke');
async function handleClick() {
  const { joke } = await getJoke();
  jokeText.textContent = joke;
}

jokeButton.addEventListener('click', handleClick);