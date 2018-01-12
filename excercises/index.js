$( document ).ready(function() {
	// alert("hi");

	// 1). Write a program that prints ‘Hello World’ to the screen.
	$("#btn1").click(function(){
		$("#greet1").text("Hello World");
	})

// ------------------------------------------------------------------------
	// 2) Write a program that asks the user for her name and greets her with her name.
	$("#btn2").click(function(){
		var name = $("#exc2").val().toUpperCase();
		 $("#greet2").text("Hello" + " " + name);
	})
	// --------------------------------------------------------------

	// 3). Modify the previous program such that only the users Alice and Bob are greeted with their names.
	$("#btn3").click(function(){
		// console.log("clicked");
		var name = $("#exc3").val().toUpperCase();
		if ((name == "BOB") || (name == "ALICE")) {
			 $("#greet3").text("Hello" + " " + name);
		}
		else
		{
			$("#greet3").text("Hello friend");
		}
	})
// --------------------------------------------------------------------------
// 4). Write a program that asks the user for a number n and prints the sum of the numbers 1 to n
	
	$("#btn4").click(function(){
		// console.log("clicked");
		var num = $("#exc4").val();
		var iNum = parseInt(num);
		var sum = 0;
		for(var i =0 ; i <= iNum; i++){
			sum = i + sum
			$("#showNumber4").text(sum);
		}
	})

// ----------------------------------------------------------------------------------
//  5). Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17
	$("#btn5").click(function()
	{
		// console.log("clicked");
		var num = $("#exc5").val();
		var iNum = parseInt(num);
		var sum = 0;

		for (var i=0; i<=iNum; i++)
		{
			if ((i % 3 === 0) || (i % 5 === 0) && (i < 17))
			{
				sum = sum + i;
				$("#showNumber5").text(sum);	
			} 
		}
	})
// --------------------------------------------------------------------------------------------------------------------------------
//  6). Write a program that asks the user for a number n and gives him the possibility to choose between 
// computing the sum and / computing the product of 1,…,n.

	$("#btnSum6").click(function()
	{
		var num = $("#exc6").val();
		var iNum = parseInt(num);
		var sum = 0;
		for(var i=1; i<=iNum; i++)
		{
			sum=sum+i
		}
		$("#showNumberSum6").text(sum);
	});	

	$("#btnProduct6").click(function()
	{
		var num = $("#exc6").val();
		var iNum = parseInt(num);
		var product = 1;
		for(var i=1; i<=iNum; i++)
		{
			product=product*i
		}
		$("#showNumberProduct6").text(product);
	});
	// ---------------------------------------------------------------------------------

	//  7). Write a program that prints a multiplication table for numbers up to 12.
	$("#btnProduct7").click(function()
	{
		$("#showNumberProduct7").empty();
		var num = $("#exc7").val();
		var iNum = parseInt(num);
		for(var i=1; i<=12; i++)
		{
			var ans = iNum*i
			$("#number7").text( iNum );
			$("#showNumberProduct7").append("<div>" + iNum + " " +  '*' + " " +  i  + " " + '='  + " " +  ans +"</div>");
			
		}
	});

	$("#clear7").click(function(){
    	$("#showNumberProduct7").empty();
    });
// ---------------------------------------------------------------------------------------
	
// 7a). Write a program that prints a multiplication table for numbers up to 12 for Even numbers.
	$("#btnProduct7a").click(function()
	{
		$("#showNumberProduct7a").empty();
		var num = $("#exc7a").val();
		var iNum = parseInt(num);
		if(iNum % 2 === 0)
		{
			for(var i=1; i<=12; i++)
			{
				var ans = iNum*i
				$("#number7a").text( iNum );
				$("#showNumberProduct7a").append("<div>&nbsp;" + iNum + " " +  '*' + " " +  i  + " " + '='  + " " +  ans +"</div>");
				
			}
		}
		else
		{
			$("#number7a").text( iNum + " is an odd number" );
			$("#showNumberProduct7a").text("NO results to show!");
		}		
	});

	$("#clear8").click(function(){
    	$("#showNumberProduct7a").empty();
    });
// --------------------------------------------------		// 

/*8. Write a program that prints all prime numbers. (Note: if your programming language does not support arbitrary size numbers, printing all primes up to the largest number
you can easily represent is fine too.)*/

	$("#exc8").click(function()
	{
		
		for(var i=0; i<=100; i++)
		{
			var num ;
			if((num % 1 === 0) || (num % num === 0))

			{
				// var ans = 
				$("#showPrimeNumber8").append("<div>" + num + "</div>");
			}
		}
	});
// ----------------------------------------------------------------------------------

// 9. Write a guessing game where the user has to guess a secret number. After every guess the program tells the user whether their number was too large or too small. At
// the end the number of tries needed should be printed. I counts only as one try if they input the same number multiple times consecutively.
	
	var randNum9 = Math.floor((Math.random() * 10) + 1);
	var counter9 =0;
	$("#game9").click(function(){
	
	// guess counter
	counter9=counter9+1;	
	$("#counter9").html(counter9);

	// if same number hit multiple times count just 1 time

	// 
	console.log(randNum9);
	var num = $("#exc9").val();
	var iNum = parseInt(num); 

		if (iNum < randNum9)
		{
			$("#showGame9").text("your  number is smaller than the Correct number");
		}
		
		else if (iNum > randNum9)
		{
			$("#showGame9").text("your  number is larger than the Correct number");
		}
		
		else
		{
			$("#showGame9").text("Correct Number");
		}

	// var counter = counter+i;
	});
// ----------------------------------------------------------------------------------------------------
	// 10. Write a program that prints the next 20 leap years.

	$("#exc10").click(function(){
		// returns the current year
		var currentYear = (new Date).getFullYear();
		console.log(currentYear);
		
		// loop for 20 years
		for(var i=currentYear; i<currentYear+20; i++)
		{
			// if (i % 4 === 0)
			if(((i%4 === 0) && (i%100 !==0)) || ((i%100 === 0) && (i%400 === 0)))
			{
				var leapYear = i;
				$("#leapYear10").append(leapYear+ ", "+ "  ");
				console.log(leapYear);
			}	
		}
	});
// -------------------------------------------------------------------------------------------

}); // $ doc ready
