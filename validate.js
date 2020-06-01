function validate() {
  var Iname = document.forms["contactForm"]["i-name"].value;
  var mail = document.forms["contactForm"]["i-email"].value;
  var subj = document.forms["contactForm"]["i-subject"].value;
  var message = document.forms["contactForm"]["i-message"].value;

  if (Iname == "") {
    alert("name không được để trống");
  }
  if (mail == "") {
    alert("mail không được để trống");
  }
  if (subj == "") {
    alert("subj không được để trống");
  }
  if (message == "") {
    alert("message không được để trống");
  } else {
    document.getElementById("showName").innerHTML = Iname;
    document.getElementById("showEmail").innerHTML = mail;
    document.getElementById("showSubject").innerHTML = subj;
    document.getElementById("showMessage").innerHTML = message;
  }
}
