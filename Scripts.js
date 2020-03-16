let armList=[];
let a= 0 ;


+async function IIFE() {

    //? createur du perso & arme
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
    const armList = await fetch("arme.json").then(res => res.json());
    const weapon = new Weapon(armList[a].name,armList[a].dps,armList[a].description);
    //? Création de l'arme
    document.getElementById('next').addEventListener('click',(weapon)=>{
        console.log("next");
        a =+1 
        weapon = new Weapon(armList[a].name,armList[a].dps,armList[a].description);
        return weapon
    })
    

    //? Création du personnage
    const huskyix = new Personnage("Huskyix",100,7,weapon);

    document.getElementById('name').innerHTML = huskyix.name
    document.getElementById('pv').innerHTML = huskyix.pv
    document.getElementById('dps').innerHTML = huskyix.dps
    document.getElementById('name_arme').innerHTML = weapon.name
    document.getElementById('dps_arme').innerHTML = weapon.dps
    document.getElementById('desc').innerHTML = weapon.description
    }();
    
    