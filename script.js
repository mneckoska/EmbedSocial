function loadMore() {
  var pomArray = data.slice(0,4);
  for (i = 0; i < pomArray.length; i = i + 1) {
   
    var divColumn = document.createElement("div");
    divColumn.className = "column";
    var pomDiv = document.createElement("div");
    pomDiv.className="images"; 

    var profileImg = document.createElement("img");
    profileImg.setAttribute("src", pomArray[i].profile_image);
    profileImg.setAttribute("class", "profile");
   // divColumn.append(profileImg);
    var pName = document.createElement("p");
    pName.innerHTML = pomArray[i].name;
    pName.className = "name";
   // divColumn.append(pName);

  


    var pDate = document.createElement("p");
    splitedDate = pomArray[i].date.split(" ");
    const dateMonth = new Date(splitedDate[0]);
    split=splitedDate[0].split("-");
    const month = dateMonth.toLocaleString("default", { month: "long" });
    pDate.innerHTML = split[2]+" "+ month+ " " +split[0];
    pDate.className = "date";
    //divColumn.append(pDate);
    var logo = document.createElement("img");
    if(pomArray[i].source_type =="instagram")
    {
    logo.setAttribute("src","icons/instagram-logo.svg");
    }
    else{
        logo.setAttribute("src","icons/facebook.svg");
    }
    
   logo.className="insta";


    pomDiv.append(profileImg);
    pomDiv.append(pName);
    pomDiv.append(pDate)
    pomDiv.append(logo);
    divColumn.append(pomDiv);
    //divColumn.append(pDate);

   // divColumn.append(logo);
    var image=document.createElement("img");
    image.setAttribute("src",pomArray[i].image);
    image.className="imageClass";
    image.setAttribute("onclick","imgClick(this)")
    divColumn.append(image);
    var pCaption = document.createElement("p");
    pCaption.className="caption";
    pCaption.innerHTML=pomArray[i].caption;
    divColumn.append(pCaption);
    var lastDiv = document.createElement("div");
    lastDiv.className="likes";
    var icon = document.createElement("img");
    icon.setAttribute("src","icons/heart.svg");
    //divColumn.append(icon);
    var like = document.createElement("p");
    like.innerHTML=pomArray[i].likes;
    //divColumn.append(like);
    lastDiv.append(icon);
    lastDiv.append(like);
    divColumn.append(lastDiv);
    document.getElementById("row").appendChild(divColumn);
  }
}

function imgClick(element)
{
    var img=document.createElement("img");    
    var path=element.src;
    img.setAttribute("src",path);
    var divModal = document.createElement("div");
    divModal.setAttribute("id","myModal");
    divModal.className="modal";
}
