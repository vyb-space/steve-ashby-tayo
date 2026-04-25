const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!;
const API_URL = `https://${domain}/api/2024-07/graphql.json`;

async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data;
}

// ── Types ──────────────────────────────────────────────────
export type ShopifyImage = { url: string; altText: string | null; width: number; height: number };
export type ShopifyVariant = { id: string; title: string; price: { amount: string; currencyCode: string }; availableForSale: boolean };
export type ShopifyProduct = {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  featuredImage: ShopifyImage | null;
  images: { nodes: ShopifyImage[] };
  variants: { nodes: ShopifyVariant[] };
  priceRange: { minVariantPrice: { amount: string; currencyCode: string } };
};

// ── Queries ────────────────────────────────────────────────
const PRODUCT_FIELDS = `
  id handle title description descriptionHtml
  featuredImage { url altText width height }
  images(first: 8) { nodes { url altText width height } }
  variants(first: 10) {
    nodes { id title availableForSale price { amount currencyCode } }
  }
  priceRange { minVariantPrice { amount currencyCode } }
`;

export async function getAllProducts(): Promise<ShopifyProduct[]> {
  const data = await shopifyFetch<{ products: { nodes: ShopifyProduct[] } }>(`
    { products(first: 20, sortKey: TITLE) { nodes { ${PRODUCT_FIELDS} } } }
  `);
  return data.products.nodes;
}

export async function getProduct(handle: string): Promise<ShopifyProduct | null> {
  const data = await shopifyFetch<{ productByHandle: ShopifyProduct | null }>(`
    query($handle: String!) {
      productByHandle(handle: $handle) { ${PRODUCT_FIELDS} }
    }
  `, { handle });
  return data.productByHandle;
}

// ── Cart ───────────────────────────────────────────────────
export type CartLine = { merchandiseId: string; quantity: number };

export async function createCart(lines: CartLine[]): Promise<{ id: string; checkoutUrl: string }> {
  const data = await shopifyFetch<{ cartCreate: { cart: { id: string; checkoutUrl: string } } }>(`
    mutation($lines: [CartLineInput!]!) {
      cartCreate(input: { lines: $lines }) {
        cart { id checkoutUrl }
      }
    }
  `, { lines });
  return data.cartCreate.cart;
}

// ── Helpers ────────────────────────────────────────────────
export function formatPrice(amount: string, currencyCode: string): string {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: currencyCode,
  }).format(parseFloat(amount));
}
