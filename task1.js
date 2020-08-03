process.stdin.on('data', (data) => {
    const reversedData = data.reverse();
    process.stdout.write(reversedData);
});
