var eltCmpMatchList = '#cmp-match-list';
jQuery(document).ready(function(){
  var cmpMatchList = new Vue({
    el: eltCmpMatchList,
    data: {
      readyToShow: false,

      previousDate: '',

      teams: [],
      fixtures: []
    },

    // Default lifecycle events
    beforeCreate: function(evt) {},
    created: function(evt) {},
    beforeMount: function(evt) {},
    mounted: function(evt) {
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
          $('.loader').hide(750);

          this.readyToShow = true;

          // Scroll if anchor in url
          setTimeout(function(){
            var locationHash = window.location.hash.split("#");
            if(locationHash.length > 1) {
              $('.main-container')[0].scrollTo(0,$('#' + locationHash[1]).offset().top);
            }
          },1000);
        });
      },

      isNewDate: function(fixture) {
        var d = new Date(fixture.date);
        var dDay = d.getDay().toString().length === 1 ? '0'+d.getDay() : d.getDay();
        var dMonth = d.getMonth().toString().length === 1 ? '0'+d.getMonth() : d.getMonth();
        var dYear = d.getFullYear();

        var currentDate = dDay + dMonth + dYear;

        if(currentDate !== this.previousDate) {
          this.previousDate = currentDate;
          return true;
        } else {
          this.previousDate = currentDate;
          return false;
        }
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
        var dDate = d.getDate().toString().length === 1 ? '0'+d.getDate() : d.getDate();
        var dMonth = (d.getMonth()+1).toString().length === 1 ? '0'+(d.getMonth()+1) : (d.getMonth()+1);
        var dYear = d.getFullYear();

        var days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
        var dDayWord = days[d.getDay()];

        return dDayWord + ' ' + dDate + '/' + dMonth + '/' + dYear;
      },
      getReadableDateTime: function(fixture) {
        var d = new Date(fixture.date);
        var dDate = d.getDate().toString().length === 1 ? '0'+d.getDate() : d.getDate();
        var dMonth = d.getMonth().toString().length === 1 ? '0'+d.getMonth() : d.getMonth();
        var dYear = d.getFullYear();

        var dHour = d.getHours();
        var dMinutes = d.getMinutes().toString().length === 1 ? '0'+d.getMinutes() : d.getMinutes();
        return 'Le ' + dDate + '/' + dMonth + '/' + dYear + ' à ' + d.getHours() + 'h' + dMinutes;
      }
    }
  });
});
