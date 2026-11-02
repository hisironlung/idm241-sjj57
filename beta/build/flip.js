
const cards = document.querySelectorAll('.card');

cards.forEach(function (card) {
  card.addEventListener('click', function () {
    card.classList.toggle('flipped');
  });
});

const foxtext = document.getElementById('foxstart');
const foxogtext = foxtext.innerHTML;
const foxnext = document.getElementById('foxnext')
const foxprev = document.getElementById('foxprev')
let foxpage = 0;

foxnext.addEventListener('click', () => {
    event.stopPropagation();

    foxtext.classList.add('activeleft');

    setTimeout(() => {
      if (foxpage == 0){
      foxtext.innerHTML = "<p>ROH World Television Championship 1x</p><p>CZW Wired TV Championship 3x</p><p>Lucha Underground Trios Championship 1x</p>";
      foxpage++;
    } else if (foxpage == 1){
      foxtext.innerHTML = "<h3>Notable Promotions</h3><p>Lucha Underground</p><p>Combat Zone Wrestling</p><p>Evolve</p><p>Ring of Honor</p><p>All Elite Wrestling</p>";
      foxpage++;
    }
    else if (foxpage == 2){
      foxtext.innerHTML = foxogtext;
      foxpage = 0;
    }

    foxtext.classList.remove('activeleft');

    }, 200);

    
  });

foxprev.addEventListener('click', () => {
  event.stopPropagation();

  foxtext.classList.add('activeright');

  setTimeout(() => {

    if (foxpage == 0){
      foxtext.innerHTML = "<h3>Notable Promotions</h3><p>Lucha Underground</p><p>Combat Zone Wrestling</p><p>Evolve</p><p>Ring of Honor</p><p>All Elite Wrestling</p>";
      foxpage = 2;
    } else if (foxpage == 1){
      foxtext.innerHTML = foxogtext;
      foxpage--;
    }
    else if (foxpage == 2){
      foxtext.innerHTML = "<p>ROH World Television Championship 1x</p><p>CZW Wired TV Championship 3x</p><p>Lucha Underground Trios Championship 1x</p>";
      foxpage--;
    }

    foxtext.classList.remove('activeright');

  }, 200);

  
  });



const taketext = document.getElementById('takestart');
const takeogtext = taketext.innerHTML;
const takenext = document.getElementById('takenext')
const takeprev = document.getElementById('takeprev')
let takepage = 0;

takenext.addEventListener('click', () => {
    event.stopPropagation();

    taketext.classList.add('activeleft');

    setTimeout(() => {
      if (takepage == 0){
      taketext.innerHTML = "<p>KO-D Openweight Championship 5x</p><p>AEW International Championship 2x</p><p>IWGP Heavyweight Championship 1x</p><p>KO-D Tag Team Championship 4x</p>";
      takepage++;
    } else if (takepage == 1){
      taketext.innerHTML = "<h3>Notable Promotions</h3><p>New Japan Pro Wrestling</p><p>DDT Pro-Wrestling</p><p>All Elite Wrestling</p>";
      takepage++;
    }
    else if (takepage == 2){
      taketext.innerHTML = takeogtext;
      takepage = 0;
    }

      taketext.classList.remove('activeleft');
    }, 200);

    
  });

takeprev.addEventListener('click', () => {
  event.stopPropagation();

  taketext.classList.add('activeright');

  setTimeout(() => {

    if (takepage == 0){
      taketext.innerHTML = "<h3>Notable Promotions</h3><p>New Japan Pro Wrestling</p><p>DDT Pro-Wrestling</p><p>All Elite Wrestling</p>";
      takepage = 2;
    } else if (takepage == 1){
      taketext.innerHTML = takeogtext;
      takepage--;
    }
    else if (takepage == 2){
      taketext.innerHTML = "<p>KO-D Openweight Championship 5x</p><p>AEW International Championship 2x</p><p>IWGP Heavyweight Championship 1x</p><p>KO-D Tag Team Championship 4x</p>";
      takepage--;
    }

    taketext.classList.remove('activeright');
  }, 200);

  
  });



const dannytext = document.getElementById('dannystart');
const dannyogtext = dannytext.innerHTML;
const dannynext = document.getElementById('dannynext')
const dannyprev = document.getElementById('dannyprev')
let dannypage = 0;

dannynext.addEventListener('click', () => {
    event.stopPropagation();

    dannytext.classList.add('activeleft');

    setTimeout(() => {

      if (dannypage == 0){
      dannytext.innerHTML = "<p>ROH Pure Championship 1x</p><p>PWG World Championship 1x</p><p>Limitless World Championship 1x</p><p>AEW TNT Championship 1x</p>";
      dannypage++;
    } else if (dannypage == 1){
      dannytext.innerHTML = "<h3>Notable Promotions</h3><p>All Elite Wrestling</p><p>Ring of Honor</p><p>Empire State Wrestlin</p><p>Pro Wrestling Guerrilla</p><p>Limitless Wrestling</p>";
      dannypage++;
    }
    else if (dannypage == 2){
      dannytext.innerHTML = dannyogtext;
      dannypage = 0;
    }

      dannytext.classList.remove('activeleft');
    }, 200);

    
  });

dannyprev.addEventListener('click', () => {
  event.stopPropagation();

  dannytext.classList.add('activeright');

  setTimeout(() => {

    if (dannypage == 0){
      dannytext.innerHTML = "<h3>Notable Promotions</h3><p>All Elite Wrestling</p><p>Ring of Honor</p><p>Empire State Wrestlin</p><p>Pro Wrestling Guerrilla</p><p>Limitless Wrestling</p>";
      dannypage = 2;
    } else if (dannypage == 1){
      dannytext.innerHTML = dannyogtext;
      dannypage--;
    }
    else if (dannypage == 2){
      dannytext.innerHTML = "<p>ROH Pure Championship 1x</p><p>PWG World Championship 1x</p><p>Limitless World Championship 1x</p><p>AEW TNT Championship 1x</p>";
      dannypage--;
    }

    dannytext.classList.remove('activeright');

  }, 200);

  
  });