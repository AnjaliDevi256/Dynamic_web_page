function check(){
let data=document.getElementById("t1").value;
if (/^\W.*\d$/.test(data)){
document.getElementById("r").innerHTML="Your Password Reached Our Criteria.Good Job.";
strengthCheck(data);
}
else{
alert("Your Passsword Not Reached Our Criteria.Please Retry!");
}
document.getElementById("t1").value="";
}

function strengthCheck(data){

let count=0;
if (data.length>=8){ 
count++;
}
 if (/[A-Z]/.test(data)){
 count++;
}
if (/[a-z]/.test(data)) {
count++;
}
switch(count){
case 0:
document.getElementById("r").innerHTML+="<br>very Weak Password!";
break;
case 1:
document.getElementById("r").innerHTML+="<br>Weak password";
break;
case 2:
document.getElementById("r").innerHTML+="<br>Moderate password";
break;
case 3:
document.getElementById("r").innerHTML+="<br>Strong Password";
break;
}
}
