<div class="jumbotron panel-dark" id="cmp-welcome" v-show="mounted">
  <h1>
      {{title}}
  </h1>
  <p class="lead">{{subtitle}}</p>
  <hr class="my-4">
  <div v-html="description"></div>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="/group" role="button">Créer mon groupe</a>
  </p>
</div>  
