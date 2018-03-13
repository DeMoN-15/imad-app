var but=document.getElementById("but");
but.onclick=function(){
    var requst=XMLHttpRequst();
    requst.onreadystatechange=function(){
        if(requst.readyState===XMLHttpRequst.Done)
        {
            if(requst.status===200)
            {
                
            }
        }
    }
}