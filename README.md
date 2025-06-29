# ICON365 Website with Tailwind CSS

This website has been set up to use Tailwind CSS for styling.

## Setup Instructions

### 1. Install Dependencies
First, install the required dependencies:
```bash
npm install
```

### 2. Build CSS
To build the CSS file from the Tailwind source:
```bash
npm run build
```

This will watch for changes and automatically rebuild the CSS file.

### 3. Production Build
For production, use the minified version:
```bash
npm run build-prod
```

## File Structure

- `src/input.css` - Contains Tailwind directives and custom component styles
- `styles.css` - Generated CSS file (do not edit directly)
- `tailwind.config.js` - Tailwind configuration
- `package.json` - Project dependencies and scripts

## Custom Styles

The website uses custom Tailwind classes defined in `src/input.css`:

- `bg-rwb` - Background image for the header
- `text-icon-black` - Custom black color
- `bg-icon-gray` - Custom gray color
- `bg-icon-light-gray` - Custom light gray color

## Development

1. Run `npm run build` to start the CSS watcher
2. Edit HTML files to use Tailwind classes
3. Add custom styles in `src/input.css` using `@layer components`
4. The CSS will automatically rebuild when you save changes

## Notes

- The original `styles.css` file has been replaced with a generated version
- All styling is now handled through Tailwind CSS classes
- Custom component styles are defined in the `@layer components` section
- Responsive design is handled through Tailwind's responsive prefixes 