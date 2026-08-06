window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

sections.forEach(section =>{

    observer.observe(section);

});

const btn = document.createElement("button");

btn.innerHTML="↑";

btn.id="topBtn";

document.body.appendChild(btn);

window.addEventListener("scroll",()=>{

    if(document.documentElement.scrollTop>300){

        btn.style.display="block";

    }else{

        btn.style.display="none";

    }

});

btn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

const footer=document.querySelector("footer");

footer.innerHTML=
`© ${new Date().getFullYear()} BOS Mesin Laundry - Seluruh Hak Cipta Dilindungi`;