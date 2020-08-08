declare module 'meta' {
    export function get(s: string): string | boolean;

    export function getBoolean(s: string): boolean;

    export function set(k: string, v: any): void;
}
