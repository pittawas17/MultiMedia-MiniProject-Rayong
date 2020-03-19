

    var slider_content = document.getElementById('box');

    // contain images in an array
    var image = ['SamedPics/1','SamedPics/2', 'SamedPics/3', 'SamedPics/4','SamedPics/5','SamedPics/6','SamedPics/7','SamedPics/8','SamedPics/9','SamedPics/10'];

    var i = image.length;


    // function for next slide 

    function nextImage(){
      if (i<image.length) {
        i= i+1;
      }else{
        i = 1;
      }
        slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";
    }


    // function for prew slide

    function prewImage(){

      if (i<image.length+1 && i>1) {
        i= i-1;
      }else{
        i = image.length;
      }
        slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";

    }

  
  // script for auto image slider

  setInterval(nextImage , 4000);