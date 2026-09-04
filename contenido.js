/* ==========================================================
   ARCHIVO FÁCIL DE EDITAR

   1. Las ORACIONES COMUNES se escriben una sola vez.
   2. Cada día tiene su propia sección claramente identificada.
   3. Cambie solamente el texto entre comillas invertidas (`).
   4. No borre las comas, llaves ni nombres de los campos.
   ========================================================== */


// ==========================================================
// 1. ORACIONES DE LOS MODALES
// ==========================================================

const ORACIONES_MODALES = {

  padreNuestro: `Padre nuestro, que estás en el cielo,

santificado sea tu Nombre;

venga a nosotros tu Reino;

hágase tu voluntad en la tierra como en el cielo.

Danos hoy nuestro pan de cada día;

perdona nuestras ofensas,

como también nosotros perdonamos a los que nos ofenden;

no nos dejes caer en la tentación, y líbranos del mal.

Amén.`,

  diosTeSalve: `Dios te salve, María,

llena eres de gracia;

el Señor es contigo.

Bendita Tú eres

entre todas las mujeres,

y bendito es el fruto de tu vientre, Jesús.

Santa María, Madre de Dios,

ruega por nosotros, pecadores,

ahora y en la hora de nuestra muerte. Amén

Gloria al Padre, y al Hijo, y al Espíritu Santo.
Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.`

};


// ==========================================================
// 2. ORACIONES COMUNES PARA LOS NUEVE DÍAS
// Se mostrarán automáticamente antes y después de cada día.
// ==========================================================

const ORACIONES_COMUNES = {

  señalDeLaCruz: `Por la señal de la santa cruz, de nuestros enemigos, líbranos, Señor, Dios nuestro. En el nombre del Padre y del Hijo y del Espíritu Santo. Amén.`,

  actoDeContricion: `Acto de contrición para todos los días

Pésame Dios mío y me arrepiento de todo corazón de haberte ofendido.
Pésame por el infierno que merecí y por el cielo que perdí;
pero mucho más me pesa porque pecando ofendí un Dios tan bueno y tan grande como vos;
antes querría haber muerto que haberle ofendido,
y propongo firmemente ayudado por tu divina gracia,
no pecar más y evitar las ocasiones próximas de pecado.

Amen`,

  oracionInicial: `Oración inicial:

Santísima Virgen María ”la que desata los nudos", te ofrezco esta novena pidiéndote por las siguientes intenciones:(aquí se dicen y recuerdan los favores que se quieren alcanzar).`,

  oracionNuestraSeñora: `Oración a Nuestra Señora la que desata los nudos:

Santa María, llena de la presencia de Dios, durante los días de tu vida aceptaste con toda humildad la voluntad del Padre, y el maligno nunca fue capaz de enredarte con sus confusiones. Ya junto a tu hijo intercediste por nuestras dificultades, y con toda sencillez y paciencia, nos diste ejemplo de cómo desenredar la madeja de nuestras vidas. Y al quedarte para siempre como Madre Nuestra, pones en orden y haces más claros los lazos que nos unen al Señor.

Santa María, Madre de Dios y Madre Nuestra, tu que con corazón materno desatas los nudos que entorpecen nuestra vida, te pedimos que nos libres de las ataduras y confusiones con que nos hostiga el que es nuestro enemigo. Por tu gracia, por tu intercesión, con tu ejemplo, librarnos de todo mal, Señora Nuestra, y desata los nudos que impiden que nos unamos a Dios, para que, libres de toda confusión y error, lo hallemos en todas las cosas, tengamos en El puestos nuestros corazones y podamos servirle en nuestros hermanos.

Amen.`,

  consagracionAMaria: `Oración de Consagración a María:

Señora y Madre mía, Virgen Santa María, la que desata los nudos; a tus pies me encuentro para consagrarme a ti. Con filial afecto te ofrezco en este día cuanto soy y cuanto tengo: mis ojos, para mirarte; mis oídos, para escucharte; mi voz, para cantar tus alabanzas; mi vida, para servirte; mi corazón, para amarte.

Acepta, Madre mía el ofrecimiento que te hago y colócame junto a tu corazón inmaculado. Ya que soy todo tuyo, Madre de misericordia, la que desata los nudos que aprisionan nuestro pobre corazón, guárdame y protegedme como posesión tuya. No permitas que me deje seducir por el maligno, ni que mi corazón quede enredado en sus engaños.

Enséñame a aceptar los límites de mi condición humana, sin olvidar que puedo superarme con la ayuda de la gracia y que agradezca siempre a Dios por mi existencia. Ilumíname para que no deseche al Creador por las criaturas, ni me aparte del camino que él pensó para mí.

Amen.

En el nombre del Padre, del Hijo y del Espíritu Santo.`

};


