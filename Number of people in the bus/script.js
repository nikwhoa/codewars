let number = (busStops) => {
    // узнать общее количество севших пасажиров за маршрут
    let totalInPassangers = [];
    for (let i = 0; i < busStops.length; i++) {
        totalInPassangers[i] = busStops[i][0];
    }
    let amountTotalPasangers = totalInPassangers.reduce((current, number) => {return current + number;});
    // console.log(amountTotalPasangers);

    // узнать общее количество вышедших пасажиров за маршрут
    let totalOutPassanger = [];
    for (let i = 0; i < busStops.length; i++) {
        totalOutPassanger[i] = busStops[i][1];
    }
    let amountTotalOutPasangers = totalOutPassanger.reduce((current, number) => {return current + number;});
    // console.log(amountTotalOutPasangers);
    // отнять севших от вышедших
    let amountLeftPassangers = amountTotalPasangers - amountTotalOutPasangers;
    return amountLeftPassangers;
};

number([[10,0],[3,5],[5,8]]);

//   Test.assertEquals(number([[10,0],[3,5],[5,8]]),5);