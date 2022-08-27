document.querySelector("#login").addEventListener("click", displayLogin);
let arr = JSON.parse(localStorage.getItem("details")) || [];
let emailflag = false;
let mobileflag = false;
let selectflag = false;
let nameflag = false;
let Cpasswordflag = false;
let termflag = false;
let dailypaperflag = false;
let inputf = false;
let input1f = false;

let loginfield = false;
let passwordfield = false;

displayLogin();
function displayLogin() {
     let form = document.querySelector("form");
     let message = document.createElement("div");
     message.style.fontSize = "12px";
     let wem = document.createElement("p");
     form.innerHTML = "";
     let inputemail = document.createElement("input");
     inputemail.placeholder = "       Email";
     inputemail.addEventListener("input", function () {
          let bag = inputemail.value;
          for (let i = 0; i < bag.length; i++) {
               if (
                    bag[bag.length - 1] === "m" &&
                    bag[bag.length - 2] === "o" &&
                    bag[bag.length - 3] === "c"
               ) {
                    wem.innerText = "";
                    message.style.padding = "0px";
                    inputemail.style.borderColor = "black";
                    loginfield = true;
                    message.style.backgroundColor = "white";
                    message.style.border = "1px solid white";
               } else if ((bag = "")) {
                    wem.innerText = "Enter Correct Email";
                    inputemail.style.borderColor = "red";
                    message.style.padding = "10px";
                    loginfield = false;
                    message.style.padding = "10px";
                    message.style.backgroundColor = "pink";
                    message.style.border = "1px solid red";
                    message.style.color = "red";
               } else {
                    wem.innerText = "Enter Correct Email";
                    inputemail.style.borderColor = "red";
                    message.style.padding = "10px";
                    loginfield = false;
                    message.style.padding = "10px";
                    message.style.backgroundColor = "pink";
                    message.style.border = "1px solid red";
                    message.style.color = "red";
               }
          }
     });

     let inputpassword = document.createElement("input");
     inputpassword.placeholder = "      Password";
     inputpassword.type = "password";
     inputpassword.addEventListener("input", function () {
          let bag = inputpassword.value;
          // if (bag.length < 6) {
          //      wem.innerText =
          //           "Password length should be greater than 6 characters";
          //      inputpassword.style.borderColor = "red";
          //      message.style.padding = "10px";
          //      passwordfield = false;
          //      message.style.padding = "10px";
          //      message.style.backgroundColor = "pink";
          //      message.style.border = "1px solid red";
          //      message.style.color = "red";
          // } else {
          //      wem.innerText = "";
          //      message.style.padding = "0px";
          //      inputemail.style.borderColor = "black";
          //      passwordfield = true;
          //      message.style.backgroundColor = "white";
          //      message.style.border = "1px solid white";
          // }
     });

     let div = document.createElement("div");
     div.style.display = "flex";
     let checkr = document.createElement("p");
     tick = document.createElement("input");
     tick.style.marginRight = "5px";
     tick.type = "checkbox";
     checkr.innerText = "  Remember Me";

     div.append(tick, checkr);

     //      checkBoxes
     let div1 = document.createElement("div");
     div1.style.display = "flex";
     let checkw = document.createElement("p");
     tickw = document.createElement("input");
     tickw.style.marginRight = "5px";
     tickw.type = "checkbox";
     checkw.innerText =
          "  Receive Deccan Herald ePaper subscription updates on ";
     let whatsapp = document.createElement("span");
     whatsapp.innerText = "WhatsApp ";
     whatsapp.style.color = "#008000";
     whatsapp.style.fontSize = "20px";
     whatsapp.style.fontWeight = "bold";
     let logo = document.createElement("img");
     logo.style.width = "20px";
     logo.style.height = "20px";
     logo.setAttribute("src", "images/watsapplogo.png");
     checkw.append(whatsapp, logo);
     div1.append(tickw, checkw);

     button = document.createElement("input");
     button.type = "submit";
     button.setAttribute("value", "LOGIN");
     button.setAttribute("id", "loginbutton");
     button.addEventListener("click", function () {
          event.preventDefault();
          let details = JSON.parse(localStorage.getItem("details")) || [];
          console.log(details);
          let email = inputemail.value;
          let pass = inputpassword.value;
          alert(email, pass);

          // details.forEach(function (elem, ind) {
          //      if (elem.Email === email && elem.Password === pass) {
          //           alert(" Successfully Logged in");
          //      }
          // });
     });

     let forgot = document.createElement("p");
     forgot.innerHTML =
          "<a href='#pass' class='conditions'>Forgot Password?</a>";

     let hr = document.createElement("div");

     hr.style.textAlign = "center";

     let line1 = document.createElement("div");
     line1.style.display = "inline";
     let orlogin = document.createElement("span");
     orlogin.style.display = "inline";
     orlogin.innerText = "or login using";
     let line2 = document.createElement("div");
     hr.append(line1, orlogin, line2);

     let div10 = document.createElement("div");
     div10.style.display = "flex";
     div10.style.justifyContent = "center";
     let img = document.createElement("img");
     img.setAttribute("src", "images/fbnew.png");
     let line3 = document.createElement("div");
     line3.style.border = "1px solid black";
     let imgg = document.createElement("img");
     imgg.setAttribute("src", "images/googlenew.png");
     div10.append(img, line3, imgg);

     message.append(wem);
     form.append(
          message,
          inputemail,
          inputpassword,
          div,
          div1,
          button,
          forgot,
          hr,
          div10
     );
}
document.querySelector("#subs").addEventListener("click", displaySubs);
function displaySubs() {
     let form = document.querySelector("form");
     form.innerHTML = "";
     let ads = document.createAttribute("ads");
     let h1 = document.createElement("h3");
     h1.setAttribute("class", "h3");
     h1.innerText = "NATIONAL EDITION OFFER";

     let p = document.createElement("p");
     p.innerText = "National Edition ePaper + Newspaper Delivery";
     p.setAttribute("class", "p");
     let div = document.createElement("div");
     div.style.padding = "5px";
     div.setAttribute("id", "adsparent");
     div.style.display = "flex";
     div.style.gap = "20px";
     div.style.justifyContent = "center";
     div.addEventListener("click", function () {
          document.querySelector("#divform").innerHTML = "";
          signup();
     });
     let div1 = document.createElement("div");
     div1.setAttribute("class", "ads");
     div1.setAttribute("id", "ads1");
     div1.addEventListener("click", function () {
          divform.innerHTML = "";
          let blue = document.querySelector("#ads1");
          blue.style.boxShadow = "0 0px 5px #0087a8";
          let gray = document.querySelector("#ads");
          gray.style.boxShadow = " 0 3px 22px #00000026";
          let gray1 = document.querySelector("#ads2");
          gray1.style.boxShadow = " 0 3px 22px #00000026";
     });
     let divprice = document.createElement("div");

     let price = document.createElement("span");
     price.innerText = "₹4158";
     price.setAttribute("class", "price");
     let span = document.createElement("span");
     span.innerText = "Save 59%";
     span.setAttribute("class", "go");
     divprice.append(price, span);
     head = document.createElement("h3");
     head.innerText = "₹ 1699/- per Year";
     head.style.color = "black";
     para1 = document.createElement("p");
     para1.innerText = "- All features + 90 days archive access";
     para2 = document.createElement("p");
     para2.innerText = "- City Newspaper edition delivered at your doorstep";
     div1.append(divprice, head, para1, para2);

     let div2 = document.createElement("div");
     div2.setAttribute("class", "ads");
     div2.setAttribute("id", "ads2");
     div2.addEventListener("click", function () {
          let blue = document.querySelector("#ads2");
          blue.style.boxShadow = "0 0px 5px #0087a8";
          let gray = document.querySelector("#ads");
          gray.style.boxShadow = " 0 3px 22px #00000026";
          let gray1 = document.querySelector("#ads1");
          gray1.style.boxShadow = " 0 3px 22px #00000026";
     });
     let divprice1 = document.createElement("div");
     let price1 = document.createElement("span");
     price1.innerText = "₹2076";
     price1.setAttribute("class", "price");
     let span1 = document.createElement("span");
     span1.innerText = "Save 52%";
     span1.setAttribute("class", "go");
     divprice1.append(price1, span1);
     head1 = document.createElement("h3");
     head1.style.color = "black";

     head1.innerText = "₹ 999/- per 6 Months";
     para3 = document.createElement("p");
     para3.innerText = "- All features + 60 days archive access";
     para4 = document.createElement("p");
     para4.innerText = "- City Newspaper edition delivered at your doorstep";
     div2.append(divprice1, head1, para3, para4);

     let diveparent = document.createElement("div");

     diveparent.style.display = "flex";
     diveparent.style.flexDirection = "column";

     diveparent.style.justifyContent = "center";
     let khead = document.createElement("h3");
     khead.innerText = "EPAPER ONLY OFFER";
     khead.setAttribute("class", "h3");

     kpara = document.createElement("p");
     kpara.setAttribute("class", "p");
     kpara.innerText = "All Karnataka City Editions";
     let div3 = document.createElement("div");

     div3.setAttribute("class", "ads");
     div3.setAttribute("id", "ads");

     div3.style.margin = "auto";
     let price3 = document.createElement("h3");
     price3.innerHTML = "₹ 166/- per Month";
     price3.style.color = "black";
     head2 = document.createElement("h3");
     head2.innerText = "(+15 days one-time free trial)";
     head2.style.color = "black";

     para4 = document.createElement("p");
     para4.innerText = "- All features + 30 days archive access";
     para5 = document.createElement("p");
     para5.innerText = "Access any city edition of karnataka";
     div3.addEventListener("click", function () {
          divform.innerHTML = "";
          let blue = document.querySelector("#ads");
          blue.style.boxShadow = "0 0px 5px #0087a8";
          signup();
          let gray = document.querySelector("#ads1");
          console.log(gray);
          gray.style.boxShadow = " 0 3px 22px #00000026";
          let gray1 = document.querySelector("#ads2");
          gray1.style.boxShadow = " 0 3px 22px #00000026";
     });
     div3.append(price3, head2, para4, para5);
     diveparent.append(khead, kpara, div3);

     divform = document.createElement("div");
     divform.id = "divform";

     let divfoot = document.createElement("p");
     divfoot.innerText =
          "** Unless you opt-out, your subscription will be auto-renewed on the last day of its validity";
     divfoot.style.textAlign = "center";
     let divfoot2 = document.createElement("p");
     divfoot2.innerText = "**All plan prices are inclusive of GST";
     divfoot2.style.textAlign = "center";
     let pay = document.createElement("p");
     pay.innerText = "Secure Payments By";
     pay.style.textAlign = "center";
     let logodiv = document.createElement("div");
     logodiv.style.display = "flex";
     logodiv.style.margin = "auto";
     logodiv.style.gap = "15px";
     let paytm = document.createElement("img");
     paytm.setAttribute("src", "images/paytm-logo.png");
     let part = document.createElement("div");
     part.style.border = "1px solid black";
     let gpay = document.createElement("img");
     gpay.setAttribute("src", "images/rp-logo.png");
     logodiv.append(paytm, part, gpay);

     div.append(div1, div2);
     form.append(
          h1,
          p,
          div,
          divform,
          diveparent,
          divfoot,
          divfoot2,
          pay,
          logodiv
     );
}

