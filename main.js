var name_array = [];



function submit() {
        var GuestName = document.getElementById("name1").value;
        console.log(GuestName);
        name_array.push(GuestName);
        var length_name = name_array.length;
    console.log(length_name);
    document.getElementById("display_name").innerHTML = name_array.toString();
}
    function show() {
        var i=name_array.join("<br>")
        document.getElementById("h4").innerHTML = i.toString();
        
    }
function search(){
    var s=document.getElementById("search").value;
    var found=0;
    var j;
    for(j=0;j<name_array.length;j++){
        if(s==name_array[j]){
            found=found+1;
        }
    }
 document.getElementById("h3").innerHTML="name found "+found+" time/s";
}
 