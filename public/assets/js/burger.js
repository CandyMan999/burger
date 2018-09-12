
$(document).ready(()=> {

$(".eat").on('click', function(){
   var id = $(this).attr("data-id")
    var devour = this;
   $.ajax("/api/burgers/" + id, {
    type: "PUT",
 
  }).then(
    function() {
      alert("changed burger boleean");
      $(devour).parent().css("margin-left", "70%").css("display","block").css("background-color", "white");
      $(devour).css("display", "none");
      console.log(this);
     
    }
  );
})



});

