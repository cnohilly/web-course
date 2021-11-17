
class gquery {
    constructor(el){
        if(el.indexOf('.') > -1){
            el = el.replace(".","");
            this.elements = document.getElementsByClassName(el);    
        }
        else if(el.indexOf('#') > -1){
            el = el.replace("#","");
            this.elements = [document.getElementById(el)];
        }
        else {
            this.elements = document;
        }
    }

    addClass(cl){
        for (let i = 0; i < this.elements.length; i++){
            if(this.elements[i].className){
                this.elements[i].className += " " + cl;
            } else {
                this.elements[i].className = c1;
            }
        }
    }
}

function gQuery(el){
    var element = new gquery(el);
    return element;
}