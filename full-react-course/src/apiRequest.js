const apiRequest = async (url = "", optionsObj = null, errMsg = null) => {
    try {
        const response = await fetch(url, optionsObj);

        // If the response is not OK, throw an error
        if (!response.ok) throw Error("Please refresh the page and try again");
    } catch (err) {
        errMsg = err.message;
    } finally {
        return errMsg;
    }
}

export default apiRequest;