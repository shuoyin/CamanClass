function begin(){
	var p = new Caman.PixelInfo();
	var cxt = document.getElementById("kobe_canvas").getContext("2d");
	p.setContext(cxt);
	var a = p.getPixel(100,100);
	document.write(a.toString());
}
