var isValueValid = function (val, type) {
  var regexp = {
    textfield: /[\w\d]{3,255}/,
    password: /(.*){6,255}/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  }

  return regexp[type].test(val);
};

var getUriParams = function () {
  var result = {};
  var searchParams = window.location.search.replace('?', '').split('&');
  for (var i = 0; i < searchParams.length; i++) {
    var searchParam = searchParams[i].split('=');
    result[searchParam[0]] = searchParam[1];
  }
  return result;
};

var checkEmail = function (val) {
  return isValueValid(val, "email");
}

var checkPassword = function (val) {
  return isValueValid(val, "password");
}

var checkTextField = function (val) {
  return isValueValid(val, "textfield");
}
var getGroupTeam = function (teamName) {
  var teamsGroup = {
    "Russia": "A",
    "Saudi Arabia": "A",
    "Egypt": "A",
    "Uruguay": "A",

    "Morocco": "B",
    "Iran": "B",
    "Portugal": "B",
    "Spain": "B",

    "France": "C",
    "Australia": "C",
    "Peru": "C",
    "Denmark": "C",

    "Argentina": "D",
    "Iceland": "D",
    "Croatia": "D",
    "Nigeria": "D",

    "Costa Rica": "E",
    "Serbia": "E",
    "Brazil": "E",
    "Switzerland": "E",

    "Germany": "F",
    "Mexico": "F",
    "Sweden": "F",
    "Korea Republic": "F",

    "Belgium": "G",
    "Panama": "G",
    "Tunisia": "G",
    "England": "G",

    "Poland": "H",
    "Senegal": "H",
    "Colombia": "H",
    "Japan": "H"
  };
  return teamsGroup[teamName];
};
