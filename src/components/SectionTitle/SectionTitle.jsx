

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center py-4">
            <p className="text-yellow-600 font-medium mb-2"> --- {subHeading} ---</p>
            <p className="text-3xl font-semibold uppercase border-y-4 mb-4 py-4 w "> {heading} </p>
        </div>
    );
};

export default SectionTitle;