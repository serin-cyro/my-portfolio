// ==== skills.component.ts ====
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatTabsModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories = [
    {
      category: 'Languages',
      skills: [
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', link: 'https://www.typescriptlang.org/' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', link: 'https://www.python.org/' },
        { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg', link: 'https://dart.dev/' }
      ]
    },
    {
      category: 'Frameworks & Libraries',
      skills: [
        { name: 'Angular', icon: 'favicon.ico', link: 'https://angular.io/' },
        { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', link: 'https://flutter.dev/' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', link: 'https://tailwindcss.com/' }
      ]
    },
    {
      category: 'DevOps & Cloud',
      skills: [
        { name: 'GitHub Actions', icon: 'https://github.com/fluidicon.png', link: 'https://github.com/features/actions' },
        { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', link: 'https://firebase.google.com/' },
        { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', link: 'https://azure.microsoft.com/' }
      ]
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', link: 'https://www.mysql.com/' },
        { name: 'Firestore', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', link: 'https://firebase.google.com/products/firestore' }
      ]
    },
    {
      category: 'Security & Tools',
      skills: [
        { name: 'OWASP ZAP', icon: 'https://www.zaproxy.org/images/zap-icon-128x128.png', link: 'https://www.zaproxy.org/' },
        { name: 'Burp Suite', icon: 'https://portswigger.net/content/images/logos/burpsuite-twittercard.png', link: 'https://portswigger.net/burp' },
        { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', link: 'https://www.postman.com/' }
      ]
    },
     {
      category: 'Games',
      skills: [
        { name: 'Valorant', icon: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/cbf4460132cdfeb2a97fad5f9dd25ba0bc058f76-128x128.png', link: 'https://playvalorant.com/' },
        { name: 'Marvel Rivals', icon: 'https://marvelrivals.com/favicon.ico', link: 'https://www.marvelrivals.com/' }
      ]
    }
  ];
}
