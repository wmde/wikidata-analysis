export function drawDot( ctx, values ) {
	const [ x, y, numberOfItems ] = values;
	ctx.fillStyle = `hsl(23, 100%, ${numberOfItems}%)`;
	ctx.fillRect( x, y, 1, 1 );
}

export function drawLine( ctx, values ) {
	const [ x1, y1, x2, y2 ] = values;
	const distance = Math.sqrt( Math.pow( x2 - x1, 2 ) + Math.pow( y2 - y1, 2 ) );
	// Try to avoid drawing lines between points that should go off the edge of the screen
	if ( distance > ctx.canvas.width/3 ) {
		return;
	}
	ctx.strokeStyle = "rgba(0, 0, 255, 0.20)";
	ctx.beginPath();
	ctx.moveTo( x1, y1 );
	ctx.lineTo( x2, y2 );
	ctx.stroke();
}
