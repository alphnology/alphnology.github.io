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
      'history': 'History',
      'phone': 'Phones',
      'email': 'Mail',
      'contact-us': 'Contact us',
      'address': 'Address',
      'schedules': 'Schedules',
      'contact': 'Contact',
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
      'section-hero-header': 'We offer solutions to help your business grow.',
      'section-hero-details': 'We are a team of talented professionals in the development of solutions that meet the needs of (your) business.',
      'section-hero-about': 'Get Started',
      //======= Hero Section =======
      //
      //======= About Section =======
      'section-about-about': 'About us',
      'section-about-mision': 'Mision',
      'section-about-mision-details': 'We believe that with the right tools, everyone can achieve their goal. By developing systematic solutions that meet your needs, we want to provide our support so that all of our business partners meet their goals.',
      'section-about-vision': 'Vision',
      'section-about-vision-details': 'Empower our business partners with the necessary tools to meet their objectives and build a better future.',
      'section-about-history-details': 'Alliances tend to form in the most unexpected ways, and even more so in the halls of universities, where young people with great ideas (and just as naive) share their thoughts about the world around them.',
      //======= About Section =======
      //
      //======= Values Section =======
      'section-values-header': 'Our values',
      'section-values-details': 'We believe in our mission and we work towards the future we want.',
      'section-values-#1': 'Passion',
      'section-values-#2': 'Quality',
      'section-values-#3': 'Change',
      'section-values-#4': 'Integrity',
      'section-values-#5': 'Productivity',
      //======= Values Section =======
      //
      //======= Services Section =======
      'section-services-header': 'Services',
      'section-services-details': 'Technological multi-services',
      'section-services-header-#1': 'Software development',
      'section-services-details-#1': 'We provide support to our users by developing new applications, maintaining existing applications, and providing transformative solutions tailored to your business needs.',
      'section-services-header-#2': 'Data migration (ETL)',
      'section-services-details-#2': 'Creation and execution of the migration plan for different data types and business logic diagrams using the best practices for extraction, transformation , and loading of data (ETL), based on robust version control protocols.',
      'section-services-header-#3': 'Technology project management',
      'section-services-details-#3': 'Planning, organization, execution and quality assurance of all technological projects and business projects in general, using methodologies and best practices in the market.',
      'section-services-header-#4': 'Technical consultancy',
      'section-services-details-#4': 'Personalized advice and the strategic support to successfully complete the digital transformation of your business.',
      'section-services-header-#5': 'Others',
      'section-services-details-#5': 'We offer multiple services to support the growth of your business.',
      //======= Services Section =======
      //
      //======= Team Section =======
      'section-team-header': 'Team',
      'section-team-details': 'Our team',
      'section-team-header-#1': 'Co-Founder and Software Engineer',
      'section-team-details-#1': 'Software engineer, technology department manager, and teacher. Master of Web Engineer (Computer Software Engineering) with over ten years of experience in Java software development (JSE and JEE) and over five years of experience in management and implementation of SAP Business One projects. Professor at PUCMM`s School of Computer and Telecommunications Engineering, a member of the Dominican Java Community, and an Open Source enthusiast.',
      'section-team-header-#2': 'Founder and Software Engineer',
      'section-team-details-#2': 'Software engineer and teacher. With more than 10 years of experience in development of scalable and high-concurrency systems. Professor of Linux Systems Administration at the Dominican Free Code Foundation and a professor at the Technological Institute of the Americas (ITLA). Member of the Dominican Java community and ardent supporter of open source software.',
      'section-team-header-#3': 'Co-founder and Commercial Director',
      'section-team-details-#3': 'Project manager, consultant and teacher. Master in management control, with more than 5 years of experience in project management, cost analysis and general consulting in commercial areas. Professor of the Projects Department at the Technological University of Santiago UTESA, with more than 3 years of experience. A fan of technology and its evolution.',
      //======= Team Section =======
      //
      //======= History Section =======
      'section-history-header': 'History of the company',
      'section-history-paragraph-#1': 'Alliances tend to form in the most unexpected ways, and even more so in the halls of universities, where young people with great ideas (and just as naive) share their thoughts about the world around them.',
      'section-history-paragraph-#2': 'Our story begins with the meeting of two young technology lovers, both with very clear ideas of what they understood was lacking in the Dominican market. The lack of quality technological tools to meet the needs of the market led them along the path of software development, seeking, according to their understanding, to provide the market with quality software, even though they still did not fully understand what this implied.',
      'section-history-paragraph-#3': 'The idea of commercializing software began in that student stage where they based their work on the fundamental principles of software and customer service.',
      'section-history-fundamental-principles-header': 'Fundamental principles of software',
      'section-history-fundamental-principles-#1': 'Robust and scalable system',
      'section-history-fundamental-principles-#2': 'Coupling and cohesion between the different elements',
      'section-history-fundamental-principles-#3': 'Easy to maintain over time',
      'section-history-fundamental-principles-#4': 'Meet customer needs',
      'section-history-fundamental-principles-#5': 'Usability',
      'section-history-fundamental-principles-#6': 'Use technology that meets customer requirements',
      'section-history-customer-service-header': 'Customer service',
      'section-history-customer-service-#1': 'Personalized and quality services',
      'section-history-customer-service-#2': 'Preventive and premature support',
      'section-history-customer-service-#3': 'Efficiency in problem solving',
      'section-history-paragraph-#4': 'They started the development adventure using the Java language, specifically with Java Swing, and with some opportunities, the story began.',
      'section-history-paragraph-#5': 'Over the years, they understood that in order to create a more robust platform that would allow them to develop larger projects in size and quality, they made the decision to formalize their entire process and, with it, add a third member to the adventure. The third member of the team, with his experience in commercial areas, sought to complement the masterminds behind the developments.',
      'section-history-paragraph-#6': 'We are Hector, Freddy, and David, together we form Alphnology, a story that began with two young software developers 10 years ago, and now seeking with new ideas and proposals be able to provide multiple technological services that allow our collaborators to meet their goals, all this through tools designed and developed with the user always in mind.',
      //======= History Section =======
      //
      //======= Footer Section =======
      'section-footer-header-#1': 'We offer solutions to grow your business.',
      'section-footer-header-#2': 'Helpful links',
    }
  });

  update_texts();
});