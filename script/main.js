window.addEventListener("DOMContentLoaded", function() {

	const PREV = document.querySelector(".prev");
	const NEXT = document.querySelector(".next");
	const PROJECTS = document.querySelector("#projects");
	const BURGER = document.querySelector(".burger");


	let postIndex = 1;


	NEXT.addEventListener("click", function() {
		postIndex++;
		if (postIndex > 6) postIndex = 1;
		let coords = -880 * (postIndex - 1) + "px";
		PROJECTS.style.marginLeft = coords;

	})
	//>= 
	PREV.addEventListener("click", function() {
		postIndex--;
		if (postIndex <= 0) postIndex = 6;
		let coords = -880 * (postIndex - 1) + "px";
		PROJECTS.style.marginLeft = coords;

		//postIndex = 

	})

	BURGER.addEventListener("click", function(){
		BURGER.classList.toggle('on');
		const menu= document.querySelector("#sidePanel");
		menu.classList.toggle('d-none');
	})

})