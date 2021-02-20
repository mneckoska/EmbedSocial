var pomArray = [];
for(var i in data)
{
  pomArray.push(data[i]);
}
console.log(pomArray);


function loadMore()
{
for(var i=0;i<pomArray.length;i=i+4)
{
 

   var img = document.createElement("img");
   img.setAttribute("src",pomArray[i].profile_image);
   img.setAttribute("class","profile")
   document.getElementById("hoho").appendChild(img);
   var p = document.createElement("p");
   p.setAttribute("text",pomArray[i].name);
 
}
}

Object.size = function(obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };
  
  // Get the size of an object
  const myObj = {}
  var size = Object.size(myObj);