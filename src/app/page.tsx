"use client";

import Link from "next/link";
import { CalendarIcon, Clock, User } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js",
    author: "John Doe",
    date: "2024-03-25",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "The Power of Server Components",
    excerpt: "Understanding React Server Components in Next.js",
    author: "Jane Smith",
    date: "2024-03-24",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">Bem vindo ao meu Blog</h1>
          <p className="hero__description">
            Estudos, novidade, minha história?
          </p>
          <Link href="/blog" className="button button--secondary">
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}
