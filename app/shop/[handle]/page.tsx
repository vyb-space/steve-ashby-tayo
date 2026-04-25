import { getProduct, getAllProducts } from "@/lib/shopify";
import ProductDetail from "@/components/ProductDetail";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateStaticParams() {
  const products = await getAllProducts().catch(() => []);
  return products.map((p) => ({ handle: p.handle }));
}

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle).catch(() => null);
  if (!product) notFound();

  const allProducts = await getAllProducts().catch(() => []);
  const related = allProducts.filter((p) => p.handle !== params.handle).slice(0, 2);

  return <ProductDetail product={product} related={related} />;
}
