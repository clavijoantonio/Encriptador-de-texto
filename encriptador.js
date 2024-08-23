const textArea = document.querySelector(".text_area");
const mensaje = document.querySelector(".mensaje");



function btn_encriptar(){
  
    const textoEncriptado= encriptar(textArea.value);
    mensaje.value=textoEncriptado;
    textArea.value="";
    mensaje.style.backgroundImage="none"
}

function btn_desencriptar(){
    const textoEncriptado= desencriptar(textArea.value);
    mensaje.value=textoEncriptado;
    textArea.value="";
   
}


function encriptar(stringEncriptado){
    let matriz= [["e","enter"],["i","es"],["a","ai"],["o","ober"],["u","ufat"]]
    
    //stringEncriptado=stringEncriptado.tolowerCase()

    for(let i=0; i<matriz.length; i++){
       if(stringEncriptado.includes(matriz[i][0])){
            stringEncriptado=stringEncriptado.replaceAll(matriz[i][0],matriz[i][1])
       }
     
    }
    return stringEncriptado;
}
    function desencriptar(stringDesencriptado){
        let matriz= [["e","enter"],["i","es"],["a","ai"],["o","ober"],["u","ufat"]]
        
        //stringEncriptado=stringEncriptado.tolowerCase()
    
        for(let i=0; i<matriz.length; i++){
           if(stringDesencriptado.includes(matriz[i][1])){
            stringDesencriptado=stringDesencriptado.replaceAll(matriz[i][1],matriz[i][0])
           }
         
        }
        return stringDesencriptado;
}
                                                                                                                            
