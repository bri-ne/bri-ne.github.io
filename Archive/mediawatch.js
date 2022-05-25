// Create a condition that targets viewports 
const mediaQuery790 = window.matchMedia('(min-width: 790px)')
const mediaQuery770 = window.matchMedia('(min-width: 770px)')
const mediaQuery750 = window.matchMedia('(min-width: 750px)')
const mediaQuery730 = window.matchMedia('(min-width: 730px)')
const mediaQuery710 = window.matchMedia('(min-width: 710px)')

const mediaQueries = [mediaQuery790,mediaQuery770]

const imgBannerObjectPosition = []; // this is list of 
const imgContainerMarginTop = [];

const bannerimg = document.querySelector("#imgbannerimg")
const imgcontainer = document.querySelector("#imgbanner")

function bannerChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log('Media Query Matched!')
    // i has to be able to know what the position is? maybe it need to be a dictionary instead
    let vert = imgBannerObjectPosition[i];
    let top = imgContainerMarginTop[i];

    
    //create the classes
    createCSSSelector(`.BannerImgClass${}`, `object-position: 50px ${vert}px;`);
    createCSSSelector(`.BannerContainerClass${}`, `margin-top: ${top}px;`);

    // remove all classes
    while (bannerimg.classList.length > 0) {
      bannerimg.classList.remove(bannerimg.classList.item(0));
    };
    while (imgcontainer.classList.length > 0) {
      imgcontainer.classList.remove(imgcontainer.classList.item(0));
    };

    //add the baseline classes back 


    //add the new classes
    bannerimg.classList.add(`.${}BannerImgClass`);
    imgcontainer.classList.add(`.${}BannerContainerClass`);

  }
}

mediaQueries.forEach(m => m.addListener(bannerChange))

