window.onload = function () {
  var elt = '#cmp-form-signup';
  var errorPseudo = ".errorPseudo";
  var goodPseudo = ".goodPseudo";
  var errorEmail = ".errorEmail";
  var goodEmail = ".goodEmail";
  var errorPass = ".errorPass";
  var goodPass = ".goodPass";
  var errorConfPass = ".errorConfPass";
  var goodConfPass = ".goodConfPass";
  var vm = new Vue({
    el: elt,
    data: {
      mounted: false,
      title: "Vous inscrire",
      pseudo: "",
      email: "",
      password: "",
      confirmPassword: ""
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
        validPseudo: function(evt){
            if (checkTextField(evt)){
                goodPseudo.show();
                errorPseudo.hidden = true;
            } else {
                goodPseudo.hidden = true;
                errorPseudo.show();
            }
        },
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
        validPasswords: function () {
            if (this.password == this.confirmPassword){
                goodPass.show();
                errorPass.hidden = true;
            } else {
                goodPass.hidden = true;
                errorPass.show();
            }
        },

        clickedLinkSignIn: function (evt) {
            return false;
        },

        submitSignup: function (evt) {
            console.log(evt);
            return false;
      },

    }
  });
}
