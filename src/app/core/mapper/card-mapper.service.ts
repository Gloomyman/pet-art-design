import {Injectable} from '@angular/core';
import {Card} from '../entity/Card';
import {CardDTO} from '../dto/card-dto';
import {UpdateCardDTO} from '../dto/update-card-dto';
import {CreateCardDTO} from '../dto/create-card-dto';

@Injectable({
  providedIn: 'root'
})
export class CardMapperService {

  constructor() {
  }

  toCardList(cardList: CardDTO[]): Card[] {
    console.log(cardList);
    return cardList.map(this.toCard);
  }

  toCard(cardDTO: CardDTO): Card {
    const card = new Card();
    card.description = cardDTO.description;
    card.imageUrl = cardDTO.images.hidpi ? cardDTO.images.hidpi : cardDTO.images.normal;
    card.title = cardDTO.title;
    return card;
  }

  toCardWithImage(createCardDTO: CreateCardDTO): Card {
    const card = new Card();
    card.description = createCardDTO.description;
    card.title = createCardDTO.title;
    this.setImageUrl(card, createCardDTO.image);
    return card;
  }

  setImageUrl(card: Card, image: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      card.imageUrl = reader.result as string;
    };
  }

  toUpdateCardDTO(card: Card): UpdateCardDTO {
    const updateCardDTO = new UpdateCardDTO();
    updateCardDTO.description = card.description;
    updateCardDTO.title = card.title;
    return updateCardDTO;
  }

  toCreateCardDTO(card: Card, file: File): CreateCardDTO {
    const createCardDTO = new CreateCardDTO();
    createCardDTO.description = card.description;
    createCardDTO.title = card.title;
    createCardDTO.image = file;
    return createCardDTO;
  }
}
