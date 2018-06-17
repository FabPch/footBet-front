<div class="loader"></div>

<div class="row full-height">
  <?php new IncComponent("nav_main"); ?>
  <div class="col-sm-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 main-container">
    <div class="container">
      <div class="panel-light">
        <h1>
          Mon profil
        </h1>

        <div class="row">

          <div class="card col-xs-22 col-sm-12 col-md-12 col-lg-4 col-xl-4">
            <?php new IncComponent("my_account"); ?>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
            <?php new IncComponent("ranking"); ?>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>