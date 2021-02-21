var count = 0;
var amount = 4;
function loadMore() {
  var pomArray = data.slice(count, amount);
  if (count == data.length) {
    document.getElementById("btnLoad").style.display = "none";
  }
  for (i = 0; i < pomArray.length; i = i + 1) {
    var divColumn = document.createElement("div");
    divColumn.className = "column";
    divColumn.setAttribute("onclick", "modalClick(this)");

    var pomDiv = document.createElement("div");
    pomDiv.className = "header";

    var profileImg = document.createElement("img");
    profileImg.setAttribute("src", pomArray[i].profile_image);
    profileImg.setAttribute("class", "profile");
    var pName = document.createElement("p");
    pName.innerHTML = pomArray[i].name;
    pName.className = "name";

    var pDate = document.createElement("p");
    splitedDate = pomArray[i].date.split(" ");
    const dateMonth = new Date(splitedDate[0]);
    split = splitedDate[0].split("-");
    const month = dateMonth.toLocaleString("default", { month: "long" });
    pDate.innerHTML = split[2] + " " + month + " " + split[0];
    pDate.className = "date";

    var logo = document.createElement("img");
    if (pomArray[i].source_type == "instagram") {
      logo.setAttribute("src", "icons/instagram-logo.svg");
    } else {
      logo.setAttribute("src", "icons/facebook.svg");
    }

    logo.className = "insta";

    pomDiv.append(profileImg);
    pomDiv.append(pName);
    pomDiv.append(logo);
    divColumn.append(pomDiv);
    divColumn.append(pDate);

    var image = document.createElement("img");
    image.setAttribute("src", pomArray[i].image);
    image.className = "imageClass";
    divColumn.append(image);
    var pCaption = document.createElement("p");
    pCaption.className = "caption";
    pCaption.innerHTML = pomArray[i].caption;
    divColumn.append(pCaption);
    var lastDiv = document.createElement("div");
    lastDiv.className = "likes";
    var icon = document.createElement("img");
    icon.className = "hearts";
    icon.setAttribute("src", "icons/heart.svg");
    var like = document.createElement("p");
    like.innerHTML = pomArray[i].likes;
    lastDiv.append(icon);
    lastDiv.append(like);
    divColumn.append(lastDiv);
    document.getElementById("row").appendChild(divColumn);
  }
  count = count + 4;
  amount = amount + 4;
}

function modalClick(element) {
  var modal = document.getElementById("modal");
  modal.style.display = "block";
  var img = document.getElementById("image");
  var source = element.getElementsByClassName("imageClass")[0].src;
  img.setAttribute("src", source);
  var profileImg = document.getElementById("profileImg");
  source = element.getElementsByClassName("profile")[0].src;
  profileImg.setAttribute("src", source);
  var pName = document.getElementById("pName");
  var text = element.getElementsByClassName("name")[0].innerHTML;
  pName.innerHTML = text;
  var pDate = document.getElementById("pDate");
  pDate.innerHTML = element.getElementsByClassName("date")[0].innerHTML;
  var imgLogo = document.getElementById("logo");
  source = element.getElementsByClassName("insta")[0].src;
  imgLogo.setAttribute("src", source);
  var pCaption = document.getElementById("pCaption");
  pCaption.innerHTML = element.getElementsByClassName("caption")[0].innerHTML;
  var likes = document.getElementById("like");
  likes.innerHTML = element.getElementsByClassName("likes")[0].innerHTML;
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
