var currentColor=
  { red:0,
    green:0,
    blue:0
  }


// const style={
// staticbuildingStyle:function(){
//   var width= Math.floor(Math.random()*20+5)
//   var height= Math.floor(Math.random()*20+1)
//   var move = Math.floor(Math.random()*80+10)
//   return {
//      backgroundColor:"rgba("+ currentColor.red+","+currentColor.green+","+ currentColor.blue+",.5)",
//   transform:"scaleY("+height+")",
//   width:width+"%",
//   right:move+"%"}


// }


// }



var ColorArray=[
   
]
  
$('.captors').on('click', event=>{
  if(ColorArray.length>0){
    createColorSky();
    var starArray=$('.captured')
    for (let i=0;i<starArray.length;i++){

    setTimeout(() => {
    $(starArray[i]).addClass("starlist");
    setTimeout(() => {
      $(starArray[i]).removeClass("starlist");
    }, 500);
 
}, i*100);


}
  
}

})



//create a single dynamic bhulding that refreshes 
  function createbuildings(){
  console.log('creating buildings')
  console.log(currentColor)
  var width = Math.floor(Math.random()*100)
  var size = Math.floor(Math.random()*10+2)
  var height = Math.floor(Math.random()*40+1)

  var building = $('<div>')
  building.addClass('building')
  building.attr('style', "right:"+width+"%; width:"+size+"%; transform:scaleY("+height+"); background-color:rgba("+currentColor.red+","+currentColor.green+","+currentColor.blue+",.2)")
  $('.skyLine2').append(building);

      }

  $("body").mousemove(event=>{
    event.stopPropagation();
    event.preventDefault();
    
    var starArray=$('.captured');
    length=starArray.length;
    // console.log(starArray);

    
    for(let i=0;i<length;i++){
        setTimeout(() => {
             $(starArray[i]).attr("style", " top :" + (event.pageY + 20) + "px; left :" + (event.pageX + 20) + "px; background-color:rgba("+ColorArray[i].red+","+ColorArray[i].green+","+ColorArray[i].blue+",1);")  
        },i*20);
    }    
})


 createFollower=function(event){
  var colors = $(event.target).attr('style');
  colors = colors.split("(");
  colors=colors[3];
  colors= colors.split(',');
  var red=colors[0];
  var green = colors[1];
  var blue = colors[2];
  var newStar = $("<div>")
  $(newStar).addClass('captured');
  $(newStar).attr("style", "background-color: rgba("+red+","+green+","+blue+",1)")
  $('body').append(newStar);
  


}

 function createMeteor(){
  var red = Math.floor(Math.random()*255)
  var green=Math.floor(Math.random()*255)
  var blue= Math.floor(Math.random()*255)
  var width = Math.floor(Math.random()*80+10)
  var size = Math.floor(Math.random()*20+2)

  var newMeteor = $('<div>');
  $(newMeteor).addClass('meteor');
  $(newMeteor).attr("style", "background-image:linear-gradient(to top, rgba("+red+","+green+","+blue+",1), rgba("+red+","+green+","+blue+",0)); right:"+width+"%; width:"+size+"px")
  $('.meteorSky').append(newMeteor);

}


