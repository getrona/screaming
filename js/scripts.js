$(document).ready(function(){
  $("#blanks form").submit(function(event){
    var inputText = $("input#text").val();
    var inputText = inputText.toUpperCase();

    $(".text").text(inputText);

    $("#reply").show();

    event.preventDefault();
  });
});
