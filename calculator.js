    
    let rezultati = document.getElementById("result");


    function shkruajVleren(vlera){

        if(rezultati.textContent.includes('Infinity')){
            fshije();
        }

        rezultati.textContent += vlera;
    }

    function fshije(){
        rezultati.textContent = " ";
    }

    function kalkulo(){
        rezultati.textContent = eval(rezultati.textContent);
    }