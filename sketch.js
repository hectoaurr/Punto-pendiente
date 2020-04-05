let puntoX
let puntoY

function setup() {
	createCanvas(windowWidth, windowHeight);

	puntoX=windowWidth
	puntoY=windowHeight
}

function draw() {
	//line(punto1.x, punto1.y, punto2.x, punto2.y)
	ecuapp(0, 0, puntoX, puntoY)

	ecuapp(0, floor(puntoY/2), puntoX, floor(puntoY/2))

	ecuapp(0,puntoY,puntoX,0)

	ecuaPPY(floor(puntoX/2), 0, puntoY)

}

function ecuapp(punto1X, punto1Y, punto2X, punto2Y) {
	const dx = punto2X - punto1X
	const dy = punto2Y - punto1Y

	const m = dy/dx
	const b = punto1Y - m * punto1X

	point(punto1X,punto1Y)

	let x = punto1X+1
	let y
	while(x != punto2X) {
		y = m * x + b
		point(x, y)
		x++
	}
}

function ecuaPPY(punto1X, punto1Y, punto2Y) {

	let y = punto1Y

	while(y != punto2Y) {
		point(punto1X,y)
		y++
	}
}