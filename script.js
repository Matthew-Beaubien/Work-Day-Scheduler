$(document).ready(function() {
  //Displays current date in the header
  function displayCurrentDate() {
    const currentDate = dayjs().format('dddd, MMMM D, YYYY');
    $('#currentDate').text(currentDate);
}
//Adds or removes class based on time of day
function applyTimeClasses() {
  const currentHour = dayjs().hour();
  $('.time-block').each(function() {
    const blockHour = parseInt($(this).attr('id').split('-')[1]);
    if (blockHour < currentHour) {
      $(this).addClass('past').removeClass('present future');
    } else if (blockHour === currentHour) {
      $(this).addClass('present').removeClass('past future');
    } else {
      $(this).addClass('future').removeClass('past present');
    }
  });
}
//Saves text to local storage
$('.saveBtn').click(function() {
  const textArea = $(this).prev('textarea');
  const blockId = $(this).parent().attr('id');
  localStorage.setItem(blockId, textArea.val());
});
//Retrieves text from local storage
function getUserInput() {
  $('.time-block').each(function() {
    const blockId = $(this).attr('id');
    const savedInput = localStorage.getItem(blockId);
    if (savedInput) {
      $(this).find('textarea').val(savedInput);
    }
  });
}
//Call functions
displayCurrentDate();
applyTimeClasses();
getUserInput();
});


