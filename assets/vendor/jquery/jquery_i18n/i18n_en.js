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
      'prodcuts': 'Prodcuts',
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
      'section-services-details': 'Technological Multi-Services',
      'section-services-header-#1': 'Software Development',
      'section-services-details-#1': 'We provide support to our users by developing new applications, maintaining existing applications, and providing transformative solutions tailored to your business needs.',
      'section-services-header-#2': 'Data Migration (ETL)',
      'section-services-details-#2': 'Creation and execution of the migration plan for different data types and business logic diagrams using the best practices for extraction, transformation , and loading of data (ETL), based on robust version control protocols.',
      'section-services-header-#3': 'Technology Project Management',
      'section-services-details-#3': 'Planning, organization, execution and quality assurance of all technological projects and business projects in general, using methodologies and best practices in the market.',
      'section-services-header-#4': 'Technical Consultancy',
      'section-services-details-#4': 'Personalized advice and the strategic support to successfully complete the digital transformation of your business.',
      'section-services-header-#5': 'Others',
      'section-services-details-#5': 'We offer multiple services to support the growth of your business.',
      //======= Services Section =======
      //
      //======= Products Section =======
      'section-products-header': 'Products',
      'section-products-details': 'Product Catalogue',
      'section-products-header-#1': 'Chat Bot - AI',
      'section-products-details-#1': 'Our Chatbot solution expands your customer reach automatically. Available 24/7, it streamlines support, freeing your team for critical issues. Customizable to your brand and integrated with multiple channels, it enhances customer experience, satisfaction, and business growth.',
      'section-products-header-#2': 'Human Resources System',
      'section-products-details-#2': 'Our solution effectively manages your company`s human capital. Efficiently track employee data, automate workflows, and enhance communication. Gain insights, boost productivity, and nurture a thriving workforce with our robust solution.',
      'section-products-header-#3': 'CRM ',
      'section-products-details-#3': 'Offers an unparalleled level of flexibility. You have the freedom to customize, build upon, integrate alongside, or even replace any component to perfectly align with your specific requirements. The CRM template comes equipped with a wide range of customizable features that empower you to streamline your sales processes with utmost efficiency.',
      'section-products-header-#4': 'Case Management',
      'section-products-details-#4': 'Highly advanced Case Management, which offers a remarkable level of flexibility. You can easily customize, build upon, integrate alongside, or even replace any component to perfectly align with your specific requirements.',
      'section-products-header-#5': 'Single Sign-On (SSO)',
      'section-products-details-#5': 'Add authentication to applications and secure services with minimum effort. No need to deal with storing users or authenticating users. SSO system provides user federation, strong authentication, user management, fine-grained authorization, and more.',
      'section-products-header-#6': 'Change Data Capture (CDC)',
      'section-products-details-#6': 'Start it up, point it at your databases, and your apps can start responding to all of the inserts, updates, and deletes that other apps commit to your databases. CDC is durable and fast, so your apps can respond quickly and never miss an event, even when things go wrong.',
      'section-products-header-#7': 'Workflow',
      'section-products-details-#7': 'Automation engine that models and executes business processes.  Workflow will asynchronously handle the execution of each action, working its way around transient errors and keeping an encrypted, auditable trace of all intermediary states until completion.',
      'section-products-header-#8': 'Proxy - Gateway - Load Balancer',
      'section-products-details-#8': 'Simplify networking complexity while designing, deploying, and operating applications. Reverse proxy and load balancer that makes deploying microservices easy, integrates with your existing infrastructure components and configures itself automatically and dynamically.',
      //======= Products Section =======
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
      'section-services-software-development-#2': 'Developing customized technological products tailored to the needs of our clients is our guiding principle. All of this is supported by the best software development methodologies, applying the appropriate procedures and controls to ensure their quality. Efficiency in delivering results drives us.',
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
      //======= Products details Section =======
      'section-products-human-resources-#1': 'HRM is a comprehensive system designed to effectively manage the human capital, which is recognized as the most valuable asset within a company. With the understanding that employees play a crucial role in the success of an organization, our HRM system is built to support their development and well-being.',
      'section-products-human-resources-#2': 'Our system is specifically tailored to comply with the legal and tax framework of the Dominican Republic, ensuring that all HR and payroll processes align with the applicable regulations. By adhering to the country`s specific requirements, we provide a reliable and compliant solution for businesses operating in the Dominican Republic.',
      'section-products-human-resources-#3': 'The Human Resources module within our HRM system serves as a centralized hub for managing all employee-related information and processes. From maintaining master employee data to tracking vacation requests and disciplinary history, this module empowers HR professionals to efficiently handle various aspects of employee management. It also includes features such as organizational structure management and employee reporting, enabling businesses to gain insights into their workforce and make informed decisions.',
      'section-products-human-resources-#4': 'The Payroll module, on the other hand, focuses on streamlining the complex task of salary and compensation management. It encompasses the calculation of salaries, deductions, taxes, and other payroll-related components, ensuring accurate and timely payments to employees. Additionally, the module allows for the export and transfer of payroll information to preferred ERP systems or external platforms, facilitating seamless integration with other financial and accounting processes.',
      'section-products-human-resources-#5': 'By combining these two powerful modules, our HRM system provides a comprehensive solution that optimizes human capital management, enhances operational efficiency, and promotes legal compliance. It empowers businesses in the Dominican Republic to effectively handle their HR and payroll functions, ultimately contributing to the overall success and growth of their organization.',
      'section-products-human-resources-#6': 'With these two modules, our tool provides a comprehensive solution for the human management of your company, allowing efficient management of human resources and the generation of accurate and exportable payroll.',
      'section-products-human-resources-brochures': 'See brochures',
      'section-products-human-resources-hr-module-header': 'Human Resources',
      'section-products-human-resources-hr-module-#1': 'The Human Resources module of our tool offers complete management of employee information in your company. This module focuses on enhancing your company`s most valuable asset: human capital. Through it, you will be able to effectively manage the information and talent of your employees. This module covers the following key functionalities:',
      'section-products-human-resources-hr-module-#1-1': 'Employee master data management',
      'section-products-human-resources-hr-module-#1-2': 'Control of income and extraordinary benefits',
      'section-products-human-resources-hr-module-#1-3': 'Discount tracking',
      'section-products-human-resources-hr-module-#1-4': 'Vacation management',
      'section-products-human-resources-hr-module-#1-5': 'Record of news and changes',
      'section-products-human-resources-hr-module-#1-6': 'Track disciplinary history',
      'section-products-human-resources-hr-module-#1-7': 'Administration of labor benefits',
      'section-products-human-resources-hr-module-#1-8': 'Management of medical licenses and permits',
      'section-products-human-resources-hr-module-#1-9': 'Employee Reports: Provides a wide variety of reports, such as employee list, vacation schedule, change and news history, and other reports required for decision-making and regulatory compliance.',
      'section-products-human-resources-hr-module-#1-10': 'Among others',
      'section-products-human-resources-payroll-module-header': 'Payroll',
      'section-products-human-resources-payroll-module-#1': 'Within our Human Resources Management (HRM) system, the Payroll module plays a fundamental role in guaranteeing proper administration of your employees`s payments and remunerations. This module offers the following functionalities:',
      'section-products-human-resources-payroll-module-#1-1': 'Payroll processing',
      'section-products-human-resources-payroll-module-#1-2': 'Export/transfer of payroll',
      'section-products-human-resources-payroll-module-#1-3': 'Export/transfer receipt of payment',
      'section-products-human-resources-payroll-module-#1-4': 'Royalty management',
      'section-products-human-resources-payroll-module-#1-5': 'Export/transfer of royalties',
      'section-products-human-resources-payroll-module-#1-6': 'Administration of bonuses',
      'section-products-human-resources-payroll-module-#1-7': 'Export/transfer bonus',
      'section-products-human-resources-payroll-module-#1-8': 'Reporting: Provides a wide variety of payroll-related reports, such as payment history, statutory discount, reports required by the Social Security Treasury (TSS), pay stubs, and earned income summaries.',
      'section-products-human-resources-payroll-module-#1-9': 'Among others',
      'section-products-human-resources-payroll-module-#2': 'With our Payroll module, you can ensure that your employees receive their payments accurately and on time, as well as having the ability to export the necessary information to other external systems for subsequent accounting and financial processing.',
      'section-products-chat-bot-bot-header': 'Bot',
      'section-products-chat-bot-agent-header': 'Agent',
      'section-products-chat-bot-#1': 'The ChatBot has two main elements: the Bot and a messaging agent.',
      'section-products-chat-bot-#2': 'The Bot is a software application designed and programmed to perform specific tasks in an automated manner. This means that it can run according to your instructions without the need for manual intervention by a human user. Bots are especially useful for carrying out repetitive tasks and can perform them faster and more efficiently than people.',
      'section-products-chat-bot-#3': 'In the context of the ChatBot, the Bot is the main component that interacts with customers. It is programmed to understand and respond to inquiries, provide information, carry out transactions and offer general support. The Bot uses algorithms and natural language processing techniques to understand context and provide relevant and accurate responses.',
      'section-products-chat-bot-#4': 'The Messenger Agent is the tool that allows your customer service team to track and verify customer data and interactions with the Bot. It is an application with an intuitive interface that facilitates the management and supervision of the conversations between the Bot and the clients.',
      'section-products-chat-bot-#5': 'The Messenger Agent provides your customer service team with a complete view of customer interactions with the Bot. It allows you to review conversations, get additional information, answer specific questions and provide concrete actions beyond the capabilities of the Bot. With this tool, your team can step in and provide personalized assistance when needed, improving the customer experience and solving more complex problems.',
      'section-products-chat-bot-#6': 'In short, the ChatBot consists of an automated bot that interacts with customers to provide answers and perform tasks, and a messenger agent that allows your customer service team to follow up and provide additional assistance. This combination of elements improves efficiency, personalized attention and customer satisfaction by providing fast and accurate responses, as well as human intervention when necessary.',
      'section-products-chat-bot-#7': 'There are two great beneficiaries in the implementation of our ChatBot: your clients and your institution.',
      'section-products-chat-bot-#8': 'Our ChatBot is integrated with two of the leading applications in the messaging market: WhatsApp and Telegram. This integration provides your institution with broad coverage and access to a massive user base using these messaging platforms.',
      'section-products-chat-bot-#9': 'By integrating the ChatBot with WhatsApp, your customers will be able to interact with the Bot directly through the WhatsApp app on their mobile devices. This brings them comfort and familiarity as WhatsApp is one of the most widely used messaging apps around the world. Your customers will be able to send inquiries, make transactions and receive instant responses quickly and easily, using the WhatsApp interface they already know.',
      'section-products-chat-bot-#10': 'Integration with Telegram also offers significant benefits. Telegram is a very popular messaging app and has a wide user base. By allowing your customers to interact with the ChatBot through Telegram, you give them another convenient option to communicate and get real-time support. Integration with Telegram broadens the reach of the ChatBot and allows you to reach more potential customers.',
      'section-products-chat-bot-#11': 'Choosing to integrate the ChatBot with these two market-leading messaging apps gives you the opportunity to reach a wide audience and offer a seamless and convenient user experience. Additionally, both platforms offer security and encryption options to protect the privacy of conversations between the ChatBot and your customers.',
      'section-products-chat-bot-clients-header': 'Clients',
      'section-products-chat-bot-clients-#1': 'Some of the benefits that your clients will have are the following:',
      'section-products-chat-bot-clients-#1-1': 'Immediate and uninterrupted response: The ChatBot is available 24 hours a day, 7 days a week, allowing customers to get fast, real-time responses to their queries or needs, regardless of the time of day.',
      'section-products-chat-bot-clients-#1-2': 'Personalized and appropriate customer service: The ChatBot is programmed to provide personalized service, adapting to the needs and preferences of each customer. You can offer targeted recommendations, answer personalized questions, and provide support tailored to each situation.',
      'section-products-chat-bot-clients-#1-3': 'Instant transactions: Customers can carry out transactions instantly through the ChatBot, such as making purchases, making balance inquiries, scheduling appointments, requesting information, among others, without the need to wait in long lines or wait for responses through other communication channels.',
      'section-products-chat-bot-clients-#1-4': 'Greater satisfaction with the service: Uninterrupted availability, personalized attention and the ability to carry out transactions instantly contribute to increasing the general satisfaction of clients with the service offered by the institution.',
      'section-products-chat-bot-institution-header': 'Institution',
      'section-products-chat-bot-institution-#1': 'Some of the benefits that your institution will have are the following:',
      'section-products-chat-bot-institution-#1-1': 'Customization tailored to your business image: The ChatBot can be customized to reflect the identity and values of the institution, providing a coherent experience aligned with the company`s image.',
      'section-products-chat-bot-institution-#1-2': 'Optimization of commercial management time: By automating responses and tasks, the ChatBot allows the institution to save time and resources in the management of repetitive queries and transactions, which in turn improves operational efficiency.',
      'section-products-chat-bot-institution-#1-3': '24x7x365 customer service: With the ChatBot, the institution can offer customer service at any time, even outside business hours. This ensures constant availability and improves customer satisfaction by being able to receive support when they need it most.',
      'section-products-chat-bot-institution-#1-4': 'Improvement of the customer experience and the image of the company: The ChatBot provides an agile and efficient customer service experience, which improves the general perception of the institution and strengthens its brand image.',
      'section-products-chat-bot-institution-#1-5': 'Empowerment of marketing plans: The ChatBot can be used as a marketing tool to promote products, offer personalized recommendations and send offers and massive promotions in a segmented way, which helps to boost the marketing strategies of the institution.',
      'section-products-chat-bot-institution-#1-6': 'Bulk Offer Packages: The ChatBot can send bulk offers and promotions to customers, allowing you to reach a wide audience efficiently and effectively.',
      'section-products-chat-bot-institution-#1-7': 'Customer loyalty and personalized promotions: The ChatBot can contribute to customer loyalty by providing personalized service, remembering preferences and offering exclusive promotions tailored to each customer, increasing satisfaction and loyalty.',
      'section-products-chat-bot-brochures': 'See brochures',
      'section-products-crm-#1': 'Experience the power of our flexible CRM software, designed to supercharge your sales efforts and boost prospect conversion rates. With the ability to customize, build upon, integrate alongside, or even replace any component, our software empowers you to tailor your approach to each prospect and seize every opportunity.',
      'section-products-crm-#2': 'Our CRM software provides a comprehensive suite of tools to manage and nurture your prospects effectively. From capturing initial contact information to tracking their interactions and preferences, our software ensures you have a complete view of each prospect`s journey. Customize fields and categories to capture the specific details that matter most to your sales process, enabling you to engage with prospects in a more targeted and personalized manner.',
      'section-products-crm-#3': 'But our CRM software doesn`t stop at data management. It offers advanced automation capabilities to streamline your prospecting efforts. Set up automated follow-ups, schedule reminders for important touchpoints, and trigger personalized communications based on prospect behavior. By automating these tasks, you can focus on building meaningful connections with your prospects and closing deals faster.',
      'section-products-crm-#4': 'Furthermore, our CRM software allows you to generate insightful reports and analytics on prospect activity, enabling you to track performance, identify trends, and refine your sales strategies. With access to this valuable data, you can make data-driven decisions, optimize your prospecting process, and achieve greater success.',
      'section-products-crm-#5': 'Unlock the potential of our CRM software and revolutionize the way you engage with prospects. Customize, automate, and analyze with ease, and watch your prospect conversion rates soar. Experience the flexibility and power of our CRM software to maximize your sales potential and drive lasting business growth.',
      //======= Products details Section =======
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