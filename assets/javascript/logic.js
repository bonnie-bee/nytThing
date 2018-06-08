// api key 4fbb08de84f243c78bbe504d19611ae3
key= "4fbb08de84f243c78bbe504d19611ae3";

qurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="+key+"&q="+search;
$.ajax({
    method:"GET",
    url:qurl
}).then(function(response){
console.log(response.response.docs[0]);
});




function search(search)
{
 key= "4fbb08de84f243c78bbe504d19611ae3";

qurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="+key+"&q="+search;
$.ajax({
    method:"GET",
    url:qurl
}).then(function(response){
console.log(response.response.docs[0]);
return response.response.docs;
});


}