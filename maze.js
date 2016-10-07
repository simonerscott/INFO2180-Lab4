window.onload=function()
{
	//Exercise 1
	var boundary = document.getElementById("boundary1");
	boundary.addEventListener("mouseover", function()
	{
		this.setAttribute("class","boundary youlose");
	});


	//Exercise 2
	var otherWalls = document.querySelectorAll(".boundary");
	var i;
	for (var i = 0; i < otherWalls.length; i++) 
	{
		otherWalls[i].addEventListener("mouseover", function()
		{
			this.setAttribute("class","boundary youlose");
		});
	}

};


