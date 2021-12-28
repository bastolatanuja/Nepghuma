<div>
    <form name ="regform" method="post" onsubmit ="validateForm()">
        
        
    </form>

</div>
function validateForm() {
    var fn=document.forms["regform"]["firstname"].value;
    var ln=document.forms["regform"]["lastname"].value;
    var ctry=document.forms["regform"]["country"];
    
    if(fn==null||fn=="")
    {
        alert("First name cannot be empty ");
        return false;
    }
    else if(ln==null||ln=="")
    {
        alert("Last name cannot be empty");
        return false;
    }
    else if((gn[0].checked==false)&&(gn[1].checked==false))
    {
        alert("Please enter your gender");
        return false;
    }
    else if(ctry.selectedIndex==0)
    {
        alert("Enter your Country");
        return false;
    }
}
    
