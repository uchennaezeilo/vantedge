+import Link from 'next/link';
+
+interface ProductCardProps {
+  title: string;
+  description: string;
+  href: string;
+}
+
+export function ProductCard({ title, description, href }: ProductCardProps) {
+  return (
+    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 bg-white dark:bg-zinc-900 hover:shadow-lg transition-shadow">
+      <div className="h-40 bg-zinc-100 dark:bg-zinc-800 rounded mb-4 flex items-center justify-center text-zinc-400">
+        {/* Placeholder for Product Image - Use next/image here later */}
+        Product Image
+      </div>
+      <h3 className="text-xl font-bold mb-2">{title}</h3>
+      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
+        {description}
+      </p>
+      <Link href={href} className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
+        Read Review &rarr;
+      </Link>
+    </div>
+  );
+}
