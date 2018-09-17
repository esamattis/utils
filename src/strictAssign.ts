export function strictAssign<T>(target: T, ...sources: Partial<T>[]): T {
    return (Object.assign as any)(target, ...sources);
}
