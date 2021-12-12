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
    'en': {
      'title': 'Alphnology - Multiservices',
      'read-more': 'Read more',
      // ======= Header =======
      'header-navbar-home': 'Home',
      'header-navbar-about': 'About us',
      'header-navbar-services': 'Services',
      'header-navbar-portfolio': 'Products',
      'header-navbar-team': 'Team',
      'header-navbar-contact': 'Contact',
      // ======= Header =======
      //
      //======= Hero Section =======
      'section-hero-header': 'We offer solutions to grow your business',
      'section-hero-details': 'We are a team of talented professionals in the development of solutions that meet the needs of business.',
      'section-hero-about': 'Launch',
      //======= Hero Section =======
      //
      //======= About Section =======
      'section-about-about': 'About us',
      'section-about-mision': 'Mision',
      'section-about-mision-details': 'We believe that with the right tools, everyone can achieve their goals. By developing system solutions that meet your needs, we want to provide our support so that all of our employees achieve their goals.',
      'section-about-vision': 'Vision',
      'section-about-vision-details': 'Empower our employees with the necessary tools to meet their objectives and build a better future.',
      'section-about-history': 'History',
      'section-about-history-details': 'Alliances tend to form in the most unexpected ways, and even more so in the halls of universities, where young people with great ideas (and just as naive) share their thoughts about the world around them.',
      //======= About Section =======
      //
      //======= Values Section =======
      'section-values-header': 'Our values',
      'section-values-details': 'We believe in our mission and we work towards the future we want.',
      'section-values-#1': 'Passion',
      'section-values-#2': 'Change',
      'section-values-#3': 'Change',
      'section-values-#4': 'Integrity',
      'section-values-#5': 'Productivity',
      //======= Values Section =======
      //
      //======= Services Section =======
      'section-services-header': 'Servicios',
      'section-services-details': 'Technological multi-services',
      'section-services-header-#1': 'Software development',
      'section-services-details-#1': 'We provide unprecedented support to our users by developing new applications, maintaining existing applications, and providing transformative solutions tailored to your business.',
      'section-services-header-#2': 'Data migration (ETL)',
      'section-services-details-#2': 'We migrate a variety of data types and business logic diagrams using extract, transform, and load (ETL) best practices and robust version control protocols.',
      'section-services-header-#3': 'Technology project management',
      'section-services-details-#3': 'With a vision and a methodological and practical approach, we ensure the success of your projects.',
      'section-services-header-#4': 'Technical consultancy',
      'section-services-details-#4': 'We provide you with personalized advice and the strategic support you need to successfully complete the digital transformation of your business.',
      'section-services-header-#5': 'Others',
      'section-services-details-#5': 'We offer a variety of products to help you grow your business.',
      //======= Services Section =======
      //
      //======= Team Section =======
      'section-team-header': 'Team',
      'section-team-details': 'Our team',
      'section-team-header-#1': 'Co-Founder and Software Engineer',
      'section-team-details-#1': 'Software engineer, technology department manager, and teacher. Master of Web Engineer (Computer Software Engineering) with over ten years of experience in Java software development (JSE and JEE) and over five years of management and implementation of SAP Business One projects. Professor at PUCMM`s School of Computer and Telecommunications Engineering, a member of the Dominican Java Community, and an Open Source enthusiast.',
      'section-team-header-#2': 'Founder and Software Engineer',
      'section-team-details-#2': 'Systems engineer and teacher by vocation. with more than 10 years of experience in the development of scalable and high-concurrency systems. I was a professor of Linux Systems Administration at the Dominican Free Code Foundation and a professor at the Technological Institute of the Americas (ITLA). Member of the Dominican Java community and ardent supporter of open source software.',
      'section-team-header-#3': 'Co-founder and Commercial Director',
      'section-team-details-#3': 'Project manager, consultant and teacher by vocation. Master in management control (management control), with more than 5 years of experience in project management, cost analysis and general advice in commercial areas. Professor of the Projects Department at the Technological University of Santiago UTESA has been teaching for over 3 years. Fan of technology and its evolution.',
      //======= Team Section =======
    }
  });

  update_texts();
});