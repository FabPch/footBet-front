<div class="jumbotron panel-dark" id="cmp-form-signup" v-show="mounted">
  <h1>
    {{title}}
  </h1>
  <form method="post" @submit.prevent="submitSignup">
    <div class="form-group row">
        <div class="alert alert-danger col-sm-12" role="alert" v-show="signUpFailed">
            Une erreur est surevenue dans la création de votre espace client.
        </div>
    </div>

      <div class="form-group row">
          <label for="inputPseudo" class="col-sm-2 col-form-label">Nom d'utilisateur</label>
          <div class="col-sm-10">
              <input type="text" v-on:blur="validPseudo" class="form-control" v-bind:class="{ 'is-invalid': (pseudoValidated === false || signUpFailed === true), 'is-valid': (pseudoValidated === true) }" id="inputPseudo" placeholder="Votre nom d'utilisateur" v-model="pseudo">
              <small id="pseudoHelpBlock" class="form-text text-muted">
                Nom qui sera affiché aux autres joueurs
              </small>
              <div class="invalid-feedback" v-show="pseudoValidated === false">
                  Le nom d'utilisateur doit être composé de lettres et chiffres seulement
              </div>
          </div>
      </div>
    <div class="form-group row">
      <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
            <input type="email" v-on:blur="validEmail" class="form-control" v-bind:class="{ 'is-invalid': (emailValidated === false || signUpFailed === true), 'is-valid': (emailValidated === true) }" id="inputEmail" placeholder="Votre email" v-model="email">
            <div class="invalid-feedback" v-show="emailValidated === false">
                L'email n'est pas valide.
            </div>
        </div>
    </div>
    <div class="form-group row">
      <label for="inputPassword" class="col-sm-2 col-form-label">Mot de passe</label>
      <div class="col-sm-10">
        <input type="password" v-on:blur="validPassword" class="form-control" v-bind:class="{ 'is-invalid': (passwordValidated === false || signUpFailed === true), 'is-valid': (passwordValidated === true) }" id="inputPassword" placeholder="Mot de passe" v-model="password">
        <div class="invalid-feedback" v-show="passwordValidated === false">
            Le mot de passe doit faire au moins 6 caractères de long.
        </div>
      </div>
    </div>

    <div class="form-group row">
      <label for="inputConfirmPassword" class="col-sm-2 col-form-label">Confirmation du mot de passe</label>
      <div class="col-sm-10">
          <input type="password" v-on:blur="validPasswords" class="form-control" v-bind:class="{ 'is-invalid': (confirmPasswordValidated === false || signUpFailed === true), 'is-valid': (confirmPasswordValidated === true) }" id="inputConfirmPassword" placeholder="Confirmation du mot de passe" v-model="confirmPassword">
      </div>
      <div class="invalid-feedback" v-show="confirmPasswordValidated === false">
          Les 2 mots de passes ne correspondent pas
      </div>
    </div>
    <div class="form-group row">
    <div class="col-sm-2"></div>
    <div class="col-sm-10">
      Vous avez deja un compte ?
      <a href="/sign_in">Connectez-vous</a>
    </div>
    </div>

    <div class="form-group row">
      <div class="col text-center">
        <button role="submit" class="btn btn-primary">Inscription</button>
      </div>
    </div>

  </form>
</div>
