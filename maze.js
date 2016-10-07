window.onload=function()
{
	var touchBoundary = false;

	//Exercise 1
	var boundary = document.getElementById("boundary1");
	boundary.addEventListener("mouseover", function()
	{
		this.setAttribute("class","boundary youlose");
		touchBoundary = true;
	});


	//Exercise 2
	var otherWalls = document.querySelectorAll(".boundary");
	for (var i = 0; i < otherWalls.length; i++) 
	{
		otherWalls[i].addEventListener("mouseover", function()
		{
			touchWall(otherWalls);
			touchBoundary = true;
		});
	}


	function touchWall(walls)
	{
		for (var i = walls.length - 1; i >= 0; i--) 
		{
			walls[i].setAttribute("class", "boundary youlose");
		}
	}



	//Exercise 3
	document.getElementById("end").addEventListener("mouseover",mouseOverEnd);
	function mouseOverEnd()
	{
		if (touchBoundary === false)
		{
			alert("You Win");
		}		
	}



	//Exercise 4
	var resetVariable = document.getElementById("start");
	resetVariable.addEventListener("click", function()
	{
		touchBoundary = false;
		var resetWalls = document.querySelectorAll(".boundary");
		for (var i = 0; i < resetWalls.length; i++) 
		{
			reset(resetWalls);
		}

		function reset(walls)
		{
			for (var i = walls.length - 1; i >= 0; i--) 
			{
				walls[i].setAttribute("class", "boundary");
			}
		}
	});


	

};


