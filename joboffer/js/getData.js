$.ajax({
    url: "https://fathomless-everglades-3680.herokuapp.com/api/dictionary",
    success: function(data){

        do{
            var obj = eval(data);

            function randomInteger(min,max){
                return Math.floor(Math.random()*(max-min)+min);}

            function upperFirst(str){
                return str.charAt(0).toUpperCase()+str.substring(1);}

            var adjective = upperFirst(obj.adjectives[randomInteger(0,(obj.adjectives.length-1))]);
            var noun = upperFirst(obj.nouns[randomInteger(0,(obj.nouns.length-1))]);
            var phrase = adjective+noun;

        } while(document.cookie.indexOf(phrase,0) != -1);

        document.getElementById("result").innerHTML = phrase;
        document.cookie = document.cookie+", "+phrase;

        var target = ", "; var matches = 0; var position = -1;

        while((position = document.cookie.indexOf(target,position + 1)) != -1){matches++;}
        if(matches>10){
            position = document.cookie.indexOf(target,1);
            document.cookie = document.cookie.substring(position);
            matches--;}

        document.getElementById("cookie").innerHTML = document.cookie.substring(1);
        }
});