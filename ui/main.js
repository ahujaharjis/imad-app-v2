console.log('Loaded!');
// to changee elements
var element = document.getElementById('main-text');
element.innerHTML = 'new value';

// tpo shift image
 var marginleft = 0;
function moveright(){
    marginleft = marginleft+1;
    img.style.marginleft = marginlef+'px';
}
var img = document.getElementById('madi');
img.onclick = function()
{
var interval = setInterval(moveright,100);
};
    
