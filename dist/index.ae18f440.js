document.addEventListener("DOMContentLoaded",(function(){function e(){document.querySelector("#none").checked?(document.body.setAttribute("class",""),document.body.classList.add("show-none"),console.log("ingenting")):document.querySelector("#some").checked?(document.body.setAttribute("class",""),document.body.classList.add("show-some"),console.log("litt")):(document.body.setAttribute("class",""),document.body.classList.add("show-all"),console.log("mye"))}e(),mfbs=document.querySelectorAll(".mfb"),mfbs.forEach((function(e){e.setAttribute("aria-expanded",!1),e.classList.add("is-hidden")})),document.addEventListener("input",e),document.addEventListener("click",(function(e){e.target.matches("mark")&&(e.target.parentElement.nextElementSibling.classList.toggle("is-hidden"),e.target.parentElement.nextElementSibling.classList.contains("is-hidden")?e.target.parentElement.nextElementSibling.setAttribute("aria-expanded",!1):e.target.parentElement.nextElementSibling.setAttribute("aria-expanded",!0))}))}));
//# sourceMappingURL=index.ae18f440.js.map
