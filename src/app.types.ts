export interface AppState {
    auth: object;
    user: object;                   //utente
    categories: Category[];         //categorie generali
    selectedCategory: string;       //categoria selezionata
    sections: Section[];            //sotto categorie
    selectedSection: string;        //sezione scelta
    products: Product[];            //lista di prodotti
    selectedProduct: string;       //prodotto singolo
    cart: SelectedProduct[];        //lista di prodotti selezionati
    selectedView: string            //vista da renderizzare
}

export interface Section {
    id : string;
    image? : string;
}

export interface Product {
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


export interface Category {
    id: string;
    image?: any;
    isActive?: boolean;
}

export interface Order {
    user: object;
    total: number;
    selected: Product[];
}

export interface SelectedProduct {
    product: Product[];
    quantity: number;
}


