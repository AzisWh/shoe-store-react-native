import { shoe } from "@/constants/shoe";

export interface ShoeDataType {
    id: number;
    name: string;
    overview: string;
    price: string;
    bg: string;
    image: any; 
}

export const ShoeData = [
    {
        id:1,
        name: "Blue",
        overview: "A apir",
        price: '220.00',
        bg: '#08A6FF',
        image: shoe.blue
    },
    {
        id:2,
        name: "White",
        overview: "A apir",
        price: '220.00',
        bg: '#42B1EF',
        image: shoe.white
    },
    {
        id:3,
        name: "Black",
        overview: "A apir",
        price: '220.00',
        bg: '#ECEF42',
        image: shoe.black
    },
    {
        id:4,
        name: "Black",
        overview: "A apir",
        price: '220.00',
        bg: '#FC64D1',
        image: shoe.black2
    },
]