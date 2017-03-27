for(var i = 0; i<10; i++){
  document.getElementById("banner");
}
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
      var recommendations = JSON.parse(this.responseText);
      console.log("here are the the old" + recommendations[0].name + recommendations[0].text);
      for (var i = 0; i < recommendations.length; i++) {
                // To keep our code clean, we created a function to turn a
                // review object into HTML and add it to the page
        renderRec(recommendations[i]);
      }
  }
  else if(this.readyState == 4) {
    console.log(this.responseText);
  }
};
xhttp.open("GET", "https://cse104.kraigh.com/recommendations?api_key=5ee45d0da4ea2342fc9bc78085c7a0185abddb84375477d0946115a161272965", true);
xhttp.send();

document.getElementById("form").addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var comment = document.getElementById("comment").value;
  var api_key = "5ee45d0da4ea2342fc9bc78085c7a0185abddb84375477d0946115a161272965";

  // Initalize AJAX Request
  var xhttp2 = new XMLHttpRequest();
  // Response handler
  xhttp2.onreadystatechange = function() {
      // Wait for readyState = 4
      if (this.readyState == 4 && this.status == 200) {
          // If this.status == 200, good reponse from server
          var recommendation = JSON.parse(this.responseText);

          renderRec(recommendation);

          document.getElementById("name").value = '';
          document.getElementById("comment").value = '';

      } else if (this.readyState == 4) {
          // this.status !== 200, error from server
          console.log(this.responseText);
      }
  };
  xhttp2.open("POST", "https://cse104.kraigh.com/recommendations", true);
  xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp2.send("api_key="+api_key+"&name="+name+"&text="+comment);
  }

  function renderRec(recommendation) {
     console.log("Rendering rec");
     // Create a new li for this review
     var recItem = document.createElement("li");
     // Set two classes on the new li itetm
     recItem.setAttribute("class", "list-group-item row");

     // Create div for name and rating
     var nameDiv = document.createElement("div");
     // Add classes to div
     nameDiv.setAttribute("class", "col-md-3 review-name");
     // Set innerHTML of div to reviewer's name, and HTML for stars rating
     nameDiv.innerHTML = recommendation.name;
     // Add nameDiv to new review li
     recItem.appendChild(nameDiv);

     // Create div for reviewer's comments
     var commentsDiv = document.createElement("div");
     // Add classes to div
     commentsDiv.setAttribute("class", "col-md-4 review-comments");
     // Set innerHTML of div to reviewer's comments
     commentsDiv.innerHTML = '"'+recommendation.text+'"';
     // Add commentsDiv to new review li
     recItem.appendChild(commentsDiv);

     // Add review li to reviews list ul
     document.getElementById("rec-list").appendChild(recItem);
   }

   $(function() {
    $('.rsABlock img.info').click(function(e) {
        e.preventDefault();
        $('.caption-background').toggleClass('hidden');
    });
});
$(function() {
 $('.rsABlock1 img.info1').click(function(e) {
     e.preventDefault();
     $('.caption-background1').toggleClass('hidden');
 });
});

$(function() {
 $('.rsABlock2 img.info2').click(function(e) {
     e.preventDefault();
     $('.caption-background2').toggleClass('hidden');
 });
});

$(function() {
 $('.rsABlock3 img.info3').click(function(e) {
     e.preventDefault();
     $('.caption-background3').toggleClass('hidden');
 });
});
