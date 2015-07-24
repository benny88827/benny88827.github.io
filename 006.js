
var count;
var timer;
var output=$('#o');
$('#b1').click(function(){
    window.count=60;
    window.timer =setInterval(function(){
        console.log(window.count);
        if(window.count<=59){window.output.text("0:" +window.count);}
        if(window.count<=9){
            window.output.text("0:0" +window.count);}
        window.count -=1;
        checkToStop();
    },1000);})              
function checkToStop(){
    if(window.count <=-1){
        clearInterval(window.timer);
    }
}

$('#b2').click(function(){
clearInterval(window.timer);
window.output.text("1:00");
})