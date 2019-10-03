const models = require("../models");

const doSeed = async () => {
  await Promise.all([models.Poet.deleteMany({}), models.Poem.deleteMany({})]);

  const octavio = new models.Poet({
    author: "Octavio Paz",
    origin: "Mexicano",
    bio:
      "Poeta, ensayista, dramaturgo y diplomático mexicano. Obtuvo el premio Nobel de literatura en 1990 y el premio Cervantes en 1981.",
    image: "http://localhost:5000/img/octavio-paz.png"
  });

  const jose_emilio = new models.Poet({
    author: "José Emilio Pacheco",
    origin: "Mexicano",
    bio:
      "Famoso escritor mexicano principalmente por su poesía, aunque cultivó con éxito también la crónica, la novela, el cuento, el ensayo y la traducción.",
    image: "http://localhost:5000/img/jose-emilio-pacheco.png"
  });

  const amado_nervo = new models.Poet({
    author: "Amado Nervo",
    origin: "Mexicano",
    bio:
      "Poeta y escritor mexicano, perteneciente al movimiento modernista. Fue miembro correspondiente de la Academia Mexicana de la Lengua, no pudo ser miembro de número por residir en el extranjero.",
    image: "http://localhost:5000/img/jose-emilio-pacheco.png"
  });

  const federico_garcia_lorca = new models.Poet({
    author: "Federico García Lorca",
    origin: "Español",
    bio:
      "Poeta, dramaturgo y prosista español, conocido por su destreza en muchas otras artes. Adscrito a la generación del 27, fue el poeta de mayor influencia y popularidad de la literatura española del siglo xx.",
    image: "http://localhost:5000/img/federico_garcia_lorca.png"
  });

  const jaime_sabines = new models.Poet({
    author: "Jaime Sabines",
    origin: "Mexicano",
    bio:
      "Poeta y político mexicano, considerado como uno de los grandes poetas mexicanos del siglo XX.",
    image: "http://localhost:5000/img/jaime-sabines.png"
  });

  const julio_cortazar = new models.Poet({
    author: "Julio Cortázar",
    origin: "Argentino",
    bio:
      "Escritor, traductor e intelectual argentino. Sin renunciar a su nacionalidad argentina, optó por la nacionalidad francesa en 1981, en protesta contra el régimen militar argentino",
    image: "http://localhost:5000/img/julio-cortazar.png"
  });

  const justo_sierra = new models.Poet({
    author: "Justo Sierra",
    origin: "Mexicano",
    bio:
      "Escritor, historiador, periodista, poeta, político y filósofo mexicano, discípulo de Ignacio Manuel Altamirano. Fue decidido promotor de la fundación de la Universidad Nacional de México",
    image: "http://localhost:5000/img/justo-sierra.png"
  });

  const mario_benedetti = new models.Poet({
    author: "Mario Benedetti",
    origin: "Uruguayo",
    bio:
      "Escritor, poeta, dramaturgo y periodista uruguayo integrante de la generación del 45, a la que pertenecieron, entre otros, Idea Vilariño y Juan Carlos Onetti.",
    image: "http://localhost:5000/img/mario-benedetti.png"
  });

  const pablo_neruda = new models.Poet({
    author: "Pablo Neruda",
    origin: "Chileno",
    bio:
      "Monarca (tlatoani) de la ciudad-estado de Texcoco en el México antiguo y se convirtió en el principal aliado militar y político de los mexicas.",
    image: "http://localhost:5000/img/pablo-neruda.png"
  });

  const nezahualcoyotl = new models.Poet({
    author: "Nezahualcóyotl",
    origin: "Mexica",
    bio:
      "Monarca (tlatoani) de la ciudad-estado de Texcoco en el México antiguo y se convirtió en el principal aliado militar y político de los mexicas.",
    image: "http://localhost:5000/img/nezahualcoyotl.png"
  });

  const sor_juana = new models.Poet({
    author: "Sor Juana Inés de la Cruz",
    origin: "Mexicano",
    bio:
      "Religiosa jerónima y escritora novohispana, exponente del Siglo de Oro de la literatura en español.",
    image: "http://localhost:5000/img/sor-juana.png"
  });

  await octavio.save(err => {
    if (err) return handleError(err);

    const palabras = new models.Poem({
      title: "Las palabras",
      text:
        "Dales la vuelta, \ncógelas del rabo (chillen, putas), \nazótalas, \ndales azúcar en la boca a las rejegas, \nínflalas, globos, pínchalas, \nsórbeles sangre y tuétanos, \nsécalas, \ncápalas, \npísalas, gallo galante, \ntuérceles el gaznate, cocinero, \ndesplúmalas, \ndestrípalas, toro, \nbuey, arrástralas, \nhazlas, poeta, \nhaz que se traguen todas sus palabras.",
      poet: octavio._id
    });

    const calle = new models.Poem({
      title: "La calle",
      text:
        "Es una calle larga y silenciosa. \nAndo en tinieblas y tropiezo y caigo \ny me levanto y piso con pies ciegos \nlas piedras mudas y las hojas secas \ny alguien detrás de mí también las pisa: \nsi me detengo, se detiene; \nsi corro, corre. Vuelvo el rostro: nadie. \nTodo está oscuro y sin salida, \ny doy vueltas en esquinas \nque dan siempre a la calle \ndonde nadie me espera ni me sigue, \ndonde yo sigo a un hombre que tropieza \ny se levanta y dice al verme: nadie.",
      poet: octavio._id
    });

    palabras.save();
    calle.save();
  });

  await jose_emilio.save(err => {
    const gota__luvia = new models.Poem({
      title: "Gota de lluvia",
      text:
        "Una gota de lluvia temblaba en la enredadera. \nToda la noche estaba en esa humedad sombría \nque de repente \niluminó la luna. \n",
      poet: jose_emilio._id
    });

    gota__luvia.save();
  });

  await amado_nervo.save(err => {
    const viejo_estribillo = new models.Poem({
      title: "Viejo estribillo",
      text:
        "¿Quién es esa sirena de la voz tan doliente, \nde las carnes tan blancas, de la trenza tan bruna?-Es un rayo de luna que se baña en la fuente, \nes un rayo de luna... \n¿Quién gritando mi nombre la morada recorre? \n¿Quién me llama en las noches con tan trémulo acento? \n-Es un soplo de viento que solloza en la torre, \nes un soplo de viento... \nDi, ¿quién eres, arcángel cuyas alas se abrasan \nen el fuego divino de la tarde y que subes \npor la gloria del éter? -Son las nubes que pasan; \nmira bien, son las nubes... \n¿Quién regó sus collares en el agua, Dios mío? \nLluvia son de diamantes en azul terciopelo... \n-Es la imagen del cielo que palpita en el río, \nes la imagen del cielo... \n¡Oh, Señor! La belleza sólo es, pues, espejismo! \nnada más Tú eres cierto, sé Tú mi último Dueño. \n¿Dónde hallarte, en el éter, en la tierra, en mí mismo? \n-Un poquito de ensueño te guiará en cada abismo, \nun poquito de ensueño...",
      poet: amado_nervo._id
    });

    const el_celaje = new models.Poem({
      title: "El celaje",
      text:
        "¿A dónde fuiste, amor; a dónde fuiste? \nSe extinguió en el poniente el manso fuego, \ny tú que me decías: Hasta luego, \nvolveré por la noche... ¡No volviste! \n¿En que zarzas tu pie divino heriste? \n¿Que muro cruel te ensordeció a mi ruego? \n¿Que nieve supo congelar tu apego \ny a tu memoria hurtar mi imagen triste? \n¡Amor, ya no vendrás! En vano, ansioso, \nde mi balcón atalayando vivo \nel campo verde y el confín brumoso. \nY me finge un celaje fugitivo \nnave de luz en que, al final reposo, \nva tu dulce fantasma pensativo.",
      poet: amado_nervo._id
    });

    viejo_estribillo.save();
    el_celaje.save();
  });

  await federico_garcia_lorca.save(err => {
    const granada = new models.Poem({
      title: "Granada",
      text:
        "Granada, calle de Elvira, \ndonde viven las manolas, \nlas que se van a la Alhambra, \nlas tres y las cuatro solas. \nUna vestida de verde, \notra de malva, y la otra, \nun corselete escocés \ncon cintas hasta la cola. \nLas que van delante, garzas \nla que va detrás, paloma, \nabren por las alamedas \nmuselinas misteriosas. \n¡Ay, qué oscura está la Alhambra! \n¿Adónde irán las manolas \nmientras sufren en la umbría\nel surtidor y la rosa? \n¿Qué galanes las esperan? \n¿Bajo qué mirto reposan? \n¿Qué manos roban perfumes \na sus dos flores redondas? \nNadie va con ellas, nadie; \ndos garzas y una paloma. \nPero en el mundo hay galanes \nque se tapan con las hojas. \nLa catedral ha dejado \nbronces que la brisa toma; \nEl Genil duerme a sus bueyes \ny el Dauro a sus mariposas. \nLa noche viene cargada \ncon sus colinas de sombra; \nuna enseña los zapatos \nentre volantes de blonda; \nla mayor abre sus ojos \ny la menor los entorna. \n¿Quién serán aquellas tres \nde alto pecho y larga cola? \n¿Por qué agitan los pañuelos? \n¿Adónde irán a estas horas? \nGranada, calle de Elvira, \ndonde viven las manolas, \nlas que se van a la Alhambra, \nlas tres y las cuatro solas. ",
      poet: federico_garcia_lorca._id
    });

    const lluvia = new models.Poem({
      title: "Lluvia",
      text:
        "La lluvia tiene un vago secreto de ternura, \nalgo de soñolencia resignada y amable, \nuna música humilde se despierta con ella \nque hace vibrar el alma dormida del paisaje. \nEs un besar azul que recibe la Tierra, \nel mito primitivo que vuelve a realizarse. \nEl contacto ya frío de cielo y tierra viejos \ncon una mansedumbre de atardecer constante. \nEs la aurora del fruto. La que nos trae las flores \ny nos unge de espíritu santo de los mares. \nLa que derrama vida sobre las sementeras \ny en el alma tristeza de lo que no se sabe. \nLa nostalgia terrible de una vida perdida, \nel fatal sentimiento de haber nacido tarde, \no la ilusión inquieta de un mañana imposible \ncon la inquietud cercana del color de la carne. \nEl amor se despierta en el gris de su ritmo, \nnuestro cielo interior tiene un triunfo de sangre, \npero nuestro optimismo se convierte en tristeza \nal contemplar las gotas muertas en los cristales. \nY son las gotas: ojos de infinito que miran \nal infinito blanco que les sirvió de madre. \nCada gota de lluvia tiembla en el cristal turbio \ny le dejan divinas heridas de diamante. \nSon poetas del agua que han visto y que meditan \nlo que la muchedumbre de los ríos no sabe. \n¡Oh lluvia silenciosa, sin tormentas ni vientos, \nlluvia mansa y serena de esquila y luz suave, \nlluvia buena y pacifica que eres la verdadera, \nla que llorosa y triste sobre las cosas caes! \n¡Oh lluvia franciscana que llevas a tus gotas \nalmas de fuentes claras y humildes manantiales! \nCuando sobre los campos desciendes lentamente \nlas rosas de mi pecho con tus sonidos abres. \nEl canto primitivo que dices al silencio \ny la historia sonora que cuentas al ramaje \nlos comenta llorando mi corazón desierto \nen un negro y profundo pentagrama sin clave. \nMi alma tiene tristeza de la lluvia serena, \ntristeza resignada de cosa irrealizable, \ntengo en el horizonte un lucero encendido \ny el corazón me impide que corra a contemplarte. \n¡Oh lluvia silenciosa que los árboles aman \ny eres sobre el piano dulzura emocionante; \ndas al alma las mismas nieblas y resonancias \nque pones en el alma dormida del paisaje!",
      poet: federico_garcia_lorca._id
    });

    granada.save();
    lluvia.save();
  });

  await jaime_sabines.save(err => {
    const yo_no_lo_se = new models.Poem({
      title: "Yo no lo sé de cierto...",
      text:
        "Yo no lo sé de cierto, pero supongo \nque una mujer y un hombre \nalgún día se quieren, \nse van quedando solos poco a poco, \nalgo en su corazón les dice que están solos, \nsolos sobre la tierra se penetran, \nse van matando el uno al otro. \nTodo se hace en silencio. Como \nse hace la luz dentro del ojo. \nEl amor une cuerpos. \nEn silencio se van llenando el uno al otro. \nCualquier día despiertan, sobre brazos; \npiensan entonces que lo saben todo. \nSe ven desnudos y lo saben todo. \n(Yo no lo sé de cierto. Lo supongo.)",
      poet: jaime_sabines._id
    });

    const vieja_la_noche = new models.Poem({
      title: "Vieja la noche...",
      text:
        "Vieja la noche, vieja, \nlargo mi corazón antiguo. \n¡Qué de brazos adentro \ndel pecho, fríos, \nse mueven y me buscan, \nviejo amor mío! \nLa noche, vieja, cae \ncomo un lento martirio, \nsombra y estrella, hueco \ndel pecho mío. \nY yo entretanto, ausente \nde mi martirio, \nentro en la noche, busco \nsu cuerpo frío. \nNo hay luna, locos, \ndesde hace siglos. \nSólo un breve milagro \ncuando hace frío.",
      poet: jaime_sabines._id
    });

    vieja_la_noche.save();
    yo_no_lo_se.save();
  });

  await julio_cortazar.save(err => {
    const los_amigos = new models.Poem({
      title: "Los amigos",
      text:
        "En el tabaco, en el café, en el vino, \nal borde de la noche se levantan \ncomo esas voces que a lo lejos cantan \nsin que se sepa qué, por el camino. \nLivianamente hermanos del destino, \ndióscuros, sombras pálidas, me espantan \nlas moscas de los hábitos, me aguantan \nque siga a flote entre tanto remolino. \nLos muertos hablan más pero al oído, \ny los vivos son mano tibia y techo, \nsuma de lo ganado y lo perdido. \nAsí un día en la barca de la sombra, \nde tanta ausencia abrigará mi pecho \nesta antigua ternura que los nombra.",
      poet: julio_cortazar._id
    });

    const objetos_perdidos = new models.Poem({
      title: "Objetos perdidos",
      text:
        "Por veredas de sueño y habitaciones sordas \ntus rendidos veranos me aceleran con sus cantos \nUna cifra vigilante y sigilosa \nva por los arrabales llamándome y llamándome \npero qué falta, dime, en la tarjeta diminuta \ndonde están tu nombre, tu calle y tu desvelo \nsi la cifra se mezcla con las letras del sueño, \nsi solamente estás donde ya no te busco. \nMendoza, Argentina 1944",
      poet: julio_cortazar._id
    });

    los_amigos.save();
    objetos_perdidos.save();
  });

  await justo_sierra.save(err => {
    const playera = new models.Poem({
      title: "Playera",
      text:
        "Baje a la playa la dulce niña, \nperlas hermosas buscaré, \ndeje que el agua durmiendo ciña \ncon sus cristales su blanco pie . . . \nVenga la niña risueña y pura, \nel mar su encanto reflejará \ny mientras llega la noche oscura \ncosas de amores le contará. \nCuando en levante despunte el día \nverá las nubes blanco tul \n- como los cisnes de la bahía - \nrizar serenos el cielo azul. \nEnlazaremos a las palmeras \nla suave hamaca y en su vaivén \nlas horas tristes irán ligeras \ny sueños de oro vendrán también. \nY si la luna sobre las olas  \ntiende de plata bello cendal, \noirá la niña mis barcarolas \nal son del remo que hiende el mar, \nmientras la noche prende en sus velos \nbroches de perlas y de rubí, \ny exhalaciones cruzan los cielos \nlágrimas de oro sobre el zafir! \nEl mar velado con tenue bruma \nte dará su hálito arrullador, \nque bien merece besos de espuma \nla concha nácar, nido de amor. \nYa la marea, niña, comienza,  \nven que ya sopla tibio terral, \nven y careyes tendrá tu trenza \ny tu albo cuello rojo coral. \nLa dulce niña bajó temblando, \nbañó en el agua su blanco pie, \ndespués, cuando ella se fue llorando, \ndentro las olas perlas hallé.",
      poet: justo_sierra._id
    });

    playera.save();
  });

  await mario_benedetti.save(err => {
    const once = new models.Poem({
      title: "Once",
      text:
        "Ningún padre de la iglesia \nha sabido explicar \npor qué no existe \nun mandamiento once \nque ordene a la mujer \nno codiciar al hombre \nde su prójima.",
      poet: mario_benedetti._id
    });

    const teoria_de_conjuntos = new models.Poem({
      title: "Teoría de conjuntos",
      text:
        "Cada cuerpo tiene \nsu armonía y \nsu desarmonía. \nEn algunos casos \nla suma de armonías \npuede ser casi \nempalagosa \nEn otros \nel conjunto \nde desarmonías \nproduce algo mejor \nque la belleza.",
      poet: mario_benedetti._id
    });

    once.save();
    teoria_de_conjuntos.save();
  });

  await nezahualcoyotl.save(err => {
    const poneos_de_pie = new models.Poem({
      title: "Poneos de pie",
      text:
        "¡Amigos míos, poneos de pie! \nDesamparados están los príncipes, \nYo soy Nezahualcóyotl, \nSoy el cantor, \nSoy papagayo de gran cabeza. \nToma ya tus flores y tu abanico \n¡Con ellos ponte a bailar! \nTú eres mi hijo, \nTú ere Yoyontzin. \nToma ya tu cacao, \nLa flor del cacao, \n¡que sea ya bebida! \n¡Hágase el baile, \nNo es aquí nuestra casa, \nNo viviremos aquí \nTú de igual modo tendrás que marcharte.",
      poet: nezahualcoyotl._id
    });

    poneos_de_pie.save();
  });

  await pablo_neruda.save(err => {
    const poneos_de_pie = new models.Poem({
      title: "El nuevo soneto a Elena",
      text:
        "Cuando estés vieja, niña (Ronsard ya te lo dijo), \nte acordarás de aquellos versos que yo decía. \nTendrás los senos tristes de amamantar tus hijos, \nlos últimos retoños de tu vida vacía... \nYo estaré tan lejano que tus manos de cera \nararán el recuerdo de mis ruinas desnudas. \nComprenderás que puede, nevar en primavera \ny que en la primavera las nieves son más crudas. \nYo estaré tan lejano que el amor y la pena \nque antes vacié en tu vida como un ánfora plena \nestarán condenados a morir en mis manos... \nY será tarde porque se fue mi adolescencia, \ntarde porque las flores una vez dan esencia \ny porque aunque me llames yo estaré tan lejano...",
      poet: pablo_neruda._id
    });

    const virese = new models.Poem({
      title: "Vírese",
      text:
        "Hoy que danza en mi cuerpo la pasiòn de Paolo \ny ebrio de un sueño alegre mi corazòn se agita: \nhoy que sé la alegría de ser libre y ser solo \ncomo el pistilo de una margarita infinita: \noh mujer -carne y sueño-, ven a encantarme un poco, \nven a vaciar tus copas de sol en mi camino: \nque en mi barco amarillo tiemblen tus senos locos \ny ebrios de juventud, que es el más bello vino. \nEs bello porque nosotros lo bebemos \nen estos temblorosos vasos de nuestro ser \nque nos niegan el goce para que lo gocemos. \nBebamos. Nunca dejemos de beber. \nNunca, mujer, rayo de luz, pulpa blanca de poma, \nsuavices la pisada que no te hará sufrir. \nSembremos la llanura antes de arar la loma. \nVivir será primero, después será morir. \nY después que en la ruta se apaguen nuestras huellas \ny en el azul paremos nuestras blancas escalas \n-flechas de oro que atajan en vano las estrellas-, \noh Francesca, hacia dònde te llevarán mis alas!",
      poet: pablo_neruda._id
    });

    poneos_de_pie.save();
    virese.save();
  });

  await sor_juana.save(err => {
    const detente_sombra = new models.Poem({
      title: "Detente sombra",
      text:
        "Detente, sombra de mi bien esquivo, \nimagen del hechizo que más quiero, \nbella ilusión por quien alegre muero, \ndulce ficción por quien penosa vivo. \nSi al imán de tus gracias, atractivo, \nsirve mi pecho de obediente acero, \n¿para qué me enamoras lisonjero \nsi has de burlarme luego fugitivo? \nMas blasonar no puedes, satisfecho, \nde que triunfa de mí tu tiranía: \nque aunque dejas burlado el lazo estrecho \nque tu forma fantástica ceñía, \npoco importa burlar brazos y pecho \nsi te labra prisión mi fantasía.",
      poet: sor_juana._id
    });

    detente_sombra.save();
  });
};

module.exports = doSeed;
