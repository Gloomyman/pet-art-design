export class CardDTO {
  id: number;
  description: string;
  html_url: string;
  title: string;
  images: {
    four_x: string;
    hidpi: string;
    normal: string;
    one_x: string;
    teaser: string;
    two_x: string;
  };

  constructor(description: string, html_url: string, title: string) {
    this.description = description;
    this.html_url = html_url;
    this.title = title;
  }
}

