function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function alienShip(hull,attack,acc)  {
    this.hull = randomInteger(3,6);
    this.attack = randomInteger(2,4);
    this.acc = randomInteger(6,8) / 10;
};

let aliensShip1 = new alienShip();
let aliensShip2 = new alienShip();
let aliensShip3 = new alienShip();
let aliensShip4 = new alienShip();
let aliensShip5 = new alienShip();
let aliensShip6 = new alienShip();

let battleCruiser = {
    hull: 20,
    attack:  5,
    acc: 0.7
};

let aliens = [aliensShip1,aliensShip2,aliensShip3,aliensShip4,aliensShip5,aliensShip6];

let k = 0;


while (battleCruiser.hull > 0) {

    let usersChoice = prompt('Enter A to attack!  '  + "Enter D to defence!  ", 'a');

    if (usersChoice == 'a') {
        if (Math.random() <= battleCruiser.acc) {
            aliens[k].hull -= battleCruiser.attack;
            console.log('We attacked enemy ship ');
            console.log(aliens[k]);
            console.log('Your ship : ');
            console.log(battleCruiser);
        }

        if (aliens[k].hull > 0) {

            if (Math.random() <= aliens[k].acc) {
                battleCruiser.hull -= aliens[k].attack;
                console.log('Our ship is under attack ');
                console.log(battleCruiser);
            }

        } 
        if (battleCruiser.hull <= 0) {
                console.log(`You died like a hero!`);
                break;
        }            
        else {
            console.log(`You destroyed enemies ship. ${5 - k} left. Don't give up!`);
            k++;
            if (k > 5) {
                console.log(`Winner! Defender of Earth! You have ${battleCruiser.hull} of hull hardness left.` );
               break; 
            }

        }
    } else {
        console.log(`Loser! You have ${battleCruiser.hull} of hull hardness left.` );
        break;
    }
}
