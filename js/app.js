(function(){
    var animate = () =>{
        var home = $('.home'),
            contato = $('.contact');
        home.toggleClass('active');
        home.find('.home__content').toggleClass('active')
        contato.toggleClass('active');
        contato.find('.contact__content').toggleClass('active');
        
        if(contato.hasClass('active')){
            $('.contact-link').text('Voltar');
            window.location.href = window.location.origin + '/#!contato';
            window.history.pushState('Object', 'Contato | Rhenan Cardozo', window.location.href);
        }else{
            $('.contact-link').text('Contato');
            window.location.href = window.location.origin;            
        }
    }
    $(document).ready(function(){
        $('.contact-link').on('click', (event) =>{
            event.preventDefault();
            animate();
        });
        var url = window.location.href;
        url = url.split('#!');
        if(url.length > 1 && url[1] == 'contato'){
            animate();
        }
    })
})($);