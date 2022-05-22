const main = function() {
  // 2.
  $('.more-btn').on('click', event => {
    $(event.currentTarget).siblings('.more-menu').toggle();
  });
// 3.
  $('.share').on('click', event => {
    $(event.currentTarget).siblings('.share-menu').toggle();
  });
  // 4.
  $('.notification').on('click', event => {
    $(event.currentTarget).toggleClass('active');
  })
};

$(document).ready(main);
