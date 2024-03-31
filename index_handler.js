var projectsDiv = document.getElementById("projects");
for(let i = 0 ; i < PROJECTS.length ; i++){

    // div
    var current = PROJECTS[i] ;
    var prjDiv = document.createElement("div");
    var divStyle =  document.createAttribute("style");
    divStyle.value = "display:inline-block ; width: 300px ; margin: 10px" ;
    prjDiv.setAttributeNode(divStyle);

    //h3
    var title = document.createElement("h3");
    var titleNode = document.createTextNode(current.title);
    title.appendChild(titleNode);

    //img
    var image = document.createElement("img");
    var source = document.createAttribute("src");
    source.value = "./images/" + current.img ;
    image.setAttributeNode(source);
    var imgStyle =  document.createAttribute("style");
    imgStyle.value = "width: 180px; height: 100px ;" ;
    image.setAttributeNode(imgStyle);

    //p
    var p = document.createElement("p");
    var pNode = document.createTextNode(current.description);
    p.appendChild(pNode);

    // append the elements to project div
    prjDiv.appendChild(title);
    prjDiv.appendChild(image);
    prjDiv.appendChild(p);

    projectsDiv.appendChild(prjDiv);

}