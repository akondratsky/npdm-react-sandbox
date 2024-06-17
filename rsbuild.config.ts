import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';


export default defineConfig({
  tools: {
    rspack: (config, { appendPlugins }) => {
      if (config.output) {
        config.output.uniqueName = 'npdmjs-react-example';
      }
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'wtf_app',
          shared: {
            'react': {
              singleton: true,
              eager: true,
            },
            'react-dom': {
              singleton: true,
              eager: true,
            },
            '@emotion/styled': {
              singleton: true,
              eager: true,
            },
            '@emotion/react': {
              singleton: true,
              eager: true,
            },
          },
        }),
      ]);
    },
  },

  plugins: [pluginReact()],
});
