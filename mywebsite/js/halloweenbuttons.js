// Some JS for triggering the dripping blood
// from https://codepen.io/huntthee/details/bGrBgWv
const bloodButton = document.getElementById('blood');
const drip1 = document.getElementById('drip-1');
const drip2 = document.getElementById('drip-2');
const drip3 = document.getElementById('drip-3');
const drip4 = document.getElementById('drip-4');
const drip5 = document.getElementById('drip-5');
const drip6 = document.getElementById('drip-6');
const drip7 = document.getElementById('drip-7');
const drip8 = document.getElementById('drip-8');
bloodButton.addEventListener('mouseover', (event) => {
 /*drip1.style.animation = 'drip 1.2s ease-out';
  drip2.style.animation = 'drip 2s ease-out';
  drip3.style.animation = 'drip 2.5s ease-out';
  drip4.style.animation = 'drip 1.5s ease-out';
  drip5.style.animation = 'drip 2s ease-out';
  drip6.style.animation = 'drip 2.3s ease-out';
  drip7.style.animation = 'drip 2.3s ease-out';
  drip8.style.animation = 'drip 2.3s ease-out';*/
  drip1.style.display = 'block';
  drip1.style.animation = 'drip 1.2s ease-out';
  drip2.style.display = 'block';
  drip2.style.animation = 'drip 2s ease-out';
  drip3.style.display = 'block';
  drip3.style.animation = 'drip 2.5s ease-out';
  drip4.style.display = 'block';
  drip4.style.animation = 'drip 1.5s ease-out';
  drip5.style.display = 'block';
  drip5.style.animation = 'drip 2s ease-out';
  drip6.style.display = 'block';
  drip6.style.animation = 'drip 2.3s ease-out';
  drip7.style.display = 'block';
  drip7.style.animation = 'drip 2s ease-out';
  drip8.style.display = 'block';
  drip8.style.animation = 'drip 1.3s ease-out';
})

bloodButton.addEventListener('mouseout', (event) => {
  if (event) {
    drip1.style.display = 'none';
    drip2.style.display = 'none';
    drip3.style.display = 'none';
    drip4.style.display = 'none';
    drip5.style.display = 'none';
    drip6.style.display = 'none';
    drip7.style.display = 'none';
    drip8.style.display = 'none';
    drip1.style.animation = '';
    drip2.style.animation = '';
    drip3.style.animation = '';
    drip4.style.animation = '';
    drip5.style.animation = '';
    drip6.style.animation = '';
    drip7.style.animation = '';
    drip8.style.animation = '';
  }
})

