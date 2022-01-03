friend_array = [];

function submit()
{
var name_1=document.getElementById("friend_1").value;
var name_2=document.getElementById("friend_2").value;
var name_3=document.getElementById("friend_3").value;
var name_4=document.getElementById("friend_4").value;
var name_5=document.getElementById("friend_5").value;

friend_array.push(name_1);
friend_array.push(name_2);
friend_array.push(name_3);
friend_array.push(name_4);
friend_array.push(name_5);

console.log(friend_array);
document.getElementById("display_name").innerHTML=friend_array;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}