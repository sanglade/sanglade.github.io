

function rendertime(){
	// Date code begin
	var myDate = new Date();
	var year = myDate.getYear();
	if (year < 1000){
		year +=1900;
	}

	var day = myDate.getDay();
	var month = myDate.getMonth();
	var daym = myDate.getDate();
	var dayArray = new Array("Dimanche","Lundi", "Mardi","Mercredi","Jeudi","Vendredi","Samedi")
	var monthArray = new Array("Jan", "Fev","Mar", "Avr","Mai", "Jun","Jul", "Aou","Sep", "Oct","Nov", "Dec")
	// Date code end

	//Time
	var currentTime = new Date();
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
	var s = currentTime.getSeconds();

		if(h == 24){
			h=0;
		}else if (h > 12){
			h = h - 0;
		}

		if(h <10){
			h="0" + h;
		}

		if(m <10){
			m="0" + m;
		}

		if(s <10){
			s="0" + s;
		}

	var myClock = document.getElementById("lclock");
	myClock.textContent = 	"" + dayArray[day] + ", " + daym +
							"-" + monthArray[month] +"-" + year + 
							" | " +h+ ":" +m+ ":"+s;
	myClock.innerText = 	"" + dayArray[day] + ", " + daym +
							"-" + monthArray[month] +"-" +  year + 
							" | " +h+ ":" +m+ ":"+s;

	setTimeout("rendertime()", 1000);


}

rendertime();



