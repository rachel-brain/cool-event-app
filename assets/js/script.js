var APITick = "apikey=Adw3d81D9BpgpPWZC0f4HbYja3X6P9Vv";
//https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=Adw3d81D9BpgpPWZC0f4HbYja3X6P9Vv

var searchString = "Reggae"

// Fetch for MUSIC events in MELBOURNE with searchString added 
fetch("https://app.ticketmaster.com/discovery/v2/events.json?Code=AU&marketId=305&classificationName=" + searchString + "&" + APITick).then(function (res) {
    return res.json()
}).then(function (data) {
    console.log(data)
})


// Fetch events in melbourne
// fetch("https://app.ticketmaster.com/discovery/v2/events.json?countryCode=AU&marketId=305&apikey=Adw3d81D9BpgpPWZC0f4HbYja3X6P9Vv").then(function (res) {
//     return res.json()
// }).then(function (data) {
//     console.log(data)
// })

//Fetch music events pop in melbourne only
// fetch("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Pop&countryCode=AU&marketId=305&apikey=Adw3d81D9BpgpPWZC0f4HbYja3X6P9Vv").then(function (res) {
//     return res.json()
// }).then(function (data) {
//     console.log(data)
// })

// Fetch music events with rock genre id
// fetch("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Music&genreId=KnvZfZ7vAeA&countryCode=AU&marketId=305&apikey=Adw3d81D9BpgpPWZC0f4HbYja3X6P9Vv").then(function (res) {
//     return res.json()
// }).then(function (data) {
//     console.log(data)
// })

// Fetch music events with reggae genre id
// fetch("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=Music&genreId=KnvZfZ7vAed&countryCode=AU&marketId=305&apikey=Adw3d81D9BpgpPWZC0f4HbYja3X6P9Vv").then(function (res) {
//     return res.json()
// }).then(function (data) {
//     console.log(data)
// })



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








// Function needed:
// Search bar with limited selections, ie date, genre or location
// Make a call based on searchtype ( date or genre)
// Make a functions for each event type??
// Display results in cards below
// Button to add a certain result to calander 
// function to add saved events to local storage
// function to load saved events
// button to clear saved events?



/* When the user clicks on the button, toggle between hiding and showing the Music genre dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Store
localStorage.setItem("myDropdown", "dropdown-content");
// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("myDropdown");