$(function() {
$(".filtre").on("input", function() {
var malzeme = $(this).val().toLowerCase().split(/\s+/).filter(Boolean);
$(".cardFiltre").each(function() {
 var text = $(this).text().toLowerCase();
            var show = false;

for (var i = 0; i < malzeme.length; i++) {
if (text.indexOf(malzeme[i]) !== -1) {
                show = true;
                break;
}}
$(this).toggle(show);
  });
 });
});

function pathindexx(){
  window.location.href='indexx';
}
function pathİndex(){
  window.location.href='/index.html'
}