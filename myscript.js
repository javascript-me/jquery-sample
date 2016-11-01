/**
 * Created by Anthony_Chen on 11/1/2016.
 */
/*********** Dom searching and operating **********/

// Task 1 - set the item 1's color to blue

// Task 2 - set the item 2's color as white and height as 50px


// Task 3 - add class 'red' to item 3,4 and 5

// Task 4 - get select's value, and select to 'item-3'

// Task 5 - set the checkboxes un-checked

// Task 6 - hide the checkbox 1

/************** Event Handlers ********************/

// Task 1 - add change event to select, could alert the current value


/****************** Animation *********************/

// Task 1 - let the item 1 li's height animate from current to 100px in 1000ms after click on it.

/*********** Dom searching and operating **********/

// Task 1 - set the item 1's color to blue

console.log("hello...");

$(".item-1").css("background-color", "blue");

// Task 2 - set the item 2's color as white and height as 50px
$(".item-2").height(50).css("background-color", "white");

// Task 3 - add class 'red' to item 3,4 and 5

$(".item-3,.item-4,.item-5").css("background-color", "red");

// Task 4 - get select's value, and select to 'item-3'

console.log("Selected value is: " + $("#hello-select").val());

$(function() {
    $("#hello-select").val('item-3');
});

// Task 5 - set the checkboxes un-checked

$("#cbk1,#cbk2").attr('checked', false);

// Task 6 - hide the checkbox 1

$("#cbk1").hide();

/************** Event Handlers ********************/

// Task 1 - add change event to select, could alert the current value

$("#hello-select").change(function(){
    console.log("=====" + this.value + " : " + $("#hello-select").val());
});

/****************** Animation *********************/

// Task 1 - let the item 1 li's height animate from current to 100px in 1000ms after click on it.

$("#forDebug1").click(function(){

    console.log("click forDebug1...bbbb ");

    $(this).animate(

        {
            height: "50px",
            "font-size": "30px"
        },
        1000

    );

});


// Task 2 - let the above animate change the font size to 30px at the same time.



// Task 2 - let the above animate change the font size to 30px at the same time.

