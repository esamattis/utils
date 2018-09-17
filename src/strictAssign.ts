export function strictAssign<T>(
    target: T,
    ...sources: (Partial<T> | null | undefined)[]
): T {
    return (Object.assign as any)(target, ...sources);
}
