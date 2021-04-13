var APITick = "apikey=Adw3d81D9BpgpPWZC0f4HbYja3X6P9Vv";
//https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=Adw3d81D9BpgpPWZC0f4HbYja3X6P9Vv
var mapEl = document.getElementById("map-container");
var mapAPIKey = "ff6e39ae57msh101f348ba7554fep1b4d1ejsnaf830f19baf8";
var calendarEl = document.getElementById("calendar");

var searchString = "Reggae";

const button = document.getElementById("displayAllmusic");

document
  .getElementById("displayAllmusic")
  .addEventListener("click", getAllmusic);

document.getElementById("displayPop").addEventListener("click", getAllPop);
document.getElementById("displayRock").addEventListener("click", getAllRock);
document
  .getElementById("displayHiphop")
  .addEventListener("click", getallHipHop);
document
  .getElementById("displayReggae")
  .addEventListener("click", getallReaggae);

// Call API for all music
function getAllmusic() {
  fetch(
    "https://app.ticketmaster.com/discovery/v2/events.json?Code=AU&marketId=305&classificationName=&" +
      APITick
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      displayAllmusic(data);
      //   hideText();
    });
}

// Take name from API call and place in search results container for all music
function displayAllmusic(data) {
  console.log(data);
  //Event Name 1
  const displayMusic = data._embedded.events[0];
  const allMusicname = document.getElementById("search-result1-name");
  const eventName = displayMusic.name;
  const heading = document.createElement("h1");
  heading.innerHTML = eventName;
  allMusicname.appendChild(heading);
  // Price 1
  const eventPrice = displayMusic.priceRanges[0].min;
  const price = document.getElementById("search-result1-price");
  const priceActual = document.createElement("h3");
  priceActual.innerHTML = eventPrice;
  price.appendChild(priceActual);
  // // Date 1
  const eventDate = displayMusic.dates.start.localDate;
  const localDate1 = document.getElementById("search-result1-date");
  const actualdate1 = document.createElement("h4");
  actualdate1.innerHTML = eventDate;
  localDate1.appendChild(actualdate1);

  // Part 2
  // event 2
  const displayMusic2 = data._embedded.events[1];
  const allMusicname2 = document.getElementById("search-result2-name");
  const eventName2 = displayMusic2.name;
  const heading2 = document.createElement("h1");
  heading2.innerHTML = eventName2;
  allMusicname2.appendChild(heading2);
  // Price 2
  const eventPrice2 = displayMusic2.priceRanges[0].min;
  const price2 = document.getElementById("search-result2-price");
  const priceActual2 = document.createElement("h3");
  priceActual2.innerHTML = eventPrice2;
  price2.appendChild(priceActual2);
  // // Date 2
  const eventDate2 = displayMusic2.dates.start.localDate;
  const localDate2 = document.getElementById("search-result2-date");
  const actualdate2 = document.createElement("h4");
  actualdate2.innerHTML = eventDate2;
  localDate2.appendChild(actualdate2);

  // Part 3
  // event 3
  const displayMusic3 = data._embedded.events[3];
  const allMusicname3 = document.getElementById("search-result3-name");
  const eventName3 = displayMusic3.name;
  const heading3 = document.createElement("h1");
  heading3.innerHTML = eventName3;
  allMusicname3.appendChild(heading3);
  // Price 3
  const eventPrice3 = displayMusic3.priceRanges[0].min;
  const price3 = document.getElementById("search-result3-price");
  const priceActual3 = document.createElement("h3");
  priceActual3.innerHTML = eventPrice3;
  price3.appendChild(priceActual3);
  // // Date 3
  const eventDate3 = displayMusic3.dates.start.localDate;
  const localDate3 = document.getElementById("search-result3-date");
  const actualdate3 = document.createElement("h4");
  actualdate3.innerHTML = eventDate3;
  localDate3.appendChild(actualdate3);

  // Part 4
  // event 4
  const displayMusic4 = data._embedded.events[15];
  const allMusicname4 = document.getElementById("search-result4-name");
  const eventName4 = displayMusic4.name;
  const heading4 = document.createElement("h1");
  heading4.innerHTML = eventName4;
  allMusicname4.appendChild(heading4);
  // Price 3
  const eventPrice4 = displayMusic4.priceRanges[0].min;
  const price4 = document.getElementById("search-result4-price");
  const priceActual4 = document.createElement("h4");
  priceActual4.innerHTML = eventPrice4;
  price4.appendChild(priceActual4);
  // // Date 3
  const eventDate4 = displayMusic4.dates.start.localDate;
  const localDate4 = document.getElementById("search-result4-date");
  const actualdate4 = document.createElement("h4");
  actualdate4.innerHTML = eventDate4;
  localDate4.appendChild(actualdate4);
}
// Call API for Pop
function getAllPop() {
  fetch(
    "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Pop&countryCode=AU&marketId=305&" +
      APITick
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      displayAllPop(data);
      //   hideText();
    });
}
// ake name from API call and place in search results container for Pop
function displayAllPop(data) {
  console.log(data);
  //Event Name 1
  const displayMusic = data._embedded.events[0];
  const allMusicname = document.getElementById("search-result1-name");
  const eventName = displayMusic.name;
  const heading = document.createElement("h1");
  heading.innerHTML = eventName;
  allMusicname.appendChild(heading);
  // Price 1
  const eventPrice = displayMusic.priceRanges[0].min;
  const price = document.getElementById("search-result1-price");
  const priceActual = document.createElement("h3");
  priceActual.innerHTML = eventPrice;
  price.appendChild(priceActual);
  // // Date 1
  const eventDate = displayMusic.dates.start.localDate;
  const localDate1 = document.getElementById("search-result1-date");
  const actualdate1 = document.createElement("h4");
  actualdate1.innerHTML = eventDate;
  localDate1.appendChild(actualdate1);

  // Part 2
  // event 2
  const displayMusic2 = data._embedded.events[1];
  const allMusicname2 = document.getElementById("search-result2-name");
  const eventName2 = displayMusic2.name;
  const heading2 = document.createElement("h1");
  heading2.innerHTML = eventName2;
  allMusicname2.appendChild(heading2);
  // Price 2
  const eventPrice2 = displayMusic2.priceRanges[0].min;
  const price2 = document.getElementById("search-result2-price");
  const priceActual2 = document.createElement("h3");
  priceActual2.innerHTML = eventPrice2;
  price2.appendChild(priceActual2);
  // // Date 2
  const eventDate2 = displayMusic2.dates.start.localDate;
  const localDate2 = document.getElementById("search-result2-date");
  const actualdate2 = document.createElement("h4");
  actualdate2.innerHTML = eventDate2;
  localDate2.appendChild(actualdate2);

  // Part 3
  // event 3
  const displayMusic3 = data._embedded.events[3];
  const allMusicname3 = document.getElementById("search-result3-name");
  const eventName3 = displayMusic3.name;
  const heading3 = document.createElement("h1");
  heading3.innerHTML = eventName3;
  allMusicname3.appendChild(heading3);
  // Price 3
  const eventPrice3 = displayMusic3.priceRanges[0].min;
  const price3 = document.getElementById("search-result3-price");
  const priceActual3 = document.createElement("h3");
  priceActual3.innerHTML = eventPrice3;
  price3.appendChild(priceActual3);
  // // Date 3
  const eventDate3 = displayMusic3.dates.start.localDate;
  const localDate3 = document.getElementById("search-result3-date");
  const actualdate3 = document.createElement("h4");
  actualdate3.innerHTML = eventDate3;
  localDate3.appendChild(actualdate3);

  // Part 4
  // event 4
  const displayMusic4 = data._embedded.events[15];
  const allMusicname4 = document.getElementById("search-result4-name");
  const eventName4 = displayMusic4.name;
  const heading4 = document.createElement("h1");
  heading4.innerHTML = eventName4;
  allMusicname4.appendChild(heading4);
  // Price 3
  const eventPrice4 = displayMusic4.priceRanges[0].min;
  const price4 = document.getElementById("search-result4-price");
  const priceActual4 = document.createElement("h4");
  priceActual4.innerHTML = eventPrice4;
  price4.appendChild(priceActual4);
  // // Date 3
  const eventDate4 = displayMusic4.dates.start.localDate;
  const localDate4 = document.getElementById("search-result4-date");
  const actualdate4 = document.createElement("h4");
  actualdate4.innerHTML = eventDate4;
  localDate4.appendChild(actualdate4);
}
// Call api for rock/metal
function getAllRock() {
  fetch(
    "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Music&genreId=KnvZfZ7vAeA&countryCode=AU&marketId=305&" +
      APITick
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      displayAllRock(data);
      //   hideText();
    });
}
// Take name from API call and place in search results container for rock/metal
function displayAllRock(data) {
  console.log(data);
  //Event Name 1
  const displayMusic = data._embedded.events[0];
  const allMusicname = document.getElementById("search-result1-name");
  const eventName = displayMusic.name;
  const heading = document.createElement("h1");
  heading.innerHTML = eventName;
  allMusicname.appendChild(heading);
  // Price 1
  const eventPrice = displayMusic.priceRanges[0].min;
  const price = document.getElementById("search-result1-price");
  const priceActual = document.createElement("h3");
  priceActual.innerHTML = eventPrice;
  price.appendChild(priceActual);
  // // Date 1
  const eventDate = displayMusic.dates.start.localDate;
  const localDate1 = document.getElementById("search-result1-date");
  const actualdate1 = document.createElement("h4");
  actualdate1.innerHTML = eventDate;
  localDate1.appendChild(actualdate1);

  // Part 2
  // event 2
  const displayMusic2 = data._embedded.events[1];
  const allMusicname2 = document.getElementById("search-result2-name");
  const eventName2 = displayMusic2.name;
  const heading2 = document.createElement("h1");
  heading2.innerHTML = eventName2;
  allMusicname2.appendChild(heading2);
  // Price 2
  const eventPrice2 = displayMusic2.priceRanges[0].min;
  const price2 = document.getElementById("search-result2-price");
  const priceActual2 = document.createElement("h3");
  priceActual2.innerHTML = eventPrice2;
  price2.appendChild(priceActual2);
  // // Date 2
  const eventDate2 = displayMusic2.dates.start.localDate;
  const localDate2 = document.getElementById("search-result2-date");
  const actualdate2 = document.createElement("h4");
  actualdate2.innerHTML = eventDate2;
  localDate2.appendChild(actualdate2);

  // Part 3
  // event 3
  const displayMusic3 = data._embedded.events[3];
  const allMusicname3 = document.getElementById("search-result3-name");
  const eventName3 = displayMusic3.name;
  const heading3 = document.createElement("h1");
  heading3.innerHTML = eventName3;
  allMusicname3.appendChild(heading3);
  // Price 3
  const eventPrice3 = displayMusic3.priceRanges[0].min;
  const price3 = document.getElementById("search-result3-price");
  const priceActual3 = document.createElement("h3");
  priceActual3.innerHTML = eventPrice3;
  price3.appendChild(priceActual3);
  // // Date 3
  const eventDate3 = displayMusic3.dates.start.localDate;
  const localDate3 = document.getElementById("search-result3-date");
  const actualdate3 = document.createElement("h4");
  actualdate3.innerHTML = eventDate3;
  localDate3.appendChild(actualdate3);

  // Part 4
  // event 4
  const displayMusic4 = data._embedded.events[15];
  const allMusicname4 = document.getElementById("search-result4-name");
  const eventName4 = displayMusic4.name;
  const heading4 = document.createElement("h1");
  heading4.innerHTML = eventName4;
  allMusicname4.appendChild(heading4);
  // Price 3
  const eventPrice4 = displayMusic4.priceRanges[0].min;
  const price4 = document.getElementById("search-result4-price");
  const priceActual4 = document.createElement("h4");
  priceActual4.innerHTML = eventPrice4;
  price4.appendChild(priceActual4);
  // // Date 3
  const eventDate4 = displayMusic4.dates.start.localDate;
  const localDate4 = document.getElementById("search-result4-date");
  const actualdate4 = document.createElement("h4");
  actualdate4.innerHTML = eventDate4;
  localDate4.appendChild(actualdate4);
}
// Call API for Hip Hop
function getallHipHop() {
  fetch(
    "https://app.ticketmaster.com/discovery/v2/events.json?Code=AU&marketId=305&genreId=KnvZfZ7vAv1&" +
      APITick
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      displayAllHiphop(data);
      //   hideText();
    });
}

