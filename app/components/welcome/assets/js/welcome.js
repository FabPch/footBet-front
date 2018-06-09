window.onload = function() {
  var elt = '#cmp-welcome';
  
  var cmpWelcome = new Vue({
    el: elt,
    data: {
      message1: "Plateforme de paris et pronostiques entre amis et collègues sur la coupe du monde de football 2018.",
      message2: "Créez votre groupe et invitez vos collègues et amis à pronostiquer la coupe du monde fe football 2018 !"
    },
    
    // Default lifecycle events
    beforeCreate: function(evt) {},
    created: function(evt) {},
    beforeMount: function(evt) {},
    mounted: function(evt) {
      $('.loader').hide(750);
      $(elt).show();
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
