let product_array = [];

function add(){
    let newproduct = document.getElementById("prod").value;

    let rasta_dublikatu = false;

    rasta_dublikatu = checkForDuplicates(newProduct, product_array)

    if(rasta_dublikatu == false){
        product_array.push(newProduct);
    }
}