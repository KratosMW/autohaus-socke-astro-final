// Static output only, no adapter. trailingSlash follows the majority of live URLs in capture/.
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://autohaus-socke.de',
  output: 'static',
  trailingSlash: 'never',
  build: { format: '{{FORMAT}}' },
});
