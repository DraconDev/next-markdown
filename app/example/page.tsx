import ExampleWithStyles from "../../data/ExampleWithStyles.mdx";

type Props = {};

const ExamplePage = (props: Props) => {
    return (
        <div className="text-xl p-4">
            <ExampleWithStyles />
        </div>
    );
};

export default ExamplePage;
