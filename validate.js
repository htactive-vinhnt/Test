function validate() {
  var name = document.forms["contactForm"]["i-name"].value;
  var mail = document.forms["contactForm"]["i-email"].value;
  var subj = document.forms["contactForm"]["i-subject"].value;
  var message = document.forms["contactForm"]["i-message"].value;
  if (name == "") {
    alert("Tên không được để trống");
  }
  if (mail == "") {
    alert("mail không được để trống");
    
  }
  if (subj == "") {
    alert("subj không được để trống");
  }
  if (message == "") {
    alert("message không được để trống");
  }
}
