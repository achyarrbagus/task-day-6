function formValidation(yourName, yourEmail, yourNumber, selectCarrer, descriptionMail) {
  if (yourName == "") {
    alert("harap masukan nama");
  } else if (yourEmail == "") {
    alert("harap masukan email");
  } else if (yourNumber == "") {
    alert("harap masukan nomor");
  } else if (selectCarrer == "") {
    alert("harap masukan subject anda");
  } else if (descriptionMail == "") {
    alert("harap masukan pesan anda");
  } else {
    let emailDefault = "uzumaki-akbar@gmail.com";
    let sendEmail = document.createElement("a");
    sendEmail.href = `mailto:${emailDefault}? subject = ${selectCarrer} &body=hallo nama saya ${yourName} dan ${descriptionMail}`;
    sendEmail.click();
  }
}

function contactMe(event) {
  event.pravenDefault();
  let yourName = document.getElementById("yourName").value;
  let yourEmail = document.getElementById("yourEmail").value;
  let yourNumber = document.getElementById("yourNumber").value;
  let selectCarrer = document.getElementById("selectCarrer").value;
  let descriptionMail = document.getElementById("descriptionMail").value;
  //
  formValidation(yourName, yourEmail, yourNumber, selectCarrer, descriptionMail);
}
console.log("hello world");
