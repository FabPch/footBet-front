<div class="jumbotron" id="cmp-welcome" style="margin-top:50px;" v-show="mounted">
  <h1 class="display-4">
      {{title}}
  </h1>
  <p class="lead">{{subtitle}}</p>
  <hr class="my-4">
  <div v-html="description"></div>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="/group" role="button">Créer mon groupe</a>
  </p>
</div>  
