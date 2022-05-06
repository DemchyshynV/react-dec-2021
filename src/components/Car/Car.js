const Car = ({car:{id, model, price, year}}) => {
    return (
        <div>
            <div>{id}</div>
            <div>{price}</div>
            <div>{model}</div>
            <div>{year}</div>
        </div>
    );
};

export {Car};
