window.onload = function () {
  var elt = '#cmp-form-group';

  var vm = new Vue({
    el: elt,
    data: {
      mounted: false,
      isConnected: false,
      modeSignUp: false,
      modeSignIn: false,

      title: "Création d'un groupe",

      groupName: "",
      email: "",
      password: "",
      confirmPassword: "",
      nickname: ""
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
      validGroupName: function(){
        return isValueValid(this.groupName, 'textfield');
      },
      validEmail: function(){
        return isValueValid(this.email, 'email');
      },
      validPassword:  function(){
        return isValueValid(this.password, 'password');
      },
      validPasswords: function () {
        return isValueValid(this.password, 'password') && this.password == this.confirmPassword
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
