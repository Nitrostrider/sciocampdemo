let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let data = JSON.parse(this.responseText).feed.entry;
    //use this to find the weird array names for new columns on the google sheet
    //console.log(data[0]);
    for (i = 0; i < data.length; i++) {
      let team = data[i]["gsx$team"]["$t"];
      let bar = 100 * data[i]["gsx$total"]["$t"] / 2200;
      let points = data[i]["gsx$total"]["$t"];
      let coolArray = ["firstD1Team", "secondD1Team", "thirdD1Team", "fourthD1Team", "fifthD1Team"];
      let coolArray2 = ["firstD1Bar", "secondD1Bar", "thirdD1Bar", "fourthD1Bar", "fifthD1Bar"];
      let coolArray3 = ["firstD1Points", "secondD1Points", "thirdD1Points", "fourthD1Points", "fifthD1Points"];

      /*document.getElementById('d2').innerHTML +=
        "<tr>" +
        "<td>" +
        team +
        "</td>" +
        "<td>" +
        total +
        "</td>" +
        "<td>" +
        "</tr>"*/
      document.getElementById(coolArray[i]).innerHTML = team;
      document.getElementById(coolArray2[i]).style.width = bar + "%";
      document.getElementById(coolArray3[i]).innerHTML = points;
    }
  }
};
//search for entry
xmlhttp.open(
  "GET",
  "https://spreadsheets.google.com/feeds/list/10chv5tyknCVULL5YRUWChXhGUH3rJ6s34QbD7vT3uBY/1/public/full?alt=json",
  true
);
xmlhttp.send();