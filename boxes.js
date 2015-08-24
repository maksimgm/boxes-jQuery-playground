console.log("hello world");

$(document).ready(function(){
// EXERCISE 2
    // $("#secretBox").css("backgroundColor","white");
    // $("#secretBox").append("<h1>secret Box!</h1>");
    // $("#row1 div").addClass("boxType3");
    // $("#row1 div").removeClass("boxType2,boxType1");
    // $("#row4").children("div:eq(3)").css("display","none");
    // $(".boxType1").css("backgroundColor","white");
    // // $("#row2").children("div:eq(0)").removeClass("boxType2");
    // // $("#row2").children("div:eq(1)").removeClass("boxType3");
    // $("#row2 div").slice(0,2).removeClass();
    // $(".box").not("#secretBox").css("width","2px");

// EXERCISE 3  
  // $(".boxType1").wrap("<a href='http://www.galvanize.com/'>");
  $("#container").click(function(event){
    console.log(event.pageX, event.pageY);
    // alert("STOP!!! in the name of the World Wide Web");
  });
  // $("boxType1").click(function(event){
  //   event.preventDefault();
  // });
  $(".box").click(function(event){
    $(this).append("<img src='https://pbs.twimg.com/profile_images/412678253711618048/nZV3digW.png'>");
  });
});

// $(function(){

// });