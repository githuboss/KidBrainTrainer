var elem = document.getElementById('myCanvas'),
    elemLeft = elem.offsetLeft,
    elemTop = elem.offsetTop,
    context = elem.getContext('2d'),
    elements = [];

make_base();

elem.addEventListener('click', function(event) {
    var x = event.pageX - elemLeft,
        y = event.pageY - elemTop;
    console.log(x, y);
    // if (x > 200){
    //   alert('hahahaha');
    //   playSound(1);
    // }
    if ( x > 400 && x < 640 && y > 115 && y < 260){ //sarawak
      playSound(sarawak,1)
    }
    if ( x > 660 && x < 800 && y > 20 && y < 125){ //sabah
      playSound(sabah,1)
    }
    else if ( x > 5 && x < 50 && y > 38 && y < 62){ //perlis
      playSound(perlis,1)
    }
    else if ( x > 45 && x < 89 && y > 67 && y < 111){ //kedah
      playSound(kedah,1)
    }
    else if ( x > 35 && x < 60 && y > 114 && y < 141){ //penang
      playSound(penang,1)
    }
    else if ( x > 55 && x < 117 && y > 148 && y < 219){ //perak
      playSound(perak,1)
    }
    else if ( x > 146 && x < 185 && y > 89 && y < 163){ //kelantan
      playSound(kelantan,1)
    }
    else if ( x > 192 && x < 254 && y > 114 && y < 191){ //terengganu
      playSound(terengganu,1)
    }
    else if ( x > 148 && x < 216 && y > 178 && y < 265){ //pahang
      playSound(pahang,1)
    }
    else if ( x > 93 && x < 137 && y > 241 && y < 289){ //selangor
      playSound(selangor,1)
    }
    else if ( x > 156 && x < 190 && y > 321 && y < 341){ //melaka
      playSound(melaka,1)
    }
    else if ( x > 201 && x < 303 && y > 324 && y < 397){ //johor
      playSound(johor,1)
    }
    else if ( x > 130 && x < 143 && y > 267 && y < 283){ //kualalumpur
      playSound(kualalumpur,1)
    }
    else if ( x > 146 && x < 193 && y > 285 && y < 315){ //negerisembilan
      playSound(negerisembilan,1)
    }

}, false);

function make_base()
{
  base_image = new Image();
  base_image.src = 'img/malaysia-map1.png';
  base_image.onload = function(){
    context.drawImage(base_image, 0, 0);
  }
}

var sarawak = new Audio("audio/sarawak.m4a");
    sarawak.preload = 'auto';
    sarawak.load();

var sabah = new Audio("audio/sabah.m4a");
    sabah.preload = 'auto';
    sabah.load();

var perlis = new Audio("audio/perlis.m4a");
    perlis.preload = 'auto';
    perlis.load();

var kedah = new Audio("audio/kedah.m4a");
    kedah.preload = 'auto';
    kedah.load();

var penang = new Audio("audio/penang.m4a");
    penang.preload = 'auto';
    penang.load();

var perak = new Audio("audio/perak.m4a");
    perak.preload = 'auto';
    perak.load();

var kelantan = new Audio("audio/kelantan.m4a");
    kelantan.preload = 'auto';
    kelantan.load();

var terengganu = new Audio("audio/terengganu.m4a");
    terengganu.preload = 'auto';
    terengganu.load();

var pahang = new Audio("audio/pahang.m4a");
    pahang.preload = 'auto';
    pahang.load();

var selangor = new Audio("audio/selangor.m4a");
    selangor.preload = 'auto';
    selangor.load();

var melaka = new Audio("audio/melaka.m4a");
    melaka.preload = 'auto';
    melaka.load();

var johor = new Audio("audio/johor.m4a");
    johor.preload = 'auto';
    johor.load();

var kualalumpur = new Audio("audio/kualalumpur.m4a");
    kualalumpur.preload = 'auto';
    kualalumpur.load(); 

var negerisembilan = new Audio("audio/negerisembilan.m4a");
    negerisembilan.preload = 'auto';
    negerisembilan.load();

function playSound(state,volume) {
      var click = state.cloneNode();
      click.volume = volume;
      click.play();
    }


$('#back').click(function(){
  location.href = "Choose.html";
})