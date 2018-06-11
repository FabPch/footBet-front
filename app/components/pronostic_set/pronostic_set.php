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
          <div class="card">
            <div class="card card-hover"></div>
            <div class="card-group-hover rounded-circle"></div>
            <div class="card-group">
                <img :src="'http://placeholder.pics/svg/40/DEDEDE/DEDEDE/A'" class="rounded-circle">
            </div>
            <div class="card-body">
              <div class="row">
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
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</div>