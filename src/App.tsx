import { useState } from 'react';
import { motion, AnimatePresence, type MotionProps } from 'framer-motion';

//============================================// Import imagery, movies & files //============================================//
import bgImage from './assets/desktopBkg.jpg';
import case_study_1_impact from './assets/case_studies/DynamicCanvasDeploymentEngine_TheImpact.jpg';
import case_study_1_innovation from './assets/case_studies/DynamicCanvasDeploymentEngine_TheInnovation.jpg';
import case_study_1_problem from './assets/case_studies/DynamicCanvasDeploymentEngine_TheProblem.jpg';
import case_study_2_problem from './assets/case_studies/ADM_Slide_1.jpg';
import case_study_2_innovation from './assets/case_studies/ADM_Slide_2.jpg';
import case_study_2_impact from './assets/case_studies/ADM_Slide_3.jpg';
import case_study_3_problem from './assets/case_studies/Special_Show_Slide_1.jpg';
import case_study_3_solution from './assets/case_studies/Special_Show_Slide_2.jpg';
import case_study_3_impact from './assets/case_studies/Special_Show_Slide_3.jpg';
import case_study_4_problem from './assets/case_studies/NYL_Slide_1.jpg';
import case_study_4_solution from './assets/case_studies/NYL_Slide_2.jpg';
import case_study_4_impact from './assets/case_studies/NYL_Slide_3.jpg';
import academic_lab_1 from './assets/academic_labs/AL1_Equiptment_checkout_system.pdf';
import academic_lab_2 from './assets/academic_labs/AL2_electronic_health_record_protection_resilience_recovery.pdf';
import academic_lab_3 from './assets/academic_labs/AL3_java_based_application_landscape.pdf';
import academic_lab_4 from './assets/academic_labs/AL4_fundamentals_of_infrastructure_security.pdf';
import academic_lab_5 from './assets/academic_labs/AL5_relational_database.pdf';
import academic_lab_6_1 from './assets/academic_labs/AL6_payroll_system_1.pdf';
import academic_lab_6_2 from './assets/academic_labs/AL6_payroll_system_2.pdf';
import academic_lab_7 from './assets/academic_labs/AL7_fundamentals_of_cloud_computing.pdf';
import academic_lab_8 from './assets/academic_labs/AL8_fundamentals_of_information_security.pdf';
import academic_lab_9 from './assets/academic_labs/AL9_Linux Networking Fundamentals.pdf';
import academic_lab_10 from './assets/academic_labs/AL10_Remote_Control_Traffic_Light_Controller.pdf';
import academic_lab_11 from './assets/academic_labs/AL11_fundamentals_of_networking.pdf';
import academic_lab_12 from './assets/academic_labs/AL12_iot_home_security.pdf';
import React from 'react';

//============================================// Navigation Options //============================================//
type TrackView = 'splash' | 'hr' | 'tech';
type HRSubView = 'about' | 'resume';
type TechSubView = 'about' | 'resume' | 'studies' | 'labs' | 'repository' | 'motion graphics';

//============================================// Framer Motion Blueprint //============================================//
interface SharedViewProps {
  animConfig: MotionProps;
}

//============================================// About Page Information //============================================//
function AboutContent({ animConfig }: SharedViewProps) {
  return (
    <motion.div {...animConfig} className="bg-black/50 border border-terminal-dark p-6 md:p-8 space-y-6 shadow-2xl">

      <div className="border-b border-terminal-dark pb-3">
        <span className="text-terminal font-bold">Francisco Acosta</span>
      </div>

      <p className="text-gray-300 font-sans leading-relaxed text-sm md:text-base">
        I build scalable, modular systems designed for high-stakes, real-time environments. Over a 16-year tenure at NBCUniversal, I transitioned from a creative lead into a systems architect, pioneering one of the first centralized news graphics departments focused on high-availability automation for our national broadcast footprint. My career has been defined by identifying systemic bottlenecks and engineering solutions before they impact production. I thrive at the intersection of high-stakes media and mission-critical engineering, bringing a "zero-downtime" discipline to every codebase I touch.
        I formalized this technical journey with a B.S. in Software Engineering, bridging nearly two decades of media domain expertise with backend orchestration and full-stack development.
      </p>

      <p className="text-gray-300 font-sans leading-relaxed text-sm md:text-base">
        Most recently, I architected a C#/.NET Windows Service to automate real-time data ingestion for 40+ national stations, replacing manual workflows with a robust, scalable middleware layer. I specialize in designing modular frameworks that ensure precision and high-fidelity output under live-air pressure, utilizing a core technical stack that includes C#/.NET, Python, Java, SQL, and real-time visualization tools.
        Whether I am architecting global-scale live ingest pipelines or designing high-reliability software for enterprise systems, my focus is always on creating efficient, sustainable architecture that scales. I am eager to apply my background in distributed systems and live-data automation to new, complex engineering challenges.
      </p>

    </motion.div>
  );
}

//============================================// Motion GraphicsPage //============================================//
function VideoReelContent({ animConfig }: SharedViewProps) {
  return (
    <motion.div {...animConfig} className="bg-black/50 border border-terminal-dark p-6 md:p-8 space-y-6 shadow-2xl h-full flex flex-col justify-between">

      {/* Header section tracking standard design layout parameters */}
      <div className="border-b border-terminal-dark pb-3 flex items-center justify-between">
        <span className="text-terminal font-bold tracking-wider">Motion Graphics Reel</span>
      </div>

      {/* Video Framing Window */}
      <div className="w-full bg-zinc-950 border border-zinc-900 rounded-sm overflow-hidden relative group shadow-inner aspect-video">
        <iframe
          src="https://drive.google.com/file/d/1dUt4OFpOr7bwlXh3r82P6rVtqUZURTDt/preview"
          className="absolute top-0 left-0 w-full h-full border-none opacity-95 group-hover:opacity-100 transition-opacity duration-300"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Design Reel"
        />
      </div>
    </motion.div>
  );
}

