var data = {
    nodes: [
        {
            id: 1,
            title: "Create Website",
            milestone: true,
            dependecies: [2, 3, 5, 6, 7, 8]
        },
        {
            id: 2,
            title: "Frontend",
            milestone: false,
            dependecies: [4]
        },
        {
            id: 3,
            title: "Backend",
            milestone: false,
            dependecies: [4]
        },
        {
            id: 4,
            title: "Swagger",
            milestone: false,
            dependecies: []
        },
        {
            id: 5,
            title: "Infra setup 1",
            milestone: false,
            dependecies: []
        },
        {
            id: 6,
            title: "Infra setup 2",
            milestone: false,
            dependecies: []
        },
        {
            id: 7,
            title: "Infra setup 3",
            milestone: false,
            dependecies: [9]
        },
        {
            id: 8,
            title: "Infra setup 4",
            milestone: false,
            dependecies: []
        },
        {
            id: 9,
            title: "Something",
            milestone: false,
            dependecies: []
        }
    ]
}

data.nodes.forEach(node => {
    node.preHOffset = 0;
    node.hOffset = 0;
    node.secondColumn = false;
    node.vOffset = 0
});

function calculateHOffsets(data) {
    var currentOffset = 0;
    var passed = 1;

    while (passed > 0) {
        passed = 0;
        data.nodes.forEach(node => {
            if (node.preHOffset == currentOffset) {
                node.dependecies.forEach(id => {
                    data.nodes.find(node => node.id == id).preHOffset = currentOffset + 1;
                    passed++;
                });
            }
        });

        currentOffset++;
    }

    currentOffset = 0;
    passed = 1;
    var increment = 1;
    var secondColumn = false;

    while (passed > 0) {
        passed = 0;
        data.nodes.forEach(node => {
            if (node.preHOffset == currentOffset) {
                node.dependecies.forEach(id => {
                    if (passed >= 3) {
                        increment++;
                        secondColumn = true;
                        passed = 0;
                    }
                    currNode = data.nodes.find(node => node.id == id)
                    currNode.hOffset = currentOffset + increment;
                    currNode.secondColumn = secondColumn;
                    passed++;
                });
            }
        });

        currentOffset++;
        secondColumn = false;
    }
}

function calculateVOffsets(data) {
    var currentHOffset = 0;
    var passed = 1;
    var currentVOffset = 0;

    while (passed > 0) {
        passed = 0;
        data.nodes.forEach(node => {
            if (node.hOffset == currentHOffset) {
                node.vOffset = currentVOffset;
                currentVOffset++;
                passed++;
            }
        });

        currentHOffset++;
        currentVOffset = 0;
    }
}

function setPositions(data) {
    data.nodes.forEach(node => {
        if (node.secondColumn) {
            node.top = 30 + 100 * node.vOffset;
        } else {
            node.top = 15 + 100 * node.vOffset;
        }
        node.left = 15 + 150 * node.hOffset;
    });
}

function calculateLines(data) {
    data.lines = [];

    data.nodes.forEach(node => {
        node.dependecies.forEach(depId => {
            destNode = data.nodes.find(node => node.id == depId);

            data.lines.push({
                fromY: node.top + 35 - 2,
                fromX: node.left + 120 - 2,
                toY: destNode.top + 35 - 2,
                toX: destNode.left - 2
            });
        });
    });
}

calculateHOffsets(data);
calculateVOffsets(data);
setPositions(data);
calculateLines(data);

var dependencyTree = new Vue({
    el: '#dependecy-tree',
    data: data
})