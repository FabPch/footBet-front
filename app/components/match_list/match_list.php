<div id="cmp-match-list" v-show="readyToShow">
    <div class="welcome-match-list panel-lightest">
        <p>Liste des matchs</p>
        <div class="row">
            <div class="col-3" v-for="fixture in fixtures" v-show="fixture.homeTeamName.length > 0">
                <div class="card" data-container="body" data-toggle="popover" data-trigger="hover" data-placement="top" :title="getReadableDate(fixture)" :data-content="fixture.homeTeamName + ' vs. '+ fixture.awayTeamName">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-6">
                                <img :src="getTeamFlag(fixture.homeTeamName)" style="width: 50px;"/>
                            </div>
                            <div class="col-6">
                                <img :src="getTeamFlag(fixture.awayTeamName)" style="width: 50px;"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
