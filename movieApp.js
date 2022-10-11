/*
Build an application that uses jQuery to do the following:

  1. Contains a form with two inputs for a title and
   rating along with a button to submit the form.
  2. When the form is submitted, capture the values 
  for each of the inputs and append them to the 
   DOM along with a button to remove each title 
   and rating from the DOM.
  3. When the button to remove is clicked, remove
   each title and rating from the DOM.

*/

function validateValue() {
  // boolean value set true
  let booleanValue = false;
  // id from title of movie
  let titleMovieHolder = $("#title").val();

  if (titleMovieHolder) {
    if (titleMovieHolder.length > 1) {
      booleanValue = true;
    } else {
      $("#textholder").text("Title must have at least 2 characters in it.");
      // ()prev select element that come immediatly before title text
      $("#title").prev().addClass("error");
    }
  } else {
    $("#textholder").text(
      "Dont be lazy! enter some character in the box holder."
    );
    // ()prev select element that come immediatly before title text
    $("#title").prev().addClass("error");
  }

  // Let set false to the boolean value
  if (booleanValue) {
    booleanValue = false;

    // put  rating  input   into the ratingvalueHolder
    let ratingValueHolder = 0 + $("#rating").val();

    if (ratingValueHolder >= 0 && ratingValueHolder <= 10) {
      booleanValue = true;
    } else {
      $("#textholder").text(" Movie rating can only be between 0 and 10.");
      $("#rating").prev().addClass("error");
    }
  }

  return booleanValue;
}

function removeFunc() {
  $("#textholder").text("");

  // remove error from title, rating and textholder
  $("#title").prev().removeClass("error");
  $("#rating").prev().removeClass("error");
  $("#textholder").removeClass("error");
}

function stars(starsRating) {
  let starSymbol = "&#11088";
  // repeat function help return number of copies of stars
  // returns number of stars wihtin the range calculated from line 44
  let ratingHolder = starSymbol.repeat(Math.round(starsRating));

  return ratingHolder;
}

// Let add some movie of choice from buttom click functions
$("#button-click").on("click", function (e) {
  e.preventDefault();

  removeFunc();

  if (validateValue()) {
    let titleAndRating =
      `"${$("#title").val()}"` + ` ${stars($("#rating").val())}`;
    // add movie class and div
    let divHolder = $("<div>").html(titleAndRating).addClass("movie-msg");
    $("<button>").text("X").addClass("remove-click").appendTo(divHolder);
    $(".movie-result").append(divHolder);

    // jquerry selector  clear all inputs
    $("input").val("").change();
  }
});

// remove click
$(".movie-result").on("click", ".remove-click", function () {
  $(this).parent().remove();
});
