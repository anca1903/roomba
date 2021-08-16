const fs = require('fs');

var fileOutput;
var room_coordinates;
var dirt_coordinates = [];
var directions;
var count = 0;
const hoover_coordinates = new Map();

function readInput(){
    try {
        const data = fs.readFileSync('./input.txt', 'utf8')
        fileOutput = data.toString().split(/\r?\n/);
        room_coordinates = fileOutput[0].split(` `);
        hoover_coordinates.set('x', parseInt(fileOutput[1].split(` `)[0], 10));
        hoover_coordinates.set('y', parseInt(fileOutput[1].split(` `)[1], 10));
        for (let i = 2; i < fileOutput.length - 1; i++) {
            dirt_coordinates[i - 2] = fileOutput[i].split(` `);
        }
        directions = fileOutput[fileOutput.length - 1];
    } catch (err) {
        console.error(err)
    }
}
function clean() {
    for (let i = 0; i < dirt_coordinates.length; i++) {
        if ((hoover_coordinates.get(`x`) == dirt_coordinates[i][0]) && (hoover_coordinates.get(`y`) == dirt_coordinates[i][1])) {
            count++;
            dirt_coordinates = dirt_coordinates.splice(dirt_coordinates[i], 1);
        }
    }
}
function process() {
    readInput();
    /*check if initial position of hoover is on a dirt patch*/
    clean();
    for (let j = 0; j < directions.length; j++) {
        switch (directions[j]) {
            case `E`: {
                let currentX = hoover_coordinates.get(`x`);
                if (currentX + 1 < room_coordinates[0]) {
                    hoover_coordinates.set(`x`, currentX + 1);
                }
                 clean();
            }
                break;
            case `W`: {
                let currentX = hoover_coordinates.get(`x`);
                if (currentX - 1 < room_coordinates[0]) {
                    hoover_coordinates.set(`x`, currentX - 1);
                }
                clean();
            }
                break;
            case `N`: {
                let currentY = hoover_coordinates.get(`y`);
                if (currentY + 1 < room_coordinates[1]) {
                    hoover_coordinates.set(`y`, currentY + 1);
                }
                 clean();
            }
                break;
            case `S`: {
                let currentY = hoover_coordinates.get(`y`);
                if (currentY - 1 < room_coordinates[1]) {
                    hoover_coordinates.set(`y`, currentY - 1);
                }
                 clean();
            }
                break;
            default:
                console.log("invalid move")
        }
    }
    return [hoover_coordinates.get(`x`), hoover_coordinates.get(`y`), count];
}

process();
console.log(hoover_coordinates.get(`x`), hoover_coordinates.get(`y`));
console.log(count);
count = 0;
module.exports = { process };