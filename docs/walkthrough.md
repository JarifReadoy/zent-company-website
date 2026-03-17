# Enterprise IT Website Walkthrough

I have completed the full implementation of the Enterprise IT Website. The project is structured for scalability and performance.

## 1. Project Structure

The folder architecture follows standard Next.js App Router conventions with an additional focus on scalability:

```bash
src/
├── app/                  # App Router pages and layouts
├── config/               # [NEW] Site-wide configuration (navigation, metadata)
│   └── site.ts           # Central config file
├── types/                # [NEW] TypeScript definitions
│   └── index.ts          # Shared interfaces
├── components/           # React components
│   ├── layout/           # Structural components (Header, Footer)
│   └── ui/               # Reusable UI primitives (Button, Cards)
└── lib/                  # Utilities (cn helper)
```

## 2. Design System

- **Theme**: Enterprise-grade color palette (Deep Blue primary, Zinc neutrals) using Tailwind v4.
- **Typography**: `Inter` (Sans) and `Outfit` (Display) fonts.
- **Animations**: Subtle entry animations and interactive hover states.

## 3. Component Architecture

- **Layout**: Sticky `Header` with mobile drawer, comprehensive `Footer`, and `Section` wrappers.
- **UI Library**: Reusable `Button`, `ServiceCard`, and `ProductCard` components.
- **Data Driven**: Navigation and global settings are driven by `src/config/site.ts` for easy updates.

## 4. Pages Implementation

- **[Home](file:///C:/Users/jarif/.gemini/antigravity/scratch/it-company-website/src/app/page.tsx)**: 3D gradient hero, features grid, and trusted stats.
- **[Services](file:///C:/Users/jarif/.gemini/antigravity/scratch/it-company-website/src/app/services/page.tsx)**: Detailed service offerings and process methodology.
- **[Products](file:///C:/Users/jarif/.gemini/antigravity/scratch/it-company-website/src/app/products/page.tsx)**: Product showcase with integration partners.
- **[About](file:///C:/Users/jarif/.gemini/antigravity/scratch/it-company-website/src/app/about/page.tsx)**: Company mission, values, and leadership team.
- **[Contact](file:///C:/Users/jarif/.gemini/antigravity/scratch/it-company-website/src/app/contact/page.tsx)**: Contact form and location info.

## 5. SEO & Polish

- **Metadata**: Configured for all pages.
- **Robots.txt**: Added at `src/app/robots.ts`.
- **Sitemap**: Added at `src/app/sitemap.ts`.

## 6. Final Setup Instructions

The project is code-complete. To run it locally:

1. **Install Dependencies**:

    ```bash
    npm install
    ```

2. **Start Development Server**:

    ```bash
    npm run dev
    ```

**Note**: You may need to ensure `npm` is in your system PATH if the command is not found.
