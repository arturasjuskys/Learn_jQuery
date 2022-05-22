$(document).ready(() => {
  // 2.
  $('#text').on('keyup', event => {
    // 3.
    $('.preview').html($(event.currentTarget).val())
  });
  // 4.
  $('#font').on('change', event => {
    // 5.
    $('.preview').css({
      fontFamily: $(event.currentTarget).val()
    });
  });
  // 6.
  $('#weight').on('change', event => {
    $('.preview').css('fontWeight', $(event.currentTarget).val());
  });
  // 7.
  $('#size').on('keyup', event => {
    // 8.
    const fontSize = $(event.currentTarget).val() + 'px';
    // 9.
    $('.preview').css('fontSize', fontSize);
  });
});
