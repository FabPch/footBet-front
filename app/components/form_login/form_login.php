<div class="jumbotron panel-dark" id="cmp-form-login" v-show="mounted">
  <h1>
    {{title}}
  </h1>
  <form>
    <div class="form-group row">
      <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="email" class="form-control" id="inputEmail" placeholder="ex: charlesEdouardRemise@riche.com" v-model="email">
      </div>
    </div>
    <div class="form-group row">
      <label for="inputPassword" class="col-sm-2 col-form-label">Mot de passe</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword" placeholder="Mot de passe" v-model="password">
      </div>
    </div>
      <div class="form-group row">
          <div class="col-sm-2"></div>
          <div class="col-sm-10">
              <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="gridCheck1">
                  <label class="form-check-label" for="gridCheck1">
                      Se souvenir de moi
                  </label>
              </div>
          </div>
      </div>

      <div class="form-group row">
          <div class="col text-right">
              Vous n'avez pas encore de compte ?
              <a href="#" v-on:click="clickedLinkSignUp">Inscrivez-vous</a>
          </div>
      </div>

    <div class="form-group row">
      <div class="col text-right">
        <button type="submit" class="btn btn-primary" v-on:click="submitLogin">Se connecter</button>
      </div>
    </div>

  </form>
</div>