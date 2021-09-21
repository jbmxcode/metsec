module.exports = {
    ci: {
        collect: {
            startServerCommand: 'npm run test',
            numberOfRuns: 1,
            url: [
                'http://localhost:8080/',
            ],
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};
