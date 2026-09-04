/* ==========================================================
   NOVENA DE SAN BENITO — ARCHIVO FÁCIL DE EDITAR

   Para modificar cada día, vaya a la sección:
   "CONTENIDO PARTICULAR DE CADA DÍA".

   En cada día solamente cambie:
   1. titulo
   2. nombreDelDia
   3. oracionDelDia

   No necesita repetir las oraciones comunes.
   ========================================================== */


// ==========================================================
// 1. ORACIONES DE LOS TRES BOTONES FLOTANTES
// ==========================================================

const ORACIONES_SAN_BENITO = {

  padreNuestro: `Padre nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu Reino;

hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal.

Amén.`,

  aveMaria: `Dios te salve, María, llena eres de gracia; el Señor es contigo. Bendita Tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús.

Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte.

Amén.`,

  gloria: `Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los siglos.

Amén.`

};


// ==========================================================
// 2. ORACIONES COMUNES PARA LOS NUEVE DÍAS
// ==========================================================

const SAN_BENITO_COMUNES = {

  señalDeLaCruz: `Por la señal de la santa cruz, de nuestros enemigos, líbranos, Señor, Dios nuestro. En el nombre del Padre y del Hijo y del Espíritu Santo. Amén.`,

  preparatoria: `Oración preparatoria para todos los días:

Te saludamos con filial afecto, oh glorioso Padre San Benito, obrador de maravillas, cooperador de Cristo en la obra de salvación de las almas. ¡Oh Patriarca de los monjes! Mira desde el cielo la viña que plantó tu mano. Multiplica el número de tus hijos, y santifícalos. Protege de un modo especial a cuantos nos ponemos con filial cariño bajo tu amparo y filial protección. Ruega por los enfermos, por los tentados, por los afligidos, por los pobres, y por nosotros que te somos devotos. Alcánzanos a todos una muerte tranquila y santa como la tuya. Aparta de nosotros en aquella hora suprema las asechanzas del enemigo, y aliéntanos con tu dulce presencia.

*Ahora consíguenos la gracia especial que te pedimos en esta novena...*`,

  indicacionFinal: `Concluir con la oración final.`,

  oracionFinal: `Oración final para todos los días:

¡Oh glorioso San Benito, que desde el cielo eres padre piadoso para nosotros tus devotos! Tu gran poder ante Dios se reconoce hoy, más que nunca, gracias a la medalla que viene honrada con tu nombre, por la multitud de prodigios y favores que por su medio Dios nos ofrece. Ruega por todos los que acudimos a ti. Alcánzanos del Señor, todas las gracias que nos son necesarias durante esta vida y especialmente la gracia por la cual hacemos esta novena. San Benito, ruega por nosotros.

Concluir con:

• un Padrenuestro
• Avemaría
• Gloria`

};


// ==========================================================
// 3. CONTENIDO PARTICULAR DE CADA DÍA
// Modifique únicamente estos tres campos en cada bloque.
// ==========================================================

