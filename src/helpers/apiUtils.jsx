import { useEffect, useState } from "react";

const UseCountriesNowAPI = (url) => {
    const [loadingApi, setLoadingApi] = useState(true)
    const [apiData, setApiData] = useState(null)

    const fetchApi = async () => {
        try {
            const requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            const res = await fetch(url, requestOptions);

            const data = await res.json();

            // console.log('From apiUtils', data);
            // debugger;
            setLoadingApi(false)
            setApiData(data)

        } catch (error) {
            console.log('error', error)
        }
    }

    useEffect(() => {
        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { loadingApi, apiData }
}

export default UseCountriesNowAPI;