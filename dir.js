
let DIRpopup = document.querySelector('.dirpopup');
let popupib = document.querySelector('.popupib');
let openPopupButtons = document.querySelectorAll ('.cloud2');
let closePopupButton = document.querySelector('.exit');
let popupisit = document.querySelector('.popupisit');
let openPopupButtons1 = document.querySelectorAll ('.cloud3');
let closePopupButton1 = document.querySelector('.exit1');
let popupisip = document.querySelector('.popupisip');
let openPopupButtons2 = document.querySelectorAll ('.cloud4');
let closePopupButton2 = document.querySelector('.exit2');
let popuppive = document.querySelector('.popuppive');
let openPopupButtons3 = document.querySelectorAll ('.cloud5');
let closePopupButton3 = document.querySelector('.exit3');
let popuppi = document.querySelector('.popuppi');
let openPopupButtons4 = document.querySelectorAll ('.cloud6');
let closePopupButton4 = document.querySelector('.exit4');


openPopupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        DIRpopup.classList.add('active');
        popupib.classList.add('active');
    })
});
closePopupButton.addEventListener('click', () => {
    DIRpopup.classList.remove('active');
    popupib.classList.remove('active');

})
closePopupButton.addEventListener('click', () => {
    DIRpopup.classList.remove('active');
    popupib.classList.remove('active');

})

openPopupButtons1.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        DIRpopup.classList.add('active');
        popupisit.classList.add('active');
    })
});
closePopupButton1.addEventListener('click', () => {
    DIRpopup.classList.remove('active');
    popupisit.classList.remove('active');

})
openPopupButtons2.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        DIRpopup.classList.add('active');
        popupisip.classList.add('active');
    })
});
closePopupButton2.addEventListener('click', () => {
    DIRpopup.classList.remove('active');
    popupisip.classList.remove('active');

})

openPopupButtons3.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        DIRpopup.classList.add('active');
        popuppive.classList.add('active');
    })
});
closePopupButton3.addEventListener('click', () => {
    DIRpopup.classList.remove('active');
    popuppive.classList.remove('active');

})
openPopupButtons4.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        DIRpopup.classList.add('active');
        popuppi.classList.add('active');
    })
});
closePopupButton4.addEventListener('click', () => {
    DIRpopup.classList.remove('active');
    popuppi.classList.remove('active');

})




document.addEventListener('click', (e) => {
    if(e.target === DIRpopup) {
        DIRpopup.classList.remove('active');
        popupib.classList.remove('active');
        popupisit.classList.remove('active');
        popupisip.classList.remove('active');
        popuppive.classList.remove('active');
        popuppi.classList.remove('active');

    }
})

function microtime()
{
    return new Date().getTime()*0.001;
}

function irand(min, max)
{
    return Math.floor((min||0) + Math.random() * ((max+1||100) - (min||0)));
}

function frand(min, max)
{
    return (min||0) + Math.random() * ((max||1) - (min||0));
}
function clamp(value, min, max)
{
return Math.min(Math.max(value, min), max);
}

function Vector2(x, y)
{
    this.x = x || 0;
    this.y = y || 0;
    this.add = function(other)
{
    this.x += other.x;
    this.y += other.y;
}
    this.magnitude = function()
{
    return Math.sqrt(this.x * this.x + this.y * this.y);
}
}
function Color(r, g, b)
{
    this.r = r || 0;
    this.g = g || 0;
    this.b = b || 0;
}
window.addEventListener('resize', function()
{
    jsCanvasSnow.resize(window.innerWidth, window.innerHeight);
    jsCanvasSnow.init();
}, false);
window.addEventListener('load', function()
{
    jsCanvasSnow.init();
    jsCanvasSnow.start();
}, false);
    function jsParticle(origin, velocity, size, amplitude)
{
this.origin = origin;
this.position = new Vector2(origin.x, origin.y);
this.velocity = velocity || new Vector2(0, 0);
this.size = size;
this.amplitude = amplitude;

this.dx = Math.random() * 100;
this.update = function(delta_time)
{
this.position.y += this.velocity.y * delta_time;
this.dx += this.velocity.x*delta_time;		
this.position.x = this.origin.x + (this.amplitude * Math.sin(this.dx));
};
}
var jsCanvasSnow = 
{
    canvas : null,
    ctx : null,
    particles : [],
    running : false,
    start_time : 0,
    frame_time : 0,
init : function( )
{
// use the container width and height
this.canvas = document.getElementById('particle_canvas');
this.ctx = this.canvas.getContext('2d');
this.resize(window.innerWidth, window.innerHeight);    
this.pAmount = 500;         // amount of particles
this.pSize = [0.5 , 1.5];    // min and max size
this.pSwing = [0.1, 1];      // min and max oscilation speed for x movement
this.pSpeed = [40, 100],     // min and max y speed
this.pAmplitude = [25, 50];  // min and max distance for x movement
this._init_particles();
},
start : function()
{
this.running = true;
this.start_time = this.frame_time = microtime();
this._loop();
},
stop : function()
{
this.running = false;
},
resize : function(w, h)
{
this.canvas.width = w;
this.canvas.height = h;
},
_loop : function()
{
if ( jsCanvasSnow.running )
{
jsCanvasSnow._clear();
jsCanvasSnow._update();
jsCanvasSnow._draw();
jsCanvasSnow._queue();
}
},	
_init_particles : function()
{
// clear the particles array
this.particles.length = 0;
for ( var i = 0 ; i < this.pAmount ; i++) 
{
var origin = new Vector2(frand(0, this.canvas.width), frand(-this.canvas.height, 0));
var velocity = new Vector2(frand(this.pSwing[0],this.pSwing[1]), frand(this.pSpeed[0],this.pSpeed[1]));
var size = frand(this.pSize[0], this.pSize[1]);
var amplitude = frand(this.pAmplitude[0], this.pAmplitude[1]);
this.particles.push(new jsParticle(origin, velocity, size, amplitude));
}
},
_update : function()
{
// calculate the time since the last frame
var now_time = microtime();
var delta_time = now_time - this.frame_time;
for ( var i = 0 ; i < this.particles.length ; i++)
{
var particle = this.particles[i];
particle.update(delta_time);
if (particle.position.y-particle.size > this.canvas.height)
{
// reset the particle to the top and a random x position
particle.position.y = -particle.size;
particle.position.x = particle.origin.x = Math.random() * this.canvas.width;
particle.dx = Math.random() * 100;
}			
}
// save this time for the next frame
this.frame_time = now_time;
},
_draw : function()
{
this.ctx.fillStyle = 'rgb(255,255,255)';
for ( var i = 0 ; i < this.particles.length ; i++)
{
var particle = this.particles[i];
this.ctx.fillRect(particle.position.x, particle.position.y, particle.size, particle.size);
}
},
_clear : function()
{
this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
},
_queue : function()
{
window.requestAnimationFrame( jsCanvasSnow._loop );
}
};