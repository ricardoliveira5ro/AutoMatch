const formatValueSpaces = (value: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'decimal',
        maximumFractionDigits: 0,
    })
        .format(value)
        .replace(/,/g, ' ');
};

export { formatValueSpaces }