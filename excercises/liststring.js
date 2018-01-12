$( document ).ready(function() {
	// alert("hi");

	// getting an arraay of 5 
	// Can also be done like this if array has been initialised. 
	// var arrayList=["0","0","0","0","0"]
	// for (i=0; i<5; i++)
	// {
	// 	var a = prompt("Please pick a number between 0 to 100");
	// 	console.log(a);
	// 	arrayList [i] =a;  here every initialized value is replaced with 'a'
	// }
	// console.log(arrList);
	// 	console.log(a);

	$("#exc12a").click(function()
	{
		$("#array12a").empty();
		$("#largestNumber12a").empty();

		arrayList= [];
		for(i=0; i<5; i++)
		{
			var a = prompt("Please pick a number between 0 to 10000");
			a= parseInt(a);
			(arrayList).push(a);
		}
		$("#array12a").text(arrayList);
		//  Finding the largest number
		var largestNum=0;
		for(i=0; i<=5; i++)
		{
			if(arrayList[i] > largestNum)
			{
				largestNum = arrayList[i];
			}
		}
			$("#largestNumber12a").text(largestNum);
	});
// -------------------------------------------------------------------------------------------

	// 1)b. Largest number from Multiple Arrays.
	$("#exc12b").click(function()
	{

		var largestOfFour12b = ([ [1,34,77,83,63], [11,45,73, 68, 0, 878, 989, 89, 5], [6,10,88,6788, 7223], [101, 233,647,87, 43] ]);
		
		for(var i=0; i<largestOfFour12b.length; i++)
		{	
			var largestNum12b = 0;
			for(var j=0; j<largestOfFour12b[i].length; j++)
			{
				if(largestOfFour12b[i][j] > largestNum12b)
				{
					largestNum12b = largestOfFour12b[i][j];
				}
			}
			$("#largestNum12b").append(largestNum12b + ", "  );
		}


		arr = $("#largestNum12b").html().split(",");
		var largestNum12b = 0;
		for(var k=0; k<arr.length; k++)
		{
			if(parseInt(arr[k]) > largestNum12b)
			{
				largestNum12b = parseInt(arr[k]);
			}
		}
		$("#mainLargestNumber12b").append(largestNum12b);

		//tabish
		// var largestOfFour = ([ [1,34,77,83,63], [11,45,73, 68, 0, 878, 989, 89, 5], [6,10,88,6788, 7223], [101, 233,647,87, 43] ]);
		// for(var i=0; i<largestOfFour.length; i++)
		// {	
		// 	//console.log (largestOfFour[i]);
		// 	var largestJ = 0;
		// 	for(var j=0; j<largestOfFour[i].length; j++)
		// 	{	
		// 		//console.log (largestOfFour[i][j]);
		// 		if (largestJ < largestOfFour[i][j]){
		// 			largestJ = largestOfFour[i][j];
		// 		}
		// 	}
		// 	console.log("largestJ = " + largestJ);
		// }
	});

// console.log(arr[i]); // this gives list of arrays
// console.log(arr[i][j]); // this gives list of numbers in all arrays
// -------------------------------------------------------------------------------------------

// 13. Write function that reverses a list, preferably in place.
	var randNum13 = "";
	var numbersArr13 = [];
	$("#exc13").click(function()
	{
		$("#array13").empty();
		$("#reverseList13").empty();
		for(var i=0; i<10; i++)
		{
			randNum13 = Math.floor((Math.random() * 100) + 1);		
			console.log(randNum13);
			
			// //way 1
			// var comma = "";
			// if (i<9){
			// 	comma = ",";
			// }
			// else{
			// 	comma = "";
			// }
			// $("#array13").append(randNum13 + comma );
			
			// //way 2
			// var comma = ((i<9)?",":"");
			// $("#array13").append(randNum13 + comma );

			//way 3
			$("#array13").append(randNum13 + ((i<9)?", ":"") );
		}
	});
	
	$("#exc13a").click(function(){

		numbersArr13 = $("#array13").html().split(",");	
		console.log("numbersArr.length = " + numbersArr13.length);
	
		for(i=numbersArr13.length-1;i>=0;i--){
			console.log(numbersArr13[i]);
		}

		console.log("Tab Tariqa");
		for(i=0;i<numbersArr13.length;i++){

			//console.log(numbersArr[i]);
			var	j = (numbersArr13.length-1) - i
			console.log(numbersArr13[j]);
			$("#reverseList13").append(numbersArr13[j] + ((i<9)?", ":"") );
		}
	});
// -------------------------------------------------------	// 

	// 14. Write a function that checks whether an element occurs in a list.       pending




// --------------------------------------------------------
// 15. Write a function that returns the elements on odd positions and even positions in a list.
	var arr15= ["Jessica", "John", "Bob", "Ann", "Sam", "Noah", "Kelly", "Peter", "Patrick", "Kim", "Leam", "Jack", "Wez", "Nal", "Tim", "Matt", "Liz", "Ty", "Bestie", "Haily", "Cammy", "Diz", "Yeao", "Trey"];
	$("#exc15a").click(function()
	{

		console.log('=========');
		console.log('case 1');
		console.log('=========');
		for(i=0;i<arr15.length;i++)
		{
		 	console.log(arr15[i]);
			i++
		}

		console.log('=========');
		console.log('case 2');
		console.log('=========');
		for(i=0;i<arr15.length;i++)
		{
			var remainder15 = (i%2);
			//console.log(i + " =>" + remainder);
			if(remainder15==0)
			{
			 	console.log(arr15[i]);
			}
		}

		console.log('=========');
		console.log('case 3');
		console.log('=========');
		var pulled = false;
		for(i=0;i<arr15.length;i++)
		{

		 	if (pulled == true)
		 	{
		 		pulled = false;
		 	} 
		 	else 
		 	{
		 		pulled = true;
		 	};

			if(pulled==true)
			{
		 		console.log(arr15[i]);
		 	}
		}

		console.log('=========');
		console.log('case 4');
		console.log('=========');
		var pulled = false;




		for(i=0;i<arr15.length;i++)
		{
		 	pulled = !pulled;
			if(pulled==true){
		 		console.log(arr15[i]);
		 		$("#odd15").append(arr15[i] + ", ")
		 	}
		}
	})

	$("#exc15b").click(function()
	{
		console.log('case 4');
		console.log('=========');
		var pulled = true;
		for(i=0;i<arr15.length;i++)
		{
		 	pulled = !pulled;
			if(pulled==true){
		 		console.log(arr15[i]);
		 		$("#even15").append(arr15[i] + ", ")
		 	}
		}
	});

// -------------------------------------------------------------------------------------------
	// 16. Write a function that computes the running total of a list.
	var runningTotal16= 0;
	var array16 
	$("#exc16a").click(function()
	{
		array16 = prompt("Please pick a number between 0 to 10000");
		array16= parseInt(array16);
		// console.log(array16);
		$("#number16a").append("+" + array16 );
		
		runningTotal16=runningTotal16+array16;
		// console.log(runningTotal16);
		$("#runningTotal16b").text(runningTotal16);
	});
// -------------------------------------------------------------------------------------------
	// 17. Write a function that tests whether a string is a palindrome.

	$("#exc17").click(function()
	{
		var regex17 = /[\W_]/g;

		var pali17 ="";
		pali17 = prompt("Enter a word to check if it is a palindrome.");
		console.log(pali17);
		$("#palindrome17a").text(pali17);
			// for palindrome, make sure it is converted into lower case or upper case to match
		var regReplaced17 = pali17.toLowerCase().replace(regex17, "");
		console.log(regReplaced17);
		var reversed17 = regReplaced17.split("").reverse().join("");
		console.log(reversed17);  
	
		if(regReplaced17 === reversed17) 
		{
			console.log("It is a palindrome");
			$("#palindrome17b").text("It is a palindrome");
		}
		else
		{
			console.log("it is not a palindrome");
			$("#palindrome17b").text("It is NOT a palindrome");
		}
	});	






// -------------------------------------------------------------------------------------------
// 18. Write function to show departments and employees with their salaries. Show total department salaries and Grand total of salaries to all employees from information below.
var Departments = ["Accounts", "Information Technology", "Human Resource", "Administration"];

var Employees = 
[
	["Accounts", "Tori", 45000],
	["Accounts", "Andrea", 50000],
	["Information Technology", "Shaq", 150000],
	["Information Technology", "Luther", 110000],
	["Information Technology", "Hendry", 110000],
	["Human Resource", "Renee", 100000],
	["Human Resource", "Bobby", 75000],
	["Administration", "Danielle", 60000],
	["Administration", "Lee", 50000]
]

	$("#exc18a").click(function()
	{
		$("#dept18").empty();
		for(var i=0;i<=Departments.length-1;i++)
		{
			console.log(Departments[i]);
			$("#dept18").append([i+1] + ")  " + Departments[i] + "  ");
		}	
	});

	$("#exc18b").click(function()
	{
		$("#emp18a").empty();
		var grandTotal =0
		for(var i=0;i<=Departments.length-1;i++)
		{
			console.log(Departments[i] + ": " );
			$("#emp18a").append(Departments[i] +  ": " + "</br>")
			var totalDepSalary=0
			
			for(var j=0;j<=Employees.length-1;j++)
			{
				if (Departments[i] === Employees[j][0])
				{	
					console.log(i);
					console.log(" " + "  " + Employees[j][1] + ": " + Employees[j][2]);
					$("#emp18a").append("&nbsp;" + " " + "  " + Employees[j][1] + ":  $" + Employees[j][2] + "</br>")
					totalDepSalary = totalDepSalary + Employees[j][2];
				}
			}
			console.log("Total Salaries paid for " + Departments[i] + " : " + totalDepSalary);
			$("#emp18b").append(Departments[i] + " :  $" + totalDepSalary + "</br>")
			grandTotal = grandTotal+ totalDepSalary;
		}
		console.log("GrandTotal" + ": " + grandTotal);	
		$("#emp18c").html("Grand Total Salaries paid to all employees" + ":  $" + grandTotal)
	});


    $("#clear18a").click(function(){
    	$("#dept18").empty();
    })
    	
    $("#clear18b").click(function(){
      	$("#emp18a").empty();
    	$("#emp18b").empty();
    })	
// --------
// -------------------------------------------------------------------------------------------
// 19. Write function to show store books and their genre with their cost. Show total genre cost and Grand total of books from information below.</br>
  
	var Genres =["Accounting", "Information Technology", "Human Resource", "Administration", "Children books"]
    var Books = [
       	["Accounting", "Tax Truth", 58.99],
       	["Accounting", "Payroll Magic", 45.99],
	    ["Information Technology", "JS Handbook", 150.99],
	    ["Information Technology", "HTML Byte", 51.49],
	    ["Information Technology", "Python Handbook", 110.35],
	    ["Human Resource", "Employeee Circle", 56.08],
	    ["Human Resource", "HR Rights", 75.99],
	    ["Administration", "Cost Control", 60.35],
	    ["Administration", "Mechcanic Math", 50.98],
	    ["Children books", "Especially Flying Out", 10.99],
	    ["Children books", "The Lion", 8.97],
	    ["Children books", "Spinning Magical Chair", 8.99],
	    ["Children books", "Raining Candies", 18.09]
	]    
	  
	    $("#exc19a").click(function(){
	    	$("#dept19").empty();
	    	for(i=0;i<=Genres.length-1;i++)
	    	{
	    		console.log(Genres[i] + ": ") ;
	    		$("#dept19").append(Genres[i] + ",  ") ;
	    	}
	    });

	    $("#exc19b").click(function(){
	    	$("#emp19a").empty();
	    	$("#emp19b").empty();
	    	for(var i=0; i<Genres.length;i++)
	    	{
	    		console.log(Genres[i] + ": " );
	    		$("#emp19b").append("<strong>" + Genres[i] + "<strong>" + ":  </br>" );
	    		$("#emp19a").append("<strong>" + Genres[i] + "<strong>" + ":  </br>" );
	    		var totalGenresCost = 0;
	    		var newTotalGenresCost =0;
	    		for(var j=0; j<Books.length; j++)
	    		{
	    			if(Genres[i] === Books[j][0])
	    			{
	    				console.log(" " + Books[j][1]  + ":  $"+ Books[j][2]);
	    				totalGenresCost =  totalGenresCost + Books[j][2];
	    				newTotalGenresCost = totalGenresCost.toFixed(2);
	    				$("#emp19a").append("&nbsp;" + " " + "  " + " " + Books[j][1]  + ":  $"+ Books[j][2] + "</br>");
	    				$("#emp19b").append("&nbsp;" + " " + "  " + " " + Books[j][1]  + ":  $"+ Books[j][2] + "</br>")
	    			}

	    		}
	    		console.log(newTotalGenresCost);
	    		$("#emp19b").append("&nbsp;" + "Total cost in " + Genres[i] + ":  $" + "<strong>" + newTotalGenresCost + "</strong>" + "</br>");
	    		
	      	}
	    });

	    $("#clear19a").click(function(){
	    	$("#dept19").empty();
	    });
	    	
	    $("#clear19b").click(function(){
	      	$("#emp19a").empty();
	    	$("#emp19b").empty();
	    });	
// --------------------------------------------------------------------------------
	// 20. fizzbuzz
    // 20.) Write a script that prints the numbers 1 to 50 in the console. But for multiples of three, print `Fizz` instead of the number. For multiples of five, print `Buzz`. For numbers which are multiples of both three and five, print `FizzBuzz`.
    $("#exc20").click(function()
    {
    	$("#fizzbuzz").empty();
    	for(var i=1;i<=50;i++)
    	{
    		if((i%3===0)&&(i%5===0))
    		{
    			console.log("Fizz Buzz");
    			$("#fizzbuzz").append("Fizz Buzz" + "</br>");
    		}else if (i%3===0){
    			console.log("Fizz")	;
    			$("#fizzbuzz").append("Fizz" + "</br>");
    		}else if (i%5===0){
    			console.log("Buzz");
    			$("#fizzbuzz").append("Buzz" + "</br>");
    		}else{
    		console.log(i);
    		$("#fizzbuzz").append(i + "</br>");
    		}
    	}
    })

    $("#clear20").click(function(){
    	$("#fizzbuzz").empty();
    });


// --------------------------------------------------------------------------------
//  21)Write three functions that compute the sum of the numbers in a list: using a forloop, a whileloop and recursion. 
	$("#exc21").click(function()
	{
		for (i=0;i<5;i++)
		{
			var randNum21 = Math.floor((Math.random() * 100) + 1);		
			console.log(randNum21);
		}
		$("#numbers21").append(randNum21 + ", ");
	})
		


// -------------------------------------------------------------------------------- 21 ends

// -------------------------------------------------------------------------------------------

}); // $ doc ready