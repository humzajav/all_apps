window.onload = getData;
function getData() {
    $.get('http://5d76bf96515d1a0014085cf9.mockapi.io/quiz', function (data, status) {
        var response = data;
        for (let i = 0; i < response.length; i++) {
            createNewElement(response[i].id, response[i].question, response[i].options)
        }
    }
    )
}
var count = 0;
var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var radioYes;
function createNewElement(id, questions, options) {
    var newListElement = document.createElement('li');
    var textNode = document.createTextNode("Q: " + questions);
    newListElement.appendChild(textNode);
    list.appendChild(newListElement);
    var missedField = document.createElement('p');
    missedField.setAttribute("class", "pText");
    missedField.setAttribute("id", "text" + id);
    var text = document.createTextNode("Please Answer This:");
    missedField.appendChild(text);
    list.appendChild(missedField);
    for (let i = 0; i < options.length; i++) {
        radioYes = document.createElement('input');
        radioYes.setAttribute('type', 'radio');
        radioYes.setAttribute("id", id);
        radioYes.setAttribute("name", id);
        radioYes.setAttribute("value", options[i]);
        radioYes.setAttribute("class", "yola" + id)
        var lblYes = document.createElement('label');
        /*create text node for label Text which display for Radio button*/
        var textYes = document.createTextNode(options[i]);

        /*add text to new create label*/
        lblYes.appendChild(textYes);

        /*add radio button to Div*/
        list.appendChild(radioYes);

        /*add label text for radio button to Div*/
        list.appendChild(lblYes);
        var spaceBr = document.createElement('br');
        list.appendChild(spaceBr);
    }
    var elem = document.createElement("hr");
    elem.setAttribute("width", "400px");
    elem.setAttribute("id", "line")
    list.appendChild(elem);
    //to hide error of not answering
    $('#text' + id).hide();
}
var event;
document.body.addEventListener('click', function (event) {
    if (event.srcElement.id === "1") {
        if (event.srcElement.value == "Helga's Diadem") {
            count = 1;
        }
        else {
            count = 0;
        }
    }
    else if (event.srcElement.id === "2") {
        if (event.srcElement.value == "Grawp") {
            count1 = 1;
        }
        else {
            count1 = 0;
        }
    }
    else if (event.srcElement.id === "3") {
        if (event.srcElement.value == "Defense Against Dark Arts") {
            count2 = 1;
        }
        else {
            count2 = 0;
        }
    }
    else if (event.srcElement.id === "4") {
        if (event.srcElement.value == "Ravenclaw") {
            count3 = 1;
        }
        else {
            count3 = 0;
        }
    }
    else if (event.srcElement.id === "5") {
        if (event.srcElement.value == "Herbology") {
            count4 = 1;
        }
        else {
            count4 = 0;
        }
    }
    console.log(count, count1, count2, count3, count4);
    eve = event;
})
$('#btn').click(function () {
    if ($(".yola1").is(":not(:checked)")) {
        $('#text1').show();
    }
    if ($(".yola1").is(":checked")) {
        $('#text1').hide();
    }
    if ($(".yola2").is(":not(:checked)")) {
        $('#text2').show();
    }
    if ($(".yola2").is(":checked")) {
        $('#text2').hide();
    }
    if ($(".yola3").is(":not(:checked)")) {
        $('#text3').show();
    }
    if ($(".yola3").is(":checked")) {
        $('#text3').hide();
    } if ($(".yola4").is(":not(:checked)")) {
        $('#text4').show();
    }
    if ($(".yola3").is(":checked")) {
        $('#text4').hide();
    } if ($(".yola5").is(":not(:checked)")) {
        $('#text5').show();
    }
    if ($(".yola5").is(":checked")) {
        $('#text5').hide();
    }
    if ($(".yola1").is(":checked") && $(".yola2").is(":checked") && $(".yola3").is(":checked") && $(".yola4").is(":checked") && $(".yola5").is(":checked")) {

        $('#score').show();
        $('#text').text(count + count1 + count2 + count3 + count4 + "/5")
    }
})
$('#cross').click(function () {
    $('#score').hide();
})
$("input[type=radio]").change(function () {
    alert("Enter Value");
});
