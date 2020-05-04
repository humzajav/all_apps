$('#button1').click(function() {
    checkFields1();
    // $('#button1').css("margin-top", "5px");
})
$('#button2').click(function() {
    $('#button2').css("margin-top", "1px");
    $('#previous1').css("margin-top", "1px");
    checkFields2();
})
$('#submit').click(function() {
    $('#previous2').css("margin-top", "1px");
    $('#submit').css("margin-top", "1px");
    checkFields3();
})
$('#previous1').click(function() {
    $('#secondStep').hide();
    $('#firstStep').show();
})
$('#previous2').click(function() {
    $('#thirdStep').hide();
    $('#secondStep').show();
})

function checkFields1() {
    var $regexname = /^[a-zA-Z]+$/;
    var $regexemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // /^([a-zA-Z]{3,16})$/;
    {
        if (!$('#firstName').val().match($regexname)) {
            // there is a mismatch, hence show the error message
            $('#firstValid').show();
        } else {
            // else, do not display message
            $('#firstValid').hide();
        }
    } {
        if (!$('#emailText').val().match($regexemail)) {
            // there is a mismatch, hence show the error message
            $('#emailValid').show();
        } else {
            // else, do not display message
            $('#emailValid').hide();
        }
    }
    if ($('#emailText').val() != '' && $('#firstName').val() != '' && $('#firstName').val().match($regexname) && $('#emailText').val().match($regexemail)) {
        $('#firstStep').hide();
        $('#secondStep').show();
    }
}

function checkFields2() {
    var $regexname = /^[a-zA-Z]+$/; {
        if ($('#contactValid').val() == '') {
            $('#contact').show();
        } else {
            $('#contact').hide();
        }
    } {
        if (!$('#countryValid').val().match($regexname)) {
            // there is a mismatch, hence show the error message
            $('#country').show();
        } else {
            // else, do not display message
            $('#country').hide();
        }
    }
    if ($('#contactValid').val() != '' && $('#countryValid').val().match($regexname)) {
        $('#secondStep').hide();
        $('#button2').css("margin-top", "10px");
        $('#previous1').css("margin-top", "10px");
        $('#thirdStep').show();
    }

}

function checkFields3() {
    var deve = $('#enroll'); {
        if (deve.val() === "") {
            $('#option').show();
        } else {
            $('#option').hide();
        }
    } {
        if ($('#messageArea').val() == '') {
            $('#message').show();
        } else {
            $('#message').hide();

        }
    }
    if (deve.val() != "" && $('#messageArea').val() != '') {
        $('#button2').css("margin-top", "10px");
        $('#previous1').css("margin-top", "10px");
        $('#thirdStep').hide();
        $('#formSection').hide();
        $('#formSubmitted').show();
    }
}
$('#close').click(function() {
    window.location.href = '../index.html';
})