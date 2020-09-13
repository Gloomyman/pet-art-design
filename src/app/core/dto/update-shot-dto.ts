export class UpdateShotDTO {
  title: string;
  description: string;
  low_profile = true; // To hide experiments, drafts, or playful shots from Dribble profile (“Low Profile” shots)
  tags: [];
}
