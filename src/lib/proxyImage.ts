/**
 * Returns a proxied image URL for bqp.vn images.
 * Non-bqp.vn URLs (e.g. Unsplash) are returned as-is.
 */
export function proxyImage(originalUrl: string | undefined): string {
  if (!originalUrl) return "https://placehold.co/400x280/003366/ffffff?text=BQP";
  // Only proxy bqp.vn images (they have hotlink protection)
  if (originalUrl.includes("bqp.vn/wcm/") || originalUrl.includes("bqp.vn/contenthandler/")) {
    return `/api/image?url=${encodeURIComponent(originalUrl)}`;
  }
  // Other URLs (Unsplash, etc.) load fine directly
  return originalUrl;
}
