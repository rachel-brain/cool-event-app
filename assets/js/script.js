var APITick = "Adw3d81D9BpgpPWZC0f4HbYja3X6P9Vv";
//https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=Adw3d81D9BpgpPWZC0f4HbYja3X6P9Vv

$.ajax({
    type: "GET",
    url: "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=AU&marketId=305&apikey=Adw3d81D9BpgpPWZC0f4HbYja3X6P9Vv",
    async: true,
    dataType: "json",
    success: function (json) {
        console.log(json);
        // Parse the response.
        // Do other things.
    },
    error: function (xhr, status, err) {
        // This time, we do not end up here!
    }
});
// Function to api call based on search string
//function searchEvent() {

    //var searchUrl = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=AU&marketId=305" + seachString + APITick;

   // $.ajax({
       // url: searchUrl,
      //  method: "GET"
      //async: true,
       // dataType: "json",
       // success: function (json) {
           // console.log(json);
            // Parse the response.
            // Do other things.
        //},
        //error: function (xhr, status, err) {
            // This time, we do not end up here!
        //}
   // });





// Function needed:
// Search bar with limited selections, ie date, genre or location
// Make a call based on searchtype ( date or genre)
// Make a functions for each event type??
// Display results in cards below
// Button to add a certain result to calander 
// function to add saved events to local storage
// function to load saved events
// button to clear saved events?