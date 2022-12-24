$.ajax({
  type:"get",
  url:"https://imdb-api.com/en/API/MostPopularMovies/k_ndonvy09",
  success:function(responce){
    console.log(responce.items);
    for(var i=0;i<responce.items.length;i++){
      var item=`<div class="card col-lg-3" style="width: 18rem;">
        <h1>${responce.items[i].rank}</h1><h1>${responce.items[i].fullTitle}</h1>
        <div class="card-body">
          <h5 class="card-title">${responce.items[i].year}</h5>
          <img src="${responce.items[i].image}">
          <p>${responce.items[i].crew}</p><br>
          <p>IMDB RATING: ${responce.items[i].imDbRating}</p>
        </div>
      </div>`
      $(".row").append(item);
    };
  },
  error:function(error){
    console.log(error)
  },

});
