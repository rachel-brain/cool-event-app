// Gets all music events
// function getAllmusic() {
//   fetch(
//     "https://app.ticketmaster.com/discovery/v2/events.json?Code=AU&marketId=305&classificationName=" +
//       "&" +
//       APITick
//   )
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// }

//Fetch music events pop in melbourne only
// function getallPop() {
//   fetch(
//     "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Pop&countryCode=AU&marketId=305&apikey=Adw3d81D9BpgpPWZC0f4HbYja3X6P9Vv"
//   )
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// }

// Fetch music events with rock genre id
// function getallRock() {
//   fetch(
//     "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Music&genreId=KnvZfZ7vAeA&countryCode=AU&marketId=305&apikey=Adw3d81D9BpgpPWZC0f4HbYja3X6P9Vv"
//   )
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// }

// // Fetch music events with reggae genre id
// function getallReaggae() {
//   fetch(
//     "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Music&genreId=KnvZfZ7vAv1&countryCode=AU&marketId=305&" +
//       APITick
//   )
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// }

//Fetch Hip hop
// function getallHipHop() {
//   fetch(
//     "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Music&genreId=KnvZfZ7vAv1&countryCode=AU&marketId=305&apikey=Adw3d81D9BpgpPWZC0f4HbYja3X6P9Vv"
//   )
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// }

// fetch("https://app.ticketmaster.com/discovery/v2/events.json?genreId=KnvZfZ7vAeA&countryCode=AU&marketId=305&apikey=Adw3d81D9BpgpPWZC0f4HbYja3X6P9Vv").then(function (res) {
//     return res.json()
// }).then(function (data) {
//     console.log(data)
// })

// fetch("https://app.ticketmaster.com/discovery/v2/classifications.json?apikey=Adw3d81D9BpgpPWZC0f4HbYja3X6P9Vv",).then(function (res) {
//     return res.json()
// }).then(function (data) {
//     console.log(data)
// })

// /* When the user clicks on the button, toggle between hiding and showing the Music genre dropdown content */
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown if the user clicks outside of it
// window.onclick = function (event) {
//   if (!event.target.matches(".dropbtn")) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };

// // Store
// localStorage.setItem("myDropdown", "dropdown-content");
// // Retrieve
// document.getElementById("result").innerHTML = localStorage.getItem(
//   "myDropdown"
// );

// getAllMusicbtn.addEventListener("click", getAllmusic())

// document.getElementById('getAllMusicbtn').addEventListener('click', getAllmusic);
// document.getElementById("getallmusic").addEventListener("click", getAllmusic);

// Gets all music events
// function getAllmusic() {
//     fetch("https://app.ticketmaster.com/discovery/v2/events.json?Code=AU&marketId=305&classificationName=" + "&" + APITick).then(function (res) {
//         return res.json()
//     }).then(function (data) {
//         console.log(data)
//     })

// }

// button.addEventListener('click', function getAllmusic() {
//     fetch("https://app.ticketmaster.com/discovery/v2/events.json?Code=AU&marketId=305&classificationName=" + searchString + "&" + APITick).then(function (res) {
//         return res.json()
//     }).then(function (data) {
//         console.log(data)
//     })

// }

// Function needed:
// Search bar with limited selections, ie date, genre or location
// Make a call based on searchtype ( date or genre)
// Make a functions for each event type??
// Display results in cards below
// Button to add a certain result to calander
// function to add saved events to local storage
// function to load saved events
// button to clear saved events?
