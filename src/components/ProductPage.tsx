"use client";

import { useMemo, useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { AddToCartButton } from "./AddToCartButton";
import { client } from "../sanity/lib/client";
import { groq } from "next-sanity";

const SUBCATEGORIES = [
  "Elsykkel",
  "Terreng",
  "Landevei",
  "Gravel",
  "Hybrid/By",
  "Barn/Junior",
  "Deler",
  "Tilbehør",
];

const SORTS = [
  { value: "recommended", label: "Anbefalt" },
  { value: "new", label: "Nyheter" },
  { value: "price-asc", label: "Pris: Lav–Høy" },
  { value: "price-desc", label: "Pris: Høy–Lav" },
];

const query = groq`*[_type == "product"]{
  _id,
  name,
  "slug": slug.current,
  price,
  originalPrice,
  "image": image.asset->url,
  features,
}`;

export default function ProductPage() {
  const [activeSub, setActiveSub] = useState("Elsykkel");
  const [sort, setSort] = useState(SORTS[0].value);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<any[]>([]);

  const perPage = 24;

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await client.fetch(query);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const total = products.length;

  const sortedProducts = useMemo(() => {
    let arr = [...products];
    if (sort === "price-asc") arr.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") arr.sort((a, b) => b.price - a.price);
    if (sort === "new") arr.reverse();
    return arr.slice((page - 1) * perPage, page * perPage);
  }, [sort, page, products]);

  return (
    <main className="bg-white text-gray-900 mt-52 md:mt-36">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b border-gray-200">
        <ol className="mx-auto flex max-w-7xl items-center gap-2 px-4 sm:px-2 py-3 text-sm">
          <li>
            <Link href="/" className="text-gray-600 hover:text-black transition">
              Hjem
            </Link>
          </li>
          <li aria-hidden="true" className="text-gray-400">/</li>
          <li className="text-black font-medium">Sykkel</li>
        </ol>
      </nav>

      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-2 pt-6">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-center">
          <div>
            <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight text-black text-center sm:text-left">
              Sykkel
            </h1>
          </div>
        </header>
      </section>

      {/* Product grid */}
      <section className="mx-auto mt-6 max-w-7xl px-4 sm:px-2">
        {/* Toolbar */}
        <div className="mb-2 flex items-center justify-between text-sm text-gray-700">
          <div className="text-xs sm:text-sm">{total} produkter</div>
        </div>

        {/* Grid */}
        <ul
          role="list"
          className="grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-3 lg:grid-cols-3 overflow-hidden"
        >
          {sortedProducts.map((product) => (
            <li
              key={product._id}
              className="group rounded-xl sm:rounded-2xl border border-gray-200 p-2 sm:p-3 transition hover:border-black"
            >
              <div className="relative mb-2 sm:mb-3">
                <div className="w-full rounded-lg sm:rounded-xl bg-white" />
                <Link href={`/products/${product.slug}`}>
                  <img
                    className="object-cover w-[85%] h-[85%] sm:w-full sm:h-full m-auto sm:m-0 rounded-lg sm:rounded-xl"
                    src={product.image}
                    alt={product.name}
                  />
                </Link>
              </div>

              <div className="space-y-1">
                <h3 className="text-xs sm:text-sm font-medium text-black group-hover:underline leading-tight">
                  <Link href="#" className="break-words">
                    {product.name}
                  </Link>
                </h3>
              </div>

              <div className="mt-2 flex flex-col sm:flex-row sm:items-end sm:justify-between">
                <div className="flex-1 min-w-0">
                  {product.price < product.originalPrice ? (
                    <div className="flex items-baseline gap-1 sm:gap-2 flex-wrap">
                      <span className="text-sm sm:text-base font-semibold text-black whitespace-nowrap">
                        {formatCurrency(product.price)}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500 line-through whitespace-nowrap">
                        {formatCurrency(product.originalPrice)}
                      </span>
                    </div>
                  ) : (
                    <span className="text-sm sm:text-base font-semibold text-black whitespace-nowrap">
                      {formatCurrency(product.price)}
                    </span>
                  )}

                  {product.features?.length && (
                    <ul className="mt-2 sm:mt-3 flex flex-wrap gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] text-gray-700">
                      {product.features.slice(0, 2).map((f: string, i: number) => (
                        <li
                          key={i}
                          className="rounded-md border border-gray-200 px-1.5 sm:px-2 py-0.5 whitespace-nowrap"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Add to Cart Button */}
                <div className="mt-2 sm:mt-0 sm:ml-2 flex-shrink-0">
                  <AddToCartButton
                    product={product}
                    className="w-full sm:w-auto rounded-full border border-gray-300 px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium text-black bg-[#12b190] hover:bg-[#12b190] transition sm:text-white sm:bg-black sm:hover:border-black sm:hover:bg-gray-50 sm:hover:text-black whitespace-nowrap"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* SEO text */}
        <section className="mt-8 sm:mt-10 rounded-xl sm:rounded-2xl border border-gray-200 bg-gray-50 p-4 sm:p-6">
          <h2 className="text-base sm:text-lg font-semibold text-black">
            Velg riktig sykkel
          </h2>
          <p className="mt-2 text-xs sm:text-sm leading-5 sm:leading-6 text-gray-700">
            Utforsk vårt utvalg av elsykler, terreng- og landeveissykler. Vi hjelper deg
            å finne en sykkel som passer ditt behov — til jobb, trening eller tur.
          </p>
          <ul className="mt-3 list-disc pl-4 sm:pl-5 text-xs sm:text-sm leading-5 sm:leading-6 text-gray-700 space-y-1">
            <li>Fri frakt over 1000 kr</li>
            <li>Click &amp; Collect i butikk</li>
            <li>Medlemspriser med bonus</li>
          </ul>
        </section>
      </section>
    </main>
  );
}

/* ---------- Helpers ---------- */
function formatCurrency(n: number) {
  return new Intl.NumberFormat("nb-NO", {
    style: "currency",
    currency: "NOK",
    maximumFractionDigits: 0,
  }).format(n);
}
