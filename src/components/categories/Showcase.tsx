import React from "react";
import ProductCard from "./ProductListItem";
import ProductListItem from "./ProductListItem";
import {Product} from "../../app.types";
/** Creates and renders a Products[] having the same "section" KEY
 *      used :
 *          selectItemsBySection(section);
 *
 *
 *      STATE : {
 *          sectionName: string,    //USED TO GET ELEMENTS BY SESSION IF SESSION COUNT > 5
 *          products: Product[]
 *      }
 *
 */

const products : Product[] = [
    {
        name: "mela",
        available: true,
        description: "mela golden succosa",
        price: 2.5,
        measureKg : "kg",
        image : "IMMAGINE",
        section: "mele"
    },
    {
        name: "mela",
        available: true,
        description: "mela polpina succosa",
        price: 3.5,
        measureKg : "kg",
        image : "IMMAGINE",
        section: "mele",
    },
    {
        name: "mela",
        available: true,
        description: "mela navel succosa",
        price: 4.5,
        measureKg : "kg",
        image : "IMMAGINE",
        section: "mele"
},
    {
        name: "pera",
        available: true,
        description: "pera golden succosa",
        price: 2.5,
        measureKg : "kg",
        image : "IMMAGINE",
        section: "pere"
    },
    {
        name: "pera",
        available: true,
        description: "pera polpina succosa",
        price: 3.5,
        measureKg : "kg",
        image : "IMMAGINE",
        section: "pere",
    },
    {
        name: "pera",
        available: true,
        description: "pera navel succosa",
        price: 4.5,
        measureKg : "kg",
        image : "IMMAGINE",
        section: "pere"
},
    {
        name: "arancia",
        available: true,
        description: "mela golden succosa",
        price: 2.5,
        measureKg : "kg",
        image : "IMMAGINE",
        section: "arance"
    },
    {
        name: "arancia",
        available: true,
        description: "mela polpina succosa",
        price: 3.5,
        measureKg : "kg",
        image : "IMMAGINE",
        section: "arance",
    },
    {
        name: "arancia",
        available: true,
        description: "mela navel succosa",
        price: 4.5,
        measureKg : "kg",
        image : "IMMAGINE",
        section: "arance"
},

];

interface ShowcaseProps  {
    sectionName: string;
}



const Showcase : React.FC<ShowcaseProps> = ({sectionName}) => {

    let items = products.filter((el)  => {
        if (el.section === sectionName) return el;
    });

    let mapItems = () => items.map(el => <ProductListItem product={el} key={el+"-productListEl-key"}/>)

    return (
        <div className="Showcase-wrapper">
            <h4>{sectionName.toUpperCase()}</h4>
            <ul>
                {mapItems()}
            </ul>
        </div>
    )
}

export default Showcase;