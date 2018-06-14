<div class="jumbotron panel-dark" id="cmp-form-group" v-show="mounted">
  <h1>
    {{title}}
  </h1>
    <form method="post" @submit.prevent="{ modeSignUp : submitSignUpAndCreateGroup, modeSignIn : submitSignInAndCreateGroup">
    <div class="form-group row">
      <label for="inputGroupName" class="col-sm-2 col-form-label">Nom du groupe</label>
      <div class="col-sm-10">
          <input type="text" v-on:blur="validGroupName" class="form-control" v-bind:class="{ 'is-invalid': (groupValidated === false || signUpFailed === true), 'is-valid': (groupValidated === true) }" id="inputGroupName" placeholder="ex: L'équipe des bookmakers" v-model="groupName">
          <div class="invalid-feedback" v-show="groupValidated === false">
              Veuillez saisir un nom de groupe valide
          </div>
    </div>
    <div class="alert alert-info" role="alert" v-show="!isConnected">
      Vous n'êtes pas authentifié...
      <a href="#" v-on:click="clickedLinkSignUp">Inscrivez-vous</a> ou
      <a href="#" v-on:click="clickedLinkSignIn">connectez-vous</a>
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

    <div class="form-group row" v-show="modeSignUp">
      <label for="inputNickname" class="col-sm-2 col-form-label">Votre surnom</label>
      <div class="col-sm-10">
        <input type="text" v-on:blur="validNickname" class="form-control" v-bind:class="{ 'is-invalid': (nicknameValidated === false || signUpFailed === true), 'is-valid': (nicknameValidated === true) }" id="inputNickname" placeholder="ex: The Jojo" aria-describedby="nicknameHelpBlock" v-model="nickname">
        <div class="invalid-feedback" v-show="nicknameValidated === false">
            Veuillez saisir un nickname valide
        </div>
        <small id="nicknameHelpBlock" class="form-text text-muted">
        Ce surnom est unique et sera affiché de manière publique aux personnes de votre groupe.
        </small>
      </div>
    </div>
    <div class="form-group row">
      <div class="col text-right">
        <button type="submit" class="btn btn-primary" v-show="isConnected" v-on:click="submitCreateGroup">Créér le groupe</button>

        <button type="submit" class="btn btn-primary" v-show="modeSignUp" v-on:click="submitSignUpAndCreateGroup">Créér le groupe et m'inscrire</button>

        <button type="submit" class="btn btn-primary" v-show="modeSignIn" v-on:click="submitSignInAndCreateGroup">Créér le groupe et m'authentifier</button>
      </div>
    </div>
  </form>
</div>