<div class="jumbotron panel-dark" id="cmp-form-signup" v-show="mounted">
  <h1>
    {{title}}
  </h1>
  <form>
      <div class="form-group row">
          <label for="inputPseudo" class="col-sm-2 col-form-label">Pseudo</label>
          <div class="col-sm-10">
              <input type="text" v-on:blur="validPseudo" class="form-control" id="inputPseudo" placeholder="ex: ayayay" v-model="pseudo">
          </div>
          <div class="valid-feedback goodPseudo">
              Looks good!
          </div>
          <div class="invalid-feedback errorPseudo">
              Please choose a username.
          </div>
      </div>
    <div class="form-group row">
      <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
            <input type="email" v-on:blur="validEmail" class="form-control" id="inputEmail" placeholder="ex: charlesEdouardRemise@riche.com" v-model="email">
        </div>
        <div class="valid-feedback goodEmail">
            Looks good!
        </div>
        <div class="invalid-feedback errorEmail">
            Please choose a username.
        </div>
    </div>
    <div class="form-group row">
      <label for="inputPassword" class="col-sm-2 col-form-label">Mot de passe</label>
      <div class="col-sm-10">
        <input type="password" v-on:blur="validPassword" class="form-control" id="inputPassword" placeholder="Mot de passe" v-model="password">
      </div>
        <div class="valid-feedback goodPass">
            Looks good!
        </div>
        <div class="invalid-feedback errorPass">
            Please choose a username.
        </div>
    </div>

      <div class="form-group row">
          <label for="inputConfirmPassword" class="col-sm-2 col-form-label">Confirmation du mot de passe</label>
          <div class="col-sm-10">
              <input type="password" v-on:blur="validPasswords" class="form-control" id="inputConfirmPassword" placeholder="Confirmation du mot de passe" v-model="confirmPassword">
          </div>
      </div>
      <div class="valid-feedback goodConfPass">
          Looks good!
      </div>
      <div class="invalid-feedback errorConfPass">
          Please choose a username.
      </div>
      <div class="form-group row">
          <div class="col-sm-2"></div>
            <div class="col-sm-10">
              Vous avez deja un compte ?
              <a href="#" v-on:click="clickedLinkSignIn">Connectez-vous</a>
            </div>
          </div>
      </div>

    <div class="form-group row">
      <div class="col text-center">
        <button type="submit" class="btn btn-primary" v-on:click="submitSignup">Inscription</button>
      </div>
    </div>

  </form>
</div>