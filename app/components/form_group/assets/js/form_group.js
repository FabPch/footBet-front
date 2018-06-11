window.onload = function () {
    var elt = '#cmp-form-group';
    var errorGroup = ".errorGroup";
    var goodGroup = ".goodGroup";
    var errorEmail = ".errorEmail";
    var goodEmail = ".goodEmail";
    var errorPass = ".errorPass";
    var goodPass = ".goodPass";
    var errorConfPass = ".errorConfPass";
    var goodConfPass = ".goodConfPass";
  var vm = new Vue({
    el: elt,
    data: {
      mounted: false,
      isConnected: false,
      modeSignUp: false,
      modeSignIn: false,

      title: "Création d'un groupe",

      groupName: "",
      email: "",
      password: "",
      confirmPassword: "",
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
        validGroupName: function(evt){
            if (checkTextField(evt)){
                goodPseudo.show();
                errorPseudo.hidden = true;
            } else {
                goodPseudo.hidden = true;
                errorPseudo.show();
            }
        },
        validEmail: function(evt){
            if (checkEmail(evt)){
                goodPseudo.show();
                errorPseudo.hidden = true;
            } else {
                goodPseudo.hidden = true;
                errorPseudo.show();
            }
        },
        validPassword:  function(evt){
            if (checkPassword(evt)){
                goodPseudo.show();
                errorPseudo.hidden = true;
            } else {
                goodPseudo.hidden = true;
                errorPseudo.show();
            }
        },
        validPasswords: function () {
            if (this.password == this.confirmPassword){
                goodPass.show();
                errorPass.hidden = true;
            } else {
                goodPass.hidden = true;
                errorPass.show();
            }
        },

      clickedLinkSignUp : function (evt) {
        this.modeSignUp = true;
        this.modeSignIn = false;
        return false;
      },
      clickedLinkSignIn: function (evt) {
        this.modeSignUp = false;
        this.modeSignIn = true;
        return false;
      },

      submitCreateGroup: function (evt) {
        console.log(evt);
        return false;
      },
      submitSignUpAndCreateGroup: function (evt) {
        console.log(evt);
        return false;
      },
      submitSignInAndCreateGroup: function (evt) {
        console.log(evt);
        return false;
      },
    }
  });
}
