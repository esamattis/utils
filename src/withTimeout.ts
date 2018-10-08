export function timeoutPromise(timeout: number, message: string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error(`Timeout after ${timeout}ms: ${message}`));
        }, timeout);
    });
}

export async function withTimeout<T extends Promise<any>>(
    errorMessage: string,
    timeout: number,
    promise: T,
): Promise<T> {
    await Promise.race([promise, timeoutPromise(timeout, errorMessage)]);
    return promise;
}
