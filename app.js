const CurrentImage = document.querySelector('#image')
const images = ['images/pilt1.jpg','images/pilt2.jpg','images/pilt3.jpg','images/pilt4.jpg','images/pilt5.jpg','images/pilt6.jpg'];



function ChangeImage(){
    console.log("Hello from script file");

    let randomnumber = Math.floor(Math.random() * images.length);

    console.log(images[randomnumber]);

CurrentImage.src = images[randomnumber];

}