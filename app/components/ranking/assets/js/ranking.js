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
        return 'https://www.gravatar.com/avatar/'+ email;
      },

      getAllGamblers: function() {
        this.$http.get(
          '/api/gambler'
        ).then(
          // Success
          function(response) {
            var gamblers = response.body;

            var previousGain = null;
            var currentRank = 0;

            for(var i=0; i<gamblers.length; i++) {
              if(gamblers[i].gain !== previousGain) {
                currentRank++;
                gamblers[i]["rank"] = currentRank;
              } else {
                gamblers[i]["rank"] = currentRank;
              }
              previousGain = gamblers[i].gain;
            }
            this.gamblers = gamblers;
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
