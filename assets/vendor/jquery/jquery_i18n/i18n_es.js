jQuery(document).ready(function () {
  var update_texts = function () {
    $('body').i18n();
  };

  $('.lang-switch').click(function (e) {
    e.preventDefault();
    $.i18n().locale = $(this).data('locale');
    update_texts();

    if (typeof (Storage) !== "undefined") {
      // Code for localStorage/sessionStorage.
      localStorage.setItem("userLang", $(this).data('locale'));
      // }
    } else {
      // Sorry! No Web Storage support..
      localStorage.setItem("userLang", 'en');
    }
  });

  $.i18n().load({
    'es': {
      'title': 'Alphnology - Multiservicios',
      'read-more': 'Leer más',
      'history': 'Historia',
      'phone': 'Teléfonos',
      'email': 'Correo',
      'contact-us': 'Contacta con nosotros',
      'address': 'Dirección',
      'schedules': 'Horarios',
      'schedules-day': 'Lunes - Viernes',
      'contact': 'Contacto',
      'services': 'Servicios',
      // ======= Header =======
      'header-navbar-home': 'Inicio',
      'header-navbar-about': 'Sobre nosotros',
      'header-navbar-services': 'Servicios',
      'header-navbar-portfolio': 'Productos',
      'header-navbar-team': 'Equipo',
      'header-navbar-contact': 'Contacto',
      // ======= Header =======
      //
      //======= Hero Section =======
      'section-hero-header': 'Ofrecemos soluciones para hacer crecer su negocio',
      'section-hero-details': 'Somos un equipo de profesionales talentosos en el desarrollo de soluciones que cumplan con las necesidades de los negocios.',
      'section-hero-about': 'Empezar',
      //======= Hero Section =======
      //
      //======= About Section =======
      'section-about-about': 'Quienes somos',
      'section-about-mision': 'Misión',
      'section-about-mision-details': 'Creemos que con las herramientas correctas todo el mundo puede lograr sus objetivos. Mediante el desarrollo de soluciones de sistemas que cumplan con sus necesidades, queremos brindar nuestro apoyo para que todos nuestros colaboradores alcancen sus metas.',
      'section-about-vision': 'Visión',
      'section-about-vision-details': 'Empoderar a nuestros colaboradores con las herramientas necesarias para cumplir sus objetivos y construir el futuro.',
      'section-about-history-details': 'Las alianzas suelen formarse de las maneras más inesperadas, y más aún en los pasillos de las universidades donde los jóvenes con grandes ideas ( e igual de grandes ingenuidades) comparten sus pensares con respecto al mundo que los rodea.',
      //======= About Section =======
      //
      //======= Values Section =======
      'section-values-header': 'Nuestros Valores',
      'section-values-details': 'Creemos en nuestra misión y trabajamos con miras al futuro que queremos.',
      'section-values-#1': 'Pasión',
      'section-values-#2': 'Calidad',
      'section-values-#3': 'Cambio',
      'section-values-#4': 'Integridad',
      'section-values-#5': 'Productividad',
      //======= Values Section =======
      //
      //======= Services Section =======
      'section-services-header': 'Servicios',
      'section-services-details': 'Multiservicios tecnológicos',
      'section-services-header-#1': 'Desarrollo de software',
      'section-services-details-#1': 'Brindamos soporte a nuestros colaboradores mediante el desarrollo de nuevas aplicaciones, el mantenimiento de las aplicaciones existentes y la creación de soluciones transformadoras adaptadas a su negocio.',
      'section-services-header-#2': 'Migración de datos (ETL)',
      'section-services-details-#2': 'Elaboración y ejecución del plan de migración de distintos tipos de datos y diagramas de lógica empresarial, utilizando las mejores prácticas de extracción, transformación y carga (ETL), basado en protocolos de control de versiones con los más altos estándares de calidad.',
      'section-services-header-#3': 'Gestión de proyectos tecnológicos',
      'section-services-details-#3': 'Planeación, organización, ejecución y aseguramiento de la calidad para todos los proyectos tecnológicos y de negocios en general, utilizando metodologías y mejores prácticas líderes en el mercado.',
      'section-services-header-#4': 'Consultoría técnica',
      'section-services-details-#4': 'Asesoría personalizada y soporte estratégico para la exitosa transformación digital de su negocio.',
      'section-services-header-#5': 'Otros',
      'section-services-details-#5': 'Ofrecemos múltiples servicios para apoyar el crecimiento de su negocio.',
      //======= Services Section =======
      //
      //======= Team Section =======
      'section-team-header': 'Equipo',
      'section-team-details': 'Nuestro equipo',
      'section-team-header-#1': 'Cofundador e Ingeniero de Software',
      'section-team-details-#1': 'Ingeniero en sistemas, gerente de departamentos de tecnología y profesor por vocación. Master en Web Engineer (Computer Software Engineering), con más de 10 años de experiencia en desarrollo de software bajo tecnología Java (JSE y JEE) y más de 5 años de experiencia administrando e implementando proyecto de SAP Business One. Profesor de la Escuela de Ingeniería en Computación y Telecomunicaciones, PUCMM, miembro de la Comunidad Java Dominicano y amante del Open Source.',
      'section-team-header-#2': 'Fundador e Ingeniero de Software',
      'section-team-details-#2': 'Ingeniero en sistemas y profesor por vocación. Con más de 10 años de experiencia en desarrollo de sistemas escalables y de alta concurrencia. Profesor de Administración de Sistemas Linux en la Fundación Código Libre Dominicana y profesor del Instituto Tecnológico de las Américas (ITLA). Miembro de la comunidad Java Dominicano, fiel seguidor del Open Source.',
      'section-team-header-#3': 'Cofundador y Director Comercial',
      'section-team-details-#3': 'Gestor de proyectos, consultor y profesor por vocación. Master en control de gestión (management control), con más de 5 años de experiencia en gestión de proyectos, análisis de costos y asesorias generales en áreas comerciales. Docente del departamento de proyectos de la Universidad Tecnológica de Santiago UTESA, por más de 3 años. Aficionado de la tecnología y su evolución.',
      //======= Team Section =======
      //
      //======= History Section =======
      'section-history-header': 'Historia de la empresa',
      'section-history-paragraph-#1': 'Las alianzas suelen formarse de las maneras más inesperadas, y más aún en los pasillos de las universidades donde los jóvenes con grandes ideas ( e igual de grandes ingenuidades) comparten sus pensares con respecto al mundo que los rodea.',
      'section-history-paragraph-#2': 'Nuestra historia inicia con el encuentro de jóvenes amantes de la tecnología, ambos con ideas muy claras de lo que entendían le faltaba al mercado dominicano. La falta de herramientas tecnológicas de calidad y acordes para cumplir las necesidades del mercado, los llevó por el camino del desarrollo de softwares, buscando, según su entender, brindar al mercado softwares de calidad, aun cuando ellos aún no entendían en su totalidad lo que esto implicaba.',
      'section-history-paragraph-#3': 'La idea de comercializar softwares inició en esa etapa estudiantil donde basaron su trabajo en los principios fundamentales del software y de servicio al cliente.',
      'section-history-fundamental-principles-header': 'Principios fundamentales del software',
      'section-history-fundamental-principles-#1': 'Sistema robusto y escalable',
      'section-history-fundamental-principles-#2': 'Acoplamiento y cohesión entre los distinto elementos',
      'section-history-fundamental-principles-#3': 'Fácil de mantener en el tiempo',
      'section-history-fundamental-principles-#4': 'Satisfagan las necesidades de los clientes',
      'section-history-fundamental-principles-#5': 'Usabilidad',
      'section-history-fundamental-principles-#6': 'Utilizar tecnología que cumplan con los requisitos del clientes',
      'section-history-customer-service-header': 'Servicio al cliente',
      'section-history-customer-service-#1': 'Servicios personalizado y de calidad',
      'section-history-customer-service-#2': 'Soporte preventivo y prematuro',
      'section-history-customer-service-#3': 'Eficiencia en la solución de problema',
      'section-history-paragraph-#4': 'Iniciaron la aventura de desarrollo, utilizando el lenguaje Java, específicamente con Java Swing y con algunas oportunidades comenzó la historia.',
      'section-history-paragraph-#5': 'Con el pasar de los años entendieron que para poder crear una plataforma más robusta, que les permitiera desarrollar proyectos mayores en tamaño y calidad, tomaron la decisión de formalizar todo su proceso y para esto agregar a un tercer miembro a la aventura. Este con su experiencia en áreas comerciales, buscaba complementar a las mentes maestras detrás de los desarrollos.',
      'section-history-paragraph-#6': 'Nosotros somos Hector, Freddy, David y juntos formamos Alphnology, una historia que comenzó con dos jóvenes desarrolladores de software, en el año 2009, y que ahora buscan con nuevas ideas y propuestas brindar múltiples servicios tecnológicos que permitan a nuestros colaboradores cumplir sus metas, todo esto a través de herramientas pensadas y desarrolladas con el usuario siempre en mente.',
      //======= History Section =======
      //
      //======= Footer Section =======
      'section-footer-header-#1': 'Ofrecemos soluciones para hacer crecer su negocio.',
      'section-footer-header-#2': 'Enlace útiles',
      //
      //======= Footer Section =======
      //  
      //======= Services details Section =======
      'section-services-software-development-#1': 'Alphnology es un equipo de profesionales enfocado en el desarrollo de soluciones que ayuden a crecer su negocio.',
      'section-services-software-development-#2': 'Desarrollar productos tecnológicos a la medida de las necesidades de nuestros clientes es nuestro norte, todo esto, apoyado en las mejores metodologías de desarrollo de software, aplicando los procedimientos y controles adecuados para asegurar la calidad de los mismos. La eficacia a la hora de entregar los resultados nos mueve.',
      'section-services-software-development-#3': 'La experiencia acumulada a través de los años ha llevado al dominio de lenguajes y tecnologías que nos permiten buscar soluciones a las necesidades de los clientes. Como resultado, nuestros diseños y soluciones tienen características modulares y aprovechan los beneficios de la reutilización del software.',
      'section-services-software-development-#4': 'Esto brinda a nuestros clientes mayor flexibilidad en la obtención de sus aplicaciones, mantenimiento más efectivo y eficiente, mayor rendimiento y calidad de las soluciones.',
      'section-services-software-development-header-#1': 'Desarrollo a medida',
      'section-services-software-development-header-#1-1': 'Desarrollamos software a la medida, con miras a automatizar sus procesos de manera efectiva y eficiente.',
      'section-services-software-development-header-#1-2': 'La colaboración es clave para nosotros, para de esta manera poder proporcionarles las herramientas tecnológicas más adecuadas que les permitan mantenerse a la vanguardia y prepararse para los nuevos cambios económicos y tecnológicos.',
      'section-services-software-development-header-#2': 'Servicios Web',
      'section-services-software-development-header-#2-1': 'Desarrollamos una variedad de aplicaciones orientada a los servicios, enfocadas en necesidades que la sociedad demanda. Pero la columna vertebral de Alphnology radica en la integración de características de valor agregado a los distintos servicios que ofrecemos.',
      'section-services-software-development-header-#2-2': 'Siempre buscando el máximo nivel de modularidad, granularidad y reutilización de los elementos que conforman nuestros sistemas, para conseguir este objetivo nos enfocamos en utilizar tecnología de punta, tales como:',
      'section-services-software-development-header-#2-3': 'Orquestadores de contenedores',
      'section-services-software-development-header-#2-4': 'Nube privada',
      'section-services-software-development-header-#2-5': 'Controles de versiones',
      'section-services-software-development-header-#2-6': 'Integración continua (CI)',
      'section-services-software-development-header-#2-7': 'Entrega continua (CD)',
      'section-services-software-development-header-#2-8': 'Cobertura de código',
      'section-services-technical-consultancy-#1': 'Una buena selección y asesoramiento sobre qué sistemas y herramientas de TI deben respaldar a una organización es esencial para que esa organización se mantenga a flote.',
      'section-services-technical-consultancy-#2': 'Nuestros expertos ponen nuestro alto nivel de experiencia en servicio al cliente para ayudarlos a elegir las mejores opciones. El objetivo es lograr una alineación completa entre los objetivos de la organización y las capacidades del sistema de tecnología de la información.',
      'section-services-technical-consultancy-#3': 'La capacidad de nuestros consultores en el levantamiento de información y determinación de las necesidades de nuestros clientes está determinada por la experiencia. La estructura y herramientas a utilizar para la solución a  sus necesidades se determina por medio de la colaboración entre nuestros consultores y nuestros clientes, gracias dicha colaboración los resultados son soluciones que nuestros clientes pueden aprovechar de la manera más eficiente y durante mayor extensión de tiempo, para maximizar así el rendimiento de su inversión.',
      'section-services-technical-consultancy-#4': 'Luego, de acuerdo con nuestra filosofía de servicio global, nuestros grupos de trabajo especializados podrán planificar, desarrollar (si es necesario) e implementar equipos de TI óptimos.',
      'section-services-other-#1': 'Ofrecemos múltiples servicios para apoyar el crecimiento de su negocio.',
      'section-services-other-#2': 'Contamos con diferentes unidades de negocios dedicadas a brindar soluciones y servicios tecnológicos para distintas áreas de su negocio.',
      'section-services-other-#3': 'Para poder llevar a cabo nuestro principio de servicio global ofrecemos diferentes opciones relacionadas con múltiples áreas de la tecnología, para que cualquier empresa u organización pueda obtener la solución correcta y óptima en cualquier momento.',
      'section-services-other-#4': 'Alphnology también ofrece servicios en las siguientes áreas tecnológicas:',
      'section-services-other-#4-1': 'Redes y telecomunicaciones en general',
      'section-services-other-#4-2': 'Administración de sistemas y servidores',
      'section-services-other-#4-3': 'Administración de base de datos',
      'section-services-other-#4-4': 'Diseño y desarrollo de paginas web',
      'section-services-other-#4-5': 'Asesoría y administración de dominios web',
      'section-services-other-#4-6': 'Gestión de seguridad informática',
      'section-services-other-#4-7': 'Asistencia tributaria',
      'section-services-other-#4-8': 'Asistencia financiera',
      'section-services-data-migration-#1': 'Nuestros expertos migrarán sus bases de datos y servidores sin prácticamente ningún tiempo de inactividad. Migramos una amplia variedad de datos y diagramas de lógica empresarial, utilizando las mejores prácticas de extracción, transformación y carga (ETL) y protocolos de control de versiones.',
      'section-services-data-migration-#2': 'Tratamos sus datos con mayor escalabilidad mediante la creación de sistemas automatizados de migración de datos para procesar, analizar y mapear campos ilimitados en su nueva base de datos. Usamos herramientas de migración de esquemas para automatizar la transferencia de datos de aplicaciones y revertir la serie apropiada de cambios de esquema hasta que obtengamos los resultados deseados.',
      'section-services-data-migration-#3': 'Desarrollamos sistemas de migración automatizados para migrar la lógica empresarial y realizar actualizaciones rápidas en las plataformas empresariales existentes. Nuestro motor de migración de datos automática reconoce y personaliza elementos XML para crear documentos de mapas de forma rápida y confiable. Su marco es completamente reutilizable y configurable, por lo que puede modificar tanto sus estructuras de datos, como los datos en sí, incluso después de que la migración haya finalizado.',
      'section-services-data-migration-#4': 'Nuestros expertos en migración de datos tienen experiencia global y multidisciplinaria en la implementación de soluciones comerciales utilizando metodologías, métodos y herramientas recopiladas digitalmente.  Todo esto se logra utilizando herramientas líderes de migración de datos de código abierto, locales y basadas en la nube.',
      'section-services-technology-project-management-#1': 'Estudiar, evaluar, seleccionar y licitar las herramientas tecnológicas que su negocio necesita es, en sí mismo, una tarea que alberga mucha importancia y sobre todo un compromiso económico como de cambio cultural para su empresa.',
      'section-services-technology-project-management-#2': 'Una vez se seleccionan las herramientas y se pasa por todo el proceso de compra y contratación, surge una nueva incógnita, ¿Cómo asegurar el proceso y calidad de implementación de la nueva herramienta en su empresa?, para darle respuesta a esa pregunta Alphnology ofrece servicios de gestión de proyectos tecnológicos.',
      'section-services-technology-project-management-#3': 'Nuestros servicios de gestión de proyectos buscan brindar un guardián para su inversión y una figura que pueda coordinar colaboradores internos (empleados), así como también colaboradores externos (consultores e implementadores). ',
      'section-services-technology-project-management-#4': 'Los gestores de proyectos de Alphnology cuentan con la experiencia en gestión de proyectos de implementación tecnológicos, así como también de distintas áreas comerciales. Utilizando diferentes herramientas nuestros gestores de proyectos pueden brindar información clara y precisa sobre el estatus de su proyecto, determinar las rutas críticas de estos, organizar y gestionar los distintos recursos, gestionar la resistencia al cambio a lo interno de la institución y mucho más.',
      'section-services-technology-project-management-#5': 'Alphnology cuenta con gestores de proyecto con dominio de distintas metodologías y herramientas, tales como, metodología de cascada, Agile, entre otros. Alguna de las herramientas que utilizamos para el manejo de proyecto son las siguientes:',
      'section-services-technology-project-management-#5-1': 'Planificación de proyectos',
      'section-services-technology-project-management-#5-2': 'Gráficas de Gantt',
      'section-services-technology-project-management-#5-3': 'Programación de proyectos',
      'section-services-technology-project-management-#5-4': 'Planificación y control de recursos',
      'section-services-technology-project-management-#5-5': 'Colaboración de equipos',
      'section-services-technology-project-management-#5-6': 'Rastreo de tiempos y dificultades',
      'section-services-technology-project-management-#5-7': 'Reportería sobre estatus del proyecto',
      //======= Services details Section =======
      //
      //======= F.A.Q Section =======
      'section-faq-header': 'Preguntas frecuentes',
      'section-faq-questions-#1': '¿Dónde puedo comunicarme para obtener más información de manera personalizada?',
      'section-faq-questions-#2': '¿Dónde están ubicadas sus oficinas?',
      'section-faq-questions-#3': 'Si quisiera una evaluación preliminar para un nuevo proyecto, con datos preliminares, ¿es posible?',
      'section-faq-answer-#1-1': 'Contactanos con un correo electrónico a',
      'section-faq-answer-#1-2': 'o escríbenos a través de',
      'section-faq-answer-#1-3': 'o',
      'section-faq-answer-#1-4': 'al',
      'section-faq-answer-#2': 'Somos una empresa de tecnología enfocada en la libertad que nos brinda esta, por esta razón trabajamos desde cualquier lugar, contáctanos y podremos coordinar un encuentro en su propio negocio.',
      'section-faq-answer-#3': 'Contactanos y estaremos más que felices de evaluar y proponer soluciones para sus proyectos.',
      //======= F.A.Q Section =======
      //
      // ======= Contact Section =======
      'section-contact-form-name': 'Nombre',
      'section-contact-form-phone': 'Teléfono',
      'section-contact-form-mailer': 'Correo electronico',
      'section-contact-form-topic': 'Asunto',
      'section-contact-form-content': 'Mensaje',
      'section-contact-form-loading': 'Cargando',
      'section-contact-form-error-message': 'No se pudo enviar el correo',
      'section-contact-form-sent-message': 'Tu mensaje ha sido enviado. ¡Gracias!',
      'section-contact-form-submit': 'Enviar mensaje',
      'section-contact-form-reset': 'Limpiar',
      // ======= Contact  Section=======

    }
  });

  update_texts();
});