function signup() {
     let sign = document.querySelector("#divform");
     let arr = [];
     let form1 = document.createElement("form");
     form1.id = "signUp";

     let message = document.createElement("div");
     message.setAttribute("id", "message");
     wem = document.createElement("p");
     wem.setAttribute("id", "wem");

     let div1 = document.createElement("div");
     div1.style.flex = "flex";
     div1.setAttribute("id", "formcolumn");

     // flags
     let Email = document.createElement("input");
     Email.placeholder = "Enter Your Email";
     Email.setAttribute("id", "email");
     /// Email error logic
     Email.addEventListener("input", function () {
          emailcheck();
     });

     function emailcheck() {
          event.preventDefault();
          document.querySelector("#Email");
          bag = Email.value;

          for (let i = 0; i < bag.length; i++) {
               if (
                    bag[bag.length - 1] === "m" &&
                    bag[bag.length - 2] === "o" &&
                    bag[bag.length - 3] === "c"
               ) {
                    wem.innerText = "";
                    message.style.padding = "0px";
                    Email.style.borderColor = "black";
                    emailflag = true;
               } else if ((bag = "")) {
                    wem.innerText = "Enter Correct Email";
                    Email.style.borderColor = "red";
                    message.style.padding = "10px";
                    emailflag = false;
               } else {
                    wem.innerText = "Enter Correct Email";
                    Email.style.borderColor = "red";
                    message.style.padding = "10px";
                    emailflag = false;
               }
          }
     }

     let Mobile = document.createElement("input");
     Mobile.setAttribute("id", "mobile");
     Mobile.placeholder = "Enter Your Mobile Number";
     Mobile.addEventListener("input", function () {
          event.preventDefault();
          let bag = document.querySelector("#mobile").value;
          console.log(bag);
          if (bag.length < 10) {
               wem.innerText = "Enter Correct Mobile Number";
               Mobile.style.borderColor = "red";
               message.style.padding = "10px";
               mobileflag = false;
          } else {
               wem.innerText = "";
               message.style.padding = "0px";
               Mobile.style.borderColor = "black";
               mobileflag = true;
          }
     });
     div1.append(Email, Mobile);

     let div2 = document.createElement("div");

     div2.setAttribute("id", "formcolumn1");
     select = document.createElement("select");
     select.setAttribute("id", "select");
     select.addEventListener("click", function () {
          let bag = document.querySelector("#select").value;
          if (bag === "default") {
               wem.innerText = "Please Select an Edition";
               message.style.padding = "10px";
          } else {
               wem.innerText = "";
               message.style.padding = "0px";
               select.style.borderColor = "black";
               selectflag = true;
          }
     });
     let op1 = document.createElement("option");
     op1.value = "default";
     op1.innerText = "Select Your Default Editon";
     let op2 = document.createElement("option");
     op2.value = "National";
     op2.innerText = "National Edition";
     select.append(op1, op2);

     let name = document.createElement("input");
     name.setAttribute("id", "name");
     name.placeholder = "Enter Your name";
     name.addEventListener("input", function () {
          event.preventDefault();
          let bag = document.querySelector("#name").value;
          name.style.borderColor = "##0087a8";
          console.log(bag);
          if (bag.length === 0) {
               wem.innerText = "Name field cant be blank";
               message.style.padding = "10px";
               name.style.borderColor = "red";
          } else {
               wem.innerText = "";
               message.style.padding = "0px";
               name.style.borderColor = "black";
               nameflag = true;
          }
     });
     div2.append(select, name);
     let div3 = document.createElement("div");
     div3.setAttribute("id", "formcolumn2");
     let Password = document.createElement("input");
     Password.type = "password";

     Password.placeholder = "Enter Your Password";
     Password.setAttribute("id", "password");
     let Passwordc = document.createElement("input");
     Passwordc.setAttribute("id", "passwordc");
     Passwordc.type = "password";
     Passwordc.placeholder = "ConfirmYour Password";

     Password.addEventListener("input", function () {
          let bag = document.querySelector("#password").value;
          let bag1 = document.querySelector("#passwordc").value;
          if (bag === "") {
               wem.innerText = "Password Can,t be blank";
               message.style.padding = "10px";
               document.querySelector("#password").style.border =
                    "1px solid red";
               Cpasswordflag = false;
          } else if (bag.length < 6) {
               wem.innerText =
                    "Password is too short Password should be minimum 6 character";
               message.style.padding = "10px";
               Cpasswordflag = false;
          } else {
               wem.innerText = "";
               message.style.padding = "0px";
               document.querySelector("#password").style.borderColor = "black";
          }
     });
     Passwordc.addEventListener("input", function () {
          let bag = document.querySelector("#password").value;
          let bag1 = document.querySelector("#passwordc").value;
          if (bag1 === "") {
               wem.innerText = "Confirm Password Can,t be blank";
               Password.style.borderColor = "red";
               message.style.padding = "10px";
               Cpasswordflag = false;
          } else if (bag1.length < 6) {
               wem.innerText =
                    "Confirm Password is too short Password should be minimum 6 character";
               message.style.padding = "10px";
               Passwordc.style.borderColor = "red";
               Passwordc.style.transition = ".4s";
               Cpasswordflag = false;
          } else {
               wem.innerText = "";
               message.style.padding = "0px";
               Cpasswordflag = false;
          }
          if (bag !== bag1) {
               wem.innerText = "Password doesn't Match";
               Password.style.borderColor = "red";

               message.style.padding = "10px";
          } else {
               wem.innerText = "";
               message.style.padding = "0px";
               Passwordc.style.borderColor = "black";
               Password.style.borderColor = "black";
               Cpasswordflag = true;
          }
     });
     div3.append(Password, Passwordc);

     div4 = document.createElement("div");
     div4.setAttribute("id", "div4");
     div4.style.gap = "0px";
     let promo = document.createElement("input");
     promo.style.marginLeft = "0px";
     promo.placeholder = "Have Promo ?";
     let apply = document.createElement("button");
     apply.innerText = "Apply promo";
     apply.style.width = "30%";
     apply.style.marginLeft = "0px";
     apply.addEventListener("click", function (event) {
          event.preventDefault();
     });
     apply.setAttribute("id", "applypromo");

     div4.append(promo, apply);

     let div5 = document.createElement("div");
     div5.setAttribute("id", "div5");
     let pq = document.createElement("p");
     pq.innerText =
          "Does your household currently subscribe to the Deccan Herald newspaper?*";
     div5.append(pq);

     let parent = document.createElement("div");
     let div6 = document.createElement("div");

     let input = document.createElement("input");
     input.type = "checkbox";
     input.style.margin = "5px";
     input.addEventListener("click", function () {
          inputf = event.target.checked;
     });
     let span = document.createElement("span");
     span.innerText = "Yes";
     span.style.margin = "5px";
     let input1 = document.createElement("input");
     input1.type = "checkbox";
     input1.style.margin = "5px";

     input1.addEventListener("click", function () {
          input1f = event.target.checked;
     });
     let span1 = document.createElement("span");
     span1.innerText = "No";
     // span1.justifyContent="left"
     span1.style.margin = "5px";

     div6.append(input, span, input1, span1);
     parent.append(div6);

     let div7 = document.createElement("div");
     let holder = document.createElement("div");
     holder.style.margin = "auto";
     let mark = document.createElement("input");
     mark.type = "checkbox";
     mark.style.margin = "5px";
     mark.addEventListener("click", function () {
          event.target.checked;
          termflag = true;
     });
     let markmessage = document.createElement("span");
     markmessage.innerHTML =
          "By registering with us, you agree to our <span class='conditions'> Terms and Conditions </span>";

     holder.append(mark, markmessage);
     div7.append(holder);

     div8 = document.createElement("div");
     signupbtn = document.createElement("input");
     signupbtn.type = "submit";
     signupbtn.value = "COMPLETE SUBSCRIPTION";
     signupbtn.setAttribute("id", "subscribe");
     signupbtn.addEventListener("click", function () {
          event.preventDefault();

          details();
     });

     div8.append(signupbtn);

     div9 = document.createElement("div");
     div9.style.justifyContent = "center";

     let holder2 = document.createElement("div");
     holder2.setAttribute("id", "holder2");
     line1 = document.createElement("div");
     line1.setAttribute("id", "leftline");
     text = document.createElement("div");
     text.innerText = "Or Subscribe using";
     line1.setAttribute("id", "text");
     line2 = document.createElement("div");
     line1.setAttribute("id", "rightline");

     holder2.append(line1, text, line2);
     div9.append(holder2);

     let div10 = document.createElement("div");
     div10.style.justifyContent = "center";
     let img = document.createElement("img");
     img.setAttribute("src", "images/fbnew.png");
     let line3 = document.createElement("div");
     line3.style.border = "1px solid black";
     let imgg = document.createElement("img");
     imgg.setAttribute("src", "images/googlenew.png");
     div10.append(img, line3, imgg);

     message.append(wem);
     form1.append(
          message,
          div1,
          div2,
          div3,
          div4,
          div5,
          parent,
          div7,
          div8,
          div9,
          div10
     );
     sign.append(form1);
}

