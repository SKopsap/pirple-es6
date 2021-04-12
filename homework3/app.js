const members = [{man: 'Socrates'}]
const groups = [{mortals: members}]

if (groups[0].mortals === members) {
    console.log(`All men are ${Object.keys(groups[0])}`)
}

if (members[0].man.toLocaleLowerCase() === "socrates") {
    console.log(`${members[0].man} is a ${Object.keys(members[0])}`)
}

if (members[0].man.toLocaleLowerCase() !== "socrates") {
    console.log("the man is a god")
} else {
    console.log(`Therefore, ${members[0].man.toLocaleLowerCase()} is a mortal`)
}


const cakes = [{cake: "vanilla"}, {cake: "chocolate"}]

function whatCake(cakeList) {
    cakeList.forEach(({cake}) => {
        if (cake === "vanilla" || cake === "chocolate") {
            console.log(`This cake is either vanilla or chocolate.`)
        }
        if (cake !== "chocolate") {
            console.log(`This cake is not chocolate`)
        } else {
            console.log(`This cake is vanilla`)
        }
    })
}

whatCake(cakes)
