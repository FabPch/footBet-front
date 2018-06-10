<div id="cmp-welcome">
    <div class="jumbotron panel-dark" v-show="mounted">
        <div class="text-center">
            <img src="/assets/img/FIFA_World_Cup_2018_Logo.png" alt="Logo Coupe du monde de Football 2018 en Russie" style="width: 20%; margin-bottom: 20px;" />

            <h1><?= WEB_SUBTITLE ?></h1>

            <div v-html="description"></div>

            <a class="btn btn-secondary btn-lg" href="/group" role="button">Créer mon groupe</a>
            <a class="btn btn-primary btn-lg" href="/sign_in" role="button">Me connecter</a>
        </div>
    </div>
    <div class="welcome-match-list">
        <h5 v-for="fixture in fixtures">
            <span v-show="fixture.homeTeamName.length > 0" class="badge"  data-container="body" data-toggle="popover" data-trigger="hover" data-placement="top" :data-title="getReadableDate(fixture)" :data-content="fixture.homeTeamName + ' vs. '+ fixture.awayTeamName">
                <img :src="getTeamFlag(fixture.homeTeamName)" style="width: 50px;"/>
                <br><br>
                <img :src="getTeamFlag(fixture.awayTeamName)" style="width: 50px;"/>
            </span>
        </h5>
    </div>
</div>

