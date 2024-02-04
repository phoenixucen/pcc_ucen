function toggleDetails(element) {
    element.classList.toggle("show");
}

function clicked(element){
    let element2=element.getElementsByTagName('div')[0];
    if(element2.innerHTML==''){
        element2.innerHTML+="<br><img class=questionImg src=../images/week-1_sept-1/"+element.innerHTML[0]+".jpg>";
        element2.innerHTML+="<br><iframe class=ansText src=../texts/week-1_sept-1/"+element.innerHTML[0]+".txt style="backgroud:black; color:white;"></iframe>";
    }
    else{
        element2.innerHTML="";
    }
}
