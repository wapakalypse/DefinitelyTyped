// Type definitions for translate 1.4.2
// Project: https://github.com/franciscop/translate
// Definitions by: Vladimir Kovpak  <https://github.com/wapakalypse>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface TranslateOptions {
    to?: string | undefined;
    from?: string | undefined;
}

declare function translate(text: string, options?: TranslateOptions): Promise<string>;

export = translate;
