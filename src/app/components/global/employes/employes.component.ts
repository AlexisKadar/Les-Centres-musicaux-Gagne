import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employes',
  imports: [CommonModule],
  templateUrl: './employes.component.html',
  styleUrl: './employes.component.css'
})
export class EmployesComponent {
  currentIndex = 0;

  team = [
    {
      name: 'Giselle Gagné',
      role: 'Fondatrice',
      image: 'https://www.size-factory.com/le-journal/wp-content/uploads/2023/12/80SF201123-Web.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Karim Bouzid',
      role: 'Co-fondateur',
      image: 'https://www.size-factory.com/le-journal/wp-content/uploads/2023/12/80SF201123-Web.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Bruno Bouchard',
      role: 'Luthier',
      image: 'https://www.size-factory.com/le-journal/wp-content/uploads/2023/12/80SF201123-Web.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Mélanie Boucher',
      role: 'Experte en marketing',
      image: 'https://www.size-factory.com/le-journal/wp-content/uploads/2023/12/80SF201123-Web.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Robert Bouchard',
      role: 'Professeur',
      image: 'https://www.size-factory.com/le-journal/wp-content/uploads/2023/12/80SF201123-Web.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Nathalie Hébert',
      role: 'Professeur',
      image: 'https://www.size-factory.com/le-journal/wp-content/uploads/2023/12/80SF201123-Web.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Alexandre Gagné',
      role: 'Luthier',
      image: 'https://www.size-factory.com/le-journal/wp-content/uploads/2023/12/80SF201123-Web.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Xavier Estienne',
      role: 'Luthier',
      image: 'https://www.size-factory.com/le-journal/wp-content/uploads/2023/12/80SF201123-Web.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Bob Johnson',
      role: 'Professeur',
      image: 'https://www.size-factory.com/le-journal/wp-content/uploads/2023/12/80SF201123-Web.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    // Tu peux en ajouter plus ici
  ];

  get maxIndex(): number {
    return Math.ceil(this.team.length / 3) - 1;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) > this.maxIndex ? 0 : this.currentIndex + 1;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1) < 0 ? this.maxIndex : this.currentIndex - 1;
  }
}