let login = document.querySelector("#formcontainer>#btn>div:first-child");
let subs = document.querySelector("#formcontainer>#btn>div:last-child");

subs.addEventListener("click", function () {
     let logintext = document.querySelector(
          "#formcontainer>#btn>div:first-child>#login"
     );
     logintext.style.color = "gray";
     let subtext = document.querySelector(
          "#formcontainer>#btn>div:last-child>#subs"
     );
     subtext.style.color = "black";

     document.querySelector("#loginline").style.backgroundColor = "gray";
     document.querySelector("#subsline").style.backgroundColor = "#0087a8";
});

login.addEventListener("click", loginbutton);
function loginbutton() {
     let logintext = document.querySelector(
          "#formcontainer>#btn>div:first-child>#login"
     );
     logintext.style.color = "black";

     let subtext = document.querySelector(
          "#formcontainer>#btn>div:last-child>#subs"
     );
     subtext.style.color = "gray";

     document.querySelector("#loginline").style.backgroundColor = "#0087a8";
     document.querySelector("#subsline").style.backgroundColor = "gray";
}
// let newarr = [{name: "good"},{name: "good"},{name: "good"},{name: "good"},{name: "good"},{name: "good"},{name: "good"},{name: "good"},{name: "good"},]
// for(let i=0;i<newarr.length;i++){
//     console.log(newarr[i].name === "good")
// }
function details() {
     // let email = document.querySelector("#email").value

     // let newarr = JSON.parse(localStorage.getItem("details")) || []
     function check(email) {
          for (let i = 0; i < arr.length; i++) {
               if (arr[i].Email == email) {
                    exist();
                    return false;
               }
          }
          return true;
     }

     if (inputf === true && input1f === true) {
          dailypaperflag = false;
     } else if (inputf === false && input1f === false) {
          dailypaperflag = false;
     } else if (inputf === true) {
          dailypaperflag = true;
     }
     let list = document.createElement("ul");
     list.setAttribute("id", "messagelist");
     let messageholder = document.querySelector("#message");
     messageholder.style.fontSize = "12px";

     let alert1 = document.createElement("li");
     let alert2 = document.createElement("li");
     let alert3 = document.createElement("li");
     let alert4 = document.createElement("li");
     let alert5 = document.createElement("li");

     function formfilled() {
          if (
               emailflag === true &&
               termflag === true &&
               mobileflag === true &&
               Cpasswordflag === true &&
               nameflag === true &&
               selectflag === true &&
               dailypaperflag === true
          ) {
               return true;
          } else {
               return false;
          }
     }

     let condition = formfilled();

     if (condition === true) {
          let obj = {
               Email: document.querySelector("#email").value,
               Mobile: document.querySelector("#mobile").value,
               Select: document.querySelector("#select").value,
               Name: document.querySelector("#name").value,
               Password: document.querySelector("#password").value,
          };

          if (check(obj.Email)) {
               arr.push(obj);
               localStorage.setItem("details", JSON.stringify(arr));
               paywindow();
          }

          messageholder.style.padding = "0px";
          messageholder.innerHTML = "";
     } else {
          messageholder.style.padding = "10px";
          messageholder.innerHTML = "";
          if (emailflag === false) {
               alert1.innerText = "Please Enter an Valid Email";
               list.append(alert1);
          }
          if (mobileflag === false) {
               alert2.innerText = "Please Enter an Valid Contact";
               list.append(alert2);
          }
          if (selectflag === false) {
               alert3.innerText = "Please Select an Edition";
               list.append(alert3);
          }
          if (nameflag === false) {
               alert4.innerText = "Please Enter an Valid name";
               list.append(alert4);
          }
          if (Cpasswordflag === false) {
               alert5.innerText = "Please select right password";
               list.append(alert5);
          }
          messageholder.append(list);
     }
}

