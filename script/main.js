window.addEventListener("DOMContentLoaded", function() {
	
	const PREV = document.querySelector(".prev")
	const NEXT = document.querySelector(".next");
	const PROJECTS = document.querySelector("#projects");
	
	let postIndex=0;
	

	NEXT.addEventListener("click", function(){
		
		if(postIndex>=5) postIndex=0;		
		let coords = -880 * postIndex + "px";
		PROJECTS.style.marginLeft=coords;
		postIndex++;
	})
	//>= 프로젝트수 
	PREV.addEventListener("click", function(){
		if(postIndex<0) postIndex=4;		
		let coords = -880 * postIndex + "px";
		PROJECTS.style.marginLeft=coords;
		postIndex--;
//postIndex = 프로젝트수-1
				
	})

})