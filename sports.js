let fet=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=sports&sportName=football&apiKey=d1b0b64f769b4651bf7def99d13378ab&pageSize=50`;
let res=await fetch(url);
let data=await res.json();
console.log(data.articles)
append(data.articles);
}
append=(data)=>{
    let main=document.getElementById("sports");
    main.innerHTML=null;
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        if (
             i === 1 ||
             i === 7 ||
             i === 11 ||
             i === 17 ||
             i === 21 ||
             i === 27 ||
             i === 31
        ) {
             let div1 = document.createElement("div");
             div1.setAttribute("id", "sub");
             let div2 = document.createElement("div");
             div2.setAttribute("id", "sub");
             let div3 = document.createElement("div");
             div3.setAttribute("id", "sub");
             let img = document.createElement("img");
             let img1 = document.createElement("img");
             let img2 = document.createElement("img");
             let content = document.createElement("h3");
             let content1 = document.createElement("h3");
             let content2 = document.createElement("h3");
             img.src = data[i].urlToImage;
             content.innerText = data[i].title;
             img1.src = data[i + 1].urlToImage;
             content1.innerText = data[i + 1].title;
             i = i + 1;
             img2.src = data[i + 1].urlToImage;
             content2.innerText = data[i + 1].title;
             i = i + 1;
             div1.append(img, content);
             div2.append(img1, content1);
             div3.append(img2, content2);
             div.append(div1, div2, div3);
             main.append(div);
        } else {
             let img = document.createElement("img");
             img.src = data[i].urlToImage;
             let des = document.createElement("h3");
             // des.innerText=el.description;
             let content = document.createElement("h3");
             content.innerText = data[i].title;
             div.append(img, content, des);
             main.append(div);
        }
   }

}
fet();
let cricket=async()=>{
    let url=` https://newsdata.io/api/1/news?apikey=pub_10652959f353157463c020e23132a896a6261&q=cricket`;
    let res=await fetch(url);
    let data=await res.json();
    crick(data.results);
}
crick=(data)=>{
    let main=document.getElementById("crick");
    main.innerHTML=null;
    data.forEach((el)=> {
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=`https://wallpaperaccess.com/full/1088580.jpg`;
        let p=document.createElement("p");
        p.innerText=el.title;
      div.append(img,p);
        main.append(div);
    });
}
cricket()
let foot=async()=>{
    let url=`https://newsdata.io/api/1/news?apikey=pub_10652959f353157463c020e23132a896a6261&q=football`;
    let res=await fetch(url);
    let data=await res.json();
    football(data.results);
}
football=(data)=>{
    let main=document.getElementById("foot");
   main.innerHTML=null;
    
    data.forEach((el)=> {
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=`https://images.indianexpress.com/2022/06/india-Football-pic-credit-aiff.jpg`;
        let p=document.createElement("p");
        p.innerText=el.title;
      div.append(img,p);
        main.append(div);
    });
}
foot()
let ten=async()=>{
    let url=`https://newsdata.io/api/1/news?apikey=pub_10652959f353157463c020e23132a896a6261&q=tennis`;
    let res=await fetch(url);
    let data=await res.json();
    tennis(data.results);
}
tennis=(data)=>{
    let main=document.getElementById("ten");
   main.innerHTML=null;
    
    data.forEach((el)=> {
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=`https://media.istockphoto.com/photos/closeup-of-black-modern-rackets-with-light-green-ball-lying-on-tennis-picture-id1184203343?k=20&m=1184203343&s=612x612&w=0&h=mAe9a7Jvu07AGHc2jRuTme9bTI9bWpiRI_UQq4NPb0w=`;
        let p=document.createElement("p");
        p.innerText=el.title;
      div.append(img,p);
        main.append(div);
    });
}
ten()
