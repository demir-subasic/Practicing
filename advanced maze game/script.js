const rand = (max) => {
 return Math.floor(Math.random() * max);
}

const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i+1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const changeBrightness = (factor, sprite) => {
    let virtCanvas = document.createElement('canvas');
    virtCanvas.width = 500;
    virtCanvas.height = 500;
    let context = virtCanvas.getContext("2d");
    context.drawImage(sprite, 0, 0, 500, 500);

    let imgData = context.getImageData(0, 0, 500, 500);

    for (let i = 0; i < imgData.data.length; i+=4) {
        imgData.data[i] = imgData.data[i] * factor;
        imgData.data[i + 1] = imgData.data[i + 1] * factor;
        imgData.data[i + 2] = imgData.data[i + 2] * factor; 
    }


    context.putImageData(imgData, 0, 0);
    
    let spriteOutput = new Image();
    spriteOutput.src = virtCanvas.toDataURL();
    virtCanvas.remove();
    return spriteOutput;
}

const displayVictoryMess = (moves) => {
    document.getElementsByClassName("moves").innerHTML = "You Moved" + moves + "Steps";
    toggleVisability("Message Container")
}

const toggleVisability = (id) => {
   if (document.getElementById(id).style.visibility = "visible") {
    document.getElementById(id).style.visibility = "visible"
   } else {
    document.getElementById(id).style.visibility = "visible"
   }
}

const Maze = (Width, Height) => {
    let mazeMap;
    let width = Width;
    let height = Height;
    var startCoord, endCoord;
    let dirs = ("n", "s", "e", "w");
    let modDir = {
        n: {
            y: -1,
            x: 0,
            o: "s"
        },
        s: {
            y: 1,
            x: 0,
            o: "n"
        },
        e: {
            y: 0,
            x: 1,
            o: "w"
        },
        w: {
            y: 0,
            x: -1,
            o: "e"
        }
    };

    this.map = function() {
        return mazeMap;
    };
    this.startCoord = function() {
        return startCoord;
    };
    this.endCoord = function() {
        return endCoord;
    };

    const genMap = () => {
     mazeMap = new Array(height);
     for(y = 0; y < height; y++){
        mazeMap[y] = newArray(width);
        for (x = 0; x < width; x++){
            mazeMap[y][x] = {
                n: false,
                s: false,
                e: false,
                w: false,
                visited: false,
                priorPos: null
            };
        }
     }
    }


    const defineMaze = () => {
       var isComp = false;
       var move = false;
       var cellsVisited = 1;
       var numLoops = 0;
       var maxLoops = 0;

       var pos = {
        x: 0,
        y: 0
       };
       var numCells = width * height;
       while (!isComp) {
        move = false;
        mazeMap[pos.x][pos.y].visited = true;

        if (numLoops >= maxLoops) {
            shuffle(dirs);
            maxLoops = Math.round(rand(height / 8));
            numLoops = 0;
        }
        numLoops++;
        for (index = 0; index < dirs.length; index ++) {
            var direction = dirs(index);
            var nx = pos.x + modDir[direction].x;
            var ny = pos.y + modDir[direction].y;

            if(nx >= 0 && nx < width && ny >= 0 && ny < height) {
                if (!mazeMap[nx][ny].visited) {
                    mazeMap[pos.x][pos.y][direction] = true;
                    mazeMap[nx][ny][modDir[direction].o] = true;

                    mazeMap[nx][ny].priorPos = pos;
                    pos = {
                        x: ny,
                        y: ny
                    };
                    cellsVisited++;
                    move = true;
                    break;
                }
            }
        }
        if (!move) {
            pos.mazeMap[pos.x][pos.y].priorPos;
        }
        if (numCells == cellsVisited) {
            isComp = true;
        }
       }
    }

    const defineStartEnd = () => {
        switch (rand(4)) {
            case 0: 
            startCoord = {
                x: 0,
                y: 0
            };
            endCoord = {
                x: height -1,
                y: width -1
            };
            break;
            case 1:
                startCoord = {
                    x: 0,
                    y: width - 1
                };
                endCoord = {
                    x: height - 1,
                    y: 0
                };
            break;
        }
    }

}