$(function(){

	var CATAGORIES = new Array("Card Type", "Issuing Bank", "eCommerce Basic Card", "eCommerce Rewards Card", "Charity", "Retail Basic", "Retail Rewards", "Restaurant")

	$('.input_field').bind('input propertychange', function(){
		
		if ($(this).val() === "")
			{	
			 for(var i=0; i<=8; i++)
			   $('#output' + i).html("");

			}

			var type = getCreditCardType($(this).val());
			switch (type[0])
			
		
		{
		  case "mastercard":
		  	for(var i=0; i <= type.length; i++)
		   	$("#output" + i).html(CATAGORIES[i]+ ": " + type[i] + "<br>");
		   break;

		  case "visa":
		   	for(var i=0; i<= type.length; i++)
		   	$("#output" + i).html(CATAGORIES[i]+ ": " + type[i] + "<br>");
		  break;

		  case "amex":
		  	for(var i=0; i<= type.length; i++)
		   		$("#output" + i).html(CATAGORIES[i]+ ": " + type[i] + "<br>");
		    break;

		  default:
		   
		}
	


		function getCreditCardType(accountNumber){

	 
	  var result = new Array();
		if (/^5102/.test(accountNumber))
	  {
	  	result.push("mastercard","Bank Of America","$1.89% + $0.10","$2.05% + $0.10", "$1.45% + 0.15 ", "$1.89% + $0.10", "$2.05% + $0.10","$1.73% + 0.10");
		}
		else if (/^5186/.test(accountNumber))
		{
	  	result.push("mastercard","Capital One Bank","$1.89% + $0.10","$2.05% + $0.10", "$1.45% + 0.15 ", "$1.89% + $0.10", "$2.05% + $0.10","$1.73% + 0.10");

		}
		else if (/^5110/.test(accountNumber))
		{
	  	result.push("mastercard","Chase Manhattan Bank","$1.89% + $0.10","$2.05% + $0.10", "$1.45% + 0.15 ", "$1.89% + $0.10", "$2.05% + $0.10","$1.73% + 0.10");

		}
		else if (/^5277/.test(accountNumber))
		{
	  	result.push("mastercard","Wells Fargo Bank","$1.89% + $0.10","$2.05% + $0.10", "$1.45% + 0.15 ", "$1.89% + $0.10", "$2.05% + $0.10","$1.73% + 0.10");

		}
		else if (/^5417/.test(accountNumber))
		{
	  	result.push("mastercard","PNC Bank","$1.89% + $0.10","$2.05% + $0.10", "$1.45% + 0.15 ", "$1.89% + $0.10", "$2.05% + $0.10","$1.73% + 0.10");

		}
	  else if (/^4108/.test(accountNumber))
	  {
	  	result.push("Visa Credit","Bank of America","2.40% + $0.10","1.95% + $0.10 ", "$1.35% + $0.05  ", "2.10% + $0.10", "2.10% + $0.10","2.40% + $0.10");
	    
	  }
	   else if (/^4102/.test(accountNumber))
	  {
	  	result.push("Visa Credit","Capital One","2.40% + $0.10","1.95% + $0.10 ", "$1.35% + $0.05  ", "2.10% + $0.10", "2.10% + $0.10","2.40% + $0.10");
	    
	  }
	     else if (/^4102/.test(accountNumber))
	  {
	  	result.push("Visa Credit","JPMorgan Chase Bank","2.40% + $0.10","1.95% + $0.10 ", "$1.35% + $0.05  ", "2.10% + $0.10", "2.10% + $0.10","2.40% + $0.10");
	    
	  }
	      else if (/^4102/.test(accountNumber))
	  {
	  	result.push("Visa Credit","Wells Fargo Bank","2.40% + $0.10","1.95% + $0.10 ", "$1.35% + $0.05  ", "2.10% + $0.10", "2.10% + $0.10","2.40% + $0.10");
	    
	  }
	       else if (/^4102/.test(accountNumber))
	  {
	  	result.push("Visa Credit","PNC Bank","2.40% + $0.10","1.95% + $0.10 ", "$1.35% + $0.05  ", "2.10% + $0.10", "2.10% + $0.10","2.40% + $0.10");
	    
	  }
	       else if (/^4102/.test(accountNumber))
	  {
	  	result.push("Visa Debit","Bank of America","1.65% + $0.15 ","1.60% + $0.15  ", "$1.35% + $0.05  ", "0.80% + $0.15", "0.80% + $0.15","0.80% + $0.15");
	    
	  }
	       else if (/^4102/.test(accountNumber))
	  {
	  	result.push("Visa Debit","Capital One","1.65% + $0.15 ","1.60% + $0.15  ", "$1.35% + $0.05  ", "0.80% + $0.15", "0.80% + $0.15","0.80% + $0.15");
	    
	  }
	       else if (/^4102/.test(accountNumber))
	  {
	  	result.push("Visa Debit","JPMorgan Chase Bank","1.65% + $0.15 ","1.60% + $0.15  ", "$1.35% + $0.05  ", "0.80% + $0.15", "0.80% + $0.15","0.80% + $0.15");
	    
	  }
	       else if (/^4102/.test(accountNumber))
	  {
	  	result.push("Visa Debit","Wells Fargo Bank","1.65% + $0.15 ","1.60% + $0.15  ", "$1.35% + $0.05  ", "0.80% + $0.15", "0.80% + $0.15","0.80% + $0.15");
	    
	  }
	        else if (/^4102/.test(accountNumber))
	  {
	  	result.push("Visa Debit","PNC Bank","1.65% + $0.15 ","1.60% + $0.15  ", "$1.35% + $0.05  ", "0.80% + $0.15", "0.80% + $0.15","0.80% + $0.15");
	    
	  }
		else if (/^3[47]/.test(accountNumber))
	  {
	    result.push("amex","amex","$7.95/month + 0.30%","$7.95/month + 0.30%", "$7.95/month + 0.30%", "$7.95/month + 0.30%", "$7.95/month + 0.30%","$7.95/month + 0.30%");
	   
	  }
	  return result;
		}

	});

	$('.submit').on('click', function(e){
		e.preventDefault();
		$.get("/processing", function(data){
			$(data).find('#sub_page').dialog({title: "Processing", modal: true, height: "auto", width: "auto"})
			

		});
	});


});