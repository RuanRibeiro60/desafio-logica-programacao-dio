const herois = [
    { nome: "Son Goku", xp: 10457},
    { nome: "Son Gohan", xp: 9524},
    { nome: "Vegeta", xp: 8197},
    { nome: "Kuririn", xp: 5050},
    { nome: "Piccolo", xp: 7007},
    { nome: "Yamcha", xp: 958}
];

for (const heroi of herois) {
    let nivelPatente;
    const xpHeroi = heroi.xp;

    switch (true) {
        case (xpHeroi <= 1000):
            nivelPatente = "Ferro";
            break;

        case (xpHeroi <= 2000):
            nivelPatente = "Bronze";
            break;
     
        case (xpHeroi <= 5000):
            nivelPatente = "Prata";
            break;
     
        case (xpHeroi <= 7000):
            nivelPatente = "Ouro";
            break;
     
        case (xpHeroi <= 8000):
            nivelPatente = "Platina";
            break;
     
        case (xpHeroi <= 9000):
            nivelPatente = "Ascendente";
            break;
     
        case (xpHeroi <= 10000):
            nivelPatente = "Imortal";
            break;
    default:
        nivelPatente = "Radiane";
    }

    console.log("O Herói de nome " + heroi.nome + " está no nível de " + nivelPatente + " com total de " + xpHeroi + " XP");
}
