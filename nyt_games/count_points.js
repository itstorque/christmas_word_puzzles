DO_SCORES = true;

if (!DO_SCORES) {
    console.log('Scores disabled.');

    function calculate_total_score() {
        return 0;
    }

    function sendScoreToServer() {
        console.log('Scores disabled, not sending.');
    }

    function testSendScoreToServer(totalScore) {
        console.log('Scores disabled, not sending.');
    }
} else {

    function calculate_total_score() {
        mini_score = 0;
        strands_score = 0;
        connections_score = 0;

        mini = Object.keys(localStorage).filter(key => key.startsWith('localforage') && !key.includes('#'));
        strands = Object.keys(localStorage).filter(key => key.startsWith('games-state-strands'));
        connections = Object.keys(localStorage).filter(key => key.startsWith('games-state-connections'));

        if (connections.length === 1) {
            connections = JSON.parse(localStorage[connections[0]]).states[0].data;
            console.log('Connections:', connections);

            if (connections.puzzleComplete) {
                connections_score = 100 - connections.mistakes * 10;
                connections_score = Math.max(connections_score, 30); // this should never trip hopefully?
            }
        }

        if (strands.length === 1) {
            strands = JSON.parse(localStorage[strands[0]]).states[0].data
            strands_history = strands.history;
            hint_count = strands_history.reduce((acc, state) => {
                if (state.t == "HINT") {
                    acc++;
                }
                return acc;
            }, 0);

            if (strands.isSolved) {
                strands_score = 100 - Math.min(Math.max(hint_count, 0), 6) * 15;
                strands_score = Math.max(strands_score, 10);
            }
        }

        // check that mini has one key only and parse the only value as json
        if (mini.length === 1) {
            mini = JSON.parse(localStorage.getItem(mini[0]));


            mini.status.isSolved

            mini.timer.totalElapsedTime

            // for each cell, check that revealed is False, count the Trues

            solve_counts = mini.cells.reduce((acc, cell) => {
                if (cell.checked || cell.confirmed || cell.revealed) {
                    acc.checked++;
                } else {
                    acc.unchecked++;
                }
                return acc;
            }, { checked: 0, unchecked: 0 });

            console.log('Counts:', solve_counts);

            // mini.status.isSolved, mini.status.isComplete, mini.status.isStarted.incorrectCells

            if (mini.status.isSolved) {
                // mini_score = 1000 * mini.timer.totalElapsedTime * counts.revealed;
                mini_score = 100 - Math.min(Math.max(mini.timer.totalElapsedTime, 60) - 60, 600) / 12;

                mini_score = mini_score - 3*solve_counts.checked;

                if (solve_counts.checked < 20) {
                    mini_score = Math.max(mini_score, 25);
                }
            }

        }

        total_score = mini_score + strands_score + connections_score;
        return total_score;
    }

    function sendScoreToServer() {
        const totalScore = calculate_total_score();
        const username = document.cookie
            .split('; ')
            .find(row => row.startsWith('games-username='))
            ?.split('=')[1];

        if (!username) {
            // const newUsername = prompt("Enter your name as you want it to show on the leaderboard. This will be unique to your device and cannot be changed later.");
            const newUsername = "Local Player";
            if (!newUsername) {
                console.error('A name is required to submit your scores.');
                return;
            }
            // Store username in cookies, expires in 1 year
            document.cookie = `games-username=${encodeURIComponent(newUsername)}; path=/; max-age=${60 * 60 * 24 * 365}`;
        }
        const finalUsername = document.cookie
            .split('; ')
            .find(row => row.startsWith('games-username='))
            ?.split('=')[1];
        if (!finalUsername) {
            console.error('Failed to set username in cookies.');
            return;
        }

        console.log(`Submitting score for ${finalUsername}: ${totalScore}`);

        // fetch('/submit-score', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ username: finalUsername, score: totalScore }),
        // })
        //     .then(response => {
        //         if (response.ok) {
        //             console.log('Score submitted successfully.');
        //         } else {
        //             console.error('Failed to submit score.');
        //         }
        //     })
        //     .catch(error => console.error('Error submitting score:', error));
    }

    function testSendScoreToServer(totalScore) {
        const username = document.cookie
            .split('; ')
            .find(row => row.startsWith('games-username='))
            ?.split('=')[1];

        if (!username) {
            const newUsername = prompt("Enter your name as you want it to show on the leaderboard. This will be unique to your device and cannot be changed later.");
            if (!newUsername) {
                console.error('A name is required to submit your scores.');
                return;
            }
            // Store username in cookies, expires in 1 year
            document.cookie = `games-username=${encodeURIComponent(newUsername)}; path=/; max-age=${60 * 60 * 24 * 365}`;
        }
        const finalUsername = document.cookie
            .split('; ')
            .find(row => row.startsWith('games-username='))
            ?.split('=')[1];
        if (!finalUsername) {
            console.error('Failed to set username in cookies.');
            return;
        }

        console.log(`Submitting score for ${finalUsername}: ${totalScore}`);

        // fetch('/submit-score', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ username: finalUsername, score: totalScore }),
        // })
        //     .then(response => {
        //         if (response.ok) {
        //             console.log('Score submitted successfully.');
        //         } else {
        //             console.error('Failed to submit score.');
        //         }
        //     })
        //     .catch(error => console.error('Error submitting score:', error));
    }

}