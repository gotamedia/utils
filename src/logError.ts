import getErrorTrace from "./getErrorTrace.js"

type LogData = {
    info?: any,
    trace: string[] | undefined;
    error: Error;
}

const logError = (error: Error, additionalInfo: any) => {
    let errorData = error
    const trace = getErrorTrace(errorData)

    if (error instanceof Error) {
        const errorObject = error

        errorData = {
            name: errorObject.name,
            message: errorObject.message
        }
    }

    const logData: LogData = {
        trace: trace,
        error: errorData
    }

    if (additionalInfo) {
        logData.info = additionalInfo
    }

    console.error(JSON.stringify(logData, null, 4))
}

export default logError
