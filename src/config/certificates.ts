import type { Certificate } from '@/types/certificate';

interface CertificatesConfig {
  sectionLabel: string;
  title: string;
  description: string;
  detailLabel: string;
  certificates: Certificate[];
}

export const certificatesConfig: CertificatesConfig = {
  sectionLabel: 'Certificates',
  title: 'Selected Certificates',
  description: 'Proof of learning, practice, and technical growth.',
  detailLabel: 'Details',
  certificates: [
    {
      slug: 'code-generation-and-optimization-using-ibm-granite',
      title: 'code generation and optimization using ibm granite',
      issuer: 'IBM SkillsBuild',
      description:
        'Technical knowledge and practical skills in using IBM Granite for code generation, AI code optimization, and the application of prompting techniques and structured workflows in programming.',
      detailDescription:
        'This credential earner has the technical knowledge and practical skills to use IBM Granite models for code generation and programming tasks, and to optimize AI-generated code. The individual can identify the features of IBM Granite models and describe how they assist with programming tasks. The earner can apply prompting techniques to optimize AI-generated code and implement a structured workflow for reviewing and optimizing AI-generated code.',
      thumbnail: '/assets/Certificate/code-generation-and-optimization-using-ibm-granite.png',
      issuedAt: '2025',
      url: 'https://www.credly.com/badges/963681b7-ef92-4217-95b3-0b471b95a19c/public_url',
      skills: ['AI Prompting Techniques', 'Analytical Thinking', 'Code Generation', 'Code Optimization', 'Generative AI', 'IBM Granite', 'Large Language Models', 'Prblem Solving', '[PWID-B0979900]'],
      features: ['IBM Granite Models', 'Code Generation', 'AI Code Optimization', 'Prompting Techniques'],
    },
    {
      slug: 'Memulai-Dasar-pemrograman-untuk-menjadi-pengembang-software',
      title: 'Memulai Dasar pemrograman untuk menjadi pengembang software',
      issuer: 'Dicoding Indonesia',
      description:
        'Foundational programming course for beginners aiming to become software developers using HTML, CSS, and JavaScript based on KBJI: 2512.03 occupational standards.',
      detailDescription:
        'This certificate covers the ability to analyze application requirements, plan software modifications, write basic HTML/CSS/JavaScript code, and professionally document software development processes.',
      thumbnail: '/assets/Certificate/memulai-dasar-pemrograman-untuk-menjadi-pengembang-software.png',
      issuedAt: '2025',
      url: 'https://www.dicoding.com/certificates/KEXL2GD50ZG2',
      skills: ['HTML5', 'CSS3', 'JavaScript ES6', 'Requirement Analysis', 'Flowchart Design', 'Code Documentation', 'Software Development', 'problem Solving'],
      features: ['Application Requirement Analysis', 'Planning & Flowchart Design', 'Software Application Modification', 'Programming Documentation'],
    },
    {
      slug: 'Pengenalan-Ke-logika-pemograman-(Programming-Logic-101)',
      title: 'Pengenalan Ke logika pemograman (Programing Logic 101)',
      issuer: 'Dicoding Indonesia',
      description:
        'Introductory course on programming logic and algorithms for beginners, aligned with industry standards for Software Developer roles.',
      detailDescription:
        'This certificate demonstrates understanding of foundational programming logic, including logic gates (AND, OR, NOT, NAND, NOR, XOR, XNOR), computational thinking methods such as decomposition, pattern recognition, abstraction, and algorithm writing applied to real-world problem solving.',
      thumbnail: '/assets/Certificate/pengenalan-ke-logika-pemograman-(programming logic 101).png',
      issuedAt: '2025',
      url: 'https://www.dicoding.com/certificates/EYX4K2N45PDL',
      skills: ['Programming Logic', 'Algorithm Design', 'Logic Gates', 'Computational Thinking', 'Decomposition', 'Pattern Recognition', 'Abstraction', 'problem Solving'],
      features: ['Logic & Algorithm Fundamentals', 'Logic Gates (AND, OR, NOT, XOR)', 'Computational Thinking Methods', 'Real-world Case Application'],
    },
  ],
};
