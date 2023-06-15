function fetchUserDetails() {
    var username = document.getElementById("username").value;
    var url = "https://api.github.com/users/" + username;

    $.ajax({
      url: url,
      success: function (data) {
        var name = data.name || "Not available";
        var reposCount = data.public_repos || 0;
        var followersCount = data.followers || 0;

        var result = document.getElementById("result");
        result.innerHTML = "<p><strong>Name:</strong> " + name + "</p>" +
          "<p><strong>Number of repositories:</strong> " + reposCount + "</p>" +
          "<p><strong>Number of followers:</strong> " + followersCount + "</p>";
      },
      error: function () {
        var result = document.getElementById("result");
        result.innerHTML = "<p>Failed to fetch user details. Please check the username and try again.</p>";
      }
    });
  }