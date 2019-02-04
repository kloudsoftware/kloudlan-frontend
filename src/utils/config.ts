export function getProperty(name: string): any {
    // config is defined in config.js, which is included in index.html. This is necessary, because we need to load the
    // file from the public folder instead from the webpack bundle. An import does not work, even when the imported file
    // is located in the public folder.

    // @ts-ignore
    return config[name];
}
