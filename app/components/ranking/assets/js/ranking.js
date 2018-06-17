var cmpRanking = '#cmp-ranking';
jQuery(document).ready(function(){
  var vm = new Vue({
    el: cmpRanking,
    data: {
      mounted: false,

      gamblers: []
    },

    // Default lifecycle events
    beforeCreate: function (evt) {
    },
    created: function (evt) {
    },
    beforeMount: function (evt) {
    },
    mounted: function (evt) {
      this.getAllGamblers();

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
      srcProfilePic: function(email) {
        return 'https://www.gravatar.com/avatar/'+md5(email);
      },

      getAllGamblers: function() {
        this.$http.get(
          '/api/gambler'
        ).then(
          // Success
          function(response) {
            this.gamblers = response.body;
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
