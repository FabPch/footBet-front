<div id="cmp-pronostic-set" v-show="readyToShow">
  <div class="pronostic-set panel-light">
    <h2>Liste des pronostics par match</h2>
    <div class="row">
      <template v-for="fixture in fixtures">
        <div class="col-12" v-show="isNewDate(fixture) && fixture.homeTeamName.length > 0">
          <h5>
            <span>{{ getReadableDate(fixture) }}</span>
          </h5>
          <hr>
        </div>
        <div class="col-3" v-show="fixture.homeTeamName.length > 0">
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
                  {{ getTeam(fixture.homeTeamName).code }}<br>
                  <img :src="getTeamFlag(fixture.homeTeamName)" style="width: 50px;"/>
                </div>
                <div class="col-6 mb-3">
                  {{ getTeam(fixture.awayTeamName).code }}<br>
                  <img :src="getTeamFlag(fixture.awayTeamName)" style="width: 50px;"/>
                </div>

                <!-- Row predictions -->
                <div class="col-6">
                  <img src="/assets/img/icon-bet-black.svg" class="prediction-icon icon-black" alt="Prediction icon"/>
                  <img src="/assets/img/icon-bet-white.svg" class="prediction-icon icon-white" alt="Prediction icon"/>
                  <span class="prediction-home">?</span>
                  <input type="text" placeholder="?" name="predictionHome" class="col-9"/>
                </div>
                <div class="col-6">
                  <span class="prediction-away">?</span>
                  <input type="text" placeholder="?" name="predictionAway" class="col-9"/>
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
            <div class="remaining-time text-center" :data-fixture-id="getFixtureId(fixture)">{{ countdownsString[getFixtureId(fixture)] }}</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</div>