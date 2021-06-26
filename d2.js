let xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText).feed.entry;
        //use this to find the weird array names for new columns on the google sheet
        //console.log(data[0]);

        let i;
        for (i = 0; i < data.length; i++) {
          let team = data[i]["gsx$team"]["$t"];
          let bar = 100 * data[i]["gsx$total"]["$t"] / 2200;
          let points = data[i]["gsx$total"]["$t"];
          let coolArray = ["firstD2Team", "secondD2Team", "thirdD2Team", "fourthD2Team", "fifthD2Team"];
          let coolArray2 = ["firstD2Bar", "secondD2Bar", "thirdD2Bar", "fourthD2Bar", "fifthD2Bar"];
          let coolArray3 = ["firstD2Points", "secondD2Points", "thirdD2Points", "fourthD2Points", "fifthD2Points"];

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
    xmlhttp2.open(
      "GET",
      "https://spreadsheets.google.com/feeds/list/10chv5tyknCVULL5YRUWChXhGUH3rJ6s34QbD7vT3uBY/2/public/full?alt=json",
      true
    );
    xmlhttp2.send();