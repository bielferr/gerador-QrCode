function qrCode(){

    var inputUsuario = document.querySelector('textarea ').value;
    var GoogleApi = 'https://qrcode.tec-it.com/API/QRCode?data='
    
    var conteudoQrCode = GoogleApi + encodeURIComponent (inputUsuario)  ;
   document.querySelector("#QrImg").src = conteudoQrCode


}

