$(function(){
    $.get("./index2.html", function(data){
        let container = $("#container");
        container.html(data);
        $("#toss-message").animate({
            fontSize: "+=30"
        }, 2000, "swing", function(){
            toss.remove();        
            $.get("./index3.html", function(data){
                let message = $("#message");
                let decider = 1;
                while(decider == 1){
                    decider = 0;
                    message.after(data);
                    let ans = Math.floor(Math.random()*2);
                    $("#head").on("click", function(){game((ans === 0 ? "head": "tail"), "head")});
                    $("#tail").on("click", function(){game((ans === 0 ? "head": "tail"), "tail")});
                }
            })
        })
    });

    function game(ans, choose){
        if(ans === choose){
            $("#choice").remove();
            $.get("./index4.html", function(data){
                $("#message").after(data);
                $("#result").html("result: " + ans);
                $("#result").on("click keypress", function(){
                    $("#result").remove();
                    $.get("./index5.html", function(data){
                        $("#message").after(data);
                        let available = [1,2,3,4,5,6,7,8,9];
                        let length = 9;
                        let computer_move;
                        $(".boxes").on("click", function(e){
                            if (available.includes(Number(($(this).attr("id"))))){
                                $(this).text("X");
                                $(this).addClass("X");
                                delete available[Number(($(this).attr("id")))-1];
                                --length;
                                computer_move = Math.floor(9*Math.random());
                                while(!available.includes(computer_move) && length > 0){
                                    computer_move = Math.floor(9*Math.random())+1;
                                }
                                if (($("#1").attr("class")[6] == "X" && $("#2").attr("class")[6] == "X" && $("#3").attr("class")[6] == "X") || ($("#1").attr("class")[6] == "O" && $("#2").attr("class")[6] == "O" && $("#3").attr("class")[6] == "O")){
                                    if (($("#1").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                    }else if(($("#1").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                    }
                                }else if (($("#4").attr("class")[6] == "X" && $("#5").attr("class")[6] == "X" && $("#6").attr("class")[6] == "X") || ($("#4").attr("class")[6] == "O" && $("#5").attr("class")[6] == "O" && $("#6").attr("class")[6] == "O")){
                                    if (($("#4").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }else if(($("#4").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }
                                }else if (($("#7").attr("class")[6] == "X" && $("#8").attr("class")[6] == "X" && $("#9").attr("class")[6] == "X") || ($("#7").attr("class")[6] == "O" && $("#8").attr("class")[6] == "O" && $("#9").attr("class")[6] == "O")){
                                    if (($("#7").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }else if(($("#7").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }
                                }else if (($("#1").attr("class")[6] == "X" && $("#4").attr("class")[6] == "X" && $("#7").attr("class")[6] == "X") || ($("#1").attr("class")[6] == "O" && $("#4").attr("class")[6] == "O" && $("#7").attr("class")[6] == "O")){
                                    if (($("#1").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }else if(($("#1").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }
                                }else if (($("#2").attr("class")[6] == "X" && $("#5").attr("class")[6] == "X" && $("#8").attr("class")[6] == "X") || ($("#2").attr("class")[6] == "O" && $("#5").attr("class")[6] == "O" && $("#8").attr("class")[6] == "O")){
                                    if (($("#2").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }else if(($("#2").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }
                                }else if (($("#3").attr("class")[6] == "X" && $("#6").attr("class")[6] == "X" && $("#9").attr("class")[6] == "X") || ($("#3").attr("class")[6] == "O" && $("#6").attr("class")[6] == "O" && $("#9").attr("class")[6] == "O")){
                                    if (($("#3").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }else if(($("#3").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }
                                }else if (($("#1").attr("class")[6] == "X" && $("#5").attr("class")[6] == "X" && $("#9").attr("class")[6] == "X") || ($("#1").attr("class")[6] == "O" && $("#5").attr("class")[6] == "O" && $("#9").attr("class")[6] == "O")){
                                    if (($("#1").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }else if(($("#1").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }
                                }else if (($("#3").attr("class")[6] == "X" && $("#5").attr("class")[6] == "X" && $("#7").attr("class")[6] == "X") || ($("#3").attr("class")[6] == "O" && $("#5").attr("class")[6] == "O" && $("#7").attr("class")[6] == "O")){
                                    if (($("#3").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }else if(($("#3").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }
                                }else if(length <= 0){
                                    $("#playground").remove();
                                    $.get("./index8.html", function(data){
                                        $("#message").after(data);
                                        $("#message").after("<button id = 'revert'>Start Again<button>");  
                                        $("#revert").on("click", function(){   decider = 1
                                            window.location.href = window.location.href;  
                                        })
                                    })
                                    
                                }
                                
                                $(`#${computer_move}`).addClass("O").delay(2000).text("O");
                                delete available[computer_move-1];
                                --length;
                                if (($("#1").attr("class")[6] == "X" && $("#2").attr("class")[6] == "X" && $("#3").attr("class")[6] == "X") || ($("#1").attr("class")[6] == "O" && $("#2").attr("class")[6] == "O" && $("#3").attr("class")[6] == "O")){
                                    if (($("#1").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                    }else if(($("#1").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                    }
                                }else if (($("#4").attr("class")[6] == "X" && $("#5").attr("class")[6] == "X" && $("#6").attr("class")[6] == "X") || ($("#4").attr("class")[6] == "O" && $("#5").attr("class")[6] == "O" && $("#6").attr("class")[6] == "O")){
                                    if (($("#4").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }else if(($("#4").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }
                                }else if (($("#7").attr("class")[6] == "X" && $("#8").attr("class")[6] == "X" && $("#9").attr("class")[6] == "X") || ($("#7").attr("class")[6] == "O" && $("#8").attr("class")[6] == "O" && $("#9").attr("class")[6] == "O")){
                                    if (($("#7").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }else if(($("#7").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }
                                }else if (($("#1").attr("class")[6] == "X" && $("#4").attr("class")[6] == "X" && $("#7").attr("class")[6] == "X") || ($("#1").attr("class")[6] == "O" && $("#4").attr("class")[6] == "O" && $("#7").attr("class")[6] == "O")){
                                    if (($("#1").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }else if(($("#1").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }
                                }else if (($("#2").attr("class")[6] == "X" && $("#5").attr("class")[6] == "X" && $("#8").attr("class")[6] == "X") || ($("#2").attr("class")[6] == "O" && $("#5").attr("class")[6] == "O" && $("#8").attr("class")[6] == "O")){
                                    if (($("#2").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }else if(($("#2").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }
                                }else if (($("#3").attr("class")[6] == "X" && $("#6").attr("class")[6] == "X" && $("#9").attr("class")[6] == "X") || ($("#3").attr("class")[6] == "O" && $("#6").attr("class")[6] == "O" && $("#9").attr("class")[6] == "O")){
                                    if (($("#3").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }else if(($("#3").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }
                                }else if (($("#1").attr("class")[6] == "X" && $("#5").attr("class")[6] == "X" && $("#9").attr("class")[6] == "X") || ($("#1").attr("class")[6] == "O" && $("#5").attr("class")[6] == "O" && $("#9").attr("class")[6] == "O")){
                                    if (($("#1").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }else if(($("#1").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }
                                }else if (($("#3").attr("class")[6] == "X" && $("#5").attr("class")[6] == "X" && $("#7").attr("class")[6] == "X") || ($("#3").attr("class")[6] == "O" && $("#5").attr("class")[6] == "O" && $("#7").attr("class")[6] == "O")){
                                    if (($("#3").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }else if(($("#3").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }
                                }else if(length <= 0){
                                    $("#playground").remove();
                                    $.get("./index8.html", function(data){
                                        $("#message").after(data);
                                        $("#message").after("<button id = 'revert'>Start Again<button>");  
                                        $("#revert").on("click", function(){   decider = 1
                                            window.location.href = window.location.href;  
                                        })
                                    })
                                    
                                }
                                console.log(length);
                                console.log(available);
                            }
                        })
                    })
                })
            })
            
        }else{
            $("#choice").remove();
            $.get("./index4.html", function(data){
                $("#message").after(data);
                $("#result").html("result: " + ans);
                $("#result").on("click keypress", function(){
                    $("#result").remove();
                    $.get("./index5.html", function(data){
                        $("#message").after(data);
                        let available = [1,2,3,4,5,6,7,8,9];
                        let length = 9;
                        let computer_move = Math.floor(9*Math.random())+1;
                        $(`#${computer_move}`).text("O");
                        $(`#${computer_move}`).addClass("O");
                        delete available[computer_move-1];
                        length--;
                        $(".boxes").on("click", function(e){
                            console.log("hello");
                            if (available.includes(Number(($(this).attr("id"))))){
                                $(this).text("X");
                                $(this).addClass("X");
                                delete available[Number(($(this).attr("id")))-1];
                                --length;
                                if (($("#1").attr("class")[6] == "X" && $("#2").attr("class")[6] == "X" && $("#3").attr("class")[6] == "X") || ($("#1").attr("class")[6] == "O" && $("#2").attr("class")[6] == "O" && $("#3").attr("class")[6] == "O")){
                                    if (($("#1").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                    }else if(($("#1").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                    }
                                }else if (($("#4").attr("class")[6] == "X" && $("#5").attr("class")[6] == "X" && $("#6").attr("class")[6] == "X") || ($("#4").attr("class")[6] == "O" && $("#5").attr("class")[6] == "O" && $("#6").attr("class")[6] == "O")){
                                    if (($("#4").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }else if(($("#4").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }
                                }else if (($("#7").attr("class")[6] == "X" && $("#8").attr("class")[6] == "X" && $("#9").attr("class")[6] == "X") || ($("#7").attr("class")[6] == "O" && $("#8").attr("class")[6] == "O" && $("#9").attr("class")[6] == "O")){
                                    if (($("#7").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }else if(($("#7").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }
                                }else if (($("#1").attr("class")[6] == "X" && $("#4").attr("class")[6] == "X" && $("#7").attr("class")[6] == "X") || ($("#1").attr("class")[6] == "O" && $("#4").attr("class")[6] == "O" && $("#7").attr("class")[6] == "O")){
                                    if (($("#1").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }else if(($("#1").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }
                                }else if (($("#2").attr("class")[6] == "X" && $("#5").attr("class")[6] == "X" && $("#8").attr("class")[6] == "X") || ($("#2").attr("class")[6] == "O" && $("#5").attr("class")[6] == "O" && $("#8").attr("class")[6] == "O")){
                                    if (($("#2").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }else if(($("#2").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }
                                }else if (($("#3").attr("class")[6] == "X" && $("#6").attr("class")[6] == "X" && $("#9").attr("class")[6] == "X") || ($("#3").attr("class")[6] == "O" && $("#6").attr("class")[6] == "O" && $("#9").attr("class")[6] == "O")){
                                    if (($("#3").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }else if(($("#3").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }
                                }else if (($("#1").attr("class")[6] == "X" && $("#5").attr("class")[6] == "X" && $("#9").attr("class")[6] == "X") || ($("#1").attr("class")[6] == "O" && $("#5").attr("class")[6] == "O" && $("#9").attr("class")[6] == "O")){
                                    if (($("#1").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }else if(($("#1").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }
                                }else if (($("#3").attr("class")[6] == "X" && $("#5").attr("class")[6] == "X" && $("#7").attr("class")[6] == "X") || ($("#3").attr("class")[6] == "O" && $("#5").attr("class")[6] == "O" && $("#7").attr("class")[6] == "O")){
                                    if (($("#3").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }else if(($("#3").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }
                                }else if(length <= 0){
                                    $("#playground").remove();
                                    $.get("./index8.html", function(data){
                                        $("#message").after(data);
                                        $("#message").after("<button id = 'revert'>Start Again<button>");  
                                        $("#revert").on("click", function(){   decider = 1
                                            window.location.href = window.location.href;  
                                        })
                                    })
                                    
                                }
                                computer_move = Math.floor(9*Math.random());
                                while(!available.includes(computer_move) && length > 0){
                                    computer_move = Math.floor(9*Math.random())+1;
                                }
                                $(`#${computer_move}`).addClass("O").delay(2000).text("O");
                                delete available[computer_move-1];
                                --length;
                                if (($("#1").attr("class")[6] == "X" && $("#2").attr("class")[6] == "X" && $("#3").attr("class")[6] == "X") || ($("#1").attr("class")[6] == "O" && $("#2").attr("class")[6] == "O" && $("#3").attr("class")[6] == "O")){
                                    if (($("#1").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                    }else if(($("#1").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                    }
                                }else if (($("#4").attr("class")[6] == "X" && $("#5").attr("class")[6] == "X" && $("#6").attr("class")[6] == "X") || ($("#4").attr("class")[6] == "O" && $("#5").attr("class")[6] == "O" && $("#6").attr("class")[6] == "O")){
                                    if (($("#4").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }else if(($("#4").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }
                                }else if (($("#7").attr("class")[6] == "X" && $("#8").attr("class")[6] == "X" && $("#9").attr("class")[6] == "X") || ($("#7").attr("class")[6] == "O" && $("#8").attr("class")[6] == "O" && $("#9").attr("class")[6] == "O")){
                                    if (($("#7").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }else if(($("#7").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }
                                }else if (($("#1").attr("class")[6] == "X" && $("#4").attr("class")[6] == "X" && $("#7").attr("class")[6] == "X") || ($("#1").attr("class")[6] == "O" && $("#4").attr("class")[6] == "O" && $("#7").attr("class")[6] == "O")){
                                    if (($("#1").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }else if(($("#1").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }
                                }else if (($("#2").attr("class")[6] == "X" && $("#5").attr("class")[6] == "X" && $("#8").attr("class")[6] == "X") || ($("#2").attr("class")[6] == "O" && $("#5").attr("class")[6] == "O" && $("#8").attr("class")[6] == "O")){
                                    if (($("#2").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }else if(($("#2").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }
                                }else if (($("#3").attr("class")[6] == "X" && $("#6").attr("class")[6] == "X" && $("#9").attr("class")[6] == "X") || ($("#3").attr("class")[6] == "O" && $("#6").attr("class")[6] == "O" && $("#9").attr("class")[6] == "O")){
                                    if (($("#3").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }else if(($("#3").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }
                                }else if (($("#1").attr("class")[6] == "X" && $("#5").attr("class")[6] == "X" && $("#9").attr("class")[6] == "X") || ($("#1").attr("class")[6] == "O" && $("#5").attr("class")[6] == "O" && $("#9").attr("class")[6] == "O")){
                                    if (($("#1").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }else if(($("#1").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }
                                }else if (($("#3").attr("class")[6] == "X" && $("#5").attr("class")[6] == "X" && $("#7").attr("class")[6] == "X") || ($("#3").attr("class")[6] == "O" && $("#5").attr("class")[6] == "O" && $("#7").attr("class")[6] == "O")){
                                    if (($("#3").attr("class")[6] == "X")){
                                        $("#playground").remove();
                                        $.get("./index6.html", function(data){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }else if(($("#3").attr("class")[6] == "O")){
                                        $("#playground").remove();
                                        $.get("./index7.html", function(){
                                            $("#message").after(data);
                                            $("#message").after("<button id = 'revert'>Start Again<button>");  
                                            $("#revert").on("click", function(){
                                                decider = 1;
                                                window.location.href = window.location.href;
                                            })
                                        })
                                        
                                    }
                                }else if(length <= 0){
                                    $("#playground").remove();
                                    $.get("./index8.html", function(data){
                                        $("#message").after(data);
                                        $("#message").after("<button id = 'revert'>Start Again<button>");  
                                        $("#revert").on("click", function(){   decider = 1
                                            window.location.href = window.location.href;  
                                        })
                                    })
                                    
                                }                              
                            }
                        })
                    })
                })
            })
        }
    }
})