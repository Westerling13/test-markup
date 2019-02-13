import $ from 'jquery';
import 'what-input';
import 'slick-carousel';
import 'owl.carousel';
import 'jquery-validation';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$('.owl-carousel').owlCarousel({
  loop: true,
  center: true,
  nav: true,
  navText: ["<div class='reviews__left'></div>","<div class='reviews__right'></div>"],
  responsive: {
    0: {
      items: 1
    },
    700: {
      items: 3
    }
  }
});

$('#form').validate({
  rules: {
    name: {
      minlength: 2
    },
    phone: {
      required: true,
      minlength: 11,
      maxlength: 11,
      digits: true
    },
    email: {
      required: true,
      email: true
    },
    agreement: {
      required: true
    }
  },
  messages: {
    name: {
      minlength: 'Введите не менее 2-х символов'
    },
    phone: {
      required: 'Это поле обязательно для заполнения',
      minlength: 'Введите номер в 11-значном формате',
      maxlength: 'Введите номер в 11-значном формате',
      digits: 'Номер должен состоять из цифр'
    },
    email: {
      required: 'Это поле обязательно для заполнения',
      email: 'Проверьте введенный адрес'
    },
    agreement: {
      required: 'Это поле обязательно для заполнения'
    }
  },
  errorPlacement: function(error, element) {
      var placement = $(element).data('error');
      if (placement) {
        $(placement).append(error)
      } else {
        error.insertAfter(element);
      }
    }
});

$(document).foundation();
