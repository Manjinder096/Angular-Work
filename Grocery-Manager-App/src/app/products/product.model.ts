

export class Product {
  public name: string;
  public description: string;
  public imagePath: string;
  public quantity: number;

  constructor(name: string, desc: string, imagePath: string, quantity: number) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.quantity = quantity;
  }
}
