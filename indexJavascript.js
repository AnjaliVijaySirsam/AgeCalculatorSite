

                    //****************AGE CALCULATION PART*******************


function ageCalculation(birth,currentDate) {
    
    birth = document.getElementById("dob-input").value;
    var dateofbirth = new Date(birth);
    
    var birthdate = dateofbirth.getDate();
    var birthmonth = dateofbirth.getMonth()+1;
    var birthyear = dateofbirth.getFullYear();
    
    currentDate = new Date();
    var dd = currentDate.getDate();
    var mm = currentDate.getMonth()+1;
    var yy = currentDate.getFullYear();
    
    //Get Year
    var ageyear = yy-birthyear;
    
    //Get Month
    if(mm >= birthmonth)
        {
            var agemonth = mm - birthmonth;
        }
    else
        {
            ageyear--;
            var agemonth = 12 + mm - birthmonth;
        }
    
    //get Days
    if(dd >= birthdate)
        {
            var agedays = dd - birthdate;
        }
    else{
        agemonth--;
        var agedays = 31 + dd - birthdate;
        if(agemonth < 0){
            agemonth = 11;
            ageyear--;
        }
    }
    
    
    if(mm == birthmonth && dd == birthdate && ageyear>0)
            { 

                    
          
             document.getElementById("confetti-wrapper").style.display = "block";
                document.getElementById("msg").innerHTML = "👏~~HAPPY BIRTHDAY~~👏";
                document.getElementById("msg").style.display = "block";
                document.getElementById("dispYear").innerText = ageyear ;
                document.getElementById("dispMonth").innerText = agemonth;
                document.getElementById("dispDays").innerText = agedays;
            }
    else{
     document.getElementById("dispYear").innerText = ageyear ;
     document.getElementById("dispMonth").innerText = agemonth;
     document.getElementById("dispDays").innerText = agedays;

    }
}
  function resetfunct(){
      document.getElementById("confetti-wrapper").style.display = "none";
      document.getElementById("dob-input").valueAsDate = null;document.getElementById("msg").style.display = "none";
            document.getElementById("dispYear").innerText = null;
          document.getElementById("dispMonth").innerText = null;
                document.getElementById("dispDays").innerText = null;
 }





                        //***************   ANIMATION PART  *****************




for(i=0; i<100; i++) {
  // Random rotation
  var randomRotation = Math.floor(Math.random() * 360);
    // Random Scale
  var randomScale = Math.random() * 1;
  // Random width & height between 0 and viewport
  var randomWidth = Math.floor(Math.random() * Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
  var randomHeight =  Math.floor(Math.random() * Math.max(document.documentElement.clientHeight, window.innerHeight || 500));
  
  // Random animation-delay
  var randomAnimationDelay = Math.floor(Math.random() * 15);
  console.log(randomAnimationDelay);

  // Random colors
  var colors = ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#FFC61C', '#8497B0']
  var randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Create confetti piece
  var confetti = document.createElement('div');
  confetti.className = 'confetti';
  confetti.style.top=randomHeight + 'px';
  confetti.style.right=randomWidth + 'px';
  confetti.style.backgroundColor=randomColor;
  // confetti.style.transform='scale(' + randomScale + ')';
  confetti.style.obacity=randomScale;
  confetti.style.transform='skew(15deg) rotate(' + randomRotation + 'deg)';
  confetti.style.animationDelay=randomAnimationDelay + 's';
  document.getElementById("confetti-wrapper").appendChild(confetti);
}