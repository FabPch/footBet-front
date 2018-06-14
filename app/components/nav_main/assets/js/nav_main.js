var eltCmpNavMain = '#cmp-nav-main';
jQuery(document).ready(function(){
  var cmpNavMain = new Vue({
    el: eltCmpNavMain,
    data: {
      readyToShow: false,

      userSignedIn: false,

      menuItems: [
        {
          "label": "Accueil",
          "link": "/",
          "requiredAuth" : null
        },
        {
          "label": "Mon tableau de bord",
          "link": "/my/dashboard",
          "requiredAuth" : true
        },
        {
          "label": "Mes pronostiques",
          "link": "/my/predictions",
          "requiredAuth" : true
        },
        {
          "label": "Le calendrier des matchs",
          "link": "/#cmp-match-list",
          "requiredAuth" : null
        },
        {
          "label": "Créer mon groupe",
          "link": "/group",
          "requiredAuth" : false
        },
        {
          "label": "Se connecter",
          "link": "/sign_in",
          "requiredAuth" : false
        },
        {
          "label": "S'inscrire",
          "link": "/sign_up",
          "requiredAuth" : false
        },
        {
          "label": "Se déconnecter",
          "link": "/sign_out",
          "requiredAuth" : true
        }
      ]
    },

    // Default lifecycle events
    beforeCreate: function(evt) {},
    created: function(evt) {},
    beforeMount: function(evt) {},
    mounted: function(evt) {
      this.getUserStatus();

      if(getUriParams().alert && getUriParams().alert === "signout-ok") {
        $('#alert-signedout-ok').show();
        setTimeout(function(){
          $('#alert-signedout-ok').hide(750);
        }, 5000);
      }
    },
    beforeUpdate: function(evt) {},
    updated: function(evt) {},
    beforeDestroy: function(evt) {},
    destroyed: function(evt) {},

    // Custom methods
    methods: {
      /**
       * getUserStatus()
       * @param evt
       * Methods that calls /api/auth [get] to get user informations
       * Called when component is loaded
       */
      getUserStatus: function(evt) {
        var that = this;
        this.$http.get(
          '/api/auth'
        ).then(
          // Success
          function(response) {
            lsSetData('userId', response.body.id);
            lsSetData('userEmail', response.body.login);
            lsSetData('userNickname', response.body.name);
            that.userSignedIn = true;
          },

          // Error
          function(response) {
            that.userSignedIn = false;
          }
        );
      },

      /**
       * submitSignout()
       * @param evt
       * Signout method binded on link /sign_out
       * Is calls /api/auth [delete]
       */
      submitSignout: function(evt) {
        evt.preventDefault();
        this.$http.delete(
          '/api/auth'
        ).then(
          // Success
          function(response) {
            window.location.href = '/?alert=signout-ok';
          },

          // Error
          function(response) {
            console.error("Disconnection failed");
            console.error(response);
            window.location.href = '/';
          }
        );
        return false;
      }
    }
  });
});
