function addLoadEvent(func){
    var oldonload=window.onload;
    if(typeof window.onload!='function'){
        window.onload=func;
    }else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
}
function insertAfter(newElement,targetElement){
    var parent=targetElement.parentNode;
    if(targetElement==parent.lastChild){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling)
    }
}
function addClass(elenment,value){
    if(!element.className){
        element.className=value;
    }else{
        newClassName=element.className;
        newClassName+="";
        newClassName+=value;
        element.className=newClassName;
    }
}
function highlightPage(href){
    var headers=document.getElementsByTagName("header");
    if(headers.length==0) return false;
    var navs=headers[0].getElementsByTagName("nav");
    if(navs.length==0) return false;
    var links=navs[0].getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        linkurl=links[i].getAttribute("href");
        if(window.location.href.indexOf(linkurl)!=-1){
            links[i].className="here";
            var linktext=links[i].lastChild.nodeValue.toLowerCase();
            document.body.setAttribute("id",linktext);
        }
    }
}
addLoadEvent(highlightPage);


