<!DOCTYPE html>
<html lang="az">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Quran.az - Öz Kitabını Oxu</title>
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
    <link rel="icon" type="image/x-icon" href="/img/kuran-logo.svg" />

    <meta name="description" content="Quran.az - Öz Kitabını Oxu"/>
    <meta property="og:type" content="article" />
    <meta property="og:url" content="{{ URL::current() }}" />
    <meta property="og:image" content="https://quran.az/img/kuran.jpg" />
    <meta property="og:description" content="Quran.az - Öz Kitabını Oxu"/>
    <meta property="og:title" content="Quran.az - Öz Kitabını Oxu"/>
  </head>

  <body>
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

      <article class="col-sm-7"><br/><div id="index"><div class="clearfix">

        <nav aria-label="breadcrumb">
          <ol class="breadcrumb justify-content-center">
            <li class="breadcrumb-item active">Oxu:</li>
            <li class="breadcrumb-item "><a href="/36">Ya-sin surəsi</a></li>
            <li class="breadcrumb-item "><a href="/55">Ər-Rəhman surəsi</a></li>
            <li class="breadcrumb-item "><a href="/67">Əl-Mülk surəsi</a></li>
            <li class="breadcrumb-item "><a href="/2/255">Ayətul-Kürsi</a></li>
          </ol>
        </nav>
      
      </div>
      
      <div class="clearfix">
      
        <h5 class="alert alert-success text-right">Axtarışınızın <strong>uğurlu</strong> olması üçün aşağıdakı <strong>qaydalara</strong> riayət edin</h5>
      
        <table class="" cellpadding="10">
          <tr>
            <td></td>
            <td>Saytdan istifadə qaydaları: <code>quran.az/96/1</code></td>
          </tr>
          <tr>
            <td class="text-right align-top">Hərf səhvləri: </td>
            <td>Axtarış zamanı etdiyiniz qrammatik səhvlər sözlərin tapılmamasına səbəb ola bilər: <br/>Məsələn: <code>mekke</code> əvəzinə <code>Məkkə</code> sözünü axtarın</td>
          </tr>
          <tr>
            <td class="text-right align-top">Fərqli söz və kəlmələr:</td>
            <td>Axtardığınız fikir tərcümədə olmaya bilər: <br/>Əlbəttə ki <code>namazı necə qılmaq lazımdır</code> cümləsi tərcümədə rast gəlinmir;</td>
          </tr>
          <tr>
            <td>Fərqli tərcümələr:</td>
            <td>Müəlliflərdən qaynaqlanaraq tərcümələrdəki sözlər və fikirlər dəyişik ola bilər;</td>
          </tr>
        </table>
      
      </div></div></article>

      <sidebar class="col-sm-12 col-md-4 d-none d-md-block"><br/><div id="sidebar"></div></sidebar>
      
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

    <script src="{{ mix('js/app.js') }}"></script>
    <script src="{{ mix('js/manifest.js') }}"></script>
    <script src="{{ mix('js/vendor.js') }}"></script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-70305066-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-70305066-1');
    </script>
  </body>
</html>
