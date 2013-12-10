$(function() {
  $('body').on('submit', 'form.js-comment-update', function(evt) {
    var issueBody = $('#issue_body'),
        newBody = issueBody.val().replace(/^https.*\.pivotaltracker\.com\/story\/show\/(\d*)/gmi, "#[$1]($&)");

    issueBody.val(newBody);
    return true;
  });
});
