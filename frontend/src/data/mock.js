// Mock data for Maahi Patel's Portfolio
export const mockData = {
  personal: {
    name: "Maahi Patel",
    title: "Architecting Ideas into Reality",
    subtitle: "Master's of Computer Science student at Rice University | Building intelligent systems that transform data into actionable insights",
    email: "maahip1304@gmail.com",
    linkedin: "https://linkedin.com/in/maahi-patel-779470245",
    github: "https://github.com/Maahip1304",
    photo: "https://customer-assets.emergentagent.com/job_1f986ad0-c8b8-4af1-ab60-aceeec9b3ff9/artifacts/ep4ovm5x_WhatsApp%20Image%202025-10-07%20at%2016.12.40.jpeg",
    bio: "I am Maahi Patel, a data-driven technologist with a strong foundation in full-stack development, machine learning, and analytical problem-solving. I have hands-on experience building real-time systems such as automated video captioning, live sign language translation, and web-based analytics platforms that turn complex data into actionable insights. My projects reflect a commitment to applying data science to real-world challenges, combining programming expertise with statistical and algorithmic thinking to deliver measurable impact. Alongside my technical work, my involvement in leadership roles and community initiatives has strengthened my ability to approach problems holistically and create solutions that are both innovative and meaningful."
  },

  education: [
    {
      id: 1,
      institution: "Rice University",
      degree: "Master of Computer Science",
      location: "Houston, TX, USA",
      duration: "Aug 2025 - Expected 2026",
      gpa: null
    },
    {
      id: 2,
      institution: "Pandit Deendayal Energy University (PDEU)",
      degree: "B.Tech Computer Science and Engineering",
      location: "Gandhinagar, GJ, India",
      duration: "Sept 2021 - May 2025",
      gpa: "9.28/10"
    }
  ],

  experience: [
    {
      id: 1,
      company: "Rice University",
      position: "Teaching Assistant, COMP 410: Software Engineering Methodology",
      location: "Houston, TX, USA",
      duration: "Aug 2025 - Present",
      type: "Academic",
      responsibilities: [
        "Guided two project teams, comprised of 15+ students, through the software development lifecycle, improving project delivery quality by 20% through agile methodologies",
        "Streamlined grading and feedback using standardized rubrics to improve student outcomes"
      ]
    },
    {
      id: 2,
      company: "Pandit Deendayal Energy University (SAC ISRO Collaboration)",
      position: "Research Intern",
      location: "Gandhinagar, GJ, India",
      duration: "Dec 2024 - Jun 2025",
      type: "Research",
      responsibilities: [
        "Engineered a LLaMA 3.2-based system for bug detection and code optimization, which led to a 92% accuracy in detecting bugs and boosted precision by 20% within testing environments",
        "Built a Flask-based interface and CI/CD pipeline with Docker and GitHub Actions, enabling seamless deployment and real-time analysis of diverse codebases for research validation"
      ]
    },
    {
      id: 3,
      company: "NeoGen InfoTech",
      position: "Data Science Intern",
      location: "Ahmedabad, GJ, India",
      duration: "May 2024 - Jul 2024",
      type: "Industry",
      responsibilities: [
        "Developed customer churn prediction module using Random Forest and Logistic Regression, achieving a test AUC of 0.82",
        "Built an interactive churn-risk dashboard using Pandas, Scikit-learn, and Plotly Dash"
      ]
    },
    {
      id: 4,
      company: "Siddhi InfoSoft",
      position: "Data Analytics Intern",
      location: "Ahmedabad, GJ, India",
      duration: "May 2023 - Aug 2023",
      type: "Industry",
      responsibilities: [
        "Developed a real-time analytics dashboard using React.js and MongoDB to track revenue and order data, reducing manual reporting time by 30%",
        "Leveraged data visualization techniques to diagnose sales trends and operational inefficiencies, driving targeted optimizations in staff scheduling and inventory control"
      ]
    }
  ],

  projects: {
    featured: [
      {
        id: 1,
        title: "CodeZen: AI-Powered Code Review Tool",
        description: "Developed a Flask platform integrating Meta's LLaMA 3.2 via Ollama for real-time bug detection with 92% accuracy across diverse codebases.",
        duration: "Dec 2024 - May 2025",
        technologies: ["Python", "Flask", "LLaMA 3.2", "Ollama", "Docker", "GitHub Actions"],
        achievements: [
          "Achieved 92% bug detection accuracy across diverse codebases",
          "Implemented user-friendly upload interface",
          "Engineered CI/CD pipelines with Docker & GitHub Actions"
        ],
        category: "AI/ML"
      },
      {
        id: 2,
        title: "Intrusion Detection System",
        description: "Designed and trained a Random Forest-based IDS achieving 91% detection accuracy for simulated cyberattacks in academic institutions.",
        duration: "Aug 2024 - Nov 2024",
        technologies: ["Python", "Random Forest", "scikit-learn"],
        achievements: [
          "Achieved 91% detection accuracy for cyberattacks",
          "Enabled automated cloud-based alerts",
          "Cut manual monitoring time by 60%"
        ],
        category: "Machine Learning"
      },
      {
        id: 3,
        title: "Automated Video Captioning System",
        description: "Created a multilingual video captioning and translation system with 98.4% accuracy using Flask, MoviePy, OpenCV, and Whisper.",
        duration: "Jan 2024 - May 2024",
        technologies: ["Flask", "MoviePy", "OpenCV", "OpenAI Whisper", "Python"],
        achievements: [
          "Achieved 98.4% captioning accuracy",
          "Reduced processing time for 60+ minute videos by 40%",
          "Maintained accuracy while optimizing pipeline"
        ],
        category: "AI/NLP"
      },
      {
        id: 4,
        title: "Live ISL Translation Website",
        description: "Developed a real-time web platform that translates Indian Sign Language (ISL) gestures into spoken language using OpenCV, MediaPipe, and TensorFlow.",
        duration: "Aug 2023 - Dec 2023",
        technologies: ["OpenCV", "MediaPipe", "TensorFlow", "Python", "Flask"],
        achievements: [
          "Built real-time gesture recognition system",
          "Enhanced accessibility for hearing-impaired community",
          "Bridged communication gaps through ML-powered translation"
        ],
        category: "Computer Vision"
      }
    ],
    additional: [
      {
        id: 5,
        title: "Agricultural Irrigation Management",
        description: "Created a data-driven solution leveraging machine learning to analyze environmental factors and improve irrigation efficiency for sustainable agricultural practices.",
        duration: "2023",
        technologies: ["Python", "Machine Learning", "Data Analysis", "IoT Sensors"],
        achievements: [
          "Analyzed environmental factors using ML models",
          "Improved irrigation efficiency through data-driven insights",
          "Promoted sustainable agricultural practices"
        ],
        category: "IoT/Agriculture"
      },
      {
        id: 8,
        title: "YOLOV5 Drowsiness Detection System",
        description: "Published an IEEE paper proposing an advanced computer vision model to detect driver fatigue with high accuracy using YOLOV5.",
        duration: "2024",
        technologies: ["YOLOV5", "Computer Vision", "PyTorch", "OpenCV"],
        achievements: [
          "Achieved high accuracy in drowsiness detection",
          "Published research in IEEE Xplore",
          "Contributed to road safety solutions"
        ],
        category: "Computer Vision"
      },
      
      {
        id: 7,
        title: "Event Calendar Web Application",
        description: "Developed a responsive CRUD-based web application using PHP that enables users to create, edit, delete, and view events through an interactive calendar interface.",
        duration: "2022",
        technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        achievements: [
          "Designed a clean and user-friendly calendar layout for event management",
          "Ensured responsive design and smooth cross-browser functionality",
          "Optimized event retrieval and storage using efficient SQL queries"
        ],
        category: "Web Development"
      },
      {
        id: 6,
        title: "Smart Blind Stick",
        description: "Designed a smart assistive stick for visually impaired individuals using sensors and ESP32 to detect obstacles and send alerts.",
        duration: "2023",
        technologies: ["ESP32", "IoT", "Flask", "Python", "Sensors"],
        achievements: [
          "Integrated ultrasonic sensors for obstacle detection",
          "Built Flask web interface for live warnings",
          "Enhanced mobility for visually impaired users"
        ],
        category: "IoT/Assistive Tech"
      }
    ]
  },

  skills: {
    languages: ["Python", "Java", "C++", "C"],
    frameworks: ["PyTorch", "TensorFlow", "Scikit-learn", "Keras", "Node.js", "React.js", "Express.js", "Flask"],
    tools: ["OpenCV", "Whisper", "Git", "GitHub", "GitHub Actions", "Docker", "REST API", "Ollama"],
    databases: ["SQL", "MySQL", "PostgreSQL", "MongoDB"]
  },

  publications: [
    {
      id: 1,
      title: "Advancements in Drowsiness Detection: A YOLOV5 Approach",
      type: "Conference Paper",
      venue: "Signal Processing and Advance Research in Computing (SPARC) 2024",
      publisher: "IEEE Xplore",
      year: "2024",
      link: "https://ieeexplore.ieee.org/document/10828721"
    },
    {
      id: 2,
      title: "Enhancing Multimedia Accessibility: Automated Video Captioning and Translation System Using OpenAI Whisper",
      type: "Conference Paper",
      venue: "Asian Conference on Intelligent Technologies (ACOIT) 2024",
      publisher: "IEEE Xplore",
      year: "2024",
      link: "https://ieeexplore.ieee.org/document/10939144"
    },
    {
      id: 3,
      title: "Complete Guide to Image Preprocessing Techniques in Python",
      type: "Technical Blog",
      venue: "Medium Blog",
      publisher: "Medium",
      year: "2023",
      link: "https://medium.com/@maahip1304/the-complete-guide-to-image-preprocessing-techniques-in-python-dca30804550c"
    }
  ],

  extracurriculars: [
    {
      id: 1,
      title: "Certified Kathak Dancer",
      duration: "7 years",
      description: "Completed a 7-year certified Kathak course, performing traditional dance examinations and practical showcases demonstrating rhythm, grace, and storytelling through movement."
    },
    {
      id: 2,
      title: "Zaayka Club - Culinary Events",
      duration: "3 years",
      description: "Organized and participated in cooking events over 3 years, experimenting with new dishes, managing logistics, and leading teams to execute successful culinary experiences."
    },
    {
      id: 3,
      title: "Graphic Design Head - AJIA Bunker",
      duration: "1 year",
      description: "Led the design team for AJIA Bunker student club, overseeing branding, poster design, and social media creatives to visually represent cultural and student-led events."
    }
  ],

  volunteering: [
    {
      id: 1,
      organization: "Andhjan Mandal",
      role: "Volunteer",
      description: "Donated essential items and spent time with visually impaired individuals, providing support and engagement to the community."
    },
    {
      id: 2,
      organization: "Seva Foundation",
      role: "Volunteer",
      description: "Contributed to initiatives providing food, clothing, and medical supplies to underserved communities, improving overall well-being and support systems."
    },
    {
      id: 3,
      organization: "Go Dharmic",
      role: "Volunteer",
      description: "Participated in donation drives, mental/physical wellness initiatives, and sustainability programs, including tree planting and clean-up drives."
    }
  ]
};
