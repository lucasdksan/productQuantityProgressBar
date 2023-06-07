const distBar = (value, ref) => {
    const total = (ref*100)/ref;
    const rest = ( (ref-value)*100 )/ref;
    return {
        total,
        rest
    };
};

export default distBar;