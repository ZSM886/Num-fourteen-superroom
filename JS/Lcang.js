/*
$指一个函数，回调函数
搜索框思路：
1.获取输入框和放大镜，
2.当输入框的right值为-192的时候点击让它右移210px;
3.当right值为210的时候点击让它右移210px;
*/

$("#magnifier").click(function(){
    if($("#sch").css("marginLeft")=="226px"){
        $("#sch").animate({"marginLeft":0});
    }else{
        $("#sch").animate({"marginLeft":226});
    }
});
/*
$("#magnifier").click(function(){ 
    if($("#sch").css("right")=="-192px"){
        $("#sch").animate({"right":210});
    }else{
        $("#sch").animate({"right":-210});
    }
});
  */