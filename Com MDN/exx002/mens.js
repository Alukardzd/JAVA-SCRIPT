const greetings = [
    'Happy Birthday!',
    'Merry Christmas my love',
    'A happy Christmas to all the family',
    'You\'re all I want for Christmas',
    'Get well soon'
];
const list = [];

for (const greeting of greetings) {
    if (greeting.includes('Christmas')) {
        list.value = greeting;
        console.log(greeting);
    }
}