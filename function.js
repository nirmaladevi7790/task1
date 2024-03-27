var originalPosition = null;
function forward() {
  var object = document.getElementById('smallbox');
  if (originalPosition === null) {
    originalPosition = object.offsetLeft;
}
  var currentPosition = object.offsetLeft;
  var newPosition = currentPosition + 550; 
  object.style.left = newPosition + 'px';
}

function backward() {
  var object = document.getElementById('smallbox');
  object.style.left = originalPosition + 'px';
}
$(document).ready(function()
    {
        $("#hurdle").click(function()
        {
            $("#hiddenbox").toggle();
        });
    });
 function reset(){
  var object = document.getElementById('smallbox');
  object.style.left = originalPosition + 'px';
 }