(() => {
    HTMLElement.prototype.appendChilds = function (...nodes) { nodes.forEach(node => this.appendChild(node)); }

    class Point {
        static from = (instance) => new Point(instance.x, instance.y);
        x = 0; y = 0;
        constructor(x, y) {
            this.x = x ?? 0, this.y = y ?? 0;
        }
        equalsTo = (that) => this.x == that.x && this.y == that.y;
    }

    let isGameStarted = false;
    let isMouseControlling = false;
    let isAutoPlaying = false;
    let eventLoopDelayMultipier = 3;

    const GRID_WIDTH = 22;
    const GRID_HEIGHT = 22;
    const GRID_PX = 20; // in px

    const START_POINT = new Point(Math.floor(GRID_WIDTH / 2), Math.floor(GRID_HEIGHT / 2));
    let headPoint = Point.from(START_POINT);
    let applePoint = new Point();
    let snakeSteps = [];
    let snakeParts = [];

    let mousePoint = new Point(); // Mouse Controlling

    let direction = 'R';
    let lastStepType = 'H';

    function UpdateNodeCoordinate(node, point) {
        node.style.left = point.x * GRID_PX + 'px';
        node.style.top = point.y * GRID_PX + 'px';
    }

    function UpdateApplePoint() {
        [applePoint.x, applePoint.y] = [Math.floor(Math.random() * GRID_WIDTH), Math.floor(Math.random() * GRID_HEIGHT)];
        for (let movedPoint of snakeSteps) {
            if (applePoint.equalsTo(movedPoint)) {
                UpdateApplePoint();
                return;
            }
        }
    }

    function UpdateHeadPoint() {
        if (isMouseControlling) {
            if (lastStepType == 'H') {
                direction = headPoint.x > mousePoint.x ? 'L' : 'R';
                lastStepType = 'V';
            } else {
                direction = headPoint.y > mousePoint.y ? 'U' : 'D';
                lastStepType = 'H';
            }
        } else if (isAutoPlaying) {
            if (headPoint.x == applePoint.x) {
                direction = headPoint.y > applePoint.y ? 'U' : 'D';
            } else if (headPoint.y == applePoint.y) {
                direction = headPoint.x > applePoint.x ? 'L' : 'R';
            } else if (lastStepType == 'H') {
                direction = headPoint.x > applePoint.x ? 'L' : 'R';
                lastStepType = 'V';
            } else {
                direction = headPoint.y > applePoint.y ? 'U' : 'D';
                lastStepType = 'H';
            }
        }
        switch (direction) {
            case 'L':
                headPoint.x--;
                if (headPoint.x < 0) {
                    headPoint.x = 0;
                    direction = 'R';
                }
                break;
            case 'R':
                headPoint.x++;
                if (headPoint.x >= GRID_WIDTH) {
                    headPoint.x = GRID_WIDTH - 1;
                    direction = 'L';
                }
                break;
            case 'U':
                headPoint.y--;
                if (headPoint.y < 0) {
                    headPoint.y = 0;
                    direction = 'D';
                }
                break;
            case 'D':
                headPoint.y++;
                if (headPoint.y >= GRID_HEIGHT) {
                    headPoint.y = GRID_HEIGHT - 1;
                    direction = 'U';
                }
                break;
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        const CONTAINER_NODE = document.getElementById('container');
        let SCORE_NODE = document.getElementById('score');

        CONTAINER_NODE.style.setProperty('--x', GRID_WIDTH);
        CONTAINER_NODE.style.setProperty('--y', GRID_HEIGHT);
        CONTAINER_NODE.style.setProperty('--w', GRID_PX + 'px');

        document.getElementById('updateGameSpeed').addEventListener('click',function(){
            eventLoopDelayMultipier = document.getElementById('multipier').value;
        });

        function startGame() {
            if (isGameStarted) return;
            isGameStarted = true;

            document.getElementById('multipier').remove();
            document.getElementById('updateGameSpeed').remove();

            if (isMouseControlling) {
                CONTAINER_NODE.addEventListener('click', (e) => {
                    mousePoint = new Point(e.layerX / GRID_PX, e.layerY / GRID_PX);
                })
            } else {
                const AUTOPLAY_BUTTON_NODE = document.createElement('button');
                AUTOPLAY_BUTTON_NODE.textContent = 'AUTOPLAY';
                AUTOPLAY_BUTTON_NODE.addEventListener('click', () => {
                    isAutoPlaying = true;
                });
                document.getElementById('options').appendChild(AUTOPLAY_BUTTON_NODE);
            }

            let appleNode = document.createElement('fs-apple');
            let targetNode = document.createElement('fs-target');
            let snakeHeadNode = document.createElement('fs-snakepart');

            CONTAINER_NODE.appendChilds(appleNode, targetNode, snakeHeadNode);

            UpdateApplePoint();
            UpdateNodeCoordinate(appleNode, applePoint);
            UpdateNodeCoordinate(snakeHeadNode, headPoint);
            snakeHeadNode.style.setProperty('--index', 0);

            timer = setInterval(() => {
                UpdateHeadPoint();
                UpdateNodeCoordinate(snakeHeadNode, headPoint);
                UpdateNodeCoordinate(targetNode, headPoint);

                snakeSteps.unshift(Point.from(headPoint));

                if (headPoint.equalsTo(applePoint)) {
                    UpdateApplePoint();
                    UpdateNodeCoordinate(appleNode, applePoint);

                    let newPartNode = document.createElement('fs-snakepart');
                    UpdateNodeCoordinate(newPartNode, headPoint);
                    newPartNode.style.setProperty('--index', snakeParts.length - 1);
                    CONTAINER_NODE.appendChild(newPartNode);
                    CONTAINER_NODE.style.setProperty('--all', snakeParts.length);
                    snakeParts.push(newPartNode);

                    SCORE_NODE.textContent = 'Score: ' + snakeParts.length;
                }

                snakeParts.forEach((partNode, index) => {
                    UpdateNodeCoordinate(partNode, snakeSteps[index + 1]);
                });

                snakeSteps.splice(snakeParts.length, snakeSteps.length);
            }, 50 * eventLoopDelayMultipier);
        }

        document.addEventListener('keydown', (e) => { if (e.key.startsWith('Arrow')) direction = e.key[5] })
        document.getElementById('startButton').addEventListener('click', startGame);
        document.getElementById('startMouse').addEventListener('click', () => { isMouseControlling = true; startGame() });
    })
})();