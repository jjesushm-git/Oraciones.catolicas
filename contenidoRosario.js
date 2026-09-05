/* ==========================================================
   ROSARIO MARIANO — ARCHIVO FÁCIL DE EDITAR

   - INICIO y CIERRE se muestran todos los días.
   - MISTERIOS contiene solamente lo que cambia según el día.
   - JACULATORIAS aparece al pulsar el botón flotante.

   Para modificar una oración, cambie únicamente el texto
   ubicado entre comillas invertidas.
   ========================================================== */

const ROSARIO_CONTENT = {
  inicio: `INICIO:

Ave María Purísima.

Todos: Sin pecado concebida.

Por la señal de la Santa Cruz, de nuestros enemigos, líbranos, Señor Dios nuestro.

En el nombre del Padre, y del Hijo y del Espíritu Santo. Amén.

Abre, Señor, mis labios.

Todos: Y mi boca proclamará tu alabanza.

Dios mío, acude en mi socorro.

Todos: No tardes, Señor, en socorrerme.

Todos: Señor mío Jesucristo, Dios y hombre verdadero, me pesa de todo corazón haber pecado, porque he merecido el infierno y he perdido el cielo, y sobre todo porque te ofendí, a ti que eres bondad infinita, a quien amo sobre todas las cosas. Propongo firmemente, con tu gracia, enmendarme y evitar las ocasiones próximas de pecado, confesarme y cumplir la penitencia; confío me perdonarás por tu infinita misericordia. Amén.

Gloria al Padre, y al Hijo y al Espíritu Santo.

Todos: Como era en un principio, ahora y siempre por los siglos de los siglos. Amén.

*Se puede ofrecer el Rosario por una intención personal.*`,

  jaculatorias: `JACULATORIAS:

Gloria al Padre, y al Hijo y al Espíritu Santo.

Todos: Como era en un principio, ahora y siempre por los siglos de los siglos. Amén.

María, Madre de gracias y Madre de misericordia.

Todos: En la vida y en la muerte ampáranos, gran Señora.

¡Oh Jesús mío!, perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las almas, socorre especialmente a las más necesitadas de tu misericordia.

Sagrado Corazón de Jesús.

Todos: En vos confío.`,

  misterios: {
    gozosos: {
      nombre: 'MISTERIOS GOZOSOS',
      items: [
        {
          numero: 'PRIMER MISTERIO',
          titulo: 'La anunciación a la Virgen María',
          lectura: 'Entrando el ángel a su casa, le dijo: Dios te salve, llena de gracia, el Señor está contigo. (Lucas 1, 28)'
        },
        {
          numero: 'SEGUNDO MISTERIO',
          titulo: 'La visita de María a Santa Isabel',
          lectura: 'Isabel se llenó del Espíritu Santo y exclamó con fuerte voz: Bendita eres entre las mujeres y bendito el fruto de tu vientre. (Lucas 1, 40-42)'
        },
        {
          numero: 'TERCER MISTERIO',
          titulo: 'El nacimiento de Jesús en Belén',
          lectura: 'María dio a luz a su hijo primogénito, lo envolvió en pañales y lo recostó en un pesebre, porque no alcanzaron lugar en la posada. (Lucas 2, 6)'
        },
        {
          numero: 'CUARTO MISTERIO',
          titulo: 'María presenta a Jesús en el templo',
          lectura: 'Cuando llegó el día fijado por la ley de Moisés para la purificación, llevaron a Jerusalén al niño para presentarlo al Señor. (Lucas 2, 22)'
        },
        {
          numero: 'QUINTO MISTERIO',
          titulo: 'El niño perdido y hallado en el templo',
          lectura: 'Al cabo de tres días lo hallaron en el templo sentado entre los doctores, oyéndolos y haciéndoles preguntas. (Lucas 2, 46)'
        }
      ]
    },

    dolorosos: {
      nombre: 'MISTERIOS DOLOROSOS',
      items: [
        {
          numero: 'PRIMER MISTERIO',
          titulo: 'Oración de Jesús en el huerto',
          lectura: 'Se postró con el rostro sobre la tierra y rezó: Padre mío, si es posible que pase de mí este cáliz, pero que no se haga mi voluntad, sino la tuya. (Mateo 26, 40)'
        },
        {
          numero: 'SEGUNDO MISTERIO',
          titulo: 'Jesús es azotado',
          lectura: 'Entonces Pilato se llevó a Jesús y lo mandó azotar. (Juan 19, 1)'
        },
        {
          numero: 'TERCER MISTERIO',
          titulo: 'Jesús es coronado de espinas',
          lectura: 'Y los soldados tejieron una corona de espinas y se la pusieron en la cabeza. Lo revistieron con un manto rojo y se le arrodillaban diciendo: Salve, rey de los Judíos; y le daban de bofetadas. (Juan 19, 2-3)'
        },
        {
          numero: 'CUARTO MISTERIO',
          titulo: 'Jesús con la cruz a cuestas',
          lectura: 'Enseguida se llevaron a Jesús, quien salió cargando su propia cruz hacia un lugar que se llama lugar de la calavera o calvario. (Juan 19, 16-17)'
        },
        {
          numero: 'QUINTO MISTERIO',
          titulo: 'La crucifixión y muerte de Jesús',
          lectura: 'Cuando llegaron al calvario, lo crucificaron junto con dos malhechores. Y decía Jesús: Padre, perdónalos porque no saben lo que hacen. (Juan 19, 18 y Lucas 23, 34)'
        }
      ]
    },

    gloriosos: {
      nombre: 'MISTERIOS GLORIOSOS',
      items: [
        {
          numero: 'PRIMER MISTERIO',
          titulo: 'La resurrección de Jesucristo',
          lectura: 'El ángel dijo a las mujeres: No está aquí porque ha resucitado. Vayan enseguida a decir a sus discípulos; ha resucitado de entre los muertos. (Mateo 28, 5-7)'
        },
        {
          numero: 'SEGUNDO MISTERIO',
          titulo: 'Jesús asciende al cielo',
          lectura: 'Mientras los bendecía, se apartó de ellos y se elevó hacia el cielo. Ellos, después de adorarlo, regresaron llenos de alegría a Jerusalén. (Lucas 24, 51-52)'
        },
        {
          numero: 'TERCER MISTERIO',
          titulo: 'La venida del Espíritu Santo',
          lectura: 'Entonces vieron unas como lenguas de fuego sobre cada uno de los Apóstoles y quedaron llenos del Espíritu Santo. (Hechos 2, 3-4)'
        },
        {
          numero: 'CUARTO MISTERIO',
          titulo: 'La Asunción de la Virgen María',
          lectura: 'La Asunción de María al cielo es la fiesta de la glorificación de su cuerpo virginal y de su alma inmaculada; es su glorificación como Madre de Dios. (Papa Paulo VI)'
        },
        {
          numero: 'QUINTO MISTERIO',
          titulo: 'María es coronada como Reina del cielo y tierra',
          lectura: 'Apareció en el cielo un gran prodigio: una mujer vestida de sol y la luna bajo sus pies, y en su cabeza una corona de doce estrellas. (Apocalipsis 12, 1)'
        }
      ]
    },

    luminosos: {
      nombre: 'MISTERIOS LUMINOSOS',
      items: [
        {
          numero: 'PRIMER MISTERIO',
          titulo: 'El bautismo de Jesús en el Jordán',
          lectura: 'Y vino una voz del cielo que decía: Este es mi Hijo, el amado, mi predilecto. (Mateo 3, 17)'
        },
        {
          numero: 'SEGUNDO MISTERIO',
          titulo: 'La autorrevelación de Jesucristo en las bodas de Caná',
          lectura: 'En Caná de Galilea, Jesús comenzó sus signos, manifestó su gloria y creció la fe de sus discípulos en Él. (Juan 2, 11)'
        },
        {
          numero: 'TERCER MISTERIO',
          titulo: 'El anuncio del Reino de Dios y la llamada a la conversión',
          lectura: 'Jesús se marchó a Galilea a proclamar el evangelio de Dios. Decía: Se ha cumplido el plazo, está cerca el Reino de Dios, conviértanse y crean en el evangelio. (Marcos 1, 15)'
        },
        {
          numero: 'CUARTO MISTERIO',
          titulo: 'La transfiguración del Señor',
          lectura: 'Mientras oraba se transfiguró delante de ellos y su rostro resplandecía como el sol, y sus vestidos se volvieron blancos como la luz. (Lucas 9, 29 y Mateo 17, 2)'
        },
        {
          numero: 'QUINTO MISTERIO',
          titulo: 'La institución de la Eucaristía',
          lectura: 'Yo soy el pan vivo que ha bajado del cielo. El que coma de este pan vivirá para siempre. (Juan 6, 51)'
        }
      ]
    }
  },

  letania: {
    titulo: 'LETANÍA',
    invocaciones: [
      ['Señor, ten piedad de nosotros.', 'Señor, ten piedad de nosotros.'],
      ['Cristo, ten piedad de nosotros.', 'Cristo, ten piedad de nosotros.'],
      ['Señor, ten piedad de nosotros.', 'Señor, ten piedad de nosotros.'],
      ['Cristo, óyenos.', 'Cristo, óyenos.'],
      ['Cristo, escúchanos.', 'Cristo, escúchanos.'],
      ['Dios Padre Celestial.', 'Ten piedad de nosotros.'],
      ['Dios Hijo, Redentor del mundo.', 'Ten piedad de nosotros.'],
      ['Dios Espíritu Santo.', 'Ten piedad de nosotros.'],
      ['Santísima Trinidad, que eres un solo Dios.', 'Ten piedad de nosotros.']
    ],
    ruegaPorNosotros: [
      'Santa María',
      'Santa Madre de Dios',
      'Santa Virgen de las Vírgenes',
      'Madre de Jesucristo',
      'Madre de la Divina Gracia',
      'Madre Purísima',
      'Madre Castísima',
      'Madre Inmaculada',
      'Madre Admirable',
      'Madre Amable',
      'Madre Virgen',
      'Madre del Buen Consejo',
      'Madre del Creador',
      'Madre del Salvador',
      'Madre de la Iglesia',
      'Virgen Prudentísima',
      'Virgen Venerable',
      'Virgen Laudable',
      'Virgen Poderosa',
      'Virgen Misericordiosa',
      'Virgen Fiel',
      'Virgen de Justicia',
      'Trono de la Sabiduría',
      'Causa de Nuestra Alegría',
      'Vaso Espiritual',
      'Vaso Digno de Honor',
      'Vaso de Insigne Devoción',
      'Vaso Precioso de la Gracia',
      'Rosa Mística',
      'Torre de David',
      'Torre de Marfil',
      'Casa de Oro',
      'Arca de la Alianza',
      'Estrella de la Mañana',
      'Salud de los Enfermos',
      'Consoladora de los Afligidos',
      'Refugio de los Pecadores',
      'Auxilio de los Cristianos',
      'Reina de los Ángeles',
      'Reina de los Patriarcas',
      'Reina de los Profetas',
      'Reina de los Apóstoles',
      'Reina de los Mártires',
      'Reina de los Confesores',
      'Reina de las Vírgenes',
      'Reina de todos los Santos',
      'Reina concebida sin pecado original',
      'Reina elevada al cielo',
      'Reina del Santo Rosario',
      'Reina de las Familias',
      'Reina de la Paz'
    ],
    corderoDeDios: [
      ['Cordero de Dios, que quitas el pecado del mundo.', 'Perdónanos, Señor.'],
      ['Cordero de Dios, que quitas el pecado del mundo.', 'Escúchanos, Señor.'],
      ['Cordero de Dios, que quitas el pecado del mundo.', 'Ten piedad y misericordia de nosotros.']
    ]
  },

  cierre: `ORACIONES FINALES:

Oh soberano santuario, Madre del Verbo eterno.

Todos: Libra, Virgen, del infierno a quien reza tu Santo Rosario.

Emperatriz poderosa, de los mortales consuelo.

Todos: Ábrenos, Virgen, el cielo con una muerte dichosa y danos pureza de alma, ya que eres tan poderosa.

*Rezar un Padre Nuestro.*

Dios te salve, María Santísima, Hija de Dios Padre, Virgen purísima antes del parto; en tus manos encomiendo mi fe, para que la ilumines. Llena eres de gracia. El Señor es contigo. Bendita tú eres entre todas las mujeres y bendito es el fruto de tu vientre, Jesús.

Todos: Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte.

Amén.

Dios te salve, María, Madre de Dios Hijo, Virgen purísima en el parto; en tus manos encomiendo mi esperanza, para que la alientes. Llena eres de gracia. El Señor es contigo. Bendita tú eres entre todas las mujeres y bendito es el fruto de tu vientre, Jesús.

Todos: Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte.

Amén.

Dios te salve, María, Esposa del Espíritu Santo, Virgen purísima después del parto; en tus manos encomiendo mi caridad, para que la inflames. Llena eres de gracia. El Señor es contigo. Bendita tú eres entre todas las mujeres y bendito es el fruto de tu vientre, Jesús.

Todos: Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte.

Amén.

Dios te salve, María, templo, trono y Sagrario de la Santísima Trinidad, Virgen concebida sin la culpa original.

Dios te salve.

Todos: Reina y Madre de misericordia, vida, dulzura y esperanza nuestra: Dios te salve; a ti llamamos los desterrados hijos de Eva; a ti suspiramos, gimiendo y llorando en este valle de lágrimas. Ea, pues, Señora, Abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos y, después de este destierro, muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clemente! ¡Oh piadosa! ¡Oh dulce Virgen María! Ruega por nosotros, Santa Madre de Dios, para que seamos dignos de alcanzar las divinas gracias y promesas de nuestro Señor Jesucristo.

Amén.

[[LETANIA]]

Bajo tu amparo nos acogemos, Santa Madre de Dios; no desprecies las súplicas que te hacemos en nuestras necesidades. Antes bien, líbranos de todos los peligros, ¡oh Virgen gloriosa y bendita! Ruega por nosotros, Santa Madre de Dios.

Todos: Para que seamos dignos de alcanzar las divinas gracias y promesas de Nuestro Señor Jesucristo.

Amén.

Oración:

Oh Dios, cuyo Unigénito Hijo, con su vida, muerte y resurrección, nos alcanzó el premio de la vida eterna; concédenos a los que recordamos estos misterios del Santo Rosario imitar lo que contienen y alcanzar lo que prometen. Por el mismo Jesucristo Nuestro Señor.

Todos: Amén.

Por las intenciones del Santo Padre, un Padre Nuestro, Ave María y Gloria.

Por las almas de los fieles difuntos, todos debemos rogar.

Todos: Que Dios las saque de pena y las lleve a descansar.

Ave María Purísima.

Todos: Sin pecado concebida. (3 veces)

Por la señal de la Santa Cruz, de nuestros enemigos, líbranos, Señor Dios Nuestro. En el nombre del Padre y del Hijo y del Espíritu Santo.

Amén.`
};

const ROSARIO_POR_DIA = [
  { dia: 'Domingo', misterio: 'gloriosos' },
  { dia: 'Lunes', misterio: 'gozosos' },
  { dia: 'Martes', misterio: 'dolorosos' },
  { dia: 'Miércoles', misterio: 'gloriosos' },
  { dia: 'Jueves', misterio: 'luminosos' },
  { dia: 'Viernes', misterio: 'dolorosos' },
  { dia: 'Sábado', misterio: 'gozosos' }
];
