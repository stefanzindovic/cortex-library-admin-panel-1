
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Registruj se</title>
    <link rel="icon" href="{{asset('imgs/Intelectologo.svg')}}" type="image/svg+xml" sizes="32x32">

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700">
    <link rel="stylesheet" href="{{asset('userside/css/stylecustom.css')}}">
    <link rel="stylesheet" href="{{asset('assets/vendor/nucleo/css/nucleo.css')}}">
    <link rel="stylesheet" href="{{asset('assets/vendor/@fortawesome/fontawesome-free/css/all.min.css')}}">
</head>


<body class="bg-white">

<div class="main-content">
    <!-- Header -->
    <div class="header py-7 py-lg-8 pt-lg-6">
        <div class="separator separator-bottom separator-skew zindex-100">
            <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <polygon class="fill-white" points="2560 0 2560 100 0 100"></polygon>
            </svg>
        </div>
    </div>
    <!-- Page content -->
    <div class="container mt--9 pb-5 text-gray">
        <div class="row d-flex justify-content-center">
            <div class="col-lg-5 col-md-7">
                <div class="card bg-secondary border border-soft mb-0">
                    <div class="card-body px-lg-5 py-lg-5">
                        <div class="pb-5">
                            <div class="d-flex justify-content-center">
                                <div class="w-25" id="icon-container"></div>
                            </div>
                            <h2 class="text-center">Biblioteka</h2>
                        </div>
                        <form method="POST" action="{{ route('register') }}">
                            @csrf
                            <div class="form-group">
                                <div class="input-group input-group-merge input-group-alternative mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="ni ni-hat-3"></i></span>
                                    </div>
                                    <input required name="name" class="form-control" placeholder="Ime i Prezime" type="text">
                                </div>
                                @error('name')
                                <div class="mb-2">
                                    <small class="text-danger font-weight-700">{{$message}}</small>
                                </div>
                                @enderror
                            </div>
                            <div class="form-group">
                                <div class="input-group input-group-merge input-group-alternative mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="ni ni-hat-3"></i></span>
                                    </div>
                                    <input required name="username" class="form-control" placeholder="Korisničko ime" id="username" type="text">
                                </div>
                                @error('username')
                                <div class="mb-2">
                                    <small class="text-danger font-weight-700">{{$message}}</small>
                                </div>
                                @enderror
                            </div>
                            <div class="form-group">
                                <div class="input-group input-group-merge input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                                    </div>
                                    <input required name="email" class="form-control" placeholder="Email" type="email">
                                </div>
                                @error('email')
                                <div class="mb-2">
                                    <small class="text-danger font-weight-700">{{$message}}</small>
                                </div>
                                @enderror
                            </div>
                            <div class="form-group">
                                <div class="input-group input-group-merge input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                    </div>
                                    <input required name="password" id="password" class="form-control" placeholder="Šifra" type="password" onkeyup="checkPasswordMatchRegister()">
                                </div>
                                @error('password')
                                <div class="mb-2">
                                    <small class="text-danger font-weight-700">{{$message}}</small>
                                </div>
                                @enderror

                            </div>
                            <div class="form-group">
                                <div class="input-group input-group-merge input-group-alternative">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                                    </div>
                                    <input required name="password_confirmation" id="password_confirm" class="form-control" placeholder="Ponovi šifru" type="password" onkeyup="checkPasswordMatchRegister()">
                                </div>
                            </div>
                            <div class="mb-2">
                                <small class="text-danger font-weight-700" id="passwordMessage"></small>
                            </div>
                            <div class="text-center">
                                <button type="submit" id="submitDugme" class="btn btn-premium my-4">Registruj se</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row mt-3">
                   <div class="col-md-12">
                       <div class="text-center">
                           <a href="{{route('login')}}" class="text-gray"><small>Prijavi se</small></a>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="{{asset('dashboardfiles/assets/js/jquery.min.js')}}"></script>
<script src="{{asset('assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js')}}"></script>
<!-- Argon JS -->
<script src="{{asset('assets/js/dashboard.js')}}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.4/lottie.min.js"></script>
<script>
    var animation = bodymovin.loadAnimation({
        // animationData: { /* ... */ },
        container: document.getElementById('icon-container'), // required
        path: "{{asset('userside/img/online.json')}}", // required
        renderer: 'svg', // required
        loop: false, // optional
        autoplay: true, // optional
        name: "Icon", // optional
    });
</script>
</body>

</html>
