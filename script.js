// Mobile Navigation Toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
};

// Smooth Scrolling for Navigation
const smoothScroll = () => {
    const navLinks = document.querySelectorAll('.nav-links a, .cta-buttons a, .scroll-down a');

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            if (link.hash !== '') {
                e.preventDefault();
                const targetId = link.hash;
                const targetSection = document.querySelector(targetId);

                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
};

// Experience Data
const experienceData = [
    {
        title: "Student Intern",
        company: "Office of Research Innovation and Economic Development, SUNY Systems Administration, Albany, NY",
        period: "January 2024 - Present",
        description: "Developed interactive data visualizations using JointJS to create prototype data models for the Research Department. Built user interfaces with JointJS, HTML, CSS, and JSON-LD to enhance user experience. Processed large datasets (30,000-50,000 records) using Python Pandas for curation, aggregation, and de-duplication. Integrated APIs including Mailchimp, Elsevier, OpenAlex, and IDExchange for comprehensive data analysis. Created Python-based applications with Tkinter and Bootstrap that automated data cleanup and analysis. Implemented machine learning models for pattern recognition to streamline data processing workflows. Led development of an open-source web application (RDAF Tool) that transforms Excel data into interactive visualizations using JSON-LD and JavaScript."
    },
    {
        title: "Student Intern",
        company: "Office of Information Technology, SUNY Systems Administration, Albany, NY",
        period: "January 2023 - August 2023",
        description: "Configured enterprise network infrastructure including VPNs, IPS/IDS, routing, and endpoint security solutions. Designed and deployed automation scripts for asset tracking using Shodan API and Python, efficiently processing large datasets. Managed server configurations and implemented Linux-based scripting solutions for improved asset management. Optimized IT service delivery through Team Dynamix ITSM processes and workflows. Developed secure device imaging and deployment protocols to enhance system security."
    },

];

// Education Data
const educationData = [
    {
        degree: "Master of Science in Computer Science",
        school: "University at Albany, New York",
        location: "1444 Washington Avenue, Albany, New York, 12222",
        period: "January 2025 - Present",
        description: "Concentration in Artificial Intelligence and Machine Learning. Coursework includes Deep Learning, Computer Vision, Natural Language Processing, Data Mining, and Advanced Algorithms."
    },
    {
        degree: "Bachelor of Science in Computer Science",
        school: "University at Albany, New York",
        location: "1444 Washington Avenue, Albany, New York, 12222",
        period: "January 2021 - December 2024",
        description: "Minor in Cybersecurity. Coursework included Data Structures, Algorithms, Software Engineering, and Database Systems."
    }
];

// Skills Data
const skillsData = {
    programming: [
        "Python", "JavaScript", "HTML", "CSS", "SQL", "Java", "C", "C++", "R"
    ],
    frameworks: [
        "Flask", "React", "JointJS", "Pandas", "JSON-LD", "NodeJS", "ExpressJS", "PyTorch", "TensorFlow", "Keras"
    ],
    tools: [
        "Playwright", "Mailchimp API", "Shodan API", "MySQL", "Linux", "AWS", "Docker", "Git"
    ],
    testing: [
        "End-to-End Testing (E2E)", "API Testing"
    ],
    networking: [
        "VPN", "Routing & Switching", "Firewall Configuration", "Endpoint Security"
    ],
    dataAnalysis: [
        "Data Curation", "Data Aggregation", "Data Visualization", "Automation", "Web Scrapping"
    ],
    soft: [
        "Problem Solving", "Team Collaboration", "Communication", "Project Management",
        "Agile Methodology", "Research", "Technical Writing", "Leadership",
        "Critical Thinking", "Adaptability"
    ]
};

// Projects Data
const projectsData = [
    {
        title: "Hotel Management Web Application",
        description: "Developed Central ResPlus System, a comprehensive hotel reservation platform for managing bookings, check-ins, check-outs, and property details. Implemented secure user authentication with JWT, reservation management features, and property administration tools. Created a RESTful API architecture for efficient data exchange between frontend and backend systems.",
        technologies: ["Python", "Flask", "SQL Alchemy", "JWT", "MySQL", "React.js", "Axios", "Styled Components"],
        link: "https://github.com/Motawala/central-resplus"
    },
    {
        title: "Python and Shodan Integration for Vulnerability Tracking",
        description: "Developed an automated security monitoring system at SUNY Systems Administration that integrates with Shodan API to track IP addresses and identify potential security vulnerabilities. Created Python scripts to regularly query the Shodan database, extract data on connected devices, and organize findings to enable proactive network security measures.",
        technologies: ["Python", "Shodan API", "Linux", "Automation", "Data Analysis", "Vulnerability Management"],
        link: ""
    },
    {
        title: "Web Application for Energy Analysis (LovEnergy)",
        description: "Built a comprehensive web application for building energy performance analysis using a modern tech stack. The platform enables users to input building parameters, run energy simulations, and visualize results through an intuitive interface. Integrated OpenStudio to enable advanced modeling capabilities for optimizing building energy systems.",
        technologies: ["React.js", "Spring Boot", "SQLite", "OpenStudio", "RESTful APIs", "Data Visualization"],
        link: ""
    },
    {
        title: "SUNY RDaF Explorer Prototype",
        description: "Developed a deep learning model for analyzing aerial forest imagery with region-based CNNs. Achieved 95% accuracy in forest density classification and automated tree counting. Published research results at NY State AI Conference.",
        technologies: ["Js", "HTML", "CSS", "JointJS"],
        link: "https://sunyoried.github.io/rdaf/"
    }
];

// DOM Elements
const experienceContainer = document.querySelector('#experience .timeline');
const educationContainer = document.querySelector('#education .timeline');
const programmingSkillsContainer = document.querySelector('#programming-skills');
const frameworksSkillsContainer = document.querySelector('#frameworks-skills');
const toolsSkillsContainer = document.querySelector('#tools-skills');
const testingSkillsContainer = document.querySelector('#testing-skills');
const networkingSkillsContainer = document.querySelector('#networking-skills');
const dataAnalysisSkillsContainer = document.querySelector('#data-analysis-skills');
const softSkillsContainer = document.querySelector('#soft-skills');
const projectsContainer = document.querySelector('.projects-grid');

// Render Experience
const renderExperience = () => {
    experienceData.forEach((exp, index) => {
        const expElement = document.createElement('div');
        expElement.classList.add('timeline-item');

        // Add delay based on index for cascading animation
        expElement.style.transitionDelay = `${index * 0.2}s`;

        // Format the description for better readability
        const formattedDescription = formatExperienceDescription(exp.description);

        expElement.innerHTML = `
            <div class="timeline-content">
                <span class="date">${exp.period}</span>
                <h3>${exp.title}</h3>
                <h4>${exp.company}</h4>
                <div class="experience-details">
                    ${formattedDescription}
                </div>
            </div>
        `;

        experienceContainer.appendChild(expElement);
    });

    // Add animation to timeline items when they come into view
    const addTimelineAnimation = () => {
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (itemPosition < windowHeight - 100) {
                item.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', addTimelineAnimation);
    // Initial check for items in view
    setTimeout(addTimelineAnimation, 200);
};

// Format experience description
const formatExperienceDescription = (description) => {
    // Split by periods to get sentences
    const sentences = description.split('. ').filter(s => s.trim() !== '');

    // Format each sentence as a key point
    return sentences.map(sentence => {
        // Make sure we end with a period if it doesn't have one
        if (!sentence.endsWith('.')) {
            sentence += '.';
        }
        return `<span class="key-point">${sentence}</span>`;
    }).join('');
};

// Render Education
const renderEducation = () => {
    educationData.forEach((edu, index) => {
        const eduElement = document.createElement('div');
        eduElement.classList.add('timeline-item');

        // Add delay based on index for cascading animation
        eduElement.style.transitionDelay = `${index * 0.2}s`;

        eduElement.innerHTML = `
            <div class="timeline-content">
                <span class="date">${edu.period}</span>
                <h3>${edu.degree}</h3>
                <h4>${edu.school}</h4>
                <p class="location"><i class="fas fa-map-marker-alt"></i> ${edu.location}</p>
                <p>${edu.description}</p>
            </div>
        `;

        educationContainer.appendChild(eduElement);
    });

    // Add animation to timeline items when they come into view
    const addTimelineAnimation = () => {
        const timelineItems = document.querySelectorAll('#education .timeline-item');
        timelineItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (itemPosition < windowHeight - 100) {
                item.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', addTimelineAnimation);
    // Initial check for items in view
    setTimeout(addTimelineAnimation, 200);
};

// Render Skills
const renderSkills = () => {
    // Programming Skills
    skillsData.programming.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.classList.add('skill');
        skillElement.innerHTML = `<span>${skill}</span>`;
        programmingSkillsContainer.appendChild(skillElement);
    });

    // Frameworks Skills
    skillsData.frameworks.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.classList.add('skill');
        skillElement.innerHTML = `<span>${skill}</span>`;
        frameworksSkillsContainer.appendChild(skillElement);
    });

    // Tools Skills
    skillsData.tools.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.classList.add('skill');
        skillElement.innerHTML = `<span>${skill}</span>`;
        toolsSkillsContainer.appendChild(skillElement);
    });

    // Testing Skills
    skillsData.testing.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.classList.add('skill');
        skillElement.innerHTML = `<span>${skill}</span>`;
        testingSkillsContainer.appendChild(skillElement);
    });

    // Networking Skills
    skillsData.networking.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.classList.add('skill');
        skillElement.innerHTML = `<span>${skill}</span>`;
        networkingSkillsContainer.appendChild(skillElement);
    });

    // Data Analysis Skills
    skillsData.dataAnalysis.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.classList.add('skill');
        skillElement.innerHTML = `<span>${skill}</span>`;
        dataAnalysisSkillsContainer.appendChild(skillElement);
    });

    // Soft Skills
    skillsData.soft.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.classList.add('skill');
        skillElement.innerHTML = `<span>${skill}</span>`;
        softSkillsContainer.appendChild(skillElement);
    });
};

