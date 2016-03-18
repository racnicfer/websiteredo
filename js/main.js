$('h2.minititle').lettering();
//$('h3 + p').lettering('words').fadeOut().fadeIn();


// Store Background Classes
var background = ['one', 'two']
console.log(background);

// Random Number Generator
var max = 2;
var randNum = Math.floor( Math.random() * max );
console.log( randNum );

// Change background class
$('html').addClass( background[randNum] );


TweenMax.from('.minititle', 2, {
    left: 0,
    opacity: 0,
    scale: 2,
    delay: 1,
    
});




