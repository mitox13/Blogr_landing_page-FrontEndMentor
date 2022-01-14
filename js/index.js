const d = document
const $btnSubMenu = d.querySelectorAll(".btnSubMenu")
const $headerEventsDelegate = d.getElementById("headerEventsDelegate")
const $hamburguerIcon = d.getElementById("hamburguerIcon")
const $mainNavList = d.getElementById("mainNavList")
// console.log($btnSubMenu);

$headerEventsDelegate.classList.toggle("btnSubMenu")
$headerEventsDelegate.addEventListener("click", e => {
   if (e.target.classList.contains("btnSubMenu")) {
      if (e.target.classList.contains("open")) {
         e.target.classList.remove("open")
         return
      }
      $btnSubMenu.forEach((itemMenu) => itemMenu.classList.remove("open"))
      e.target.classList.add("open")
   }
   if (e.target.id === "hamburguerIcon") {
      $mainNavList.classList.toggle("open")
      $hamburguerIcon.src.indexOf("close") !== -1 ?
         $hamburguerIcon.src = "images/icon-hamburger.svg" :
         $hamburguerIcon.src = "images/icon-close.svg"
   }
   e.stopPropagation()
})
d.addEventListener("keyup", e => {
   if (e.key = "Escape") $btnSubMenu.forEach((itemMenu) => itemMenu.classList.remove("open"))

})