// Take name from API call and place in search results container for Hip Hop
function displayAllHiphop(data) {
  console.log(data);
  //Event Name 1
  const displayMusic = data._embedded.events[0];
  const allMusicname = document.getElementById("search-result1-name");
  const eventName = displayMusic.name;
  const heading = document.createElement("h1");
  heading.innerHTML = eventName;
  allMusicname.appendChild(heading);
  // Price 1
  const eventPrice = displayMusic.priceRanges[0].min;
  const price = document.getElementById("search-result1-price");
  const priceActual = document.createElement("h3");
  priceActual.innerHTML = eventPrice;
  price.appendChild(priceActual);
  // // Date 1
  const eventDate = displayMusic.dates.start.localDate;
  const localDate1 = document.getElementById("search-result1-date");
  const actualdate1 = document.createElement("h4");
  actualdate1.innerHTML = eventDate;
  localDate1.appendChild(actualdate1);

  // Part 2
  // event 2
  const displayMusic2 = data._embedded.events[1];
  const allMusicname2 = document.getElementById("search-result2-name");
  const eventName2 = displayMusic2.name;
  const heading2 = document.createElement("h1");
  heading2.innerHTML = eventName2;
  allMusicname2.appendChild(heading2);
  // Price 2
  const eventPrice2 = displayMusic2.priceRanges[0].min;
  const price2 = document.getElementById("search-result2-price");
  const priceActual2 = document.createElement("h3");
  priceActual2.innerHTML = eventPrice2;
  price2.appendChild(priceActual2);
  // // Date 2
  const eventDate2 = displayMusic2.dates.start.localDate;
  const localDate2 = document.getElementById("search-result2-date");
  const actualdate2 = document.createElement("h4");
  actualdate2.innerHTML = eventDate2;
  localDate2.appendChild(actualdate2);

  // Part 3
  // event 3
  const displayMusic3 = data._embedded.events[3];
  const allMusicname3 = document.getElementById("search-result3-name");
  const eventName3 = displayMusic3.name;
  const heading3 = document.createElement("h1");
  heading3.innerHTML = eventName3;
  allMusicname3.appendChild(heading3);
  // Price 3
  const eventPrice3 = displayMusic3.priceRanges[0].min;
  const price3 = document.getElementById("search-result3-price");
  const priceActual3 = document.createElement("h3");
  priceActual3.innerHTML = eventPrice3;
  price3.appendChild(priceActual3);
  // // Date 3
  const eventDate3 = displayMusic3.dates.start.localDate;
  const localDate3 = document.getElementById("search-result3-date");
  const actualdate3 = document.createElement("h4");
  actualdate3.innerHTML = eventDate3;
  localDate3.appendChild(actualdate3);

  // Part 4
  // event 4
  const displayMusic4 = data._embedded.events[15];
  const allMusicname4 = document.getElementById("search-result4-name");
  const eventName4 = displayMusic4.name;
  const heading4 = document.createElement("h1");
  heading4.innerHTML = eventName4;
  allMusicname4.appendChild(heading4);
  // Price 3
  const eventPrice4 = displayMusic4.priceRanges[0].min;
  const price4 = document.getElementById("search-result4-price");
  const priceActual4 = document.createElement("h4");
  priceActual4.innerHTML = eventPrice4;
  price4.appendChild(priceActual4);
  // // Date 3
  const eventDate4 = displayMusic4.dates.start.localDate;
  const localDate4 = document.getElementById("search-result4-date");
  const actualdate4 = document.createElement("h4");
  actualdate4.innerHTML = eventDate4;
  localDate4.appendChild(actualdate4);
}

