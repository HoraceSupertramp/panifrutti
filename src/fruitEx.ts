const product = () =>
{
    return{
        id: 0,
        group: "",
        name: "",

        isOutOfSeason: false,
        isToPreorder: false,
        isPackaged: false,
        description: "",
        provenance: "",
        img: "",
        kingdomType: "",
        typeOfFruit: "",
        price: "0",
        unit: ["kg","pezzo"],
        sale: false
    }

}

const group = () => {
    return {
    }
}

export default product();