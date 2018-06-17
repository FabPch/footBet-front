var cmpMyAccount = '#cmp-my-account';
jQuery(document).ready(function(){
  var vm = new Vue({
    el: cmpMyAccount,
    data: {
      mounted: false,

      email: "",
      nickname: "",
      profilePic: "",

      gamblers: [],
      myRanking: null
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
      this.getAllGamblers();

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
      },

      getAllGamblers: function() {
        this.$http.get(
          '/api/gambler'
        ).then(
          // Success
          function(response) {
            this.gamblers = response.body;
            for(var i = 0; i < this.gamblers.length; i++) {
              if(lsGetData('userId') === this.gamblers[i].id.toString()) {
                this.myRanking = i+1;
                break;
              }
            }


          },

          // Error
          function(response) {
            console.error(response);
          }
        );
      }
    }
  });
});
