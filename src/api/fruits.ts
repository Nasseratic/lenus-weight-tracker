export interface IFruitResponse {
  name: string;
  image: {
    author: {
      name: string;
      url: string;
    };
    color: string;
    url: string;
  };
  metadata: [
    {
      name: string;
      value: string;
    }
  ];
}

export default async function getFruits(): Promise<IFruitResponse[]> {
  return (await fetch("/fruits.json")).json() as Promise<IFruitResponse[]>;
}
