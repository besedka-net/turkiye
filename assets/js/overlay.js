function showPopup(img) {
	var overlay = document.getElementById("overlay");
	var popupImg = overlay.getElementsByTagName("img")[0];
	popupImg.src = img.src;
	overlay.style.display = "block";
}

function hidePopup() {
	var overlay = document.getElementById("overlay");
	overlay.style.display = "none";
}