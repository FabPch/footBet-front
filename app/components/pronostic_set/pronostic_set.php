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
          <div class="card" :data-fixture-id="getFixtureId(fixture)">
            <div class="card card-hover" v-on:click="goEdit" :data-fixture-id="getFixtureId(fixture)"></div>
            <div class="card-group-hover rounded-circle" v-on:click="goEdit" :data-fixture-id="getFixtureId(fixture)"></div>
            <div class="card-group rounded-circle text-center">
                <span>{{ getTeamGroup(fixture.homeTeamName)===getTeamGroup(fixture.awayTeamName) ? getTeamGroup(fixture.homeTeamName) : getTeamGroup(fixture.homeTeamName) + ' | ' + getTeamGroup(fixture.awayTeamName) }}</span>
            </div>
            <div class="card-body">
              <form class="row" method="POST">
                <input type="hidden" :value="getFixtureId(fixture)" name="fixtureId"/>
                <div class="col-6">
                  {{ getTeam(fixture.homeTeamName).code }}<br>
                  <img :src="getTeamFlag(fixture.homeTeamName)" style="width: 50px;"/><br>
                  <span class="goals" v-show="fixture.result.goalsHomeTeam !== null && fixture.result.goalsAwayTeam !== null">
                  {{ fixture.result.goalsHomeTeam }}
                  </span>
                </div>
                <div class="col-6">
                  {{ getTeam(fixture.awayTeamName).code }}<br>
                  <img :src="getTeamFlag(fixture.awayTeamName)" style="width: 50px;"/><br>
                  <span class="goals" v-show="fixture.result.goalsHomeTeam !== null && fixture.result.goalsAwayTeam !== null">
                  {{ fixture.result.goalsAwayTeam }}
                  </span>
                </div>
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