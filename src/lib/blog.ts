export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

export const posts: BlogPost[] = [
  {
    slug: "secure-apis-oauth2",
    title: "Building secure APIs with OAuth2",
    date: "March 2026",
    excerpt:
      "A practical guide to implementing OAuth2 flows, securing tokens, and handling refresh workflows.",
    content: `## OAuth2 for modern APIs

OAuth2 is the industry standard for delegated authorization. In this post, we cover the most common grant flows, best practices for token storage, and how to protect APIs from common attacks such as token replay and CSRF.

### Key takeaways

- Use the **authorization code flow** with PKCE for public clients.
- Store refresh tokens securely and rotate them frequently.
- Validate access tokens on every request and implement scopes.
`,
  },
  {
    slug: "terraform-patterns-scalable-infrastructure",
    title: "Terraform patterns for scalable infrastructure",
    date: "February 2026",
    excerpt:
      "How to structure Terraform modules and manage state across multiple environments.",
    content: `## Organizing Terraform for teams

When you manage multiple environments, keeping your Terraform configuration modular and DRY makes maintenance scalable.

### Recommended structure

- **modules/**: Reusable infrastructure components
- **env/**: Environment overlays (dev, staging, prod)

Use remote state backends with locking (e.g. Terraform Cloud, S3 + DynamoDB) to prevent concurrent changes.
`,
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}
