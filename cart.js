let dataArr=JSON.parse(localStorage.getItem("productName"))||[];
console.log(dataArr)
let sum=0;
dataArr.forEach(function(element,i){
    let productCount=document.querySelector("#count");
    productCount.innerText=dataArr.length;
    let totalPrice=document.querySelector("#totalcount");
    sum=sum+Number(element.ogPrice);
    totalPrice.innerText=sum;
    let name=document.querySelector("#name");
    name.innerText=element.productName;
    let price=document.querySelector("#price");
    price.innerText=element.ogPrice;
    let remove=document.querySelector("#delete");
    remove.addEventListener("click",function(){
        if(element.id==dataArr[i].id){
          console.log(element.id)
          const newarr=dataArr.filter((item,i)=>item.id!==element.id)
          localStorage.setItem("productName",newarr)
        }
    })
}); 