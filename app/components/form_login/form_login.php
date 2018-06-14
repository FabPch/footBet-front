<div class="jumbotron panel-dark" id="cmp-form-login" v-show="mounted">
  <h1>
    {{title}}
  </h1>
  <form method="post" @submit.prevent="submitLogin">

    <div class="form-group row">
        <div class="alert alert-danger col-sm-12" role="alert" v-show="loginFailed">
          L'email / mot de passe ne corespondent pas ...
        </div>
    </div>
    <div class="form-group row">
      <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="email" v-on:blur="validEmail" class="form-control" v-bind:class="{ 'is-invalid': (emailValidated === false || loginFailed === true), 'is-valid': (emailValidated === true) }" id="inputEmail" placeholder="Votre email" v-model="email">
        <div class="invalid-feedback" v-show="emailValidated === false">
          Veuillez saisir un email valide
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="inputPassword" class="col-sm-2 col-form-label">Mot de passe</label>
      <div class="col-sm-10">
        <input type="password" v-on:blur="validPassword" class="form-control" v-bind:class="{ 'is-invalid': (loginFailed === true), 'is-valid': (passwordValidated === true) }" id="inputPassword" placeholder="Votre mot de passe" v-model="password">
      </div>
    </div>
    <div class="form-group row" style="display:none;">
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
      <div class="col-sm-2"></div>
      <div class="col-sm-10">
        Vous n'avez pas encore de compte ?
        <a href="/sign_up">Inscrivez-vous</a>
      </div>
    </div>

    <div class="form-group row">
      <div class="col text-center">
        <button class="btn btn-primary" role="submit">Se connecter</button>
      </div>
    </div>

  </form>
</div>


<div class="modal" tabindex="-1" role="dialog" id="modal-register-ok">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <h3>Vous vous êtes bien inscrit !<br>Connectez-vous sans plus tarder...</h3>
        <div class="col-12">
            <img src="/assets/img/poutin-success.png" class="rounded w-100" alt="Success">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>
      </div>
    </div>
  </div>
</div>