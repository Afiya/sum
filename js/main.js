var app = {

    initialize: function() {
        
			$(".2TframePriceCalculation").on("keyup blur",function () {
				
				//--------Start----------------------------------------//
						
				var a = parseInt($('#n1').val()); // height
				var b = parseInt($('#n2').val());
				
						if($('#n1').val()!='' && $('#n2').val()!=''){
						
								x = a + b;
						
								$('.result').html('a + b = ' + x);
					   }
			//--------End----------------------------------------//	
	   
			});
			
		}

};

app.initialize();
