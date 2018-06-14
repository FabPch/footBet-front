var cmpRanking = '#cmp-ranking';
jQuery(document).ready(function(){
  var vm = new Vue({
    el: cmpRanking,
    data: {
      mounted: false,

      title: "Mon profil",

      email: "",
      nickname: "",
      profilePic: ""
    },

    // Default lifecycle events
    beforeCreate: function (evt) {
    },
    created: function (evt) {
    },
    beforeMount: function (evt) {
    },
    mounted: function (evt) {
      this.nickname = lsGetData('userNickname');
      this.email = lsGetData('userEmail');

      this.loadProfilePic();

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
      loadProfilePic: function() {
        this.profilePic = 'https://www.gravatar.com/avatar/'+md5(this.email);
      }
    }
  });
});
