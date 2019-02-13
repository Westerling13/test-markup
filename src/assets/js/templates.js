import $ from 'jquery';
import Handlebars from 'handlebars';

export default (function() {
  var comments = [
    {
      author: 'Влад Гончаров',
      link: 'vk.com/ex3der',
      avatar: 'avatar-01.jpg',
      message: 'Предсознательное иллюстрирует девиантный филогенез. Восприятие, на первый   взгляд, отчуждает генезис. Филогенез, например, слабопроницаем. Действие притягивает депрессивный инсайт.'
    },
    {
      author: 'Ваня Мирошников',
      link: 'vk.com/id16362672',
      avatar: 'avatar-02.jpg',
      message: 'Предсознательное иллюстрирует девиантный филогенез. Восприятие, на первый   взгляд, отчуждает генезис. Филогенез, например, слабопроницаем. Действие притягивает депрессивный инсайт.'
    },
    {
      author: 'Алексей Волков',
      link: 'vk.com/asgalex',
      avatar: 'avatar-03.jpg',
      message: 'Предсознательное иллюстрирует девиантный филогенез. Восприятие, на первый   взгляд, отчуждает генезис. Филогенез, например, слабопроницаем. Действие притягивает депрессивный инсайт.'
    }
  ];

  var comment = {
    author: 'Влад Гончаров',
    link: 'vk.com/ex3der',
    avatar: 'avatar-01.jpg',
    message: 'Предсознательное иллюстрирует девиантный филогенез. Восприятие, на первый   взгляд, отчуждает генезис. Филогенез, например, слабопроницаем. Действие притягивает депрессивный инсайт.'
  };

  // var source = $('#slide').html();
  // var template = Handlebars.compile(source);
  // var compiledTemplate = template(comment);
  // var slider = $('.reviews__slider');
  // slider.html(compiledTemplate);
  // console.log(source);
  // console.log(source);
})();
