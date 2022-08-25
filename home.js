let key=`d1b0b64f769b4651bf7def99d13378ab`;
let get=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&pageSize=100&apiKey=d1b0b64f769b4651bf7def99d13378ab`;
    let res=await fetch(url);
    let data=await res.json();
    append(data.articles);
    console.log(data)
}
get();
append=(data)=>{
let main=document.getElementById("append");
main.innerHTML=null;
for(let i=0;i<data.length;i++){
    let div=document.createElement("div");
    if(i===1||i===7||i===11||i===17||i===21||i===27||i===31){
        let div1=document.createElement("div");
        div1.setAttribute("id","sub");
        let div2=document.createElement("div");
        div2.setAttribute("id","sub");
        let div3=document.createElement("div");
        div3.setAttribute("id","sub");
        let img=document.createElement("img");
        let img1=document.createElement("img");
        let img2=document.createElement("img");
        let content=document.createElement("h3");
        let content1=document.createElement("h3");
        let content2=document.createElement("h3");
        img.src=data[i].urlToImage;
        content.innerText=data[i].title;
        img1.src=data[i+1].urlToImage;
        content1.innerText=data[i+1].title;
        i=i+1;
        img2.src=data[i+1].urlToImage;
        content2.innerText=data[i+1].title;
        i=i+1;
     div1.append(img,content)
    div2.append(img1,content1);
    div3.append(img2,content2);
    div.append(div1,div2,div3);  
    main.append(div);
    }
else{
    let img=document.createElement("img");
    img.src=data[i].urlToImage;
    let des=document.createElement("h3");
    // des.innerText=el.description;
    let content=document.createElement("h3");
    content.innerText=data[i].title;
    div.append(img,content,des);
    main.append(div);}
};

let divs=document.querySelector("#append>div:nth-child(3)");
let f=document.createElement("iframe");
f.setAttribute("id","frame");
f.src="https://www.dailymotion.com/embed/video/x8d7vzt?autoplay=1";
divs.append(f);
}

let get1=async()=>{
    let url=`https://newsapi.org/v2/everything?domains=ndtv.com&apiKey=d1b0b64f769b4651bf7def99d13378ab`;
    let res=await fetch(url);
    let data=await res.json();
    stories(data.articles);
}
get1();
stories=(data)=>{
    let main=document.getElementById("stories");
    main.innerHTML=null;

for(let i=0;i<data.length;i++){
    let div=document.createElement("div");
    if(i===1||i===7||i===11||i===17||i===21||i===27||i===31||i===38||i===46||i===54||i===62||i===70||i===78||i===86||i===92||i===97){
        let div1=document.createElement("div");
        div1.setAttribute("id","story");
        let div2=document.createElement("div");
        div2.setAttribute("id","story");
        let div3=document.createElement("div");
        div3.setAttribute("id","sub");
        let img=document.createElement("img");
        let img1=document.createElement("img");
        let img2=document.createElement("img");
        let content=document.createElement("h3");
        let content1=document.createElement("h3");
        let content2=document.createElement("h3");
        img.src=data[i].urlToImage;
        content.innerText=data[i].title;
        img1.src=data[i+1].urlToImage;
        content1.innerText=data[i+1].title;
        i=i+1;
        img2.src=data[i+1].urlToImage;
        content2.innerText=data[i+1].title;
        i=i+1;
     div1.append(img,content)
    div2.append(img1,content1);
    div3.append(img2,content2);
    div.append(div1,div2);  
    main.append(div);
    
    }

    else{
        
    let img=document.createElement("img");
    img.src=data[i].urlToImage;
    let des=document.createElement("h3");
    // des.innerText=el.description;
    let content=document.createElement("h3");
    content.innerText=data[i].title;
    div.append(img,content,des);
    main.append(div);}
};
let divs=document.querySelector("#stories>div:nth-child(4)");
let f=document.createElement("iframe");
f.setAttribute("id","frame");
f.src="https://www.dailymotion.com/embed/video/x8d7vzt?autoplay=1";
divs.append(f);

}
let get2=async()=>{
    let url=`https://newsapi.org/v2/everything?q=karnataka&sortBy=publishedAt&apiKey=${key}`;
    let res=await fetch(url);
    let data=await res.json();
    karnatka(data.articles);
    console.log(data,"yes")
}
get2();
karnatka=(data)=>{
    let main=document.getElementById("karnataka");
main.innerHTML=null;
for(let i=0;i<data.length;i++){
    let div=document.createElement("div");
    if(i===1||i===7||i===11||i===17||i===21||i===27||i===31||i===35||i===41||i===47||i===63||i===70||i===77||i===83||i===90||i===94){
        let div1=document.createElement("div");
        div1.setAttribute("id","sub");
        let div2=document.createElement("div");
        div2.setAttribute("id","sub");
        let div3=document.createElement("div");
        div3.setAttribute("id","sub");
        let img=document.createElement("img");
        let img1=document.createElement("img");
        let img2=document.createElement("img");
        let content=document.createElement("h3");
        let content1=document.createElement("h3");
        let content2=document.createElement("h3");
        img.src=data[i].urlToImage;
        content.innerText=data[i].title;
        img1.src=data[i+1].urlToImage;
        content1.innerText=data[i+1].title;
        i=i+1;
        img2.src=data[i+1].urlToImage;
        content2.innerText=data[i+1].title;
        i=i+1;
     div1.append(img,content)
    div2.append(img1,content1);
    div3.append(img2,content2);
    div.append(div1,div2,div3);  
    main.append(div);
    
    }

    else{
    let img=document.createElement("img");
    img.src=data[i].urlToImage;
    let des=document.createElement("h3");
    // des.innerText=el.description;
    let content=document.createElement("h3");
    content.innerText=data[i].title;
    div.append(img,content,des);
    main.append(div);}
};
}

