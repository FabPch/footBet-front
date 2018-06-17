<div id="cmp-nav-main" class="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">

  <!-- d-xs-none d-sm-none -->
  <nav class="navbar navbar-dark bg-dark nav-mobile">
    <button class="navbar-toggler" type="button" v-on:click="toggleMenu">
      <span class="navbar-toggler-icon"></span>
      <span aria-hidden="true" class="close" style="display:none;">&times;</span>
    </button>
    <a class="navbar-brand float-right" href="#">
      Mother
      <span class="red">Russia</span>
    </a>
  </nav>

  <div class="d-none d-lg-block panel-darkest main-nav-panel">
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

</div>