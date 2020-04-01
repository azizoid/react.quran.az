<!DOCTYPE html>
<html lang="az">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="stylesheet" href="/css/app.css" />
  </head>

  <body>
    <!-- Fixed navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light " style="background-color: #e3f2fd;">
      <div class="container ">
        <div class="d-flex justify-content-between">
          <a href="/" class="navbar-brand d-flex align-items-center text-muted">Quran.az</a>
        </div>

        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">

            <li class="nav-item">
              <a href="http://azerislam.com/index.php?lngs=aze&cats=2" class="nav-link" target="_blank">Yazılar</a>
            </li>
            <li class="nav-item">
              <a href="https://www.nam.az" class="nav-link" target="_blank">Nam.az <span class="badge badge-danger">yeni</span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Begin page content -->
    <div class="clearfix" id="ornament">&nbsp;</div>

    <div class="container"><div class="row">

      <article class="col-sm-7"><br/>@yield('content')</article>

      <sidebar class="col-sm-12 col-md-4"><br/>@include('sidebar')</sidebar>
      
    </div></div>

    <div class="clearfix"><br/><br/><br/></div>
    <footer class="footer">
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item active">&copy; 2003-<?=date('Y');?></li>
          <li class="breadcrumb-item"><a href="https://www.quran.az">Quran.az</a></li>
          <li class="breadcrumb-item"><a href="https://www.nam.az">Nam.az</a></li>
        </ol>
      </nav>
    </footer>

    <script src="{{ asset('js/app.js') }}" defer></script>
  </body>
</html>
