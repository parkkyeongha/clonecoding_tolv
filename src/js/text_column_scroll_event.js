const slides = [
    {
        img: '.background-images1',
        text: '.text-slides1',
    },
    {
        img: '.background-images2',
        text: '.text-slides2',
    },
    {
        img: '.background-images3',
        text: '.text-slides3',
    },
    {
        img: '.background-images4',
        text: '.text-slides4',
    },
    {
        img: '.background-images5',
        text: '.text-slides5',
    },
];

let currentVisibleImg = "";

window.addEventListener("scroll", (event) => {
    slides.forEach(function(element){
        const docViewTop = $(window).scrollTop();
        const docViewBottom = docViewTop + $(window).height();
        
        const imgViewTop = $(element.img).offset().top;
        const imgViewBottom = imgViewTop + $(element.img).height();
        
        const div = document.querySelector(element.text);
        if(docViewTop<=imgViewBottom && docViewBottom >= imgViewBottom){
            //현재 보이는 슬라이드
            div.style.display = "block";
        }else{
            div.style.display = "none";
        }
    });
});