/* ==========================================================
   ORACIONES — ARCHIVO FÁCIL DE EDITAR
   Cambie solamente los textos entre comillas invertidas (`).
   ========================================================== */

const GLORIA_TEXTO = `Gloria a Dios en el cielo, y en la tierra paz a los hombres que ama el Señor.

Por tu inmensa gloria te alabamos, te bendecimos, te adoramos, te glorificamos, te damos gracias, Señor Dios, Rey celestial, Dios Padre todopoderoso.

Señor, Hijo único, Jesucristo. Señor Dios, Cordero de Dios, Hijo del Padre; tú que quitas el pecado del mundo, ten piedad de nosotros.

Tú que quitas el pecado del mundo, atiende nuestra súplica; tú que estás sentado a la derecha del Padre, ten piedad de nosotros.

Porque sólo tú eres Santo, sólo tú Señor, sólo tú Altísimo Jesucristo, con el Espíritu Santo en la gloria de Dios Padre.

Amén.`;

const ORACIONES_GENERALES = {
  padreNuestro: { titulo: 'Padre Nuestro', texto: `Padre nuestro, que estás en el cielo,
santificado sea tu Nombre;
venga a nosotros tu Reino;
hágase tu voluntad en la tierra como en el cielo.

Danos hoy nuestro pan de cada día;
perdona nuestras ofensas,
como también nosotros perdonamos a los que nos ofenden;
no nos dejes caer en la tentación, y líbranos del mal.

Amén.` },
  aveMaria: { titulo: 'Ave María', texto: `Dios te salve, María,
llena eres de gracia;
el Señor es contigo.
Bendita Tú eres
entre todas las mujeres,
y bendito es el fruto de tu vientre, Jesús.

Santa María, Madre de Dios,
ruega por nosotros, pecadores,
ahora y en la hora de nuestra muerte.

Amén.` },
  credo: { titulo: 'Credo', texto: `Credo Niceno:

Creo en un solo Dios, Padre todopoderoso, Creador del Cielo y de la tierra, de todo lo visible y lo invisible. Creo en un solo Señor Jesucristo, Hijo único de Dios, nacido del Padre antes de todos los siglos: Dios de Dios, Luz de Luz, Dios verdadero de Dios verdadero, engendrado, no creado, de la misma naturaleza que el Padre, por quien todo fue hecho; que, por nosotros los hombres y por nuestra salvación bajó del cielo, y por obra del Espíritu Santo se encarnó de María, la Virgen, y se hizo hombre; y por nuestra causa fue crucificado en tiempos de Poncio Pilato: padeció y fue sepultado, y resucitó al tercer día, según las Escrituras y subió al cielo y está sentado a la derecha del Padre; y de nuevo vendrá con gloria para juzgar a vivos y muertos, y su reino no tendrá fin. Creo en el Espíritu Santo, Señor y dador de vida, que procede del Padre y del Hijo, que con el Padre y el Hijo recibe una misma adoración y gloria, y que habló por los profetas. Creo en la Iglesia, que es una santa, católica y apostólica. Confieso que hay un solo Bautismo para el perdón de los pecados. Espero la resurrección de los muertos y la vida del mundo futuro.

Amén.

Credo de los Apóstoles:

Creo en Dios Padre todopoderoso, Creador del cielo y de la tierra. Creo en Jesucristo, su único Hijo, nuestro Señor; que fue concebido por obra y gracia del Espíritu Santo, nació de Santa María Virgen; padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado; descendió a los infiernos, al tercer día resucitó de entre los muertos; subió a los cielos y está sentado a la diestra de Dios, Padre todopoderoso. Desde allí ha de venir a juzgar a los vivos y a los muertos. Creo en el Espíritu Santo; la Santa Iglesia Católica, la Comunión de los Santos; el perdón de los pecados, la resurrección de la carne; y la vida eterna.

Amén.` },
  gloria: { titulo: 'Gloria', texto: GLORIA_TEXTO },
  comunionEspiritual: { titulo: 'Comunión Espiritual', texto: `¡Oh Jesús mío! Creo que estás presente en el Santísimo Sacramento del Altar, te amo sobre todas las cosas y deseo recibirte dentro de mi alma.

Ya que no puedo hacerlo ahora sacramentalmente, ven a lo menos espiritualmente a mi corazón.

Como si ya te hubiera recibido, te abrazo y me uno todo a ti.

No permitas, Señor, que me vuelva jamás a apartarme de Ti.

Amen` },
  caminataEncarnacion: { titulo: 'Caminata de la Encarnación', texto: `Para casos extremadamente difíciles:

Se camina mientras se reza devotamente.

Dios te salve María, llena eres de gracia. El Señor es contigo. Bendita tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús.

Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén.

Oh Virgen de la Encarnación, mil veces te saludamos, mil parabienes te damos, por el gusto que tuviste cuando Dios en ti encarnó, pues eres tan poderosa, Oh Virgen y Madre de Dios, concédeme lo que te pido por amor de Dios, por amor de Dios.

*Se medita y se pide la primera gracia.*

----------

Dios te salve María, llena eres de gracia. El Señor es contigo. Bendita tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús.

Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén.

Oh Virgen de la Encarnación, mil veces te saludamos, mil parabienes te damos, por el gusto que tuviste cuando Dios en ti encarnó, pues eres tan poderosa, Oh Virgen y Madre de Dios, concédeme lo que te pido por amor de Dios, por amor de Dios.

*Se medita y se pide la primera gracia.*

----------

Dios te salve María, llena eres de gracia. El Señor es contigo. Bendita tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús.

Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén.

Oh Virgen de la Encarnación, mil veces te saludamos, mil parabienes te damos, por el gusto que tuviste cuando Dios en ti encarnó, pues eres tan poderosa, Oh Virgen y Madre de Dios, concédeme lo que te pido por amor de Dios, por amor de Dios.

*Se medita y se pide la primera gracia.*

Acordaos, oh piadosísima María, que jamás se ha oído decir que persona que a vos se acogiere y pidiese socorro, hubiese salido desamparada. Animada con tal confianza, a vos acudo, Oh Virgen de la Encarnación.

Oh Madre de mi Señor Jesucristo, a vos vengo, a vos me presento con temor de mis pecados; no queráis menospreciar mis oraciones y mis palabras. Oh Madre mía, por el Misterio de tu Santísima Encarnación, oídlas y cumplidlas con misericordia, por amor de Dios. Amén.

Bendito y alabado sea el Santísimo Sacramento del Altar en el cielo, en la tierra y en todo lugar.

Por la persona propagadora de esta caminata:

Dios te salve María, llena eres de gracia. El Señor es contigo. Bendita tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús.

Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte.

Amén.`, paginaCompleta: true },
  angelNavidad: { titulo: 'Oración al Ángel de la Navidad', texto: `El 21 de diciembre desciende el Ángel de la Navidad a la tierra y, durante una semana, hasta el 28 de diciembre, activa en los corazones que lo piden regalos espirituales a través de la GRACIA.

La Gracia de Dios actúa a través del poder del ESPÍRITU SANTO, y el poder del Espíritu Santo desciende a través del elemento FUEGO.

El 21 de diciembre podemos encender una vela blanca e invocar al Ángel de la Navidad y decirle que lo recibimos en nuestro corazón para que active los regalos espirituales disponibles.

Estos regalos son DONES Y FUERZAS SAGRADAS; cada uno debe pedir el que necesita.

El DON de la claridad, para tomar decisiones correctas el próximo año.

El DON de la Alegría, para disfrutar de la vida.

El DON de la creatividad, para vivir en abundancia de nuestras capacidades espirituales.

El DON de la paz, para vivir en paz y llevar la paz a otros a través de la palabra inspirada por Dios.

El DON de la Sabiduría, para actuar con discernimiento, guiados por las fuerzas de luz.

El DON de la valentía, para tener valor y romper mandatos.

El DON de la FE, para CONFIAR en el Poder de Dios en nuestra vida y en su voluntad, dejando que la FE nos abra nuevas puertas.

El DON de la Sanación, para ser canales e instrumentos de los médicos del cielo.

Hay MUCHOS DONES que Dios regala a través del Ángel de la Navidad… ¿Cuál vas a pedir? Puedes pedir más de uno, siempre y cuando estemos conectados al compromiso de estar conscientes de lo que pedimos y para qué.

En estos días, más que nunca, podemos «meditar» al estar en silencio y escuchar a Dios dándonos respuestas. Pídele lo que necesites, aquiétate y luego escribe lo que sientas. Él pondrá en tus pensamientos las palabras. Escribe frases, símbolos, letras… todo será información.

¡A aprovechar entonces el PORTAL DEL SOLSTICIO y a pedir al Ángel de la Navidad, que hoy desciende para darnos bendiciones!

¡Con esta oración activarás el PODER de la Gracia!

Oración:

Ángel de la Navidad, te invoco bajo el nombre de Dios y te recibo en mi corazón. Que la fuerza espiritual disponible descienda en mi vida, en mi hogar y en mi camino, trayendo luz, paz y amor para los míos y para todos los seres vivos del mundo, para que comencemos a vivir con FE y en conexión con el alma. Bendícenos y ayúdanos. Deseo pedirte el DON «…» (pedir dones) para servir a Dios y ser un instrumento del AMOR, DE LA VERDAD Y DE LA LUZ. ¡Amén!

Que en este Día de Gracia, la fuerza de Dios, que es Padre, Hijo y Espíritu Santo, descienda en nuestros corazones.

¡Que la paz esté contigo!`, paginaCompleta: true }
};

const ORDEN_ORACIONES = [
  'padreNuestro',
  'aveMaria',
  'credo',
  'gloria',
  'comunionEspiritual',
  'caminataEncarnacion',
  'angelNavidad'
];
