/* ==========================================================
   ROSARIO DE DIFUNTOS — CONTENIDO EDITABLE

   Los marcadores {{name}}, {{pronoun}}, {{object}},
   {{ourSibling}} y {{servant}} se sustituyen automáticamente.
   Los cantos están separados por grupo de misterios.
   ========================================================== */

const ROSARIO_DIFUNTOS_CONTENT = {
  titulo: "Rosario de Difuntos",
  inicioAntesCanto1: [
        "Oración por un ser querido:",
        "",
        "Dios mío, te has llevado a la persona que más amábamos en este mundo; pero Tú lo has querido así, cúmplase en todo tu santa voluntad. El gran consuelo que nos queda es la esperanza de que tú recibiste a {{ourSibling}} {{name}} en el seno de tu misericordia y que te dignarás, algún día, unirnos con {{pronoun}}.",
        "",
        "Si la purificación de sus pecados {{object}} detiene aún en las penas del Purgatorio, nosotros te ofrecemos por {{pronoun}} nuestras oraciones y buenas obras, especialmente nuestra resignación ante su pérdida, para que pronto pueda reunirse contigo en tu gloria.",
        "",
        "Amén.",
        "",
        "Monición de entrada:",
        "",
        "Todos los ángeles están alrededor del trono y adoran a Dios. Nosotros, miserables pecadores, nos agrupamos también alrededor del trono de tu soberanía y clamamos por las almas del Purgatorio que esperan ansiosas su libertad. Que la sangre del Cordero las redima de sus culpas y abrevie sus sufrimientos. Redoblamos nuestras súplicas en su favor, confiando en que tu bondad les permita entonar con tus ángeles el himno que ellos cantan a nuestro Dios."
      ].join("\n"),
  inicioDespuesCanto1: [
        "Ave María Purísima.",
        "",
        "Todos: Sin pecado concebida.",
        "",
        "Por la señal de la Santa Cruz, de nuestros enemigos líbranos, Señor Dios nuestro.",
        "",
        "En el nombre del Padre y del Hijo y del Espíritu Santo.",
        "",
        "Todos: Señor mío Jesucristo, Dios y hombre verdadero, Creador y Redentor mío, por ser Tú quien eres y porque te amo sobre todas las cosas, me pesa de todo corazón haberte ofendido. Quiero y propongo firmemente confesarme a su tiempo. Ofrezco mi vida, obras y trabajos en satisfacción de mis pecados. Confío en tu bondad y misericordia infinita, que me los perdonarás y me darás la gracia para no volver a ofenderte.",
        "",
        "Amén.",
        "",
        "Abre, Señor, mis labios.",
        "",
        "Todos: Y mi boca proclamará tu alabanza.",
        "",
        "Dios mío, acude en mi socorro.",
        "",
        "Todos: No tardes, Señor, en socorrerme.",
        "",
        "Gloria al Padre, y al Hijo y al Espíritu Santo.",
        "",
        "Todos: Como era en el principio, ahora y siempre por los siglos de los siglos.",
        "",
        "Amén.",
        "",
        "Dale, Señor, el descanso eterno.",
        "",
        "Todos: Brille para {{pronoun}} la luz perpetua.",
        "",
        "Descanse en paz.",
        "",
        "Todos: Así sea.",
        "",
        "Oración:",
        "",
        "Abre, Señor, nuestros labios y limpia nuestros corazones de pensamientos impertinentes. Ilumina nuestro entendimiento con la luz del Espíritu Santo para que, digna y devotamente, recemos este Santo Rosario, pidiéndote por el eterno descanso de {{ourSibling}} {{name}}.",
        "",
        "Te damos gracias por la vida que le diste y te pedimos por las personas que estamos presentes.",
        "",
        "Oh, Dios, que perdonas y deseas la salvación de todos, imploramos tu clemencia para que, por la intercesión de María Santísima y de todos los Santos, concedas a tu {{servant}} {{name}} la gracia de llegar a la Vida Eterna.",
        "",
        "Amén.",
        "",
        "Ofrecimiento del Rosario:",
        "",
        "Dios Padre todopoderoso, apoyados en nuestra fe, que proclama la muerte y resurrección de tu Hijo Jesucristo, te ofrecemos este Santo Rosario por {{ourSibling}} {{name}} y te pedimos que, así como ha participado ya de la muerte de Cristo, también llegue a participar de la alegría de su gloriosa resurrección. Por Jesucristo nuestro Señor.",
        "",
        "Amén."
      ].join("\n"),
  padreNuestro: [
        "Padre nuestro, que estás en el cielo,",
        "santificado sea tu Nombre;",
        "venga a nosotros tu Reino;",
        "hágase tu voluntad en la tierra como en el cielo.",
        "",
        "Danos hoy nuestro pan de cada día;",
        "perdona nuestras ofensas,",
        "como también nosotros perdonamos a los que nos ofenden;",
        "no nos dejes caer en la tentación, y líbranos del mal.",
        "",
        "Amén."
      ].join("\n"),
  aveMaria: [
        "Dios te salve, María,",
        "llena eres de gracia;",
        "el Señor es contigo.",
        "Bendita Tú eres entre todas las mujeres,",
        "y bendito es el fruto de tu vientre, Jesús.",
        "",
        "Santa María, Madre de Dios,",
        "ruega por nosotros, pecadores,",
        "ahora y en la hora de nuestra muerte.",
        "",
        "Amén."
      ].join("\n"),
  jaculatorias: [
        "Gloria al Padre, y al Hijo y al Espíritu Santo.",
        "",
        "Todos: Como era en un principio, ahora y siempre por los siglos de los siglos. Amén.",
        "",
        "Si con tu preciosa Sangre, Señor, {{object}} has redimido.",
        "",
        "Todos: Que {{object}} perdones te pido por tu pasión dolorosa.",
        "",
        "Dale, Señor, el descanso eterno.",
        "",
        "Todos: Y brille para {{pronoun}} la luz perpetua.",
        "",
        "Descanse en paz.",
        "",
        "Todos: Así sea.",
        "",
        "María, Madre de gracia y Madre de misericordia.",
        "",
        "Todos: En la vida y en la muerte ampáranos, gran Señora.",
        "",
        "¡Oh, Jesús mío!, perdona nuestros pecados, líbranos del fuego del infierno, lleva al cielo a todas las almas, socorre especialmente a las más necesitadas de tu misericordia y con ellas el alma de {{ourSibling}} {{name}}.",
        "",
        "Amén.",
        "",
        "Sagrado Corazón de Jesús.",
        "",
        "Todos: En vos confío."
      ].join("\n"),
  misterios: {
    gozosos: {
      nombre: "MISTERIOS GOZOSOS",
      items: [
        {
          numero: "PRIMER MISTERIO",
          titulo: "La Anunciación a la Virgen María",
          lectura: "",
          reflexion: "¡Oh María Dulcísima, consuelo de las almas! Este Padre Nuestro y diez Ave Marías te ofrecemos por el gozo que tuviste cuando, saludada por el Ángel, te anunció la Encarnación del Hijo de Dios en tus entrañas; por {{Pronoun}} te suplicamos que el alma de {{ourSibling}} {{name}} y las demás almas del Purgatorio reciban de los Ángeles, por tu intercesión, alegres nuevas de la Gloria, a donde vayan a descansar por todos los siglos. Amén, Jesús."
        },
        {
          numero: "SEGUNDO MISTERIO",
          titulo: "La Visita de María a Santa Isabel",
          lectura: "",
          reflexion: "¡Oh María, refugio de pecadores! Este Padre Nuestro y diez Ave Marías te ofrecemos por el gozo que tuviste cuando, visitando a Santa Isabel, fuiste de ella reconocida por Madre de Dios, y el Niño Juan quedó libre de las prisiones de la culpa; por este gozo te suplicamos que visites y consueles el alma de {{ourSibling}} {{name}} y las demás almas del Purgatorio, y las libres de las prisiones que padecen para que salgan libres a la Gloria. Amén, Jesús."
        },
        {
          numero: "TERCER MISTERIO",
          titulo: "El Nacimiento de Jesús en Belén",
          lectura: "",
          reflexion: "¡Oh María, estrella del Mar, norte fijo de la Iglesia! Este Padre Nuestro y diez Ave Marías te ofrecemos por el gozo que tuviste cuando, naciendo de tu vientre como de la aurora, el Sol de Justicia, Cristo, alumbró a los que estaban en tinieblas; por {{Pronoun}} te suplicamos que visites y consueles el alma de {{ourSibling}} {{name}} y las demás almas del Purgatorio, para que merezcan salir de las tinieblas de aquella oscura cárcel a los resplandores de la Gloria. Amén, Jesús."
        },
        {
          numero: "CUARTO MISTERIO",
          titulo: "María Presenta a Jesús en el Templo",
          lectura: "",
          reflexion: "¡Oh Purísima María, que sin obligarte la ley de la Purificación presentaste a tu Santísimo Hijo en el templo, con especial gozo de haberle reconocido por verdadero Dios! Este Padre Nuestro y diez Ave Marías te ofrecemos suplicando que el alma de {{ourSibling}} {{name}} y las demás almas del Purgatorio sean purificadas para entrar en el templo de la Gloria. Amén, Jesús."
        },
        {
          numero: "QUINTO MISTERIO",
          titulo: "El Niño Perdido y Hallado en el Templo",
          lectura: "",
          reflexion: "¡Oh Purísima María, seguro medio para hallar a Jesús! Este Padre Nuestro y diez Ave Marías te ofrecemos por el gozo que tuviste cuando hallaste en el templo al Niño Dios, sin culpa tuya perdido; por {{Pronoun}} te suplicamos que el alma de {{ourSibling}} {{name}} y las demás almas del Purgatorio tengan, por tus ruegos, el alivio de sus penas, mirando a Jesús en el templo de su Gloria. Amén, Jesús."
        }
      ]
    },
    dolorosos: {
      nombre: "MISTERIOS DOLOROSOS",
      items: [
        {
          numero: "PRIMER MISTERIO",
          titulo: "La Oración de Jesús en el Huerto",
          lectura: "",
          reflexion: "¡Oh Dolorosísima Madre de Jesús, quien, despedido y apartado de tu compañía, oró con mortales agonías en el huerto, donde por un Ángel fue confortado! Este Padre Nuestro y diez Ave Marías te ofrecemos, suplicándote que por tu intercesión el alma de {{ourSibling}} {{name}} y las demás almas del Purgatorio sean confortadas por los ángeles en sus penas. Amén, Jesús."
        },
        {
          numero: "SEGUNDO MISTERIO",
          titulo: "La Flagelación de Nuestro Señor Jesucristo",
          lectura: "",
          reflexion: "¡Oh María, mar de dolores! Este Padre Nuestro y diez Ave Marías te ofrecemos en memoria del gravísimo dolor que tuviste viendo desnudo y azotado cruelmente al Hijo de tus entrañas; por {{Pronoun}} te suplicamos que el alma de {{ourSibling}} {{name}} y las demás almas del Purgatorio sean libres de los azotes que allí padecen de la Divina Justicia, por virtud de los azotes que Jesús llevó por su misericordia. Amén, Jesús."
        },
        {
          numero: "TERCER MISTERIO",
          titulo: "Jesús es Coronado de Espinas",
          lectura: "",
          reflexion: "¡Oh María, hermoso lirio entre espinas! Este Padre Nuestro y diez Ave Marías te ofrecemos en honra del agudísimo dolor que tuviste viendo a tu amado Hijo, hermoso lirio de los valles, afeado y coronado de espinas; suplicándote por este dolor que el alma de {{ourSibling}} {{name}} y las demás almas del Purgatorio sean libres de las espinas de penas que padecen y coronadas en la Gloria. Amén, Jesús."
        },
        {
          numero: "CUARTO MISTERIO",
          titulo: "La subida de Jesús al Calavario",
          lectura: "",
          reflexion: "¡Oh María, traspasada de dolor en la calle de la amargura por encontrar en ella a tu inocente Hijo sentenciado a muerte y agobiado con el gran peso de la Cruz! Este Padre Nuestro y diez Ave Marías te ofrecemos, suplicándote que el alma de {{ourSibling}} {{name}} y las demás almas del Purgatorio, por tus ruegos, sean libres de la cruz de penas que padecen. Amén, Jesús."
        },
        {
          numero: "QUINTO MISTERIO",
          titulo: "La Crucifixión de Jesús y Soledad de María",
          lectura: "",
          reflexion: "¡Oh desconsolada Reina, afligida Madre, desamparada Virgen! Este Padre Nuestro y diez Ave Marías te ofrecemos, pidiéndote, por el agudo dolor que atravesó tu amante corazón al ver morir entre tantas afrentas y dolores a tu Santísimo Hijo para redimir con su muerte al género humano, que el alma de {{ourSibling}} {{name}} y las demás almas del Purgatorio no estén solas y afligidas; que la Sangre de tu Hijo les alivie las penas y su muerte les dé vida de Gloria. Amén, Jesús."
        }
      ]
    },
    gloriosos: {
      nombre: "MISTERIOS GLORIOSOS",
      items: [
        {
          numero: "PRIMER MISTERIO",
          titulo: "La Resurrección de Jesucristo",
          lectura: "",
          reflexion: "¡Oh María, Señora, alegría de los justos y consuelo de los pecadores! Este Padre Nuestro y diez Ave Marías te ofrecemos en memoria de la alegría que tuviste viendo resucitado y glorioso a tu Santísimo Hijo; suplicándote que, así como con la presencia de Jesús recibieron alegría las almas de los Santos Padres en el Limbo, la tengan el alma de {{ourSibling}} {{name}} y las demás almas del Purgatorio. Amén, Jesús."
        },
        {
          numero: "SEGUNDO MISTERIO",
          titulo: "Jesús Asciende al Cielo",
          lectura: "",
          reflexion: "¡Oh María, Madre de Dios, llena de sumo gozo en la subida a los Cielos de tu Santísimo Hijo, en compañía de los Santos Padres que libertó de la oscura cárcel del Limbo, llevándolos consigo a la Gloria! Este Padre Nuestro y diez Ave Marías te ofrecemos, suplicándote que el alma de {{ourSibling}} {{name}} y las demás almas del Purgatorio sean libres de aquellas penas y llevadas por manos de los santos ángeles a la Gloria. Amén, Jesús."
        },
        {
          numero: "TERCER MISTERIO",
          titulo: "La Venida del Espíritu Santo",
          lectura: "",
          reflexion: "¡Oh María, dulce esposa del Espíritu Santo! Este Padre Nuestro y diez Ave Marías te ofrecemos por el gozo que tuviste cuando bajó el Divino Espíritu sobre Ti y sobre todos los Apóstoles, para que con la asistencia de Jesús no quedaran huérfanos; por {{Pronoun}} te suplicamos que el alma de {{ourSibling}} {{name}} y las demás almas del Purgatorio salgan a gozar de los brazos de su esposo Jesús en la Gloria. Amén, Jesús."
        },
        {
          numero: "CUARTO MISTERIO",
          titulo: "La Asunción de la Virgen María",
          lectura: "",
          reflexion: "¡Oh Dichosísima María, que entregaste tu purísimo espíritu en la hora de la muerte en manos de tu Santísimo Hijo y, después, unido al cuerpo, resucitaste gloriosa! Este Padre Nuestro y diez Ave Marías te ofrecemos, pidiéndote que el alma de {{ourSibling}} {{name}} y las demás almas del Purgatorio sean libres de sus penas y te acompañen en la Gloria. Amén, Jesús."
        },
        {
          numero: "QUINTO MISTERIO",
          titulo: "Maria es coronada como Reina del cielo y tierra",
          lectura: "",
          reflexion: "¡Oh soberana Virgen María, Madre de Dios, que resucitada de cuerpo y alma fuiste sublimada a la Gloria y coronada por Emperatriz de los Ángeles y de los hombres! Este Padre Nuestro y diez Ave Marías te ofrecemos, suplicándote que el alma de {{ourSibling}} {{name}} y las demás almas del Purgatorio sean coronadas en la Gloria. Amén, Jesús."
        }
      ]
    },
    luminosos: {
      nombre: "MISTERIOS LUMINOSOS",
      items: [
        {
          numero: "PRIMER MISTERIO",
          titulo: "El Bautismo de Jesús en el Jordán",
          lectura: "",
          reflexion: "¡Oh María, redentora Madre de Jesús! Este Padre Nuestro y diez Ave Marías te ofrecemos por el regocijo de ver a Juan el Bautista bañando a Jesús en las benditas aguas del río Jordán y señalando al Cordero de Dios que quita el pecado del mundo; suplicándote que el alma de {{ourSibling}} {{name}} reciba el bautismo de misericordia y sea liberada del Purgatorio. Amén, Jesús."
        },
        {
          numero: "SEGUNDO MISTERIO",
          titulo: "La Autorrevelación de Jesucristo en las Bodas de Caná",
          lectura: "",
          reflexion: "¡Oh María, gloriosa y bendecida al ser elegida por Nuestro Señor! Tu Hijo, complaciente y milagroso, se mostró y así muchos creyeron en Él, siendo sus seguidores. Este Padre Nuestro y diez Ave Marías te ofrecemos, suplicándote que el alma de {{ourSibling}} {{name}} y las demás almas del Purgatorio tengan esa luz de esperanza y fe que las ilumine con la Gloria de tu amor. Amén, Jesús."
        },
        {
          numero: "TERCER MISTERIO",
          titulo: "El Anuncio del Reino de Dios y la Llamada a la Conversión",
          lectura: "",
          reflexion: "¡Oh María Santísima, que solo con inocencia y humildad has llegado a los corazones de tus fieles seguidores! Has amado a Dios con todo tu corazón, con toda tu alma, con todas tus fuerzas y a tu prójimo como a ti misma. Este Padre Nuestro y diez Ave Marías te ofrecemos, suplicándote que el alma de {{ourSibling}} {{name}} y las demás almas del Purgatorio tengan esa luz en su corazón y sean liberadas de aquellas tinieblas. Amén, Jesús."
        },
        {
          numero: "CUARTO MISTERIO",
          titulo: "La transfiguracion de Señor",
          lectura: "",
          reflexion: "¡Oh Maria dulce santicima llena de Fe y obediencias al mandato de tu Dios! Este Padre Nuestro y diez Ave Marías te ofrecemos, suplicándote que el alma de {{ourSibling}} {{name}} y las demás almas del Purgatorio sean llevadas a la Gloria a través de tu Hijo amado, porque Él es el camino, la verdad y la vida, y nadie va al Padre si no es por Él. Amén, Jesús."
        },
        {
          numero: "QUINTO MISTERIO",
          titulo: "La Institución De La Eucaristía",
          lectura: "",
          reflexion: "¡Oh Santa Madre llena ere de gracia! Este Padre Nuestro y diez Ave Marías te ofrecemos, suplicandote que el alma de {{ourSibling}} {{name}} y las demás almas del Purgatorio, sean llevadas a la gloria a travez de tu hijo amado porque el es el camino, la verdad y la vida y nadie va al padres si no es por él Amén, Jesús."
        }
      ]
    }
  },
  cierreAntesLetania: [
        "Oraciones después de los misterios:",
        "",
        "Oh, Soberano Santuario, Madre del Verbo Eterno.",
        "",
        "Todos: Libra, Virgen, del infierno a los que rezamos tu Santo Rosario.",
        "",
        "Emperatriz poderosa, de los mortales consuelo.",
        "",
        "Todos: Ábrenos, Virgen, el Cielo con una muerte dichosa y danos pureza de alma, ya que eres tan poderosa.",
        "",
        "Ofrecimiento:",
        "",
        "Por estos misterios santos de que hace el alma recuerdo te pedimos ¡Oh María! Con tierno y devoto pecho de nuestra fe sacrosanta la conservación y aumento. Torna tus divinos ojos hacia tu cristiano pueblo. Da a tu iglesia la victoria y al mundo grato sosiego serena tus tempestades que airado descarga el Cielo. Y el Pontífice Augusto mitiga el dolor acerbo; las terrenas Potestades sigan de Dios los preceptos, porque la justicia torne y al bien vayan sus esfuerzos. Que a Dios el gentil conozca, su error abjure el soberbio, que de la verdad aparta corazón y entendimiento que la culpa nos inspire dolor profundo y perfecto hallé puerto el navegante y la salud el enfermo. Las almas del Purgatorio gozosas vayan al Cielo; y este santo ejercicio tenga ¡Oh Madre! Tal aumento en todo el orbe cristiano que fiel adora al Dios bueno; que de continua alabanza sean tus glorias objeto y por tu amor merezcamos gozar del eterno premio.",
        "",
        "PADRE NUESTRO",
        "",
        "",
        "Dios te salve, María Santísima, Hija de Dios Padre. En tus manos encomendamos nuestra fe y el alma de {{ourSibling}} {{name}} para que {{object}} ayudes.",
        "",
        "Todos: Santa María, Madre de Dios, ruega por {{pronoun}}.",
        "",
        "Dios te salve, María Santísima, Madre de Dios Hijo. En tus manos encomendamos nuestra esperanza y el alma de {{ourSibling}} {{name}} para que {{object}} perdones.",
        "",
        "Todos: Santa María, Madre de Dios, ruega por {{pronoun}}.",
        "",
        "Dios te salve, María Santísima, Esposa de Dios Espíritu Santo. En tus manos encomendamos nuestra caridad y el alma de {{ourSibling}} {{name}} para que {{object}} salves.",
        "",
        "Todos: Santa María, Madre de Dios, ruega por {{pronoun}}.",
        "",
        "Reina y Madre de misericordia, vida, dulzura y esperanza nuestra: Dios te salve. Ruega por {{pronoun}} y por nosotros, Santa Madre de Dios, para que seamos dignos de alcanzar las divinas gracias y promesas de nuestro Señor Jesucristo.",
        "",
        "Amén."
      ].join("\n"),
  letania: {
    invocaciones: [
      [
        "Señor, ten piedad de {{pronoun}}.",
        "Ten piedad de {{pronoun}}."
      ],
      [
        "Cristo, ten piedad de {{pronoun}}.",
        "Ten piedad de {{pronoun}}."
      ],
      [
        "Señor, ten piedad de {{pronoun}}.",
        "Ten piedad de {{pronoun}}."
      ],
      [
        "Cristo, {{hear}}.",
        "Cristo, {{hear}}."
      ],
      [
        "Cristo, {{listen}}.",
        "Cristo, {{listen}}."
      ],
      [
        "Dios Padre Celestial.",
        "Ten piedad de {{pronoun}}."
      ],
      [
        "Dios Hijo, Redentor del mundo.",
        "Ten piedad de {{pronoun}}."
      ],
      [
        "Dios Espíritu Santo.",
        "Ten piedad de {{pronoun}}."
      ],
      [
        "Santísima Trinidad, que eres un solo Dios.",
        "Ten piedad de {{pronoun}}."
      ]
    ],
    ruegaPor: [
      "Santa María",
      "Santa Madre de Dios",
      "Santa Virgen de las Vírgenes",
      "Madre de Jesucristo",
      "Madre de la divina gracia",
      "Madre Purísima",
      "Madre Castísima",
      "Madre Inmaculada",
      "Madre Admirable",
      "Madre Amable",
      "Madre Virgen",
      "Madre del Buen Consejo",
      "Madre del Creador",
      "Madre del Salvador",
      "Madre de la Iglesia",
      "Virgen Prudentísima",
      "Virgen Venerable",
      "Virgen Laudable",
      "Virgen Poderosa",
      "Virgen Misericordiosa",
      "Virgen Fiel",
      "Virgen de Justicia",
      "Trono de la Sabiduría",
      "Causa de nuestra Alegría",
      "Vaso Espiritual",
      "Vaso Digno de Honor",
      "Vaso de Insigne Devoción",
      "Vaso Precioso de la Gracia",
      "Rosa Mística",
      "Torre de David",
      "Torre de Marfil",
      "Casa de Oro",
      "Arca de la Alianza",
      "Puerta del Cielo",
      "Estrella de la Mañana",
      "Salud de los Enfermos",
      "Consoladora de los Afligidos",
      "Refugio de los Pecadores",
      "Auxilio de los Cristianos",
      "Reina de los Ángeles",
      "Reina de los Patriarcas",
      "Reina de los Profetas",
      "Reina de los Apóstoles",
      "Reina de los Mártires",
      "Reina de los Confesores",
      "Reina de las Vírgenes",
      "Reina de todos los Santos",
      "Reina concebida sin pecado original",
      "Reina elevada al Cielo",
      "Reina del Santo Rosario",
      "Reina de las Familias",
      "Reina de la Paz"
    ],
    cordero: [
      [
        "Cordero de Dios, que quitas el pecado del mundo.",
        "{{forgive}}, Señor."
      ],
      [
        "Cordero de Dios, que quitas el pecado del mundo.",
        "{{listen}}, Señor."
      ],
      [
        "Cordero de Dios, que quitas el pecado del mundo.",
        "Ten piedad y misericordia de {{pronoun}}."
      ]
    ]
  },
  cierreDespuesLetania: [
        "Oraciones después de la Letanía:",
        "",
        "Bajo tu amparo nos acogemos, Santa Madre de Dios. No desprecies las súplicas que te hacemos; antes bien, líbranos de todos los peligros, oh Virgen gloriosa y bendita. Ruega por {{pronoun}} y por nosotros.",
        "",
        "Amén.",
        "",
        "Oh, Dios, cuyo Unigénito Hijo, con su vida, muerte y resurrección, nos alcanzó el premio de la vida eterna: concédenos imitar lo que contienen estos misterios y alcanzar lo que prometen.",
        "",
        "Amén.",
        "",
        "Dale, Señor, el descanso eterno.",
        "",
        "Todos: Brille para {{pronoun}} la luz perpetua.",
        "",
        "Descanse en paz.",
        "",
        "Todos: Así sea.",
        "",
        "Te damos gracias, Señor Dios, por {{ourSibling}} {{name}}, que ha partido de este mundo. Te damos gracias por la amistad y bondad que nos regalaste a través de {{pronoun}}. Te rogamos que, en tu infinita misericordia, tengas presentes sus buenas obras y le concedas la vida eterna.",
        "",
        "Amén.",
        "",
        "Señor Dios, concédenos que por tu muerte y sepultura santa te sirvas llevar a descansar el alma de tu {{servant}} {{name}}, y que {{object}} traslades a la Gloria de los Bienaventurados.",
        "",
        "Amén.",
        "",
        "Responsorio:",
        "",
        "Señor, Dios mío, dirige nuestros pasos por el camino de tu Santa Ley. Dios Padre, creador de todos los hombres, concede a {{ourSibling}} {{name}} el perdón de todos sus pecados. Esto te lo pedimos por Jesucristo, tu Hijo.",
        "",
        "Amén.",
        "",
        "Oración para ofrecer las obras:",
        "",
        "Dios y Señor mío, en quien creo y espero, a quien adoro y amo con todo mi corazón: te doy gracias por haberme creado, redimido y hecho cristiano. Ofrezco y consagro a tu honra y gloria todos mis pensamientos, palabras, obras y trabajos en sufragio de las almas del Purgatorio.",
        "",
        "Amén.",
        "",
        "Dale, Señor, el descanso eterno.",
        "",
        "Todos: Y brille para {{pronoun}} la luz perpetua.",
        "",
        "Descanse en paz.",
        "",
        "Todos: Así sea.",
        "",
        "Por las intenciones del Santo Padre rezaremos un Padre Nuestro, un Ave María y Gloria.",
        "",
        "Por las almas de los fieles difuntos todos debemos rogar.",
        "",
        "Todos: Que Dios las saque de pena y las lleve a descansar.",
        "",
        "Ave María Purísima. (3 veces)",
        "",
        "Todos: Sin pecado concebida.",
        "",
        "Por la señal de la Santa Cruz, de nuestros enemigos líbranos, Señor Dios nuestro.",
        "",
        "En el nombre del Padre y del Hijo y del Espíritu Santo.",
        "",
        "Amén."
      ].join("\n"),
  cantos: {
    gozosos: [
      {
        numero: 1,
        titulo: "QUE ALEGRÍA CUANDO ME DIJERON.",
        texto: [
        "(Coro)",
        "Qué alegría cuando me dijeron:",
        "“vamos a la casa del Señor”",
        "Ya están pisando nuestros pies,",
        "tus umbrales, Jerusalén.",
        "Jerusalén esta fundada como",
        "cuidad bien compacta.",
        "Allá suben las tribus,",
        "Las tribus del Señor.",
        "(Coro)",
        "Por mis hermanos y compañeros",
        "voy a decir: “La paz contigo”",
        "Por la casa del Señor, nuestro Dios,",
        "te deseo todo bien",
        "(Coro)"
      ].join("\n")
      },
      {
        numero: 2,
        titulo: "ALABARE",
        texto: [
        "Alabare, alabare,",
        "alabare a mi Señor (2)",
        "Juan vio el número",
        "de los redimidos",
        "Y todos alababan al Señor,",
        "Unos cantaban, otros oraban",
        "Y todos alababan al Señor.",
        "Todos unidos, alegres cantamos",
        "gloria alabanza al Señor.",
        "Gloria al padre, gloria al hijo,",
        "Y gloria al espíritu de amor.",
        "Somos tus hijos,",
        "Dios Padre eterno,",
        "Tu nos han creado por amor",
        "Te adoramos, te bendecimos",
        "Y todos cantamos en tu honor."
      ].join("\n")
      },
      {
        numero: 3,
        titulo: "OH MARÍA, MADRE MIA",
        texto: [
        "Oh María, madre mía",
        "Oh consuelo del mortal,",
        "amparadme y guiadme",
        "a la patria celestial (2)",
        "Salve, jubilo de cielo",
        "del excelso dulce imán",
        "Salve, hechizo de este suelo",
        "Triunfadora de satán."
      ].join("\n")
      },
      {
        numero: 4,
        titulo: "OH MARÍA, MADRE MIA",
        texto: [
        "Oh María, madre mía",
        "Oh consuelo del mortal,",
        "amparadme y guiadme",
        "a la patria celestial (2)",
        "Que a Ti ferviente clama",
        "halla alivio en el penar",
        "pues tu nombre luz derrama",
        "gozo y bálsamo sin par."
      ].join("\n")
      },
      {
        numero: 5,
        titulo: "OH MARÍA, MADRE MIA",
        texto: [
        "Oh María, madre mía",
        "Oh consuelo del mortal,",
        "amparadme y guiadme",
        "a la patria celestial (2)",
        "De sus gracias tesorera",
        "te ha nombrado el redentor",
        "con tal Madre y medianera",
        "nada temas pecador."
      ].join("\n")
      },
      {
        numero: 6,
        titulo: "OH MARÍA, MADRE MIA",
        texto: [
        "Oh María, madre mía",
        "Oh consuelo del mortal,",
        "amparadme y guiadme",
        "a la patria celestial (2)",
        "Pues te llama con Fe viva",
        "muestra, oh Madre tu bondad",
        "a mi vuelve compasiva",
        "tu mirada de piedad"
      ].join("\n")
      },
      {
        numero: 7,
        titulo: "OH MARÍA, MADRE MIA",
        texto: [
        "Oh María, madre mía",
        "Oh consuelo del mortal,",
        "amparadme y guiadme",
        "a la patria celestial (2)",
        "Hijo fiel, quisiera amarte",
        "y por Ti nomás vivir.",
        "y por premio de enzarzarte",
        "ensalzarte morir.",
        "Del Eterno las riquezas",
        "por Ti logre disfrutar",
        "y contigo sus finezas",
        "para siempre publicar."
      ].join("\n")
      },
      {
        numero: 8,
        titulo: "TE DOY GRACIAS JESÚS",
        texto: [
        "Te doy gracias, Jesús,",
        "por haberme encontrado",
        "por haberme salvado",
        "te doy gracias, Jesús.",
        "Hoy ya sé el camino",
        "y hacia él me dirijo",
        "es la senda bendita",
        "que representa el Hijo.",
        "Mi amor era pequeño",
        "pero ya lo he encontrado;",
        "y ese pequeño amor",
        "hoy se ha agigantado.",
        "Hoy Jesus es mi guía,",
        "el controla mi vida;",
        "y no hay ser terreno",
        "que mi cariño mida."
      ].join("\n")
      }
    ],
    dolorosos: [
      {
        numero: 1,
        titulo: "QUE ALEGRÍA CUANDO ME DIJERON.",
        texto: [
        "(Coro)",
        "Qué alegría cuando me dijeron:",
        "“vamos a la casa del Señor”",
        "Ya están pisando nuestros pies,",
        "tus umbrales, Jerusalén.",
        "Jerusalén esta fundada como",
        "cuidad bien compacta.",
        "Allá suben las tribus,",
        "Las tribus del Señor.",
        "(Coro)",
        "Por mis hermanos y compañeros",
        "voy a decir: “La paz contigo”",
        "Por la casa del Señor, nuestro Dios,",
        "te deseo todo bien",
        "(Coro)"
      ].join("\n")
      },
      {
        numero: 2,
        titulo: "PESCADOR DE HOMBRES",
        texto: [
        "Tú has venido a la orilla",
        "No has buscado,",
        "ni a sabios ni a ricos",
        "Tan solo quieres, que yo te siga.",
        "Señor me has mirado a los ojos",
        "Sonriendo has dicho mi nombre",
        "En la arena he dejado mi barca",
        "Junto a Ti, buscare otro mar.",
        "Tú sabes lo que tengo",
        "En mi barca no hay oro ni espada",
        "Tan solo redes y mi trabajo.",
        "Tú necesitas mis manos",
        "Mi cansancio que a otros descanse",
        "Amor que quiera seguir amando.",
        "Tú, Pescador de otros mares",
        "Ansia eterna de alma que esperan",
        "Amigo bueno, así me llamas."
      ].join("\n")
      },
      {
        numero: 3,
        titulo: "CRISTO ESTA CONMIGO",
        texto: [
        "Cristo esta conmigo,",
        "junto a mí va el Señor",
        "me acompaña siempre",
        "en mi vida, hasta el fin.",
        "Ya no temo, Señor, la tristeza,",
        "ya no temo Señor, la soledad,",
        "porque eres, Señor, mi alegría",
        "tengo siempre tu amistad."
      ].join("\n")
      },
      {
        numero: 4,
        titulo: "CRISTO ESTA CONMIGO",
        texto: [
        "Cristo esta conmigo,",
        "junto a mí va el Señor",
        "me acompaña siempre",
        "en mi vida, hasta el fin.",
        "Ya no temo, Señor, a la noche,",
        "Ya no temo, Señor, la oscuridad,",
        "porque brilla tu luz en las sombras,",
        "ya no hay noche, Tu eres luz."
      ].join("\n")
      },
      {
        numero: 5,
        titulo: "CRISTO ESTA CONMIGO",
        texto: [
        "Cristo esta conmigo,",
        "junto a mí va el Señor",
        "me acompaña siempre",
        "en mi vida, hasta el fin.",
        "Ya no temo, Señor, los fracasos,",
        "ya no temo, Señor, la ingratitud,",
        "porque el triunfo, Señor en la vida",
        "Tú la tienes, Tú la das."
      ].join("\n")
      },
      {
        numero: 6,
        titulo: "CRISTO ESTA CONMIGO",
        texto: [
        "Cristo esta conmigo,",
        "junto a mí va el Señor",
        "me acompaña siempre",
        "en mi vida, hasta el fin.",
        "Ya no temo, Señor, los abismos,",
        "ya no temo, Señor, la inmensidad,",
        "porque eres, Señor el camino,",
        "Tú la vida y la verdad."
      ].join("\n")
      },
      {
        numero: 7,
        titulo: "CRISTO ESTA CONMIGO",
        texto: [
        "Cristo esta conmigo,",
        "junto a mí va el Señor",
        "me acompaña siempre",
        "en mi vida, hasta el fin.",
        "Ya no temo, Señor, a la muerte,",
        "ya no temo, Señor, la eternidad,",
        "porque Tú estás allá esperando",
        "que yo llegue hasta Ti."
      ].join("\n")
      },
      {
        numero: 8,
        titulo: "NO PODEMOS CAMINAR",
        texto: [
        "No podemos caminar",
        "con hambre bajo el sol",
        "danos siempre el mismo pan",
        "tu cuerpo y sangre Señor.",
        "Comamos todo de este pan",
        "el pan de la unidad",
        "en un cuerpo nos unió el Señor",
        "por medio del amor.",
        "Señor, yo tengo sed de Ti,",
        "sediento estoy Señor;",
        "pero pronto llegare a ver,",
        "el rostro del Señor.",
        "Por desierto el pueblo va,",
        "cantando su dolor;",
        "en la noche brillará tu luz",
        "nos guía la verdad."
      ].join("\n")
      }
    ],
    gloriosos: [
      {
        numero: 1,
        titulo: "QUE ALEGRÍA CUANDO ME DIJERON.",
        texto: [
        "(Coro)",
        "Qué alegría cuando me dijeron:",
        "“vamos a la casa del Señor”",
        "Ya están pisando nuestros pies,",
        "tus umbrales, Jerusalén.",
        "Jerusalén esta fundada como",
        "cuidad bien compacta.",
        "Allá suben las tribus,",
        "Las tribus del Señor.",
        "(Coro)",
        "Por mis hermanos y compañeros",
        "voy a decir: “La paz contigo”",
        "Por la casa del Señor, nuestro Dios,",
        "te deseo todo bien",
        "(Coro)"
      ].join("\n")
      },
      {
        numero: 2,
        titulo: "VASO NUEVO",
        texto: [
        "Gracias, quiero darte por amarme,",
        "gracias, quiero darte yo a ti Señor,",
        "hoy, soy feliz, porque te conocí,",
        "gracias por amarme a mí también.",
        "Coro",
        "Yo quiero ser, Señor amado,",
        "como el barro en manos del alfarero,",
        "yo quiero ser un vaso nuevo,",
        "yo quiero ser un vaso nuevo.",
        "Te conocí y te amé,",
        "Te pedí perdón y me escuchaste,",
        "Si te ofendí, perdóname, Señor,",
        "Pues te Amo y nunca te olvidare."
      ].join("\n")
      },
      {
        numero: 3,
        titulo: "OH BUEN JESÚS",
        texto: [
        "Oh buen Jesús, yo creo firmemente",
        "que por mi amor estas en el altar",
        "que das tu cuerpo y sangre juntamente",
        "Al alma fiel en celestial manjar (2)",
        "Indigno soy, confieso avergonzado",
        "de recibir la Santa Comunión",
        "Jesús, que ves mi nada y mi pecado",
        "Prepara Tu mi pobre corazón (2)"
      ].join("\n")
      },
      {
        numero: 4,
        titulo: "OH BUEN JESÚS",
        texto: [
        "Oh buen Jesús, yo creo firmemente",
        "que por mi amor estas en el altar",
        "que das tu cuerpo y sangre juntamente",
        "Al alma fiel en celestial manjar (2)",
        "Pequé, Señor, ingrato te he vendido",
        "infiel te fui confieso mi maldad",
        "contrito ya, perdón, Señor, te pido,",
        "Eres mi Dios apelo a tu bondad (2)"
      ].join("\n")
      },
      {
        numero: 5,
        titulo: "OH BUEN JESÚS",
        texto: [
        "Oh buen Jesús, yo creo firmemente",
        "que por mi amor estas en el altar",
        "que das tu cuerpo y sangre juntamente",
        "Al alma fiel en celestial manjar (2)",
        "Espero en Ti piadoso Jesús mío",
        "oigo tu voz que dice: “ven a mi”",
        "porque eres fiel por eso en Ti confió",
        "Todo Señor, espérolo de Ti. (2)"
      ].join("\n")
      },
      {
        numero: 6,
        titulo: "OH BUEN JESÚS",
        texto: [
        "Oh buen Jesús, yo creo firmemente",
        "que por mi amor estas en el altar",
        "que das tu cuerpo y sangre juntamente",
        "Al alma fiel en celestial manjar (2)",
        "Dulce maná y celestial comida",
        "gozo y salud de quien te come bien,",
        "ven sin tardar, mi Dios, mi luz, mi vida",
        "Desciende a mí hasta mi pecho ven (2)"
      ].join("\n")
      },
      {
        numero: 7,
        titulo: "OH BUEN JESÚS",
        texto: [
        "Oh buen Jesús, yo creo firmemente",
        "que por mi amor estas en el altar",
        "que das tu cuerpo y sangre juntamente",
        "Al alma fiel en celestial manjar (2)",
        "Dulce Jesús, constante y fino amante",
        "mi corazón se abrasa en santo amor",
        "si te olvidé hoy juro que constante",
        "He de vivir tan solo de tu amor (2)"
      ].join("\n")
      },
      {
        numero: 8,
        titulo: "SI YO NO TENGO AMOR",
        texto: [
        "Si ya no tengo amor",
        "yo nada soy Señor. (2)",
        "El amor es comprensivo",
        "el amor es servicial",
        "el amor no tiene envidia",
        "el amor no busca el mal.",
        "El amor nunca se irrita",
        "el amor no es descortés",
        "el amor no es egoísta",
        "el amor nunca es doblez",
        "El amor disculpa todo",
        "el amor es caridad",
        "no se alegra de lo injusto",
        "sólo goza en la verdad.",
        "El amor soporta todo",
        "el amor todo lo cree",
        "el amor todo lo espera",
        "el amor es siempre fe.",
        "Nuestra fe nuestra esperanza",
        "frente a Dios terminará",
        "el amor es algo eterno",
        "nunca, nunca pasará"
      ].join("\n")
      }
    ],
    luminosos: [
      {
        numero: 1,
        titulo: "QUE ALEGRÍA CUANDO ME DIJERON.",
        texto: [
        "(Coro)",
        "Qué alegría cuando me dijeron:",
        "“vamos a la casa del Señor”",
        "Ya están pisando nuestros pies,",
        "tus umbrales, Jerusalén.",
        "Jerusalén esta fundada como",
        "cuidad bien compacta.",
        "Allá suben las tribus,",
        "Las tribus del Señor.",
        "(Coro)",
        "Por mis hermanos y compañeros",
        "voy a decir: “La paz contigo”",
        "Por la casa del Señor, nuestro Dios,",
        "te deseo todo bien",
        "(Coro)"
      ].join("\n")
      },
      {
        numero: 2,
        titulo: "JUNTOS COMO HERMANOS",
        texto: [
        "Juntos como hermanos,",
        "miembros de una Iglesia,",
        "vamos caminando,",
        "al encuentro del Señor",
        "Un largo caminar,",
        "Por el desierto, bajo el sol",
        "No podemos avanzar",
        "Sin la ayuda del Señor.",
        "Unidos al rezar,",
        "Unidos en cada canción,",
        "Viviremos nuestra fe,",
        "Con la ayuda del Señor.",
        "La Iglesia en marcha está",
        "A un mundo nuevo vamos ya,",
        "Donde reinará el amor,",
        "Donde reinará la paz."
      ].join("\n")
      },
      {
        numero: 3,
        titulo: "ALTISIMO SEÑOR",
        texto: [
        "Altísimo Señor, que supiste juntar",
        "a un tiempo en el altar",
        "ser cordero y pastor,",
        "quisiera con fervor amar y recibir",
        "a quien por mi quiso morir.",
        "Cordero divinal por nuestro sumo bien",
        "inmolado en Salén, en tu puro raudal",
        "de gracia celestial, lava mi corazón",
        "que fiel te rinde adoración."
      ].join("\n")
      },
      {
        numero: 4,
        titulo: "ALTISIMO SEÑOR",
        texto: [
        "Altísimo Señor, que supiste juntar",
        "a un tiempo en el altar",
        "ser cordero y pastor,",
        "quisiera con fervor amar y recibir",
        "a quien por mi quiso morir.",
        "Suavísimo maná, que sabe a dulce miel",
        "ven, y del mundo vil nada más gustará",
        "Ven y se trocará del destierro cruel",
        "con tu dulzura la amarga hiel."
      ].join("\n")
      },
      {
        numero: 5,
        titulo: "ALTISIMO SEÑOR",
        texto: [
        "Altísimo Señor, que supiste juntar",
        "a un tiempo en el altar",
        "ser cordero y pastor,",
        "quisiera con fervor amar y recibir",
        "a quien por mi quiso morir.",
        "Oh convite real, dó sirve el Redentor,",
        "al siervo del Señor comida sin igual:",
        "pan de vida inmortal, ven a entrañarte en mi",
        "y quede yo trocado en ti."
      ].join("\n")
      },
      {
        numero: 6,
        titulo: "ALTISIMO SEÑOR",
        texto: [
        "Altísimo Señor, que supiste juntar",
        "a un tiempo en el altar",
        "ser cordero y pastor,",
        "quisiera con fervor amar y recibir",
        "a quien por mi quiso morir.",
        "Si osare a Ti venir, la muerte del pecador,",
        "y de celeste ardor das al justo vivir.",
        "ay, qué triste morir; de vida en el manjar",
        "letal veneno y muerte hallar."
      ].join("\n")
      },
      {
        numero: 7,
        titulo: "ALTISIMO SEÑOR",
        texto: [
        "Altísimo Señor, que supiste juntar",
        "a un tiempo en el altar",
        "ser cordero y pastor,",
        "quisiera con fervor amar y recibir",
        "a quien por mi quiso morir.",
        "Los ángeles al ver tal gloria y majestad,",
        "con profunda humildad adoran su poder,",
        "sin ellos merecer la dicha de gustar",
        "el pan del cielo, hecho manjar."
      ].join("\n")
      },
      {
        numero: 8,
        titulo: "EL SEÑOR ES MI LUZ",
        texto: [
        "El Señor es mi luz y mi salvación",
        "el Señor es la defensa de mi vida;",
        "si el Señor es mi luz, ¿a quién temeré?",
        "¿quién me hará temblar?",
        "Una cosa pido al Señor,",
        "habitar por siempre en su casa,",
        "gozar de la dulzura del Señor,",
        "contemplando su rostro santo.",
        "No me escondas tu rostro, Señor,",
        "buscaré todo el día tu rostro,",
        "si mi padre y mi madre",
        "me abandonan, el Señor me recogerá.",
        "Oh Señor, enséñame el camino,",
        "guíame por la senda verdadera,",
        "gozaré de la dicha del Señor",
        "en la tierra de la vida."
      ].join("\n")
      }
    ]
  }
};

