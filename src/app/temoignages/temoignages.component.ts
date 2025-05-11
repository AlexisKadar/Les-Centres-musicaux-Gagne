import { Component } from '@angular/core';
import { CommentairesComponent } from "../landing/commentaires/commentaires.component";
import { PhotosTemoignageComponent } from "./photos-temoignage/photos-temoignage.component";
import { PartageCommentaireComponent } from "./partage-commentaire/partage-commentaire.component";

@Component({
  selector: 'app-temoignages',
  imports: [CommentairesComponent, PhotosTemoignageComponent, PartageCommentaireComponent],
  templateUrl: './temoignages.component.html',
  styleUrl: './temoignages.component.css'
})
export class TemoignagesComponent {

}
