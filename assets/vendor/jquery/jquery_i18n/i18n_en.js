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
    'en': {
      'title': 'Alphnology - Multiservices',
      'read-more': 'Read more',
      'history': 'History',
      'phone': 'Phones',
      'email': 'Mail',
      'contact-us': 'Contact us',
      'address': 'Address',
      'schedules': 'Schedules',
      'schedules-day': 'Monday - Friday',
      'contact': 'Contact',
      'services': 'Services',
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
      'section-history-paragraph-#6': 'We are Hector, Freddy, and David, together we form Alphnology, a story that began with two young software developers in 2009, and now seeking with new ideas and proposals be able to provide multiple technological services that allow our collaborators to meet their goals, all this through tools designed and developed with the user always in mind.',
      //======= History Section =======
      //
      //======= Footer Section =======
      'section-footer-header-#1': 'We offer solutions to grow your business.',
      'section-footer-header-#2': 'Helpful links',
      //
      //======= Footer Section =======
      //  
      //======= Services details Section =======
      'section-services-software-development-#1': 'Alphnology is a team of professionals focused on the development of solutions that help your business grow.',
      'section-services-software-development-#2': 'Desarrollar productos tecnológicos a la medida de las necesidades de nuestros clientes es nuestro norte, todo esto, apoyado en las mejores metodologías de desarrollo de software, aplicando los procedimientos y controles adecuados para asegurar la calidad de los mismos. La eficacia a la hora de entregar los resultados nos mueve.',
      'section-services-software-development-#3': 'The accumulated experience throughout the years has led to the master of languages and technologies that allow us to find solutions to the needs of the customer. As a result, our designs and solutions have modular characteristics and take advantage of the benefits of reusing software.',
      'section-services-software-development-#4': 'This gives our customer more flexibility in their applications, maintenance is more effective and efficient, better performance and improved quality of the solutions.',
      'section-services-software-development-header-#1': 'Customize development',
      'section-services-software-development-header-#1-1': 'We develop custom software, we aim to automate your processes in an effective and efficient way.',
      'section-services-software-development-header-#1-2': 'Collaboration is key for us, because with this we can provide the technological tools that best suit our customers needs and allow them to be always up to date and prepare for the new economics and technological changes.',
      'section-services-software-development-header-#2': 'Web services',
      'section-services-software-development-header-#2-1': 'We develop a wide variety of apps destyn for services, focused on the needs society demands. The core of Alphnology lies in the integration of characteristics that add value to the different services we offer.',
      'section-services-software-development-header-#2-2': 'We are always looking the highest levels of modularity, granularity and reuse of the elements that conforms our systems, in order to meet that goal we focused on using the following state of the art technologies:',
      'section-services-software-development-header-#2-3': 'Container Orchestrators',
      'section-services-software-development-header-#2-4': 'Private cloud',
      'section-services-software-development-header-#2-5': 'Version controls',
      'section-services-software-development-header-#2-6': 'Continuous integration (CI)',
      'section-services-software-development-header-#2-7': 'Continuous delivery (CD)',
      'section-services-software-development-header-#2-8': 'Code coverage',
      'section-services-technical-consultancy-#1': 'A good selection and counseling on what systems and technological tools are needed to support an organization is crucial for that institution to thrive.',
      'section-services-technical-consultancy-#2': 'Our experts put our high level of expertise at the service of our customers to help them choose the best options. The objective is to accomplish a synergy between the organization objectives and the capabilities of the system they will have.',
      'section-services-technical-consultancy-#3': 'Our consultants capacity to gather information and requirements of the customers needs is based on their experience. The structures and tools to be used for the solutions to our customers needs are determined by collaboration between us and our customers, it is because of this collaboration that the results are solutions that our customers can take the most advantage of and during the longest period of time, in order to maximize the return of the investment.',
      'section-services-technical-consultancy-#4': 'According to our philosophy of global service, our expecilize teams will be able to plan, develop (if there is the need for a custom solution) and implement optimal technical services and tools.',
      'section-services-other-#1': 'We offer multiple services to support the growth of your business.',
      'section-services-other-#2': 'We have different business units dedicated to provide solutions and technological services for different areas of your business.',
      'section-services-other-#3': 'In order to follow our principle of service at a global level, we offer different options related to multiple areas of technology, so that any company or institution can obtain the right solution and optimal at any time.',
      'section-services-other-#4': 'Alphnology also offers services in the following technology areas:',
      'section-services-other-#4-1': 'Networks and telecommunications in general',
      'section-services-other-#4-2': 'System and server administration',
      'section-services-other-#4-3': 'Database administration',
      'section-services-other-#4-4': 'Design and development of web pages',
      'section-services-other-#4-5': 'Advice and administration of web domains',
      'section-services-other-#4-6': 'IT security management',
      'section-services-other-#4-7': 'Tax assistance',
      'section-services-other-#4-8': 'Financial assistance',
      'section-services-data-migration-#1': 'Our experts will migrate your databases and servers with close to none downtime. We migrate a wide variety of data and business logic diagrams. using the best practices of extraction, transformation and loading protocols, controlled by version in the market.',
      'section-services-data-migration-#2': 'We handle your data with high levels of scalability, this is based on the creation of automated systems of migration of data to process, analyze and mapping unlimited fields to your new database.  Using migration tools to automate the applications data transfer and have the appropriate change series until the desired outcome is accomplished.',
      'section-services-data-migration-#3': 'We develop automated migration systems, to migrate business rules/logics and perform fast updates to the existing business platforms. Our automated migration engine recognizes and personalizes XML elements in order to create mapping documents in a reliable and easy way. The frame is completely reusable and adaptable, this is why the changes can be done at the data structure level as in the data itself even after the migration is finalized.',
      'section-services-data-migration-#4': 'Our migration data experts have the global and interdisciplinary experience in the implementation of commercial solutions using the best methodologies, practices and tools. All this is possible due to the leading migration of open source, local and cloud base tools we use.',
      'section-services-technology-project-management-#1': 'Study, evaluate, select and purchase the technological tools your business needs is, by itself, a task that holds great significance and importance, because it represents a commitment at economical and business culture level.',
      'section-services-technology-project-management-#2': 'Once the tools are selected and the process of purchase and get them is done, a new question arises, how can we make sure that the implantation process and quality is what we as a business are expecting? Alphnology offers project management services to give the answer to that question.',
      'section-services-technology-project-management-#3': 'Our project management services seek to provide a guardian for your investment and a figure that will be able to coordinate internal and external stakeholders (employees and implementation consultants).',
      'section-services-technology-project-management-#4': 'Alphnology’s project managers have the experience in managing projects of technological implementation, as well as other commercial areas. Using different tools our project managers can provide clear and precise information on the status of your projects, determine the critical path of the project, organize and manage multiple resources, manage and mitigate change resistance and much more.',
      'section-services-technology-project-management-#5': 'Alphnology counts with project managers that handle and execute different project management methodologies, like waterfall, agile, among others. Some of the tools we use to manage projects are the following.',
      'section-services-technology-project-management-#5-1': 'Project planning',
      'section-services-technology-project-management-#5-2': 'Gantt charts',
      'section-services-technology-project-management-#5-3': 'Project scheduling',
      'section-services-technology-project-management-#5-4': 'Resource planning',
      'section-services-technology-project-management-#5-5': 'Team collaboration',
      'section-services-technology-project-management-#5-6': 'Time recording and tracking, as well as Issue tracking',
      'section-services-technology-project-management-#5-7': 'Project reporting',
      //======= Services details Section =======
      //
      //======= F.A.Q Section =======
      'section-faq-header': 'Frequent questions',
      'section-faq-questions-#1': 'Where can I communicate with you to get personalized information?',
      'section-faq-questions-#2': 'Where are you located?',
      'section-faq-questions-#3': 'If I wanted a preliminary evaluation for a new project, with preliminary data, is it possible to get it?',
      'section-faq-answer-#1-1': 'Send us an email to',
      'section-faq-answer-#1-2': 'or contact us on',
      'section-faq-answer-#1-3': 'and ',
      'section-faq-answer-#1-4': 'to the',
      'section-faq-answer-#2': 'We are a technology company that is focused on the freedom technology provides, because of this we work from everywhere, get in contact with us and we can coordinate a virtual meeting or a visit to your facilities.',
      'section-faq-answer-#3': 'Get in contact with us and we will be more than happy to evaluate and propose solutions for your projects.',
      //======= F.A.Q Section =======
      //
      // ======= Contact Section =======
      'section-contact-form-name': 'Your name',
      'section-contact-form-phone': 'Phone Number',
      'section-contact-form-mailer': 'Email',
      'section-contact-form-topic': 'Subject',
      'section-contact-form-content': 'Message',
      'section-contact-form-loading': 'Loading',
      'section-contact-form-error-message': 'The mail could not be sent, please try again',
      'section-contact-form-sent-message': 'Your message has been sent. Thank you!',
      'section-contact-form-submit': 'Send Message',
      'section-contact-form-reset': 'Reset',
      // ======= Contact  Section=======
    }
  });

  update_texts();
});