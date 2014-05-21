decr = function(encrypMsg){
    var decrypMsg = "";

    for(var i = 0; i < encrypMsg.length; i+=2){
        decrypMsg += encrypMsg.charAt(i);
    }
    return decrypMsg;
};