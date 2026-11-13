// All personal content lives here so it can be updated without touching layout code.
// Source of truth: Umar_Ali_CV.pdf (public/resume.pdf).
import ibmCloudCertificate from '@/assets/certificates/ibm-cloud-certificate.jpg';
import adbiAiCertificate from '@/assets/certificates/adbi-ai-social-impact-certificate.jpg';
import hpAiCertificate from '@/assets/certificates/hp-ai-business-certificate.jpg';
import awsZeroToHeroCertificate from '@/assets/certificates/aws-zero-to-hero-certificate.png';
import multiEnvArchitecture from '@/assets/architecture/multi-environment-infrastructure.svg';
import cicdArchitecture from '@/assets/architecture/cicd-pipeline.webp';
import costOptimizerArchitecture from '@/assets/architecture/aws-cost-optimizer.webp';
import staticSiteArchitecture from '@/assets/architecture/static-website-cdn.svg';

export const profile = {
  name: 'Umar Ali',
  initials: 'UA',
  role: 'Cloud & DevOps Engineer',
  headline: 'AWS Cloud Engineer',
  email: 'contact@umarali.dev',
  location: 'Lahore, Pakistan',
  // Business WhatsApp: number is international format without "+" or the local leading 0 (used in wa.me links)
  whatsapp: { number: '923402355989', display: '+92 340 2355989' },
  github: 'https://github.com/Umar-Ali14',
  linkedin: 'https://www.linkedin.com/in/umar-ali-043b13274/',
  linkedinCertifications: 'https://www.linkedin.com/in/umar-ali-043b13274/details/certifications/',
  fiverr: 'https://www.fiverr.com/umarali_10',
  upwork: 'https://www.upwork.com/freelancers/~011161bbdb5bf75446',
  resume: '/resume.pdf',
  siteRepo: 'https://github.com/Umar-Ali14/umar-cloud-folio',
};

export const heroStack = ['AWS', 'Terraform', 'GitHub Actions', 'Networking', 'Security', 'Python', 'Linux'];

export const aboutIntro = [
  "I'm a BBIT student at the University of the Punjab, passionate about cloud engineering and building practical solutions on AWS. I enjoy designing cloud infrastructure, automating deployments, and exploring ways to make systems more secure, reliable, and cost-efficient.",
  "Through hands-on projects, I'm developing my skills in AWS, Terraform, CI/CD, and cloud automation while continuously expanding my engineering knowledge.",
];

export const services = [
  {
    title: 'AWS Cloud Infrastructure',
    description:
      'Designing and deploying AWS infrastructure using services like VPC, EC2, S3, CloudFront, and Route 53, with a focus on security and cost optimization.',
  },
  {
    title: 'Infrastructure as Code',
    description:
      'Building reusable Terraform modules and managing separate Development, Staging, and Production environments.',
  },
  {
    title: 'CI/CD & Cloud Automation',
    description:
      'Implementing GitHub Actions deployment pipelines using IAM OIDC, alongside Python (boto3) and AWS Lambda for automation.',
  },
];

export const education = [
  {
    degree: 'BBIT – Bachelor of Business & Information Technology',
    institution: 'University of the Punjab, Quaid-e-Azam Campus, Lahore.',
    period: 'September 2024 – June 2028',
  },
];

export const skillGroups = [
  {
    title: 'AWS',
    description: "Services I've used in hands-on projects and labs.",
    skills: [
      'EC2',
      'VPC',
      'S3',
      'IAM Roles & GitHub Actions OIDC',
      'Lambda',
      'CloudWatch',
      'CloudFront',
      'Route 53',
      'DynamoDB',
      'Bedrock',
    ],
  },
  {
    title: 'Infrastructure as Code',
    description: 'Repeatable, version-controlled infrastructure.',
    skills: [
      'Terraform',
      'Reusable Modules',
      'Multi-Environment Layout',
      'Terraform Variables & Outputs',
      'Tagging',
      'Version Pinning',
    ],
  },
  {
    title: 'CI/CD & Version Control',
    description: 'Automated delivery without manual uploads or long-lived access keys.',
    skills: ['GitHub Actions', 'AWS CLI', 'AWS S3 Deployment Automation', 'Git', 'GitHub'],
  },
  {
    title: 'Linux & Scripting',
    description: 'Day-to-day system operations and automation.',
    skills: [
      'Linux CLI',
      'File Permissions',
      'Process Management',
      'Package Management',
      'SSH',
      'Bash & Shell Scripting',
      'Python (boto3)',
    ],
  },
];

