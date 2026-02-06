// ==== skills.component.ts ====
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatIconModule,],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
selectedSkillIndex: number | null = null;

  skillCategories = [
    {
      category: 'Languages',
      skills: [
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', link: 'https://www.typescriptlang.org/' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', link: 'https://www.python.org/' },
        { name: 'C', icon: 'assets/c.png', link: 'https://dart.dev/' },
        { name: 'C++', icon: 'assets/cpp.png', link: 'https://dart.dev/' },
        { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg', link: 'https://dart.dev/' }
      ]
    },
    {
      category: 'Frameworks & Libraries',
      skills: [
        { name: 'Angular', icon: 'favicon.ico', link: 'https://angular.io/' },
        { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', link: 'https://flutter.dev/' },
        { name: 'Tailwind CSS', icon: 'assets/tailwind.png', link: 'https://tailwindcss.com/' }
      ]
    },
    {
      category: 'DevOps & Cloud',
      skills: [
        { name: 'GitHub Actions', icon: 'https://github.com/fluidicon.png', link: 'https://github.com/features/actions' },
        { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', link: 'https://firebase.google.com/' },
        { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', link: 'https://azure.microsoft.com/' },
        { name:'Google Cloud', icon :'assets/gcp.png', link:'https://cloud.google.com' }
      ]
    },
    {
      category: 'Databases',
      skills: [
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', link: 'https://www.mysql.com/' },
        { name: 'Firestore', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', link: 'https://firebase.google.com/products/firestore' },
        { name: 'Oracle', icon: 'assets/oracle.png', link: 'https://www.oracle.com/in/' },
      ]
    },
    {
      category: 'Security & Tools',
      skills: [
        { name: 'OWASP ZAP', icon: 'assets/zap.png', link: 'https://www.zaproxy.org/' },
        { name: 'Burp Suite', icon: 'assets/burpsuite.png', link: 'https://portswigger.net/burp' },
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
  
onSkillClick(index: number) {
  this.selectedSkillIndex = this.selectedSkillIndex === index ? null : index;
}

onTabChange() {
  this.selectedSkillIndex = null; 
}

}
