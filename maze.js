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
			touchBoundary = true;
			touchWall(otherWalls);
			statusFunction();
		});
	}


	function touchWall(walls)
	{
		
		for (var i = 0 ; i < walls.length; i++) 
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

		document.getElementById("status").textContent = "Move your mouse over the 'S' to begin.";
	});




	//Exercise 5: On-Page Status Updates
	var end = document.getElementById("end");
	end.addEventListener("mouseover", statusFunction);

	function statusFunction()
	{
		if (touchBoundary === false)  
		{
			document.getElementById("status").textContent = "You Win! :-)";
		}
		else
		{
			document.getElementById("status").textContent = "You Lose! :'-(";
		}
	}



	//Exercise 6: Disallow Cheating
	var startGame = document.getElementById("start");
	var mazeDiv = document.getElementById("maze");

	var offsetLeft = mazeDiv.offsetLeft;
	var offsetTop = mazeDiv.offsetTop;
	var offsetHeight = mazeDiv.offsetHeight;
	var offsetWidth = mazeDiv.offsetWidth;
	


	//startGame.onclick =	startGameFunction();
	startGame.addEventListener("click", startGameFunction);

	function startGameFunction()
	{
		window.addEventListener("mousemove", function(event)
		{
			var x = event.clientX;
			var y = event.clientY;
			console.log(" " + x + " " +y); //location of mouse
			console.log(offsetLeft);
			
			if( x < offsetLeft)
			{
				touchBoundary = true;
				var wall2 = document.querySelectorAll(".boundary");
				touchWall(wall2);
				document.getElementById("status").textContent = "You Lose! :'-(";
			}
			
		});
	}
	


};


