const printWarning = (format, ...args) => {
    let argIndex = 0;
    const message = `Warning: ${format.replace(/%s/g, () => args[argIndex++])}`;
    if (typeof console !== 'undefined') {
        console.error(message); // eslint-disable-line no-console
    }
    try {
        throw new Error(message);
    } catch (x) {} // eslint-disable-line no-empty
};

const warning = process.env.NODE_ENV !== 'production'
    ? (condition, format, ...args) => {
        if (format === undefined) {
            throw new Error('`warning(condition, format, ...args)` requires a warning message argument');
        }
        if (!condition) {
            printWarning(format, ...args);
        }
    }
    : () => {};

export default warning;
