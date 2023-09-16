//this is from soft author
//https://softauthor.com/accordion-menu-in-vanilla-javascript/
//get the elements 

      function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      } 

// When the user clicks on the button, scroll to the top of the document
function openaccordion(header_id) {
  let content = document.getElementById(`accord-content-${header_id}`)
  content.style.display = content.style.display == "block" ? "none" : "block";
}