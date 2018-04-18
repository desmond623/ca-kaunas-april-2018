let CARS = [];

let CARS_list_string = localStorage.getItem("CARS");

let CARS_stored = JSON.parse(CARS_list_string);
console.log(CARS_stored);

if(CARS_stored != null){
    CARS_stored == CARS
}

function reg(){
    
    let brand_text = document.getElementById("brand").value;

    let model_text = document.getElementById("model").value;

    let engine_text = document.getElementById("engine").value;
    let engine_number = Number(engine_text);

    let hp_text = document.getElementById("hp").value;
    let hp_number = Number(hp_text);

    let car = {
        //Car properties
        brand: brand_text,
        model: model_text,
        engine: engine_number,
        hp: hp_number,
        
        //Car methods
        print: function() {
            console.log(this.brand + " sako ala ahk bar!");
        }
    }

    CARS.push(car);
    
    console.log(CARS);

    let CARS_string = JSON.stringify(CARS);
    localStorage.setItem("CARS", CARS_string);
}