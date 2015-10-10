function begin(){
	var cxt = document.getElementById("kobe_canvas").getContext("2d");
	var pi = new this.PixelInfo(cxt);
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
