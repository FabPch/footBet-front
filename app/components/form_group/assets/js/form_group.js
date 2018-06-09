window.onload = function() {
  var elt = '#cmp-welcome';
  
  var cmpWelcome = new Vue({
    el: elt,
    data: {
      mounted: false,

      title: "MotheR Яussia",
      subtitle: "Coupe du monde de Football 2018",
      description: "<p>Plateforme de paris et pronostiques entre amis et collègues sur la coupe du monde de football 2018.</p><p>Créez votre groupe et invitez vos collègues et amis à pronostiquer tous les matchs !</p>"
    },
    
    // Default lifecycle events
    beforeCreate: function(evt) {},
    created: function(evt) {},
    beforeMount: function(evt) {},
    mounted: function(evt) {
      $('.loader').hide(750);
      this.mounted = true;
    },
    beforeUpdate: function(evt) {},
    updated: function(evt) {},
    beforeDestroy: function(evt) {},
    destroyed: function(evt) {},
      
    // Custom methods
    methods: {
      submitCreateGroup: function(evt) {
        console.log(evt);
      }
    }
  });  
}
