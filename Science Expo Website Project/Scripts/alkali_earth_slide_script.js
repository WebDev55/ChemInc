//Function Defining Block.
var defineIds = function(Ids) {
  Id_list = new Array();
  for(var i = 0; i < Ids.length; i++) {
    Id_list.push(Ids[i]);
  }
  return Id_list;
}

var displayHandle = function() {
  elem = document.getElementById(IDS[increment]);
  elem.style.display = "none";
  console.log("Element Selected By displayHandle(): ");
  console.log(elem);
  if(increment >= IDS.length - 1) {
    return null;
  }
  else {
    increment = increment + 1;
  }
  elem = document.getElementById(IDS[increment]);
  elem.style.display = "inline-block";
  console.log("Element Selected By displayHandle(): ");
  console.log(elem);
  return increment;
}

var resetAllIds = function() {
  for(var i = 1; i < IDS.length; i++) {
      document.getElementById(IDS[i]).style.display = "none";
      console.log(IDS[i]);
  }
}


//Variable defining block.
var IDS = defineIds(["family_properties_info", "family_properties_questions", "family_elements_info", "family_elements_questions", "Congrats_Message"]);
var increment = 0;


//Debugging Block. Remove when debugged.
console.log("ID list(IDS): " + IDS);
console.log("Initial Increment Value: " + increment);


//Main Loop.
resetAllIds();
$(document).ready(function() {
  $("#Next").click(function() {
    var final_increment = displayHandle();
    console.log("Final Value of Increment: " + final_increment);
    if(final_increment == 4) {
      $("#Next").css("display", "none");
    }
  })
})
