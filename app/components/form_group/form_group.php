<div class="jumbotron panel-dark" id="cmp-form-group" v-show="mounted">
  <h1>
    {{title}}
  </h1>
  <form>
    <div class="form-group row">
      <label for="inputGroupName" class="col-sm-2 col-form-label">Nom du groupe</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="inputGroupName" placeholder="ex: L'équipe des bookmakers" v-model="groupName">
      </div>
    </div>
    <div class="alert alert-info" role="alert" v-show="!isConnected">
      Vous n'êtes pas authentifié...
      <a href="#" v-on:click="clickedLinkSignUp">Inscrivez-vous</a> ou
      <a href="#" v-on:click="clickedLinkSignIn">connectez-vous</a>
    </div>
    <div class="form-group row" v-show="modeSignUp || modeSignIn">
      <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="email" class="form-control" id="inputEmail" placeholder="Email" v-model="email">
      </div>
    </div>
    <div class="form-group row" v-show="modeSignUp || modeSignIn">
      <label for="inputPassword" class="col-sm-2 col-form-label">Mot de passe</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword" placeholder="Mot de passe" v-model="password">
      </div>
    </div>
    <div class="form-group row" v-show="modeSignUp">
      <label for="inputConfirmPassword" class="col-sm-2 col-form-label">Confirmation du mot de passe</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" id="inputConfirmPassword" placeholder="Confirmation du mot de passe" v-model="confirmPassword">
      </div>
    </div>
    <div class="form-group row" v-show="modeSignUp">
      <label for="inputNickname" class="col-sm-2 col-form-label">Votre surnom</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="inputNickname" placeholder="ex: The Jojo" aria-describedby="nicknameHelpBlock" v-model="nickname">
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