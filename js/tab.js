var tabs = document.querySelectorAll(".tabs_wrap ul li");
var males = document.querySelectorAll(".male");
var females = document.querySelectorAll(".female");
var trans = document.querySelectorAll(".tran");
var all = document.querySelectorAll(".item_wrap");

tabs.forEach((tab)=>{
	tab.addEventListener("click", ()=>{
		tabs.forEach((tab)=>{
			tab.classList.remove("active");
		})
		tab.classList.add("active");
		var tabval = tab.getAttribute("data-tabs");

		all.forEach((item)=>{
			item.style.display = "none";
		})

		if(tabval == "male"){
			all.forEach((item)=>{
				item.style.display = "block";
			})
		}
		else if(tabval == "female"){
			females.forEach((female)=>{
				female.style.display = "block";
			})
		}
		else{
			trans.forEach((tran)=>{
				tran.style.display = "block";
			})
		}

	})
})