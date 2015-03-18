$(function() {
  nodesToReplace = $('.js-issue-title, .js-comment-body');
  nodesToReplace.each(function () {
    $(this).html($(this).html().replace(/\[(?:Finishes|Delivers|Fixes) #(\d+)\]/gi, "<a href=\"https://www.pivotaltracker.com/story/show/$1\" target=\"_blank\">$&</a>"));
  });
});
