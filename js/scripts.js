
var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(2, 19);
var triangle3Area = getTriangleArea(-1, 15);

function getTriangleArea(a, h) {
	if ((a > 0) && (h > 0)) {
		return(a*h/2)
	}
	else {
		return('Nieprawidlowe dane')
	}
}
console.log( getTriangleArea(10, 6) )
console.log(triangle2Area)