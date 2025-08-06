import { shoe } from "@/constants/shoe"

export interface DetailShowType {
    id: number,
    name: string,
    price: string,
    desc: string,
    pair: string,
    bg: string,
    image:any
}

export const DetailShow: DetailShowType[] = [
    {
        id: 1,
        name: "Blue Shoe",
        pair: '1',
        price: '220',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        image: shoe.blue,
        bg: '#08A6FF',
    },
    {
        id: 2,
        name: "White Shoe",
        pair: '1',
        price: '220',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        image: shoe.white,
        bg: '#42B1EF',
    },
    {
        id: 3,
        name: "Black Shoe",
        pair: '1',
        price: '220',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        image: shoe.black,
        bg: '#ECEF42',
    },
    {
        id: 4,
        name: "Black Shoe",
        pair: '1',
        price: '220',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        image: shoe.black2,
        bg: '#FC64D1',
    },
]