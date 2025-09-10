import ServicePageClient from "./ServicePageClient";
import servicesData from "@/data/our-services.json";
import Head from "next/head";

export async function generateStaticParams() {
    return servicesData.services.map((service) => ({
        slug: service.id,
    }));
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    return (
        <>
            <Head>
                <link rel="canonical" href={`https://venovox.com/my-en/background-screening/${slug}`} />
            </Head>
            <ServicePageClient slug={slug} />
        </>
    );
}
