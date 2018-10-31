window.onload=function(){
    var dest = document.getElementById("destin");
    var menu_dest = document.getElementById("destin_menu");
    var contact = document.getElementById("contact");
    var menu_contact = document.getElementById("annee_contact");
    

    menu_dest.style.display="none";
    dest.onmouseover = function(e){
        menu_dest.style.display = "block";
    };
    
    dest.onmouseout = function(e) {
        menu_dest.style.display = "none";
    };
    
    
    menu_contact.style.display="none";
    contact.onmouseover = function(e){
        menu_contact.style.display = "block";
    };
    
    contact.onmouseout = function(e) {
        menu_contact.style.display = "none";
    };
    
    
};
        
        
  