// ==========================================================
// 3. CONTENIDO PARTICULAR DE CADA DÍA
// Edite cada bloque por separado.
// ==========================================================

const DIAS_NOVENA = [

  // -------------------- DÍA 1 --------------------
  {
    titulo: `Día 1 Novena de la Virgen Desatanudos`,
    nombreDelDia: `Primer Día:`,
    cita: `“Ella dará a luz un hijo, a quien pondrás el nombre de Jesús, porque el salvara a su pueblo de todos sus pecados”. (Mt 1, 21)`,
    tituloReflexion: `Breve reflexión:`,
    reflexion: `Jesús es el gran desatador de nuestros pecados (nudos); pero también la Virgen María es la que le dio su carne y su sangre para que hecho hombre pudiera salvarnos del pecado y de la muerte. Dios se valió de una mujer para salvarnos; también se quiere valer de nosotros, como instrumentos para que su Hijo Jesús nos siga salvando.`
  },

  // -------------------- DÍA 2 --------------------
  {
    titulo: `Día 2 Novena de la Virgen Desatanudos`,
    nombreDelDia: `Segundo Día:`,
    cita: `“Ella dará a luz un hijo, a quien pondrás el nombre de Jesús, porque el salvara a su pueblo de todos sus pecados”. (Mt 1, 21)`,
    tituloReflexion: `Breve reflexión:`,
    reflexion: `Jesús es el gran desatador de nuestros pecados (nudos); pero también la Virgen María es la que le dio su carne y su sangre para que hecho hombre pudiera salvarnos del pecado y de la muerte. Dios se valió de una mujer para salvarnos; también se quiere valer de nosotros, como instrumentos para que su Hijo Jesús nos siga salvando.`
  },

  // -------------------- DÍA 3 --------------------
  {
    titulo: `Día 3 Novena de la Virgen Desatanudos`,
    nombreDelDia: `Tercer Día:`,
    cita: `“Ella dará a luz un hijo, a quien pondrás el nombre de Jesús, porque el salvara a su pueblo de todos sus pecados”. (Mt 1, 21)`,
    tituloReflexion: `Breve reflexión:`,
    reflexion: `Jesús es el gran desatador de nuestros pecados (nudos); pero también la Virgen María es la que le dio su carne y su sangre para que hecho hombre pudiera salvarnos del pecado y de la muerte. Dios se valió de una mujer para salvarnos; también se quiere valer de nosotros, como instrumentos para que su Hijo Jesús nos siga salvando.`
  },

  // -------------------- DÍA 4 --------------------
  {
    titulo: `Día 4 Novena de la Virgen Desatanudos`,
    nombreDelDia: `Cuarto Día:`,
    cita: `“Ella dará a luz un hijo, a quien pondrás el nombre de Jesús, porque el salvara a su pueblo de todos sus pecados”. (Mt 1, 21)`,
    tituloReflexion: `Breve reflexión:`,
    reflexion: `Jesús es el gran desatador de nuestros pecados (nudos); pero también la Virgen María es la que le dio su carne y su sangre para que hecho hombre pudiera salvarnos del pecado y de la muerte. Dios se valió de una mujer para salvarnos; también se quiere valer de nosotros, como instrumentos para que su Hijo Jesús nos siga salvando.`
  },

  // -------------------- DÍA 5 --------------------
  {
    titulo: `Día 5 Novena de la Virgen Desatanudos`,
    nombreDelDia: `Quinto Día:`,
    cita: `“Ella dará a luz un hijo, a quien pondrás el nombre de Jesús, porque el salvara a su pueblo de todos sus pecados”. (Mt 1, 21)`,
    tituloReflexion: `Breve reflexión:`,
    reflexion: `Jesús es el gran desatador de nuestros pecados (nudos); pero también la Virgen María es la que le dio su carne y su sangre para que hecho hombre pudiera salvarnos del pecado y de la muerte. Dios se valió de una mujer para salvarnos; también se quiere valer de nosotros, como instrumentos para que su Hijo Jesús nos siga salvando.`
  },

  // -------------------- DÍA 6 --------------------
  {
    titulo: `Día 6 Novena de la Virgen Desatanudos`,
    nombreDelDia: `Sexto Día:`,
    cita: `“Ella dará a luz un hijo, a quien pondrás el nombre de Jesús, porque el salvara a su pueblo de todos sus pecados”. (Mt 1, 21)`,
    tituloReflexion: `Breve reflexión:`,
    reflexion: `Jesús es el gran desatador de nuestros pecados (nudos); pero también la Virgen María es la que le dio su carne y su sangre para que hecho hombre pudiera salvarnos del pecado y de la muerte. Dios se valió de una mujer para salvarnos; también se quiere valer de nosotros, como instrumentos para que su Hijo Jesús nos siga salvando.`
  },

  // -------------------- DÍA 7 --------------------
  {
    titulo: `Día 7 Novena de la Virgen Desatanudos`,
    nombreDelDia: `Séptimo Día:`,
    cita: `“Ella dará a luz un hijo, a quien pondrás el nombre de Jesús, porque el salvara a su pueblo de todos sus pecados”. (Mt 1, 21)`,
    tituloReflexion: `Breve reflexión:`,
    reflexion: `Jesús es el gran desatador de nuestros pecados (nudos); pero también la Virgen María es la que le dio su carne y su sangre para que hecho hombre pudiera salvarnos del pecado y de la muerte. Dios se valió de una mujer para salvarnos; también se quiere valer de nosotros, como instrumentos para que su Hijo Jesús nos siga salvando.`
  },

  // -------------------- DÍA 8 --------------------
  {
    titulo: `Día 8 Novena de la Virgen Desatanudos`,
    nombreDelDia: `Octavo Día:`,
    cita: `“Ella dará a luz un hijo, a quien pondrás el nombre de Jesús, porque el salvara a su pueblo de todos sus pecados”. (Mt 1, 21)`,
    tituloReflexion: `Breve reflexión:`,
    reflexion: `Jesús es el gran desatador de nuestros pecados (nudos); pero también la Virgen María es la que le dio su carne y su sangre para que hecho hombre pudiera salvarnos del pecado y de la muerte. Dios se valió de una mujer para salvarnos; también se quiere valer de nosotros, como instrumentos para que su Hijo Jesús nos siga salvando.`
  },

  // -------------------- DÍA 9 --------------------
  {
    titulo: `Día 9 Novena de la Virgen Desatanudos`,
    nombreDelDia: `Noveno Día:`,
    cita: `“Ella dará a luz un hijo, a quien pondrás el nombre de Jesús, porque el salvara a su pueblo de todos sus pecados”. (Mt 1, 21)`,
    tituloReflexion: `Breve reflexión:`,
    reflexion: `Jesús es el gran desatador de nuestros pecados (nudos); pero también la Virgen María es la que le dio su carne y su sangre para que hecho hombre pudiera salvarnos del pecado y de la muerte. Dios se valió de una mujer para salvarnos; también se quiere valer de nosotros, como instrumentos para que su Hijo Jesús nos siga salvando.`
  }

];


// ==========================================================
// 4. ARMADO AUTOMÁTICO — NO ES NECESARIO EDITAR ESTA PARTE
// ==========================================================

const NOVENA_CONTENT = {
  padreNuestro: ORACIONES_MODALES.padreNuestro,
  diosTeSalve: ORACIONES_MODALES.diosTeSalve,

  days: DIAS_NOVENA.map((dia) => ({
    texto: `${dia.titulo}

${ORACIONES_COMUNES.señalDeLaCruz}

${ORACIONES_COMUNES.actoDeContricion}

${ORACIONES_COMUNES.oracionInicial}

${dia.nombreDelDia}

${dia.cita}

${dia.tituloReflexion}

${dia.reflexion}`,

    texto2: `${ORACIONES_COMUNES.oracionNuestraSeñora}

${ORACIONES_COMUNES.consagracionAMaria}`
  }))
};
