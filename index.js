// Your code goes here
//     let update = document.getElementById('text').textContent;
//     console.log(update);
//     update = "This is really cool!";
// console.log(update);

// document.addEventListener("DOMContentLoaded", domContentLoaded, false);

// function domContentLoaded() {
// 	// let update = document.getElementById('text').textContent;

// 	// console.log(update)
// 	updateDOM();
// }

// function updateDOM() {
//     // do something again
//     if (document.querySelector('p').textContent == "This is really cool!"){
//     	document.querySelector('p').textContent = "JavaScript is so cool. It lets me add text to my page programmatically.";
//     }else if (document.querySelector('p').textContent == "JavaScript is so cool. It lets me add text to my page programmatically."){
//     	document.querySelector('p').textContent = "This is really cool!";
//     }
// }

function domContentLoaded() {
	document.addEventListener("DOMContentLoaded", updateDOM);
}
function updateDOM() {
    // do something again
    if (document.querySelector('p').textContent == "This is really cool!"){
    	document.querySelector('p').textContent = "JavaScript is so cool. It lets me add text to my page programmatically.";
    }else if (document.querySelector('p').textContent == "JavaScript is so cool. It lets me add text to my page programmatically."){
    	document.querySelector('p').textContent = "This is really cool!";
    }
}
