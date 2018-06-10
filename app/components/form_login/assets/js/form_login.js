window.onload = function () {
  var elt = '#cmp-form-login';

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