// Call API for all reggae
function getallReaggae() {
  fetch(
    "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Music&genreId=KnvZfZ7vAv1&countryCode=AU&marketId=305&" +
      APITick
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      displayAllReaggae(data);
      //   hideText();
    });
}
// Take name from API call and place in results container for Reggae
function displayAllReaggae(data) {
  console.log(data);
  //Event Name 1
  const displayMusic = data._embedded.events[1];
  const allMusicname = document.getElementById("search-result1-name");
  const eventName = displayMusic.name;
  const heading = document.createElement("h1");
  heading.innerHTML = eventName;
  allMusicname.appendChild(heading);
  // Price 1
  const eventPrice = displayMusic.priceRanges[0].min;
  const price = document.getElementById("search-result1-price");
  const priceActual = document.createElement("h3");
  priceActual.innerHTML = eventPrice;
  price.appendChild(priceActual);
  // // Date 1
  const eventDate = displayMusic.dates.start.localDate;
  const localDate1 = document.getElementById("search-result1-date");
  const actualdate1 = document.createElement("h4");
  actualdate1.innerHTML = eventDate;
  localDate1.appendChild(actualdate1);

  // Part 2
  // event 2
  const displayMusic2 = data._embedded.events[1];
  const allMusicname2 = document.getElementById("search-result2-name");
  const eventName2 = displayMusic2.name;
  const heading2 = document.createElement("h1");
  heading2.innerHTML = eventName2;
  allMusicname2.appendChild(heading2);
  // Price 2
  const eventPrice2 = displayMusic2.priceRanges[0].min;
  const price2 = document.getElementById("search-result2-price");
  const priceActual2 = document.createElement("h3");
  priceActual2.innerHTML = eventPrice2;
  price2.appendChild(priceActual2);
  // // Date 2
  const eventDate2 = displayMusic2.dates.start.localDate;
  const localDate2 = document.getElementById("search-result2-date");
  const actualdate2 = document.createElement("h4");
  actualdate2.innerHTML = eventDate2;
  localDate2.appendChild(actualdate2);

  // Part 3
  // event 3
  const displayMusic3 = data._embedded.events[3];
  const allMusicname3 = document.getElementById("search-result3-name");
  const eventName3 = displayMusic3.name;
  const heading3 = document.createElement("h1");
  heading3.innerHTML = eventName3;
  allMusicname3.appendChild(heading3);
  // Price 3
  const eventPrice3 = displayMusic3.priceRanges[0].min;
  const price3 = document.getElementById("search-result3-price");
  const priceActual3 = document.createElement("h3");
  priceActual3.innerHTML = eventPrice3;
  price3.appendChild(priceActual3);
  // // Date 3
  const eventDate3 = displayMusic3.dates.start.localDate;
  const localDate3 = document.getElementById("search-result3-date");
  const actualdate3 = document.createElement("h4");
  actualdate3.innerHTML = eventDate3;
  localDate3.appendChild(actualdate3);

  // Part 4
  // event 4
  const displayMusic4 = data._embedded.events[15];
  const allMusicname4 = document.getElementById("search-result4-name");
  const eventName4 = displayMusic4.name;
  const heading4 = document.createElement("h1");
  heading4.innerHTML = eventName4;
  allMusicname4.appendChild(heading4);
  // Price 3
  const eventPrice4 = displayMusic4.priceRanges[0].min;
  const price4 = document.getElementById("search-result4-price");
  const priceActual4 = document.createElement("h4");
  priceActual4.innerHTML = eventPrice4;
  price4.appendChild(priceActual4);
  // // Date 3
  const eventDate4 = displayMusic4.dates.start.localDate;
  const localDate4 = document.getElementById("search-result4-date");
  const actualdate4 = document.createElement("h4");
  actualdate4.innerHTML = eventDate4;
  localDate4.appendChild(actualdate4);
}

