//? tableau des armes
let armList = [];
class Personnage {
    constructor(name, pv, dps, weapon = null){
        this.name = name;
        this.pv = pv;
        this.dps = dps;
        this.weapon = weapon;
    }
    Display(){
        return(`${this.name} a ${this.pv}Pv et Frappe de 0 a ${this.dps} dps`);
    }
    Hit(){
        let degat = Math.floor(Math.random()*Math.floor(this.dps));
            if (this.weapon !== null) {
                let degatArme = Math.floor(Math.random()*Math.floor(this.dps));
                console.log("hit");
                return degatArme + degat
            }
        return degat ;
    }
};
class Weapon {
    constructor(name, dps, description){
        this.name = name;
        this.dps = dps;
        this.description = description;
    }
    Display(){
        return(`${this.name} possède 0-${this.dps}dps`);
    }
};

//? find the weapon into array
document.getElementById('next').addEventListener('click',()=>{
    console.log("next")
})
//? Création de l'arme
//!const weapon = new Weapon();

//? Création du personnage
const huskyix = new Personnage("Huskyix",100,7);
console.log(huskyix);

function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'arme.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);  
}
loadJSON(function(response) {
    
    // Parse JSON string into object
    let actual_JSON = JSON.parse(response);
    console.log(actual_JSON[0]);
    let test = actual_JSON[0];
    armList.push(test)
    // for (let i = 0; i < 4; i++) {
    //     armList.push(actual_JSON[i])
    // }
    console.log(1, armList);
});
console.log(2, armList);
