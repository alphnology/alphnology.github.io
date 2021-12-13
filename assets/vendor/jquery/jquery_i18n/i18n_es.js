jQuery(document).ready(function () {
  var update_texts = function () {
    $('body').i18n();
  };

  $('.lang-switch').click(function (e) {
    e.preventDefault();
    $.i18n().locale = $(this).data('locale');
    update_texts();
  });

  $.i18n().load({
    'es': {
      'title': 'Alphnology - Multiservicios',
      'read-more': 'Leer más',
      'section-history': 'Historia',
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
      'section-services-details-#1': 'Brindamos un soporte sin precedentes a nuestros usuarios mediante el desarrollo de nuevas aplicaciones, el mantenimiento de las aplicaciones existentes y el suministro de soluciones transformadoras adaptadas a su negocio.',
      'section-services-header-#2': 'Migración de datos (ETL)',
      'section-services-details-#2': 'Migramos una variedad de tipos de datos y diagramas de lógica empresarial, utilizando las mejores prácticas de extracción, transformación y carga (ETL) y protocolos de control de versiones robustos.',
      'section-services-header-#3': 'Gestión de proyectos tecnológicos',
      'section-services-details-#3': 'Aseguramos el éxito de sus proyectos con una visión y un enfoque metodológico y práctico.',
      'section-services-header-#4': 'Consultoría técnica',
      'section-services-details-#4': 'Te brindamos un asesoramiento personalizado y el soporte estratégico que necesitas para completar con éxito la transformación digital de tu negocio.',
      'section-services-header-#5': 'Otros',
      'section-services-details-#5': 'Ofrecemos una variedad de productos que te ayudarán a hacer crecer tu negocio.',
      //======= Services Section =======
      //
      //======= Team Section =======
      'section-team-header': 'Equipo',
      'section-team-details': 'Nuestro equipo',
      'section-team-header-#1': 'Cofundador e Ingeniero de Software',
      'section-team-details-#1': 'Ingeniero en sistemas, gerente de departamentos de tecnología y profesor por vocación. Master en Web Engineer (Computer Software Engineering), con más de 10 años de experiencia en desarrollo de software bajo tecnología Java (JSE y JEE) y más de 5 años de experiencia administrando e implementando proyecto de SAP Business One. Profesor de la Escuela de Ingeniería en Computación y Telecomunicaciones, PUCMM, miembro de la Comunidad Java Dominicano y amante del Open Source.',
      'section-team-header-#2': 'Fundador e Ingeniero de Software',
      'section-team-details-#2': 'Ingeniero en sistemas y profesor por vocación. Con más de 10 años de experiencia en desarrollo de sistemas escalables y de alta concurrencia. Fui profesor de Administración de Sistemas Linux en la Fundación Código Libre Dominicana y profesor del Instituto Tecnológico de las Américas (ITLA). Miembro de la comunidad Java Dominicano, fiel seguidor del Open Source.',
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
      'section-history-paragraph-#6': 'Nosotros somos Hector, Freddy, David y juntos formamos Alphnology, una historia que comenzó con dos jóvenes desarrolladores de software, hace ya 10 años, y que ahora buscan con nuevas ideas y propuestas brindar múltiples servicios tecnológicos que permitan a nuestros colaboradores cumplir sus metas, todo esto a través de herramientas pensadas y desarrolladas con el usuario siempre en mente.',
    }
  });

  update_texts();
});