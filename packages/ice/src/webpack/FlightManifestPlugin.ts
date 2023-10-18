// Fork form https://github.com/facebook/react/blob/main/packages/react-server-dom-webpack/src/ReactFlightWebpackPlugin.js
// Add special handling for ice.js when enable RSC.
import webpack from '@ice/bundles/compiled/webpack/index.js';
import type { Compiler } from 'webpack';

const PLUGIN_NAME = 'FlightManifestPlugin';

interface Options {
  clientManifestFilename?: string;
  ssrManifestFilename?: string;
}

interface SSRExports {
  [chunkName: string]: { specifier: string; name: string };
}

export class FlightManifestPlugin {
  clientManifestFilename?: string;
  ssrManifestFilename?: string;

  constructor(options: Options = {}) {
    this.clientManifestFilename =
      options.clientManifestFilename || 'react-client-manifest.json';
    this.ssrManifestFilename =
      options.ssrManifestFilename || 'react-ssr-manifest.json';
  }

  apply(compiler: Compiler) {
    const _this = this;

    compiler.hooks.make.tap(PLUGIN_NAME, (compilation) => {
      compilation.hooks.processAssets.tap({
        name: PLUGIN_NAME,
        stage: webpack.Compilation.PROCESS_ASSETS_STAGE_REPORT,
      }, () => {
        const clientManifest: { [key: string]: {
          chunks: (string | number)[];
          id: string | number;
          name: string;
        };} = {};

        const ssrManifest: {
          [key: string]: SSRExports;
        } = {};

        compilation.chunkGroups.forEach((chunkGroup) => {
          const chunkIds = chunkGroup.chunks.map((chunk) => chunk.id);

          const recordModule = (id: string | number, module: any) => {
            // const modId = path.relative(compiler.context, module.resource);
            const modId = module.resource;
            if (modId !== undefined) {
              clientManifest[modId] = {
                id,
                chunks: chunkIds,
                name: '*',
              };
              // TODO: If this module ends up split into multiple modules, then
              // we should encode each the chunks needed for the specific export.
              // When the module isn't split, it doesn't matter and we can just
              // encode the id of the whole module. This code doesn't currently
              // deal with module splitting so is likely broken from ESM anyway.
              ssrManifest[id] = {
                '*': {
                  specifier: modId,
                  name: '*',
                },
              };
            }
          };

          chunkGroup.chunks.forEach((chunk) => {
            const chunkModules = compilation.chunkGraph.getChunkModulesIterable(chunk);
            [...chunkModules].forEach((module) => {
              const { request } = module as any;

              if (
                !request ||
                !request.includes('FlightClientEntryLoader.js')
              ) {
               return;
              }

              const connections = compilation.moduleGraph.getOutgoingConnections(module);

              for (const connection of connections) {
                const { dependency } = connection;
                if (!dependency) continue;

                const clientEntryMod = compilation.moduleGraph.getResolvedModule(
                  dependency,
                ) as any;
                const modId = compilation.chunkGraph.getModuleId(clientEntryMod) as
                  | string
                  | number
                  | null;

                if (modId !== null) {
                  recordModule(modId, clientEntryMod);
                } else {
                  // If this is a concatenation, register each child to the parent ID.
                  if (
                    connection.module?.constructor.name === 'ConcatenatedModule'
                  ) {
                    const concatenatedMod = connection.module;
                    const concatenatedModId =
                      compilation.chunkGraph.getModuleId(concatenatedMod);
                    recordModule(concatenatedModId, clientEntryMod);
                  }
                }
              }
            });
          });
        });

        const clientOutput = JSON.stringify(clientManifest, null, 2);
        compilation.emitAsset(
          _this.clientManifestFilename,
          new webpack.sources.RawSource(clientOutput, false),
        );

        const ssrOutput = JSON.stringify(ssrManifest, null, 2);
        compilation.emitAsset(
          _this.ssrManifestFilename,
          new webpack.sources.RawSource(ssrOutput, false),
        );
      });
    });
  }
}
