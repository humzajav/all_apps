var yellowPreview = $('#yellowPreview');
var greenPreview = $('#greenPreview');
var redPreview = $('#redPreview');
$('#yellow').click(function(){
    greenPreview.css("display", "none");
    redPreview.css("display", "none");
    yellowPreview.css("display", "block");
})
$('#green').click(function(){
    yellowPreview.css("display", "none");
    redPreview.css("display", "none");
    greenPreview.css("display", "block");
})
$('#red').click(function(){
    greenPreview.css("display", "none");
    yellowPreview.css("display", "none");
    redPreview.css("display", "block");
})
var cesContainer = $('#cesContainer');
var right = $('#firstRight');
var left = $('#left');
var colorDiv = $('#colorDiv');
var eyesDiv = $('#eyesDiv');
right.click(function(){
    colorDiv.css("display", "none")
    cesContainer.css('margin-left','')
    eyesDiv.css("display", "block")
})
left.click(function(){
    colorDiv.css("display", "block")
    eyesDiv.css("display", "none")
})
//select eyes function---->
$('.eyes').click(function(e){
        var er =  $('.eyes').index(this);
        $('.hide').hide();
        $('.hide').eq(er).show();
})
//select smiles function----->
$('.smiles').click(function(e){
    var er =  $('.smiles').index(this);
    $('.smileHide').hide();
    $('.smileHide').eq(er).show();
})
var smileLeftButton = $('#smileLeft')
var rightButtonEyeSection = $('#right');
rightButtonEyeSection.click(function(){
    colorDiv.hide();
    eyesDiv.hide();
    $('#smilesDiv').show();
})
smileLeftButton.click(function(){
    colorDiv.hide();
    eyesDiv.show();
    $('#smilesDiv').hide();
})
