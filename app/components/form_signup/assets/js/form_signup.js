var cmpFormSignup = '#cmp-form-signup';
jQuery(document).ready(function(){
  var vm = new Vue({
    el: cmpFormSignup,
    data: {
      mounted: false,
      title: "Inscrivez-vous",

      pseudo: "",
      email: "",
      password: "",
      confirmPassword: "",

      pseudoValidated: null,
      emailValidated: null,
      passwordValidated: null,
      confirmPasswordValidated: null,

      signUpFailed: false
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
        // Reinit signup failure
        this.signUpFailed = false;

        this.pseudoValidated = checkTextField(this.pseudo);
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

      submitSignup: function (evt) {
        // Check inputs valid
        if(checkTextField(this.pseudo) && checkEmail(this.email) && checkPassword(this.password) && this.password === this.confirmPassword) {

          // Reinit signup failure
          this.signUpFailed = false;

          // Prepare params
          var params = {
            "name": this.pseudo,
            "login": this.email,
            "password": this.password
          };

          // Save context to use it into other context
          var that = this;

          // Call Ajax WS /api/gambler
          this.$http.post(
            '/api/gambler',
            params
          ).then(
            // success
            function(response) {
              window.location.href = "/sign_in?alert=register-ok";
            },

            // error
            function(response) {
              that.signUpFailed = true;
            }
          );
          console.log("AJAX GO ");
          console.log(params);
        }
        return false;
      }
    }
  });
});
