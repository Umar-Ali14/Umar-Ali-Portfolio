// All personal content lives here so it can be updated without touching layout code.
// Source of truth: Umar_Ali_CV.pdf (public/resume.pdf).
import ibmCloudCertificate from '@/assets/certificates/ibm-cloud-certificate.jpg';
import adbiAiCertificate from '@/assets/certificates/adbi-ai-social-impact-certificate.jpg';
import hpAiCertificate from '@/assets/certificates/hp-ai-business-certificate.jpg';
import awsZeroToHeroCertificate from '@/assets/certificates/aws-zero-to-hero-certificate.png';

export const profile = {
  name: 'Umar Ali',
  initials: 'UA',
  role: 'Cloud & DevOps Engineer',
  headline: 'AWS Cloud Engineer',
  email: 'mianumarali7221@gmail.com',
  location: 'Lahore, Pakistan',
  github: 'https://github.com/Umar-Ali14',
  linkedin: 'https://www.linkedin.com/in/umar-ali-043b13274/',
  resume: '/resume.pdf',
  siteRepo: 'https://github.com/Umar-Ali14/umar-cloud-folio',
};

export const heroStack = ['AWS', 'Terraform', 'GitHub Actions', 'Networking', 'Security', 'Python', 'Linux'];

export const services = [
  {
    title: 'AWS Infrastructure',
    description: 'VPCs, EC2, S3, CloudFront and Route 53 set up with security and cost in mind.',
  },
  {
    title: 'Infrastructure as Code',
    description: 'Reusable Terraform modules with separate Dev, Staging and Production environments.',
  },
  {
    title: 'CI/CD & Automation',
    description: 'GitHub Actions pipelines using IAM OIDC, plus Python (boto3) and Lambda automation.',
  },
];

export const education = [
  {
    degree: 'BBIT',
    full: 'Bachelor of Business & Information Technology',
    institution: 'University of the Punjab, Quaid-e-Azam Campus, Lahore',
    period: 'Sep 2024 — Jun 2028',
  },
];

export const skillGroups = [
  {
    title: 'AWS',
    description: 'Services I have used in hands-on projects and labs.',
    skills: ['EC2', 'VPC', 'S3', 'IAM (Roles, OIDC)', 'Lambda', 'CloudWatch', 'CloudFront', 'Route 53', 'DynamoDB'],
  },
  {
    title: 'Infrastructure as Code',
    description: 'Repeatable, version-controlled infrastructure.',
    skills: ['Terraform', 'Reusable Modules', 'Multi-Environment Layout', 'Tagging', 'Version Pinning'],
  },
  {
    title: 'CI/CD & Version Control',
    description: 'Automated delivery without manual uploads or stored keys.',
    skills: ['GitHub Actions', 'AWS CLI', 'Automated S3 Deployments', 'Git', 'GitHub'],
  },
  {
    title: 'Linux & Scripting',
    description: 'Day-to-day operations and automation.',
    skills: ['Linux CLI', 'File Permissions', 'Process Management', 'Bash', 'Python (boto3)'],
  },
];

export const learning = ['Docker & Containers', 'AWS Systems Manager', 'AWS Cloud Practitioner', 'Kubernetes'];

export type Project = {
  category: string;
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  flow: string[]; // simple architecture flow shown on the card header
  repo?: string;
  demo?: string;
  status?: 'In Progress';
};

export const projects: Project[] = [
  {
    category: 'Infrastructure as Code',
    title: 'Multi-Environment AWS Infrastructure',
    description:
      'Reusable Terraform modules (network, security, compute) that build separate Dev, Staging and Production environments, each with its own VPC, settings and state.',
    highlights: [
      'VPC with public/private subnets, IGW and route tables; NAT Gateway left out to keep costs low',
      'Backend reachable only from the frontend security group; no SSH, shell access via Systems Manager',
      'Amazon Linux 2023 with IMDSv2 enforced, encrypted gp3 volumes, tagged resources, pinned providers',
    ],
    tags: ['Terraform', 'VPC', 'EC2', 'Security Groups'],
    flow: ['Dev', 'Staging', 'Production'],
    repo: 'https://github.com/Umar-Ali14/multi-environment-aws-infrastructure',
    status: 'In Progress',
  },
  {
    category: 'CI/CD',
    title: 'CI/CD Pipeline for Automated S3 Deployment',
    description:
      'A GitHub Actions workflow that syncs the site to S3 on every push to main, so there are no manual uploads.',
    highlights: [
      'Uses IAM OIDC federation instead of stored access keys',
      'Workflow assumes a scoped IAM role with short-lived credentials',
    ],
    tags: ['GitHub Actions', 'IAM OIDC', 'S3'],
    flow: ['git push', 'OIDC Role', 'S3'],
    repo: 'https://github.com/Umar-Ali14/cicd-cloud-project',
  },
  {
    category: 'Serverless',
    title: 'AWS Cost Optimization System',
    description:
      'An event-driven system that flags idle EC2 instances: a CloudWatch alarm (CPU below 5%) triggers a Python Lambda that classifies each instance.',
    highlights: [
      'Lambda (boto3) labels instances IDLE, NORMAL or HIGH LOAD and suggests an action',
      'Every result saved as a timestamped JSON file in S3 to keep a decision history',
      'Tested with simulated CPU events',
    ],
    tags: ['Lambda', 'CloudWatch', 'EC2', 'S3', 'Python'],
    flow: ['CloudWatch', 'Lambda', 'S3 Log'],
    repo: 'https://github.com/Umar-Ali14/aws-cost-optimizer-system',
  },
  {
    category: 'Content Delivery',
    title: 'Static Website with Global CDN',
    description:
      'A static site hosted on S3 behind CloudFront with HTTPS redirect and caching, on a custom domain set up in Route 53.',
    highlights: [
      'Taken down after testing to avoid AWS charges',
      'Screenshots and demo videos are in the repo',
    ],
    tags: ['S3', 'CloudFront', 'Route 53'],
    flow: ['Route 53', 'CloudFront', 'S3'],
    repo: 'https://github.com/Umar-Ali14/s3-cloudfront-static-website',
  },
];

export const journey = [
  {
    label: 'Projects',
    period: '2025 — Present',
    title: 'Hands-on Cloud & DevOps Projects',
    org: 'Independent',
    description:
      'Building AWS projects end to end: Terraform environments, OIDC-based CI/CD, serverless cost monitoring and CDN hosting, plus 10+ hands-on AWS labs.',
    tags: ['AWS', 'Terraform', 'GitHub Actions'],
  },
  {
    label: 'Community',
    period: 'Sep 2026 — Present',
    title: 'General Body Member',
    org: 'AWS Student Builder Group, University of the Punjab',
    description:
      'Spreading awareness of AWS among IBIT students and helping with registrations for AWS Student Community Day Lahore 2026.',
    tags: ['AWS', 'Community', 'Events'],
  },
  {
    label: 'Leadership',
    period: 'Oct 2026 — Present',
    title: 'Senior Member, Management Team',
    org: 'IBIT Sports Society',
    description:
      'Planning and coordinating university sports events, and captaining the IBIT University football team.',
    tags: ['Leadership', 'Event Planning', 'Teamwork'],
  },
  {
    label: 'Volunteering',
    period: '2025',
    title: 'Organizer, Blood Donation Campaign',
    org: 'BDS-IBIT Society',
    description:
      'Helped run the campaign and encouraged students to donate. Received a Certificate of Appreciation from Shaukat Khanum Memorial Cancer Hospital.',
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
