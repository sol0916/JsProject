$(document).ready(function () {
  // 링크 설정
  //  $(".reser_btn").attr({"href":"https://www.ddnayo.com/RsvSys/?id_hotel=2759","target":"_blank"})
  $('.reser_btn').attr({
    href: 'https://www.yapen.co.kr/external?ypIdx=22806',
    target: '_blank',
  });
  $('.insta_link').attr({
    href: 'https://www.instagram.com/explore/tags/풀빌라공간아마레',
    target: '_blank',
  });
  $('.blog_link').attr({
    href: 'https://search.naver.com/search.naver?where=post&sm=tab_pge&query=풀빌라공간아마레',
    target: '_blank',
  });
  $('.tel_link1').attr({ href: 'tel:010-5423-6592', target: '_parent' });
  $('.tel_link2').attr({ href: 'tel:010-9919-6592', target: '_parent' });

  //메인동영상 랜덤
  const random_video_set = function () {
    const top_vdo = document.querySelector('.top-vdo');
    let random_index;
    function setting_vdo() {
      random_index = Math.round(Math.random()) + 1;
      $('.top_vdo').find('iframe').removeClass('hide');
      $('.random' + random_index).addClass('hide');
    }
    $(window).on('load', function () {
      setting_vdo();
    });
  };
  if ($('.main-wrap').length > 0) {
    random_video_set();
  }

  //메인동영상 크기조절
  const main_vdo_size = function () {
    const vdo_con = $('.con1 .top-vdo');
    // if($(window).width() > 700){
    if (vdo_con.width() >= vdo_con.height() * 1.7853) {
      vdo_con.addClass('horizon');
      vdo_con.removeClass('vertical');
    } else {
      vdo_con.addClass('vertical');
      vdo_con.removeClass('horizon');
    }
    // }
  };

  //모바일 영상 위치조정
  function main_movie_position() {
    const main_movie = $('.main-wrap .vdo-slide');
    if ($(window).width() > 700) {
      main_movie.prependTo('.main-slide-wrap .swiper-wrapper');
    } else {
      main_movie.prependTo('.main-wrap .m-vdo-wrap');
    }
  }
  if ($('.main-wrap').length > 0) {
    main_movie_position();
  }

  $(window).on('resize load', function () {
    main_vdo_size();
  });

  if ($('.top-vdo-wrap').length > 0) {
    main_vdo_size();
  }

  //영상페이지 동영상 비율 맞춤
  const vdo_ui = function () {
    if ($('.movie-wrap').length > 0) {
      const vdo_width = $('.movie-wrap .vdo-wrap').width(),
        vdo_height = vdo_width * 0.563;
      $('.movie-wrap .con2 iframe').css({
        width: vdo_width,
        height: vdo_height,
      });
    }
  };
  vdo_ui();

  //푸터 메뉴
  const ft_menu_set = function () {
    const hd = $('.hd'),
      hd_menu = hd.find('.main-menu-wrap'),
      ft = $('.ft'),
      ft_menu = ft.find('.ft-menu-wrap');

    hd_menu.clone().appendTo(ft_menu);
  };
  ft_menu_set();

  //메뉴 이미지 변경
  const menu_img_change = function () {
    const container = $('.header-contents-wrap'),
      menu_wrap = container.find('.menu-wrap'),
      menu_list = menu_wrap.find('.main-list'),
      menu_img_wrap = container.find('.menu-img-list');
    let i = 0;
    menu_list.on('mouseover', function () {
      i = $(this).index();
      menu_img_wrap.find('li').removeClass('on');
      menu_img_wrap.find('li').eq(i).addClass('on');
    });
  };
  menu_img_change();

  // 영상 팝업
  const vdo_popup = function () {
    const pop_btn_wrap = $('.ft-vdo-wrap'),
      pop_btn = pop_btn_wrap.find('a'),
      pop_vdo_wrap = $('.vdo-popup-wrap'),
      close_btn = pop_vdo_wrap.find('.close-btn');

    const player = new Vimeo.Player($('.vdo-popup-wrap iframe'));

    pop_btn.on('click', function (e) {
      e.preventDefault();
      pop_vdo_wrap.addClass('visible');
      player.play();
    });
    close_btn.on('click', function () {
      pop_vdo_wrap.removeClass('visible');
      player.pause();
    });
  };
  vdo_popup();

  //해더 이미지 높이조절
  const header_img_height = function () {
    const container = $('.header-contents-wrap'),
      img_wrap = container.find('.menu-img-wrap');

    function calc_height() {
      const img = img_wrap.find('img');
      img_wrap.css('height', img.innerHeight());
    }
    calc_height();
    $(window).on('load', function () {
      calc_height();
    });
    $(window).on('resize', function () {
      calc_height();
    });
  };
  header_img_height();

  //해더 픽스
  const header_fixed_animate = function () {
    let duration;
    function calc_duration() {
      if ($(window).width() > 700) {
        duration = $('.con1').innerHeight();
      } else {
        duration = 80;
      }
    }
    calc_duration();
    $(window).on('resize', function () {
      calc_duration();
    });

    function fixed_trigger() {
      if ($(window).scrollTop() >= duration) {
        $('.hd').addClass('fixed');
      } else {
        $('.hd').removeClass('fixed');
      }
    }
    fixed_trigger();
    $(window).on('scroll', function () {
      fixed_trigger();
    });
  };
  header_fixed_animate();

  //해더 클릭 이벤트
  const header_click = function () {
    const hd = $('.hd'),
      menu_btn = hd.find('.menu-btn');
    let i = 0;
    menu_btn.on('click', function () {
      if (i == 0) {
        i++;
        hd.addClass('click');
      } else {
        i--;
        hd.removeClass('click');
      }
    });
  };
  header_click();

  //객실 프리뷰 높이조절
  const room_nav_height = function () {
    const container = $('.room-nav-section'),
      img_box = container.find('.img-box');
    function calc_height() {
      const img_list = img_box.find('li'),
        img = img_list.find('img');
      img_box.css('height', img.innerHeight());
    }
    calc_height();
    $(window).on('load', function () {
      room_nav_height();
    });
    $(window).on('resize', function () {
      room_nav_height();
    });
  };
  if ($('.room-nav-section').length > 0) {
    room_nav_height();
  }

  //객실페이지 하단 프리뷰 호버이벤트
  const room_nav_hover = function () {
    const container = $('.room-nav-section'),
      list_wrap = container.find('.list-wrap'),
      list = list_wrap.find('li'),
      btn = list.find('a'),
      left_img_wrap = container.find('.img-left'),
      left_img_box = left_img_wrap.find('.img-box'),
      left_img = left_img_box.find('li'),
      right_img_wrap = container.find('.img-right'),
      right_img_box = right_img_wrap.find('.img-box'),
      right_img = right_img_box.find('li');

    let i = 0;

    btn.on('mouseover', function () {
      i = $(this).parent('li').index();
      list.removeClass('on');
      $(this).parent('li').addClass('on');
      left_img.removeClass('on');
      left_img.eq(i).addClass('on');

      right_img.removeClass('on');
      right_img.eq(i).addClass('on');
    });
  };
  if ($('.room-nav-section').length > 0) {
    room_nav_hover();
  }

  //투어 모바일 위치조정
  const tour_position = function () {
    const container = $('.tour-wrap'),
      target_info = container.find('.left-info');

    function position_set() {
      target_info.each(function () {
        const img = $(this).find('.small-img');
        if ($(window).width() > 700) {
          img.appendTo($(this).find('.pc-img-box'));
        } else {
          img.appendTo($(this).find('.img-wrap'));
        }
      });
    }
    position_set();
    $(window).on('load', function () {
      position_set();
    });
    $(window).on('resize', function () {
      position_set();
    });
  };
  if ($('.tour-wrap').length > 0) {
    tour_position();
  }

  //scroll-obj
  const scroll_effect = function () {
    const scroll_obj = $('.scroll-obj');
    const main_tit = $('.con1 .tit-wrap');
    $(window)
      .on('scroll', function () {
        scroll_obj.each(function () {
          if (
            $(window).scrollTop() + $(window).height() >
            $(this).offset().top + 30
          ) {
            $(this).addClass('on');
          }
        });
        main_tit.addClass('on');
      })
      .scroll();

    $(window).on('load', function () {
      main_tit.addClass('on');
      scroll_obj.each(function () {
        if (
          $(window).scrollTop() + $(window).height() >
          $(this).offset().top + 30
        ) {
          $(this).addClass('on');
        }
      });
    });
  };
  scroll_effect();

  //swiper Gallery
  const basic_slide_ui = function () {
    const basicSwiper = new Swiper('.basic-slide-wrap', {
      effect: 'fade',
      speed: 500,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        prevEl: '.basic-slide-btn .prev-btn',
        nextEl: '.basic-slide-btn .next-btn',
      },
      on: {
        slideChangeTransitionEnd: function () {
          const current_txt = $('.basic-slide-wrap').find('.current');
          let realIndex = this.realIndex + 1;
          if (realIndex < 10) {
            current_txt.text('0' + realIndex);
          } else {
            current_txt.text(realIndex);
          }
        },
      },
    });
    const total_txt = $('.basic-slide-wrap').find('.total');
    const slide_lenght =
      $('.basic-slide-wrap').find('.swiper-slide').length - 2;
    if (slide_lenght < 10) {
      total_txt.text('0' + slide_lenght);
    } else {
      total_txt.text(slide_lenght);
    }
  };
  if ($('.basic-slide-wrap').length > 0) {
    basic_slide_ui();
  }

  const main_slide_ui = function () {
    const basicSwiper = new Swiper('.main-slide-wrap', {
      effect: 'fade',
      speed: 500,
      loop: true,
      // autoplay: {
      //     delay: 3000,
      //     disableOnInteraction: false
      // },
      navigation: {
        prevEl: '.basic-slide-btn .prev-btn',
        nextEl: '.basic-slide-btn .next-btn',
      },
      pagination: {
        el: '.swiper-pagination',
      },
      on: {
        slideChangeTransitionEnd: function () {
          const current_txt = $('.main-slide-wrap').find('.current');
          let realIndex = this.realIndex + 1;
          if (realIndex < 10) {
            current_txt.text('0' + realIndex);
          } else {
            current_txt.text(realIndex);
          }
        },
      },
    });
    const total_txt = $('.main-slide-wrap').find('.total');
    const slide_lenght = $('.main-slide-wrap').find('.swiper-slide').length - 2;
    if (slide_lenght < 10) {
      total_txt.text('0' + slide_lenght);
    } else {
      total_txt.text(slide_lenght);
    }
  };
  if ($('.main-slide-wrap').length > 0) {
    main_slide_ui();
  }

  //room_preview
  const room_preview_slide = function () {
    let room_name_var = [
      '1A',
      '1B',
      '2 PRIVATE',
      '3A',
      '3B',
      '4A',
      '4B',
      'AMARE',
    ];
    const room_preview_slide1 = new Swiper('.room-preview-slide1', {
      effect: 'fade',
      speed: 500,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        prevEl: '.control-btn-wrap .prev-btn',
        nextEl: '.control-btn-wrap .next-btn',
      },
      pagination: {
        el: '.swiper-pagination',
      },
      on: {
        slideChangeTransitionEnd: function () {
          const current_txt = $('.room-preview-section').find('.current'),
            room_nav = $('.room-preview-info-wrap').find('.center-tit span');

          let realIndex = this.realIndex + 1;
          if (realIndex < 10) {
            current_txt.text(realIndex);
          } else {
            current_txt.text(realIndex);
          }

          room_nav.text(room_name_var[realIndex - 1]);
        },
      },
    });
    const room_preview_slide2 = new Swiper('.room-preview-slide2', {
      effect: 'fade',
      speed: 500,
      loop: true,
    });
    const total_txt = $('.room-preview-section').find('.total');
    const slide_lenght =
      $('.room-preview-slide1').find('.swiper-slide').length - 2;
    if (slide_lenght < 10) {
      total_txt.text(slide_lenght);
    } else {
      total_txt.text(slide_lenght);
    }

    room_preview_slide1.controller.control = room_preview_slide2;
    room_preview_slide2.controller.control = room_preview_slide1;
  };
  if ($('.room-preview-section').length > 0) {
    room_preview_slide();
  }

  //special_preview
  const special_preview_slide = function () {
    const room_preview_slide1 = new Swiper('.special-preview-slide', {
      effect: 'fade',
      speed: 500,
      loop: true,
      //            autoplay: {
      //                delay: 3000,
      //                disableOnInteraction: false
      //            },
      autoplay: false,
      navigation: {
        prevEl: '.special-preview-section .slide-btn-wrap .prev',
        nextEl: '.special-preview-section .slide-btn-wrap .next',
      },
      pagination: {
        el: '.swiper-pagination',
      },
      on: {
        slideChangeTransitionEnd: function () {
          const info_txt_wrap = $('.special-preview-section').find(
              '.txt-list-wrap'
            ),
            // 스페셜 프리뷰 링크 입니다. 링크 순서에 따라 link_var 배열 수정해주시면 됩니다.
            link_var = [3, 2, 1, 4, 5, 6, 7, 8],
            info_txt = info_txt_wrap.find('li'),
            link = $('.special-preview-section').find('.link-btn');
          let realIndex = this.realIndex;
          info_txt.removeClass('on');
          info_txt.eq(realIndex).addClass('on');
          link.attr('href', 'sub3_special' + link_var[realIndex] + '.html');
        },
      },
    });
  };
  if ($('.special-preview-section').length > 0) {
    special_preview_slide();
  }

  //scrollMagic
  var controller = new ScrollMagic.Controller();

  //메인 스크롤 매직
  function main_scrollMagic() {
    function rooling_scroll() {
      var rolling_txt = TweenMax.to('.room-preview-section .svg-tit', 0.5, {
        rotation: 40,
      });
      var scene = new ScrollMagic.Scene({
        triggerElement: '.room-preview-section',
        triggerHook: 0.5,
        duration: $(window).height() * 3,
        offset: 0,
      })
        .setTween(rolling_txt)
        .addTo(controller);
    }
    rooling_scroll();
  }
  if ($('.main-wrap').length > 0) {
    main_scrollMagic();
  }

  //투어 스크롤 매직
  function tour_scrollMagic() {
    const container = $('.tour-wrap .info-section'),
      info_depth = container.find('.tour-info-depth');

    for (i = 1; i < info_depth.length + 1; i++) {
      function setting_magic() {
        var right_eff = TweenMax.to(
          '.tour-info-depth' + i + ' .right-info .small-img',
          0.5,
          {
            y: 0,
          }
        );
        var scene = new ScrollMagic.Scene({
          triggerElement: '.tour-info-depth' + i + ' .right-info',
          triggerHook: 0.5,
          duration: $(window).height() * 3,
          offset: 0,
        })
          .setTween(right_eff)
          .addTo(controller);

        var left_eff = TweenMax.to(
          '.tour-info-depth' + i + ' .left-info .big-img',
          0.5,
          {
            y: $('.left-info .big-img').innerHeight() / 3,
          }
        );
        var scene = new ScrollMagic.Scene({
          triggerElement: '.tour-info-depth' + i + ' .left-info',
          triggerHook: 0.5,
          duration: $(window).height() * 3,
          offset: 0,
        })
          .setTween(left_eff)
          .addTo(controller);
      }
      setting_magic();
    }
  }
  if ($('.tour-wrap').length > 0) {
    if ($(window).width() > 700) {
      tour_scrollMagic();
    }
  }

  //객실 스크롤 매직
  function room_scrollMagic() {
    function txt_animation() {
      var rolling_txt = TweenMax.to(
        '.room-wrap .intro-section .img-wrap .svg-tit',
        0.5,
        {
          rotation: 120,
        }
      );
      var scene = new ScrollMagic.Scene({
        triggerElement: '.intro-section',
        triggerHook: 1,
        duration: $(window).innerHeight() * 2,
        offset: 0,
      })
        .setTween(rolling_txt)
        .addTo(controller);

      var slide_txt = TweenMax.to(
        '.room-wrap .intro-section .img-wrap .tit',
        0.5,
        {
          x: 0,
        }
      );
      var scene = new ScrollMagic.Scene({
        triggerElement: '.intro-section',
        triggerHook: 0.5,
        duration: $(window).innerHeight() * 2,
        offset: 0,
      })
        .setTween(slide_txt)
        .addTo(controller);
    }
    txt_animation();

    function preview_img_animation() {
      var left_img = TweenMax.to(
        '.room-wrap .room-nav-section .img-wrap.img-left .img-box',
        0.5,
        {
          y: 0,
        }
      );
      var scene = new ScrollMagic.Scene({
        triggerElement: '.room-nav-section',
        triggerHook: 0.5,
        duration: $(window).innerHeight() * 2,
        offset: 0,
      })
        .setTween(left_img)
        .addTo(controller);

      var right_img = TweenMax.to(
        '.room-wrap .room-nav-section .img-wrap.img-right .img-box',
        0.5,
        {
          y: 0,
        }
      );
      var scene = new ScrollMagic.Scene({
        triggerElement: '.room-nav-section',
        triggerHook: 0.5,
        duration: $(window).innerHeight() * 2,
        offset: 0,
      })
        .setTween(right_img)
        .addTo(controller);
    }
    preview_img_animation();
  }
  if ($('.room-wrap').length > 0) {
    room_scrollMagic();
  }

  //스페셜 스크롤 매직
  function special_scrollMagic() {
    function rooling_scroll() {
      var rolling_txt = TweenMax.to(
        '.special-wrap .info-section .img-wrap.img-right',
        0.5,
        {
          y:
            $('.special-wrap .info-section .img-wrap.img-right').innerHeight() /
            3,
        }
      );
      var scene = new ScrollMagic.Scene({
        triggerElement: '.special-wrap .info-section',
        triggerHook: 0.5,
        duration: $(window).height() * 3,
        offset: 0,
      })
        .setTween(rolling_txt)
        .addTo(controller);
    }
    rooling_scroll();
  }
  if ($('.special-wrap').length > 0) {
    special_scrollMagic();
  }

  //투어 스크롤 매직
  function reser_scrollMagic() {
    function view_img2() {
      let item_arr = [
        (img1 = {
          target: '.reser-wrap .intro-section .img-wrap .img1', // 타겟
          move_y: '-50', // 이동할 y값
          trigger: '.reser-wrap .intro-section .img-wrap', //시작할 타겟
          move_duration: $(window).height(), // 이동할 범위
        }),
        (img2 = {
          target: '.reser-wrap .intro-section .img-wrap .img2', // 타겟
          move_y: '20', // 이동할 y값
          trigger: '.reser-wrap .intro-section .img-wrap', //시작할 타겟
          move_duration: $(window).height(), // 이동할 범위
        }),
        (img3 = {
          target: '.reser-wrap .intro-section .img-wrap .img3', // 타겟
          move_y: '-15', // 이동할 y값
          trigger: '.reser-wrap .intro-section .img-wrap', //시작할 타겟
          move_duration: $(window).height(), // 이동할 범위
        }),
      ];

      for (i = 0; i < item_arr.length; i++) {
        var img = TweenMax.to(item_arr[i].target, 0.5, {
          y: item_arr[i].move_y,
        });
        var scene = new ScrollMagic.Scene({
          triggerElement: item_arr[i].trigger,
          duration: item_arr[i].move_duration,
          offset: 0,
        })
          .setTween(img)
          .addTo(controller);
      }
    }

    view_img2();
  }
  if ($('.reser-wrap').length > 0) {
    reser_scrollMagic();
  }
});
