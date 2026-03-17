# TableSort+ v1.1.0

A modern, premium browser extension (Chrome/Firefox) that adds instant table sorting to any webpage.

## Features
- **Manifest V3**: Follows the latest browser extension standards.
- **jQuery & Tablesorter**: Adds sortable table functionality to any webpage.
- **Content Script**: Automatically enhances tables with sorting capabilities.
- **Cross-browser Compatible**: Works on Chrome and Firefox.
- **Smart Detection**: Ignores clicks on `<a>` tags to prevent unintended sorting during link navigation.

## Usage
- **Ctrl + Click** (or **Cmd + Click** on Mac) on any table to apply tablesorter functionality.
  - *Note*: If clicking directly on a link (`<a>`) or within one, sorting will not be triggered.
- Tables will become sortable by clicking on column headers.

## File Structure
- `manifest.json`: Configuration file.
- `lib/`: jQuery and Tablesorter libraries.
- `icons/`: Extension logo and assets.
- `content.js`: Script that runs in the context of web pages.