var creategradientsky= function(event){
$(".sky").html("");
$(".lake").html("");
// console.log($(event.target).attr('style'))
var colors = $(event.target).attr('style');
colors = colors.split("(");
colors=colors[3];
colors= colors.split(',');
var red=colors[0];
var green = colors[1];
var blue = colors[2];
// console.log(red, green, bluef)
for(var i=0;i<40;i++){
  var skystripe=$('<div>')
  $(skystripe).addClass('skystrip');
  $(skystripe).attr("style", "background-color: rgba("+red+","+green+","+blue+","+(40-i)/100+");height:"+ Math.pow(40-i,2)/200+"%")
  $(".sky").append(skystripe);
};

 lakeArray.reverse();
for(i=0;i<40;i++){
  var lakestripe=$('<div>')
  $(lakestripe).addClass('lakestrip');
  $(lakestripe).attr("style", "background-color: rgba("+red+","+green+","+blue+","+i/50+");height:"+Math.pow(i,2)/200+"%")
  $(".lake").append(lakestripe);

};

}
function createColorSky(){
  $(".sky").html("");
  $(".lake").html("");
  var length=ColorArray.length;
  for(var i=0;i<40;i++){
    var random = Math.floor(Math.random()*length)
    var skystripe=$('<div>')
    $(skystripe).addClass('skystrip');
    $(skystripe).attr("style", "background-color: rgba("+ColorArray[random].red+","+ColorArray[random]. green+","+ColorArray[random]. blue+","+(40-i)/100+");height:"+ Math.pow(40-i,2)/200+"%")
    $(".sky").append(skystripe);
  };
  
   ColorArray.reverse();
  for(i=0;i<40;i++){
    var random = Math.floor(Math.random()*length)
    var lakestripe=$('<div>')
    $(lakestripe).addClass('lakestrip');
    $(lakestripe).attr("style", "background-color: rgba("+ColorArray[random].red+","+ColorArray[random]. green+","+ColorArray[random]. blue+","+i/50+");height:"+Math.pow(i,2)/200+"%")
    $(".lake").append(lakestripe);
  
  };
  
  }
  



  function Initgradientsky(){
$(".sky").html("");
$(".lake").html("");
var red=currentColor.red
var green =currentColor.green
var blue = currentColor.blue
// console.log(red, green, bluef)
for(var i=0;i<40;i++){
  var skystripe=$('<div>')
  $(skystripe).addClass('skystrip');
  $(skystripe).attr("style", "background-color: rgba("+red+","+green+","+blue+","+(40-i)/100+");height:"+ Math.pow(40-i,2)/200+"%")
  $(".sky").append(skystripe);
};

 lakeArray.reverse();
for(i=0;i<40;i++){
  var lakestripe=$('<div>')
  $(lakestripe).addClass('lakestrip');
  $(lakestripe).attr("style", "background-color: rgba("+red+","+green+","+blue+","+i/50+");height:"+Math.pow(i,2)/200+"%")
  $(".lake").append(lakestripe);

};

}

 function  setSelectColor(event){
// console.log('selectcolor');
// console.log(event);
var colors = $(event.target).attr('style');
colors = colors.split("(");
colors=colors[3];
colors= colors.split(',');
var red=colors[0];
var green = colors[1];
var blue = colors[2];
currentColor={red:red,green:green,blue:blue}
ColorArray.push(currentColor);
// console.log(ColorArray)

} 



$(document).on('mouseover',".meteor",event=>{
event.preventDefault();
event.stopPropagation();
creategradientsky(event);
event.target.remove();
// $(".skyLine2").empty();
setSelectColor(event);
createFollower(event);
for(var i=0; i<10;i++){
createbuildings()
}
})
var skyArray=[];
var lakeArray=[];

  function createsky(){
  skyArray=[];
  lakeArray=[];
  var number=0
  var length=demoColors.length;
  // console.log(length);
    for(let i=0;i<40;i++){
        var rand=Math.floor(Math.random() *(demoColors.length-1))
        console.log(rand);
        skyArray.push(demoColors[rand])
        number++;
}
    if (number==40){
           
              // console.log(lakeArray)
          for(var i=0;i<40;i++){
            var skystripe=$('<div>')
            $(skystripe).addClass('skystrip');
            $(skystripe).attr("style", "background-color:"+skyArray[i]+";height:"+ Math.pow(40-i,2)/200+"%")
            $(".sky").append(skystripe);
          };
          lakeArray=skyArray;
          // console.log(lakeArray)
   
           lakeArray.reverse();
          for(i=0;i<40;i++){
            var lakestripe=$('<div>')
            $(lakestripe).addClass('lakestrip');
            $(lakestripe).attr("style", "background-color:"+lakeArray[i]+";height:"+Math.pow(i,2)/200+"%")
            $(".lake").append(lakestripe);

          };


    }
  }

  $('.clearButton').on("click", event=>{
    $(event.target).addClass('veil')
    setTimeout(() => {
      $('.skyLine2').html('');
      $(event.target).removeClass('veil')
      
    }, 500);
  })






function init(){

  var meteorInterval=setInterval(() => {
    createMeteor()
    
  }, 3000);
 var clearMEteorInterval = setInterval(() => {
    $('.meteorSky').html('')
    
  }, 50000);
  

}

init();
Initgradientsky()