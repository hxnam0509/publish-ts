// typing for tinymce@5.2.1
declare module 'tinymceV5' {
    import { Editor as EditorV4 } from 'tinymce';

    export * from 'tinymce';

    export class Editor extends EditorV4 {
        translate(text: Array<string> | string): string;
        plugins: { [key: string]: any };
    }
}
