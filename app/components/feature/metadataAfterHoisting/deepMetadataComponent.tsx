export function MetadataAfterHoisting() {
  return (
    <section className="space-y-3 rounded-lg border border-amber-200 bg-amber-50/60 p-4 shadow-sm">
      <div>
        <h3 className="text-base font-semibold text-amber-900">
          深い階層からのメタデータ
        </h3>
        <p className="text-sm text-amber-800">
          React 19
          では、コンポーネントツリーのどの位置からでもメタデータを宣言的に追加でき、SSR
          では自動的にドキュメントヘッドへ巻き上げられます。
        </p>
      </div>
      <div className="rounded bg-white/70 p-3 text-sm text-amber-900 shadow-inner">
        <p>
          このセクションでは
          <code className="mx-1 rounded bg-amber-100 px-1 py-0.5 text-xs font-semibold">
            &lt;title&gt;
          </code>
          と
          <code className="mx-1 rounded bg-amber-100 px-1 py-0.5 text-xs font-semibold">
            &lt;meta&gt;
          </code>
          を直接レンダーしています。
        </p>
      </div>
      <title>React 19 Metadata Demo</title>
      <meta
        content="React 19 のメタデータ hoisting と precedence 属性のデモ"
        name="description"
      />
      <link
        href="/styles/high-precedence.css"
        precedence="high"
        rel="stylesheet"
      />
    </section>
  );
}
