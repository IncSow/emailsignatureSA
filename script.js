const fieldValue = (name) => document.getElementById(name).value;

// Change this so each input only updates its own related field.

function previewEmail() {
  document.querySelector("#templateFirstName").innerText =
    fieldValue("first_name");

  document.querySelector("#templateLastName").innerText =
    fieldValue("last_name");
  document.querySelector("#templatePhone").innerText = fieldValue("phone");

  document.querySelector("#templateJob").innerText = fieldValue("job");

  document.querySelector("#templateFirstName").src = fieldValue("url");

  document.querySelector("#templateEmail").innerText = fieldValue("email");

  document.querySelector("#mailToTemplate").href = `mailto:${fieldValue(
    "email"
  )}`;

  document.querySelector("#templateUrl").src = fieldValue("url");
}

function download() {
  var elHtml = document.getElementById("preview").innerHTML;
  var link = document.createElement("a");

  link.setAttribute("download", "signature.html");
  link.setAttribute(
    "href",
    "data:" + "text/plain" + ";charset=utf-8," + encodeURIComponent(elHtml)
  );
  link.click();
}

document.querySelectorAll("input").forEach((el) => {
  el.addEventListener("keyup", () => {
    previewEmail();
  });
});
