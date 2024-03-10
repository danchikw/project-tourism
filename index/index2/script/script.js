
let med = document.getElementById('media-menu');
let medblack = document.getElementById('media-black')
function MedIcon(){
    med.style.display='block';
    medblack.style.right='0'
}
function MedIcons(){
    medblack.style.right='-260px'
    setTimeout(function (){
        med.style.display='none';
    },1000)
}