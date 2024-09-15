let allImages = Array.from(document.querySelectorAll('.images'));
let popup = document.querySelector('.popup');
let cross = document.querySelector('.cross');
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let preview = document.querySelector('.preview');
let position = 0;

allImages.map((elmt,index) =>{
   elmt.addEventListener('click', function(){
    popup.classList.add('active');
    preview.src = allImages[index].src;
    position = index;

    right.addEventListener('click', function(){
        if(position == (allImages.length) - 1){
            position = 0;
        }else{
            position += 1;
        }
        preview.src = allImages[position].src;
    
       })

       left.addEventListener('click', function(){
        if(position == (allImages.length) + 1){
            position = 0;
        }else{
            position -= 1;
        }
        preview.src = allImages[position].src;
       })
   })
})


cross.addEventListener('click', function(){
    popup.classList.remove('active');
})


//For removing the outside part
popup.addEventListener('click', function(a){
    if(a.target.classList.contains('active')){
        popup.classList.remove('active');
    }
})