<div class="card-body" id="cmp-my-account" v-show="mounted">
  <div>
    <img :src="profilePic" alt="image de profil" class="profile-pic float-left"/>
    <h5 class="card-title">Bonjour {{nickname}} !</h5>
  </div>
  <div>
    <p class="card-text" v-show="myRanking !== null">Félicitations vous êtes positionné en {{ myRanking }}<sup>e</sup> position !</p>
  </div>
</div>