function showALL() {
  var touch = "<table>";
  var pick = choosing.value;
  touch += "<tr>";
  for (a = 1; a <= parseInt(column.value); a++) {
    touch += "<td>";
    for (b = 1; b <= parseInt(row.value); b++) {
      var goodValue  = (eval(a + pick + b));
      if (goodValue  % 1 !==0) {
        var goodValue  = parseFloat(eval(a + pick + b)).toFixed(2);
      }
      touch += a + pick + b + "=" + goodValue + "<br>";
    }
  }
  touch += "<table>";
  displayHERE.innerHTML = touch;
  document.getElementById("column").value =""
  document.getElementById("row").value =""

}

