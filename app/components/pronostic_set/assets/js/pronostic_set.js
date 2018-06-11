var eltCmpMatchList = '#cmp-pronostic-set';
jQuery(document).ready(function(){
  var cmpMatchList = new Vue({
    el: eltCmpMatchList,
    data: {
      readyToShow: false,

      previousDate: '',
      editCard: '',

      countdowns: {},
      countdownsString: {},

      teams: [],
      fixtures: []
    },

    // Default lifecycle events
    beforeCreate: function(evt) {},
    created: function(evt) {},
    beforeMount: function(evt) {},
    mounted: function(evt) {
      window.ddata = this; // TODO : remove after testing
      this.getAllTeams();
    },
    beforeUpdate: function(evt) {},
    updated: function(evt) {},
    beforeDestroy: function(evt) {},
    destroyed: function(evt) {},

    // Custom methods
    methods: {

      /**
       * goEdit(event)
       * @param event
       *
       * Method binded from frontend
       * Shows editing mode for a specific card
       */
      goEdit: function(event){
        var fixtureId = $(event.currentTarget).attr('data-fixture-id');
        this.editCard = fixtureId;
        console.log(fixtureId);
      },

      /**
       *  getAllTeams()
       *  Call ajax API /v1/competitions/467/teams
       */
      getAllTeams: function() {
        this.$http.get(
          'http://api.football-data.org/v1/competitions/467/teams',
          {headers: {'X-Auth-Token': '8aa99a3f8ed74cd3862fd8282585bc95'}}
        ).then(function(response) {
          this.teams = response.body.teams;
          this.getFixtures();
        });
      },

      /**
       *  getFixtures()
       *  Call ajax API /v1/competitions/467/fixtures
       */
      getFixtures: function() {
        this.$http.get(
          'http://api.football-data.org/v1/competitions/467/fixtures',
          {headers: {'X-Auth-Token': '8aa99a3f8ed74cd3862fd8282585bc95'}}
        ).then(function(response) {
          this.fixtures = response.body.fixtures;
          for(var i=0; i<this.fixtures.length; i++) {
            var fixture = this.fixtures[i];

            if(fixture.date) {
              this.countdowns[this.getFixtureId(fixture)] = new Date(fixture.date);
              this.countdownsString[this.getFixtureId(fixture)] = this.getRemainingTime(this.countdowns[this.getFixtureId(fixture)]);
            }

            // Last loop
            if(i === this.fixtures.length - 1) {
              this.updateCountdowns();
            }
          }
        }).finally(function(){
          $('[data-toggle="popover"]').popover();
          $('.loader').hide(750);
          this.readyToShow = true;
        });
      },

      /**
       * submitPrediction()
       * @param event
       * Method binded by submit prediction event
       */
      submitPrediction: function(event) {
        var elts = event.target.elements;
        var params = {};

        for(var i=0; i<elts.length; i++) {
          if(params[elts[i].name] !== '') {
            params[elts[i].name] = elts[i].value;
          }
        }
        console.log(params);
      },

      /**
       * isNewDate()
       * @param fixture
       * @returns {boolean}
       *
       * Returns if fixture has a new date (versus previous fixture one)
       */
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

      /**
       * getTeam()
       * @param teamFullName
       * @returns {any}
       *
       * Returns full team object from full string team name
       */
      getTeam: function(teamFullName) {
        var currentTeam = this.teams.filter(function( team ) {
          return team.name == teamFullName;
        });
        return (currentTeam[0]) ? currentTeam[0] || {} : {};
      },

      /**
       * getTeamGroup()
       * @param teamFullName
       * @returns {*}
       *
       * Returns the group belonging to a team by their full string name
       */
      getTeamGroup: function(teamFullName) {
        return getGroupTeam(teamFullName);
      },

      /**
       * getTeamFlag()
       * @param teamFullName
       * @returns {*}
       *
       * Returns url of flag belonging to a team by their full string name
       */
      getTeamFlag: function(teamFullName) {
        var currentTeam = this.teams.filter(function( team ) {
          return team.name == teamFullName;
        });
        var flag = (currentTeam[0]) ? currentTeam[0].crestUrl || '' : '';
        return flag;
      },

      /**
       * getFixtureId()
       * @param fixture
       * @returns {string}
       *
       * Returns the string of the fixture's ID by the full fixture object
       */
      getFixtureId: function(fixture) {
        return fixture._links.self.href.replace('http://api.football-data.org/v1/fixtures/','');
      },

      /**
       * updateCountdowns()
       *
       * Used to update countdown timers objects and updating them into view
       */
      updateCountdowns: function() {
        var that = this;
        setInterval(function(){
          for (var fixtureId in that.countdowns){
            if (that.countdowns.hasOwnProperty(fixtureId)) {
              var dNew = new Date(that.countdowns[fixtureId]-1);
              var dStringNew = that.getRemainingTime(dNew);
              that.$set(that.countdowns, fixtureId, dNew);
              that.$set(that.countdownsString, fixtureId, dStringNew);
              $('.remaining-time[data-fixture-id="' + fixtureId + '"]').text(dStringNew);
            }
          }
        }, 1000);
      },

      /**
       * getRemainingTimeFromFixture()
       * @param fixture
       * @returns {string}
       *
       * Returns remaining string time by object fixture
       */
      getRemainingTimeFromFixture: function(fixture) {
        var d = new Date(fixture.date);
        return this.getRemainingTime(d);
      },

      /**
       * getRemainingTime
       * @param date
       * @returns {string}
       *
       * Returns remaining string time by final date
       */
      getRemainingTime: function(date) {
        var d = date;
        var dn = new Date();
        var finalText = "";

        var delta = Math.abs(d - dn) / 1000;

        var days = Math.floor(delta / 86400);
        delta -= days * 86400;
        if(days > 0) {
          finalText += days + "j ";
        }

        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;
        finalText += hours.toString().length===1 ? "0"+hours : hours;
        finalText += "h";

        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;
        finalText += minutes.toString().length===1 ? "0"+minutes : minutes;
        finalText += " ";

        var seconds = Math.floor(delta % 60);  // in theory the modulus is not required
        finalText += seconds.toString().length===1 ? "0"+seconds : seconds;
        finalText += "s";

        return finalText;
      },

      /**
       * getReadableDate()
       * @param fixture
       * @returns {string}
       *
       * Returns date string from the fixture given
       */
      getReadableDate: function(fixture) {
        var d = new Date(fixture.date);
        var dDate = d.getDate().toString().length === 1 ? '0'+d.getDate() : d.getDate();
        var dMonth = (d.getMonth()+1).toString().length === 1 ? '0'+(d.getMonth()+1) : (d.getMonth()+1);
        var dYear = d.getFullYear();

        var days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
        var dDayWord = days[d.getDay()];

        return dDayWord + ' ' + dDate + '/' + dMonth + '/' + dYear;
      },

      /**
       * getReadableDateTime()
       * @param fixture
       * @returns {string}
       *
       * Returns date time string from the fixture given
       */
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
