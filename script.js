for(let x=0;x<document.querySelectorAll(".note").length;x++)
{
document.querySelectorAll(".note")[x].addEventListener("click",function ab()
{
   
    var a=document.querySelector("#three").innerHTML;
    if(a>0)
    {
    a--;
    document.querySelector("#three").innerHTML=a;
    }
    

    if(window.getComputedStyle(this).backgroundColor=="rgb(247, 250, 253)")
    {
        this.style.backgroundColor="rgb(255,255,255)";
        const circles=this.querySelector("img.cir");
        circles.remove();
    }
    
});
$("#mark").on("click",function()
{
      $(".note").css("backgroundColor","white");   
      $(".note").find("img.cir").remove();
      $("#three").text(0);

});
}

