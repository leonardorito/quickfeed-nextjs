# QuickFeed

Social media post generator built with Next.js 16, React 19, Supabase, and TypeScript.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint

## Project Structure

```
app/
  layout.tsx          # Root layout (server), wraps children in <Providers>
  providers.tsx       # Client-side QueryClientProvider
  page.tsx            # Landing page (/)
  auth/page.tsx       # Login/signup form (/auth)
  dashboard/page.tsx  # Protected dashboard (/dashboard)
components/
  ui/                 # shadcn/ui components (50+), uses CVA + Radix UI
  theme-provider.tsx  # next-themes wrapper
lib/
  supabase.ts         # Browser Supabase client (createBrowserClient)
  hooks/use-user.ts   # useUser() — React Query hook for auth user
  validations/auth.ts # Zod schema for auth forms
middleware.ts         # Route protection (server-side Supabase client)
```

## Auth Flow

- **Middleware** (`middleware.ts`): Uses `@supabase/ssr` server client + `getUser()` to protect routes. `/dashboard/*` requires auth, `/auth` redirects to dashboard if already logged in.
- **Browser client** (`lib/supabase.ts`): Used in client components for signUp, signIn, signOut.
- **User state**: `useUser()` hook wraps React Query with `queryKey: ["user"]`. Invalidate this key after auth state changes.

## Key Patterns

- **Forms**: React Hook Form + Zod + `@hookform/resolvers` (see `app/auth/page.tsx`)
- **Data fetching**: TanStack React Query. Provider in `app/providers.tsx`. Custom hooks in `lib/hooks/`.
- **Styling**: Tailwind CSS v4 with CSS variables for theming. Custom brand colors defined in `tailwind.config.ts`. Dark mode via `next-themes`.
- **Components**: shadcn/ui — compound components, `cn()` utility for class merging, `asChild` slot pattern.

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```
