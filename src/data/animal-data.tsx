export type Animal = {
    id: number;
    name: string;
    type: string;
    img: string;
    description: string;
}

export const animalData: Animal[] = [
    {
        id:1,
        name: 'Alfred',
        type:'dog',
        img:'',
        description: 'A good pupper'
    },
    {
        id:2,
        name: 'Viktors',
        type:'cat',
        img:'',
        description: 'A good kitty'
    },
    {
        id:3,
        name: 'Muris',
        type:'cat',
        img:'',
        description: 'A good kitty'
    }
]