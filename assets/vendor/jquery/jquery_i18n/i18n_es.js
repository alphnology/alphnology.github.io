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
      'title': 'Alphnology',
      'read-more': 'Leer más',
      'history': 'Historia',
      'phone': 'Teléfonos',
      'email': 'Correo',
      'contact-us': 'Contáctanos',
      'address': 'Dirección',
      'schedules': 'Horarios',
      'schedules-day': 'Lunes - Viernes',
      'contact': 'Contacto',
      'services': 'Servicios',
      'prodcuts': 'Productos',
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
      'section-about-about': 'Quiénes somos',
      'section-about-mission': 'Misión',
      'section-about-mission-details': 'Creemos que con las herramientas correctas todo el mundo puede lograr sus objetivos. Mediante el desarrollo de soluciones de sistemas que cumplan con sus necesidades, queremos brindar nuestro apoyo para que todos nuestros colaboradores alcancen sus metas.',
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
      'section-services-details': 'Multiservicios Tecnológicos',
      'section-services-header-#1': 'Desarrollo de Software',
      'section-services-details-#1': 'Brindamos soporte a nuestros colaboradores mediante el desarrollo de nuevas aplicaciones, el mantenimiento de las aplicaciones existentes y la creación de soluciones transformadoras adaptadas a su negocio.',
      'section-services-header-#2': 'Migración de Datos (ETL)',
      'section-services-details-#2': 'Elaboración y ejecución del plan de migración de distintos tipos de datos y diagramas de lógica empresarial, utilizando las mejores prácticas de extracción, transformación y carga (ETL), basado en protocolos de control de versiones con los más altos estándares de calidad.',
      'section-services-header-#3': 'Gestión de Proyectos Tecnológicos',
      'section-services-details-#3': 'Planeación, organización, ejecución y aseguramiento de la calidad para todos los proyectos tecnológicos y de negocios en general, utilizando metodologías y mejores prácticas líderes en el mercado.',
      'section-services-header-#4': 'Consultoría Técnica',
      'section-services-details-#4': 'Asesoría personalizada y soporte estratégico para la exitosa transformación digital de su negocio.',
      'section-services-header-#5': 'Otros',
      'section-services-details-#5': 'Ofrecemos múltiples servicios para apoyar el crecimiento de su negocio.',
      //======= Services Section =======
      //
      //======= Products Section =======
      'section-products-header': 'Productos',
      'section-products-details': 'Catálogo de Productos',
      'section-products-header-#1': 'Chat Bot - IA',
      'section-products-details-#1': 'Nuestra solución de Chatbot amplía automáticamente tu alcance con los clientes. Disponible las 24 horas del día, los 7 días de la semana, agiliza el soporte, liberando a tu equipo para asuntos críticos. Personalizable para tu marca e integrado con múltiples canales, mejora la experiencia y satisfacción del cliente, así como el crecimiento empresarial.',
      'section-products-header-#2': 'Sistema de Recursos Humanos',
      'section-products-details-#2': 'Nuestra solución gestiona de manera efectiva el capital humano de tu empresa. Realiza un seguimiento eficiente de los datos de los empleados, automatiza los flujos de trabajo y mejora la comunicación. Obtén información, aumenta la productividad y fomenta un equipo de trabajo próspero con nuestra sólida solución.',
      'section-products-header-#3': 'CRM ',
      'section-products-details-#3': 'Ofrece un nivel de flexibilidad incomparable. Tienes la libertad de personalizar, construir, integrar o reemplazar componente para adaptarlo perfectamente a tus requisitos. La plantilla de CRM viene equipada con una amplia gama de funciones personalizables que te permiten optimizar tus procesos de venta con la máxima eficiencia.',
      'section-products-header-#4': 'Gestión de Casos',
      'section-products-details-#4': 'Un sistema de Gestión de Casos altamente avanzado, que ofrece un nivel notable de flexibilidad. Puedes personalizar fácilmente, construir, integrar o incluso reemplazar cualquier componente para adaptarlo perfectamente a tus requisitos específicos.',
      'section-products-header-#5': 'Inicio de Sesión Único (SSO)',
      'section-products-details-#5': 'Agrega autenticación a aplicaciones y asegura servicios con un esfuerzo mínimo. No es necesario lidiar con el almacenamiento o la autenticación de usuarios. El sistema SSO proporciona federación de usuarios, autenticación sólida, gestión de usuarios, autorización detallada y más.',
      'section-products-header-#6': 'Captura de Datos Modificados (CDC)',
      'section-products-details-#6': 'Inícialo, apúntalo hacia tus bases de datos y tus aplicaciones pueden comenzar a responder a todas las inserciones, actualizaciones y eliminaciones que otras aplicaciones realicen en tus bases de datos. CDC es duradero y rápido, por lo que tus aplicaciones pueden responder rápidamente y nunca perder un evento, incluso cuando surjan problemas.',
      'section-products-header-#7': 'Flujo de Trabajo',
      'section-products-details-#7': 'Motor de automatización que modela y ejecuta procesos comerciales. El flujo de trabajo manejará de forma asíncrona la ejecución de cada acción, trabajando alrededor de errores transitorios y manteniendo un rastro cifrado y auditable de todos los estados intermedios hasta su finalización.',
      'section-products-header-#8': 'Proxy - Puerta de Enlace - Equilibrador de Carga',
      'section-products-details-#8': 'Simplifica la complejidad de la red al diseñar, implementar y operar aplicaciones. Proxy inverso y equilibrador de carga que facilita la implementación de microservicios, se integra con los componentes de tu infraestructura existente y se configura automáticamente y de manera dinámica.',
      'section-products-header-#9': 'Timesched',
      'section-products-details-#9': 'Timesched es un sistema de control de citas para pacientes, el cual permite tener un control total de los compromisos del centro. Este sistema de agenda facilita la administración eficiente de las citas médicas, proporcionando una herramienta integral para la gestión y seguimiento de los horarios de los pacientes.',
      'section-products-header-#10': 'Chat-Alph',
      'section-products-details-#10': 'ChatAlph ofrece herramientas para gestionar conversaciones, construir relaciones y deleitar a sus clientes desde un solo lugar, facilitando la comunicación y optimizando la experiencia del cliente. La plataforma centralizada simplifica la gestión y promueve una atención al cliente eficiente y personalizada.',
      'section-products-header-#11': 'Theodolite',
      'section-products-details-#11': 'Theodolite, un software creado por agrimensores y diseñado exclusivamente para ellos, facilita la gestión total de expedientes. Esto genera una satisfacción superior en nuestros clientes al simplificar la administración de información relacionada con proyectos, asegurando una experiencia positiva en cada interacción.',
      //======= Products Section =======
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
      'section-history-paragraph-#6': 'Nosotros somos Hector y Freddy, y juntos formamos Alphnology, una historia que comenzó con dos jóvenes desarrolladores de software, en el año 2009, y que ahora buscan con nuevas ideas y propuestas brindar múltiples servicios tecnológicos que permitan a nuestros colaboradores cumplir sus metas, todo esto a través de herramientas pensadas y desarrolladas con el usuario siempre en mente.',
      //======= History Section =======
      //
      //======= Footer Section =======
      'section-footer-header-#1': '',
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
      //======= Products details Section =======
      'section-products-human-resources-#1': 'HRM es un sistema integral diseñado para gestionar eficazmente el capital humano, que se reconoce como el activo más valioso dentro de una empresa. Con el entendimiento de que los empleados juegan un papel crucial en el éxito de una organización, nuestro sistema HRM está diseñado para apoyar su desarrollo y bienestar.',
      'section-products-human-resources-#2': 'Nuestro sistema está diseñado específicamente para cumplir con el marco legal y fiscal de la República Dominicana, asegurando que todos los procesos de recursos humanos y nómina se alineen con las regulaciones aplicables. Al adherirnos a los requisitos específicos del país, brindamos una solución confiable y compatible para las empresas que operan en la República Dominicana.',
      'section-products-human-resources-#3': 'El módulo de Recursos Humanos dentro de nuestro sistema HRM sirve como un centro centralizado para administrar toda la información y los procesos relacionados con los empleados. Desde el mantenimiento de los datos maestros de los empleados hasta el seguimiento de las solicitudes de vacaciones y el historial disciplinario, este módulo permite a los profesionales de recursos humanos manejar de manera eficiente varios aspectos de la gestión de los empleados. También incluye funciones como la gestión de la estructura organizativa y los informes de los empleados, lo que permite a las empresas obtener información sobre su fuerza laboral y tomar decisiones informadas.',
      'section-products-human-resources-#4': 'El módulo de Nómina, por su parte, se enfoca en agilizar la compleja tarea de gestión de salarios y compensaciones. Abarca el cálculo de salarios, deducciones, impuestos y otros componentes relacionados con la nómina, lo que garantiza pagos precisos y oportunos a los empleados. Además, el módulo permite la exportación y transferencia de información de nómina a los sistemas ERP preferidos o plataformas externas, lo que facilita la integración perfecta con otros procesos financieros y contables.',
      'section-products-human-resources-#5': 'Al combinar estos dos potentes módulos, nuestro sistema HRM proporciona una solución integral que optimiza la gestión del capital humano, mejora la eficiencia operativa y promueve el cumplimiento legal. Empodera a las empresas en la República Dominicana para manejar de manera efectiva sus funciones de recursos humanos y nómina, contribuyendo en última instancia al éxito y crecimiento general de su organización.',
      'section-products-human-resources-#6': 'Con estos dos módulos, nuestra herramienta proporciona una solución integral para la gestión humana de tu empresa, permitiendo una gestión eficiente de los recursos humanos y la generación de nóminas precisas y exportables.',
      'section-products-human-resources-brochures': 'Ver folletos',
      'section-products-human-resources-hr-module-header': 'Recursos Humanos',
      'section-products-human-resources-hr-module-#1': 'El módulo de Recursos Humanos de nuestra herramienta ofrece una completa gestión de la información de los empleados en tu empresa. Este módulo se enfoca en potenciar el activo más valioso de tu empresa: el capital humano. A través de él, podrás gestionar de manera efectiva la información y el talento de tus empleados. Este módulo abarca las siguientes funcionalidades clave:',
      'section-products-human-resources-hr-module-#1-1': 'Gestión de datos maestros del empleado',
      'section-products-human-resources-hr-module-#1-2': 'Control de ingresos y beneficios extraordinarios',
      'section-products-human-resources-hr-module-#1-3': 'Seguimiento de descuentos',
      'section-products-human-resources-hr-module-#1-4': 'Gestión de vacaciones',
      'section-products-human-resources-hr-module-#1-5': 'Registro de novedades y cambios',
      'section-products-human-resources-hr-module-#1-6': 'Seguimiento del historial disciplinario',
      'section-products-human-resources-hr-module-#1-7': 'Administración de prestaciones laborales',
      'section-products-human-resources-hr-module-#1-8': 'Gestión de licencias médicas y permisos',
      'section-products-human-resources-hr-module-#1-9': 'Informes de empleados: Proporciona una amplia variedad de informes, como la lista de empleados, el calendario de vacaciones, el historial de cambios y novedades, y otros informes necesarios para la toma de decisiones y el cumplimiento normativo.',
      'section-products-human-resources-hr-module-#1-10': 'Entre otros',
      'section-products-human-resources-payroll-module-header': 'Nómina',
      'section-products-human-resources-payroll-module-#1': 'Dentro de nuestro sistema de Gestión de Recursos Humanos (HRM), el módulo de Nómina desempeña un papel fundamental al garantizar una correcta administración de los pagos y remuneraciones de tus empleados. Este módulo ofrece las siguientes funcionalidades:',
      'section-products-human-resources-payroll-module-#1-1': 'Procesamiento de la nómina',
      'section-products-human-resources-payroll-module-#1-2': 'Exportación/transferencia de nómina',
      'section-products-human-resources-payroll-module-#1-3': 'Exportación/transferencia de recepción de pago',
      'section-products-human-resources-payroll-module-#1-4': 'Gestión de regalías',
      'section-products-human-resources-payroll-module-#1-5': 'Exportación/transferencia de regalías',
      'section-products-human-resources-payroll-module-#1-6': 'Administración de bonificaciones',
      'section-products-human-resources-payroll-module-#1-7': 'Exportación/transferencia de bonificación',
      'section-products-human-resources-payroll-module-#1-8': 'Generación de informes: Proporciona una amplia variedad de informes relacionados con la nómina, como historial de pagos, descuento de ley, informes requeridos por la Tesorería de la Seguridad Social (TSS), comprobantes de pago y resúmenes de ingresos devengados.',
      'section-products-human-resources-payroll-module-#1-9': 'Entre otros',
      'section-products-human-resources-payroll-module-#2': 'Con nuestro módulo de Nómina, puedes asegurarte de que tus empleados reciban sus pagos de manera precisa y oportuna, además de contar con la capacidad de exportar la información necesaria hacia otros sistemas externos para su posterior procesamiento contable y financiero.',
      'section-products-chat-bot-bot-header': 'Bot',
      'section-products-chat-bot-agent-header': 'Agente',
      'section-products-chat-bot-#1': 'El ChatBot cuenta con dos elementos principales: el Bot y un agente de mensajeria.',
      'section-products-chat-bot-#2': 'El Bot es una aplicación de software diseñada y programada para realizar tareas específicas de manera automatizada. Esto significa que puede ejecutarse según sus instrucciones sin la necesidad de intervención manual por parte de un usuario humano. Los bots son especialmente útiles para llevar a cabo tareas repetitivas y pueden realizarlas de manera más rápida y eficiente que las personas.',
      'section-products-chat-bot-#3': 'En el contexto del ChatBot, el Bot es el componente principal que interactúa con los clientes. Está programado para comprender y responder a consultas, brindar información, realizar transacciones y ofrecer asistencia en general. El Bot utiliza algoritmos y técnicas de procesamiento del lenguaje natural para comprender el contexto y proporcionar respuestas relevantes y precisas.',
      'section-products-chat-bot-#4': 'El agente de mensajería es la herramienta que permite a tu equipo de servicio al cliente dar seguimiento y verificar los datos e interacciones de los clientes con el Bot. Se trata de una aplicación con una interfaz intuitiva que facilita la gestión y supervisión de las conversaciones entre el Bot y los clientes.',
      'section-products-chat-bot-#5': 'El agente de mensajería proporciona a tu equipo de servicio al cliente una visión completa de las interacciones de los clientes con el Bot. Permite revisar las conversaciones, obtener información adicional, responder preguntas específicas y brindar acciones concretas más allá de las capacidades del Bot. Con esta herramienta, tu equipo puede intervenir y proporcionar asistencia personalizada cuando sea necesario, mejorando la experiencia del cliente y resolviendo problemas más complejos.',
      'section-products-chat-bot-#6': 'En resumen, el ChatBot consta de un Bot automatizado que interactúa con los clientes para brindar respuestas y realizar tareas, y de un agente de mensajería que permite a tu equipo de servicio al cliente dar seguimiento y brindar asistencia adicional. Esta combinación de elementos mejora la eficiencia, la atención personalizada y la satisfacción del cliente al proporcionar respuestas rápidas y precisas, así como una intervención humana cuando sea necesario.',
      'section-products-chat-bot-#7': 'Existen dos grandes beneficiarios en la implementación de nuestro ChatBot: sus clientes y su institución.',
      'section-products-chat-bot-#8': 'Nuestro ChatBot está integrado con dos de las aplicaciones líderes en el mercado de la mensajería: WhatsApp y Telegram. Esta integración proporciona a tu institución una amplia cobertura y acceso a una base de usuarios masiva que utiliza estas plataformas de mensajería.',
      'section-products-chat-bot-#9': 'Al integrar el ChatBot con WhatsApp, tus clientes podrán interactuar con el Bot directamente a través de la aplicación de WhatsApp en sus dispositivos móviles. Esto les brinda comodidad y familiaridad, ya que WhatsApp es una de las aplicaciones de mensajería más utilizadas en todo el mundo. Tus clientes podrán enviar consultas, realizar transacciones y recibir respuestas instantáneas de manera rápida y sencilla, utilizando la interfaz de WhatsApp que ya conocen.',
      'section-products-chat-bot-#10': 'La integración con Telegram también ofrece beneficios significativos. Telegram es una aplicación de mensajería muy popular y cuenta con una amplia base de usuarios. Al permitir que tus clientes interactúen con el ChatBot a través de Telegram, les brindas otra opción conveniente para comunicarse y obtener asistencia en tiempo real. La integración con Telegram amplía el alcance del ChatBot y te permite llegar a más clientes potenciales.',
      'section-products-chat-bot-#11': 'La elección de integrar el ChatBot con estas dos aplicaciones líderes en el mercado de la mensajería te brinda la oportunidad de llegar a una amplia audiencia y ofrecer una experiencia de usuario fluida y conveniente. Además, ambas plataformas ofrecen opciones de seguridad y encriptación para proteger la privacidad de las conversaciones entre el ChatBot y tus clientes.',
      'section-products-chat-bot-clients-header': 'Clientes',
      'section-products-chat-bot-clients-#1': 'Algunos de los beneficios que tendrán tus clientes son los siguientes:',
      'section-products-chat-bot-clients-#1-1': 'Respuesta inmediata e ininterrumpida: El ChatBot está disponible las 24 horas del día, los 7 días de la semana, lo que permite a los clientes obtener respuestas rápidas y en tiempo real a sus consultas o necesidades, sin importar la hora del día.',
      'section-products-chat-bot-clients-#1-2': 'Atención personalizada y adecuada al cliente: El ChatBot está programado para brindar una atención personalizada, adaptándose a las necesidades y preferencias de cada cliente. Puede ofrecer recomendaciones específicas, responder preguntas personalizadas y brindar asistencia adaptada a cada situación.',
      'section-products-chat-bot-clients-#1-3': 'Transacciones instantáneas: Los clientes pueden realizar transacciones de forma instantánea a través del ChatBot, como realizar compras, realizar consultas de saldo, programar citas, solicitar información, entre otros, sin la necesidad de esperar en largas colas o esperar respuestas por otros canales de comunicación.',
      'section-products-chat-bot-clients-#1-4': 'Mayor satisfacción con el servicio: La disponibilidad ininterrumpida, la atención personalizada y la capacidad de realizar transacciones de manera instantánea contribuyen a aumentar la satisfacción general de los clientes con el servicio ofrecido por la institución.',
      'section-products-chat-bot-institution-header': 'Institución',
      'section-products-chat-bot-institution-#1': 'Algunos de los beneficios que tendrá tu institución son los siguientes:',
      'section-products-chat-bot-institution-#1-1': 'Personalización a la medida de su imagen comercial: El ChatBot puede ser personalizado para reflejar la identidad y los valores de la institución, brindando una experiencia coherente y alineada con la imagen de la empresa.',
      'section-products-chat-bot-institution-#1-2': 'Optimización del tiempo de gestión comercial: Al automatizar respuestas y tareas, el ChatBot permite a la institución ahorrar tiempo y recursos en la gestión de consultas y transacciones repetitivas, lo que a su vez mejora la eficiencia operativa.',
      'section-products-chat-bot-institution-#1-3': 'Atención a clientes 24x7x365: Con el ChatBot, la institución puede ofrecer atención a los clientes en cualquier momento, incluso fuera del horario laboral. Esto garantiza una disponibilidad constante y mejora la satisfacción del cliente al poder recibir asistencia cuando más la necesitan.',
      'section-products-chat-bot-institution-#1-4': 'Mejora de la experiencia del cliente y la imagen de la empresa: El ChatBot brinda una experiencia de atención al cliente ágil y eficiente, lo que mejora la percepción general de la institución y fortalece su imagen de marca.',
      'section-products-chat-bot-institution-#1-5': 'Potenciación de los planes de marketing: El ChatBot puede utilizarse como una herramienta de marketing para promocionar productos, ofrecer recomendaciones personalizadas y enviar ofertas y promociones masivas de manera segmentada, lo que ayuda a impulsar las estrategias de marketing de la institución.',
      'section-products-chat-bot-institution-#1-6': 'Paquetes de ofertas enviadas masivamente: El ChatBot puede enviar ofertas y promociones de manera masiva a los clientes, lo que permite llegar a un público amplio de manera eficiente y efectiva.',
      'section-products-chat-bot-institution-#1-7': 'Fidelización de los clientes y promociones personalizadas: El ChatBot puede contribuir a la fidelización de los clientes al brindar un servicio personalizado, recordar preferencias y ofrecer promociones exclusivas adaptadas a cada cliente, lo que aumenta la satisfacción y la lealtad.',
      'section-products-chat-bot-brochures': 'Ver folletos',
      'section-products-crm-#1': 'Experimente el poder de nuestro software CRM flexible, diseñado para impulsar sus esfuerzos de ventas y aumentar las tasas de conversión de prospectos. Con la capacidad de personalizar, desarrollar, integrar o incluso reemplazar cualquier componente, nuestro software le permite adaptar su enfoque a cada cliente potencial y aprovechar cada oportunidad.',
      'section-products-crm-#2': 'Nuestro software CRM proporciona un conjunto integral de herramientas para administrar y nutrir a sus prospectos de manera efectiva. Desde la captura de la información de contacto inicial hasta el seguimiento de sus interacciones y preferencias, nuestro software le garantiza una visión completa del recorrido de cada cliente potencial. Personalice campos y categorías para capturar los detalles específicos que más importan en su proceso de ventas, lo que le permite interactuar con los prospectos de una manera más específica y personalizada.',
      'section-products-crm-#3': 'Pero nuestro software CRM no se detiene en la gestión de datos. Ofrece capacidades de automatización avanzadas para agilizar sus esfuerzos de prospección. Configure seguimientos automatizados, programe recordatorios para puntos de contacto importantes y active comunicaciones personalizadas basadas en el comportamiento de los clientes potenciales. Al automatizar estas tareas, puede concentrarse en crear conexiones significativas con sus prospectos y cerrar tratos más rápido.',
      'section-products-crm-#4': 'Además, nuestro software CRM le permite generar informes y análisis detallados sobre la actividad de los clientes potenciales, lo que le permite realizar un seguimiento del rendimiento, identificar tendencias y refinar sus estrategias de ventas. Con acceso a estos valiosos datos, puede tomar decisiones basadas en datos, optimizar su proceso de prospección y lograr un mayor éxito.',
      'section-products-crm-#5': 'Libere el potencial de nuestro software CRM y revolucione la forma en que interactúa con los prospectos. Personalice, automatice y analice con facilidad, y observe cómo se disparan las tasas de conversión de sus prospectos. Experimente la flexibilidad y el poder de nuestro software CRM para maximizar su potencial de ventas e impulsar un crecimiento comercial duradero.',
      'section-products-timesched-#1': 'Con Timesched, se logra una organización precisa, permitiendo a los profesionales de la salud optimizar su tiempo y ofrecer un servicio más eficaz. Además, la plataforma brinda la posibilidad de realizar un seguimiento detallado de la disponibilidad de los médicos, gestionar cancelaciones y reprogramaciones, y mantener un registro completo de las citas pasadas y futuras. En resumen, Timesched no solo simplifica la gestión de citas, sino que también contribuye a mejorar la eficiencia y la experiencia general tanto para el personal médico como para los pacientes.',
      'section-products-timesched-#2': 'Timesched, al proporcionar el control total de la gestión de citas, se destaca por estar repleto de características que mejoran significativamente la eficiencia y la experiencia en la administración de citas y servicios. ',
      'section-products-timesched-#3': 'En conjunto, estas características hacen que Timesched sea una herramienta integral y poderosa para la gestión de citas, proporcionando un entorno eficiente y organizado que beneficia tanto a los profesionales de la salud como a los pacientes.',
      'section-products-timesched-#4': 'Algunas imágenes del dashboard',
      'section-products-timesched-#5': 'Bienvenido a la revolución en la gestión de citas y servicios profesionales. Presentamos con orgullo Timesched, la solución integral diseñada para empoderar a los profesionales de la salud y brindar una experiencia excepcional a los pacientes. En este folleto, exploraremos las características destacadas que hacen de Timesched una herramienta indispensable en la administración de citas, desde su flexibilidad para programar citas recurrentes hasta la visualización detallada de agendas por consultorios. Descubra cómo Timesched transforma la gestión, permitiendo una atención más eficiente, una organización sin esfuerzo y una satisfacción superior para todos.',
      'section-products-timesched-#6': 'En conclusión, Timesched no es simplemente un software de gestión de citas; es un aliado estratégico para su práctica. Con la capacidad de optimizar la agenda, gestionar especialistas, y ofrecer un control total sobre la facturación y los anticipos, Timesched se destaca como la herramienta completa que eleva la eficiencia operativa y mejora la calidad de atención. No deje pasar la oportunidad de simplificar su práctica y proporcionar a sus pacientes una experiencia de servicio inigualable. ¡Descubra el futuro de la gestión con Timesched hoy mismo!',
      'section-products-timesched-feature': 'Entre estas características, se incluyen:',
      'section-products-timesched-feature-#1': 'Flexibilidad en la Creación de Citas: La capacidad de crear citas únicas o recurrentes, adaptándose a las necesidades específicas de los pacientes y del personal profesional.',
      'section-products-timesched-feature-#2': 'Citas Recurrentes: Posibilidad de programar citas que se repiten periódicamente, como, por ejemplo, citas mensuales o semanales. Facilitando la gestión de seguimientos que requieren múltiples sesiones.',
      'section-products-timesched-feature-#3': 'Referencias a Otros Profesionales: Facilita la coordinación entre distintos profesionales, permitiendo la referencia de pacientes a otros especialistas de manera sencilla.',
      'section-products-timesched-feature-#4': 'Gestión de Citas Bajo Diferentes Condiciones: Permite programar citas bajo diversas condiciones, adaptándose a las políticas y requisitos específicos del centro.',
      'section-products-timesched-feature-#5': 'Control de Cancelaciones: Ofrece una gestión eficiente de cancelaciones, con la posibilidad de generar cargos de forma automática, asegurando una administración financiera efectiva.',
      'section-products-timesched-feature-#6': 'Asignación de Consultorios a Especialistas: Optimiza la asignación de consultorios a especialistas, mejorando la organización y la utilización de los recursos disponibles.',
      'section-products-timesched-feature-#7': 'Calendario Generador de Citas: Proporciona una visión clara y organizada del calendario, facilitando la programación y la gestión diaria de citas.',
      'section-products-timesched-feature-#8': 'Visualización de Citas por Consultorios: Permite a los usuarios visualizar de manera rápida y eficiente las citas asignadas a cada consultorio. Facilitando la distribución equitativa de pacientes entre los diferentes espacios de atención.',
      'section-products-timesched-feature-#9': 'Gestión de Especialistas y Disponibilidad: Permite a los administradores y coordinadores gestionar la carga de trabajo de los especialistas, garantizando una distribución eficiente de citas. Esto ofrece información en tiempo real sobre la disponibilidad de cada especialista, facilitando la programación y evitando conflictos de agenda.',
      'section-products-timesched-feature-#10': 'Anticipos de Pacientes y Conciliación de Anticipos: Permite registrar anticipos realizados por los pacientes como parte del proceso de reserva o prepago. Facilitando la conciliación de anticipos, asegurando un seguimiento preciso de los pagos realizados por los pacientes antes de recibir servicios médicos.',
      'section-products-timesched-feature-#11': 'Dashboard: Ofrece un panel centralizado que brinda una visión panorámica de las métricas clave y el estado general del centro. Incluye gráficos visuales, estadísticas y resúmenes que facilitan la toma de decisiones rápidas y la supervisión efectiva de la operación.',
      'section-products-timesched-feature-#12': 'Historial de Pacientes: Facilita el acceso a un historial completo de pacientes, mejorando la atención al cliente y permitiendo un enfoque más personalizado.',
      'section-products-timesched-feature-#13': 'Control Integral de Facturas y Cobros: Simplifica la gestión financiera con un control exhaustivo de facturas y cobros, contribuyendo a una administración más efectiva y transparente',
      'section-products-timesched-feature-#14': 'Reportes de Comisiones: Genera informes detallados sobre las comisiones generadas por los profesionales de la salud. Facilitando la transparencia en los ingresos y proporciona una visión clara del rendimiento financiero de cada especialista.',
      'section-products-timesched-feature-#15': 'Privilegios de Usuarios y Limitación de Acceso: Garantiza la seguridad y la privacidad con privilegios de usuarios detallados y la limitación de acceso por hora.',
      'section-products-chatalph-#1': 'En un mundo interconectado y digital, la gestión efectiva de las conversaciones en línea se ha convertido en una piedra angular para el éxito empresarial. En este contexto, Chat-Alph se erige como una plataforma de gestión de conversaciones que va más allá de las expectativas, ofreciendo una solución integral para la comunicación con los clientes en diversos canales.',
      'section-products-chatalph-#2': 'Conecta con canales populares de comunicación con el cliente como WhatsApp, Instagram, Facebook, Telegram, SMS, correo electrónico, chat en vivo en el sitio web, entre otros. Esto te permite ofrecer una experiencia consistente al cliente a través de diversos canales, todo desde un único panel de control.',
      'section-products-chatalph-#3': 'Este prodcuto emerge como una solución integral y versátil para la gestión eficiente de conversaciones en línea. Al conectar con una amplia gama de canales de comunicación populares, desde WhatsApp y Facebook hasta SMS y chat en vivo en el sitio web, proporciona una plataforma centralizada desde la cual las empresas pueden ofrecer una experiencia consistente y personalizada a sus clientes.',
      'section-products-chatalph-#4': 'La capacidad de conectarse con clientes a través de múltiples canales, junto con funciones como el chat en vivo, la colaboración en equipo sin problemas y la automatización inteligente, hacen que este prodcuto sea una herramienta indispensable para mejorar la productividad y la calidad del servicio. La flexibilidad de integración con chatbots y otras plataformas mediante API permite adaptarse a las necesidades específicas de cada empresa.',
      'section-products-chatalph-#5': 'Con características adicionales como etiquetas para organizar conversaciones, notas privadas para la colaboración interna y respuestas predefinidas para agilizar respuestas frecuentes, este producto se presenta como una solución completa y fácil de usar. Ya sea para pequeñas empresas o grandes corporativos. Se ofrece una gestión de conversaciones eficaz que simplifica la interacción con los clientes y mejora la eficiencia operativa. En resumen, esta es una herramienta definitiva para transformar la forma en que las empresas se comunican y se conectan con sus clientes en línea.',
      'section-products-chatalph-#6': 'Únete a nosotros en la revolución de la gestión de conversaciones en línea. Transforma la forma en que te comunicas y conectas con tus clientes, brindándoles una experiencia excepcional y llevando tu negocio al siguiente nivel.',
      'section-products-chatalph-feature-#1': 'Conecta con tus clientes a través de más de un canal',
      'section-products-chatalph-feature-#1-1': 'Vincula tu página de Facebook y mensajes directos de Instagram para ver todas las conversaciones desde Messenger.',
      'section-products-chatalph-feature-#1-2': 'Crea una cuenta comercial para WhatsApp, conéctala y comienza a interactuar con tus clientes.',
      'section-products-chatalph-feature-#1-3': 'Utiliza el canal API para abordar casos de uso personalizados. Las API nos brindan flexibilidad para integrarse con cualquier herramienta de terceros.',
      'section-products-chatalph-feature-#2': 'Facilita la participación del cliente, permitiendo que tu equipo sea más productivo, rápido y colabore sin cambiar de aplicaciones.',
      'section-products-chatalph-feature-#2-1': 'Chat en vivo en el sitio web: Un chat en vivo simple y elegante para tu sitio web.',
      'section-products-chatalph-feature-#2-2': 'Colaboración en equipo: Comunícate con tus compañeros de equipo sin salir de la plataforma. Usa notas privadas para mencionar a tus colegas y conversar con ellos sobre las interacciones con los clientes.',
      'section-products-chatalph-feature-#2-3': 'Automatiza tus tareas repetitivas: Configura reglas de automatización para manejar las tareas más tediosas, de modo que tus clientes reciban toda tu atención.',
      'section-products-chatalph-feature-#2-4': 'Bandeja de entrada omnicanal: Conecta cualquier canal y comunícate con tus clientes desde un solo lugar.',
      'section-products-chatalph-feature-#2-5': 'Chatbots: Intégrate fácilmente con plataformas de chatbot como Rasa o Dialogflow para reducir la carga de trabajo de tus agentes.',
      'section-products-chatalph-feature-#2-6': 'Etiquetas: Añade etiquetas a las conversaciones para mantenerlas organizadas.',
      'section-products-chatalph-feature-#2-7': 'Notas privadas: Discute de forma privada las consultas de los clientes con tus compañeros de equipo.',
      'section-products-chatalph-feature-#2-8': 'Horario comercial: Informa a los clientes cuando no estás disponible para responder sus preguntas.',
      'section-products-chatalph-feature-#2-9': 'Respuestas predefinidas: Responde a preguntas frecuentes mediante respuestas predefinidas.',

      //======= Products details Section =======
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
