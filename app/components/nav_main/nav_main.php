<!-- d-xs-none d-sm-none -->
<div id="cmp-nav-main" class="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 panel-darkest main-nav-panel">
  <h1>
    MOTHER
    <span class="red">RUSSIA</span>
  </h1>
  <ul class="nav flex-column">
    <li class="nav-item" v-for="menuItem in menuItems" v-show="menuItem.requiredAuth === userSignedIn || menuItem.requiredAuth === null">
      <a class="nav-link" :href="menuItem.link" v-if="menuItem.link !== '/sign_out'">{{ menuItem.label }}</a>
      <a class="nav-link" :href="menuItem.link" v-if="menuItem.link === '/sign_out'" v-on:click="submitSignout">{{ menuItem.label }}</a>
    </li>
  </ul>
</div>
<div id="alert-signedout-ok" class="alert alert-success hide" role="alert">
  Déconnexion effectuée avec succès !
</div>
