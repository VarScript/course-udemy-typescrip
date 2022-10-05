(() => {
    // Tupla is that the first datum forever will be a string and second datum a number
    const singer: [string, number, boolean] = ['Dr still', 199, true];

    singer[0] = 'Snoop Doog';
    singer[1] = 198;
    singer[2] = false;

    console.log(singer);    
})()