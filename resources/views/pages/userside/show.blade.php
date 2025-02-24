@extends('layouts.user')

@section('title')
    {{$book->title}}
@endsection



@section('main')
    <main id="main" style="padding-top: 3%; !important;">

        <section id="books" class="values">
            <div class="container-xxl">
                <div class="container mb-5">
                    <div class="card pt-5">
                        <div class="row g-0">
                            <div id="border" class="col-md-7 border-end d-flex flex-column justify-content-center">
                                <div>
                                    <div class="main_image">
                                        <img src="@if ($book->picture === 'book-placeholder.png') {{ asset('imgs/book-placeholder.png') }} @else {{ asset('storage/uploads/books/' . $book->picture) }} @endif" id="main_product_image" width="280" height="100%"></div>
                                    <div class="thumbnail_images">
                                        <ul id="thumbnail" class="overflow-auto ps-0">
                                            @foreach ($book->gallery as $image)
                                                <li><img class="thumbnail_image" onclick="changeImage(this)" src="{{ asset('storage/uploads/books/' . $image->picture) }}"></li>
                                            @endforeach
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="p-3 right-side" style="padding-top: 0 !important;">
                                    <div class="d-flex justify-content-between align-items-center"><h1 class="fw-bold">{{$book->title}}</h1></div>
                                    <h4 class="text-gray">
                                        @foreach ($book->authors as $author)
                                            {{ $author->full_name }}@if (!$loop->last)
                                                ,
                                            @endif
                                        @endforeach
                                    </h4>
                                    <div class="mt-2 pr-3 content"><p>{!! $book->description !!}</p>
                                    </div>

                                    <div class="d-grid gap-2 pt-5">
                                        @if($book->calcNumberOfAvailableCopies($book->id) < 1)
                                            <button disabled class="btn btn-premium">Trenutno nedostupno</button>
                                        @else
                                            <a href="{{route('rezervacija.knjige', $book->id)}}" class="btn btn-premium">Rezerviši</a>
                                        @endif
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>

    </main>
@endsection

@section('scripts')
    <script>
        if ($(window).width() < 768){
            $("#border").removeClass('border-end');
        } else {
            $("#border").addClass('border-end');
        }

        $(window).resize(function() {
            if ($(window).width() < 768){
                $("#border").removeClass('border-end');
            } else {
                $("#border").addClass('border-end');
            }
        })

        function changeImage(element) {

            var main_prodcut_image = document.getElementById('main_product_image');
            main_prodcut_image.src = element.src;


        }
    </script>
@endsection

