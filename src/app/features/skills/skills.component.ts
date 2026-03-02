import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatIconModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  // ── Security & Defense (progress bar section) ──────────────────────────────
  securitySkills = [
    {
      name: 'Application Security',
      level: 'Expert',
      width: '90%',
      tags: ['OWASP Top 10', 'Secure Code Review', 'XSS/CSRF/IDOR']
    },
    {
      name: 'Vulnerability Management',
      level: 'Advanced',
      width: '85%',
      tags: ['Nessus', 'CVSS Scoring', 'Vulnerability Lifecycle', 'CI/CD Security']
    },
    {
      name: 'Threat Detection & Response',
      level: 'Advanced',
      width: '85%',
      tags: ['SIEM', 'Incident Triage', 'IOC Analysis', 'Alert Correlation', 'MITRE ATT&CK']
    },
    {
      name: 'OSINT & Threat Intelligence',
      level: 'Advanced',
      width: '82%',
      tags: ['Shodan', 'theHarvester', 'SpiderFoot', 'CVE Research', 'CTI Analysis']
    },
    {
      name: 'Network Security',
      level: 'Proficient',
      width: '78%',
      tags: ['TCP/IP', 'Firewall Rules', 'VPNs', 'Wireless Security', 'Traffic Analysis']
    },
    {
      name: 'Cloud Security',
      level: 'Proficient',
      width: '75%',
      tags: ['AWS IAM', 'S3 Security', 'CloudTrail', 'CIS Benchmarks', 'GCP']
    }
  ];

  // ── Security Tools (icon grid section) ─────────────────────────────────────
  securityTools = [
    { icon: 'network_check', name: 'Nmap' },
    { icon: 'router', name: 'Wireshark' },
    { icon: 'bug_report', name: 'Burp Suite' },
    { icon: 'security', name: 'OWASP ZAP' },
    { icon: 'terminal', name: 'Kali Linux' },
    { icon: 'analytics', name: 'Splunk' },
    { icon: 'policy', name: 'Snort' },
    { icon: 'vpn_key', name: 'OpenSSL' },
    { icon: 'storage', name: 'Metasploit' },
    { icon: 'search', name: 'Elastic Stack' },
    { icon: 'manage_search', name: 'Shodan' },
    { icon: 'travel_explore', name: 'SpiderFoot' },
    { icon: 'find_in_page', name: 'theHarvester' },
    { icon: 'shield', name: 'Nessus' },
    { icon: 'supervised_user_circle', name: 'Entra ID' },
    { icon: 'lock', name: 'MFA Admin' },
  ];

  // ── Cloud & DevSecOps (logo grid section) ──────────────────────────────────
  cloudTools = [
    { src: 'https://cdn.simpleicons.org/amazonaws/FF9900', alt: 'AWS', name: 'AWS' },
    { src: 'https://cdn.simpleicons.org/googlecloud/4285F4', alt: 'GCP', name: 'GCP' },
    { src: 'https://cdn.simpleicons.org/docker/2496ED', alt: 'Docker', name: 'Docker' },
    { src: 'https://cdn.simpleicons.org/kubernetes/326CE5', alt: 'Kubernetes', name: 'Kubernetes' },
    { src: 'https://cdn.simpleicons.org/git/F05032', alt: 'Git', name: 'Git' },
    { src: 'https://cdn.simpleicons.org/github/FFFFFF', alt: 'GitHub', name: 'GitHub' },
    { src: 'https://cdn.simpleicons.org/linux/FCC624', alt: 'Linux', name: 'Linux' },
    { src: 'https://cdn.simpleicons.org/gnubash/4EAA25', alt: 'Bash', name: 'Bash' },
    { src: 'https://cdn.simpleicons.org/powershell/5391FE', alt: 'PowerShell', name: 'PowerShell' },
    { src: 'https://cdn.simpleicons.org/jira/0052CC', alt: 'Jira', name: 'Jira' },
    { src: 'https://cdn.simpleicons.org/servicenow/00BCF2', alt: 'ServiceNow', name: 'ServiceNow' },
    { src: 'https://cdn.simpleicons.org/confluence/172B4D', alt: 'Confluence', name: 'Confluence' },
  ];

  // ── Full-Stack Development (logo grid section) ─────────────────────────────
  devTools = [
    { src: 'https://cdn.simpleicons.org/angular/DD0031', alt: 'Angular', name: 'Angular' },
    { src: 'https://cdn.simpleicons.org/typescript/3178C6', alt: 'TypeScript', name: 'TypeScript' },
    { src: 'https://cdn.simpleicons.org/python/3776AB', alt: 'Python', name: 'Python' },
    { src: 'https://cdn.simpleicons.org/javascript/F7DF1E', alt: 'JavaScript', name: 'JavaScript' },
    { src: 'https://cdn.simpleicons.org/openjdk/FFFFFF', alt: 'Java', name: 'Java' },
    { src: 'https://cdn.simpleicons.org/cplusplus/00599C', alt: 'C++', name: 'C++' },
    { src: 'https://cdn.simpleicons.org/html5/E34F26', alt: 'HTML5', name: 'HTML5' },
    { src: 'https://cdn.simpleicons.org/css3/06B6D4', alt: 'CSS3', name: 'CSS3' },
  ];

  // ── Certifications ─────────────────────────────────────────────────────────
  certifications = [
    {
      icon: 'verified',
      title: 'Google Associate Cloud Engineer',
      subtitle: 'Google Cloud Platform',
      highlight: false
    },
    {
      icon: 'school',
      title: 'IBM IT Fundamentals for Cybersecurity',
      subtitle: 'Specialization',
      highlight: false
    },
    {
      icon: 'code',
      title: 'Microsoft GitHub Copilot',
      subtitle: 'AI-Powered Development',
      highlight: false
    },
    {
      icon: 'emoji_events',
      title: 'Top 5% on TryHackMe',
      subtitle: 'Active Cybersecurity Practitioner',
      highlight: true
    },
    {
      icon: 'military_tech',
      title: 'Security+ (In Progress)',
      subtitle: 'CompTIA — June 2025',
      highlight: false
    },
    {
      icon: 'workspace_premium',
      title: 'ISC2 CC (In Progress)',
      subtitle: 'Certified in Cybersecurity — April 2025',
      highlight: false
    }
  ];

  // ── Frameworks & Standards (pills section) ─────────────────────────────────
  frameworks = [
    'NIST CSF 2.0',
    'NIST SP 800-53',
    'MITRE ATT&CK',
    'OWASP Top 10',
    'ISO 27001',
    'PCI-DSS',
    'SOC 2',
    'HIPAA',
    'GDPR',
    'DHS/CISA Critical Infrastructure',
    'CIS Controls',
    'STRIDE Threat Modeling',
  ];
}