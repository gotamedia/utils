# Gota Media Utils

Set of Utils helpers for NodeJs Runtime.

## Usage
```sh
npm install @gotamedia/utils
```

```ts
import { logError } from "@gotamedia/utils/logError"

const handler = () => {
    logError(new Error("Oops!"))
}
```

## Utils
Available utils:
* logError
* getErrorTrace
* sourceMapSupport

#### Available methods:

##### logError()
A helper function to log errors with traces

| param  | type  | default   | required | description                                                                |
|--------|-------|-----------|----------|----------------------------------------------------------------------------|
| first  | Error | undefined |          | Error object to parse and log with traces                                  |
| second | any   | undefined |          | Any additional info that will be added to the output under `ìnfo` property |

**Example:**
```ts
import logError from "@gotamedia/utils/logError"

const handler = async () => {
    const trakingId = "123-321"

    try {
        ...
        const response = await fetch(`www.example.com/id/${trakingId}`)
        ...
    } catch (error) {
        logError(
            error,
            {
                trakingId: trakingId,
                message: "Oops! Something went wrong here.",
                reason: "Failed to do something because of something"
            }
        )
    }
}
```

##### getErrorTrace()
A helper function to extract trace from Error object

| param  | type  | default     | required | description                        |
|--------|-------|-------------|----------|------------------------------------|
| first  | Error | new Error() |          | Error object to extract trace from |

**Example:**
```ts
import { getErrorTrace } from "@gotamedia/utils/getErrorTrace"

const handler = async () => {
    try {
        ...
    } catch (error) {
        const trace = getErrorTrace(error)

        console.log(trace)
    }
}
```

##### sourceMapSupport
A helper util to parse source-maps from your "un-minified" Lambda code if you bundle and minify your Lambda

> **_NOTE:_**  If you want to support source-map this import needs to be the first import statement in your entry file.

**Example:**
```ts
import "@gotamedia/utils/sourceMapSupport"

const handler = async () => {
    ...
}
```