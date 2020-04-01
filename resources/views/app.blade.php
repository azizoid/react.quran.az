<!DOCTYPE html>
<html lang="az">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="stylesheet" href="/css/app.css" />
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-WZ9GX3M');</script>
      <!-- End Google Tag Manager -->
  </head>

  <body>
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WZ9GX3M"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- Fixed navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a href="/" class="navbar-brand d-flex align-items-center text-muted">
        <img src="/img/kuran-logo.svg" width="30" height="30" class="d-inline-block align-top" alt="quran.az">&nbsp;
        Quran.az
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="http://azerislam.com/index.php?lngs=aze&cats=2" class="nav-link" target="_blank">Yazılar</a>
          </li>
          <li class="nav-item">
            <a href="https://www.nam.az" class="nav-link" target="_blank">Nam.az <span class="badge badge-danger">yeni</span></a>
          </li>
        </ul>
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
