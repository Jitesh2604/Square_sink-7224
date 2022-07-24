let data=[
            {
                productName:"foodxprs",
                bold:".co.in",
                dicPrice:"$649.00",
                ogPrice:99.00,
                text:"for the first year with a 2 year registration",
                icon:"fa-solid fa-cart-shopping",
                id:1,
            },
            {
                productName:"foodxprs",
                bold:".co",
                dicPrice:"$2,299.00",
                ogPrice:159.00,
                text:"for the first year",
                icon:"fa-solid fa-cart-shopping",
                id:2,
            },
            {
                productName:"foodxprs",
                bold:".xyz",
                dicPrice:"$1,199.00",
                ogPrice:159.00,
                text:"for the first year",
                icon:"fa-solid fa-cart-shopping",
                id:3,
            },
            {
                productName:"foodxprs",
                bold:".com",
                dicPrice:"$1,199.00",
                ogPrice:499.00,
                text:"for the first year",
                icon:"fa-solid fa-cart-shopping",
                id:4,
            },
            {
                productName:"foodxprs",
                bold:".net",
                dicPrice:"$1,399.00",
                ogPrice: 899.00,
                text:"for the first year with a 2 year registration",
                icon:"",
                id:5,
            },
];

let dataArr=JSON.parse(localStorage.getItem("produuctName"))||[];

function display(){
    data.forEach(function(element) {
        let box1=document.createElement("div");
        box1.classList.add("price")
        let name=document.createElement("p");
        name.innerText=element.productName;
        let bold=document.createElement("b");
        bold.innerText=element.bold;
        name.append(bold);
        box1.append(name)
        let box2=document.createElement("div");
        let price=document.createElement("h4");
        price.innerText=element.ogPrice;
        let disPrice=document.createElement("s");
        disPrice.innerText=element.dicPrice
        price.append(disPrice);
        let para=document.createElement("p");
        para.innerText=element.text;
        let con=document.createElement("i");
        con.classList.add("fa-solid");
        con.classList.add("fa-cart-shopping");
        con.addEventListener("click",function(){
            cartFunc(element.id);
        });
        price.append(para);
        box2.append(price,con);
        let hr=document.createElement("hr");
        let container=document.createElement("div");
        container.append(box1,box2)
    document.querySelector("#price").append(container,hr);
    });
}
display();

function cartFunc(objId){
     for(let i=0;i<data.length;i++){
          if(objId==data[i].id){
            dataArr.push(data[i])
           localStorage.setItem("productName",JSON.stringify(dataArr));
         }
    }
    data.forEach(function(element){
         
    })
}        
document.querySelector("p+p+i").addEventListener("click",cartPageFunc);
function cartPageFunc(){
    window.location.href="cart.html"
};
