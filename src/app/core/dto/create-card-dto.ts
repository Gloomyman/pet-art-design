export class CreateCardDTO {
  image: File;
  title: string;
  description: string;
  low_profile = true; // To hide experiments, drafts, or playful shots from Dribble profile (“Low Profile” shots)
  rebound_source_id: number;
  tags: [];
}
