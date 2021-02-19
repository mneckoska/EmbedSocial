//import {data} from './data.js';

function load()
{
for(i=0;i<=4;i++)
{
   var element = document.createElement("p");
   //element.setAttribute("text",data[0].name);
   element.setAttribute("text","MAJA");
   document.getElementById("hoho").appendChild(element);
    
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