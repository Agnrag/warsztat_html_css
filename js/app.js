document.addEventListener("DOMContentLoaded", function(){
    
//<div class="promo_opacity">
//   <h3>Chair CLAIR</h3>
// </div>
    
//---------------------------------------------------------
//WYSUWANE MENU:
//---------------------------------------------------------
    
    function menu() {
        //chwycenie elementu z nadrzędnej listy:
        var menuElementLevel1 = document.querySelector("#nav>li");        
        //chwycenie podrzędnej listy:
        var menuElementLevel2 = document.querySelector(".nav_level2");

        //domyślnie podrzędna lista jest ukryta:
        menuElementLevel2.classList.add("hidden");
            
        //podrzędna lista widoczna po najechaniu na nią myszką:
        menuElementLevel1.addEventListener("mouseover", function(){
            return menuElementLevel2.style.visibility="visible";    
        });

        //podrzędna lista niewidoczna, kiedy nie ma na niej myszki:
        menuElementLevel1.addEventListener("mouseout", function(){
            return menuElementLevel2.style.visibility="hidden";
        });
    }



//---------------------------------------------------------
//POJAWIAJĄCA SIĘ PÓŁPRZEZROCZYSTA RAMKA NA ZDJĘCIACH
//---------------------------------------------------------
    function opacityImage() {
        
        //dostanie się divów ze zdjęciami w tle z odpowiedniej sekcji:
        var promoCol1 = document.querySelectorAll(".promo_col");
        
        //stworzenie divów:
        var divOpacity = document.createElement("div");
        var divOpacity2 = document.createElement("div");
        
        //stworzenie divów o klasie "promo_opacity"
        divOpacity.setAttribute("class", "promo_opacity");
        divOpacity2.setAttribute("class", "promo_opacity");
        
        divOpacity.style.visibility="visible";
        divOpacity2.style.visibility="visible";
        
        //stworzenie H3:
        var divOpacityH3 = document.createElement("h3");
        var divOpacity2H3 = document.createElement("h3");
        
        //dodanie divów do wcześniej stworzonych divów "promo_opacity":
        divOpacity.appendChild(divOpacityH3);
        divOpacity2.appendChild(divOpacity2H3);
        
        //wypełnienie treścią H3:
        divOpacityH3.innerText="Chair CLAIR";        divOpacity2H3.innerText="Chair MARGARITA";
            
 
        for (var k = 0; k < promoCol1.length; k++) {
            promoCol1[0].appendChild(divOpacity);
            promoCol1[1].appendChild(divOpacity2);
            
            //zdarzenie: pierwszy div "promo_opacity" niewidoczny po najechaniu na niego myszką:
            promoCol1[0].addEventListener("mouseover", function(){
                divOpacity.style.visibility="hidden";
            });

            //zdarzenie: pierwszy div "promo_opacity" widoczny, gdy kursor znika:
            promoCol1[0].addEventListener("mouseout", function(){
                divOpacity.style.visibility="visible";
            });
            
            //zdarzenie: drugi div "promo_opacity" niewidoczny po najechaniu na niego myszką:
            promoCol1[1].addEventListener("mouseover", function(){
                divOpacity2.style.visibility="hidden";
            });

            //zdarzenie: drugi div "promo_opacity" widoczny, gdy kursor znika:
            promoCol1[1].addEventListener("mouseout", function(){
                divOpacity2.style.visibility="visible";
            });
        }
    
    }    
    
    //WYWOŁANIE FUNKCJI:
    //wysuwane menu:
    menu();
    //pojawiająca się półprzezroczysta ramka na zdjęciach:
    console.log(opacityImage());
    
    });