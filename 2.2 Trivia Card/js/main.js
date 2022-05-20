$(document).ready(() =>{
  // 1.
  $('.hint-box').on('click', () => {
    // 2.
    $('.hint').slideToggle(700);
  });
  // 3.
  $('.wrong-answer-one').on('click', () => {
    // 4.
    $('.wrong-text-one').fadeOut('fast');
    // 5.
    $('.frown').show();
  });
  $('.wrong-answer-two').on('click', () => {
    // 4.
    $('.wrong-text-two').fadeOut('fast');
    // .5
    $('.frown').show();
  });
  $('.wrong-answer-three').on('click', () => {
    // 4.
    $('.wrong-text-three').fadeOut('fast');
    // .5
    $('.frown').show();
  });
  // 6.
  $('.correct-answer').on('click', () => {
    // 7.
    $('.frown').hide();
    // 8.
    $('.smiley').show();
    // 9.
    $('.wrong-text-one').fadeOut('fast');
    $('.wrong-text-two').fadeOut('fast');
    $('.wrong-text-three').fadeOut('fast');
  });
});
