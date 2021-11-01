$('document').ready(function() {

    $('#loginForm').submit(function(event) {
      var postData = new Object();
      postData.userName = $('#userName').val();
      postData.password = $('#password').val();
      postData.rememberMe = $('#RememberMe').is(':checked');

      $.post('Account/LogOn',
        postData,

        function OnResult(result) {
          if (result.IsSuccess) {
            $('#loginPanel').hide();
            $('#logoutPanel').show();
            var username = $('#userName').val();

            $('#username')
               .html("<b>" + username + "</b>");
          } else {
            $('#message').text(result.ErrorString);
          }
        },
        'json');
      event.preventDefault();
    })
  });
