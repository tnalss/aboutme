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
	//postIndex를 컨텐츠 수로 하면
	//css에서 해당 너비를 컨텐츠 수 * 100%
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
$(function () {
	let scTop;
	const sub1Top = $(".subject1").offset().top;
	const sub2Top = $(".subject2").offset().top;
	const sub3Top = $(".subject3").offset().top;
	let pOffset = [0,];
	pOffset.push(sub1Top);
	pOffset.push(sub2Top);
	pOffset.push(sub3Top);
	//console.log(pOffset);
	$(window).scroll(function () {
		scTop = $(window).scrollTop(); // 소수점
		//console.log(sub2Top);
		//console.log("스크롤Top : " + parseInt(scTop));
		if (scTop >= pOffset[0] && scTop < pOffset[1]) {
			console.log("1번구간");
			$("#snb li").removeClass("tomato");
			$("#snb li:nth-child(1)").addClass("tomato")
		} else if (scTop >= pOffset[1] && scTop < pOffset[2]) {
			$("#snb li").removeClass("tomato")
			console.log("2번구간");
			$("#snb li:nth-child(2)").addClass("tomato")
		} else if (scTop >= pOffset[2] && scTop < pOffset[3]) {
			console.log("3번구간");
			$("#snb li").removeClass("tomato")
			$("#snb li:nth-child(3)").addClass("tomato")
		} else  {
			$("#snb li").removeClass("tomato")
			$("#snb li:nth-child(4)").addClass("tomato")
		}
	})
	$("#snb li").click(function (e) {
		e.preventDefault();
		let el = $(this); // #gnb li a : 여러개
		let index = el.index(); // 반복가능 객체에서 인덱스를 알려주는 메소드                
		$(window).scrollTop(pOffset[index]);
	})

})