let get3=async()=>{
    let url=`https://newsapi.org/v2/everything?q=bengaluru&sortBy=publishedAt&apiKey=${key}`;
    let res=await fetch(url);
    let data=await res.json();
    bangl(data.articles);
    console.log(data,"yes")
}
get3();
bangl=(data)=>{
    let main=document.getElementById("banglure");
main.innerHTML=null;
for(let i=0;i<data.length;i++){
    let div=document.createElement("div");
    if(i===1||i===7||i===11||i===17||i===21||i===27||i===31||i===35||i===41||i===47||i===63||i===70||i===77||i===83||i===90||i===94){
        let div1=document.createElement("div");
        div1.setAttribute("id","sub");
        let div2=document.createElement("div");
        div2.setAttribute("id","sub");
        let div3=document.createElement("div");
        div3.setAttribute("id","sub");
        let img=document.createElement("img");
        let img1=document.createElement("img");
        let img2=document.createElement("img");
        let content=document.createElement("h3");
        let content1=document.createElement("h3");
        let content2=document.createElement("h3");
        img.src=data[i].urlToImage;
        content.innerText=data[i].title;
        img1.src=data[i+1].urlToImage;
        content1.innerText=data[i+1].title;
        i=i+1;
        img2.src=data[i+1].urlToImage;
        content2.innerText=data[i+1].title;
        i=i+1;
     div1.append(img,content)
    div2.append(img1,content1);
    div3.append(img2,content2);
    div.append(div1,div2,div3);  
    main.append(div);
    
    }

    else{
    let img=document.createElement("img");
    img.src=data[i].urlToImage;
    let des=document.createElement("h3");
    // des.innerText=el.description;
    let content=document.createElement("h3");
    content.innerText=data[i].title;
    div.append(img,content,des);
    main.append(div);}
};
}

import navBar from "./components/nav.js";
document.getElementById("nav").innerHTML=navBar();

import footer from "./components/footerling.js";
document.getElementById("foot").innerHTML=footer();