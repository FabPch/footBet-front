<div class="panel-light" id="cmp-my-account" v-show="mounted">
  <h1>
    {{title}}
  </h1>

  <div class="row">

    <div class="card col-4" style="width: 18rem;">
      <div class="card-body">
        <div>
          <img :src="profilePic" alt="image de profil" class="profile-pic float-left"/>
          <h5 class="card-title">Bonjour {{nickname}} !</h5>
        </div>
        <div>
          <p class="card-text">Félicitations vous êtes positionné en X position !</p>
        </div>
      </div>
    </div>

    <div class="col-8">
        <?php new IncComponent("ranking"); ?>
    </div>
  </div>

</div>