$(document).ready(function(){
  var checkInfo = $('#check');
  var infatext = $('#infatext');
  var addnode = $('.addnode');
  var addbtn = $('.addbtn');
  var infomas = [];

  function capitalize(s){
      return s.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
  };

  checkInfo.click(function(e) {
    var infa = infatext.val();
    infa = capitalize(infa);
    if (infa != '' && checkInfo.attr('disabled') != 'disabled') {
      var per = parseInt(Math.random(100)*100);
      infa.charAt(0).toUpperCase();
      console.log(parseInt(Math.random(100)*100));
      addnode.empty();
      addnode.append('<hr class="light">'+ '<h3>'+ infa+'</h3>'+'<h2>Инфа: '+ per + ' %</h2>' +
    '<div class="ya-share2" data-services="vkontakte,facebook,odnoklassniki,moimir"></div>'
    );
      checkInfo.attr('disabled', 'disabled');
    }
  });

  infatext.change(function(e){
    if (checkInfo.attr('disabled') == 'disabled') {
      checkInfo.removeAttr('disabled');
    }
  });

});
