$(document).ready(function(){

  //브라우저 높이 가져오기
  let wh = $(window).height();

  /*브라우저 창 사이즈 변경___________ */
  $(window).resize(function(){
    location.reload();  //새로고침
    let wh = $(window).height();
    $("html,body").stop().animate({ scrollTop:wh*a },500);
  });

  /* 마우스휠__________________________ */
  let a = 0;  //페이지번호
	let area_n = $(".area").length;  //섹션개수
	let wheel = true;

  $(".area").on("mousewheel DOMMouseScroll",function(e,delta) {
    //console.log(delta);
    if (wheel) {
      let n = $(this).index();
      if(delta < 0) { //휠을 아래로 돌렸다면
        a = n+1;
      }else{ //휠을 위로 돌렸다면
        a = n-1;
      }

      if ( a <= 0 ) { a = 0; }
      if ( a >= area_n-1 ) { a = area_n-1; }

      $("#tt").text(a); 
      $("#dot span").eq(a).addClass("active");
			$("#dot span").eq(a).siblings().removeClass("active");
      $("html,body").stop().animate({ scrollTop:wh*a },500); 
    };
  });



});