


function submitForm(){
    $("#namesubmit").click(function(){
    alert("Thanks " + $("input[name='firstname']").val() + "! Let's Get Started");
    
$("#home").hide();
    $("#level1").show();
});

      
}
        
function level1Submit(){
    $("#level1submit").click(function(){
        var answer1 = $("#dumbled").val();
        var answer2 = $("#sev").val();
        var answer3 = $("#ginny").val();
        var answer4 = $("#hermy").val();
        var answer5 = $("#micky").val();
        var wrongCount = 0; 
        
        if (answer1 !== "dumble"){
            wrongCount = wrongCount + 1;
        }
        if (answer2 !== "snape"){
            wrongCount = wrongCount + 1;
        }
        if (answer3 !== "gin"){
            wrongCount = wrongCount + 1;
        }
        if (answer4 !== "hermo"){
            wrongCount = wrongCount + 1;
        }
        if (answer5 !== "mcgono"){
            wrongCount = wrongCount + 1;
        }
        if (wrongCount > 0){
            alert("Bloody Hell, You got " + wrongCount + " incorrect. Try again!");
        }else {
            $("#level1").hide();
            $("#level2").show();
        }
            
            
            
            //if wrong count is greater than or equal to 1, youll get the error screen 
            //else youll move onto the next level
            
        
    });
}

//LEVEL 2 FUNCTIONING

        
    function level2submit(){
    
    var answer6 = $("input[name='nev']:checked").val();
    var answer7 = $("input[name='vol']:checked").val();
    var answer8 = $("input[name='drake']:checked").val();
    var answer9 = $("input[name='row']:checked").val();
    var answer10 = $("input[name='harp']:checked").val();

        var numWrong = 0;
        var neville = "Neville";

        if (answer6 === "neville") {
            $("#pic6").show();
        } else {
            numWrong = numWrong + 1;
        }
       if (answer7 === "lord") {
            $("#pic7").show();
        } else {
            numWrong = numWrong + 1;
        }
       if (answer8 === "malfoy") {
            $("#pic8").show();
        } else {
            numWrong = numWrong + 1;
        }
        if (answer9 === "weasley") {
            $("#pic9").show();
        } else {
            numWrong = numWrong + 1;
        }
        if (answer10 === "harry") {
            $("#pic10").show();
        } else {
            numWrong = numWrong + 1;
        }

        if(numWrong > 0){
            alert("Bloody Hell! You got " + numWrong + " wrong! Try Again!");
        }else{
            alert("Congrats, you're a WIZ at Harry Potter characters!");
        }
    }    
           
            