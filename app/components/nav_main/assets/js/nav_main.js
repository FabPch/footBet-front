var eltCmpNavMain = '#cmp-nav-main';
jQuery(document).ready(function(){
  var cmpNavMain = new Vue({
    el: eltCmpNavMain,
    data: {
      readyToShow: false,

      menuItems: [
        {
          "label": "Acceuil",
          "link": "/",
        },
        {
          "label": "Le calendrier des matchs",
          "link": "/#cmp-match-list",
        },
        {
          "label": "Créer mon groupe",
          "link": "/group",
        },
        {
          "label": "Se connecter",
          "link": "/sign_in",
        },
        {
          "label": "S'inscrire",
          "link": "/sign_up",
        }
      ]
    },

    // Default lifecycle events
    beforeCreate: function(evt) {},
    created: function(evt) {},
    beforeMount: function(evt) {},
    mounted: function(evt) {
      this.getUserStatus();
    },
    beforeUpdate: function(evt) {},
    updated: function(evt) {},
    beforeDestroy: function(evt) {},
    destroyed: function(evt) {},

    // Custom methods
    methods: {
      getUserStatus: function(evt) {
        this.$http.get(
          '/api/auth'
        ).then(function(response) {
          console.log(response);
        });
      }
    }
  });
});
