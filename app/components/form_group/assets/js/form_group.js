window.onload = function () {
    var elt = '#cmp-form-group';
    var errorGroup = ".errorGroup";
    var goodGroup = ".goodGroup";
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
      isConnected: false,
      modeSignUp: false,
      modeSignIn: false,

        group: "",
        email: "",
        password: "",
        confirmPassword: "",
        nickname: "",
        groupValidated: null,
        emailValidated: null,
        passwordValidated: null,
        confirmPasswordValidated: null,
        nickname: "",

        signUpFailed: false,

      title: "Création d'un groupe"
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
        validGroup: function(evt){
            // Reinit signup failure
            this.signUpFailed = false;

            this.groupValidated = checkTextField(this.group);
        },
        validEmail: function(evt){
            // Reinit signup failure
            this.signUpFailed = false;

            this.emailValidated = checkEmail(this.email);
        },
        validPassword:  function(evt){
            // Reinit signup failure
            this.signUpFailed = false;

            this.passwordValidated = checkPassword(this.password);
        },
        validPasswords: function () {
            // Reinit signup failure
            this.signUpFailed = false;

            this.confirmPasswordValidated = (this.password === this.confirmPassword && checkPassword(this.password));
        },

      clickedLinkSignUp : function (evt) {
        this.modeSignUp = true;
        this.modeSignIn = false;
        return false;
      },
      clickedLinkSignIn: function (evt) {
        this.modeSignUp = false;
        this.modeSignIn = true;
        return false;
      },

      submitCreateGroup: function (evt) {
        console.log(evt);
        return false;
      },
      submitSignUpAndCreateGroup: function (evt) {
        console.log(evt);
        return false;
      },
      submitSignInAndCreateGroup: function (evt) {
        console.log(evt);
        return false;
      },
    }
  });
}
