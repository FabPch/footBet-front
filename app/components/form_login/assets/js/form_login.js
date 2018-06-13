var cmpFormLogin = '#cmp-form-login';
jQuery(document).ready(function(){
  var vm = new Vue({
    el: cmpFormLogin,
    data: {
      mounted: false,

      title: "Connectez-vous",

      email: "",
      password: "",

      emailValidated: null,
      passwordValidated: null,

      loginFailed: false
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
        // Reinit login failure
        this.loginFailed = false;

        this.emailValidated = checkEmail(this.email);
      },

      validPassword: function(evt) {
        // Reinit login failure
        this.loginFailed = false;

        this.passwordValidated = this.password.length >= 3;
      },

      submitLogin: function (evt) {

        // Check inputs valid
        if(checkEmail(this.email) && this.password.length >= 3) {

          // Reinit login failure
          this.loginFailed = false;

          // Prepare params
          var params = {
            "login": this.email,
            "password": this.password
          };

          // Save context to use it into other context
          var that = this;

          // Call Ajax WS /api/auth
          this.$http.post(
            '/api/auth',
            params
          ).then(
            // success
            function(response) {
              window.location.href = "/my/account";
            },

            // error
            function(response) {
              that.loginFailed = true;
            }
          );
        }
        return false;
      }
    }
  });
});
