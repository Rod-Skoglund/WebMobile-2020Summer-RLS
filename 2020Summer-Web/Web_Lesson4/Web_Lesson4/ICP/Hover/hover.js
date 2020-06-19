/******************************************************************************/
/* Class - Web and Mobile Programming                                         */
/* Semester / School - Summer 2020 / UMKC                                     */
/* Assignment: Web-Lesson4                                                    */
/* Author: Rod Skoglund                                                       */
/* File: hover.js for the Hover Image task                                    */
/******************************************************************************/
function upDate(previewPic) {
    /* In this function you should
       1) change the url for the background image of the div with the id = "image"
       to the source file of the preview image

       2) Change the text  of the div with the id = "image"
       to the alt text of the preview image
       */

    /* Set the background image and the text to match the item you are        */
    /* hovering over (passed in as an argument)                               */
    document.getElementById("image").innerHTML = `${previewPic.alt}`;
    document.getElementById("image").style.backgroundImage = `url(${previewPic.src})`;
}

function unDo() {
    /* In this function you should
   1) Update the url for the background image of the div with the id = "image"
   back to the orginal-image.  You can use the css code to see what that original URL was

   2) Change the text  of the div with the id = "image"
   back to the original text.  You can use the html code to see what that original text was
   */

    /* Reset the background image and the text back to the initial settings   */
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
    document.getElementById("image").style.backgroundImage = `url('')`;

}
