/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "300458483",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Waqas",
  logo_name: "diode02",
  nickname: "diode",
  full_name: "Muhammad Waqas",
  subTitle:
    "Full Stack Developer, Software Engineer, Open Source Enthusiast, Life Long Learner.",
  resumeLink: "https://google.com",
  mail: "mailto:mwaqasilyas01@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/diode02/",
  linkedin: "https://www.linkedin.com/in/diode02/",
  gmail: "mwaqasilyas01@gmail.com",
  // gitlab: "https://gitlab.com/harikanani",
  facebook: "https://www.facebook.com/qaskhan02/",
  twitter: "https://twitter.com/diode02/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly efficient Backend and interactive User Interfaces for web applications",
        "⚡ Building responsive website front end using HTML, CSS, ReactJS",
        "⚡ Creating application backend in Java, Spring Boot, Python, Ruby on Rails, Flask, Django and Fast-API",
        "⚡ Integration of third party services such as Azure/ AWS / GCP",
      ],
      softwareSkills: [
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Gradle",
          fontAwesomeClassname: "simple-icons:gradle",
          style: {
            color: "#02303A",
          },
        },
        {
          skillName: "Kafka",
          fontAwesomeClassname: "simple-icons:apachekafka",
          style: {
            color: "#383435",
          },
        },
        {
          skillName: "ELK Stack",
          fontAwesomeClassname: "simple-icons:elastic",
          style: {
            color: "#00ADD8",
          },
        },

        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#D24939",
          },
        },
        {
          skillName: "Kibana",
          fontAwesomeClassname: "simple-icons:kibana",
          style: {
            color: "#005571",
          },
        },
        {
          skillName: "Rails",
          fontAwesomeClassname: "simple-icons:rubyonrails",
          style: {
            color: "#D30001",
          },
        },
        {
          skillName: "Golang",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#00ADD8",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#A8B9CC",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#0c4b33",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        // {
        //   skillName: "Android",
        //   fontAwesomeClassname: "simple-icons:android",
        //   style: {
        //     color: "#3DDC84",
        //   },
        // },
        {
          skillName: "Swagger",
          fontAwesomeClassname: "simple-icons:swagger",
          style: {
            color: "#85EA2D",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#000000",
          },
        },
        // {
        //   skillName: "jQuery",
        //   fontAwesomeClassname: "simple-icons:jquery",
        //   style: {
        //     color: "#0865A6",
        //   },
        // },
        // {
        //   skillName: "Wordpress",
        //   fontAwesomeClassname: "simple-icons:wordpress",
        //   style: {
        //     color: "#207297",
        //   },
        // },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration and Deployment",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0078D4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#DC382D",
          },
        },
        {
          skillName: "DynamoDB",
          fontAwesomeClassname: "simple-icons:amazondynamodb",
          style: {
            color: "#4053D6",
          },
        },
        {
          skillName: "Aerospike",
          fontAwesomeClassname: "simple-icons:aerospike",
          style: {
            color: "#C22127",
          },
        },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
        {
          skillName: "GoDaddy",
          fontAwesomeClassname: "simple-icons:godaddy",
          style: {
            color: "#1BDBDB",
          },
        },
        {
          skillName: "Cloudflare",
          fontAwesomeClassname: "simple-icons:cloudflare",
          style: {
            color: "#F38020",
          },
        },
        {
          skillName: "Cloudinary",
          fontAwesomeClassname: "simple-icons:cloudinary",
          style: {
            color: "#3448C5",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Univeristy of Eastern Finland",
      subtitle:
        "IMPIT - International Master's Programme in Information Technology",
      logo_path: "UEF_eng_black.jpg",
      alt_name: "UEF",
      duration: "2023 - Preset",
      descriptions: [
        "⚡ I am currently studying in UEF for my Master's degree in Information Technology.",
        "⚡ I am done with my course work and now working on my thesis.",
        "⚡ I have studied subjects like Machine Learning, Deep learning, Data Science, etc.",
      ],
      website_link: "https://www.uef.fi/en/web/impit",
    },
    {
      title: "COMSATS University Islamabad",
      subtitle: "Bachelors of Sciences in Computer Science",
      logo_path: "COMSATS.jpg",
      alt_name: "COMSATS",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I graduated with a bachelor's degree in Computer Sciences.",
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've learnt under my Computer Science courses. ",
      ],
      website_link: "https://www.comsats.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Google Cloud",
    //   subtitle: "Google Cloud Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1r0hYt8Pp0N0u_4Tg-poMF1Qv3LkoKVAP/view",
    //   alt_name: "MongoDB University",
    //   // color_code: "#2AAFED",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "Hackathon",
    //   subtitle: "Backyard Hacks 2.0",
    //   logo_path: "hackathon1.png",
    //   // certificate_link:
    //   //   "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
    //   alt_name: "hackathon",
    //   color_code: "#f47e2c",
    // },
    // {
    //   title: "Hackathon",
    //   subtitle: "HyperHacks",
    //   logo_path: "hackathon2.png",
    //   // certificate_link:
    //   //   "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
    //   alt_name: "hackathon",
    //   color_code: "#E2405F",
    // },
    // // {
    // //   title: "A300: Atlas Security",
    // //   subtitle: "MongoDB University",
    // //   logo_path: "mongo.png",
    // //   certificate_link:
    // //     "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
    // //   alt_name: "MongoDB University",
    // //   // color_code: "#F6B808",
    // //   color_code: "#47A048",
    // // },
    // {
    //   title: "Contributor's Hack",
    //   subtitle: "Hakin Codes",
    //   logo_path: "HakinCodes.jfif",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1xvyy1M05lQN-s2VKw_Qvz6E7rPwrK2qm/view?usp=sharing",
    //   alt_name: "Opensource Event",
    //   color_code: "#fefd7b",
    // },
    // // {
    // //   title: "MLH Local Hack Day: Build",
    // //   subtitle: "Major League Hacking",
    // //   logo_path: "mlh-logo.svg",
    // //   certificate_link:
    // //     "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
    // //   alt_name: "Google",
    // //   color_code: "#fe0037",
    // // },
    // {
    //   title: "Olympiad",
    //   subtitle: "Ramanujan Mathematics Olympiad",
    //   logo_path: "Olympiad.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1SAKHjKisJIY3-FRZQGKLusdsGDusXAjX/view",
    //   alt_name: "Postman",
    //   // color_code: "#f36c3d",
    //   color_code: "#fffbf3",
    // },
    // {
    //   title: "Competitive Programming",
    //   subtitle: "Reply Challenges",
    //   logo_path: "Reply.jfif",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1KamrXJPTrF3zfMuEerbSnFUjOkt-agKT/view",
    //   alt_name: "Reply",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "Competitive Programming",
    //   subtitle: "Google Hash Code",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1sD6GS8f2Fh5MHMWlf5DhXoMhu4mykW-f/view",
    //   alt_name: "Reply",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "Training",
    //   subtitle: "30 Days of Open Source",
    //   logo_path: "CFC.jfif",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1SAKHjKisJIY3-FRZQGKLusdsGDusXAjX/view",
    //   alt_name: "Postman",
    //   // color_code: "#f36c3d",
    //   color_code: "#a60000",
    // },
    // {
    //   title: "Training",
    //   subtitle: "Git Learning",
    //   logo_path: "Progate.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1sD6GS8f2Fh5MHMWlf5DhXoMhu4mykW-f/view",
    //   alt_name: "Reply",
    //   color_code: "#88e7ce",
    // },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description: "Here are the experiences that I have gained over the years.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Senior Software Engineer | Full Stack Web Developer",
          company: "Beckett Collectibles",
          company_url: "https://www.devsinc.com/",
          logo_path: "beckett_collectibles_logo.jpeg",
          // duration: "Sept 2020 - Oct 2020",
          location: "USA - Remote",
          description: `After Due Dilly's acquisition, I joined Beckett as a Senior Software Engineer, enhancing sports card processing through advanced technology. I collaborate with global teams, drive innovation, and mentor junior engineers throughout the software development lifecycle.`,
          color: "#0071C5",
        },
        {
          title: "Senior Software Engineer | Full Stack Web Developer",
          company: "Due Dilly",
          company_url: "https://www.devsinc.com/",
          logo_path: "due_dilly_logo.jpeg",
          // duration: "Sept 2020 - Oct 2020",
          location: "USA - Remote",
          description: `Led the development of core web applications, backend systems, and AI/ML-driven computer vision technology, driving innovation and scalability. Played a key role in the company's acquisition by Beckett, where I continue to deliver impactful software solutions.`,
          color: "#0071C5",
        },
        {
          title: "Assosiate Software Engineer",
          company: "Devsinc",
          company_url: "https://www.devsinc.com/",
          logo_path: "devsinc.png",
          // duration: "Sept 2020 - Oct 2020",
          location: "Lahore, Pakistan",
          description: `I worked there as a Software Engineer on multiple company projects.`,
          color: "#0071C5",
        },
        {
          title: "Full Stack Engineer (Intern)",
          company: "Entspos Developers Inc. ",
          location: "Lahore, Pakistan",
          description:
            "Developed a web application using ElectronJS for product tracking, collaborating with UI/UX teams to ensure user-centric designs with ReactJS. Led testing efforts to improve software reliability and performance.",
          company_url: "https://developers.entspos.com/",
          logo_path: "ENTSPOS_LOGO.png",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "R&D Member",
    //       company: "Webarch Club",
    //       company_url: "https://www.webarchsrm.com/",
    //       logo_path: "Webarch.jfif",
    //       duration: "Mar 2020 - Nov 2020",
    //       location: "SRM IST Kattankulathur",
    //       description:
    //         "Member responsibilities were to help students in project planning, review issues and pull requests, ensure smooth progress and help juniors out in their difficulties.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Campus Leader",
    //       company: "Code For Cause",
    //       company_url: "https://www.codecau.se/",
    //       logo_path: "CFC.jfif",
    //       duration: "Nov 2020 - Present",
    //       location: "SRM IST Kattankulathur",
    //       description:
    //         "Held numerous workshops and distributed learning content for freshers. Contributed to development of the causefolio website displaying the information about the Code for Cause Community.",
    //       color: "#a60000",
    //     },
    //     {
    //       title: "Machine Learning - Research associate",
    //       company: "Next Tech Lab",
    //       company_url: "https://nextech.io/",
    //       logo_path: "NTL.jfif",
    //       duration: "Oct 2020 - Present",
    //       location: "SRM IST Kattankulathur",
    //       description:
    //         "Associate responsibilities were to build fast and efficient machine learning models, have talks on research topics related to computer vision and deep learning. Build team projects and intract with fellow members and ensure smooth progress and help juniors out in their difficulties.",
    //       color: "#62cff0",
    //     },
    //     {
    //       title: "Campus Ambassador",
    //       company: "Bagcampus",
    //       company_url: "https://bagcampus.in/",
    //       logo_path: "Bagcampus.jpg",
    //       duration: "Dec 2020 - May 2021",
    //       location: "Remote",
    //       description:
    //         "Spread Awareness of new Technologies and Companies and new Opportunities to Students and Grow Bagcampus Community.",
    //       color: "#0059c9",
    //     },
    //     {
    //       title: "Volunteer",
    //       company: "Google Crowdsource",
    //       company_url: "https://indiaenvironment.org/",
    //       logo_path: "GCS.jfif",
    //       duration: "Sept 2020 - Present",
    //       location: "Remote",
    //       description:
    //         "As a member of the global Crowdsource community one can gain recognition from other Crowdsourcers and Google.",
    //       color: "#ffffff",
    //     },
    //     {
    //       title: "Student Volunteer",
    //       company: "National Service Scheme",
    //       company_url: "https://indiaenvironment.org/",
    //       logo_path: "NSS.jfif",
    //       duration: "Dec 2019 - May 2020",
    //       location: "SRM IST Kattankulathur",
    //       description:
    //         "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
    //       color: "#282b6c",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, React, NextJS and GatsbyJS Projects. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_photo.jpeg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others.",
    link: "https://medium.com/@diode02/",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Due Dilly",
      showLink: "true",
      url: "https://duedilly.co/",
      description:
        "This is a marketplace for selling sports cards and grading them using advance AI." +
        " I worked as a full stack web developer for building this website and handled everything " +
        "from planning and development to deployment on servers.",
      languages: [
        {
          name: "GatsbyJS",
          iconifyClass: "grommet-icons:gatsbyjs",
        },
        {
          name: "Ant Desgin",
          iconifyClass: "logos:ant-design",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "Stripe",
          iconifyClass: "cib:cc-stripe",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Redux",
          iconifyClass: "logos:redux",
        },
      ],
    },
    {
      id: "1",
      name: "Due Dilly Marketplace",
      url: "https://marketplace.duedilly.co",
      description:
        "I worked on this web app to provide a platform for end users to buy and sell sports cards." +
        " I also developed the ability for the users to open stores and list their cards on this" +
        " marketplace. Stripe is integrated for payments.",
      languages: [
        {
          name: "NextJS",
          iconifyClass: "logos:nextjs",
        },
        {
          name: "Ant Desgin",
          iconifyClass: "logos:ant-design",
        },
        {
          name: "Redux",
          iconifyClass: "logos:redux",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "Stripe",
          iconifyClass: "cib:cc-stripe",
        },
        {
          name: "SASS",
          iconifyClass: "vscode-icons:file-type-sass",
        },
      ],
    },
    {
      id: "2",
      name: "Seller Dashboard Due Dilly",
      url: "https://seller.duedilly.co",
      description:
        "This was built for sellers to manage and add new soprts cards to sell on marketplace." +
        " Added ability for users to also open new stores on marketplace, manage orders, etc using this dashboard.",
      languages: [
        {
          name: "NextJS",
          iconifyClass: "logos:nextjs",
        },
        {
          name: "Ant Desgin",
          iconifyClass: "logos:ant-design",
        },
        {
          name: "Redux",
          iconifyClass: "logos:redux",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "Stripe",
          iconifyClass: "cib:cc-stripe",
        },
        {
          name: "SASS",
          iconifyClass: "vscode-icons:file-type-sass",
        },
      ],
    },
    {
      id: "3",
      name: "Backend of DueDilly",
      url: "https://duedilly.co",
      description:
        "We built a backend for all the services of DueDilly." +
        " Handled authentications, authorization, validations," +
        " background jobs, stripe transfers, emails, etc",
      languages: [
        {
          name: "ExpressJS",
          iconifyClass: "simple-icons:express",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "AWS",
          iconifyClass: "vscode-icons:file-type-aws",
        },
        {
          name: "AWS S3",
          iconifyClass: "logos:aws-s3",
        },
        {
          name: "Postman",
          iconifyClass: "logos:postman-icon",
        },
        {
          name: "Stripe",
          iconifyClass: "cib:cc-stripe",
        },
        // {
        //   name: "Hapi",
        //   iconifyClass: "logos:hapi",
        // },
        {
          name: "MongoDB",
          iconifyClass: "vscode-icons:file-type-mongo",
        },
      ],
    },
    {
      id: "4",
      name: "Newzjacker",
      url: "https://newzjacker.com",
      description:
        "A platform where you can find trending top stories from around the global news network " +
        "and find emails of journalists to contact them quickly." +
        "I worked on both frontend and backend and handled everything from UI to stripe web hooks.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "simple-icons:react",
        },
        {
          name: "Material UI",
          iconifyClass: "logos:material-ui",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "JWT",
          iconifyClass: "logos:jwt-icon",
        },
        {
          name: "MongoDB",
          iconifyClass: "vscode-icons:file-type-mongo",
        },
        {
          name: "Stripe",
          iconifyClass: "cib:cc-stripe",
        },
        {
          name: "Google",
          iconifyClass: "logos:google-cloud",
        },
      ],
    },
    {
      id: "5",
      name: "Workzat",
      url: "https://workzat.com",
      description:
        "Workzat is social platform like facebook but instead for general public," +
        " its focuses on companies culture like LinkdIn" +
        "I have worked with a team on thi project as a full stack web developer " +
        "and helped the company to accomplish its goals.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos:react",
        },
        {
          name: "Material UI",
          iconifyClass: "logos:material-ui",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "PassportJS",
          iconifyClass: "logos:passport",
        },
        {
          name: "MongoDB",
          iconifyClass: "vscode-icons:file-type-mongo",
        },
        {
          name: "Socket.io",
          iconifyClass: "cib:socket-io",
        },
      ],
    },
    {
      id: "9",
      name: "Pippa API Server",
      // url: "https://workzat.com",
      description:
        "Built a backend for a company for getting bank transactions details of the users." +
        " These transaction details were required for a aduit pupose.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "ExpressJS",
          iconifyClass: "logos:express",
        },
        {
          name: "JWT",
          iconifyClass: "logos:jwt-icon",
        },
        {
          name: "Postman",
          iconifyClass: "logos:postman-icon",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Heroku",
          iconifyClass: "logos:heroku-icon",
        },
      ],
    },
    {
      id: "6",
      name: "Store Backend",
      // url: "https://workzat.com",
      description:
        "Provided a backend for a startup company to manage their marketplace store." +
        " In this I covered complete user flow, managment of products and categories, " +
        "manager roles, etc. I used MySQL as a database in this project as required by client.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "JWT",
          iconifyClass: "logos:jwt-icon",
        },
        {
          name: "MySQL",
          iconifyClass: "logos:mysql",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "7",
      name: "Printio",
      // url: "https://workzat.com",
      description:
        "Wrote a web service which was resposible for receiving the instructions on an end point," +
        " process those instructions and then use local printer to print out labels in a specific " +
        "formate as instructed in input.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "JWT",
          iconifyClass: "logos:jwt-icon",
        },
      ],
    },
    {
      id: "7",
      name: "User Routines API",
      // url: "https://workzat.com",
      description:
        "Built a backend for a applications for users to create their account and manage," +
        " their daily routines, routines consists of multiple routines and can be public or private. ",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "JWT",
          iconifyClass: "",
        },
      ],
    },
    {
      id: "8",
      name: "Foodlabs",
      url: "https://foodlab-webflow.netlify.app/",
      description:
        "Built a web app using serverless fucntion to get job listings data from an external website," +
        " and after some processing it was resposible for publishing those jobs listings to " +
        " a weblow based collections using their provided APIs.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos:react",
        },
        {
          name: "Netlify",
          iconifyClass: "vscode-icons:file-type-netlify",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
