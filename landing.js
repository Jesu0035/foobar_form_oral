/* import './sass/style.scss' */

'use strict';


const splash = document.querySelector('.intro');
document.addEventListener('DOMContentLoaded', (e) =>{
	setTimeout( ()=>{
		splash.classList.add('display_none');
	}, 1000);
})


  const header  = document.querySelector('.header');

window.onscroll = function(){
	const top = window.scrollY;
	console.log(top);
	if ( top >= 50) {
		header.classList.add('active')
} else{
	header.classList.remove('active');
}
} 