var data = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
]

function start() {
    createrand2nums(data)
    createrand2nums(data)
    for (let i = 0; i < data.length; i++) {
        var senddata = document.getElementsByClassName('row')[i];

        for (let j = 0; j < data[i].length; j++) {
            var elem = document.createElement('div')
            var textnode = document.createElement('p')
            var text = document.createTextNode(data[i][j])
            textnode.appendChild(text)
            elem.appendChild(textnode)
            senddata.appendChild(elem)
        }

    }
}

function displaynums() {
    console.log(data);
    createrand2nums(data)
    createrand2nums(data)
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        var senddata = document.getElementsByClassName('row')[i];
        removeAllChildNodes(senddata)
        for (let j = 0; j < data[i].length; j++) {
            var elem = document.createElement('div')
            var textnode = document.createElement('p')
            var text = document.createTextNode(data[i][j])
            textnode.appendChild(text)
            elem.appendChild(textnode)
            senddata.appendChild(elem)
        }
    }
}

function createrand2nums() {
    var rand2or4 = Math.random() > 0.75 ? 4 : 2
    var randrowspot = Math.floor(Math.random() * 4)
    var randcolspot = Math.floor(Math.random() * 4)
    if (data[randrowspot][randcolspot] == 0) {
        data[randrowspot][randcolspot] = rand2or4
    } else {
        for (let i = 0; i < data.length; i++) {
            var yes = false
            var counter = 0
            var loc = 0
            for (var j in data[i]) {
                if (data[i][j] == 0 && (++counter > 0)) {
                    yes = true
                    break
                }
                ++loc
            }
            if (yes) {
                return data[i][loc] = Math.random() > 0.75 ? 4 : 2
            }
        }
    }
}

function moveRight() {
    var newdata = []
    for (let i = 0; i < data.length; i++) {
        let row = data[i]
        let filteredrow = row.filter(num => num)
        let combined = combine(filteredrow)
        let zeroes = Array(4 - combined.length).fill(0)
        let newrows = zeroes.concat(combined)
        newdata.push(newrows)
    }
    data = newdata
    displaynums()
}

function moveLeft() {
    var newdata = []
    for (let i = 0; i < data.length; i++) {
        let row = data[i]
        let filteredrow = row.filter(num => num)
        let combined = combine(filteredrow)
        let zeroes = Array(4 - combined.length).fill(0)
        let newrows = combined.concat(zeroes)
        newdata.push(newrows)
    }
    data = newdata
    displaynums()
}

function moveUp() {
    var newdata = []
    var column = []
    var newcolumn = []
    var chunk = 4
    for (let j = 0; j < data.length; j++) {
        for (let i = 0; i < data.length; i++) {
            column.push(data[i][j])
        }
    }
    for (let i = 0; i < column.length; i += chunk) {
        newcolumn.push(column.slice(i, i + chunk))
    }
    for (let i = 0; i < newcolumn.length; i++) {
        let row = newcolumn[i]
        let filteredrow = row.filter(num => num)
        let combined = combine(filteredrow)
        let zeroes = Array(4 - combined.length).fill(0)
        let newrows = combined.concat(zeroes)
        newdata.push(newrows)
    }
    console.log(newdata);
    column = []
    for (let j = 0; j < newdata.length; j++) {
        for (let i = 0; i < newdata.length; i++) {
            column.push(newdata[i][j])
        }
    }
    newdata = []
    for (let i = 0; i < column.length; i += chunk) {
        newdata.push(column.slice(i, i + chunk))
    }
    data = newdata
    displaynums()
}


function moveDown() {
    var newdata = []
    var column = []
    var newcolumn = []
    var chunk = 4
    for (let j = 0; j < data.length; j++) {
        for (let i = 0; i < data.length; i++) {
            column.push(data[i][j])
        }
    }
    for (let i = 0; i < column.length; i += chunk) {
        newcolumn.push(column.slice(i, i + chunk))
    }
    for (let i = 0; i < newcolumn.length; i++) {
        let row = newcolumn[i]
        let filteredrow = row.filter(num => num)
        let combined = combine(filteredrow)
        let zeroes = Array(4 - combined.length).fill(0)
        let newrows = zeroes.concat(combined)
        newdata.push(newrows)
    }
    console.log(newdata);
    column = []
    for (let j = 0; j < newdata.length; j++) {
        for (let i = 0; i < newdata.length; i++) {
            column.push(newdata[i][j])
        }
    }
    newdata = []
    for (let i = 0; i < column.length; i += chunk) {
        newdata.push(column.slice(i, i + chunk))
    }
    data = newdata
    displaynums()
}


function combine(row) {
    for (let i = 0; i < row.length - 1; i++) {
        console.log(row[i]);
        if (row[i] == row[i + 1]) {
            row[i] = parseInt(row[i] + row[i + 1])
            row.splice(i + 1, 1)
        }
    }
    return row
}


start()

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        moveUp()
    } else if (e.keyCode == '40') {
        moveDown()
    } else if (e.keyCode == '37') {
        moveLeft()
    } else if (e.keyCode == '39') {
        moveRight()
    }

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    return parent
}