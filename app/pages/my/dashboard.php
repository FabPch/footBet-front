<div class="loader"></div>

<div class="row full-height">
  <?php new IncComponent("nav_main"); ?>
  <div class="col-9 main-container">
    <div class="container">
      <div class="panel-light">
        <h1>
          Mon profil
        </h1>

        <div class="row">

          <div class="card col-4">
            <?php new IncComponent("my_account"); ?>
          </div>
          <div class="col-8">
            <?php new IncComponent("ranking"); ?>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>