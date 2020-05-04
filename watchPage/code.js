window.onload = allFunctions;

function allFunctions() {
    getPlaylistCards();
    onLoadVideo();
}

function getPlaylistCards() {

    $.get('http://5d76bf96515d1a0014085cf9.mockapi.io/playlist', function(data) {
        var response = data;
        for (let i = 0; i < response.length; i++) {
            createPlaylistCards(response[i].id, response[i].title, response[i].thumbnail);
        }
    })
}

function onLoadVideo() {
    var description = "There is no other way but to commit wholeheartedly to a relationship with a croissant. We have all found ourselves at the mercy of its allure. Here, in another epic film by the uber talented Nathan Rodger, our Erin divulges her personal romance with The Croissant."
    videoShow(0, "Croissants | Flour and Stone", 190062231, 22500, description)
}
var playlist = document.getElementById("playlist")

function createPlaylistCards(id, title, thumbnail) {
    var cardDiv = document.createElement('div');
    cardDiv.setAttribute("class", "cards");
    cardDiv.setAttribute("id", id)
    var image = document.createElement('img');
    image.setAttribute("class", "imageSize");
    image.setAttribute("id", id)
    image.setAttribute("src", thumbnail)
    cardDiv.appendChild(image);
    var textDiv = document.createElement('div');
    textDiv.setAttribute("class", "title")
    textDiv.setAttribute("id", id)
    var text = document.createElement('h4');
    text.innerHTML = title;
    text.setAttribute("id", id)
    textDiv.appendChild(text);
    cardDiv.appendChild(textDiv);
    playlist.appendChild(cardDiv);
    var lineBreak = document.createElement('br');
    playlist.appendChild(lineBreak);
}
document.body.addEventListener('click', function(event) {
    createVideo(event.srcElement.id);
})

function createVideo(e) {
    $.get('https://5eadecd14350860016e13bc0.mockapi.io/video/watch', function(data) {
        var response = data;
        console.log(response[e - 1].id, response[e - 1].vimeoId);
        videoShow(response[e - 1].id, response[e - 1].title, response[e - 1].vimeoId, response[e - 1].views, response[e - 1].description);
    })
}
var videoPortion = document.getElementById("video")

function videoShow(id, title, vimeoId, views, description) {
    videoPortion.innerHTML = "";
    window.scrollTo(0, 0);
    var videoScreen = document.createElement('iframe');
    videoScreen.setAttribute("src", "https://player.vimeo.com/video/" + vimeoId);
    videoScreen.setAttribute("id", id);
    videoScreen.style.width = "600px";
    videoScreen.style.height = "480px";
    videoScreen.style.border = "none";
    videoPortion.appendChild(videoScreen);
    var setViews = document.createElement('p');
    setViews.setAttribute("class", "leftAlign");
    setViews.setAttribute("id", "marginT");
    setViews.innerHTML = views + " Views";
    videoPortion.appendChild(setViews);
    var videoHeading = document.createElement('h2');
    videoHeading.innerHTML = title;
    videoHeading.setAttribute("class", "leftAlign");
    videoPortion.appendChild(videoHeading);
    var descriptionData = document.createElement('p');
    descriptionData.innerHTML = description;
    descriptionData.setAttribute("id", "description");
    videoPortion.appendChild(descriptionData);
}