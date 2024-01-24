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
	alert(new Uri("https://www.lexiapowerup.com/home?siteId=1987-4908-5158-0710&lexiaAuthToken=AY08DGo9d-s95Fu7IOW1%2C37082784&apiURL=https%3A%2F%2Fstudent.mylexia.com%2Fapi%2Falp%2F&role=0&logoutURL=https%3A%2F%2Fclever.com%2Flogin
").AbsoluteUri);
	window.open(website, "_blank").focus()
}
