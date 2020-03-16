class Personnage {
    constructor(nom,sante,force){
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.xp = 0;
        this.inventaire = {
            or = 1,
            potionDeSoin = 1
        }
    }
    Decrire(){
        return `${this.nom} a ${this.sante} point de vie, ${this.force} en force et ${this.xp} points d'experience`;
    }
    Attack(cible){
        if (this.sante > 0) {
            const degat = this.force;
            console.log(`${this.nom} attack ${cible.nom} et lui inflige ${degat} point de dégats`);
            cible.sante -= degat;
            if (cible.sante > 0) {
                console.log(`${cible.nom} a encore ${cible.sante} points de vie`)
            }
            else {
                cible.sante = 0;
                const bonusXP = 10;
                console.log(
                  `${this.nom} a tué ${
                    cible.nom
                  } et gagne ${bonusXP} points d'expérience`
                );
                this.xp += bonusXP;
              }
            } else {
              console.log(
                `${this.nom} n'a plus de points de vie et ne pas pas attaquer`
              );
            }
          }
          Heal(potionDeSoin){
              if (potionDeSoin > 0 ) {
                  
              }
          }
        }

const player1 = new Personnage("Player1",150,25);
const player2 = new Personnage("Player2",130,30);

console.log("Bienvenu dans ce jeu d'aventure ! Voici nos courageux héros:");

console.log("------------------------------------------------------------------------------");

console.log(player1.Decrire());
console.log(player2.Decrire());

console.log("------------------------------------------------------------------------------");

const monstre = new Personnage("zoble",40,20);
console.log(`un affreux ${monstre.nom} est apparut`);

console.log("------------------------------------------------------------------------------");

monstre.Attack(player1);
monstre.Attack(player2);
player1.Attack(monstre);
player2.Attack(monstre);

console.log("------------------------------------------------------------------------------");

console.log(player1.Decrire())
console.log(player2.Decrire())