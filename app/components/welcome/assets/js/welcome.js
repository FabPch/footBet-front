window.onload = function() {
  var elt = '#cmp-welcome';
  
  var cmpWelcome = new Vue({
    el: elt,
    data: {
      mounted: false,

      description: "<p>Plateforme de paris et pronostiques entre amis et collègues sur la coupe du monde de football 2018.</p><p>Créez votre groupe et invitez vos collègues et amis à pronostiquer tous les matchs !</p>",

      teams: [],
      fixtures: []
    },
    
    // Default lifecycle events
    beforeCreate: function(evt) {},
    created: function(evt) {},
    beforeMount: function(evt) {},
    mounted: function(evt) {
      $('.loader').hide(750);
      this.mounted = true;
      this.getAllTeams();
    },
    beforeUpdate: function(evt) {},
    updated: function(evt) {},
    beforeDestroy: function(evt) {},
    destroyed: function(evt) {},
      
    // Custom methods
    methods: {
      getAllTeams: function(evt) {
        this.$http.get(
          'http://api.football-data.org/v1/competitions/467/teams',
          {headers: {'X-Auth-Token': '8aa99a3f8ed74cd3862fd8282585bc95'}}
        ).then(function(response) {
          this.teams = response.body.teams;
          this.getFixtures();
        });
      },
      getFixtures: function() {
        this.$http.get(
          'http://api.football-data.org/v1/competitions/467/fixtures',
          {headers: {'X-Auth-Token': '8aa99a3f8ed74cd3862fd8282585bc95'}}
        ).then(function(response) {
          this.fixtures = response.body.fixtures;
        }).finally(function(){
          $('[data-toggle="popover"]').popover();
        });
      },
      getTeamFlag: function(teamFullName) {
        var currentTeam = this.teams.filter(function( team ) {
          return team.name == teamFullName;
        });
        var flag = (currentTeam[0]) ? currentTeam[0].crestUrl || '' : '';
        return flag;
      },
      getReadableDate: function(fixture) {
        var d = new Date(fixture.date);
        var dDay = d.getDay().toString().length === 1 ? '0'+d.getDay() : d.getDay();
        var dMonth = d.getMonth().toString().length === 1 ? '0'+d.getMonth() : d.getMonth();
        var dYear = d.getFullYear();

        var dHour = d.getHours();
        var dMinutes = d.getMinutes().toString().length === 1 ? '0'+d.getMinutes() : d.getMinutes();
        return 'Le ' + dDay + '/' + dMonth + '/' + dYear + ' à ' + d.getHours() + 'h' + dMinutes;
      }
    }
  });  
}