//============================================// Resume Page Information //============================================//
function ResumeContent({ animConfig }: SharedViewProps) {
  return (
    <motion.div {...animConfig} className="space-y-5">
      <div className="bg-black/95 border border-terminal-dark p-6 text-xs text-gray-300 space-y-4 font-mono max-h-[640px] overflow-y-auto shadow-inner scrollbar-thin scrollbar-thumb-terminal-dark">

        <div className="text-center">
          <h4 className="text-base font-bold text-terminal text-[28px] tracking-wider">FRANCISCO ACOSTA</h4>
          <p className="text-white text text-[16px] mt-1">franciscoacosta1989@gmail.com {"\u00A0"}| {"\u00A0"}682-313-6403 {"\u00A0"}|{"\u00A0"} Fort Worth, TX</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 py-2">
          <div className="flex flex-wrap gap-6 justify-center">
            <a href="/Resume/Francisco_Acosta_Resume_2026.pdf" download className="px-7 py-1 border border-terminal text-terminal font-bold text-[16px] hover:bg-terminal hover:text-black transition-all duration-200 uppercase tracking-wider rounded-sm text-center">PDF</a>
            <a href="/Resume/Francisco_Acosta_Resume_2026.docx" download className="px-7 py-1 border border-terminal text-terminal font-bold text-[16px] hover:bg-terminal hover:text-black transition-all duration-200 uppercase tracking-wider rounded-sm text-center">WORD</a>
            <a href="/Resume/Francisco_Acosta_Resume_2026.txt" download className="px-7 py-1 border border-terminal text-terminal font-bold text-[16px] hover:bg-terminal hover:text-black transition-all duration-200 uppercase tracking-wider rounded-sm text-center">TXT</a>
          </div>
        </div>

        <div className="space-y-4 pt-2">

          {/* Skills Section */}
          <p className="text-terminal font-bold border-b border-terminal-dark/40 text-[18px] uppercase tracking-wider">Skills</p>
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:justify-between font-bold text-white-text text-[16px]">
              <span>Technical Skills</span>
            </div>
            <ul className="list-disc pl-4 space-y-1 text-gray-400 text-[16px] leading-relaxed">
              <li>Solutions Architect, Application Engineering, Real-Time High-Performance Graphics, Object-Oriented Design and Programming, Distributed Systems, Data Pipeline Optimization, CI/CD and Software Development Lifecycle (SDLC).</li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:justify-between font-bold text-white-text text-[16px]">
              <span>Languages</span>
            </div>
            <ul className="list-disc pl-4 space-y-1 text-gray-400 text-[16px] leading-relaxed">
              <li>C++, C#, Python, Java, SQL, Bash, PowerShell, HTML, CSS, JavaScript, and TypeScript.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:justify-between font-bold text-white-text text-[16px]">
              <span>Transferable Skills</span>
            </div>
            <ul className="list-disc pl-4 space-y-1 text-gray-400 text-[16px] leading-relaxed">
              <li>Technical Leadership leading cross-functional teams, Requirement Gathering, Standard Operating Procedures (SOPs), Crisis Management and Mentorship.</li>
            </ul>
          </div>

          {/* Work Experience */}
          <p className="text-terminal font-bold border-b border-terminal-dark/40 text-[18px] uppercase tracking-wider">Experience: NBCUniversal</p>
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:justify-between font-bold text-white-text text-[16px]">
              <span>Senior Real-Time Systems Developer / Designer</span>
              <span className="text-white-text text sm:text-[16px]">April 2018 - Present</span>
            </div>
            <ul className="list-disc pl-4 space-y-1 text-gray-400 text-[16px] leading-relaxed">
              <li>Architected a centralized software suite using .NET and C# that streamlined configuration management for mission-critical broadcast infrastructure.</li>
              <li>Automates 400+ system combinations across 40+ national locations by engineering a unified, data-driven template pipeline.</li>
              <li>Maintain a high-percentage system uptime for 24/7 live operations through proactive management of distributed hardware and software integration.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:justify-between font-bold text-white-text text-[16px]">
              <span>Real-Time Systems Developer / Designer</span>
              <span className="text-white-text text sm:text-[16px]">July 2011 - April 2018</span>
            </div>
            <ul className="list-disc pl-4 space-y-1 text-gray-400 text-[16px] leading-relaxed">
              <li>Increased data accuracy by integrating real-time scripting to automate the link between external data sources and live visual engines.</li>
              <li>Delivered high-priority digital packages under strict deadlines through effective collaboration with technical and creative stakeholders.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:justify-between font-bold text-white-text text-[16px]">
              <span>Independent Contractor</span>
              <span className="text-white-text text sm:text-[16px]">February 2010 - July 2011</span>
            </div>
            <ul className="list-disc pl-4 space-y-1 text-gray-400 text-[16px] leading-relaxed">
              <li>Ensured compliance with digital delivery protocols by developing rigorous technical specifications for web-based advertising assets.</li>
              <li>Successfully managed high-volume production schedules, delivering optimized assets for live broadcast in a high-pressure environment.</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <p className="text-terminal font-bold border-b border-terminal-dark/40 text-[18px] uppercase tracking-wider">Education: DeVry University</p>
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:justify-between font-bold ttext-white-text text-[16px]">
            <span>B.S. in Computer Information Systems</span>
            <span className="text-white-text text sm:text-[16px]">July 2023 - October 2026</span>
          </div>
          <ul className="list-disc pl-4 space-y-1 text-gray-400 text-[16px] leading-relaxed">
            <li>Object-Oriented Programming</li>
            <li>Software Engineering & Application Programming</li>
            <li>Algorithms & Data Structures</li>
            <li>Cybersecurity, Secure Cyber Coding & Data Privacy</li>
            <li>Cloud Computing Security & Infrastructure</li>
            <li>Relational & Non-Relational Databases</li>
            <li>Systems Integration & Web Programming</li>
            <li>Operating Systems Basics</li>
          </ul>
        </div>

        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:justify-between font-bold ttext-white-text text-[16px]">
            <span>Additional Credentials</span>
            <span className="text-white-text text sm:text-[16px]">July 2023 - October 2026</span>
          </div>
          <ul className="list-disc pl-4 space-y-1 text-gray-400 text-[16px] leading-relaxed">
            <li>A.A. in Information Technology (2025)</li>
            <li>A.A. in Web Graphic Design (2010)</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

//============================================// Splash Screen Blueprint //============================================//
interface SplashViewProps {
  onNavigate: (targetView: TrackView, initialTab: any) => void;
}

function SplashView({ onNavigate }: SplashViewProps) {
  return (
    <motion.div key="splash-gateway" className="flex-1 flex flex-col items-center justify-center p-4 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.99 }} transition={{ duration: 0.3 }}>
      <div className="border border-terminal-dark bg-black/60 backdrop-blur-xl p-8 md:p-12 rounded-sm max-w-xl w-full shadow-[0_0_50px_rgba(0,0,0,0.8)]">
        <h1 className="text-3xl md:text-4xl font-bold text-terminal mb-1 tracking-tight">Francisco Acosta</h1>
        <h2 className="text-m text-gray-400 mb-6 uppercase tracking-widest font-bold">Software Engineer</h2>
        <div className="w-7/8 h-[1px] bg-terminal-dark my-3 mx-auto" />

        <div className="text-s text-gray-400">
          <p>franciscoacosta1989@gmail.com</p>
          <p>682-313-6403</p>
        </div>

        <div className="w-3/4 h-[1px] bg-terminal-dark my-3 mx-auto" />

        <p className="text-terminal/70 text-[14px] mb-4 uppercase tracking-widest font-bold">Choose Experience</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <button onClick={() => onNavigate('hr', 'about')} className="px-6 py-3 border border-terminal text-terminal bg-transparent font-bold tracking-wider hover:bg-terminal hover:text-black transition-all duration-300 transform active:scale-95 text-xs uppercase cursor-pointer shadow-[0_0_15px_rgba(0,255,102,0.1)] hover:shadow-[0_0_20px_rgba(0,255,102,0.4)]">
            Human Resources
          </button>

          <button onClick={() => onNavigate('tech', 'about')} className="px-6 py-3 border border-terminal text-terminal bg-transparent font-bold tracking-wider hover:bg-terminal hover:text-black transition-all duration-300 transform active:scale-95 text-xs uppercase cursor-pointer shadow-[0_0_15px_rgba(0,255,102,0.1)] hover:shadow-[0_0_20px_rgba(0,255,102,0.4)]">
            {"\u00A0"}{"\u00A0"}{"\u00A0"}Technical{"\u00A0"}{"\u00A0"}{"\u00A0"}
          </button>

        </div>
      </div>
    </motion.div>
  );
}

//============================================// Academic Labs Information //============================================//
const ACADEMIC_LABS: AcademicLabItem[] = [

  //============================================// Academic Lab 1 //============================================//
  {
    name: "Equipment Checkout System",
    category: "GUI Application",
    slides: [
      {
        title1: "Problem",
        description1: 'Manual check-out and check-in processes that are insecure, inefficient, error-prone, and lack accountability, resulting in lost or stolen tools, inventory mismanagement, and the absence of a clear historical audit trail.',
        title2: "Solution",
        description2: 'A secure, web-based digital Equipment Checkout System (ECS) powered by a centralized AWS database and Microsoft Authenticator MFA. It provides role-based access control (RBAC), real-time transaction tracking, strict input validation, and a clear digital audit trail to optimize tracking and significantly minimize tool loss.',
        documentSrc: academic_lab_1
      }
    ]
  },

  //============================================// Academic Lab 2 //============================================//
  {
    name: "EHR Contingency Plan",
    category: "Architecture & Security",
    slides: [
      {
        title1: "Problem",
        description1: 'Electronic Health Record (EHR) systems are increasingly targeted by sophisticated cyberattacks, creating severe risks of electronic Protected Health Information (ePHI) breaches, prolonged service outages, legal penalties, and widespread operational disruptions that compromise patient care and organizational integrity.',
        title2: "Solution",
        description2: 'A comprehensive response contingency plan implementing a defense-in-depth framework that ensures high availability and resilience. It integrates strict HIPAA compliance, technical safeguards like Role-Based Access Control (RBAC), end-to-end encryption, regular staff training, structured data backup, and disaster recovery strategies to guarantee seamless business continuity and data integrity.',
        documentSrc: academic_lab_2
      }
    ]
  },

  //============================================// Academic Lab 3 //============================================//
  {
    name: "Landscape Business Customer Database",
    category: "GUI Application",
    slides: [
      {
        title1: "Problem",
        description1: 'Landscaping organizations face operational inefficiencies when relying on manual or disjointed tracking methods, leading to difficulties in securely managing client personal data, calculating project costs, and maintaining accurate records without centralized, persistent data storage.',
        title2: "Solution",
        description2: 'A Java-based desktop GUI business application built using a three-tier architecture (presentation, business rules, and data storage) integrated with a SQL database. It provides an efficient, user-friendly, and visually cohesive interface to securely manage customer information, streamline cost tracking, and ensure data persistence with robust exception handling.',
        documentSrc: academic_lab_3
      }
    ]
  },

  //============================================// Academic Lab 4 //============================================//
  {
    name: "Infrastructure Security",
    category: "Analytics",
    slides: [
      {
        title1: "Problem",
        description1: 'Modern organizational IT environments face severe risks from undetected security vulnerabilities, lacking proper visibility into network traffic anomalies, unmonitored communication channels, and insufficient defensive barriers to intercept malicious network intrusions or perform critical post-incident memory forensics.',
        title2: "Solution",
        description2: 'A multi-layered infrastructure security framework that implements proactive threat detection and active defense mechanisms. It integrates network visibility through packet-level analysis, intrusion detection and prevention systems (Snort rules), stringent host-based and network firewall policies, robust OpenSSL data encryption protocols, and live memory forensics to effectively mitigate, intercept, and analyze network threats.',
        documentSrc: academic_lab_4
      }
    ]
  },

  //============================================// Academic Lab 5 //============================================//
  {
    name: "Relational Database Management ",
    category: "Database",
    slides: [
      {
        title1: "Problem",
        description1: 'The objective was to design and implement a relational database schema from an Entity-Relationship Diagram (ERD) to manage regional enterprise entities, including customers, employees, and their professional skill matrices. The system needed to enforce data integrity constraints and handle complex relational queries, such as calculating billing aggregates and joining multi-table datasets.',
        title2: "Solution",
        description2: 'Developed a structured SQL schema with normalized tables, complete with primary and foreign key constraints to track region-specific employee and customer profiles. Optimized data retrieval by constructing complex relational joins, subqueries for pricing threshold filters, and a reusable virtual view component to dynamically audit employee core competencies.',
        documentSrc: academic_lab_5
      }
    ]
  },

  //============================================// Academic Lab 6 //============================================//
  {
    name: "Payroll System",
    category: "GUI Application",
    slides: [
      {
        title1: "Problem",
        description1: 'Organizations face security risks and operational errors when managing employee data manually or using disjointed methods, leaving sensitive personal information (such as SSNs and compensation rates) vulnerable to unauthorized exposure and making it difficult to calculate diverse hourly and salary structures accurately.',
        title2: "Solution",
        description2: 'A secure C# desktop GUI application built within Microsoft Visual Studio that centralizes employee data tracking and automates paycheck processing. It implements robust object-oriented programming principles, specifically utilizing data hiding (encapsulation) to protect sensitive data fields, while providing a clean, user-friendly interface to easily add, remove, and display personnel records.',
        documentSrc: academic_lab_6_1
      }
    ]
  },

  //============================================// Academic Lab 7 //============================================//
  {
    name: "VM Deployment, Storage & Security",
    category: "Cloud",
    slides: [
      {
        title1: "Problem",
        description1: 'Traditional on-premises infrastructure limits organizational agility due to time-consuming hardware procurement, complex manual networking setups, a lack of scalable cloud storage, and minimal proactive monitoring to detect system abnormalities or security threats.',
        title2: "Solution",
        description2: 'A scalable cloud infrastructure deployed within Microsoft Azure that automates virtual machine (VM) provisioning and optimizes network administration. It establishes a secure Virtual Network (VNet) with isolated subnets and Network Security Groups (NSGs), integrates resilient Blob storage solutions, and implements proactive monitoring via automated cloud alert rules to ensure high availability and robust system oversight.',
        documentSrc: academic_lab_7
      }
    ]
  },

  //============================================// Academic Lab 8 //============================================//
  {
    name: "Information Security",
    category: "Security",
    slides: [
      {
        title1: "Problem",
        description1: 'Dynamic modern business environments face escalating security risks from unencrypted data transmissions, unprotected mobile devices (BYOD policy gaps), outdated software vulnerabilities, and static network perimeters that leave critical corporate assets exposed to unauthorized access and sophisticated cyberattacks.',
        title2: "Solution",
        description2: 'A defense-in-depth security framework built inside a virtualized Hyper-V environment to eliminate vulnerabilities and mitigate risk. It deploys robust technical and administrative safeguards, including Asymmetric Key Encryption, strict Bring Your Own Device (BYOD) and Mobile Device Management (MDM) security policies, multifactor authentication (MFA), automated vulnerability assessments, and stateful iptables firewall rules to secure corporate assets and ensure regulatory readiness.',
        documentSrc: academic_lab_8
      }
    ]
  },

  //============================================// Academic Lab 9 //============================================//
  {
    name: "Linux Fundamentals",
    category: "Operating Systems",
    slides: [
      {
        title1: "Problem",
        description1: 'Transitioning to and managing a complex Linux command-line environment presents a steep learning curve, making it difficult to properly navigate hierarchical file structures, monitor real-time system activity, execute administrative tasks, and safely isolate security risks without specialized training.',
        title2: "Solution",
        description2: 'A virtualized Ubuntu Linux administration framework deployed via Hyper-V for secure IoT and network testing. It leverages core CLI competencies to automate processes through shell scripting, establish structured network configurations, manage groups and user authentication, and efficiently monitor system diagnostics to ensure resilient and secure platform operations.',
        documentSrc: academic_lab_9
      }
    ]
  },

  //============================================// Academic Lab 10 //============================================//
  {
    name: "Remote Traffic Light Controller",
    category: "IoT",
    slides: [
      {
        title1: "Problem",
        description1: 'Managing complex physical traffic intersections and emergency response overrides using isolated, manual infrastructure lacks real-time scalability, data feedback, and safe remote operational control.',
        title2: "Solution",
        description2: 'A fully integrated, intelligent IoT traffic light controller system built on an ESP32 microcontroller utilizing the Arduino IDE. It connects hardware components like a crosswalk button, an active buzzer, and emergency LEDs to an LCD status unit, while leveraging a mini-router and an MQTT client to enable seamless, real-time remote monitoring and network control.',
        documentSrc: academic_lab_10
      }
    ]
  },

  //============================================// Academic Lab 11 //============================================//
  {
    name: "Networking Fundamentals",
    category: "IT",
    slides: [
      {
        title1: "Problem",
        description1: 'Small Office/Home Office (SOHO) networks face critical vulnerabilities and operational risks when deploying default device configurations, lacking proper IP subnetting architecture, and omitting strict access control mechanisms like MAC filtering to prevent unauthorized connections.',
        title2: "Solution",
        description2: 'A secure network infrastructure designed and validated within a virtualized Hyper-V environment using Microsoft Visio architectural blueprints. It implements custom IPv4 addressing schemes, optimized subnetting for efficient data routing, connectivity testing, and robust wireless security strategies—including administrative credential overrides and strict MAC address filtering—to establish a resilient, authenticated network perimeter.',
        documentSrc: academic_lab_11
      }
    ]
  },

  //============================================// Academic Lab 12 //============================================//
  {
    name: "Home Security System",
    category: "IoT",
    slides: [
      {
        title1: "Problem",
        description1: 'Residential properties lack accessible, customizable, and automated monitoring systems to detect unauthorized physical presence or motion, leaving homes vulnerable to security breaches without real-time local feedback.',
        title2: "Solution",
        description2: 'A physical IoT Home Security System prototyped in Tinkercad and built using an Arduino Mega 2560 microcontroller programmed in C/C++. The system integrates hardware components that include a PIR motion sensor, a breadboard circuit matrix, active buzzers, and LED indicators to deliver automated, responsive local threat detection and physical device interaction.',
        documentSrc: academic_lab_12
      }
    ]
  }
];

//============================================// Academic Labs Layout + Style //============================================//
function AcademicLabsContent({ animConfig }: SharedViewProps) {

  // Track which lab is selected from the left list
  const [selectedLabIndex, setSelectedLabIndex] = useState<number>(0);

  // Track the active step/slide on the right-hand panel
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const activeLab = ACADEMIC_LABS[selectedLabIndex];
  const activeSlide = activeLab.slides[currentSlideIndex];

  // Safely reset slide index when changing labs
  const handleLabSelect = (index: number) => {
    setSelectedLabIndex(index);
    setCurrentSlideIndex(0);
  };

  // Academic Labs Layout + Style
  return (
    <motion.div key="tech-labs" {...animConfig} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left List Pane */}
      <div className="lg:col-span-1 bg-black/90 border border-terminal-dark p-4 h-[640px] overflow-y-auto space-y-2">
        {ACADEMIC_LABS.map((lab, i) => (
          <div key={i} onClick={() => handleLabSelect(i)} className={`p-2 border transition-colors text-[15px] cursor-pointer ${selectedLabIndex === i ? 'border-terminal bg-terminal/10' : 'border-zinc-900 bg-zinc-950/40 hover:border-terminal/40'}`}>
            <p className="text-white font-semibold truncate">{lab.name}</p>
            <span className="text-terminal/60 text-[14px] uppercase tracking-wide">{lab.category}</span>
          </div>
        ))}
      </div>

      {/* Right Content Slide Viewer */}
      <div className="lg:col-span-2 bg-black/80 border border-terminal-dark p-6 flex flex-col justify-between h-[640px]">
        {/* Scrollable Content Wrapper - Locks size constraints inside framing */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
          <div>
            <span className="text-terminal text-[15px] font-bold block border-b border-terminal-dark pb-2 uppercase tracking-wider">
              {activeLab.name}
            </span>

            {/* Slide Layout + Info */}
            <div className="mt-4 space-y-1">
              <p className="text-[18px] text-terminal leading-relaxed font-sans">{activeSlide.title1}</p>
              <p className="text-[18px] text-gray-300 leading-relaxed font-sans whitespace-pre-line">{activeSlide.description1}</p>
              <p className="text-[18px] text-terminal leading-relaxed font-sans">{activeSlide.title2}</p>
              <p className="text-[18px] text-gray-300 leading-relaxed font-sans whitespace-pre-line">{activeSlide.description2}</p>
            </div>
            <p>{"\u00a0"}</p>
            <a href={activeSlide.documentSrc} download className="px-7 py-1 border border-terminal text-terminal font-bold text-[16px] hover:bg-terminal hover:text-black transition-all duration-200 uppercase tracking-wider rounded-sm text-center">DOWNLOAD PROJECT OVERVIEW</a>
            <p>{"\u00a0"}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

//============================================// Case Study Information //============================================//
const CASE_STUDIES: CaseStudyItem[] = [

  //============================================// Case Study 1 //============================================//
  {
    name: "Dynamic Canvas Deployment Engine",
    category: "Real-Time Graphics Engine",
    slides: [
      {
        title: "Problem",
        description: "The Workflow: \n NBC Universal’s centralized graphics hub (The Arthouse, 20 artists) services 40+ local stations, spanning multiple daily newscasts and special programming across the nation. \n \n The Scaling Issue: \n Graphics must be mapped for unique screens and specific anchor blocking (e.g., standing vs. sitting at the desk). \n \n The Bottleneck: \n This matrix required 350+ custom, non-shareable variations that created an unsustainable workload for a single creative team.",
        imageSrc: case_study_1_problem
      },
      {
        title: "Innovation",
        description: 'The Concept: \n Developed a single, unified graphic template capable of adapting to any station’s physical set layout with the associated graphic named "SetU". \n \n The Architecture: \n The template splits assets into independent foreground (text/imagery) and background layers. \n \n The Technology: \n Built a custom data pipeline that dynamically adjusts the scale, positioning, and mapping of these layers in real-time within the live broadcasting environment.',
        imageSrc: case_study_1_innovation
      },
      {
        title: "Impact",
        description: 'Operational Simplicity: \n Producers simply assign the "SetU" asset to a predefined studio variation that automatically matches the monitor and the planned camera shot. \n \n The Result: \n Transformed 350+ custom assets into a single, universal graphic ecosystem. \n \n The Value: \n Content is now 100% shareable across all 40+ stations, drastically reducing artist turnaround times and eliminating repetitive manual resizing.',
        imageSrc: case_study_1_impact
      }
    ]
  },

  //============================================// Case Study 2 //============================================//
  {
    name: "Data Pipeline Deployment Engine",
    category: "Real-Time Data Engine",
    slides: [
      {
        title: "Problem",
        description: "The Workflow: \n NBC Universal’s centralized local news departments relied on ingestion of external live data feeds (covering sports, politics, weather, and stocks) that were fed raw and unfiltered directly into live, real-time graphics engines. \n \n The Complexity: \n This fragile pipeline spanned across 40+ independent local stations, each managing localized variations of these specialized data streams with zero shared fallback coverage. \n \n The Reliability Issue: Unpredictable external payloads or missing schemas caused frequent real-time renderer crashes. A single breaking data mutation required manual intervention across individual station nodes, triggering severe on-air downtime. \n \n The Bottleneck: \n Managing this matrix required dedicated, continuous oversight to prevent domino-effect failures. One localized mishap threatened to desynchronize critical news streams.",
        imageSrc: case_study_2_problem
      },
      {
        title: "Innovation",
        description: 'The Concept: \n  Engineered the "Arthouse Data Manager", a centralized management platform composed of a high-performance Windows GUI application paired with a custom Windows Service. \n \n The Architecture:  \n The system uses a multi-tiered file isolation strategy. The service ingests live data and writes out three distinct staging files: a raw text cache, a deeply sanitized/validated replica that strips null values and enforces range bounds (e.g., discarding anomalous weather data >130°F), and a final optimized file safe for the real-time systems to consume. \n \n The Technology: \n Built using C#, WPF, .NET, and XAML for the interface, which dynamically parses external data models into interactive GUI drop-downs. Users can graphically map headers, custom delimiters, and targeted data points to export saved JSON configurations. The UI directly interfaces with the Windows Service Controller API, providing programmatic Start, Stop, and Restart hooks for any linked system process.',
        imageSrc: case_study_2_innovation
      },
      {
        title: "Impact",
        description: 'Operational Simplicity: \n Users utilize the intuitive interface to instantly map custom streams, define background update intervals, and dynamically pick specific data keys from external URLs without writing a single line of script. \n \n The Result: \n Completely isolated the real-time rendering systems from hazardous data sources, live on-air system crashes and data-induced downtimes down to zero. \n \n The Value: \n Scaled operational efficiency exponentially, transforming a highly sensitive multi-station maintenance hazard into a stream-lined, hardened pipeline that allows a single developer to manage and orchestrate all 40+ station data feeds seamlessly.',
        imageSrc: case_study_2_impact
      }
    ]
  },

  //============================================// Case Study 3 //============================================//
  {
    name: "Data-Driven Broadcast Deployment",
    category: "Real-Time Broadcast Template",
    slides: [
      {
        title: "Problem",
        description: "NBC Philadelphia required a scalable, real-time template framework for its live coverage of the 250th U.S. Anniversary at the Wawa Welcome America festival. The production demanded a highly versatile suite of keyable graphics and lower thirds to overlay live field reporter feeds. However, the legacy workflow relied on production teams manually searching, loading, and configuring independent graphics assets in the real-time engine, introducing severe operational bottlenecks and human-error risks during a fast-paced live broadcast event.",
        imageSrc: case_study_3_problem
      },
      {
        title: "Solution",
        description: "Implemented a centralized, data-driven template engine that condensed a multitude of graphic variations into a single unified scene architecture. By integrating logic and an optimized data stream, the system exposes a single top-level control interface (dropdown state selector) for the control room. The template acts as a smart state machine, dynamically parsing data binding arrays to instantaneously swap texture maps, keyable visibility fields, and geometric layouts behind the scenes based on the producer's selection.",
        imageSrc: case_study_3_solution
      },
      {
        title: "Impact",
        description: 'By decoupling the underlying data logic from the visual assets, this framework completely eliminated search delays and runtime setup friction in the newsroom. Producers were able to orchestrate a complex, rapid-fire programming lineup without operational overhead or configuration downtime. The automated system ensured absolute stability for the live graphics pipeline, delivering a highly valued broadcast experience to millions of viewers across the Philadelphia region.',
        imageSrc: case_study_3_impact
      }
    ]
  },

  //============================================// Case Study 4 //============================================//
  {
    name: "Real-Time Broadcast Smart Template",
    category: "Real-Time Broadcast Template",
    slides: [
      {
        title: "Problem",
        description: "New York Live required a robust, efficient suite of graphics templates tailored for a lean production team. Lacking the heavy staffing of a traditional newscast, the show needed a streamlined workflow that allowed a single user to build and manage all on-air graphics quickly and effortlessly.",
        imageSrc: case_study_4_problem
      },
      {
        title: "Solution",
        description: "Developed a minimal yet powerful 'smart template' system to support the entire broadcast. By consolidating multiple manual-entry layouts into adaptive templates, the system now automatically generates the correct formatting based on the user's input.",
        imageSrc: case_study_4_solution
      },
      {
        title: "Impact",
        description: '\n The new workflow empowers a lean production team to deliver high value content without the overhead or budget of a traditional newscast. New York Live successfully brings premium lifestyle programming to the New York metropolitan area with maximum efficiency.',
        imageSrc: case_study_4_impact
      }
    ]
  }
];

//============================================// Case Study Layout + Style //============================================//
function CaseStudiesContent({ animConfig }: SharedViewProps) {

  // Track which case study is selected from the left list
  const [selectedStudyIndex, setSelectedStudyIndex] = useState<number>(0);

  // Track the active step/slide on the right-hand panel
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const contentWrapperRef = React.useRef<HTMLDivElement>(null);

  const activeStudy = CASE_STUDIES[selectedStudyIndex];
  const activeSlide = activeStudy.slides[currentSlideIndex];

  // Safely reset slide index when changing case studies
  const handleStudySelect = (index: number) => {
    setSelectedStudyIndex(index);
    setCurrentSlideIndex(0); // Resets to the first slide of the new case study

    // Forces the right pane back to the top for the new study
    setTimeout(scrollToTop, 0);
  };

  // Scroll to top when next or previous button is hit
  const scrollToTop = () => {
    if (contentWrapperRef.current) {
      contentWrapperRef.current.scrollTop = 0;
    }
  };

  // Next button trigger
  const handleNextSlide = () => {
    if (currentSlideIndex < activeStudy.slides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
      scrollToTop();
    }
  };

  // Previous button trigger
  const handlePrevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
      scrollToTop();
    }
  };

  // Case Study Layout + Style
  return (
    <motion.div key="tech-studies" {...animConfig} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left List Pane */}
      <div className="lg:col-span-1 bg-black/90 border border-terminal-dark p-4 h-[640px] overflow-y-auto space-y-2">
        {CASE_STUDIES.map((study, i) => (
          <div key={i} onClick={() => handleStudySelect(i)} className={`p-2 border transition-colors text-[15px] cursor-pointer ${selectedStudyIndex === i ? 'border-terminal bg-terminal/10' : 'border-zinc-900 bg-zinc-950/40 hover:border-terminal/40'}`}>
            <p className="text-white font-semibold truncate">{study.name}</p>
            <span className="text-terminal/60 text-[14px] uppercase tracking-wide">{study.category}</span>
          </div>
        ))}
      </div>

      {/* Right Content Slide Viewer */}
      <div className="lg:col-span-2 bg-black/80 border border-terminal-dark p-6 flex flex-col justify-between h-[640px]">
        {/* Scrollable Content Wrapper - Locks size constraints inside framing */}
        <div ref={contentWrapperRef} className="flex-1 overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
          <div>
            <span className="text-terminal text-[15px] font-bold block border-b border-terminal-dark pb-2 uppercase tracking-wider">
              {activeStudy.name}
            </span>

            {/* Expanded Slide Container */}
            <div className="mt-4 h-[300px] bg-zinc-950 border border-zinc-900 rounded-sm flex flex-col items-center justify-center text-[11px] text-gray-500 p-4 text-center overflow-hidden relative">
              {activeSlide.imageSrc ? (<img
                src={activeSlide.imageSrc} // <-- Clean, raw imported module reference
                alt={activeSlide.title}
                className="max-w-full max-h-full object-contain border border-terminal-dark/40 shadow-xl"
              />) : (
                <div className="flex flex-col items-center justify-center">
                  <p className="text-terminal font-bold mb-1">[{activeSlide.title}]</p>
                  <p className="max-w-md font-sans text-gray-400 text-xs">Static preview asset payload unmapped.</p>
                </div>
              )}
            </div>

            {/* Slide Layout + Info */}
            <div className="mt-4 space-y-1">
              <p className="text-[22px] text-terminal leading-relaxed font-sans">{activeSlide.title}</p>
              <p className="text-[18px] text-gray-300 leading-relaxed font-sans whitespace-pre-line">{activeSlide.description}</p>
            </div>
          </div>
        </div>

        {/* Nav Interactive Bar - Pinned outside the scrollable view at the absolute bottom */}
        <div className="flex items-center justify-between border-t border-zinc-900 pt-4 mt-4 bg-black/10">
          <button onClick={handlePrevSlide} disabled={currentSlideIndex === 0} className="px-3 py-1 bg-zinc-950 border border-zinc-800 text-[12px] text-terminal hover:text-terminal hover:border-terminal/50 disabled:opacity-30 disabled:hover:text-gray-400 disabled:hover:border-zinc-800 disabled:cursor-not-allowed transition-all font-mono">
            &lt; PREV SECTION
          </button>

          <button onClick={handleNextSlide} disabled={currentSlideIndex === activeStudy.slides.length - 1} className="px-3 py-1 bg-zinc-950 border border-zinc-800 text-[12px] text-terminal hover:text-terminal hover:border-terminal/50 disabled:opacity-30 disabled:hover:text-gray-400 disabled:hover:border-zinc-800 disabled:cursor-not-allowed transition-all font-mono">
            NEXT SECTION &gt;
          </button>
        </div>
      </div>
    </motion.div>
  );
}


//============================================// Case Study Slide Blueprint //============================================//
interface CaseStudySlideSection {
  title: string;
  description: string;
  imageSrc?: string;
}

interface CaseStudyItem {
  name: string;
  category: string;
  slides: CaseStudySlideSection[];
}

//============================================// Academic Lab Slide Blueprint //============================================//
interface AcademicLabsSlideSection {
  title1: string;
  description1: string;
  title2: string;
  description2: string;
  documentSrc: string;
}

interface AcademicLabItem {
  name: string;
  category: string;
  slides: AcademicLabsSlideSection[];
}

//============================================// Repository Page Information //============================================//
interface RepositoryExplorerProps extends SharedViewProps {
  selectedFile: string | null;
  onSelectFile: (fileName: string | null) => void;
}

function RepositoryExplorerContent({ animConfig, selectedFile, onSelectFile }: RepositoryExplorerProps) {
  return (
    <motion.div key="tech-repo" {...animConfig} className="border border-terminal-dark bg-black/90 rounded-sm flex flex-col md:flex-row h-[640px] overflow-hidden">

      {/* Left Directory Panel */}
      <div className="w-full md:w-5/12 border-b md:border-b-0 md:border-r border-terminal-dark p-4 space-y-3 overflow-y-auto bg-black/40">

        <div className="pl-2 space-y-1 text-[11px]">
          <p className="text-gray-500 font-semibold text-[16px] tracking-wider">📁 Academic Labs</p>

          <div className="pl-4 space-y-1">

            {/* Lab 1 */}
            <button onClick={() => onSelectFile('LAB_PREVIEW: EQUIPMENT CHECKOUT SYSTEM')}
              className={`block w-full text-left pl-3 text-[15px] hover:underline truncate cursor-pointer transition-colors ${selectedFile === 'LAB_PREVIEW: EQUIPMENT CHECKOUT SYSTEM' ? 'text-terminal font-bold' : 'text-terminal/70 hover:text-terminal'}`}>
              📄 AL1_Equipment_checkout_system.pdf
            </button>

            {/* Lab 2 */}
            <button onClick={() => onSelectFile('LAB_PREVIEW: ELECTRONIC HEALTH RECORD')} className={`block w-full text-left pl-3 text-[15px] hover:underline truncate cursor-pointer transition-colors ${selectedFile === 'LAB_PREVIEW: ELECTRONIC HEALTH RECORD' ? 'text-terminal font-bold' : 'text-terminal/70 hover:text-terminal'}`}>
              📄 AL2_electronic_health_record_protection_resilience_recovery.pdf
            </button>

            {/* Lab 3 */}
            <button onClick={() => onSelectFile('LAB_PREVIEW: JAVA APPLICATION LANDSCAPE')} className={`block w-full text-left pl-3 text-[15px] hover:underline truncate cursor-pointer transition-colors ${selectedFile === 'LAB_PREVIEW: JAVA APPLICATION LANDSCAPE' ? 'text-terminal font-bold' : 'text-terminal/70 hover:text-terminal'}`}>
              📄 AL3_java_based_application_landscape.pdf
            </button>

            {/* Lab 4 */}
            <button onClick={() => onSelectFile('LAB_PREVIEW: INFRASTRUCTURE SECURITY')} className={`block w-full text-left pl-3 text-[15px] hover:underline truncate cursor-pointer transition-colors ${selectedFile === 'LAB_PREVIEW: INFRASTRUCTURE SECURITY' ? 'text-terminal font-bold' : 'text-terminal/70 hover:text-terminal'}`} >
              📄 AL4_fundamentals_of_infrastructure_security.pdf
            </button>

            {/* Lab 5 */}
            <button onClick={() => onSelectFile('LAB_PREVIEW: RELATIONAL DATABASE')} className={`block w-full text-left pl-3 text-[15px] hover:underline truncate cursor-pointer transition-colors ${selectedFile === 'LAB_PREVIEW: RELATIONAL DATABASE' ? 'text-terminal font-bold' : 'text-terminal/70 hover:text-terminal'}`}>
              📄 AL5_relational_database.pdf
            </button>

            {/* Lab 6 */}
            <button onClick={() => onSelectFile('LAB_PREVIEW: PAYROLL SYSTEM 1')} className={`block w-full text-left pl-3 text-[15px] hover:underline truncate cursor-pointer transition-colors ${selectedFile === 'LAB_PREVIEW: PAYROLL SYSTEM' ? 'text-terminal font-bold' : 'text-terminal/70 hover:text-terminal'}`} >
              📄 AL6_payroll_system_1.pdf
            </button>

            <button onClick={() => onSelectFile('LAB_PREVIEW: PAYROLL SYSTEM 2')} className={`block w-full text-left pl-3 text-[15px] hover:underline truncate cursor-pointer transition-colors ${selectedFile === 'LAB_PREVIEW: PAYROLL SYSTEM' ? 'text-terminal font-bold' : 'text-terminal/70 hover:text-terminal'}`} >
              📄 AL6_payroll_system_2.pdf
            </button>

            <button onClick={() => onSelectFile('LAB_PREVIEW: PAYROLL SYSTEM 3')} className={`block w-full text-left pl-3 text-[15px] hover:underline truncate cursor-pointer transition-colors ${selectedFile === 'LAB_PREVIEW: PAYROLL SYSTEM' ? 'text-terminal font-bold' : 'text-terminal/70 hover:text-terminal'}`} >
              📄 AL6_payroll_system_3.zip
            </button>

            {/* Lab 7 */}
            <button onClick={() => onSelectFile('LAB_PREVIEW: CLOUD COMPUTING')} className={`block w-full text-left pl-3 text-[15px] hover:underline truncate cursor-pointer transition-colors ${selectedFile === 'LAB_PREVIEW: CLOUD COMPUTING' ? 'text-terminal font-bold' : 'text-terminal/70 hover:text-terminal'}`} >
              📄 AL7_fundamentals_of_cloud_computing.pdf
            </button>

            {/* Lab 8 */}
            <button onClick={() => onSelectFile('LAB_PREVIEW: INFORMATION SECURITY')} className={`block w-full text-left pl-3 text-[15px] hover:underline truncate cursor-pointer transition-colors ${selectedFile === 'LAB_PREVIEW: INFORMATION SECURITY' ? 'text-terminal font-bold' : 'text-terminal/70 hover:text-terminal'}`} >
              📄 AL8_fundamentals_of_information_security.pdf
            </button>

            {/* Lab 9 */}
            <button onClick={() => onSelectFile('LAB_PREVIEW: LINUX NETWORKING')} className={`block w-full text-left pl-3 text-[15px] hover:underline truncate cursor-pointer transition-colors ${selectedFile === 'LAB_PREVIEW: LINUX NETWORKING' ? 'text-terminal font-bold' : 'text-terminal/70 hover:text-terminal'}`} >
              📄 AL9_Linux_Networking_Fundamentals.pdf
            </button>

            {/* Lab 10 */}
            <button onClick={() => onSelectFile('LAB_PREVIEW: TRAFFIC LIGHT CONTROLLER')} className={`block w-full text-left pl-3 text-[15px] hover:underline truncate cursor-pointer transition-colors ${selectedFile === 'LAB_PREVIEW: TRAFFIC LIGHT CONTROLLER' ? 'text-terminal font-bold' : 'text-terminal/70 hover:text-terminal'}`} >
              📄 AL10_Remote_Control_Traffic_Light_Controller.pdf
            </button>

            {/* Lab 11 */}
            <button onClick={() => onSelectFile('LAB_PREVIEW: NETWORKING FUNDAMENTALS')} className={`block w-full text-left pl-3 text-[15px] hover:underline truncate cursor-pointer transition-colors ${selectedFile === 'LAB_PREVIEW: NETWORKING FUNDAMENTALS' ? 'text-terminal font-bold' : 'text-terminal/70 hover:text-terminal'}`} >
              📄 AL11_fundamentals_of_networking.pdf
            </button>

            {/* Lab 12 */}
            <button onClick={() => onSelectFile('LAB_PREVIEW: IOT HOME SECURITY')} className={`block w-full text-left pl-3 text-[15px] hover:underline truncate cursor-pointer transition-colors ${selectedFile === 'LAB_PREVIEW: IOT HOME SECURITY' ? 'text-terminal font-bold' : 'text-terminal/70 hover:text-terminal'}`} >
              📄 AL12_iot_home_security.pdf
            </button>

          </div>
        </div>

        <div className="pl-2 space-y-1 text-[11px]">
          <p className="text-gray-500 font-semibold text-[16px] tracking-wider">📁 Case Studies</p>
          <div className="pl-4 space-y-1">
            {/* Case Study 1 */}
            <button
              onClick={() => onSelectFile('CASE_STUDY_PREVIEW: REAL-TIME DATE PIPELINE DEPLOYMENT ENGINE')}
              className={`block w-full text-left pl-3 text-[15px] hover:underline truncate cursor-pointer transition-colors ${selectedFile === 'CASE_STUDY_PREVIEW: REAL-TIME DATE PIPELINE DEPLOYMENT ENGINE' ? 'text-terminal font-bold' : 'text-terminal/70 hover:text-terminal'
                }`}>
              📄 CS1_Real-TimeDataPipelineDeployment Engine.zip
            </button>
          </div>
        </div>
      </div>

      {/* Right Code Inspector Console - Dynamically parses and previews content formats */}
      <div className="flex-1 p-6 overflow-y-auto bg-zinc-950/90 text-gray-300 border-t md:border-t-0 border-terminal-dark flex flex-col justify-between text-xs">
        <div className="flex-1 flex flex-col justify-between">
          <div>

            {/* Dynamic Engineering Lab Previewer (Problem/Solution + Download format) */}
            {/* Right Code Inspector Console */}
            <div className="flex-1 p-0 overflow-hidden bg-zinc-950/90 text-gray-300 border-t md:border-t-0 border-terminal-dark flex flex-col justify-between text-xs h-full relative">

              {/* Main Viewport Content Area */}
              <div className="flex-1 overflow-y-auto p-4 h-full relative">

                {/* EMPTY STATE */}
                {!selectedFile && (
                  <p className="text-gray-500 text-[20px] pt-2">
                    Select an active file to review.
                  </p>
                )}

                {selectedFile === 'LAB_PREVIEW: EQUIPMENT CHECKOUT SYSTEM' && (
                  <div className="w-full h-[375px] flex flex-col justify-between bg-zinc-950 rounded-sm border border-zinc-900 overflow-hidden">
                    <object
                      data={`${academic_lab_1}#toolbar=1&navpanes=0&scrollbar=1`}
                      type="application/pdf"
                      className="w-full h-full border-none bg-zinc-950"
                    />
                  </div>
                )}

                {selectedFile === 'LAB_PREVIEW: ELECTRONIC HEALTH RECORD' && (
                  <div className="w-full h-[375px] flex flex-col justify-between bg-zinc-950 rounded-sm border border-zinc-900 overflow-hidden">
                    <object
                      data={`${academic_lab_2}#toolbar=1&navpanes=0&scrollbar=1`}
                      type="application/pdf"
                      className="w-full h-full border-none bg-zinc-950"
                    />
                  </div>
                )}

                {selectedFile === 'LAB_PREVIEW: JAVA APPLICATION LANDSCAPE' && (
                  <div className="w-full h-[375px] flex flex-col justify-between bg-zinc-950 rounded-sm border border-zinc-900 overflow-hidden">
                    <object
                      data={`${academic_lab_3}#toolbar=1&navpanes=0&scrollbar=1`}
                      type="application/pdf"
                      className="w-full h-full border-none bg-zinc-950"
                    />
                  </div>
                )}

                {selectedFile === 'LAB_PREVIEW: INFRASTRUCTURE SECURITY' && (
                  <div className="w-full h-[375px] flex flex-col justify-between bg-zinc-950 rounded-sm border border-zinc-900 overflow-hidden">
                    <object
                      data={`${academic_lab_4}#toolbar=1&navpanes=0&scrollbar=1`}
                      type="application/pdf"
                      className="w-full h-full border-none bg-zinc-950"
                    />
                  </div>
                )}

                {selectedFile === 'LAB_PREVIEW: RELATIONAL DATABASE' && (
                  <div className="w-full h-[375px] flex flex-col justify-between bg-zinc-950 rounded-sm border border-zinc-900 overflow-hidden">
                    <object
                      data={`${academic_lab_5}#toolbar=1&navpanes=0&scrollbar=1`}
                      type="application/pdf"
                      className="w-full h-full border-none bg-zinc-950"
                    />
                  </div>
                )}

                {selectedFile === 'LAB_PREVIEW: PAYROLL SYSTEM 1' && (
                  <div className="w-full h-[375px] flex flex-col justify-between bg-zinc-950 rounded-sm border border-zinc-900 overflow-hidden">
                    <object
                      data={`${academic_lab_6_1}#toolbar=1&navpanes=0&scrollbar=1`}
                      type="application/pdf"
                      className="w-full h-full border-none bg-zinc-950"
                    />
                  </div>
                )}

                {selectedFile === 'LAB_PREVIEW: PAYROLL SYSTEM 2' && (
                  <div className="w-full h-[375px] flex flex-col justify-between bg-zinc-950 rounded-sm border border-zinc-900 overflow-hidden">
                    <object
                      data={`${academic_lab_6_2}#toolbar=1&navpanes=0&scrollbar=1`}
                      type="application/pdf"
                      className="w-full h-full border-none bg-zinc-950"
                    />
                  </div>
                )}

                {selectedFile === 'LAB_PREVIEW: PAYROLL SYSTEM 3' && (
                  <div className="w-full h-[375px] flex flex-col justify-between bg-zinc-950 rounded-sm border border-zinc-900 overflow-hidden">
                    <iframe
                      src="https://drive.google.com/file/d/1H88Gsy_uCMvteV0H2e1FAgSJcxVTy6SO/preview"
                      className="w-full h-full border-none bg-zinc-950"
                      allow="autoplay"
                    />
                  </div>
                )}

                {selectedFile === 'LAB_PREVIEW: CLOUD COMPUTING' && (
                  <div className="w-full h-[375px] flex flex-col justify-between bg-zinc-950 rounded-sm border border-zinc-900 overflow-hidden">
                    <object
                      data={`${academic_lab_7}#toolbar=1&navpanes=0&scrollbar=1`}
                      type="application/pdf"
                      className="w-full h-full border-none bg-zinc-950"
                    />
                  </div>
                )}

                {selectedFile === 'LAB_PREVIEW: INFORMATION SECURITY' && (
                  <div className="w-full h-[375px] flex flex-col justify-between bg-zinc-950 rounded-sm border border-zinc-900 overflow-hidden">
                    <object
                      data={`${academic_lab_8}#toolbar=1&navpanes=0&scrollbar=1`}
                      type="application/pdf"
                      className="w-full h-full border-none bg-zinc-950"
                    />
                  </div>
                )}

                {selectedFile === 'LAB_PREVIEW: LINUX NETWORKING' && (
                  <div className="w-full h-[375px] flex flex-col justify-between bg-zinc-950 rounded-sm border border-zinc-900 overflow-hidden">
                    <object
                      data={`${academic_lab_9}#toolbar=1&navpanes=0&scrollbar=1`}
                      type="application/pdf"
                      className="w-full h-full border-none bg-zinc-950"
                    />
                  </div>
                )}

                {selectedFile === 'LAB_PREVIEW: TRAFFIC LIGHT CONTROLLER' && (
                  <div className="w-full h-[375px] flex flex-col justify-between bg-zinc-950 rounded-sm border border-zinc-900 overflow-hidden">
                    <object
                      data={`${academic_lab_10}#toolbar=1&navpanes=0&scrollbar=1`}
                      type="application/pdf"
                      className="w-full h-full border-none bg-zinc-950"
                    />
                  </div>
                )}

                {selectedFile === 'LAB_PREVIEW: NETWORKING FUNDAMENTALS' && (
                  <div className="w-full h-[375px] flex flex-col justify-between bg-zinc-950 rounded-sm border border-zinc-900 overflow-hidden">
                    <object
                      data={`${academic_lab_11}#toolbar=1&navpanes=0&scrollbar=1`}
                      type="application/pdf"
                      className="w-full h-full border-none bg-zinc-950"
                    />
                  </div>
                )}

                {selectedFile === 'LAB_PREVIEW: IOT HOME SECURITY' && (
                  <div className="w-full h-[375px] flex flex-col justify-between bg-zinc-950 rounded-sm border border-zinc-900 overflow-hidden">
                    <object
                      data={`${academic_lab_12}#toolbar=1&navpanes=0&scrollbar=1`}
                      type="application/pdf"
                      className="w-full h-full border-none bg-zinc-950"
                    />
                  </div>
                )}

              </div>
            </div>




          </div>
        </div>
      </div>
    </motion.div>
  );
}

//============================================// Application Entry Point //============================================//
export default function App() {
  const [view, setView] = useState<TrackView>('splash');
  const [hrTab, setHrTab] = useState<HRSubView>('about');
  const [techTab, setTechTab] = useState<TechSubView>('about');
  const [selectedrepositoryFile, setSelectedrepositoryFile] = useState<string | null>(null);


  const slideInAnimation = {
    initial: { opacity: 0, x: 25 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -25 },
    transition: { type: "spring", stiffness: 140, damping: 18 }
  } as const;

  const handleSplashNavigation = (targetView: TrackView, initialTab: HRSubView | TechSubView) => {
    setView(targetView);
    if (targetView === 'hr') setHrTab(initialTab as HRSubView);
    if (targetView === 'tech') setTechTab(initialTab as TechSubView);
  };

  return (
    <div className="relative min-h-screen bg-terminal-bg text-gray-200 selection:bg-terminal selection:text-black antialiased font-mono">

      {/* Background */}
      <div className="fixed inset-0 bg-cover bg-center transition-all duration-1000 ease-out z-0" style={{ backgroundImage: `url(${bgImage})`, filter: view === 'splash' ? 'brightness(0.18) blur(12px)' : 'brightness(0.05) blur(0px)', mixBlendMode: 'luminosity' }} />

      {/* INTERACTIVE CONTAINER FRAMEWORK */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between">

        <AnimatePresence mode="wait">

          {/* SYSTEM SPLASH Page */}
          {view === 'splash' && (
            <SplashView onNavigate={handleSplashNavigation} />
          )}

          {/* HUMAN RESOURCES TRACK */}
          {view === 'hr' && (
            <motion.div key="hr-workspace" className="flex-1 flex flex-col w-full max-w-5xl mx-auto p-4 md:p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <header className="border-b border-terminal-dark pb-4 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-black/40 p-4 rounded-sm">
                <div>
                  <button onClick={() => setView('splash')} className="text-[10px] border border-terminal-dark/60 px-2 py-0.5 rounded text-gray-400 hover:text-terminal hover:border-terminal transition-colors uppercase tracking-wider mb-2 block cursor-pointer">
                    ← Choose Experience
                  </button>
                </div>
                <nav className="flex gap-2">
                  <button onClick={() => setHrTab('about')} className={`px-4 py-1.5 text-xs uppercase tracking-wider border transition-all cursor-pointer ${hrTab === 'about' ? 'border-terminal text-terminal bg-terminal/10' : 'border-transparent text-gray-400 hover:text-white'}`}>
                    About
                  </button>
                  <button onClick={() => setHrTab('resume')} className={`px-4 py-1.5 text-xs uppercase tracking-wider border transition-all cursor-pointer ${hrTab === 'resume' ? 'border-terminal text-terminal bg-terminal/10' : 'border-transparent text-gray-400 hover:text-white'}`}>
                    Resume
                  </button>
                </nav>
              </header>

              <main className="flex-1">
                <AnimatePresence mode="wait">
                  {hrTab === 'about' && <AboutContent key="hr-about" animConfig={slideInAnimation} />}
                  {hrTab === 'resume' && <ResumeContent key="hr-resume" animConfig={slideInAnimation} />}
                </AnimatePresence>
              </main>
            </motion.div>
          )}

          {/* TECHNICAL TRACK */}
          {view === 'tech' && (
            <motion.div key="tech-workspace" className="flex-1 flex flex-col w-full max-w-6xl mx-auto p-4 md:p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <header className="pb-4 mb-2 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-black/40 rounded-sm">
                <div>
                  <button onClick={() => setView('splash')} className="text-[15px] border border-terminal-dark/60 px-2 py-0.5 rounded text-gray-400 hover:text-terminal hover:border-terminal transition-colors uppercase tracking-wider mb-2 block cursor-pointer">
                    ← Choose Experience
                  </button>
                </div>
                <nav className="flex flex-wrap gap-1">
                  {(['about', 'resume', 'studies', 'labs', 'repository', 'motion graphics'] as TechSubView[]).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setTechTab(tab)}
                      className={`px-3 py-1.5 text-xs uppercase tracking-wider border transition-all cursor-pointer ${techTab === tab ? 'border-terminal text-terminal bg-terminal/10' : 'border-transparent text-gray-400 hover:text-white'}`}
                    >
                      {tab === 'labs' ? 'Academic Labs' : tab === 'studies' ? 'Case Studies' : tab}
                    </button>
                  ))}
                </nav>
              </header>

              <main className="flex-1">
                <AnimatePresence mode="wait">
                  {techTab === 'about' && <AboutContent key="tech-about" animConfig={slideInAnimation} />}
                  {techTab === 'resume' && <ResumeContent key="tech-resume" animConfig={slideInAnimation} />}
                  {techTab === 'labs' && <AcademicLabsContent key="tech-labs-panel" animConfig={slideInAnimation} />}
                  {techTab === 'studies' && <CaseStudiesContent key="tech-studies-panel" animConfig={slideInAnimation} />}
                  {techTab === 'repository' && (
                    <RepositoryExplorerContent
                      key="tech-repository-panel"
                      animConfig={slideInAnimation}
                      selectedFile={selectedrepositoryFile}
                      onSelectFile={setSelectedrepositoryFile}
                    />
                  )}
                  {techTab === 'motion graphics' && <VideoReelContent key="tech-motion-graphics-panel" animConfig={slideInAnimation} />}
                </AnimatePresence>
              </main>
            </motion.div>
          )}

        </AnimatePresence>

        {/* FOOTER */}
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
          <div className="w-full h-[1px] bg-terminal-dark/60 mb-4" />

          <footer className="pb-8 flex flex-col sm:flex-row justify-between items-center text-[13px] text-gray-500 gap-2 w-full z-10 font-mono">
            <p className="w-full text-left">
              © {new Date().getFullYear()} Francisco Acosta
            </p>
            <div className="flex gap-4 w-full justify-end">
              <a href="https://www.linkedin.com/in/francisco-acosta-tx/" target="_blank" rel="noreferrer" className="text-terminal/70 hover:text-terminal text-[13px] transition-colors uppercase tracking-wider text-right" >
                LinkedIn
              </a>
            </div>
          </footer>
        </div>

      </div>
    </div>
  );
}