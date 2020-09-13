import {Injectable} from '@angular/core';
import {Shot} from '../entity/Shot';
import {ShotDTO} from '../dto/shot-dto';
import {UpdateShotDTO} from '../dto/update-shot-dto';
import {CreateShotDTO} from '../dto/create-shot-dto';

@Injectable({
  providedIn: 'root'
})
export class ShotMapperService {

  constructor() {
  }

  toShotList(shotList: ShotDTO[]): Shot[] {
    console.log(shotList);
    return shotList.map(this.toShot);
  }

  toShot(shotDTO: ShotDTO): Shot {
    const shot = new Shot();
    shot.id = shotDTO.id;
    shot.description = shotDTO.description;
    shot.imageUrl = shotDTO.images.hidpi ? shotDTO.images.hidpi : shotDTO.images.normal;
    shot.title = shotDTO.title;
    return shot;
  }

  toShotWithImage(createShotDTO: CreateShotDTO): Shot {
    const shot = new Shot();
    shot.description = createShotDTO.description;
    shot.title = createShotDTO.title;
    this.setImageUrl(shot, createShotDTO.image);
    return shot;
  }

  setImageUrl(shot: Shot, image: File): void {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      shot.imageUrl = reader.result as string;
    };
  }

  toUpdateShotDTO(shot: Shot): UpdateShotDTO {
    const updateShotDTO = new UpdateShotDTO();
    updateShotDTO.description = shot.description;
    updateShotDTO.title = shot.title;
    return updateShotDTO;
  }

  toCreateShotDTO(shot: Shot, file: File): CreateShotDTO {
    const createShotDTO = new CreateShotDTO();
    createShotDTO.description = shot.description;
    createShotDTO.title = shot.title;
    createShotDTO.image = file;
    return createShotDTO;
  }
}
