

var closeCard = document.querySelector(".closeCard")

closeCard.addEventListener('click', function() {

    this.parentElement.style.display = 'none';
})

// for setting visibility on Fab button
var fabButton = document.querySelector(".fabButton")
var fabOptions = document.querySelector(".fabOptions")
fabButton.addEventListener('click', ()=>{

    const styl = getComputedStyle(fabOptions)
    const visibility = styl.visibility;
    if(visibility == 'collapse'){

        fabOptions.style.visibility = 'visible'
    }
    else{

        fabOptions.style.visibility = 'collapse'
    }
})


