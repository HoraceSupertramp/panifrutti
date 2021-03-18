import {Category, Product, Section} from "./app.types";
import {firestore} from "firebase-admin/lib/firestore";
import DocumentSnapshot = firestore.DocumentSnapshot;


interface State {
    isLoggedIn: boolean;
    user: object;
    sections: Section[];
    categories: Category[];
    products: Product[];
    product: Product;
    cart: Product[];
}

interface Catalog {

}

type Sections = DocumentSnapshot