// Render Projects
const renderProjects = () => {
    projectsData.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project-card');

        projectElement.innerHTML = `
            <div class="project-info">
                <h3>${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                ${project.link ? `<a href="${project.link}" class="btn project-btn" target="_blank">View Project</a>` : ''}
            </div>
        `;

        projectsContainer.appendChild(projectElement);
    });
};

// Initialize Animation on Scroll
const initAOS = () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const checkIfInView = () => {
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };

    window.addEventListener('scroll', checkIfInView);
    checkIfInView(); // Check on initial load
};

// Light/Dark Theme Toggle
const themeToggle = () => {
    const toggleBtn = document.querySelector('.theme-toggle');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');

            // Save user preference
            const isDarkTheme = document.body.classList.contains('dark-theme');
            localStorage.setItem('dark-theme', isDarkTheme);

            // Update button text
            toggleBtn.textContent = isDarkTheme ? '☀️ Light Mode' : '🌙 Dark Mode';
        });

        // Check for saved user preference
        const savedTheme = localStorage.getItem('dark-theme') === 'true';
        if (savedTheme) {
            document.body.classList.add('dark-theme');
            toggleBtn.textContent = '☀️ Light Mode';
        }
    }
};

// Handle contact form submission
const handleContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const statusElement = document.getElementById('form-status');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const name = contactForm.querySelector('input[placeholder="Your Name"]').value;
        const email = contactForm.querySelector('input[placeholder="Your Email"]').value;
        const subject = contactForm.querySelector('input[placeholder="Subject"]').value;
        const message = contactForm.querySelector('textarea').value;

        // Change button text to show loading
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Set status message
        statusElement.innerHTML = '<div class="sending">Sending your message...</div>';

        // Simulate sending (since this is a static site)
        setTimeout(() => {
            try {
                // Create a mailto link as a fallback method
                const mailtoLink = `mailto:karanp3898@gmail.com?subject=${encodeURIComponent(subject || 'Contact from Portfolio')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

                // Open the mail client
                window.location.href = mailtoLink;

                // Reset form
                contactForm.reset();

                // Show success message
                statusElement.innerHTML = '<div class="success">Message sent! Your email client has been opened.</div>';
            } catch (error) {
                // Show error message
                statusElement.innerHTML = '<div class="error">There was a problem sending your message. Please try again.</div>';
                console.error('Error:', error);
            }

            // Restore button
            submitButton.textContent = originalText;
            submitButton.disabled = false;

            // Clear status after 5 seconds
            setTimeout(() => {
                statusElement.innerHTML = '';
            }, 5000);
        }, 1000);
    });
};

// Initialize App
const initApp = () => {
    navSlide();
    smoothScroll();
    renderExperience();
    renderEducation();
    renderSkills();
    renderProjects();
    initAOS();
    themeToggle();
    handleContactForm();
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);