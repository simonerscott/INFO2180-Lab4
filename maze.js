window.onload=function()
{
	var touchBoundary = false;

	//Exercise 1: Single Boundary Turns Red
	var boundary = document.getElementById("boundary1");
	boundary.addEventListener("mouseover", function()
	{
		this.setAttribute("class","boundary youlose");
		touchBoundary = true;
	});



	//Exercise 2: All Boundaries Glow Red on Hover
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



	//Exercise 3: Alerts on Successful Completion of Maze
	/*document.getElementById("end").addEventListener("mouseover",mouseOverEnd);
	function mouseOverEnd()
	{
		if (touchBoundary === false)
			{
				alert("You Win");
			}
	}*/


	
	//Exercise 4: Restartable Maze
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



	//Exercise 5: On-Page Status Updates
	var x = document.querySelectorAll(".boundary");
	var y = document.getElementById("end");

	//x.addEventListener("mouseover", status);
	y.addEventListener("mouseover", status);


	for (var i = 0; i < x.length; i++) 
	{
		if (x[i].className === "youlose")
		{
			touchBoundary = true;
		}
	}

	function status()
	{
		if (touchBoundary === false ) 
		{
			document.getElementById("status").textContent = "You Win! :-)";
		}
		else
		{
			document.getElementById("status").textContent = "You Lose! :'-(";
		}
	}





};


