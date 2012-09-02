
var startTime = new Date();
var huh_key = 45;
var aha_key = 61;

$(function(){

  function submit(_name, _clickTime, _clickType){
    $.ajax({
      type: "POST",
      url: "/clicks",
      data: { name: _name, click_type: _clickType, click_time: _clickTime },
      async: true
    })
  }

  $(document).keypress(function(e){ 
    console.log(e.which);

    if (e.which === huh_key)
    {
      e.preventDefault();
      pushEvent("huh");
      return;
    }

    if (e.which === aha_key)
    {
      e.preventDefault();
      pushEvent("aha");
      return;
    }
  });

  function pushEvent( clickType )
  {
    name = $("#name").val();
    clickTime = getSeconds();
    submit(name, clickTime, clickType);    

  }

  $("#aha").click(function(e){
    e.preventDefault();

    pushEvent("aha")
  })

$("#huh").click(function(e){
    e.preventDefault();

    pushEvent("huh");
  })

$("#start").click(function(e){
  e.preventDefault();
  startTime = new Date();
})

function getSeconds()
{
  var ms = (new Date() - startTime)

  return parseInt(ms / 1000);
}

})