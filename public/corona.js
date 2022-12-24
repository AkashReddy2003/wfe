$.ajax({
  type:"get",
  url:"https://api.covid19api.com/summary",
  success:function(responce){
    console.log(responce.Countries);
    for(var i=0;i<responce.Countries.length;i++){
      var item=`<tr><td  scope="row" class="key">${responce.Countries[i].Country}</td><td>${responce.Countries[i].TotalConfirmed}</td><td>${responce.Countries[i].TotalDeaths}</td><td>${responce.Countries[i].NewConfirmed}</td><td>${responce.Countries[i].NewDeaths}</td></tr>`
      $("#items").append(item);
    };
  },
  error:function(error){
    console.log(error)
  },

});
$(document).ready(function(){
  $("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("table tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
