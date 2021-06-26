let xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText).feed.entry;
        //use this to find the weird array names for new columns on the google sheet
        //console.log(data[0]);

        let i;
        for (i = 0; i < data.length; i++) {
          let team = data[i]["gsx$team"]["$t"];
          let webdev = data[i]["gsx$webdev"]["$t"];
          let astronomy = data[i]["gsx$astronomy"]["$t"];

          document.getElementById('d2').innerHTML +=
            "<tr>" +
            "<td>" +
            team +
            "</td>" +
            "<td>" +
            webdev +
            "</td>" +
            "<td>" +
            astronomy +
            "</td>" +
            "</tr>";
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