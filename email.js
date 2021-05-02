function valid()
{
  var em=document.forms["form1"]["text1"];
  em=em.value;
  var atp=em.indexOf("@");
  var res = em.substring(atp);
  var a="@gmail.com";
  var b="@yahoo.com";
  var c="@hotmail.com";
  console.log(res);
  if((res === a || res === b || res === c) && atp>1)
  {
    window.alert("Email is valid");
        return false;
  }
  else
  {
    window.alert("Email not valid");
        return false;
  }
}