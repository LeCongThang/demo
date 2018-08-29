@extends('frontend.layout.master')
@section('title') {{$expertise['title']}}  @endsection
@section('url'){{url('expertise')}}/{{$expertise['id']}}/{{str_slug($expertise['title'])}} @endsection
@section('keywords'){{$expertise['title']}}@endsection
@section('image'){{asset('images/expertise')}}/{{$expertise['image']}}@endsection
@section('css')
    <link href="{{asset('css/frontend')}}/slick-theme.css" rel="stylesheet">
    <link href="{{asset('css/frontend')}}/slick.css" rel="stylesheet">
    <link href="{{asset('')}}/vendor/fancybox/jquery.fancybox.min.css" rel="stylesheet">
    <link href="{{asset('css/frontend')}}/library.css" rel="stylesheet">
    <link href="{{asset('css/frontend')}}/kim.css" rel="stylesheet">

@endsection
@section('content')
    <section class=" wow animated fadeIn" data-delay="6s" data-wow-duration="5s">
        <article class="news-detail-page" style="margin-top:0">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-12 page-expertise-detail">
                        @if($expertise['is_show'])
                            <div class="expertise-detail ed-txt-news">
                                <img src="{{asset('images/expertise')}}/{{$expertise['image']}}" class="img-responsive">
                                {{--<h2>{{$expertise['title']}}</h2>--}}
                                {{--{!! $expertise['description'] !!}--}}
                            </div>
                        @endif
                        
                    </div>
                </div>
            </div>
			<div class="container" >
                <div class="row">
			      <div class="col-sm-12">
                   <div class="ed-txt-news" style="padding:20px 6px 0;">
                       <h2>{{$expertise['title']}}</h2>
                       {!! $expertise['description'] !!}
                   </div>
                </div>
			 </div>
           </div>
        </article>
        @if(count($project_rela)!=0)
        <article class="dichvu-lienquan" style="margin-top:-20px;">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        {{--<div class="title-dv">
                            <h3>{{trans('frontend.related_project')}}</h3>
                        </div>--}}
                        <section class="regular1 slider">
                            @foreach($project_rela as $item)
                            <div class="box-news">
                                <a href="{{url('project')}}/{{$item['id']}}/{{str_slug($item['title'])}}">
                                    <img src="{{asset('images/project')}}/{{$item['image']}}" class="img-responsive" alt="{{$item['title']}}"></a>
                                {{--<h5>{{\Carbon\Carbon::parse($item['date'])->format('d/m/Y')}}</h5>--}}
                                <h2>{{$item['title']}}</h2>
                            </div>
                            @endforeach
                        </section>
                    </div>
                </div>
            </div>

        </article>
        @endif
    </section>

@endsection
@section('js')
    <script src="{{asset('js/frontend')}}/slick.min.js"></script>
    <script src="{{asset('')}}/vendor/fancybox/jquery.fancybox.min.js"></script>
    <script src="{{asset('js/frontend')}}/custom_slick.js"></script>
@endsection
