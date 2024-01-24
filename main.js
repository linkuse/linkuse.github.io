function giveLink() {
	var ins = document.getElementById("oglink").value;
	const basstr = "https://drive.google.com/uc?id=";
	const linkid = ins.split("/")[5]
	document.getElementById("result").innerHTML = basstr + linkid + "&export=download"
	
}
function copyLink() {
	var ins = document.getElementById("oglink").value;
	const basstr = "https://drive.google.com/uc?id=";
	const linkid = ins.split("/")[5]
	navigator.clipboard.writeText(basstr + linkid + "&export=download")
}
function openSource() {
	var website = "view-source:" + document.getElementById("weburl").value
	alert(website);
	window.open(website)
}
