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
      <th scope="row">{{ iGambler + 1 }}</th>
      <td><img :src="srcProfilePic(gambler.login)" :alt="'Image de profil de ' + gambler.name" class="rank-profile-pic"/></td>
      <td>{{ gambler.name }}</td>
      <td>{{ gambler.gain }}</td>
    </tr>
  </tbody>
</table>