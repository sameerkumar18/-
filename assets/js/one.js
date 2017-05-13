var current = 0;
var captionLength = 0;
var captionList = [
  'Hi',
  'I\'m Sam',
  'I ❤️ Butter Chicken',
  'I like Photography',
  'I enjoy quizzing',
  'I like building stuff',]


$(document).ready(function() {
  setInterval('cursorBlink()', 600);
  startTyping();
});

function startTyping() {
  caption = captionList[current];
  current = (current+1)%captionList.length;
  type();
}

function type() {
  $('#dynamic-desc').text('> '+caption.substr(0, captionLength++));
  if (captionLength < caption.length + 1) {
    setTimeout('type()',50);
  } else {
    setTimeout('erase()', 1000);
  }
}

function erase() {
  $('#dynamic-desc').text('> '+caption.substr(0, captionLength--));
  if (captionLength >= 0) {
    setTimeout('erase()', 50);
  } else {
    setTimeout('startTyping()',1000);
  }
}

function cursorBlink() {
      $('#cursor').animate({
          opacity: 0
      }, 'fast', 'swing').animate({
          opacity: 1
      }, 'fast', 'swing');
}