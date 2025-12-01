# Shadcn UI Components

Đã thêm toàn bộ 53 components từ shadcn/ui vào project.

## Danh sách Components

### Layout & Structure
- `accordion` - Collapsible content sections
- `card` - Container for content
- `separator` - Visual divider
- `sidebar` - Side navigation panel
- `sheet` - Slide-over panel
- `drawer` - Mobile drawer menu
- `resizable` - Resizable panels

### Navigation
- `breadcrumb` - Navigation breadcrumbs
- `navigation-menu` - Complex navigation menu
- `menubar` - Menu bar component
- `pagination` - Page navigation
- `tabs` - Tab navigation

### Forms & Inputs
- `button` - Button component
- `button-group` - Button groups
- `input` - Text input
- `input-group` - Input with addons
- `input-otp` - OTP input
- `textarea` - Multi-line text input
- `checkbox` - Checkbox input
- `radio-group` - Radio button group
- `switch` - Toggle switch
- `slider` - Range slider
- `select` - Dropdown select
- `form` - Form wrapper with validation
- `field` - Form field wrapper
- `item` - List item component

### Overlays & Popups
- `dialog` - Modal dialog
- `alert-dialog` - Confirmation dialog
- `popover` - Popover tooltip
- `tooltip` - Hover tooltip
- `hover-card` - Card on hover
- `context-menu` - Right-click menu
- `dropdown-menu` - Dropdown menu
- `command` - Command palette

### Feedback & Status
- `alert` - Alert message
- `badge` - Status badge
- `skeleton` - Loading skeleton
- `spinner` - Loading spinner
- `progress` - Progress bar
- `empty` - Empty state
- `sonner` - Toast notifications

### Data Display
- `table` - Data table
- `avatar` - User avatar
- `calendar` - Date picker calendar
- `chart` - Chart component
- `carousel` - Image/content carousel
- `aspect-ratio` - Maintain aspect ratio

### Utilities
- `toggle` - Toggle button
- `toggle-group` - Toggle group
- `scroll-area` - Custom scrollbar
- `kbd` - Keyboard key display
- `label` - Form label

## Cách sử dụng

### Import từng component:
```tsx
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
```

### Hoặc import từ index:
```tsx
import { Badge, Button, Card } from "@/components/ui"
```

## Ví dụ sử dụng

### Badge (cho Hot, Sale, New):
```tsx
import { Badge } from "@/components/ui/badge"

<Badge variant="destructive">Hot</Badge>
<Badge variant="default">Sale</Badge>
<Badge>New</Badge>
```

### Tabs (cho product categories):
```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

<Tabs>
  <TabsList>
    <TabsTrigger value="all">All</TabsTrigger>
    <TabsTrigger value="milks">Milks & Dairies</TabsTrigger>
  </TabsList>
  <TabsContent value="all">...</TabsContent>
</Tabs>
```

### Carousel (cho category icons):
```tsx
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

<Carousel>
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
</Carousel>
```

## Customization

Tất cả components sử dụng CSS variables được định nghĩa trong `src/styles/globals.css`. Bạn có thể customize colors, spacing, và các thuộc tính khác thông qua CSS variables.

## Documentation

Xem thêm tại: https://ui.shadcn.com/docs/components

