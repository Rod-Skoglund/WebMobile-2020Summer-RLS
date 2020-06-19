/******************************************************************************/
/* Class - Web and Mobile Programming                                         */
/* Semester / School - Summer 2020 / UMKC                                     */
/* Assignment: Web-Lesson4                                                    */
/* Author: Rod Skoglund                                                       */
/* File: script.js for the GetHub User request task                           */
/******************************************************************************/
function getGithubInfo(user) {

    // console.log("gethubInfo");
    // call the GitHub api with the user's input and retrieve the requested info
    $.get("https://api.github.com/search/users?q=" + user + "&page=1&per_page=1", {
        headers: {
            "user": "Rod-Skoglund"
        }
    })
    .done(showUser)
    // .fail(noSuchUser);
}

function showUser(user) {
    // Clear the h2 and the two div elements in the div #profile.
    $("h2").empty();
    $(".avatar").empty();
    $(".information").empty();
    console.log("showUser");
    console.log(user);
    // console.log(user.items[0].login);
    // console.log(user.items[0].html_url);

    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content

    //Test to see if any results were returned from the GitHub API Request
    if (user.total_count > 0) {
        // At least one element was found - display the first element that was returned from the GitHub API
        $("h2").append(user.items[0].login);
        $(".avatar").html("<img src=" + user.items[0].avatar_url + ">");
        $(".information").append(user.items[0].html_url);
    } else {
        // No user info was returned - call the routine to inform the user
        noSuchUser()
    }
    // $(".information").append(user.items[0].login);
    // document.getElementsByClassName(".avatar"). .innerHTML("<img src=" + user.items[0].avatar_url) + ">");

}

function noSuchUser() {
    //3. set the elements such that a suitable message is displayed
    // console.log("noSuchUser");
    $("h2").append("No Such User - Try again");

}

// Test key presses entered by the user nd respond when the user hits enter
$(document).ready(function () {
    $(document).on('keypress', '#username', function (e) {
        console.log("document.ready")
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            // console.log("e.which == 13");
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            // call the module to process the users input
            getGithubInfo(username);
        }
    })
});
