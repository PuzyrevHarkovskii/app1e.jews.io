var message_template = '<div class="message"><div class="avatar trev"></div></div>';
var username  = "Trev";
var usercolor = "magenta";

$(".emoji-button").click(function(){
  
});
$(".send-button").click(function(){
  var message = $(message_template).clone();
  var message_tag = ' <b style="color:' + usercolor + ';"> ' + username + ':</b> ';
  if($("#chat-input-box").val() != "") {
    console.log(message_tag);
    message.find(".avatar").after(message_tag+$("#chat-input-box").val());
    $("#chat-input-box").val("");
    $(".chat-scroll").prepend(message);
  }
});

$('input[type="text"]').bind("enterKey",function(e){
   $(".send-button").trigger("click");
});
$('input[type="text"]').keyup(function(e){
    if(e.keyCode == 13)
    {
        $(this).trigger("enterKey");
    }
});