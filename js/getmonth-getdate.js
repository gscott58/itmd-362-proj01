	function myFunction()
	{
		var d = new Date();
		var n = d.getMonth();
		var month_name = "";
		var month_day = "";
		
		if (n == 0)
				month_name = "January";
		else if (n == 1)
				month_name = "February";
		else if (n == 2)
				month_name = "March";
		else if (n == 3)
				month_name = "April";
		else if (n == 4)
				month_name = "May";
		else if (n == 5)
				month_name = "June";
		else if (n == 6)
				month_name = "July";
		else if (n == 7)
				month_name = "August";
		else if (n == 8)
				month_name = "September";
		else if (n == 9)
				month_name = "October";
		else if (n == 10)
				month_name = "November";
		else if (n == 11)
				month_name = "December";

		month_day = d.getDate();
		document.getElementById("monthname").innerHTML  = month_name;
		document.getElementById("dayofmonth").innerHTML = month_day;
	}
							
myFunction();