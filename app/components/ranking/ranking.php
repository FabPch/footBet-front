<table class="table" id="cmp-ranking">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">&nbsp;</th>
      <th scope="col">Nom</th>
      <th scope="col">Points</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(gambler, iGambler) in gamblers">
      <th scope="row" class="rank" v-bind:class="{'first-place': (gambler.rank===1), 'second-place': (gambler.rank===2), 'third-place': (gambler.rank===3)}">{{ gambler.rank }}</th>
      <td class="text-center"><img :src="srcProfilePic(gambler.login)" :alt="'Image de profil de ' + gambler.name" class="rank-profile-pic"/></td>
      <td>{{ gambler.name }}</td>
      <td class="text-center">{{ gambler.gain }}</td>
    </tr>
  </tbody>
</table>