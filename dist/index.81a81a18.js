mfbs=document.querySelectorAll(".mfb"),mfbs.forEach((e=>{e.setAttribute("aria-expanded",!1),e.classList.add("is-hidden")})),document.addEventListener("click",(function(e){e.target.matches("mark")&&(e.target.parentElement.nextElementSibling.classList.toggle("is-hidden"),e.target.parentElement.nextElementSibling.classList.contains("is-hidden")?e.target.parentElement.nextElementSibling.setAttribute("aria-expanded",!1):e.target.parentElement.nextElementSibling.setAttribute("aria-expanded",!0))}));
//# sourceMappingURL=index.81a81a18.js.map
