$(function(){
	function animate(n){
		switch (n){
			case 0:
				console.log("GAME OVER");
				$('.D').animate({
					'left': 480
				},500);
				$('.right').attr('transform','rotate(90deg)');

			break;

			case 1:
				$('.cabeca').fadeIn(1500);
				// alert("Errou a letra, tente não errar !!!!");
			break;

			case 2:
				$('.left').fadeIn(1500);
				// alert("Errou a letra restam 1 vidas");
			break;

			case 3:
				$('.right').fadeIn(1500);
				// alert("Errou a letra restam 2 vidas");
			break;

			case 4:
				$('.pernaR').fadeIn(1500);
				// alert("Errou a letra restam 3 vidas");
			break;

			case 5:
				$('.pernaL').fadeIn(1500);
				// alert("Errou a letra restam 4 vidas");
			break;
			case 6:
				$('.corpo').fadeIn(1500);
				// alert("Errou a letra restam 5 vidas");
			break;
		}
	}
	$('#end').hide();
	$('#vida').hide();
	$('.cabeca').hide();
	$('.right').hide();
	$('.left').hide();
	$('.corpo').hide();
	$('.pernaL').hide();
	$('.pernaR').hide();
	$('#btn').bind('click',function(){
		var l = $('.letra').val();
		var x = $('#end').html();
		var y = $('#txt').html();
		var z = [];
		var live =parseInt($('#vida').html());
		console.log(live);
		var flag = 0;
		for (var i = 0; i < x.length; i++) {
	
			if(l==x[i]){
				z.push(l);
			}else{
				if(y[i]!='*'){
					z.push(y[i]);
				}else{
					flag ++;
					z.push('*');
				}
			}
			
		}
		// console.log(flag);
		var d = z.join("");
		if(d==y){
			animate(live);
			live--;
			$('#vida').text(live);

		}
		document.getElementById("txt").innerHTML = d;

		$('.letra').val("");
	
	});
});