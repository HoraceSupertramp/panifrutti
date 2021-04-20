export type AppState = {
    userToken: string;
    categories: Category[];         //categorie generali
    selectedCategory: string;       //categoria selezionata
    sections: Section[];            //sotto categorie
    selectedSection: string;        //sezione scelta
    products: Product[];            //lista di prodotti
    selectedProduct: string;       //prodotto singolo
    selectedView: string;            //vista da renderizzare
    sideMenuAppear: boolean;         //gestisce apertura menu laterale
    cartProducts: CartProduct[];     //lista di prodotti selezionati
    cartPopupAppear: boolean;        //gestisce apertura carrello popup
};

export type Section = {
    id : string;
    image? : string;
}

export type Product = {
    id: string;
    available?: boolean;
    description?: string;
    preorder?: boolean;
    measureKg?: string;
    price?: number;
    section?: string;
    primizia?: string;
    image?: any;
}


export type Category = {
    id: string;
    image?: any;
    isActive?: boolean;
}

export type Order = {
    user: object;
    total: number;
    selected: Product[];
}


export type CartProduct = {
    product: Product;
    quantity: number;
}

export type LocalUserCredentials = {
    email: string,
    password: string,
}