import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-sm font-medium text-blue-600">
          AWS / Network / Web Application
        </p>
        <h1 className="text-4xl font-bold tracking-tight">
          Portfolio Hub on AWS
        </h1>
        <p className="max-w-2xl text-zinc-600">
          AWSを活用したポートフォリオサイト兼Webアプリケーションハブです。
          学習記録、制作物、インフラ構成をまとめています。
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <Link href="/blog" className="rounded-lg border p-5 hover:bg-zinc-50">
          Blog
        </Link>
        <Link href="/projects" className="rounded-lg border p-5 hover:bg-zinc-50">
          Projects
        </Link>
        <Link href="/about" className="rounded-lg border p-5 hover:bg-zinc-50">
          About
        </Link>
      </section>
    </div>
  );
}