import { Metadata, ResolvingMetadata } from 'next';

type DestinationProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: DestinationProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  return {
    title: `Ticket Trek | ${slug}`,
  };
}

export default function DestinationPage() {
  return <div>page</div>;
}
