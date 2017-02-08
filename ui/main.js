var button = document.getElementById('counter');


// to changee elements
button.onclick = function()
{
var request = new XMLHttpRequest();
req.onreadstatechange=function(){
    if(request.readstate == XMLHttpRequest.DONE){
        if(request.status == 200)
        { var counter=request.responseText;
            var span=document.getElementById('count');
            span.innerHTML=counter.toString();
            
        }
    }
};
request.open('GET','http://ahujaharjis.imad.hasura-app.io/counter',true);
request.send(null);
};
