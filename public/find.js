
  var a=$(".gen").val();

  $.ajax({
    type:"get",
    url:"https://imdb-api.com/API/AdvancedSearch/k_ndonvy09?title_type=tv_movie&genres="+a,
    success:function(responce){
      console.log(responce.results);
      for(var i=0;i<responce.results.length;i++){
        var item=`<div class="card col-lg-3" style="width: 18rem;">
          <h1>${responce.results[i].title}</h1><h1>${responce.results[i].description}</h1>
          <div class="card-body">
            <h5 class="card-title">${responce.results[i].genres}</h5>
            <img src="${responce.results[i].image}">
            <p>${responce.results[i].stars}</p><br>
            <p>IMDB RATING: ${responce.results[i].imDbRating}</p>
          </div>
        </div>`
        $(".row").append(item);
      };
    },
    error:function(error){
      console.log(error)
    },

  });
