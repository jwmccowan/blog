import { notFound } from "next/navigation";

export function findBySlug<T extends { slug: string }>(
  mds: T[],
): (slug: string) => T {
  return (slug: string) => {
    const foundMd = mds.find((md) => md.slug === slug);
    if (!foundMd) {
      throw notFound();
    }
    return foundMd;
  };
}
