const add=document.querySelector("#ad");
const course=document.querySelector("#course");
const credit=document.querySelector("#credit");
const grade=document.querySelector("#grade");
const tbody=document.querySelector("#tbody");
const table=document.querySelector("#table");
const clear=document.querySelector("#clear");
const cal=document.querySelector("#cal");
const tfoot=document.querySelector("#tfoot");
var c=[];
add.addEventListener("click",function(){

  const tr=document.createElement("tr");
  const tdcourse=document.createElement("td");
  tdcourse.innerHTML=course.value;
  const tdcredit=document.createElement("td");
  tdcredit.innerHTML=credit.value;
  const tdgrade=document.createElement("td");
  tdgrade.innerHTML=grade.options[grade.selectedIndex].text;
  tr.appendChild(tdcourse);
  tr.appendChild(tdcredit);
  tr.appendChild(tdgrade);
  tbody.appendChild(tr);
  c.push({"credit":credit.value,"grade":grade.options[grade.selectedIndex].value});
  console.log(c);

});
cal.addEventListener("click",function(){
  var cre=0;
  var gra=0;
  c.forEach(function(result){
    cre=cre+Number(result.credit);
    gra=gra+(Number(result.credit)*Number(result.grade));
  });
  const tr=document.createElement("tr");
  const td=document.createElement("td");
  td.innerHTML="Result";
  const tdl=document.createElement("td");
  tdl.innerHTML="Toatl Credits "+cre;
  const tdgpa=document.createElement("td");
  tdgpa.innerHTML="Your GPA is "+(gra/cre).toFixed(2);
  tr.appendChild(td);
  tr.appendChild(tdl);
  tr.appendChild(tdgpa);
  tfoot.appendChild(tr);
});
clear.addEventListener("click",function(){
  c=[];
  tbody.querySelectorAll("*").forEach(function(child){child.remove();});
  tfoot.querySelectorAll("*").forEach(function(child){child.remove();});
})
