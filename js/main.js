var app = {

    initialize: function() {
        
			$(".2TframePriceCalculation").on("keyup blur",function () {
						
				var a = parseInt($('#n1').val()); // height
				var b = parseInt($('#n2').val());
				
						if(a!='' && b!=''){
						
								x = a + b;
						
								$('.result').html('a + b = ' + x);
					   }
				
	   
			});
			
		}

};

app.initialize();
