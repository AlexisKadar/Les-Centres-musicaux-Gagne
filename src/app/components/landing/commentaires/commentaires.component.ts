import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-commentaires',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './commentaires.component.html',
  styleUrl: './commentaires.component.css'
})
export class CommentairesComponent {

  comments = [
    {
      name: 'Stéphanie',
      text: 'Service impeccable, j’ai pu poser toutes mes questions et obtenir des réponses claires et rapides.',
      image: 'https://thumbor.comeup.com/unsafe/fit-in/630x354/filters:quality(90):no_upscale()/uploads/media/picture/2021-04-10/meuf-6071fa6b96341.jpg',
    },
    {
      name: 'Marc',
      text: 'Très professionnel et à l’écoute. Une belle expérience client.',
      image: 'https://c.pxhere.com/photos/fe/46/close_view_man_men_face_gentleman_faces_indian_persons-1413324.jpg!s2',
    },
    {
      name: 'Claire',
      text: 'Rapide, simple, efficace. Je recommande fortement.',
      image: 'https://anysigns.ca/wp-content/uploads/Emoji-Doing-Thumb-Up-vinyl-sticker.jpg',
    },
    {
      name: 'Emilie',
      text: 'Service impeccable, j’ai pu poser toutes mes questions et obtenir des réponses claires et rapides.',
      image: 'https://www.allianz.fr/assurance-particulier/sante-prevoyance/assurance-chien-chat/assurance-chien/_jcr_content/root/stage/stageimage.img.70.3360.jpeg/1741277757681/visuel-stage-chien.jpeg',
    },
    {
      name: 'Paul',
      text: 'Très professionnel et à l’écoute. Une belle expérience client.',
      image: 'https://img.freepik.com/photos-premium/portrait-visage-photo-homme-studio-isole-fond-blanc-posant-attitude-decontractee-beau-jeune-homme-serieux-personne-sexe-masculin-pose-pour-photo-identite-passeport-photo-confiance_590464-174264.jpg?semt=ais_hybrid&w=740',
    },
    {
      name: 'Jean',
      text: 'Rapide, simple, efficace. Je recommande fortement.',
      image: 'https://mifamusique.com/wp-content/uploads/2023/09/0961091021-1-e1623925643804-scaled-1.jpg',
    },
    {
      name: 'Robert',
      text: 'Service impeccable, j’ai pu poser toutes mes questions et obtenir des réponses claires et rapides.',
      image: 'https://www.lesrecettesdedaniel.fr/modules/hiblog/views/img/upload/original/488818546d009ef951fa45b42f404daa.jpg',
    },
    {
      name: 'Bob',
      text: 'Très professionnel et à l’écoute. Une belle expérience client.',
      image: 'https://img.freepik.com/premium-photo/png-handsome-man-portrait-collage-element-transparent-background_53876-973619.jpg?semt=ais_hybrid&w=740',
    }
  ];

}