// function hideText() {
//   var searchtext = document.getElementById("results-container-1");
//   searchtext.style.display = "block";
// }

function getMapData() {
  fetch("https://maptiles.p.rapidapi.com/local/osm/v1/3/6/3.png", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "ff6e39ae57msh101f348ba7554fep1b4d1ejsnaf830f19baf8",
      "x-rapidapi-host": "maptiles.p.rapidapi.com",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      appendData(data).mapEl;
    })
    .catch(function (error) {
      console.log(error);
    });
}

function displayMapData(data) {
  mapEl = data.getMapData;
}

getMapData();
displayMapData();

document
  .getElementById("displayAllmusic")
  .addEventListener(
    "click",
    unhidetext11,
    unhidetext12,
    unhidetext13,
    unhidetext14
  );
document
  .getElementById("displayAllPop")
  .addEventListener(
    "click",
    unhidetext11,
    unhidetext12,
    unhidetext13,
    unhidetext14
  );
document
  .getElementById("displayAllRock")
  .addEventListener(
    "click",
    unhidetext11,
    unhidetext12,
    unhidetext13,
    unhidetext14
  );
document
  .getElementById("displayAllHiphop")
  .addEventListener(
    "click",
    unhidetext11,
    unhidetext12,
    unhidetext13,
    unhidetext14
  );
document
  .getElementById("displayAllReggae")
  .addEventListener(
    "click",
    unhidetext11,
    unhidetext12,
    unhidetext13,
    unhidetext14
  );

function unhidetext11() {
  const searchtext = document.getElementById("search-result1");
  searchtext.style.display = "block";
}
function unhidetext12() {
  const searchtext2 = document.getElementById("search-result2");
  searchtext2.style.display = "block";
}
function unhidetext13() {
  const searchtext3 = document.getElementById("search-result3");
  searchtext3.style.display = "block";
}
function unhidetext14() {
  const searchtext4 = document.getElementById("search-result4");
  searchtext4.style.display = "block";
}

