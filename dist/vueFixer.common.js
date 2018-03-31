module.exports = /******/ (function(modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/ var installedModules = {}; // The require function
	/******/
	/******/ /******/ function __webpack_require__(moduleId) {
		/******/
		/******/ // Check if module is in cache
		/******/ if (installedModules[moduleId]) {
			/******/ return installedModules[moduleId].exports;
			/******/
		} // Create a new module (and put it into the cache)
		/******/ /******/ var module = (installedModules[moduleId] = {
			/******/ i: moduleId,
			/******/ l: false,
			/******/ exports: {},
			/******/
		}); // Execute the module function
		/******/
		/******/ /******/ modules[moduleId].call(
			module.exports,
			module,
			module.exports,
			__webpack_require__
		); // Flag the module as loaded
		/******/
		/******/ /******/ module.l = true; // Return the exports of the module
		/******/
		/******/ /******/ return module.exports;
		/******/
	} // expose the modules object (__webpack_modules__)
	/******/
	/******/
	/******/ /******/ __webpack_require__.m = modules; // expose the module cache
	/******/
	/******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
	/******/
	/******/ /******/ __webpack_require__.d = function(exports, name, getter) {
		/******/ if (!__webpack_require__.o(exports, name)) {
			/******/ Object.defineProperty(exports, name, {
				/******/ configurable: false,
				/******/ enumerable: true,
				/******/ get: getter,
				/******/
			});
			/******/
		}
		/******/
	}; // getDefaultExport function for compatibility with non-harmony modules
	/******/
	/******/ /******/ __webpack_require__.n = function(module) {
		/******/ var getter =
			module && module.__esModule
				? /******/ function getDefault() {
						return module['default'];
				  }
				: /******/ function getModuleExports() {
						return module;
				  };
		/******/ __webpack_require__.d(getter, 'a', getter);
		/******/ return getter;
		/******/
	}; // Object.prototype.hasOwnProperty.call
	/******/
	/******/ /******/ __webpack_require__.o = function(object, property) {
		return Object.prototype.hasOwnProperty.call(object, property);
	}; // __webpack_public_path__
	/******/
	/******/ /******/ __webpack_require__.p = './'; // Load entry module and return exports
	/******/
	/******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
	/******/
})(
	/************************************************************************/
	/******/ {
		/***/ 0: /***/ function(module, exports, __webpack_require__) {
			module.exports = __webpack_require__('vgs7');

			/***/
		},

		/***/ vgs7: /***/ function(
			module,
			__webpack_exports__,
			__webpack_require__
		) {
			'use strict';
			Object.defineProperty(__webpack_exports__, '__esModule', { value: true });

			// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"/Users/eduardo/workspace/personal/vue-fixer/node_modules/.cache/cache-loader"}!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/fixer.vue
			//
			//
			//
			//
			//
			//
			var baseUrl = '//data.fixer.io/api';

			function data() {
				return {
					fixerData: {
						success: false,
					},
				};
			}

			function created() {
				var _this = this;

				if (this.fetching) {
					fetch(this.fixerUrl)
						.then(function(r) {
							return r.json();
						})
						.then(function(fixerData) {
							_this.fixerData = fixerData;

							_this.$emit('input', fixerData);
						})
						.catch(function(err) {
							return _this.$emit('error', err);
						});
				}
			}

			function fixerUrl() {
				var url = ''
					.concat(this.protocol, ':')
					.concat(baseUrl, '/')
					.concat(this.feature, '?access_key=')
					.concat(this.apiKey)
					.concat(this.params);
				return url;
			}

			function fetching() {
				var _this2 = this;

				if (this.fetching) {
					fetch(this.fixerUrl)
						.then(function(r) {
							return r.json();
						})
						.then(function(fixerData) {
							return _this2.$emit('input', fixerData);
						})
						.catch(function(err) {
							return _this2.$emit('error', err);
						});
				}
			}

			/* harmony default export */ var fixer = {
				name: 'fixer',
				created: created,
				computed: {
					fixerUrl: fixerUrl,
				},
				data: data,
				props: {
					apiKey: {
						type: String,
						required: true,
					},
					feature: {
						type: String,
						default: 'latest',
					},
					params: {
						type: String,
						default: '&base=EUR&symbols=USD,PEN',
					},
					protocol: {
						type: String,
						default: 'http',
					},
					fetching: {
						type: Boolean,
						default: true,
					},
				},
				watch: {
					apiKey: fetching,
					feature: fetching,
					fetching: fetching,
					params: fetching,
				},
			};
			// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-30ecbda6","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/fixer.vue
			var render = function() {
				var _vm = this;
				var _h = _vm.$createElement;
				var _c = _vm._self._c || _h;
				return _c(
					'div',
					[_vm._t('default', null, { fixer: _vm.fixerData })],
					2
				);
			};
			var staticRenderFns = [];

			// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/component-normalizer.js
			/* globals __VUE_SSR_CONTEXT__ */

			// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
			// This module is a runtime utility for cleaner component module output and will
			// be included in the final webpack user bundle.

			function normalizeComponent(
				scriptExports,
				render,
				staticRenderFns,
				functionalTemplate,
				injectStyles,
				scopeId,
				moduleIdentifier /* server only */,
				shadowMode /* vue-cli only */
			) {
				scriptExports = scriptExports || {};

				// ES6 modules interop
				var type = typeof scriptExports.default;
				if (type === 'object' || type === 'function') {
					scriptExports = scriptExports.default;
				}

				// Vue.extend constructor export interop
				var options =
					typeof scriptExports === 'function'
						? scriptExports.options
						: scriptExports;

				// render functions
				if (render) {
					options.render = render;
					options.staticRenderFns = staticRenderFns;
					options._compiled = true;
				}

				// functional template
				if (functionalTemplate) {
					options.functional = true;
				}

				// scopedId
				if (scopeId) {
					options._scopeId = scopeId;
				}

				var hook;
				if (moduleIdentifier) {
					// server build
					hook = function(context) {
						// 2.3 injection
						context =
							context || // cached call
							(this.$vnode && this.$vnode.ssrContext) || // stateful
							(this.parent &&
								this.parent.$vnode &&
								this.parent.$vnode.ssrContext); // functional
						// 2.2 with runInNewContext: true
						if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
							context = __VUE_SSR_CONTEXT__;
						}
						// inject component styles
						if (injectStyles) {
							injectStyles.call(this, context);
						}
						// register component module identifier for async chunk inferrence
						if (context && context._registeredComponents) {
							context._registeredComponents.add(moduleIdentifier);
						}
					};
					// used by ssr in case component is cached and beforeCreate
					// never gets called
					options._ssrRegister = hook;
				} else if (injectStyles) {
					hook = shadowMode
						? function() {
								injectStyles.call(this, this.$root.$options.shadowRoot);
						  }
						: injectStyles;
				}

				if (hook) {
					if (options.functional) {
						// for template-only hot-reload because in that case the render fn doesn't
						// go through the normalizer
						options._injectStyles = hook;
						// register for functioal component in vue file
						var originalRender = options.render;
						options.render = function renderWithStyleInjection(h, context) {
							hook.call(context);
							return originalRender(h, context);
						};
					} else {
						// inject component registration as beforeCreate hook
						var existing = options.beforeCreate;
						options.beforeCreate = existing
							? [].concat(existing, hook)
							: [hook];
					}
				}

				return {
					exports: scriptExports,
					options: options,
				};
			}

			// CONCATENATED MODULE: ./src/components/fixer.vue
			/* script */

			/* template */

			/* template functional */
			var __vue_template_functional__ = false;
			/* styles */
			var __vue_styles__ = null;
			/* scopeId */
			var __vue_scopeId__ = null;
			/* moduleIdentifier (server only) */
			var __vue_module_identifier__ = null;

			var Component = normalizeComponent(
				fixer,
				render,
				staticRenderFns,
				__vue_template_functional__,
				__vue_styles__,
				__vue_scopeId__,
				__vue_module_identifier__
			);

			/* harmony default export */ var components_fixer = Component.exports;

			// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js

			/* harmony default export */ var entry_lib = (__webpack_exports__[
				'default'
			] = components_fixer);

			/***/
		},

		/******/
	}
)['default'];
//# sourceMappingURL=vueFixer.common.js.map
