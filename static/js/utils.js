$(document).ready(()=>{
	menuEffect();
})

const menuEffect = () =>{
	$(window).scroll(()=>{
		let menu = $('.menu');
		if(menu.offset().top<100){
			menu.addClass("secondary");
		}else{
			menu.removeClass("secondary");
		}
	})
}