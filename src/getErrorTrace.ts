const getErrorTrace = (error: Error) => {
    const errorObject = error || new Error()

    return errorObject.stack
        ?.split("\n")
        .map((str) => str.trim())
        .filter(Boolean)
        .slice(1)
}

export {
    getErrorTrace
}
