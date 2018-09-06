var btnlink = document.querySelector(".btn-search");
var popup = document.querySelector(".search-form");
var headerlink = document.querySelector(".main-header-link");
var sortingtypelink = document.querySelector(".sorting-type-link");
var btnarrowlink = document.querySelectorAll(".btn-up-svgpath, .btn-down-svgpath");

btnlink.addEventListener("click", function(event) {
	
	event.preventDefault();
	popup.classList.toggle("popup-down");
	
});													

/*  
headerlink.addEventListener("click", function(evt) {
	headerlink.classList.add("active-link");
});		

sortingtypelink.addEventListener("click", function(evt) {
	event.preventDefault();
	sortingtypelink.classList.add("active-sorting-type-link");
});		

btnarrowlink.addEventListener("click", function(evt) {
	event.preventDefault();
	btnarrowlink.classList.add("btn-arrow-svgpath-active");
});	
*/