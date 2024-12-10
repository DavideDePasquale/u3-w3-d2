export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES"


export const favouritesAction = (companies) => {
    return {
        type: ADD_TO_FAVOURITES,
        payload: [companies]
    }
}


export const travellAction = (query) => {
    return async (dispatch, getState) => {
        const currentState = getState();
        console.log("Current State", currentState)
        try {

            const response = await fetch(
                "https://strive-benchmark.herokuapp.com/api/jobs?search=" +
                query +
                "&limit=20"
            );
            if (response.ok) {
                const { data } = await response.json();
                dispatch(data);
            } else {
                alert("Error fetching results");
            }
        } catch (error) {
            console.log(error);
        };
    }
}