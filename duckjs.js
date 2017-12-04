function summarize() 
{


  //Summarize all input entered from user and display 
  //in "summary-wrapper" div, which is by default hidden.

var comments = document.getElementById("comments")
//alert ( summarywrapper.innerHTML );
document.getElementById("comment_section").style.display = "inline";

var firstname = document.getElementById("firstname").value;
var lastname = document.getElementById("lastname").value;
var emailaddress = document.getElementById("emailaddress").value;
var comment = document.getElementById("comment").value;


var str = firstname + lastname + ' says:' + "<br>" + comment


comments.innerHTML = str;
}


function reset_form() 
{
  document.getElementById("comments").innerHTML = "";
document.getElementById("comment_section").style.display = "none";
}