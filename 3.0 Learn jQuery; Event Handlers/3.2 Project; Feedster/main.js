$(document).ready(() => {
  // 1.
  $('.menu').on('mouseover', () => {
    $('.nav-menu').show();
  });
  // 2.
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
  });
  // 3. & 5.
  $('.btn')
  .on('mouseover', event => {
    $(event.currentTarget).addClass('btn-hover');
  })
  // 4. & 5.
  .on('mouseleave', event => {
    $(event.currentTarget).removeClass('btn-hover');
  })
  // 6. & 8.
  $('.postText').on('keyup', event => {
    // 7.
    $('.postText').focus();
    // 8.
    const post = $(event.currentTarget).val();
    // 9.
    let remaining = 140 - post.length;
    // 11.
    if (remaining <= 0) {
      $('.wordcount').addClass('red');
    } else {
      // 12.
      $('.wordcount').removeClass('red');
    }
    // 10.
    $('.characters').html(remaining);
  })
});
