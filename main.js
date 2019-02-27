// Please complete the below exercises preferrably using JQuery

// 1. Make each item's paragraph collapse/expand when the title is clicked
$( function() {
  $( ".item" ).accordion({
    collapsible: true,
  });
} );

// 2. Remove each item when we click on the closing X
$( ".close" ).click(function() {
    $(this).parent("div").parent("div").remove()
  });




// 3. Create a new item using the input field
//    The title of the new item has to match the input value
//    The new item should also have the same properties (collapse/expand and close) as the other items
$(".add").click(function(){
    var length = 1
    $('.item').each(function(i){
        length = i+2
    });

    var newTitle = `<h1 class='title'>${$("input").val() !== "" ? $("input").val() : "Title " + length}</h1>`
    var newDescription = "<p class='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id scelerisque lacus, rutrum lobortis nisl. Ut dapibus, quam in auctor pharetra, nibh erat pharetra velit, vitae tristique mauris dui quis.</p>"
    var newClose = "<span class='close'>x</span>"
    $(".item-list").append("<div class='item'>")
    $(".item:last").append("<div class='bar'></div>")
    $(".bar:last").append(
        newTitle, newClose
    ) 
    $(".item:last").append(
        newDescription
    ) 
    $( ".item" ).accordion({
        collapsible: true,
    }); 
    $( ".close" ).click(function() {
        $(this).parent("div").parent("div").remove()
    });
})



//    Optional: 
//    If the user clicks "Add New" and the input is empty, 
//    the new item's title needs to default to Title {number} (ex: Title 6 or Title 7)
//    depending on the number of items already on the page