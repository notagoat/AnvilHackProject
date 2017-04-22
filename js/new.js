console.log("loaded");
var start1 = function() {
  document.getElementById('spotify1').style.display = "block";
  document.getElementById('whatis').style.display = "none"
}

var start2 = function() {
  document.getElementById('spotify1').style.display = "none";
  document.getElementById('googlemaps').style.display = "block"
}

var mainform = function() {
  document.getElementById('googlemaps').style.display = "none";
  document.getElementById('mainform').style.display = "block"
}

var submit = function() {
  document.getElementById('mainform').style.display = "none";
  document.getElementById('thanks').style.display = "block"
}
