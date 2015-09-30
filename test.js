function begin(){
	var cxt = document.getElementById("kobe_canvas").getContext("2d");
	Caman("#kobe_img",function(){
		var a = this.getPixel(20,50);
		console.log(a);
	});
	var Animal;
	Animal = (function(){
		function Animal(name){
			this.name = name;
		}

		Animal.prototype.makenoise = function(){
			console.log("lalalal");
		}
		return Animal;
	})();
	var cat = new Animal("cat");
	cat.makenoise();
}
