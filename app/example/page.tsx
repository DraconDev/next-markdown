import Example from "../../data/Example.mdx";

type Props = {};

const ExamplePage = (props: Props) => {
    return (
        <div className="bg-red-500 text-lg">
            <Example />
        </div>
    );
};

export default ExamplePage;
