<div id="alert-pronostic-ko" class="alert alert-danger hide" role="alert">
  Erreur d'enregistrement du pronostique...
</div>
<div id="alert-pronostic-ok" class="alert alert-success hide" role="alert">
  Pronostique enregistré !
</div>
<div id="cmp-pronostic-set" v-show="readyToShow">
  <div class="pronostic-set panel-light">
    <h2>Liste des pronostiques par match</h2>
    <div class="row">
      <template v-for="fixture in fixtures">
        <div class="col-12 card-day-col" v-if="isNewDate(fixture) && fixture.homeTeamName.length > 0" v-on:click="toggleDaysPronostics" :data-fixture-date="fixture.date.split('T')[0]" v-bind:class="{ 'col-today': isToday(fixture)}">
          <h5>
            <span v-bind:class="{ closed: isBeforeToday(fixture), opened: !isBeforeToday(fixture)}">{{ getReadableDate(fixture) }}</span>
          </h5>
          <hr>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3 card-col" v-if="fixture.homeTeamName.length > 0" v-show="!isBeforeToday(fixture)" :data-fixture-date="fixture.date.split('T')[0]">
          <div class="card" :data-fixture-id="getFixtureId(fixture)" v-bind:class="{ edit: (editCard===getFixtureId(fixture)), ended: (fixture.status !== 'TIMED')}">
            <div class="card card-hover" v-on:click="goEdit" :data-fixture-id="getFixtureId(fixture)"></div>
            <div class="card-group-hover rounded-circle" v-on:click="goEdit" :data-fixture-id="getFixtureId(fixture)"></div>
            <div class="card-group rounded-circle text-center">
                <span>{{ getTeamGroup(fixture.homeTeamName)===getTeamGroup(fixture.awayTeamName) ? getTeamGroup(fixture.homeTeamName) : getTeamGroup(fixture.homeTeamName) + ' | ' + getTeamGroup(fixture.awayTeamName) }}</span>
            </div>
            <div class="card-body">
              <form class="row" method="POST" @submit.prevent="submitPrediction">
                <input type="hidden" :value="getFixtureId(fixture)" name="fixtureId"/>

                <!-- Row flags & team names -->
                <div class="col-6 mb-3">
                  {{ (fixture.homeTeamName.length > 0) ? getTeam(fixture.homeTeamName).code : '?' }}<br>
                  <img :src="getTeamFlag(fixture.homeTeamName)" style="width: 50px;"/>
                </div>
                <div class="col-6 mb-3">
                  {{ (fixture.awayTeamName.length > 0) ? getTeam(fixture.awayTeamName).code : '?' }}<br>
                  <img :src="getTeamFlag(fixture.awayTeamName)" style="width: 50px;"/>
                </div>

                <!-- Row predictions -->
                <div class="col-6">
                  <img src="/assets/img/icon-bet-black.svg" class="prediction-icon icon-black" alt="Prediction icon"/>
                  <img src="/assets/img/icon-bet-white.svg" class="prediction-icon icon-white" alt="Prediction icon"/>
                  <span class="prediction-home">{{ pronostics[getFixtureId(fixture)] !== undefined ? pronostics[getFixtureId(fixture)].prono1 : '?' }}</span>
                  <input type="text" placeholder="?" name="predictionHome" class="col-9" :value="pronostics[getFixtureId(fixture)] !== undefined ? pronostics[getFixtureId(fixture)].prono1 : '?'"/>
                </div>
                <div class="col-6">
                  <span class="prediction-away">{{ pronostics[getFixtureId(fixture)] !== undefined ? pronostics[getFixtureId(fixture)].prono2 : '?' }}</span>
                  <input type="text" placeholder="?" name="predictionAway" class="col-9" :value="pronostics[getFixtureId(fixture)] !== undefined ? pronostics[getFixtureId(fixture)].prono2 : '?'"/>
                </div>

                <!-- Row match results -->
                <div class="col-6" v-show="fixture.result.goalsHomeTeam !== null && fixture.result.goalsAwayTeam !== null">
                  <img src="/assets/img/icon-result-black.svg" class="ball-icon icon-black" alt="Ball icon"/>
                  <img src="/assets/img/icon-result-white.svg" class="ball-icon icon-white" alt="Ball icon"/>
                  <span class="result-home">{{ fixture.result.goalsHomeTeam }}</span>
                </div>
                <div class="col-6" v-show="fixture.result.goalsHomeTeam !== null && fixture.result.goalsAwayTeam !== null">
                  <span class="result-away">{{ fixture.result.goalsAwayTeam }}</span>
                </div>
                <button class="btn btn-sm btn-dark" role="submit">OK</button>
              </form>
            </div>
          </div>
          <div class="post-card" :data-fixture-id="getFixtureId(fixture)">
            <div class="text-center match-finished" v-show="fixture.status === 'FINISHED'">
              {{ pronostics[getFixtureId(fixture)] ? (pronostics[getFixtureId(fixture)].gain == 0 ? pronostics[getFixtureId(fixture)].gain : '+' + pronostics[getFixtureId(fixture)].gain ) : '' }}
            </div>
            <div class="text-center match-in-play" v-show="fixture.status === 'IN_PLAY'">En cours ...</div>
            <div class="remaining-time text-center" :data-fixture-id="getFixtureId(fixture)" v-show="fixture.status === 'TIMED'">{{ countdownsString[getFixtureId(fixture)] }}</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</div>