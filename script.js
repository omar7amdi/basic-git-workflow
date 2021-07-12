document.addEventListener("DOMContentLoaded",function(event){
//Get refrence to header object
	let myHeader = document.getElementById("header-id")
//wait 3 second, the display the header
	setTimeout(()=>{
	myHeader.classList.remove("hidden");
	},3000)
});
