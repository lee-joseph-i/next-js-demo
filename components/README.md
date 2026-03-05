# Components Directory Structure

## Organization

- **`/ui`** - Reusable UI primitives (buttons, inputs, cards, modals, etc.)
- **`/layout`** - Layout components (header, footer, sidebar, navigation)
- **`/features`** - Feature-specific components organized by domain
- **`/shared`** - Shared business logic components used across features

## Naming Conventions

- Use PascalCase for component files: `Button.tsx`, `UserProfile.tsx`
- Co-locate styles, tests, and types with components when needed
- Use index files for cleaner imports when grouping related components

## Example Usage

```tsx
// Import from ui
import { Button } from '@/components/ui/Button'

// Import from layout
import { Header } from '@/components/layout/Header'

// Import from features
import { UserProfile } from '@/components/features/user/UserProfile'
```
