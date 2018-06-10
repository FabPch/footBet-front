<div id="cmp-welcome" v-show="readyToShow">
    <div class="text-center">
        <img src="/assets/img/FIFA_World_Cup_2018_Logo.png" alt="Logo Coupe du monde de Football 2018 en Russie" style="width: 200px; margin: 74px;" />

        <h1><?= WEB_SUBTITLE ?></h1>

        <div v-html="description"></div>

        <a class="col-3 btn btn-secondary btn-lg" href="/group" role="button">Créer mon groupe</a>&nbsp;&nbsp;
        <a class="col-3 btn btn-primary btn-lg" href="/sign_in" role="button">Me connecter</a>
    </div>
</div>