function paywindow() {
     let body = document.querySelector("#right");
     let box = document.createElement("div");
     box.setAttribute("id", "Paymentbox");
     let parent = document.createElement("div");
     parent.setAttribute("id", "paywindow");
     let box1 = document.createElement("div");
     let span = document.createElement("div");
     span.setAttribute("id", "span");
     box1.setAttribute("id", "box1");
     let Limg = document.createElement("img");
     Limg.setAttribute("id", "Limg");
     Limg.setAttribute("src", "images/Left.svg");
     Limg.addEventListener("click", function () {
          box.innerHTML = "";
     });

     let cp = document.createElement("p");
     cp.setAttribute("id", "cp");
     cp.innerText = "Choose Payment Mode";
     let blue = document.createElement("div");
     blue.setAttribute("id", "blue");
     span.append(cp, blue);
     box1.append(Limg, span);
     box1.setAttribute("id", "box1");

     let box2 = document.createElement("div");
     box2.setAttribute("id", "box2");
     box2.addEventListener("click", function () {
          window.location = "Pay.html";
     });
     box2.setAttribute("class", "payment");
     holder1 = document.createElement("div");
     holder1.setAttribute("class", "holder");
     let h1 = document.createElement("h3");
     h1.innerText = "Payment Wallet";
     let p1 = document.createElement("p");
     p1.innerText = "I authorised Deccan Herald to auto  subscribtion plan";
     let img1 = document.createElement("img");
     img1.setAttribute("class", "rightlogo");
     img1.setAttribute("src", "images/right.svg");
     holder1.append(h1, p1);
     box2.append(holder1, img1);

     let box3 = document.createElement("div");
     box3.setAttribute("id", "box3");
     box3.setAttribute("class", "payment");
     box3.addEventListener("click", function () {
          window.location = "Pay.html";
     });
     holder2 = document.createElement("div");
     holder2.setAttribute("class", "holder");
     let h2 = document.createElement("h3");
     h2.innerText = "Payment UPI";
     let p2 = document.createElement("p");
     p2.innerText = "I authorised Deccan Herald to auto  subscribtion plan";
     let img2 = document.createElement("img");
     img2.setAttribute("class", "rightlogo");
     img2.setAttribute("src", "images/right.svg");
     holder2.append(h2, p2);
     box3.append(holder2, img2);

     let box4 = document.createElement("div");
     box4.setAttribute("id", "box4");
     box4.setAttribute("class", "payment");
     box4.addEventListener("click", function () {
          window.location = "Pay.html";
     });
     holder3 = document.createElement("div");
     holder3.setAttribute("class", "holder");
     let h3 = document.createElement("h3");
     h3.innerText = "Net Banking";
     let p3 = document.createElement("p");
     p3.innerText = "I authorised Deccan Herald to auto  subscribtion plan";
     let img3 = document.createElement("img");
     img3.setAttribute("class", "rightlogo");
     img3.setAttribute("src", "images/right.svg");
     holder3.append(h3, p3);
     box4.append(holder3, img3);

     let box5 = document.createElement("div");
     box5.setAttribute("id", "box5");
     box5.setAttribute("class", "payment");
     box5.addEventListener("click", function () {
          window.location = "Pay.html";
     });
     holder4 = document.createElement("div");
     holder4.setAttribute("class", "holder");
     let h4 = document.createElement("h3");
     h4.innerText = "Credit/Debit Card";
     let p4 = document.createElement("p");
     p4.innerText = "I authorised Deccan Herald to auto  subscribtion plan";
     let img4 = document.createElement("img");
     img4.setAttribute("class", "rightlogo");
     img4.setAttribute("src", "images/right.svg");
     holder4.append(h4, p4);
     box5.append(holder4, img4);

     let box6 = document.createElement("div");
     box6.setAttribute("id", "box6");
     box6.innerText = "Secure payments By";
     box6.style.textAlign = "center";
     box.style.color = "gray";
     box6.style.fontSize = "12px";

     let box7 = document.createElement("div");
     box7.setAttribute("id", "box7");
     box7.style.display = "flex";
     box7.style.justifyContent = "center";
     let paytm = document.createElement("img");
     let hr = document.createElement("hr");
     hr.style.margin = "5px";
     paytm.setAttribute("src", "images/paytm-logo.png");
     paytm.setAttribute("class", "paylogo");
     let razor = document.createElement("img");
     razor.setAttribute("class", "paylogo");
     razor.setAttribute("src", "images/rp-logo.png");
     box7.append(paytm, hr, razor);
     parent.append(box1, box2, box3, box4, box5, box6, box7);
     box.append(parent);

     body.append(box);
}

