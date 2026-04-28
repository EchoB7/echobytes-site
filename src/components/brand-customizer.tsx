"use client";

import { useEffect, useMemo, useState } from "react";

type ButtonShape = "rounded" | "pill";
type MockView = "tv" | "filmes" | "series" | "config";

function FieldLabel(props: { children: string }) {
  return <p className="text-sm font-medium text-zinc-950">{props.children}</p>;
}

export function BrandCustomizer() {
  const [backgroundColor, setBackgroundColor] = useState("#0a0a0a");
  const [primaryColor, setPrimaryColor] = useState("#ffffff");
  const [buttonShape, setButtonShape] = useState<ButtonShape>("pill");
  const [mockView, setMockView] = useState<MockView>("filmes");

  const [appBackgroundColor, setAppBackgroundColor] = useState("#0f0f0f");

  const [logoObjectUrl, setLogoObjectUrl] = useState<string | null>(null);
  const [previewBackgroundObjectUrl, setPreviewBackgroundObjectUrl] = useState<
    string | null
  >(null);

  const [appBackgroundObjectUrl, setAppBackgroundObjectUrl] = useState<
    string | null
  >(null);

  const [previewKicker, setPreviewKicker] = useState("YouOTT Demo");
  const [previewTitle, setPreviewTitle] = useState("Destaques");
  const [primaryCtaLabel, setPrimaryCtaLabel] = useState("Assinar");
  const [secondaryCtaLabel, setSecondaryCtaLabel] = useState("Ver planos");

  const [chipsText, setChipsText] = useState(
    "Ao vivo, Séries, Filmes, Esportes, Infantil, Canais",
  );
  const [heroDescription, setHeroDescription] = useState(
    "Uma prévia de como seu app pode ficar com sua marca — foco em TV, controle remoto e performance.",
  );

  const chips = useMemo(() => {
    return chipsText
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean)
      .slice(0, 8);
  }, [chipsText]);

  const buttonClassName =
    buttonShape === "pill" ? "rounded-full" : "rounded-xl";

  const focusRing = useMemo(() => {
    return {
      boxShadow: `0 0 0 2px ${primaryColor}40, 0 0 0 6px ${primaryColor}20`,
    } as const;
  }, [primaryColor]);

  const sidebarItems = useMemo(
    () =>
      [
        { key: "tv" as const, label: "TV ao vivo" },
        { key: "filmes" as const, label: "Filmes" },
        { key: "series" as const, label: "Séries" },
        { key: "config" as const, label: "Configurações" },
      ] satisfies { key: MockView; label: string }[],
    [],
  );

  const posterItems = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, idx) => ({
        id: idx,
        title: chips[idx] ?? `Título ${idx + 1}`,
      })),
    [chips],
  );

  useEffect(() => {
    return () => {
      if (logoObjectUrl) URL.revokeObjectURL(logoObjectUrl);
    };
  }, [logoObjectUrl]);

  useEffect(() => {
    return () => {
      if (previewBackgroundObjectUrl)
        URL.revokeObjectURL(previewBackgroundObjectUrl);
    };
  }, [previewBackgroundObjectUrl]);

  useEffect(() => {
    return () => {
      if (appBackgroundObjectUrl) URL.revokeObjectURL(appBackgroundObjectUrl);
    };
  }, [appBackgroundObjectUrl]);

  return (
    <div className="mx-auto w-full max-w-7xl px-6">
      <div className="mt-8 grid gap-4 lg:grid-cols-12">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm lg:col-span-4">
          <p className="text-sm font-semibold text-zinc-950">
            Ajuste o visual (demo)
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Uma prévia simples para o cliente entender “branding”.
          </p>

          <div className="mt-6 grid gap-5">
            <div className="grid gap-2">
              <FieldLabel>Logo (preview)</FieldLabel>
              <input
                aria-label="Selecionar logo para o preview"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  const nextUrl = URL.createObjectURL(file);
                  setLogoObjectUrl(nextUrl);
                }}
                className="block w-full text-sm text-zinc-950 file:mr-4 file:rounded-lg file:border-0 file:bg-zinc-950 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-zinc-800"
              />
              <div className="flex items-center justify-between">
                <p className="text-xs text-zinc-500">
                  PNG/SVG/JPG. Aparece no topo do preview.
                </p>
                <button
                  type="button"
                  onClick={() => setLogoObjectUrl(null)}
                  className="text-xs font-medium text-zinc-700 underline underline-offset-4 hover:text-zinc-950"
                >
                  Remover
                </button>
              </div>
            </div>

            <div className="grid gap-2">
              <FieldLabel>Imagem de fundo (preview)</FieldLabel>
              <input
                aria-label="Selecionar imagem de fundo para o preview"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  const nextUrl = URL.createObjectURL(file);
                  setPreviewBackgroundObjectUrl(nextUrl);
                }}
                className="block w-full text-sm text-zinc-950 file:mr-4 file:rounded-lg file:border-0 file:bg-zinc-950 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-zinc-800"
              />
              <div className="flex items-center justify-between">
                <p className="text-xs text-zinc-500">
                  Troca o fundo do container do preview.
                </p>
                <button
                  type="button"
                  onClick={() => setPreviewBackgroundObjectUrl(null)}
                  className="text-xs font-medium text-zinc-700 underline underline-offset-4 hover:text-zinc-950"
                >
                  Remover
                </button>
              </div>
            </div>

            <div className="grid gap-2">
              <FieldLabel>Fundo do app (mock)</FieldLabel>
              <div className="flex items-center gap-3">
                <input
                  aria-label="Cor de fundo do app (mock)"
                  type="color"
                  value={appBackgroundColor}
                  onChange={(e) => setAppBackgroundColor(e.target.value)}
                  className="h-10 w-12 cursor-pointer rounded-lg border border-zinc-200 bg-white"
                />
                <input
                  aria-label="Hex do fundo do app (mock)"
                  type="text"
                  value={appBackgroundColor}
                  onChange={(e) => setAppBackgroundColor(e.target.value)}
                  className="h-10 w-full rounded-xl border border-zinc-200 px-3 text-sm text-zinc-950"
                />
              </div>
              <input
                aria-label="Selecionar imagem de fundo do app (mock)"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  const nextUrl = URL.createObjectURL(file);
                  setAppBackgroundObjectUrl(nextUrl);
                }}
                className="block w-full text-sm text-zinc-950 file:mr-4 file:rounded-lg file:border-0 file:bg-zinc-950 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-zinc-800"
              />
              <div className="flex items-center justify-between">
                <p className="text-xs text-zinc-500">
                  Aplica dentro da “tela” do preview.
                </p>
                <button
                  type="button"
                  onClick={() => setAppBackgroundObjectUrl(null)}
                  className="text-xs font-medium text-zinc-700 underline underline-offset-4 hover:text-zinc-950"
                >
                  Remover
                </button>
              </div>
            </div>

            <div className="grid gap-2">
              <FieldLabel>Tela</FieldLabel>
              <select
                aria-label="Tela do layout"
                value={mockView}
                onChange={(e) => setMockView(e.target.value as MockView)}
                className="h-10 w-full rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-950"
              >
                <option value="filmes">Home (Filmes)</option>
                <option value="tv">TV ao vivo</option>
                <option value="series">Séries</option>
                <option value="config">Configurações</option>
              </select>
              <p className="text-xs text-zinc-500">O preview alterna entre telas.</p>
            </div>

            <div className="grid gap-2">
              <FieldLabel>Título da seção</FieldLabel>
              <input
                aria-label="Título do preview"
                type="text"
                value={previewTitle}
                onChange={(e) => setPreviewTitle(e.target.value)}
                className="h-10 w-full rounded-xl border border-zinc-200 px-3 text-sm text-zinc-950"
                maxLength={32}
                placeholder="Ex.: Destaques"
              />
              <p className="text-xs text-zinc-500">
                Isso muda o texto no layout do preview.
              </p>
            </div>

            <div className="grid gap-2">
              <FieldLabel>Texto pequeno (kicker)</FieldLabel>
              <input
                aria-label="Texto pequeno do preview"
                type="text"
                value={previewKicker}
                onChange={(e) => setPreviewKicker(e.target.value)}
                className="h-10 w-full rounded-xl border border-zinc-200 px-3 text-sm text-zinc-950"
                maxLength={32}
                placeholder="Ex.: Sua marca"
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="grid gap-2">
                <FieldLabel>Botão principal</FieldLabel>
                <input
                  aria-label="Texto do botão principal"
                  type="text"
                  value={primaryCtaLabel}
                  onChange={(e) => setPrimaryCtaLabel(e.target.value)}
                  className="h-10 w-full rounded-xl border border-zinc-200 px-3 text-sm text-zinc-950"
                  maxLength={20}
                  placeholder="Ex.: Assinar"
                />
              </div>
              <div className="grid gap-2">
                <FieldLabel>Botão secundário</FieldLabel>
                <input
                  aria-label="Texto do botão secundário"
                  type="text"
                  value={secondaryCtaLabel}
                  onChange={(e) => setSecondaryCtaLabel(e.target.value)}
                  className="h-10 w-full rounded-xl border border-zinc-200 px-3 text-sm text-zinc-950"
                  maxLength={20}
                  placeholder="Ex.: Ver planos"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <FieldLabel>Categorias (chips)</FieldLabel>
              <input
                aria-label="Categorias do preview"
                type="text"
                value={chipsText}
                onChange={(e) => setChipsText(e.target.value)}
                className="h-10 w-full rounded-xl border border-zinc-200 px-3 text-sm text-zinc-950"
                placeholder="Ao vivo, Filmes, Séries..."
              />
              <p className="text-xs text-zinc-500">Separe por vírgula. Até 8 itens.</p>
            </div>

            <div className="grid gap-2">
              <FieldLabel>Descrição (hero)</FieldLabel>
              <textarea
                aria-label="Descrição do hero"
                value={heroDescription}
                onChange={(e) => setHeroDescription(e.target.value)}
                className="min-h-24 w-full resize-none rounded-xl border border-zinc-200 px-3 py-2 text-sm text-zinc-950"
                maxLength={160}
                placeholder="Uma frase curta para vender a experiência"
              />
              <p className="text-xs text-zinc-500">
                Texto curto, recomendado até 2 linhas no layout.
              </p>
            </div>

            <div className="grid gap-2">
              <FieldLabel>Cor de fundo</FieldLabel>
              <div className="flex items-center gap-3">
                <input
                  aria-label="Cor de fundo"
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="h-10 w-12 cursor-pointer rounded-lg border border-zinc-200 bg-white"
                />
                <input
                  aria-label="Hex da cor de fundo"
                  type="text"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="h-10 w-full rounded-xl border border-zinc-200 px-3 text-sm text-zinc-950"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <FieldLabel>Cor do botão (primária)</FieldLabel>
              <div className="flex items-center gap-3">
                <input
                  aria-label="Cor primária"
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="h-10 w-12 cursor-pointer rounded-lg border border-zinc-200 bg-white"
                />
                <input
                  aria-label="Hex da cor primária"
                  type="text"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="h-10 w-full rounded-xl border border-zinc-200 px-3 text-sm text-zinc-950"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <FieldLabel>Estilo do botão</FieldLabel>
              <select
                aria-label="Estilo do botão"
                value={buttonShape}
                onChange={(e) => setButtonShape(e.target.value as ButtonShape)}
                className="h-10 w-full rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-950"
              >
                <option value="pill">Pílula (premium)</option>
                <option value="rounded">Arredondado</option>
              </select>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-xs leading-5 text-zinc-600">
              <p className="font-medium text-zinc-950">Valores atuais</p>
              <p className="mt-1">Fundo: {backgroundColor}</p>
              <p>Primária: {primaryColor}</p>
              <p>Botão: {buttonShape === "pill" ? "pílula" : "arredondado"}</p>
              <p className="mt-2">Título: {previewTitle}</p>
              <p>CTA 1: {primaryCtaLabel}</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm lg:col-span-8">
          <p className="text-sm font-semibold text-zinc-950">Preview</p>
          <p className="mt-2 text-sm leading-6 text-zinc-600">
            Um layout de app de TV (HTML) para demonstrar branding.
          </p>

          <div className="mt-6 overflow-hidden rounded-3xl border border-zinc-200">
            <div
              className="p-4 sm:p-6"
              style={{
                backgroundColor,
                backgroundImage: previewBackgroundObjectUrl
                  ? `url(${previewBackgroundObjectUrl})`
                  : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="overflow-hidden rounded-3xl border border-zinc-800">
                <div
                  className="flex h-[520px] w-full lg:h-[620px]"
                  style={{
                    backgroundColor: appBackgroundColor,
                    backgroundImage: appBackgroundObjectUrl
                      ? `url(${appBackgroundObjectUrl})`
                      : undefined,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="w-64 border-r border-zinc-800"
                    style={{ backgroundColor: "rgba(0,0,0,0.68)" }}
                  >
                    <div className="flex h-full flex-col p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center">
                          {logoObjectUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={logoObjectUrl}
                              alt="Logo do preview"
                              className="h-8 w-auto max-w-[140px] object-contain"
                            />
                          ) : (
                            <span
                              className="text-sm font-semibold"
                              style={{ color: "rgba(255,255,255,0.86)" }}
                            >
                              Sua logo
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="mt-4">
                        <input
                          aria-label="Buscar"
                          placeholder="Procurar"
                          className="h-10 w-full rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-white placeholder:text-white/50"
                        />
                      </div>

                      <div className="mt-4 space-y-2">
                        {sidebarItems.slice(0, 3).map((item) => (
                          <button
                            key={item.key}
                            type="button"
                            onClick={() => setMockView(item.key)}
                            className="flex w-full items-center justify-between rounded-xl border px-3 py-2 text-sm font-medium transition"
                            style={{
                              backgroundColor:
                                mockView === item.key
                                  ? `${primaryColor}18`
                                  : "rgba(255,255,255,0.04)",
                              borderColor:
                                mockView === item.key
                                  ? `${primaryColor}55`
                                  : "rgba(255,255,255,0.10)",
                              color:
                                mockView === item.key
                                  ? primaryColor
                                  : "rgba(255,255,255,0.80)",
                              ...(mockView === item.key ? focusRing : null),
                            }}
                          >
                            <span>{item.label}</span>
                          </button>
                        ))}
                      </div>

                      <div className="mt-auto space-y-2 pt-4">
                        <button
                          type="button"
                          onClick={() => setMockView("config")}
                          className="flex w-full items-center justify-between rounded-xl border px-3 py-2 text-sm font-medium transition"
                          style={{
                            backgroundColor:
                              mockView === "config"
                                ? `${primaryColor}18`
                                : "rgba(255,255,255,0.04)",
                            borderColor:
                              mockView === "config"
                                ? `${primaryColor}55`
                                : "rgba(255,255,255,0.10)",
                            color:
                              mockView === "config"
                                ? primaryColor
                                : "rgba(255,255,255,0.80)",
                            ...(mockView === "config" ? focusRing : null),
                          }}
                        >
                          <span>Configurações</span>
                        </button>
                        <button
                          type="button"
                          className="flex w-full items-center justify-between rounded-xl border px-3 py-2 text-sm font-medium transition"
                          style={{
                            backgroundColor: "rgba(255,255,255,0.04)",
                            borderColor: "rgba(255,255,255,0.10)",
                            color: "rgba(255,255,255,0.80)",
                          }}
                        >
                          <span>Recarregar</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    className="relative flex-1 overflow-hidden"
                    style={{
                      backgroundColor: appBackgroundObjectUrl
                        ? "rgba(0,0,0,0.58)"
                        : appBackgroundColor,
                    }}
                  >
                    <div className="relative flex h-full flex-col p-5">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p
                            className="text-xs font-medium"
                            style={{ color: "rgba(255,255,255,0.60)" }}
                          >
                            {previewKicker}
                          </p>
                          <p className="mt-1 text-xl font-semibold text-white">
                            {mockView === "tv"
                              ? "TV ao vivo"
                              : mockView === "series"
                                ? "Séries"
                                : mockView === "config"
                                  ? "Configurações"
                                  : "Home"}
                          </p>
                        </div>

                        <div className="flex gap-2">
                          <button
                            type="button"
                            className={`h-10 px-5 text-xs font-semibold ${buttonClassName}`}
                            style={{
                              backgroundColor: primaryColor,
                              color: backgroundColor,
                            }}
                          >
                            {primaryCtaLabel}
                          </button>
                          <button
                            type="button"
                            className={`h-10 px-5 text-xs font-semibold ${buttonClassName} border`}
                            style={{
                              borderColor: "rgba(255,255,255,0.22)",
                              color: "#fff",
                              backgroundColor: "rgba(255,255,255,0.06)",
                            }}
                          >
                            {secondaryCtaLabel}
                          </button>
                        </div>
                      </div>

                      {mockView === "filmes" ? (
                        <>
                          <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-black/25">
                            <div className="p-4">
                              <p className="text-lg font-semibold text-white">
                                {previewTitle}
                              </p>
                              <p
                                className="mt-2 text-sm leading-6"
                                style={{ color: "rgba(255,255,255,0.78)" }}
                              >
                                {heroDescription}
                              </p>
                              <div className="mt-3 flex flex-wrap gap-2">
                                {chips.slice(0, 6).map((chip) => (
                                  <span
                                    key={chip}
                                    className="rounded-full px-3 py-1 text-xs font-medium"
                                    style={{
                                      backgroundColor: "rgba(255,255,255,0.06)",
                                      border: "1px solid rgba(255,255,255,0.12)",
                                      color: "rgba(255,255,255,0.82)",
                                    }}
                                  >
                                    {chip}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="mt-5">
                            <p
                              className="text-sm font-semibold"
                              style={{ color: "rgba(255,255,255,0.86)" }}
                            >
                              Continuar assistindo
                            </p>
                            <div className="mt-3 overflow-x-auto">
                              <div className="flex gap-3 pb-2">
                                {posterItems.slice(0, 10).map((item, idx) => (
                                  <div key={item.id} className="w-[140px] shrink-0">
                                    <div
                                      className="relative aspect-[2/3] overflow-hidden rounded-xl border"
                                      style={{
                                        borderColor:
                                          idx === 0
                                            ? primaryColor
                                            : "rgba(255,255,255,0.14)",
                                        backgroundImage:
                                          "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(0,0,0,0.22))",
                                        ...(idx === 0 ? focusRing : null),
                                      }}
                                    >
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-black/10" />
                                      <div className="absolute bottom-2 left-2 right-2">
                                        <p
                                          className="truncate text-[11px] font-semibold"
                                          style={{ color: "rgba(255,255,255,0.88)" }}
                                        >
                                          {item.title}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="mt-5">
                            <p
                              className="text-sm font-semibold"
                              style={{ color: "rgba(255,255,255,0.86)" }}
                            >
                              Recentemente adicionados
                            </p>
                            <div className="mt-3 overflow-x-auto">
                              <div className="flex gap-3 pb-2">
                                {posterItems.slice(4, 14).map((item) => (
                                  <div key={item.id} className="w-[140px] shrink-0">
                                    <div
                                      className="relative aspect-[2/3] overflow-hidden rounded-xl border"
                                      style={{
                                        borderColor: "rgba(255,255,255,0.14)",
                                        backgroundImage:
                                          "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(0,0,0,0.22))",
                                      }}
                                    >
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-black/10" />
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </>
                      ) : null}

                      {mockView === "series" ? (
                        <>
                          <div className="mt-5 flex-1 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                            <div className="border-b border-white/10 px-4 py-3">
                              <p
                                className="text-sm font-semibold"
                                style={{ color: "rgba(255,255,255,0.86)" }}
                              >
                                Catálogo de séries
                              </p>
                            </div>
                            <div className="p-4">
                              <div className="grid grid-cols-6 gap-3">
                                {posterItems.slice(0, 12).map((item, idx) => (
                                  <div
                                    key={item.id}
                                    className="relative aspect-[2/3] overflow-hidden rounded-xl border"
                                    style={{
                                      borderColor:
                                        idx === 1
                                          ? primaryColor
                                          : "rgba(255,255,255,0.14)",
                                      backgroundImage:
                                        "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(0,0,0,0.22))",
                                      ...(idx === 1 ? focusRing : null),
                                    }}
                                  >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-black/10" />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </>
                      ) : null}

                      {mockView === "tv" ? (
                        <>
                          <div className="mt-5 grid flex-1 grid-cols-12 gap-3">
                            <div className="col-span-4 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                              <div className="border-b border-white/10 px-4 py-3">
                                <p
                                  className="text-sm font-semibold"
                                  style={{ color: "rgba(255,255,255,0.86)" }}
                                >
                                  Categorias
                                </p>
                              </div>
                              <div className="space-y-2 p-3">
                                {chips.slice(0, 6).map((chip, idx) => (
                                  <button
                                    key={chip}
                                    type="button"
                                    className="w-full rounded-xl border px-3 py-2 text-left text-sm font-medium"
                                    style={{
                                      backgroundColor:
                                        idx === 0
                                          ? `${primaryColor}18`
                                          : "rgba(255,255,255,0.04)",
                                      borderColor:
                                        idx === 0
                                          ? `${primaryColor}55`
                                          : "rgba(255,255,255,0.10)",
                                      color:
                                        idx === 0
                                          ? primaryColor
                                          : "rgba(255,255,255,0.78)",
                                      ...(idx === 0 ? focusRing : null),
                                    }}
                                  >
                                    {chip}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div className="col-span-8 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                              <div className="border-b border-white/10 px-4 py-3">
                                <p
                                  className="text-sm font-semibold"
                                  style={{ color: "rgba(255,255,255,0.86)" }}
                                >
                                  Programação
                                </p>
                              </div>
                              <div className="p-4">
                                <div className="space-y-2">
                                  {Array.from({ length: 9 }).map((_, idx) => (
                                    <div
                                      key={idx}
                                      className="flex items-center justify-between gap-3 rounded-xl border px-3 py-2"
                                      style={{
                                        backgroundColor:
                                          idx === 1
                                            ? `${primaryColor}14`
                                            : "rgba(255,255,255,0.03)",
                                        borderColor:
                                          idx === 1
                                            ? `${primaryColor}55`
                                            : "rgba(255,255,255,0.10)",
                                        ...(idx === 1 ? focusRing : null),
                                      }}
                                    >
                                      <div>
                                        <p
                                          className="text-sm font-semibold"
                                          style={{
                                            color:
                                              idx === 1
                                                ? primaryColor
                                                : "rgba(255,255,255,0.86)",
                                          }}
                                        >
                                          Canal {String(idx + 1).padStart(2, "0")}
                                        </p>
                                        <p
                                          className="text-xs"
                                          style={{ color: "rgba(255,255,255,0.62)" }}
                                        >
                                          Agora: Programa {idx + 1}
                                        </p>
                                      </div>
                                      <span
                                        className="text-xs font-medium"
                                        style={{
                                          color:
                                            idx === 1
                                              ? primaryColor
                                              : "rgba(255,255,255,0.55)",
                                        }}
                                      >
                                        19:{10 + idx}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : null}

                      {mockView === "config" ? (
                        <>
                          <div className="mt-5 grid flex-1 grid-cols-2 gap-3">
                            {[
                              "Conta",
                              "Perfis",
                              "Idioma",
                              "Preferências",
                              "Controle parental",
                              "Suporte",
                            ].map((label, idx) => (
                              <div
                                key={label}
                                className="rounded-2xl border border-white/10 bg-black/20 p-4"
                                style={idx === 0 ? focusRing : undefined}
                              >
                                <p
                                  className="text-sm font-semibold"
                                  style={{ color: "rgba(255,255,255,0.86)" }}
                                >
                                  {label}
                                </p>
                                <p
                                  className="mt-1 text-xs"
                                  style={{ color: "rgba(255,255,255,0.62)" }}
                                >
                                  Ajuste rápido (demo)
                                </p>
                              </div>
                            ))}
                          </div>
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs text-zinc-500">
            Observação: isso é só um preview de branding — o app real pode ter
            telas e elementos diferentes.
          </p>
        </div>
      </div>
    </div>
  );
}
