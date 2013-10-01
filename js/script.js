try
{
	var canvas = document.getElementById("mycanvas");

	if(null == canvas)
		throw "Impossible de trouver la toile sur la page.";

	if(null == canvas.getContext)
		throw "Votre navigateur ne permet pas le dessin avec HTML5";

	canvas.width = 600;
	canvas.height = 300;

	var sogray = "#C2C5C7"; //Soat's gray
	var sogreen = "#8AAB1E"; //Soat's green
	var soorange = "#E65C00"; //Soat's orange

	var ctx = canvas.getContext('2d');

	//Tracé du cadre
	ctx.strokeStyle = sogreen;
	ctx.lineWidth = 5;
	ctx.strokeRect(10, 10, 580, 280);

	/*
	 * Courbe grise
	 */
	ctx.beginPath();
	ctx.moveTo(canvas.width / 2 - 80, canvas.height / 2 + 40);
	ctx.lineWidth = 8;
	ctx.lineCap = "round"; //Extrémités de lignes arrondies
	ctx.strokeStyle = sogray;
	ctx.bezierCurveTo(
			canvas.width / 2 - 15, canvas.height / 2 + 30,
			canvas.width / 2, canvas.height / 2,
			canvas.width / 2, canvas.height / 2 - 50
			);
	ctx.stroke();

	/*
	 * Courbe noire
	 */
	ctx.beginPath();
	ctx.moveTo(canvas.width / 2 - 70, canvas.height / 2 + 50);
	ctx.strokeStyle = "black";
	ctx.lineWidth = 5;
	ctx.bezierCurveTo(
			canvas.width / 2 - 10, canvas.height / 2 + 30,
			canvas.width / 2 + 30, canvas.height / 2 + 25,
			canvas.width / 2 + 80, canvas.height / 2 + 50
			);

	ctx.stroke();
	
	/*
	 * Dessin du logo.
	 * D'abord "So" en noir, puis "@t" en vert
	 */
	ctx.textBaseline = "middle";
	ctx.font = "40pt Arial";
	ctx.fillStyle = "black";
	ctx.textAlign = "end";
	ctx.fillText("So", canvas.width / 2, canvas.height / 2);
	ctx.fillStyle = sogreen;
	ctx.textAlign = "start";
	ctx.fillText("@t", canvas.width / 2, canvas.height / 2);

}
catch(str)
{
	console.log(str);
}
