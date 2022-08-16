/* 
Navigation bar
Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon 
*/
function myFunction() {
    var x = document.getElementById("myHeader");
    if (x.className === "header") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

fetch('header.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_header");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})

/* footer stuff, basically same as above */
function myFooterFunction() {
  var x = document.getElementById("myFooter");
  if (x.className === "footer") {
    x.className += " responsive";
  } else {
    x.className = "footer";
  }
}

fetch('footer.html')
.then(res => res.text())
.then(text => {
  let oldelem = document.querySelector("script#replace_with_footer");
  let newelem = document.createElement("div");
  newelem.innerHTML = text;
  oldelem.parentNode.replaceChild(newelem,oldelem);
})
