const app = {

  element : document.body,

  effects : {

    apply : function( effect, delay ) {

      delay = delay || 250;

      const delayLoop = (fn, delay) => {
        return (x, i) => {
          setTimeout(() => {
            fn(x);
          }, i * delay);
        };
      };

      const elements = document.querySelectorAll( '[data-effect="' + effect + '"]' );

      const apply = el => el.dataset.effect = 'done';

      elements.forEach( delayLoop( apply, delay ) );

    },

    initialize : function() {

      app.effects.apply( 'fade', 200 );

      setTimeout( () => {

        app.effects.apply( 'fade-from-bottom', 200 );

      }, 400 );

    }

  },

  load : function() {

    setTimeout( () => {

      app.element.dataset.status = 'loaded';

      app.effects.initialize()

    }, 600 )

  },

  initialize : function() {

    window.addEventListener( 'load', app.load() );

  }

}

app.initialize();
