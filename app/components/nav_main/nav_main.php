<div id="cmp-nav-main" class="col-3 panel-darkest main-nav-panel">
  <h1>
    MOTHER
    <span class="red">RUSSIA</span>
  </h1>
  <ul class="nav flex-column">
    <li class="nav-item" v-for="menuItem in menuItems">
      <a class="nav-link" :href="menuItem.link">{{ menuItem.label }}</a>
    </li>
  </ul>
</div>