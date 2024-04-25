export async function generateStaticParams() {
    const services = ["bodas","comunion","fiestas de 15","bautismos"]

    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default function servicePage({ params }) {
    const { service } = params;

    return <div>{service}</div>;
}
