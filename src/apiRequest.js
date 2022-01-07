const apiRequest = async(url = '', optionsObj = null, errMsg = null) => {
    try {
        const response = await fetch(url, optionsObj);
        if(!response.ok) throw Error('Plaese reload the app');//if the response not in 200 range
    } catch (err) {
        errMsg = err.message
    } finally {
        return errMsg
    }
}

export default apiRequest