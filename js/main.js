$(document).ready(() =>{
    $('.hint-box').on('click', () =>{
      $('.hint').slideToggle(500);
  
  });
  
  
  
  $('.wrong-answer-one').on('click', () => {
    $('.wrong-answer-one').fadeOut('slow');
  });
  
  $('.wrong-answer-two').on('click', () => {
    $('.wrong-answer-two').fadeOut('slow');
  });
  
  $('.wrong-answer-three').on('click', () => {
    $('.wrong-answer-three').fadeOut('slow');
  });
  
  $('.wrong-text-one').on('click', () => {
    $('.frown').show('slow');
  });
  
  $('.wrong-text-two').on('click', () => {
    $('.frown').show('slow');
  });
  
  $('.wrong-text-three').on('click', () => {
    $('.frown').show('slow');
  });
  
  $('.correct-answer').on('click', () => {
    $('.frown').hide('slow');
    $('.smiley').show('slow');
  })
  
  });