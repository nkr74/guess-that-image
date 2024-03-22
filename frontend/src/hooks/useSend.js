export const useSend = () => {

    // creates leaderboard from Upload page
    const createLeaderboard = async (leaderboardData) => {
        const response = await fetch(`/api/Leaderboards/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(leaderboardData)
        })
        return await response.json() // returns leaderboard id
    }

    // submits score from PlayGame page
    const updateLeaderboard = async (leaderboard) => {
        console.log(leaderboard)
        const response = await fetch(`/api/Leaderboards/${leaderboard.leaderboardId}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(leaderboard)
        })
        return await response.json()
    }

    // creates all data from Upload page
    const updateDatabase = async (gameData) => {
        const response = await fetch(`/api/Upload/`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(gameData)
        })
        return "test" 
    }

    return { createLeaderboard, updateLeaderboard, updateDatabase}
}