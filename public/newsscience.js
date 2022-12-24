$.ajax({
  type:"get",
  url:"https://newsdata.io/api/1/news?apikey=pub_8487d8465c9a13bf996aa6509f4314fa4058&language=en&category=science",
  success:function(responce){
    console.log(responce.results);
    for(var i=0;i<responce.results.length;i++){
      var item=`<div class="card col-lg-3" style="width: 18rem;">
        <h1>${responce.results[i].source_id}</h1>
        <div class="card-body">
          <h5 class="card-title">${responce.results[i].title}</h5>
          <p class="card-text">${responce.results[i].description}</p>
          <a href="${responce.results[i].link}" class="btn btn-dark">Read More</a>
        </div>
      </div>`
      $(".row").append(item);
    };
  },
  error:function(error){
    console.log(error)
  },

});
$.ajax({
  type:"get",
  url:"https://newsdata.io/api/1/news?apikey=pub_8487d8465c9a13bf996aa6509f4314fa4058&language=en&category=science&page=1",
  success:function(responce){
    console.log(responce.results);
    for(var i=0;i<responce.results.length;i++){
      var item=`<div class="card col-lg-3" style="width: 18rem;">
        <h1>${responce.results[i].source_id}</h1>
        <div class="card-body">
          <h5 class="card-title">${responce.results[i].title}</h5>
          <p class="card-text">${responce.results[i].description}</p>
          <a href="${responce.results[i].link}" class="btn btn-dark">Read More</a>
        </div>
      </div>`
      $(".row").append(item);
    };
  },
  error:function(error){
    console.log(error)
  },

});
$.ajax({
  type:"get",
  url:"https://newsdata.io/api/1/news?apikey=pub_8487d8465c9a13bf996aa6509f4314fa4058&language=en&category=science&page=2",
  success:function(responce){
    console.log(responce.results);
    for(var i=0;i<responce.results.length;i++){
      var item=`<div class="card col-lg-3" style="width: 18rem;">
        <h1>${responce.results[i].source_id}</h1>
        <div class="card-body">
          <h5 class="card-title">${responce.results[i].title}</h5>
          <p class="card-text">${responce.results[i].description}</p>
          <a href="${responce.results[i].link}" class="btn btn-dark">Read More</a>
        </div>
      </div>`
      $(".row").append(item);
    };
  },
  error:function(error){
    console.log(error)
  },

});
