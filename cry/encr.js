encr = function(msg){
    var crypMsg = "";
    for(var i = 0; i < msg.length; i++){
        crypMsg += msg.charAt(i)+"x";
    }
    return crypMsg;
};