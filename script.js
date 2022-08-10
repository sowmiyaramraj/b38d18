var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((data1=>foo(data1)));


function foo(element)
{
 element.forEach(num => {
  console.log(num)
  let arr=document.createElement("div");
  arr.innerHTML=`<div class="div">
  <div class="container">
    <div class="row">
    <div class="col-md-4">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title" style="font-size:42px">${num.name}</h5>
            <img src=${num.flag} style="width:150px; height:150px;" alt="">
            <p class="card-text" style="font-size:32px">${num.capital}<br>${num.latlng}<br>${num.region}<br>${num.callingCodes}</p>
            <a href="https://openweathermap.org/" target="_blank class="a" >Open for weathermap</a>
            
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>`;
document.body.append(arr);

  
});

} 
