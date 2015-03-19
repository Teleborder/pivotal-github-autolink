$(function() {
  nodesToReplace = $('.js-issue-title, .js-comment-body');
  nodesToReplace.each(function () {
    replacePivotalLinks(this);
  });

  function replacePivotalLinks(node) {
    $(node).contents().filter(function () {
      if (this.nodeType === 1) {
        // element nodeType
        replacePivotalLinks(this);
      } else if (this.nodeType === 3) {
        // text nodeType
        $(this).replaceWith(this.data.replace(/\[(?:Finishes|Delivers|Fixes) #(\d+)\]/gi, "<a href=\"https://www.pivotaltracker.com/story/show/$1\" target=\"_blank\">$&</a>"));
      }
    });
  }
});