export const learning = [
  'Docker & Containers',
  'AWS Systems Manager',
  'Kubernetes',
  'AWS Agentic AI',
  'AI Cloud Engineering',
];

export type Project = {
  category: string;
  title: string;
  summary: string; // 2–3 short lines shown on the card (purpose + value)
  description: string; // full description, shown in the details popup
  highlights: string[]; // technical details, shown in the details popup
  tags: string[];
  flow: string[]; // simple architecture flow shown on the card header
  repo?: string;
  demo?: string;
  status?: 'In Progress';
  impact?: string; // "Business Impact" note, shown in the details popup
  architecture?: string; // diagram opened by the "View Architecture" button
};

export const projects: Project[] = [
  {
    category: 'Infrastructure as Code',
    title: 'Multi-Environment AWS Infrastructure',
    summary:
      'Terraform modules that deploy isolated Dev, Staging and Production AWS environments, keeping infrastructure consistent.',
    description:
      'Reusable Terraform modules (network, security, compute) that build separate Dev, Staging and Production environments, each with its own VPC, settings and state.',
    highlights: [
      'VPC with public/private subnets, IGW and route tables; NAT Gateway left out to keep costs low',
      'Backend reachable only from the frontend security group; no SSH, shell access via Systems Manager',
      'Amazon Linux 2023 with IMDSv2 enforced, encrypted gp3 volumes, tagged resources, pinned providers',
    ],
    impact:
      'Promotes consistent infrastructure across environments, reduces configuration drift, and simplifies infrastructure management.',
    tags: ['Terraform', 'VPC', 'EC2', 'Security Groups'],
    flow: ['Dev', 'Staging', 'Production'],
    repo: 'https://github.com/Umar-Ali14/multi-environment-aws-infrastructure',
    architecture: multiEnvArchitecture,
    status: 'In Progress',
  },
  {
    category: 'CI/CD',
    title: 'CI/CD Pipeline for Automated S3 Deployment',
    summary:
      'GitHub Actions pipeline that deploys to S3 on every push using IAM OIDC, with no stored keys and no manual uploads.',
    description:
      'A GitHub Actions workflow that syncs the site to S3 on every push to main, so there are no manual uploads.',
    highlights: [
      'Uses IAM OIDC federation instead of stored access keys',
      'Workflow assumes a scoped IAM role with short-lived credentials',
    ],
    impact:
      'Reduces manual deployment effort, minimizes human errors, and enables faster, repeatable website updates.',
    tags: ['GitHub Actions', 'IAM OIDC', 'S3'],
    flow: ['git push', 'OIDC Role', 'S3'],
    repo: 'https://github.com/Umar-Ali14/cicd-cloud-project',
    architecture: cicdArchitecture,
  },
  {
    category: 'Serverless',
    title: 'AWS Cost Optimization System',
    summary:
      'Event-driven system that flags idle EC2 instances with CloudWatch and a Python Lambda, logging decisions to S3.',
    description:
      'An event-driven system that flags idle EC2 instances: a CloudWatch alarm (CPU below 5%) triggers a Python Lambda that classifies each instance.',
    highlights: [
      'Lambda (boto3) labels instances IDLE, NORMAL or HIGH LOAD and suggests an action',
      'Every result saved as a timestamped JSON file in S3 to keep a decision history',
      'Tested with simulated CPU events',
    ],
    impact:
      'Improves visibility into EC2 utilization, helping teams identify potentially wasted resources and make informed cost-management decisions.',
    tags: ['Lambda', 'CloudWatch', 'EC2', 'S3', 'Python'],
    flow: ['CloudWatch', 'Lambda', 'S3 Log'],
    repo: 'https://github.com/Umar-Ali14/aws-cost-optimizer-system',
    architecture: costOptimizerArchitecture,
  },
  {
    category: 'Content Delivery',
    title: 'Static Website with Global CDN',
    summary:
      'Static site served worldwide from S3 via CloudFront, with HTTPS, edge caching and a custom Route 53 domain.',
    description:
      'A static site hosted on S3 behind CloudFront with HTTPS redirect and caching, on a custom domain set up in Route 53.',
    highlights: [
      'Taken down after testing to avoid AWS charges',
      'Screenshots and demo videos are in the repo',
    ],
    impact:
      'Enables reliable global content delivery through CloudFront, with HTTPS and caching to improve website accessibility and performance.',
    tags: ['S3', 'CloudFront', 'Route 53'],
    flow: ['Route 53', 'CloudFront', 'S3'],
    repo: 'https://github.com/Umar-Ali14/s3-cloudfront-static-website',
    architecture: staticSiteArchitecture,
  },
];

