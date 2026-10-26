window.PORTFOLIO = {
  name: 'Manish Rana',
  linkedin: 'https://www.linkedin.com/in/manish-rana-112163347/',
  github: 'https://github.com/MrRana-afk',
  projects: [
    {
      id: 'hybrid-ids', no: '01', title: 'Hybrid intrusion detection', category: 'Detection', year: 'Coursework', kind: 'Python / Network analysis', visual: 'signal', featured: true,
      summary: 'Two ways to spot a threat. One Python system built to understand what suspicious network traffic looks like.',
      tags: ['Python', 'Signature detection', 'Anomaly detection'], source: 'https://github.com/MrRana-afk/Programming-CW2-Hybrid-IDS',
      question: 'What does an attack look like from the other side of the network?',
      overview: 'A coursework intrusion detection system combining signature-based and anomaly-based approaches to analyze live network traffic. Building the detector helped connect offensive security concepts with the work of identifying and investigating suspicious activity.',
      approach: ['Combined signature-based and anomaly-based detection in Python.', 'Built a detection interface and a separate interface for controlled lab testing.', 'Used network traffic as the link between testing a weakness and understanding its defensive visibility.'],
      takeaway: 'Knowing how a weakness is detected matters as much as knowing how it is found. This project pushed me to think about the evidence an attack leaves behind.',
      scope: 'Academic project · Controlled testing'
    },
    {
      id: 'oipa', no: '02', title: 'OIPA: a clearer first look', category: 'Offensive', year: 'Coursework', kind: 'Python / OSINT', visual: 'radar', featured: true,
      summary: 'An OSINT and port analysis tool that brings passive reconnaissance and authorized scanning into a structured workflow.',
      tags: ['Python', 'OSINT', 'Reconnaissance'], source: 'https://github.com/MrRana-afk/Programming-CW1-OIPA',
      question: 'How can reconnaissance be more organized, repeatable, and intentional?',
      overview: 'OIPA is an OSINT and Port Analysis Tool built to connect open-source intelligence gathering with active port analysis. It is a practical exploration of the early stages of an authorized security assessment.',
      approach: ['Automated passive reconnaissance and open-source information gathering.', 'Integrated port analysis for authorized targets.', 'Organized the work around a repeatable assessment workflow rather than isolated tool commands.'],
      takeaway: 'Good reconnaissance starts with a clear question and an agreed scope. Automation is most useful when it makes that process easier to understand and repeat.',
      scope: 'Academic project · Authorized targets'
    },
    {
      id: 'enterprise-network', no: '03', title: 'A network built to hold', category: 'Networks', year: 'Coursework', kind: 'Cisco / Network security', visual: 'network', featured: true,
      summary: 'A three-tier enterprise simulation connecting a head office and two branches, with security and availability considered together.',
      tags: ['Cisco Packet Tracer', 'OSPF', 'HSRP', 'VLANs'], source: 'https://github.com/MrRana-afk/Cisco-Packet-Tracer-Networking-CW1',
      question: 'How do routing, access, and resilience shape the security of a network?',
      overview: 'A simulated enterprise topology in Cisco Packet Tracer spanning a head office and two branches. The coursework brought routing, segmentation, redundancy, and access control into one environment.',
      approach: ['Designed a three-tier topology and segmented traffic with VLANs and access-control lists.', 'Worked with OSPF routing, HSRP redundancy, and NAT.', 'Explored site-to-site IPsec VPN concepts and network hardening in a simulated environment.'],
      takeaway: 'A network is more than connected devices. Each configuration choice changes availability, who can reach what, and the routes a potential attacker might take.',
      scope: 'Academic project · Simulated enterprise'
    },
    {
      id: 'cipherlab-report', no: '04', title: 'Find it. Prove it. Explain it.', category: 'Offensive', year: 'Coursework', kind: 'Web security / Reporting', visual: 'report',
      summary: 'A web penetration test report that connects reproducible findings with impact, severity, and practical remediation.',
      tags: ['Burp Suite', 'OWASP', 'Technical writing'], source: null,
      question: 'What makes a security finding useful to the person who has to fix it?',
      overview: 'An academic penetration test report for a simulated CipherLab training platform. The work focused on communicating evidence and consequences clearly, alongside the technical assessment itself.',
      approach: ['Reproduced findings safely within a simulated assessment environment.', 'Documented evidence, impact, and severity for each finding.', 'Wrote remediation guidance for technical and non-technical readers.'],
      takeaway: 'A finding is only the beginning. Clear evidence and a realistic fix are what allow someone else to understand the risk and act on it.',
      scope: 'Academic report · Simulated platform', availability: 'The report is not published online.'
    },
    {
      id: 'forensics-investigation', no: '05', title: 'Follow the evidence', category: 'Forensics', year: 'Coursework', kind: 'Digital forensics / Investigation', visual: 'forensic',
      summary: 'An investigation report spanning disk, mobile, email, network, and memory evidence. Facts first, conclusions second.',
      tags: ['Autopsy', 'Volatility', 'FTK'], source: null,
      question: 'How do separate pieces of digital evidence become a defensible account of an incident?',
      overview: 'A digital forensics coursework investigation with a written report, investigation records, and original graphics. The work brought multiple evidence types into a documented investigation process.',
      approach: ['Examined disk, mobile, email, network, and memory evidence.', 'Worked with tools including Autopsy, Volatility, and FTK.', 'Kept records and linked conclusions to supporting evidence in the investigation report.'],
      takeaway: 'Forensics rewards patience and accuracy. A plausible story is not enough; the process and the evidence need to support the conclusion.',
      scope: 'Academic report · Evidence analysis', availability: 'The report is not published online.'
    },
    {
      id: 'netanix-ctf', no: '06', title: 'Build the puzzle, too', category: 'CTF', year: 'Student project', kind: 'Web / Cryptography', visual: 'maze',
      summary: 'Browser-based CTF challenges with staged puzzles and flag validation, designed to make people think beyond the obvious route.',
      tags: ['CTF design', 'Web security', 'Cryptography'], source: null,
      question: 'What changes when you design a challenge instead of solving one?',
      overview: 'Self-contained NETANIX CTF challenges using staged web and cryptography puzzles. This work sits alongside designing and running challenges for the Cybersecurity Club of Softwarica.',
      approach: ['Built staged browser-based puzzles and flag validation.', 'Considered fair clues and unintended solution paths.', 'Used challenge design to think through how different people interpret the same system.'],
      takeaway: 'A good puzzle needs more than one clever idea. It needs careful boundaries, readable clues, and an understanding of how people actually explore.',
      scope: 'Student project · Challenge design', availability: 'Public source is not linked for this project.'
    },
    {
      id: 'process-security', no: '07', title: 'Under the process', category: 'Systems', year: 'Coursework', kind: 'C / Operating systems', visual: 'memory',
      summary: 'Systems programming coursework exploring the relationship between processes, memory protection, and operating system security.',
      tags: ['C', 'Process management', 'OS security'], source: 'https://github.com/MrRana-afk/OsCoursework1',
      question: 'Which boundaries keep one process from becoming another process’s problem?',
      overview: 'A C systems programming project exploring process management and operating system security in a controlled lab environment.',
      approach: ['Worked with process management in C.', 'Explored process isolation and memory protection concepts.', 'Studied privilege boundaries as part of operating system security.'],
      takeaway: 'Understanding what the operating system is doing makes security tools and vulnerabilities easier to reason about at a deeper level.',
      scope: 'Academic project · Controlled lab'
    },
    {
      id: 'secure-web', no: '08', title: 'Security belongs in the build', category: 'Web', year: 'Coursework', kind: 'JavaScript / Secure development', visual: 'web',
      summary: 'A JavaScript web application exploring input validation, session management, CSRF protection, and output encoding.',
      tags: ['JavaScript', 'Secure development', 'OWASP'], source: 'https://github.com/MrRana-afk/webcw1project',
      question: 'What happens when common web risks are considered while the application is being built?',
      overview: 'Web development coursework applying security practices to a JavaScript application. The project connects common OWASP risks with the development decisions intended to address them.',
      approach: ['Applied input validation and output encoding.', 'Worked with session management and CSRF protection.', 'Considered common web application risks alongside application behavior.'],
      takeaway: 'Secure development and security testing belong in the same conversation. Building an application helps make remediation advice more practical.',
      scope: 'Academic project · Secure development'
    }
  ],
  timeline: [
    {date:'May 2026', title:'30th of 455 teams', org:'Hackastra CTF Qualifiers · Team Neta', description:'An official online qualifying round organized by Ethical HCK / Herald College Kathmandu. A lesson in collaboration, careful notes, and testing assumptions under pressure.', type:'Competition'},
    {date:'Apr 2026 · 2026/27 session', title:'Marketing Team Member', org:'Cybersecurity Club of Softwarica', description:'Appointed to the club’s marketing team, contributing to a student cybersecurity community through communication and collaboration.', type:'Community'},
    {date:'2026', title:'DataForGood Nepal', org:'Softwarica College × Institute of Analytics', description:'Participated in the “Analytics for Society” hackathon and received a certificate of participation.', type:'Hackathon'},
    {date:'Jan 2026', title:'DFIR Challenge', org:'Team NIX-FORENSICX', description:'Participated in the IT Club of Softwarica challenge under the theme “Secure Today, Protect Tomorrow.”', type:'Investigation'},
    {date:'2024 – present', title:'CTF challenge design', org:'Cybersecurity Club of Softwarica', description:'Design and run staged web and cryptography challenges, exploring fair clues and unintended solution paths.', type:'Building'},
    {date:'Jul – Aug 2024', title:'Tech X volunteer', org:'Softwarica College of IT & E-Commerce', description:'Volunteered at an event focused on robotics, AI, and cybersecurity. Recognized for contribution and dedication.', type:'Volunteering'}
  ]
};
