export default function clientPage({ params }) {
    const { client } = params;
    console.log("🚀 ~ clientPage ~ client:", client)
    return <div>page</div>;
}
