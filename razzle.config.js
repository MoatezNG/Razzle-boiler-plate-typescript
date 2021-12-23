/* eslint-disable prefer-destructuring */
/**
 * The passed list of environment variables will be removed from the nodejs
 * instance of webpack.DefinePlugin, so they can be resolved dynamically at
 * runtime.
 * @example
 * // Include this in the plugins array exported by razzle.config.js
 * const nodeRuntimeVarsPlugin = createRazzlePluginNodeRuntimeVars('PORT', 'HOST');
 * @param  {String} ...nodeRuntimeVars
 * @return {Function}
 */
const createRazzlePluginNodeRuntimeVars = (...nodeRuntimeVars) =>
  (config, { target, dev }, webpack) => {
    if (target !== 'node') {
      // Don't change dotenv build-time behavior for the client bundle
      return config;
    }
    const definePluginIndex = config.plugins.findIndex(
      (plugin) => plugin instanceof webpack.DefinePlugin && plugin.definitions,
    );
    if (typeof definePluginIndex !== 'undefined') {
      const nodeRunetimeVarsBlacklist = nodeRuntimeVars.map((name) => `process.env.${name}`);
      const filteredDefinitions = config.plugins[definePluginIndex].definitions
        .entries()
        .reduce((result, entry) => {
          if (!nodeRunetimeVarsBlacklist.includes(entry[0])) {
            result[entry[0]] = entry[1];
          }
        }, {});
      config.plugins[definePluginIndex] = new webpack.DefinePlugin(filteredDefinitions);
    }
    return config;
  };

module.exports = {
  plugins: [createRazzlePluginNodeRuntimeVars('PORT', 'HOST')],
};
