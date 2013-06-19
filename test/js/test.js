module('Prérequis');
test("Eni necessite la présence de JQuery", function(){
    ok($('script[src*="jquery"]').length >=1,"Jquery n'est pas présent sur la page")
});
test( "Test que le script eni est bien présent sur la page", function() {
  ok($('script[src*="eni"]').length>=1,"Eni n'est pas présent sur la page");
});
module('Configuration',{
	setup: function(){
		$('body').append('<div id="eni" />');
	},
	teardown: function(){
		$('#eni').remove();
	}

});

test ("le moteur propose un titre par défaut",function(){
	//Arrange
	//Par défaut le titre est "Titre du jeu"

	//Act
	$("#eni").eni();
	
	//Assert
	equal($(".eni-title").html(),"Titre du jeu", "Le titre par défaut n'est pas présent");
});

test("Le moteur permet de changer le titre et le css par défaut",function(){
	//Arrange
	$.fn.eni.defaults.title = "Mon titre";
	$.fn.eni.defaults.css.title ="supercss";
	//Act
	$("#eni").eni();
	
	//Assert
	equal($(".supercss").html(),"Mon titre", "Le titre par défaut n'est pas présent");
});