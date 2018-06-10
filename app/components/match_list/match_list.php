<div id="cmp-match-list" v-show="readyToShow">
    <div class="welcome-match-list panel-light">
        <h2>Liste des matchs</h2>
        <div class="row">
            <template v-for="fixture in fixtures">
                <div class="col-12" v-show="isNewDate(fixture) && fixture.homeTeamName.length > 0">
                    <h5>
                        <span>{{ getReadableDate(fixture) }}</span>
                    </h5>
                    <hr>
                </div>
                <div class="col-3" v-show="fixture.homeTeamName.length > 0">
                    <div class="card" data-container="body" data-toggle="popover" data-trigger="hover" data-placement="top" :data-title="getReadableDateTime(fixture)" :data-content="fixture.homeTeamName + ' vs. '+ fixture.awayTeamName">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-6">
                                    <img :src="getTeamFlag(fixture.homeTeamName)" style="width: 50px;"/><br>
                                    <span class="goals" v-show="fixture.result.goalsHomeTeam !== null && fixture.result.goalsAwayTeam !== null">
                                        {{ fixture.result.goalsHomeTeam }}
                                    </span>
                                </div>
                                <div class="col-6">
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
