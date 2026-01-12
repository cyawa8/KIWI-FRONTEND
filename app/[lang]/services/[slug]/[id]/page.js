"use client";

import { useParams } from "next/navigation";
import Spinner from "@/app/_components/Spinner";
import { useEffect, useState } from "react";
import AssetDetail from "@/app/_components/AssetDetail";
import Breadcrumbs from "@/app/_components/Breadcrumbs";
import Container from "@/app/_components/Container";
import AssetRequestForm from "@/app/_components/AssetRequest";
import NoData from "@/app/_components/NoData";
import CekTagihanPage from "@/app/_components/BillReview";

export default function AssetDetailPage() {
  const { slug, id, lang } = useParams();
  const [asset, setAsset] = useState(null);
  const [loading, setLoading] = useState(true);


  const SERVICE_CONFIG = {
    "asset-management": {
      endpoint: "asset-management",
      Detail: AssetDetail,
      Request: AssetRequestForm,
    },
    "bill-tagihan": {
      endpoint: "bill-review",
      Detail: CekTagihanPage,
    },
  };



  useEffect(() => {
  const config = SERVICE_CONFIG[slug];

  if (!config) {
    setLoading(false);
    return;
  }

  fetch(`http://localhost:8001/api/${config.endpoint}/${id}?lang=${lang}`)
    .then(res => res.json())
    .then(data => {
      setAsset(data);
      setLoading(false);
    })
    .catch(() => setLoading(false));
}, [slug, id, lang]);


  if (loading) return <Spinner />;
  if (!asset) return <NoData />;

  const config = SERVICE_CONFIG[slug];
  if (!config?.Detail) return <NoData />;

  return (
    <Container>
      <Breadcrumbs lang={lang} />

      <config.Detail asset={asset} lang={lang} />

      {config.Request && (
        <>
          <hr className="border-t-2 border-primary-950 my-8" />
          <config.Request asset={asset} lang={lang} />
        </>
      )}
    </Container>
);


}
