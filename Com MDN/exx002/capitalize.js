const cities = ['lOndOn', 'ManChestER', 'LIVERpool', 'birmingHAM'];
for(const city of cities) {
    const lower = city.toLowerCase(cities);
    const firstUpper = lower.slice(0 , 1);
    const conclues = firstUpper.toUpperCase() + lower.slice(1)
    console.log(conclues)
}