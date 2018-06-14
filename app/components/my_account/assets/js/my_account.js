var cmpMyAccount = '#cmp-my-account';
jQuery(document).ready(function(){
  var vm = new Vue({
    el: cmpMyAccount,
    data: {
      mounted: false,

      title: "Mon profil",

      email: "",
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
    }
  });
});
