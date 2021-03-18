export interface AppState {
    isLoggedIn: boolean;
    user: object;
    sections: Section[];
    categories: Category[];
    products: Product[];
    product: Product;
    cart: Product[];
}

export interface Section {
    name : string;
    image : string;
}

export interface Product {
    id?: string,
    name: string,
    available: boolean,
    description: string,
    preorder?: boolean,
    measureKg: string,
    price: number,
    section?: string,
    primizia?: string
    image: any,
}


export interface Category {
    id: string,
    image?: any,
    isActive?: boolean
}





