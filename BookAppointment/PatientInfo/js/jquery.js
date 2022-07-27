$(document).ready(function () {
  jQuery('input#inlineRadio2').click(function () {
    jQuery('.guardian-choice, .emergency-radio').css({ display: "block" });
  });
});
$(document).ready(function () {
  jQuery('input#inlineRadio1').click(function () {
    jQuery('.guardian-choice, .emergency-radio').css({ display: "none" });
  });
});