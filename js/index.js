
function showImage(letter) {
  document.getElementById(`part-${letter}`).style.display = "block";
  document.getElementById(`hidden-btn-${letter}`).style.display = "block";
}

function hideImage(letter) {
  document.getElementById(`part-${letter}`).style.display = "none";
  document.getElementById(`hidden-btn-${letter}`).style.display = "none";
}
