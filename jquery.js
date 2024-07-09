
                                                         //   example of jQuery Event 

// $(document).ready(function(){
//           $("button").click(function(){
//             $("p").hide();
//           });
//         });



//         $("input").focus(function(){
//             $(this).css("background-color", "yellow");
//           });
//           $("input").blur(function(){
//             $(this).css("background-color", "green");
//           });


//           $(".p").on({
//             mouseenter: function(){
//               $(this).css("background-color", "lightgray");
//             },  
//             mouseleave: function(){
//               $(this).css("background-color", "lightblue");
//             }, 
//             click: function(){
//               $(this).css("background-color", "yellow");
//             }  
//           });
                                                
                                                                   //   example of jQuery Effect 


//           $("#hide").click(function(){
//             $(".test").hide();
//           });
//           $("#show").click(function(){
//             $(".test").show();
//           });



        //   $("button").click(function(){
        //     $("div").animate({
        //       left: '250px',
        //       opacity: '0.5',
        //       height: '150px',
        //       width: '150px'
        //     });
        //   });


        // $(document).ready(function(){
        //     $("#flip").click(function(){
        //       $("#panel").slideDown(1000);
        //     });
        //     $("#stop").click(function(){
        //       $("#panel").stop();
        //     });
        //   });


        
    //     $("button").click(function(){
    //  $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
    // });

                                                               //   example of jQuery HTML 


    // $("#btn1").click(function(){
    //     $("#test1").text("Hello world!");
    //   });
    //   $("#btn2").click(function(){
    //     $("#test2").html("<b>Hello world!</b>");
    //   });
    //   $("#btn3").click(function(){
    //     $("#test3").val("Dolly Duck");
    //   });




    // function afterText() {
    //  $("img").after($("<i></i>").text("love "));         
    //   }


    // $("#div1").remove();





    // $("button").click(function(){
    //     $("h1, h2, p").addClass("blue");
    //     $("div").addClass("important");
    //   });




//     $("button").click(function(){
//   $("h1, h2, p").removeClass("blue");
// });


// $("p").css({"background-color": "yellow", "font-size": "200%"});


                                                                            //   example of jQuery Traversing

//   $("h2").siblings("p");

//   $("h2").next()

// $("h2").nextUntil("h6");

// $("div").first();
    
// $("div").last();

// $("p").eq(1);

// $("p").not(".intro");

// $("p").filter(".intro");



                                                                 //   example of jQuery AJAX


// $("button").click(function(){
//     $("#div1").load("https://api.github.com/users/elzerowebschool/repos");
//   });

// $("button").click(function(){
//     $("#div1").load("https://api.github.com/users/elzerowebschool/repos", function(responseTxt, statusTxt, xhr){
//       if(statusTxt == "success")
//         alert("External content loaded successfully!");
//       if(statusTxt == "error")
//         alert("Error: " + xhr.status + ": " + xhr.statusText);
//     });
//   });



// $("button").click(function(){
//     $.get("https://api.github.com/users/elzerowebschool/repos", function(data, status){
//       alert("Data: " + data + "\nStatus: " + status);// sucess 
//     });
//   });



// $("button").click(function(){
//     $.post("demo_test_post.asp",
//     {
//       name: "Donald Duck",
//       city: "Duckburg"
//     },
//     function(data,status){
//       alert("Data: " + data + "\nStatus: " + status);
//     });
//   });

