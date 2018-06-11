var isValueValid = function(val, type) {
  var regexp = {
    textfield: /[\w\d]{3,255}/,
    password: /(.*){6,255}/,
    email : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  }

  return regexp[type].test(val);
}
var checkEmail = function(val){
  return isValueValid(val, "email");
}

var checkPassword = function(val){
    return isValueValid(val, "password");
}

var checkTextField = function(val){
    return isValueValid(val, "textfield");
}