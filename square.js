var canvas = document.getElementById('canvas');

var x = 0;
var y = 0;
var squareWidth = 40;
var squareHeight = 40; 
var canvasWidth = 300;
var canvasHeight = 300;
var draggable = false;

var refreshTime = 10;

function init()
{
	canvas.addEventListener('mousedown',function(e)
	{
		if(e.pageX < x + squareWidth + canvas.offsetLeft && e.pageX > x + canvas.offsetLeft &&
			e.pageY < y + squareHeight + canvas.offsetTop && e.pageY > y + canvas.offsetTop)			
		{
			x = e.pageX - canvas.offsetLeft;
			y = e.pageY - canvas.offsetTop;
			draggable = true;
		}
	});

	canvas.addEventListener('mousemove',function(e)
	{
		if(draggable)
		{
			if(e.pageX < canvasWidth && e.pageY < canvasHeight)
			{
				x = e.pageX - canvas.offsetLeft;
				y = e.pageY - canvas.offsetTop;
			}
			else if(e.pageX >= canvasWidth - squareWidth && e.pageY >= canvasHeight - squareHeight)
			{
				x = canvasWidth - squareWidth;
				y = canvasHeight - squareHeight;
				draggable = false;
			}
			else if(e.pageX >= canvasWidth - squareWidth)
			{
				x = canvasWidth - squareWidth;
				draggable = false;
			}
			else if(e.pageY >= canvasHeight - squareHeight)
			{
				y = canvasHeight - squareHeight;
				draggable = false;
			}
		}
	});

	canvas.addEventListener('mouseup',function(e)
	{
		draggable = false;
	});

	return setInterval(draw,refreshTime);
}

function draw()
{
	if(canvas.getContext)
	{
		var context = canvas.getContext('2d');
		context.clearRect(0,0,canvasWidth,canvasHeight);
		context.fillRect(x,y,squareWidth,squareHeight);
	}
}

init();