const DIAS_SAN_BENITO = [

  // -------------------- DÍA 1 --------------------
  {
    titulo: `Día 1 Novena de San Benito`,
    nombreDelDia: `Primer día de la Novena a San Benito:`,
    oracionDelDia: `¡Oh glorioso San Benito, que desde tu infancia reconociste la vanidad del mundo y únicamente deseaste los bienes eternos! Alcánzanos un vivo deseo del cielo y que recordemos frecuentemente a Dios, nuestro último fin, y hacia Él ordenemos toda nuestra vida para que en todo Él sea glorificado.

*San Benito, ruega por nosotros. Tres Avemarías.*`
  },

  // -------------------- DÍA 2 --------------------
  {
    titulo: `Día 2 Novena de San Benito`,
    nombreDelDia: `Segundo día de la Novena a San Benito:`,
    oracionDelDia: `¡Oh glorioso San Benito, humilde de corazón, que supiste desdeñar las alabanzas de los hombres! Alcánzanos la humildad, tú que amaste a Dios sobre todas las cosas y le entregaste sin reservas tu corazón, consíguenos también el amor de Dios.

*San Benito, ruega por nosotros. Tres Avemarías.*`
  },

  // -------------------- DÍA 3 --------------------
  {
    titulo: `Día 3 Novena de San Benito`,
    nombreDelDia: `Tercer día de la Novena a San Benito:`,
    oracionDelDia: `¡Oh glorioso San Benito, que consagraste tus labios a la oración y cantaste noche y día las alabanzas divinas! Alcánzanos el espíritu de oración. Tú, que cuál lirio entre espinas, guardaste una castidad angelical por medio de la humildad, de la vigilancia continua, de la oración y de la mortificación de los sentidos, consíguenos el don de la pureza. 

*San Benito, ruega por nosotros. Tres Avemarías.*`
  },

  // -------------------- DÍA 4 --------------------
  {
    titulo: `Día 4 Novena de San Benito`,
    nombreDelDia: `Cuarto día de la Novena a San Benito:`,
    oracionDelDia: `¡Oh glorioso San Benito, que venciste al demonio y triunfaste de sus engaños! Alcánzanos la gracia de resistir sus sugestiones y de huir de toda ocasión de pecado. Tú que enseñando una vida austera, de renuncia y trabajo, aborreciste la ociosidad, inspíranos amor al trabajo y a la abnegación de nosotros mismo para seguir a Cristo.

*San Benito, ruega por nosotros. Tres Avemarías.*`
  },

  // -------------------- DÍA 5 --------------------
  {
    titulo: `Día 5 Novena de San Benito`,
    nombreDelDia: `Quinto día de la Novena a San Benito:`,
    oracionDelDia: `¡Oh glorioso San Benito, que amaste el silencio, y no abriste la boca jamás a palabras ligeras e impuras, a quejas, murmuraciones, y a juicios contra el amor al prójimo! Alcánzanos la gracia de no decir jamás palabras impuras y contra la caridad, a perdonar y guardar nuestra lengua de todo pecado.

*San Benito, ruega por nosotros. Tres Avemarías.*`
  },

  // -------------------- DÍA 6 --------------------
  {
    titulo: `Día 6 Novena de San Benito`,
    nombreDelDia: `Sexto día de la Novena a San Benito:`,
    oracionDelDia: `¡Oh glorioso San Benito, que fuiste blanco de persecuciones y guardaste la paz de tu alma por medio de la dulzura de la paciencia! Alcánzanos el don de la paciencia y la gracia de perdonar las ofensas, tú que perdonaste a los que atentaron contra tu vida y te expulsaron de tu país, y que misericordiosamente pediste al Señor les perdonara, llorando su ceguera y terrible fin. 

*San Benito, ruega por nosotros. Tres Avemarías.*`
  },

  // -------------------- DÍA 7 --------------------
  {
    titulo: `Día 7 Novena de San Benito`,
    nombreDelDia: `Séptimo día de la Novena a San Benito:`,
    oracionDelDia: `¡Oh glorioso San Benito, que animado por un ardiente celo para asistir al prójimo en sus necesidades, instruiste a los ignorantes, socorriste a los pobres, curaste a los enfermos, resucitaste a los muertos, libraste a los cautivos del demonio y de sus pasiones, consolaste a los afligidos y convertiste a los pecadores! Consíguenos la gracia de amar al prójimo y de hacer con él las obras de misericordia.

*San Benito, ruega por nosotros. Tres Avemarías.*`
  },

  // -------------------- DÍA 8 --------------------
  {
    titulo: `Día 8 Novena de San Benito`,
    nombreDelDia: `Octavo día de la Novena a San Benito:`,
    oracionDelDia: `¡Oh glorioso San Benito, que inundaste de consuelo el corazón de tu hermana Santa Escolástica, llenándolo del amor de Dios y de las bienaventuranzas del cielo! Concédenos la gracia de santificar nuestros afectos más queridos.

*San Benito, ruega por nosotros. Tres Avemarías.*`
  },

  // -------------------- DÍA 9 --------------------
  {
    titulo: `Día 9 Novena de San Benito`,
    nombreDelDia: `Noveno día de la Novena a San Benito:`,
    oracionDelDia: `¡Oh glorioso San Benito, cuya alma en tu dichosa muerte, fue elevada al cielo en medio de ángeles y santos, siendo consolados tus discípulos por la revelación de tu gloria! Concédenos del Señor, la gracia de la perseverancia final, de una buena muerte y de tu asistencia e intercesión en nuestro último día.

*San Benito, ruega por nosotros. Tres Avemarías.*`
  }

];


// ==========================================================
// 4. ARMADO AUTOMÁTICO — NO MODIFICAR
// ==========================================================

const SAN_BENITO_CONTENT = {
  prayers: ORACIONES_SAN_BENITO,

  days: DIAS_SAN_BENITO.map((dia) => ({
    texto: `${dia.titulo}

*${SAN_BENITO_COMUNES.señalDeLaCruz}*

${SAN_BENITO_COMUNES.preparatoria}

${dia.nombreDelDia}

${dia.oracionDelDia}

${SAN_BENITO_COMUNES.indicacionFinal}`,

    texto2: SAN_BENITO_COMUNES.oracionFinal
  }))
};
