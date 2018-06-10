var eltCmpWelcome = '#cmp-welcome';
jQuery(document).ready(function(){
  var cmpWelcome = new Vue({
    el: eltCmpWelcome,
    data: {
      readyToShow: false,

      description: "<p style='margin-bottom: 50px;'>Plateforme de paris et pronostiques entre amis et collègues sur la coupe du monde de football 2018.<br>Créez votre groupe et invitez vos collègues et amis à pronostiquer tous les matchs !</p>"
    },

    // Default lifecycle events
    beforeCreate: function(evt) {},
    created: function(evt) {},
    beforeMount: function(evt) {},
    mounted: function(evt) {
      this.readyToShow = true;
      // Loader hidden by match_list component
      // $('.loader').hide(750);
    },
    beforeUpdate: function(evt) {},
    updated: function(evt) {},
    beforeDestroy: function(evt) {},
    destroyed: function(evt) {},

    // Custom methods
    methods: { }
  });
});
