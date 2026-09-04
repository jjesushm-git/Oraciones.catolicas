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
    cita: `”El ángel le respondió; El Espíritu Santo descenderá sobre ti y el poder del Altísimo te cubrirá con su sombra. Por eso el niño será Santo y será llamado Hijo de Dios." (Lc 1, 21)`,
    tituloReflexion: `Breve reflexión:`,
    reflexion: `Es Dios, Espíritu Santo, el que fecundo el vientre purísimo de María para que su Hijo, Nuestro Señor Jesucristo, naciera como hombre. Debido al pecado original es que no tenemos la posibilidad de nacer santos; pero desde el mismo momento en el que somos bautizados, acto por el cual se nos libra del pecado original, nuestro objetivo debe y tiene que ser el alcanzar la santidad, es decir , estar junto a Jesús en la vida eterna.`
  },

  // -------------------- DÍA 3 --------------------
  {
    titulo: `Día 3 Novena de la Virgen Desatanudos`,
    nombreDelDia: `Tercer Día:`,
    cita: `”Maria dijo entonces: yo soy la servidora del Señor, que se cumpla en mi lo que has dicho. Y el ángel se alejo". (Lc 1, 38)`,
    tituloReflexion: `Breve reflexión:`,
    reflexion: `Debemos tratar de imitar la actitud de servicio de María. Es necesario que estemos con aquellas personas que tienen la necesidad de la Palabra de Dios, la que puede ser transmitida también con los pequeños actos buenos que realizamos cotidianamente.`
  },

  // -------------------- DÍA 4 --------------------
  {
    titulo: `Día 4 Novena de la Virgen Desatanudos`,
    nombreDelDia: `Cuarto Día:`,
    cita: `”Vayamos a Belén y veamos lo que ha sucedido... fueron rápidamente y encontraron a María y al recién nacido acostado en el pesebre. Al verlo contaron lo que había oído decir de este niño... mientras tanto, María conservaba estas cosas y las meditaba en su corazón." (Lc 2, 15-19)`,
    tituloReflexion: `Breve reflexión:`,
    reflexion: `Es nuestra misión como cristianos y como miembros de una misma Iglesia, el difundir a todo el mundo la Buena Noticia del nacimiento de Nuestro Señor Jesucristo. Para esto debemos alimentarnos permanentemente de su palabra en la Santa Misa y, al igual que María, guardarla y meditarla en nuestro corazón.`
  },

  // -------------------- DÍA 5 --------------------
  {
    titulo: `Día 5 Novena de la Virgen Desatanudos`,
    nombreDelDia: `Quinto Día:`,
    cita: `”Su padre y su madre estaban admirados por lo que oían decir de Jesús. El anciano Simeón, después de bendecirlos, dijo a María, la madre: “Este niño será causa de caída y elevación para muchos en Israel; será signo de contradicción, y a ti mismo una espada te atravesara el corazón."(Lc 2, 33-35)`,
    tituloReflexion: `Breve reflexión:`,
    reflexion: `María, siendo Madre de Cristo, siempre hizo lo que Él le dijo. Imitemos permanentemente su obediencia a la voluntad de Dios y escuchémoslo día a día desde el Evangelio donde Jesús nos dice que quiere que hagamos.`
  },

  // -------------------- DÍA 6 --------------------
  {
    titulo: `Día 6 Novena de la Virgen Desatanudos`,
    nombreDelDia: `Sexto Día:`,
    cita: `”Jesús le respondió: Mujer, ¿qué tenemos que ver nosotros? Mi hora no ha llegado todavía. Pero su madre dijo a los sirvientes: Hagan todo lo que Él les diga." (Jn 2, 4-5)`,
    tituloReflexion: `Breve reflexión:`,
    reflexion: ``
  },

  // -------------------- DÍA 7 --------------------
  {
    titulo: `Día 7 Novena de la Virgen Desatanudos`,
    nombreDelDia: `Séptimo Día:`,
    cita: `”Pidan y se les dará, busquen y encontraran, llamen y se les abrirá. Porque todo el que pide recibe, el que busca encuentra; y al que llame se le abrirá."(Mt 7, 7-8)`,
    tituloReflexion: `Breve reflexión:`,
    reflexion: `La única manera de entablar un dialogo con Cristo o con María es a través de la oración. La oración hecha con fe es el arma más poderosa para luchar contra las confusiones con que nos hostiga el que es nuestro enemigo. No olvidemos que Dios nos escucha siempre, pero a veces no nos da lo que pedimos sino lo que verdaderamente necesitamos.`
  },

  // -------------------- DÍA 8 --------------------
  {
    titulo: `Día 8 Novena de la Virgen Desatanudos`,
    nombreDelDia: `Octavo Día:`,
    cita: `”Al ver a la madre y cerca de ella al discípulo a quien él amaba, Jesús le dijo: Mujer aquí tienes a tu hijo. Luego dijo al discípulo: Aquí tienes a tu madre, Y desde aquel momento, el discípulo la recibió en su casa." (Jn 19, 26-27)`,
    tituloReflexion: `Breve reflexión:`,
    reflexion: `Tanto es el amor que nos tiene Jesús, que antes de morir nos dejó a María, su propia madre, para que nos cuidara y nos guiara por el camino que Dios preparo para cada uno de nosotros.`
  },

  // -------------------- DÍA 9 --------------------
  {
    titulo: `Día 9 Novena de la Virgen Desatanudos`,
    nombreDelDia: `Noveno Día:`,
    cita: `”Los apóstoles, íntimamente unidos, se dedicaban a la oración en compañía de algunas mujeres; de María, la madre de Jesús....” y “ al llegar el día de Pentecostés, todos quedaron llenos del Espíritu Santo". (Hch 1, 14 y 2, 1.4)`,
    tituloReflexion: `Breve reflexión:`,
    reflexion: `El Padre nos envía en la fiesta de Pentecostés al Espíritu Santo para que obtengamos la fuerza necesaria para poder transmitir su mensaje. Esa fuerza nos es dada especialmente en el sacramento de la Confirmación junto con sus siete dones y también cada vez que lo pedimos humilde y confiadamente en la oración.`
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
