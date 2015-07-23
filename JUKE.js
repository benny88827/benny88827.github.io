$('#mybutton').click(function(){
    var n= parseInt($('#input').val());
    console.log("n="+n);
    var outputField=$('#output');
    var output="";
    for(var i=1;i<=n;i++)
    {var temp="";
     for(var j=1;j<=i;j++)
     {temp+="*";
     }
     temp+='<br/>';
     output+=temp;
    }
    outputField.html(output);
})
    
$("body").keypress(function(event){
    var which=event.which;
    console.log("key pressed,which="+which)
})