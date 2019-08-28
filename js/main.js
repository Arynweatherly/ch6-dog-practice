const liloDog = {
    name: "Lilo",
    species: "Australian Shepherd",
    nicknames: ["Lilo Bear", "kraken", "Fluff Monster"],
    age: 2,
    bark: function (something) {
        window.alert(`Lilo barks 'WOOF!' at ${something}`)
    },

    playing: function (toy) {
        window.alert(`Lilo plays ball with ${toy}`)
    },

    eating: function (food) {
        window.alert(`Lilo eats ${food}`)
    },
    favoriteToys: [" "],
    play: function (toy) {
    var likesToy =true;
        if (likesToy === true) {
            this.favoriteToys.push(toy);
        }
    }
}

liloDog.play("squeakytoy");
console.log(`she likes ${liloDog.favoriteToys[1]}`);
