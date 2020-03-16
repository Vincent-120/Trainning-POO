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
    //? Création de l'arme
    const weapon = new Weapon(armList[a].name,armList[a].dps,armList[a].description);
    console.log(weapon)
    //? Création du personnage
    const huskyix = new Personnage("Huskyix",100,7,weapon);
    console.log(huskyix);
        
    }();
    document.getElementById('name').addEventListener('click',()=>{
        a =+1 
    })
    document.getElementById('pv').addEventListener('click',()=>{
        a =+1 
    })
    document.getElementById('dps').addEventListener('click',()=>{
        a =+1 
    })
    document.getElementById('next').addEventListener('click',()=>{
        a =+1 
    })
    document.getElementById('next').addEventListener('click',()=>{
        a =+1 
    })
    document.getElementById('next').addEventListener('click',()=>{
        a =+1 
    })
    