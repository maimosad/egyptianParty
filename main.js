//nav
$(".openNav").click(function(){

$('#leftMenu').animate({width:'250px'});
$('#home-content').animate({marginLeft:'270px'});


});
$(".closebtn").click(function(){

   
    $('#leftMenu').animate({width:'0px'});
    $('#home-content').animate({marginLeft:'0'});
    });
    $('.toggle').click(function(){
    $('.inner').not($(this).next()).slideUp();
       $(this).next().slideToggle();
        
        
            })
            ///*counter*/

            $(document).ready(function() {

                function timeConverter(UNIX_timestamp) {
                  var a = new Date(UNIX_timestamp * 1000);
                  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                  var year = a.getFullYear();
                  var month = months[a.getMonth()];
                  var date = a.getDate();
                  var hour = a.getHours();
                  var min = a.getMinutes();
                  var sec = a.getSeconds();
                  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
                  // return time;
                  console.log(date);
              
                  $("#timer #days").html("<span>Days</span>" + date);
                  $("#timer #hours").html("<span>Hours</span>" + hour);
                  $("#timer #minutes").html("<span>Minutes</span>" + min);
                  $("#timer #seconds").html("<span>Seconds</span>" + sec);
                }
              
                function makeTimer() {
              
                  var endTime = new Date("September 01, 2024 00:00:00");
                  var endTime = (Date.parse(endTime)) / 1000; //replace these two lines with the unix timestamp from the server
              
                  var now = new Date();
                  var now = (Date.parse(now) / 1000);
              
                  var timeLeft = endTime - now;
              
                  var days = Math.floor(timeLeft / 86400);
                  var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
                  var Xmas95 = new Date('December 25, 2024 23:15:30');
                  // console.log(Xmas95);
                  // console.log(Date.parse(timeLeft * 1000));
                  var hour = Xmas95.getHours();
                  // console.log(hour);
              
                  var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
                  var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
              
                  if (hours < "10") {
                    hours = "0" + hours;
                  }
                  if (minutes < "10") {
                    minutes = "0" + minutes;
                  }
                  if (seconds < "10") {
                    seconds = "0" + seconds;
                  }
              
                  $(".tim .days").html("<span>D </span>" + days);
                  $(".tim .hours").html("<span>H </span>" + hours);
                  $(".tim .minutes").html("<span>M </span>" + minutes);
                  $(".tim .seconds").html("<span>S </span>" + seconds);
              
                }
              
                setInterval(function() {
                  makeTimer();
                }, 1000);
              
              });

              var maxLength = 100;
$('textarea').keyup(function() {
  var textlen = maxLength - $(this).val().length;
  $('#chars').text(textlen);
});