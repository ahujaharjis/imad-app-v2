var button = document.getElementById('counter');
var counter = 0;

// to changee elements
button.onclick = function()
{
var request = new XMLHttpRequest();
req.onreadstatechange=function(){
    if(request.readstate == XMLHttpRequest.DONE){
        if(request.status == 200)
        {
            var span=document.getElementById('count');
            span.innerHTML=counter.toString();
            
        }
    }
};
request.open('GET','http://ahujaharjis.imad.hasura-app.io',true);
request.send(null);
};