export type JourneyEntry = {
  label: string;
  period: string;
  title: string;
  org: string;
  description: string;
  achievements?: string[]; // highlighted as gold badges on the card
  tags: string[];
};

export const journey: JourneyEntry[] = [
  {
    label: 'Projects',
    period: '2025 — Present',
    title: 'Hands-on Cloud & DevOps Projects',
    org: 'Independent',
    description:
      'Building AWS projects end to end: Terraform environments, OIDC-based CI/CD, serverless cost monitoring and CDN hosting, plus 10+ hands-on AWS labs.',
    achievements: ['10+ AWS Labs'],
    tags: ['AWS', 'Terraform', 'GitHub Actions'],
  },
  {
    label: 'Community',
    period: 'Sep 2026 — Present',
    title: 'General Body Member',
    org: 'AWS Student Builder Group, University of the Punjab',
    description:
      'Spreading awareness of AWS among IBIT students and helping with registrations for AWS Student Community Day Lahore 2026.',
    achievements: ['AWS Student Community'],
    tags: ['AWS', 'Community', 'Events'],
  },
  {
    label: 'Leadership',
    period: 'Oct 2026 — Present',
    title: 'Senior Member, Management Team',
    org: 'IBIT Sports Society',
    description:
      'Planning and coordinating university sports events, and captaining the IBIT University football team.',
    achievements: ['Team Captain'],
    tags: ['Leadership', 'Event Planning', 'Teamwork'],
  },
  {
    label: 'Volunteering',
    period: '2025',
    title: 'Organizer, Blood Donation Campaign',
    org: 'BDS-IBIT Society',
    description:
      'Helped run the campaign and encouraged students to donate. Received a Certificate of Appreciation from Shaukat Khanum Memorial Cancer Hospital.',
    achievements: ['Certificate of Appreciation'],
    tags: ['Organizing', 'Outreach'],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date?: string;
  image?: string;
  link?: string;
};

export const certifications: Certification[] = [
  { name: 'Becoming a Cloud Practitioner, Parts 1 & 2', issuer: 'AWS Skills Centers · AWS Training and Certification', date: 'Sep 2026' },
  { name: 'Getting Started with AWS Cloud Essentials', issuer: 'AWS Foundations · AWS Training and Certification', date: 'Aug 2026' },
  {
    name: 'Learn Linux',
    issuer: 'Boot.dev',
    date: 'Jul 2026',
    link: 'https://www.boot.dev/certificates/d2c0a573-ae95-47ab-9d16-3c8dfd7568bd',
  },
  {
    name: 'AWS Networking Basics',
    issuer: 'Coursera',
    link: 'https://www.linkedin.com/posts/umar-ali-043b13274_aws-networking-basics-v010100s-activity-7375265087646846976-Xp5M',
  },
  { name: 'AWS Zero to Hero', issuer: 'TrainWithShubham', image: awsZeroToHeroCertificate },
  { name: 'Introduction to Cloud Computing', issuer: 'IBM SkillsBuild', date: 'Jul 2025', image: ibmCloudCertificate },
  { name: 'AI for Business Professionals', issuer: 'HP LIFE', image: hpAiCertificate },
  { name: 'Artificial Intelligence for Social Impact', issuer: 'ADB Institute', image: adbiAiCertificate },
];
