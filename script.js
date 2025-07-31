let data=[];

function add(){
let input=document.getElementById("t").value;
document.getElementById("t").value="";
if (input!==""){
data.push(input);
alert(input +" is added to your to do list");
}
else{
alert("please enter a valid task");
}
}
function del(){
let input=document.getElementById("t").value;
document.getElementById("t").value="";
let i=data.indexOf(input);
if (i!==-1){
data.splice(i,1);
alert(input +" is deleted from to do list");
}
else{
alert("not Found");
}
}
function update(){
let input=document.getElementById("t").value;
document.getElementById("t").value="";
let l=parseInt(document.getElementById("t2").value);
document.getElementById("t2").value="";
if(l>=0&&l<data.length){
data[l]=input;
alert("task at index "+l+" is updated with "+input);
}
else{
alert("please choose valid index!");
}
}
function display(){
data.forEach(function(task){
document.getElementById("r").innerHTML+= "<br><br>" +task;
});
}
