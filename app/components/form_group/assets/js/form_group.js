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
      clickedLinkSignUp: function (evt) {
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
