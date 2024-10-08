// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
    return (
        <div className="max-w-[1170px] mx-auto">
            {children}
        </div>
    );
};

export default Container;