function exist() {
     let loginmessage = document.createElement("div");
     loginmessage.setAttribute("id", "loginmessage");
     loginmessage.innerText = "Already have an Account? click to login. ";
     loginmessage.addEventListener("click", function () {
          event.target.parentNode.remove(parent);
          let form = document.querySelector("form");
          form.innerHTML = "";
          loginbutton();
          displayLogin();
          document.querySelector("body").style.backgroundColor = "white";
          window.location.reload();
     });
     let remove = document.createElement("div");
     remove.setAttribute("id", "remove");
     remove.innerText = "Click to continue";
     remove.addEventListener("click", function () {
          event.target.parentNode.remove(parent);
          document.querySelector("body").style.backgroundColor = "white";
          window.location.reload();
          displaySubs();
     });
     let usermessage = document.createElement("div");
     usermessage.setAttribute("id", "usermessage");
     usermessage.innerText =
          "Email that You've Entered is already exist please use diffrent one";
     let container = document.querySelector("body");

     document.querySelector("html").style.backgroundColor =
          "rgb(41 42 44 / 50%)";

     let parent = document.createElement("div");
     parent.setAttribute("id", "parent");

     let div = document.createElement("div");
     div.setAttribute("id", "popup");
     div.append(usermessage, remove, loginmessage);
     parent.append(div);
     container.append(parent);
}
