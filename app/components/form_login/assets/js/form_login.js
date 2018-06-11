window.onload = function () {
  var elt = '#cmp-form-login';
  var errorEmail = ".errorEmail";
  var goodEmail = ".goodEmail";
  var errorEmail = ".errorEmail";
  var goodPass = ".goodPass";
  var vm = new Vue({
    el: elt,
    data: {
      mounted: false,
      title: "Vous connecter",
      email: "",
      password: ""
    },

    // Default lifecycle events
    beforeCreate: function (evt) {
    },
    created: function (evt) {
    },
    beforeMount: function (evt) {
    },
    mounted: function (evt) {
      $('.loader').hide(750);
      this.mounted = true;
    },
    beforeUpdate: function (evt) {
    },
    updated: function (evt) {
    },
    beforeDestroy: function (evt) {
    },
    destroyed: function (evt) {
    },

    // Custom methods
    methods: {
        validEmail: function(evt){
            if (checkEmail(evt)){
                goodPseudo.show();
                errorPseudo.hidden = true;
            } else {
                goodPseudo.hidden = true;
                errorPseudo.show();
            }
        },
        validPassword:  function(evt){
            if (checkPassword(evt)){
                goodPseudo.show();
                errorPseudo.hidden = true;
            } else {
                goodPseudo.hidden = true;
                errorPseudo.show();
            }
        },
        clickedLinkSignUp: function (evt) {
          return false;
        },

          submitLogin: function (evt) {
          console.log(evt);
          return false;
        },
    }
  });
}
