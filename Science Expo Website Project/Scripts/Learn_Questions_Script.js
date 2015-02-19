var getPosition = function(element) {
    var xPosition = 0;
    var yPosition = 0;

    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }
    pos = [xPosition, yPosition];
    return pos;
}

var inArray = function(item, array) {
  is_in = false;
  for(var i in array) {
    if(item === array[i]) {
      is_in = true;
      break;
    }
  }
  return is_in;
}

var checkText = function(id, answer) {
  elem = document.getElementsByName(id)[0];
  value = elem.value.replace(/^\s+|\s+$/gm,'');
  if(value === answer) {
    elem.style.border = "2px solid #4cbe00";
    return true;
  }
  else {
    elem.style.border = "2px solid #e40000";
    return false;
  }
}

var checkanswerRadio = function(names, node_positions, correct_radio, answer_ids) {
  elem_1 = document.getElementsByName(names[0])[node_positions[0]];
  elem_2 = document.getElementsByName(names[1])[node_positions[1]];
  if(correct_radio === 0) {
    answer = elem_1;
  }
  else {
    answer = elem_2;
  }
  if(answer.checked) {
     document.getElementById(answer_ids[1]).style.border = "2px solid #e7e7e7";
     document.getElementById(answer_ids[0]).style.border = "2px solid #28b519";
    return true;
  }
  else {
     document.getElementById(answer_ids[1]).style.border = "2px solid #ba1610";
     document.getElementById(answer_ids[0]).style.border = "2px solid #e7e7e7";
    return false;
  }
}

var checkanswerCheckbox = function(name, correct_answers) {
  length = document.getElementsByName(name).length;
  var correct = true;
  var correct_answers = new Array();
  var wrong_answers = new Array();
  for(var i = 0; i < length; i++) {
    elem = document.getElementsByName(name)[i];
    if(inArray(elem.value, correct_answers)) {
      if(elem.checked) {
        correct = true;
        correct_answers.push(i);
      }
      else {
        correct = false;
        wrong_answers.push(i);
        break;
      }
    }
    else {
      if(elem.checked) {
        correct = false;
        wrong_answers.push(i);
        break;
      }
      else {
        correct = true;
        correct_answers.push(i);
      }
    }
  }
  for(var i in correct_answers) {
    $(".Test").css("border", "2px solid #ba1610");
  }
  for(var i in wrong_answers) {
    $(".Test").css("border", "2px solid #28b519");
  }
}

var addImg = function(x, y, src, docpos) {
  var elem = document.createElement("IMG");
  elem.style.left = x;
  elem.style.top = y;
  elem.src = src;
  document.insertBefore(elem, docpos);
}
