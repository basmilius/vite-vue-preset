var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.pnpm/vite-css-modules@1.5.2_postcss@8.4.47_rollup@4.24.0_vite@5.4.10/node_modules/vite-css-modules/dist/lightningcss-BRyKngQ_.mjs
var lightningcss_BRyKngQ_exports = {};
__export(lightningcss_BRyKngQ_exports, {
  transform: () => transform
});
import { transform as transform$1 } from "lightningcss";
var transform;
var init_lightningcss_BRyKngQ = __esm({
  "node_modules/.pnpm/vite-css-modules@1.5.2_postcss@8.4.47_rollup@4.24.0_vite@5.4.10/node_modules/vite-css-modules/dist/lightningcss-BRyKngQ_.mjs"() {
    transform = (code, id, options, generateSourceMap) => {
      const transformed = transform$1({
        ...options,
        filename: id,
        code: Buffer.from(code),
        cssModules: options.cssModules || true,
        sourceMap: generateSourceMap
      });
      const exports = Object.fromEntries(
        Object.entries(
          // `exports` is defined if cssModules is true
          transformed.exports
        ).sort(
          // Cheap alphabetical sort (localCompare is expensive)
          ([a], [b]) => a < b ? -1 : a > b ? 1 : 0
        )
      );
      const map = transformed.map ? JSON.parse(Buffer.from(transformed.map).toString()) : void 0;
      return {
        code: transformed.code.toString(),
        map,
        exports,
        // If `dashedIdents` is enabled
        // https://github.com/parcel-bundler/lightningcss/blob/v1.23.0/node/index.d.ts#L288-L289
        references: transformed.references
      };
    };
  }
});

// node_modules/.pnpm/icss-utils@5.1.0_postcss@8.4.47/node_modules/icss-utils/src/replaceValueSymbols.js
var require_replaceValueSymbols = __commonJS({
  "node_modules/.pnpm/icss-utils@5.1.0_postcss@8.4.47/node_modules/icss-utils/src/replaceValueSymbols.js"(exports, module) {
    var matchValueName = /[$]?[\w-]+/g;
    var replaceValueSymbols = (value, replacements) => {
      let matches;
      while (matches = matchValueName.exec(value)) {
        const replacement = replacements[matches[0]];
        if (replacement) {
          value = value.slice(0, matches.index) + replacement + value.slice(matchValueName.lastIndex);
          matchValueName.lastIndex -= matches[0].length - replacement.length;
        }
      }
      return value;
    };
    module.exports = replaceValueSymbols;
  }
});

// node_modules/.pnpm/icss-utils@5.1.0_postcss@8.4.47/node_modules/icss-utils/src/replaceSymbols.js
var require_replaceSymbols = __commonJS({
  "node_modules/.pnpm/icss-utils@5.1.0_postcss@8.4.47/node_modules/icss-utils/src/replaceSymbols.js"(exports, module) {
    var replaceValueSymbols = require_replaceValueSymbols();
    var replaceSymbols = (css, replacements) => {
      css.walk((node) => {
        if (node.type === "decl" && node.value) {
          node.value = replaceValueSymbols(node.value.toString(), replacements);
        } else if (node.type === "rule" && node.selector) {
          node.selector = replaceValueSymbols(
            node.selector.toString(),
            replacements
          );
        } else if (node.type === "atrule" && node.params) {
          node.params = replaceValueSymbols(node.params.toString(), replacements);
        }
      });
    };
    module.exports = replaceSymbols;
  }
});

// node_modules/.pnpm/icss-utils@5.1.0_postcss@8.4.47/node_modules/icss-utils/src/extractICSS.js
var require_extractICSS = __commonJS({
  "node_modules/.pnpm/icss-utils@5.1.0_postcss@8.4.47/node_modules/icss-utils/src/extractICSS.js"(exports, module) {
    var importPattern = /^:import\(("[^"]*"|'[^']*'|[^"']+)\)$/;
    var balancedQuotes = /^("[^"]*"|'[^']*'|[^"']+)$/;
    var getDeclsObject = (rule) => {
      const object = {};
      rule.walkDecls((decl) => {
        const before = decl.raws.before ? decl.raws.before.trim() : "";
        object[before + decl.prop] = decl.value;
      });
      return object;
    };
    var extractICSS2 = (css, removeRules = true, mode = "auto") => {
      const icssImports = {};
      const icssExports = {};
      function addImports(node, path2) {
        const unquoted = path2.replace(/'|"/g, "");
        icssImports[unquoted] = Object.assign(
          icssImports[unquoted] || {},
          getDeclsObject(node)
        );
        if (removeRules) {
          node.remove();
        }
      }
      function addExports(node) {
        Object.assign(icssExports, getDeclsObject(node));
        if (removeRules) {
          node.remove();
        }
      }
      css.each((node) => {
        if (node.type === "rule" && mode !== "at-rule") {
          if (node.selector.slice(0, 7) === ":import") {
            const matches = importPattern.exec(node.selector);
            if (matches) {
              addImports(node, matches[1]);
            }
          }
          if (node.selector === ":export") {
            addExports(node);
          }
        }
        if (node.type === "atrule" && mode !== "rule") {
          if (node.name === "icss-import") {
            const matches = balancedQuotes.exec(node.params);
            if (matches) {
              addImports(node, matches[1]);
            }
          }
          if (node.name === "icss-export") {
            addExports(node);
          }
        }
      });
      return { icssImports, icssExports };
    };
    module.exports = extractICSS2;
  }
});

// node_modules/.pnpm/icss-utils@5.1.0_postcss@8.4.47/node_modules/icss-utils/src/createICSSRules.js
var require_createICSSRules = __commonJS({
  "node_modules/.pnpm/icss-utils@5.1.0_postcss@8.4.47/node_modules/icss-utils/src/createICSSRules.js"(exports, module) {
    var createImports = (imports, postcss2, mode = "rule") => {
      return Object.keys(imports).map((path2) => {
        const aliases = imports[path2];
        const declarations = Object.keys(aliases).map(
          (key) => postcss2.decl({
            prop: key,
            value: aliases[key],
            raws: { before: "\n  " }
          })
        );
        const hasDeclarations = declarations.length > 0;
        const rule = mode === "rule" ? postcss2.rule({
          selector: `:import('${path2}')`,
          raws: { after: hasDeclarations ? "\n" : "" }
        }) : postcss2.atRule({
          name: "icss-import",
          params: `'${path2}'`,
          raws: { after: hasDeclarations ? "\n" : "" }
        });
        if (hasDeclarations) {
          rule.append(declarations);
        }
        return rule;
      });
    };
    var createExports = (exports2, postcss2, mode = "rule") => {
      const declarations = Object.keys(exports2).map(
        (key) => postcss2.decl({
          prop: key,
          value: exports2[key],
          raws: { before: "\n  " }
        })
      );
      if (declarations.length === 0) {
        return [];
      }
      const rule = mode === "rule" ? postcss2.rule({
        selector: `:export`,
        raws: { after: "\n" }
      }) : postcss2.atRule({
        name: "icss-export",
        raws: { after: "\n" }
      });
      rule.append(declarations);
      return [rule];
    };
    var createICSSRules = (imports, exports2, postcss2, mode) => [
      ...createImports(imports, postcss2, mode),
      ...createExports(exports2, postcss2, mode)
    ];
    module.exports = createICSSRules;
  }
});

// node_modules/.pnpm/icss-utils@5.1.0_postcss@8.4.47/node_modules/icss-utils/src/index.js
var require_src = __commonJS({
  "node_modules/.pnpm/icss-utils@5.1.0_postcss@8.4.47/node_modules/icss-utils/src/index.js"(exports, module) {
    var replaceValueSymbols = require_replaceValueSymbols();
    var replaceSymbols = require_replaceSymbols();
    var extractICSS2 = require_extractICSS();
    var createICSSRules = require_createICSSRules();
    module.exports = {
      replaceValueSymbols,
      replaceSymbols,
      extractICSS: extractICSS2,
      createICSSRules
    };
  }
});

// node_modules/.pnpm/vite-css-modules@1.5.2_postcss@8.4.47_rollup@4.24.0_vite@5.4.10/node_modules/vite-css-modules/dist/index-Bfui3y_Y.mjs
var index_Bfui3y_Y_exports = {};
__export(index_Bfui3y_Y_exports, {
  transform: () => transform2
});
import postcssModulesValues from "postcss-modules-values";
import postcssModulesLocalByDefault from "postcss-modules-local-by-default";
import postcssModulesExtractImports from "postcss-modules-extract-imports";
import postcssModulesScope from "postcss-modules-scope";
import genericNames from "generic-names";
import postcss from "postcss";
var import_icss_utils, processExracted, postcssExtractIcss, defaultScopedName, transform2;
var init_index_Bfui3y_Y = __esm({
  "node_modules/.pnpm/vite-css-modules@1.5.2_postcss@8.4.47_rollup@4.24.0_vite@5.4.10/node_modules/vite-css-modules/dist/index-Bfui3y_Y.mjs"() {
    import_icss_utils = __toESM(require_src(), 1);
    processExracted = (icssExports, dependencies, localClasses) => {
      const exports = {};
      const references = {};
      for (const [exportedAs, value] of Object.entries(icssExports)) {
        const hasLocalClass = localClasses.some((localClass) => value.includes(localClass));
        if (hasLocalClass) {
          const [firstClass, ...composed] = value.split(" ");
          exports[exportedAs] = {
            name: firstClass,
            composes: composed.map((className2) => {
              if (localClasses.includes(className2)) {
                return {
                  type: "local",
                  name: className2
                };
              }
              if (dependencies.has(className2)) {
                return dependencies.get(className2);
              }
              return {
                type: "global",
                name: className2
              };
            })
          };
        } else if (dependencies.has(value)) {
          references[value] = dependencies.get(value);
        } else {
          exports[exportedAs] = value;
        }
      }
      return {
        exports,
        references
      };
    };
    postcssExtractIcss = (options) => ({
      postcssPlugin: "extract-icss",
      OnceExit: (root2) => {
        const { icssImports, icssExports } = (0, import_icss_utils.extractICSS)(root2);
        const dependencies = new Map(
          Object.entries(icssImports).flatMap(
            ([filePath, fileImports]) => Object.entries(fileImports).map(([hash, name]) => [
              hash,
              Object.freeze({
                type: "dependency",
                name,
                specifier: filePath
              })
            ])
          )
        );
        const extracted = processExracted(
          icssExports,
          dependencies,
          options.localClasses
        );
        options.onModuleExports(extracted);
      }
    });
    postcssExtractIcss.postcss = true;
    defaultScopedName = "_[local]_[hash:7]";
    transform2 = (code, id, options, generateSourceMap) => {
      const generateScopedName = typeof options.generateScopedName === "function" ? options.generateScopedName : genericNames(options.generateScopedName ?? defaultScopedName, {
        hashPrefix: options.hashPrefix
      });
      const isGlobal = options.globalModulePaths?.some((pattern) => pattern.test(id));
      const localClasses = [];
      let extracted;
      const processed = postcss([
        postcssModulesValues,
        postcssModulesLocalByDefault({
          mode: isGlobal ? "global" : options.scopeBehaviour
        }),
        // Declares imports from composes
        postcssModulesExtractImports(),
        // Resolves & removes composes
        postcssModulesScope({
          exportGlobals: options.exportGlobals,
          generateScopedName: (exportName, resourceFile, rawCss, _node) => {
            const scopedName = generateScopedName(
              exportName,
              resourceFile,
              rawCss
              /* _node */
            );
            localClasses.push(scopedName);
            return scopedName;
          }
        }),
        postcssExtractIcss({
          localClasses,
          onModuleExports: (_extracted) => {
            extracted = _extracted;
          }
        })
      ]).process(code, {
        from: id,
        map: generateSourceMap ? {
          inline: false,
          annotation: false,
          sourcesContent: true
        } : false
      });
      return {
        code: processed.css,
        map: processed.map?.toJSON(),
        ...extracted
      };
    };
  }
});

// node_modules/.pnpm/css-class-generator@2.0.0/node_modules/css-class-generator/index.js
var require_css_class_generator = __commonJS({
  "node_modules/.pnpm/css-class-generator@2.0.0/node_modules/css-class-generator/index.js"(exports, module) {
    var chars2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789-";
    var numChars = 64;
    var validFirstChars = 53;
    var twoCharPermutations = validFirstChars + validFirstChars * numChars;
    module.exports = (index, prefix) => {
      if (process.env.NODE_ENV !== "production") {
        const validIdent = /^-?[_a-z][_a-z0-9-]*$/i;
        if (prefix != null && prefix !== "-" && !validIdent.test(prefix)) {
          console.warn(`Expected prefix (${prefix}) to be a valid css class name`);
        }
      }
      let i;
      let current;
      if (prefix == null || prefix === "") {
        if (index < validFirstChars) return chars2[index];
        const _index = index - validFirstChars;
        const c = _index % twoCharPermutations;
        if (c < validFirstChars) {
          current = "-" + chars2[c];
        } else {
          const _c = c - validFirstChars;
          const c0 = _c % validFirstChars;
          const c1 = _c / validFirstChars | 0;
          current = chars2[c0] + chars2[c1];
        }
        i = _index / twoCharPermutations | 0;
      } else if (prefix === "-") {
        const c = index % validFirstChars;
        current = "-" + chars2[c];
        i = index / validFirstChars | 0;
      } else {
        if (index === 0) return prefix + chars2[0];
        current = prefix;
        i = index;
      }
      let base = numChars;
      while (i > 0) {
        const c = i % numChars;
        current += chars2[c];
        i = i / numChars | 0;
        base = base * numChars;
      }
      return current;
    };
  }
});

// index.ts
import { createHash } from "node:crypto";
import { resolve as resolve4 } from "node:path";

// node_modules/.pnpm/vite-css-modules@1.5.2_postcss@8.4.47_rollup@4.24.0_vite@5.4.10/node_modules/vite-css-modules/dist/index.mjs
import path from "node:path";
import { readFile, access, writeFile } from "fs/promises";

// node_modules/.pnpm/@rollup+pluginutils@5.1.3_rollup@4.24.0/node_modules/@rollup/pluginutils/dist/es/index.js
import { extname, win32, posix, isAbsolute, resolve } from "path";
import pm from "picomatch";
function isArray(arg) {
  return Array.isArray(arg);
}
function ensureArray(thing) {
  if (isArray(thing))
    return thing;
  if (thing == null)
    return [];
  return [thing];
}
var normalizePathRegExp = new RegExp(`\\${win32.sep}`, "g");
var normalizePath = function normalizePath2(filename) {
  return filename.replace(normalizePathRegExp, posix.sep);
};
function getMatcherString(id, resolutionBase) {
  if (resolutionBase === false || isAbsolute(id) || id.startsWith("**")) {
    return normalizePath(id);
  }
  const basePath = normalizePath(resolve(resolutionBase || "")).replace(/[-^$*+?.()|[\]{}]/g, "\\$&");
  return posix.join(basePath, normalizePath(id));
}
var createFilter = function createFilter2(include, exclude, options) {
  const resolutionBase = options && options.resolve;
  const getMatcher = (id) => id instanceof RegExp ? id : {
    test: (what) => {
      const pattern = getMatcherString(id, resolutionBase);
      const fn = pm(pattern, { dot: true });
      const result = fn(what);
      return result;
    }
  };
  const includeMatchers = ensureArray(include).map(getMatcher);
  const excludeMatchers = ensureArray(exclude).map(getMatcher);
  if (!includeMatchers.length && !excludeMatchers.length)
    return (id) => typeof id === "string" && !id.includes("\0");
  return function result(id) {
    if (typeof id !== "string")
      return false;
    if (id.includes("\0"))
      return false;
    const pathId = normalizePath(id);
    for (let i = 0; i < excludeMatchers.length; ++i) {
      const matcher = excludeMatchers[i];
      if (matcher.test(pathId))
        return false;
    }
    for (let i = 0; i < includeMatchers.length; ++i) {
      const matcher = includeMatchers[i];
      if (matcher.test(pathId))
        return true;
    }
    return !includeMatchers.length;
  };
};
var reservedWords = "break case class catch const continue debugger default delete do else export extends finally for function if import in instanceof let new return super switch this throw try typeof var void while with yield enum await implements package protected static interface private public";
var builtins = "arguments Infinity NaN undefined null true false eval uneval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Symbol Error EvalError InternalError RangeError ReferenceError SyntaxError TypeError URIError Number Math Date String RegExp Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array Map Set WeakMap WeakSet SIMD ArrayBuffer DataView JSON Promise Generator GeneratorFunction Reflect Proxy Intl";
var forbiddenIdentifiers = new Set(`${reservedWords} ${builtins}`.split(" "));
forbiddenIdentifiers.add("");
var makeLegalIdentifier = function makeLegalIdentifier2(str) {
  let identifier = str.replace(/-(\w)/g, (_, letter) => letter.toUpperCase()).replace(/[^$_a-zA-Z0-9]/g, "_");
  if (/\d/.test(identifier[0]) || forbiddenIdentifiers.has(identifier)) {
    identifier = `_${identifier}`;
  }
  return identifier || "_";
};
var hasStringIsWellFormed = "isWellFormed" in String.prototype;

// node_modules/.pnpm/@jridgewell+sourcemap-codec@1.5.0/node_modules/@jridgewell/sourcemap-codec/dist/sourcemap-codec.mjs
var comma = ",".charCodeAt(0);
var semicolon = ";".charCodeAt(0);
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var intToChar = new Uint8Array(64);
var charToInt = new Uint8Array(128);
for (let i = 0; i < chars.length; i++) {
  const c = chars.charCodeAt(i);
  intToChar[i] = c;
  charToInt[c] = i;
}
function decodeInteger(reader, relative) {
  let value = 0;
  let shift = 0;
  let integer = 0;
  do {
    const c = reader.next();
    integer = charToInt[c];
    value |= (integer & 31) << shift;
    shift += 5;
  } while (integer & 32);
  const shouldNegate = value & 1;
  value >>>= 1;
  if (shouldNegate) {
    value = -2147483648 | -value;
  }
  return relative + value;
}
function encodeInteger(builder, num, relative) {
  let delta = num - relative;
  delta = delta < 0 ? -delta << 1 | 1 : delta << 1;
  do {
    let clamped = delta & 31;
    delta >>>= 5;
    if (delta > 0)
      clamped |= 32;
    builder.write(intToChar[clamped]);
  } while (delta > 0);
  return num;
}
function hasMoreVlq(reader, max) {
  if (reader.pos >= max)
    return false;
  return reader.peek() !== comma;
}
var bufLength = 1024 * 16;
var td = typeof TextDecoder !== "undefined" ? /* @__PURE__ */ new TextDecoder() : typeof Buffer !== "undefined" ? {
  decode(buf) {
    const out = Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength);
    return out.toString();
  }
} : {
  decode(buf) {
    let out = "";
    for (let i = 0; i < buf.length; i++) {
      out += String.fromCharCode(buf[i]);
    }
    return out;
  }
};
var StringWriter = class {
  constructor() {
    this.pos = 0;
    this.out = "";
    this.buffer = new Uint8Array(bufLength);
  }
  write(v) {
    const { buffer } = this;
    buffer[this.pos++] = v;
    if (this.pos === bufLength) {
      this.out += td.decode(buffer);
      this.pos = 0;
    }
  }
  flush() {
    const { buffer, out, pos } = this;
    return pos > 0 ? out + td.decode(buffer.subarray(0, pos)) : out;
  }
};
var StringReader = class {
  constructor(buffer) {
    this.pos = 0;
    this.buffer = buffer;
  }
  next() {
    return this.buffer.charCodeAt(this.pos++);
  }
  peek() {
    return this.buffer.charCodeAt(this.pos);
  }
  indexOf(char) {
    const { buffer, pos } = this;
    const idx = buffer.indexOf(char, pos);
    return idx === -1 ? buffer.length : idx;
  }
};
function decode(mappings) {
  const { length } = mappings;
  const reader = new StringReader(mappings);
  const decoded = [];
  let genColumn = 0;
  let sourcesIndex = 0;
  let sourceLine = 0;
  let sourceColumn = 0;
  let namesIndex = 0;
  do {
    const semi = reader.indexOf(";");
    const line = [];
    let sorted = true;
    let lastCol = 0;
    genColumn = 0;
    while (reader.pos < semi) {
      let seg;
      genColumn = decodeInteger(reader, genColumn);
      if (genColumn < lastCol)
        sorted = false;
      lastCol = genColumn;
      if (hasMoreVlq(reader, semi)) {
        sourcesIndex = decodeInteger(reader, sourcesIndex);
        sourceLine = decodeInteger(reader, sourceLine);
        sourceColumn = decodeInteger(reader, sourceColumn);
        if (hasMoreVlq(reader, semi)) {
          namesIndex = decodeInteger(reader, namesIndex);
          seg = [genColumn, sourcesIndex, sourceLine, sourceColumn, namesIndex];
        } else {
          seg = [genColumn, sourcesIndex, sourceLine, sourceColumn];
        }
      } else {
        seg = [genColumn];
      }
      line.push(seg);
      reader.pos++;
    }
    if (!sorted)
      sort(line);
    decoded.push(line);
    reader.pos = semi + 1;
  } while (reader.pos <= length);
  return decoded;
}
function sort(line) {
  line.sort(sortComparator);
}
function sortComparator(a, b) {
  return a[0] - b[0];
}
function encode(decoded) {
  const writer = new StringWriter();
  let sourcesIndex = 0;
  let sourceLine = 0;
  let sourceColumn = 0;
  let namesIndex = 0;
  for (let i = 0; i < decoded.length; i++) {
    const line = decoded[i];
    if (i > 0)
      writer.write(semicolon);
    if (line.length === 0)
      continue;
    let genColumn = 0;
    for (let j = 0; j < line.length; j++) {
      const segment = line[j];
      if (j > 0)
        writer.write(comma);
      genColumn = encodeInteger(writer, segment[0], genColumn);
      if (segment.length === 1)
        continue;
      sourcesIndex = encodeInteger(writer, segment[1], sourcesIndex);
      sourceLine = encodeInteger(writer, segment[2], sourceLine);
      sourceColumn = encodeInteger(writer, segment[3], sourceColumn);
      if (segment.length === 4)
        continue;
      namesIndex = encodeInteger(writer, segment[4], namesIndex);
    }
  }
  return writer.flush();
}

// node_modules/.pnpm/magic-string@0.30.12/node_modules/magic-string/dist/magic-string.es.mjs
var BitSet = class _BitSet {
  constructor(arg) {
    this.bits = arg instanceof _BitSet ? arg.bits.slice() : [];
  }
  add(n2) {
    this.bits[n2 >> 5] |= 1 << (n2 & 31);
  }
  has(n2) {
    return !!(this.bits[n2 >> 5] & 1 << (n2 & 31));
  }
};
var Chunk = class _Chunk {
  constructor(start, end, content) {
    this.start = start;
    this.end = end;
    this.original = content;
    this.intro = "";
    this.outro = "";
    this.content = content;
    this.storeName = false;
    this.edited = false;
    {
      this.previous = null;
      this.next = null;
    }
  }
  appendLeft(content) {
    this.outro += content;
  }
  appendRight(content) {
    this.intro = this.intro + content;
  }
  clone() {
    const chunk = new _Chunk(this.start, this.end, this.original);
    chunk.intro = this.intro;
    chunk.outro = this.outro;
    chunk.content = this.content;
    chunk.storeName = this.storeName;
    chunk.edited = this.edited;
    return chunk;
  }
  contains(index) {
    return this.start < index && index < this.end;
  }
  eachNext(fn) {
    let chunk = this;
    while (chunk) {
      fn(chunk);
      chunk = chunk.next;
    }
  }
  eachPrevious(fn) {
    let chunk = this;
    while (chunk) {
      fn(chunk);
      chunk = chunk.previous;
    }
  }
  edit(content, storeName, contentOnly) {
    this.content = content;
    if (!contentOnly) {
      this.intro = "";
      this.outro = "";
    }
    this.storeName = storeName;
    this.edited = true;
    return this;
  }
  prependLeft(content) {
    this.outro = content + this.outro;
  }
  prependRight(content) {
    this.intro = content + this.intro;
  }
  reset() {
    this.intro = "";
    this.outro = "";
    if (this.edited) {
      this.content = this.original;
      this.storeName = false;
      this.edited = false;
    }
  }
  split(index) {
    const sliceIndex = index - this.start;
    const originalBefore = this.original.slice(0, sliceIndex);
    const originalAfter = this.original.slice(sliceIndex);
    this.original = originalBefore;
    const newChunk = new _Chunk(index, this.end, originalAfter);
    newChunk.outro = this.outro;
    this.outro = "";
    this.end = index;
    if (this.edited) {
      newChunk.edit("", false);
      this.content = "";
    } else {
      this.content = originalBefore;
    }
    newChunk.next = this.next;
    if (newChunk.next) newChunk.next.previous = newChunk;
    newChunk.previous = this;
    this.next = newChunk;
    return newChunk;
  }
  toString() {
    return this.intro + this.content + this.outro;
  }
  trimEnd(rx) {
    this.outro = this.outro.replace(rx, "");
    if (this.outro.length) return true;
    const trimmed = this.content.replace(rx, "");
    if (trimmed.length) {
      if (trimmed !== this.content) {
        this.split(this.start + trimmed.length).edit("", void 0, true);
        if (this.edited) {
          this.edit(trimmed, this.storeName, true);
        }
      }
      return true;
    } else {
      this.edit("", void 0, true);
      this.intro = this.intro.replace(rx, "");
      if (this.intro.length) return true;
    }
  }
  trimStart(rx) {
    this.intro = this.intro.replace(rx, "");
    if (this.intro.length) return true;
    const trimmed = this.content.replace(rx, "");
    if (trimmed.length) {
      if (trimmed !== this.content) {
        const newChunk = this.split(this.end - trimmed.length);
        if (this.edited) {
          newChunk.edit(trimmed, this.storeName, true);
        }
        this.edit("", void 0, true);
      }
      return true;
    } else {
      this.edit("", void 0, true);
      this.outro = this.outro.replace(rx, "");
      if (this.outro.length) return true;
    }
  }
};
function getBtoa() {
  if (typeof globalThis !== "undefined" && typeof globalThis.btoa === "function") {
    return (str) => globalThis.btoa(unescape(encodeURIComponent(str)));
  } else if (typeof Buffer === "function") {
    return (str) => Buffer.from(str, "utf-8").toString("base64");
  } else {
    return () => {
      throw new Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.");
    };
  }
}
var btoa = /* @__PURE__ */ getBtoa();
var SourceMap = class {
  constructor(properties) {
    this.version = 3;
    this.file = properties.file;
    this.sources = properties.sources;
    this.sourcesContent = properties.sourcesContent;
    this.names = properties.names;
    this.mappings = encode(properties.mappings);
    if (typeof properties.x_google_ignoreList !== "undefined") {
      this.x_google_ignoreList = properties.x_google_ignoreList;
    }
  }
  toString() {
    return JSON.stringify(this);
  }
  toUrl() {
    return "data:application/json;charset=utf-8;base64," + btoa(this.toString());
  }
};
function guessIndent(code) {
  const lines = code.split("\n");
  const tabbed = lines.filter((line) => /^\t+/.test(line));
  const spaced = lines.filter((line) => /^ {2,}/.test(line));
  if (tabbed.length === 0 && spaced.length === 0) {
    return null;
  }
  if (tabbed.length >= spaced.length) {
    return "	";
  }
  const min = spaced.reduce((previous, current) => {
    const numSpaces = /^ +/.exec(current)[0].length;
    return Math.min(numSpaces, previous);
  }, Infinity);
  return new Array(min + 1).join(" ");
}
function getRelativePath(from, to) {
  const fromParts = from.split(/[/\\]/);
  const toParts = to.split(/[/\\]/);
  fromParts.pop();
  while (fromParts[0] === toParts[0]) {
    fromParts.shift();
    toParts.shift();
  }
  if (fromParts.length) {
    let i = fromParts.length;
    while (i--) fromParts[i] = "..";
  }
  return fromParts.concat(toParts).join("/");
}
var toString = Object.prototype.toString;
function isObject(thing) {
  return toString.call(thing) === "[object Object]";
}
function getLocator(source) {
  const originalLines = source.split("\n");
  const lineOffsets = [];
  for (let i = 0, pos = 0; i < originalLines.length; i++) {
    lineOffsets.push(pos);
    pos += originalLines[i].length + 1;
  }
  return function locate(index) {
    let i = 0;
    let j = lineOffsets.length;
    while (i < j) {
      const m = i + j >> 1;
      if (index < lineOffsets[m]) {
        j = m;
      } else {
        i = m + 1;
      }
    }
    const line = i - 1;
    const column = index - lineOffsets[line];
    return { line, column };
  };
}
var wordRegex = /\w/;
var Mappings = class {
  constructor(hires) {
    this.hires = hires;
    this.generatedCodeLine = 0;
    this.generatedCodeColumn = 0;
    this.raw = [];
    this.rawSegments = this.raw[this.generatedCodeLine] = [];
    this.pending = null;
  }
  addEdit(sourceIndex, content, loc, nameIndex) {
    if (content.length) {
      const contentLengthMinusOne = content.length - 1;
      let contentLineEnd = content.indexOf("\n", 0);
      let previousContentLineEnd = -1;
      while (contentLineEnd >= 0 && contentLengthMinusOne > contentLineEnd) {
        const segment2 = [this.generatedCodeColumn, sourceIndex, loc.line, loc.column];
        if (nameIndex >= 0) {
          segment2.push(nameIndex);
        }
        this.rawSegments.push(segment2);
        this.generatedCodeLine += 1;
        this.raw[this.generatedCodeLine] = this.rawSegments = [];
        this.generatedCodeColumn = 0;
        previousContentLineEnd = contentLineEnd;
        contentLineEnd = content.indexOf("\n", contentLineEnd + 1);
      }
      const segment = [this.generatedCodeColumn, sourceIndex, loc.line, loc.column];
      if (nameIndex >= 0) {
        segment.push(nameIndex);
      }
      this.rawSegments.push(segment);
      this.advance(content.slice(previousContentLineEnd + 1));
    } else if (this.pending) {
      this.rawSegments.push(this.pending);
      this.advance(content);
    }
    this.pending = null;
  }
  addUneditedChunk(sourceIndex, chunk, original, loc, sourcemapLocations) {
    let originalCharIndex = chunk.start;
    let first = true;
    let charInHiresBoundary = false;
    while (originalCharIndex < chunk.end) {
      if (original[originalCharIndex] === "\n") {
        loc.line += 1;
        loc.column = 0;
        this.generatedCodeLine += 1;
        this.raw[this.generatedCodeLine] = this.rawSegments = [];
        this.generatedCodeColumn = 0;
        first = true;
      } else {
        if (this.hires || first || sourcemapLocations.has(originalCharIndex)) {
          const segment = [this.generatedCodeColumn, sourceIndex, loc.line, loc.column];
          if (this.hires === "boundary") {
            if (wordRegex.test(original[originalCharIndex])) {
              if (!charInHiresBoundary) {
                this.rawSegments.push(segment);
                charInHiresBoundary = true;
              }
            } else {
              this.rawSegments.push(segment);
              charInHiresBoundary = false;
            }
          } else {
            this.rawSegments.push(segment);
          }
        }
        loc.column += 1;
        this.generatedCodeColumn += 1;
        first = false;
      }
      originalCharIndex += 1;
    }
    this.pending = null;
  }
  advance(str) {
    if (!str) return;
    const lines = str.split("\n");
    if (lines.length > 1) {
      for (let i = 0; i < lines.length - 1; i++) {
        this.generatedCodeLine++;
        this.raw[this.generatedCodeLine] = this.rawSegments = [];
      }
      this.generatedCodeColumn = 0;
    }
    this.generatedCodeColumn += lines[lines.length - 1].length;
  }
};
var n = "\n";
var warned = {
  insertLeft: false,
  insertRight: false,
  storeName: false
};
var MagicString = class _MagicString {
  constructor(string, options = {}) {
    const chunk = new Chunk(0, string.length, string);
    Object.defineProperties(this, {
      original: { writable: true, value: string },
      outro: { writable: true, value: "" },
      intro: { writable: true, value: "" },
      firstChunk: { writable: true, value: chunk },
      lastChunk: { writable: true, value: chunk },
      lastSearchedChunk: { writable: true, value: chunk },
      byStart: { writable: true, value: {} },
      byEnd: { writable: true, value: {} },
      filename: { writable: true, value: options.filename },
      indentExclusionRanges: { writable: true, value: options.indentExclusionRanges },
      sourcemapLocations: { writable: true, value: new BitSet() },
      storedNames: { writable: true, value: {} },
      indentStr: { writable: true, value: void 0 },
      ignoreList: { writable: true, value: options.ignoreList }
    });
    this.byStart[0] = chunk;
    this.byEnd[string.length] = chunk;
  }
  addSourcemapLocation(char) {
    this.sourcemapLocations.add(char);
  }
  append(content) {
    if (typeof content !== "string") throw new TypeError("outro content must be a string");
    this.outro += content;
    return this;
  }
  appendLeft(index, content) {
    if (typeof content !== "string") throw new TypeError("inserted content must be a string");
    this._split(index);
    const chunk = this.byEnd[index];
    if (chunk) {
      chunk.appendLeft(content);
    } else {
      this.intro += content;
    }
    return this;
  }
  appendRight(index, content) {
    if (typeof content !== "string") throw new TypeError("inserted content must be a string");
    this._split(index);
    const chunk = this.byStart[index];
    if (chunk) {
      chunk.appendRight(content);
    } else {
      this.outro += content;
    }
    return this;
  }
  clone() {
    const cloned = new _MagicString(this.original, { filename: this.filename });
    let originalChunk = this.firstChunk;
    let clonedChunk = cloned.firstChunk = cloned.lastSearchedChunk = originalChunk.clone();
    while (originalChunk) {
      cloned.byStart[clonedChunk.start] = clonedChunk;
      cloned.byEnd[clonedChunk.end] = clonedChunk;
      const nextOriginalChunk = originalChunk.next;
      const nextClonedChunk = nextOriginalChunk && nextOriginalChunk.clone();
      if (nextClonedChunk) {
        clonedChunk.next = nextClonedChunk;
        nextClonedChunk.previous = clonedChunk;
        clonedChunk = nextClonedChunk;
      }
      originalChunk = nextOriginalChunk;
    }
    cloned.lastChunk = clonedChunk;
    if (this.indentExclusionRanges) {
      cloned.indentExclusionRanges = this.indentExclusionRanges.slice();
    }
    cloned.sourcemapLocations = new BitSet(this.sourcemapLocations);
    cloned.intro = this.intro;
    cloned.outro = this.outro;
    return cloned;
  }
  generateDecodedMap(options) {
    options = options || {};
    const sourceIndex = 0;
    const names = Object.keys(this.storedNames);
    const mappings = new Mappings(options.hires);
    const locate = getLocator(this.original);
    if (this.intro) {
      mappings.advance(this.intro);
    }
    this.firstChunk.eachNext((chunk) => {
      const loc = locate(chunk.start);
      if (chunk.intro.length) mappings.advance(chunk.intro);
      if (chunk.edited) {
        mappings.addEdit(
          sourceIndex,
          chunk.content,
          loc,
          chunk.storeName ? names.indexOf(chunk.original) : -1
        );
      } else {
        mappings.addUneditedChunk(sourceIndex, chunk, this.original, loc, this.sourcemapLocations);
      }
      if (chunk.outro.length) mappings.advance(chunk.outro);
    });
    return {
      file: options.file ? options.file.split(/[/\\]/).pop() : void 0,
      sources: [
        options.source ? getRelativePath(options.file || "", options.source) : options.file || ""
      ],
      sourcesContent: options.includeContent ? [this.original] : void 0,
      names,
      mappings: mappings.raw,
      x_google_ignoreList: this.ignoreList ? [sourceIndex] : void 0
    };
  }
  generateMap(options) {
    return new SourceMap(this.generateDecodedMap(options));
  }
  _ensureindentStr() {
    if (this.indentStr === void 0) {
      this.indentStr = guessIndent(this.original);
    }
  }
  _getRawIndentString() {
    this._ensureindentStr();
    return this.indentStr;
  }
  getIndentString() {
    this._ensureindentStr();
    return this.indentStr === null ? "	" : this.indentStr;
  }
  indent(indentStr, options) {
    const pattern = /^[^\r\n]/gm;
    if (isObject(indentStr)) {
      options = indentStr;
      indentStr = void 0;
    }
    if (indentStr === void 0) {
      this._ensureindentStr();
      indentStr = this.indentStr || "	";
    }
    if (indentStr === "") return this;
    options = options || {};
    const isExcluded = {};
    if (options.exclude) {
      const exclusions = typeof options.exclude[0] === "number" ? [options.exclude] : options.exclude;
      exclusions.forEach((exclusion) => {
        for (let i = exclusion[0]; i < exclusion[1]; i += 1) {
          isExcluded[i] = true;
        }
      });
    }
    let shouldIndentNextCharacter = options.indentStart !== false;
    const replacer = (match) => {
      if (shouldIndentNextCharacter) return `${indentStr}${match}`;
      shouldIndentNextCharacter = true;
      return match;
    };
    this.intro = this.intro.replace(pattern, replacer);
    let charIndex = 0;
    let chunk = this.firstChunk;
    while (chunk) {
      const end = chunk.end;
      if (chunk.edited) {
        if (!isExcluded[charIndex]) {
          chunk.content = chunk.content.replace(pattern, replacer);
          if (chunk.content.length) {
            shouldIndentNextCharacter = chunk.content[chunk.content.length - 1] === "\n";
          }
        }
      } else {
        charIndex = chunk.start;
        while (charIndex < end) {
          if (!isExcluded[charIndex]) {
            const char = this.original[charIndex];
            if (char === "\n") {
              shouldIndentNextCharacter = true;
            } else if (char !== "\r" && shouldIndentNextCharacter) {
              shouldIndentNextCharacter = false;
              if (charIndex === chunk.start) {
                chunk.prependRight(indentStr);
              } else {
                this._splitChunk(chunk, charIndex);
                chunk = chunk.next;
                chunk.prependRight(indentStr);
              }
            }
          }
          charIndex += 1;
        }
      }
      charIndex = chunk.end;
      chunk = chunk.next;
    }
    this.outro = this.outro.replace(pattern, replacer);
    return this;
  }
  insert() {
    throw new Error(
      "magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)"
    );
  }
  insertLeft(index, content) {
    if (!warned.insertLeft) {
      console.warn(
        "magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead"
      );
      warned.insertLeft = true;
    }
    return this.appendLeft(index, content);
  }
  insertRight(index, content) {
    if (!warned.insertRight) {
      console.warn(
        "magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead"
      );
      warned.insertRight = true;
    }
    return this.prependRight(index, content);
  }
  move(start, end, index) {
    if (index >= start && index <= end) throw new Error("Cannot move a selection inside itself");
    this._split(start);
    this._split(end);
    this._split(index);
    const first = this.byStart[start];
    const last = this.byEnd[end];
    const oldLeft = first.previous;
    const oldRight = last.next;
    const newRight = this.byStart[index];
    if (!newRight && last === this.lastChunk) return this;
    const newLeft = newRight ? newRight.previous : this.lastChunk;
    if (oldLeft) oldLeft.next = oldRight;
    if (oldRight) oldRight.previous = oldLeft;
    if (newLeft) newLeft.next = first;
    if (newRight) newRight.previous = last;
    if (!first.previous) this.firstChunk = last.next;
    if (!last.next) {
      this.lastChunk = first.previous;
      this.lastChunk.next = null;
    }
    first.previous = newLeft;
    last.next = newRight || null;
    if (!newLeft) this.firstChunk = first;
    if (!newRight) this.lastChunk = last;
    return this;
  }
  overwrite(start, end, content, options) {
    options = options || {};
    return this.update(start, end, content, { ...options, overwrite: !options.contentOnly });
  }
  update(start, end, content, options) {
    if (typeof content !== "string") throw new TypeError("replacement content must be a string");
    if (this.original.length !== 0) {
      while (start < 0) start += this.original.length;
      while (end < 0) end += this.original.length;
    }
    if (end > this.original.length) throw new Error("end is out of bounds");
    if (start === end)
      throw new Error(
        "Cannot overwrite a zero-length range \u2013 use appendLeft or prependRight instead"
      );
    this._split(start);
    this._split(end);
    if (options === true) {
      if (!warned.storeName) {
        console.warn(
          "The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string"
        );
        warned.storeName = true;
      }
      options = { storeName: true };
    }
    const storeName = options !== void 0 ? options.storeName : false;
    const overwrite = options !== void 0 ? options.overwrite : false;
    if (storeName) {
      const original = this.original.slice(start, end);
      Object.defineProperty(this.storedNames, original, {
        writable: true,
        value: true,
        enumerable: true
      });
    }
    const first = this.byStart[start];
    const last = this.byEnd[end];
    if (first) {
      let chunk = first;
      while (chunk !== last) {
        if (chunk.next !== this.byStart[chunk.end]) {
          throw new Error("Cannot overwrite across a split point");
        }
        chunk = chunk.next;
        chunk.edit("", false);
      }
      first.edit(content, storeName, !overwrite);
    } else {
      const newChunk = new Chunk(start, end, "").edit(content, storeName);
      last.next = newChunk;
      newChunk.previous = last;
    }
    return this;
  }
  prepend(content) {
    if (typeof content !== "string") throw new TypeError("outro content must be a string");
    this.intro = content + this.intro;
    return this;
  }
  prependLeft(index, content) {
    if (typeof content !== "string") throw new TypeError("inserted content must be a string");
    this._split(index);
    const chunk = this.byEnd[index];
    if (chunk) {
      chunk.prependLeft(content);
    } else {
      this.intro = content + this.intro;
    }
    return this;
  }
  prependRight(index, content) {
    if (typeof content !== "string") throw new TypeError("inserted content must be a string");
    this._split(index);
    const chunk = this.byStart[index];
    if (chunk) {
      chunk.prependRight(content);
    } else {
      this.outro = content + this.outro;
    }
    return this;
  }
  remove(start, end) {
    if (this.original.length !== 0) {
      while (start < 0) start += this.original.length;
      while (end < 0) end += this.original.length;
    }
    if (start === end) return this;
    if (start < 0 || end > this.original.length) throw new Error("Character is out of bounds");
    if (start > end) throw new Error("end must be greater than start");
    this._split(start);
    this._split(end);
    let chunk = this.byStart[start];
    while (chunk) {
      chunk.intro = "";
      chunk.outro = "";
      chunk.edit("");
      chunk = end > chunk.end ? this.byStart[chunk.end] : null;
    }
    return this;
  }
  reset(start, end) {
    if (this.original.length !== 0) {
      while (start < 0) start += this.original.length;
      while (end < 0) end += this.original.length;
    }
    if (start === end) return this;
    if (start < 0 || end > this.original.length) throw new Error("Character is out of bounds");
    if (start > end) throw new Error("end must be greater than start");
    this._split(start);
    this._split(end);
    let chunk = this.byStart[start];
    while (chunk) {
      chunk.reset();
      chunk = end > chunk.end ? this.byStart[chunk.end] : null;
    }
    return this;
  }
  lastChar() {
    if (this.outro.length) return this.outro[this.outro.length - 1];
    let chunk = this.lastChunk;
    do {
      if (chunk.outro.length) return chunk.outro[chunk.outro.length - 1];
      if (chunk.content.length) return chunk.content[chunk.content.length - 1];
      if (chunk.intro.length) return chunk.intro[chunk.intro.length - 1];
    } while (chunk = chunk.previous);
    if (this.intro.length) return this.intro[this.intro.length - 1];
    return "";
  }
  lastLine() {
    let lineIndex = this.outro.lastIndexOf(n);
    if (lineIndex !== -1) return this.outro.substr(lineIndex + 1);
    let lineStr = this.outro;
    let chunk = this.lastChunk;
    do {
      if (chunk.outro.length > 0) {
        lineIndex = chunk.outro.lastIndexOf(n);
        if (lineIndex !== -1) return chunk.outro.substr(lineIndex + 1) + lineStr;
        lineStr = chunk.outro + lineStr;
      }
      if (chunk.content.length > 0) {
        lineIndex = chunk.content.lastIndexOf(n);
        if (lineIndex !== -1) return chunk.content.substr(lineIndex + 1) + lineStr;
        lineStr = chunk.content + lineStr;
      }
      if (chunk.intro.length > 0) {
        lineIndex = chunk.intro.lastIndexOf(n);
        if (lineIndex !== -1) return chunk.intro.substr(lineIndex + 1) + lineStr;
        lineStr = chunk.intro + lineStr;
      }
    } while (chunk = chunk.previous);
    lineIndex = this.intro.lastIndexOf(n);
    if (lineIndex !== -1) return this.intro.substr(lineIndex + 1) + lineStr;
    return this.intro + lineStr;
  }
  slice(start = 0, end = this.original.length) {
    if (this.original.length !== 0) {
      while (start < 0) start += this.original.length;
      while (end < 0) end += this.original.length;
    }
    let result = "";
    let chunk = this.firstChunk;
    while (chunk && (chunk.start > start || chunk.end <= start)) {
      if (chunk.start < end && chunk.end >= end) {
        return result;
      }
      chunk = chunk.next;
    }
    if (chunk && chunk.edited && chunk.start !== start)
      throw new Error(`Cannot use replaced character ${start} as slice start anchor.`);
    const startChunk = chunk;
    while (chunk) {
      if (chunk.intro && (startChunk !== chunk || chunk.start === start)) {
        result += chunk.intro;
      }
      const containsEnd = chunk.start < end && chunk.end >= end;
      if (containsEnd && chunk.edited && chunk.end !== end)
        throw new Error(`Cannot use replaced character ${end} as slice end anchor.`);
      const sliceStart = startChunk === chunk ? start - chunk.start : 0;
      const sliceEnd = containsEnd ? chunk.content.length + end - chunk.end : chunk.content.length;
      result += chunk.content.slice(sliceStart, sliceEnd);
      if (chunk.outro && (!containsEnd || chunk.end === end)) {
        result += chunk.outro;
      }
      if (containsEnd) {
        break;
      }
      chunk = chunk.next;
    }
    return result;
  }
  // TODO deprecate this? not really very useful
  snip(start, end) {
    const clone = this.clone();
    clone.remove(0, start);
    clone.remove(end, clone.original.length);
    return clone;
  }
  _split(index) {
    if (this.byStart[index] || this.byEnd[index]) return;
    let chunk = this.lastSearchedChunk;
    const searchForward = index > chunk.end;
    while (chunk) {
      if (chunk.contains(index)) return this._splitChunk(chunk, index);
      chunk = searchForward ? this.byStart[chunk.end] : this.byEnd[chunk.start];
    }
  }
  _splitChunk(chunk, index) {
    if (chunk.edited && chunk.content.length) {
      const loc = getLocator(this.original)(index);
      throw new Error(
        `Cannot split a chunk that has already been edited (${loc.line}:${loc.column} \u2013 "${chunk.original}")`
      );
    }
    const newChunk = chunk.split(index);
    this.byEnd[index] = chunk;
    this.byStart[index] = newChunk;
    this.byEnd[newChunk.end] = newChunk;
    if (chunk === this.lastChunk) this.lastChunk = newChunk;
    this.lastSearchedChunk = chunk;
    return true;
  }
  toString() {
    let str = this.intro;
    let chunk = this.firstChunk;
    while (chunk) {
      str += chunk.toString();
      chunk = chunk.next;
    }
    return str + this.outro;
  }
  isEmpty() {
    let chunk = this.firstChunk;
    do {
      if (chunk.intro.length && chunk.intro.trim() || chunk.content.length && chunk.content.trim() || chunk.outro.length && chunk.outro.trim())
        return false;
    } while (chunk = chunk.next);
    return true;
  }
  length() {
    let chunk = this.firstChunk;
    let length = 0;
    do {
      length += chunk.intro.length + chunk.content.length + chunk.outro.length;
    } while (chunk = chunk.next);
    return length;
  }
  trimLines() {
    return this.trim("[\\r\\n]");
  }
  trim(charType) {
    return this.trimStart(charType).trimEnd(charType);
  }
  trimEndAborted(charType) {
    const rx = new RegExp((charType || "\\s") + "+$");
    this.outro = this.outro.replace(rx, "");
    if (this.outro.length) return true;
    let chunk = this.lastChunk;
    do {
      const end = chunk.end;
      const aborted = chunk.trimEnd(rx);
      if (chunk.end !== end) {
        if (this.lastChunk === chunk) {
          this.lastChunk = chunk.next;
        }
        this.byEnd[chunk.end] = chunk;
        this.byStart[chunk.next.start] = chunk.next;
        this.byEnd[chunk.next.end] = chunk.next;
      }
      if (aborted) return true;
      chunk = chunk.previous;
    } while (chunk);
    return false;
  }
  trimEnd(charType) {
    this.trimEndAborted(charType);
    return this;
  }
  trimStartAborted(charType) {
    const rx = new RegExp("^" + (charType || "\\s") + "+");
    this.intro = this.intro.replace(rx, "");
    if (this.intro.length) return true;
    let chunk = this.firstChunk;
    do {
      const end = chunk.end;
      const aborted = chunk.trimStart(rx);
      if (chunk.end !== end) {
        if (chunk === this.lastChunk) this.lastChunk = chunk.next;
        this.byEnd[chunk.end] = chunk;
        this.byStart[chunk.next.start] = chunk.next;
        this.byEnd[chunk.next.end] = chunk.next;
      }
      if (aborted) return true;
      chunk = chunk.next;
    } while (chunk);
    return false;
  }
  trimStart(charType) {
    this.trimStartAborted(charType);
    return this;
  }
  hasChanged() {
    return this.original !== this.toString();
  }
  _replaceRegexp(searchValue, replacement) {
    function getReplacement(match, str) {
      if (typeof replacement === "string") {
        return replacement.replace(/\$(\$|&|\d+)/g, (_, i) => {
          if (i === "$") return "$";
          if (i === "&") return match[0];
          const num = +i;
          if (num < match.length) return match[+i];
          return `$${i}`;
        });
      } else {
        return replacement(...match, match.index, str, match.groups);
      }
    }
    function matchAll(re, str) {
      let match;
      const matches = [];
      while (match = re.exec(str)) {
        matches.push(match);
      }
      return matches;
    }
    if (searchValue.global) {
      const matches = matchAll(searchValue, this.original);
      matches.forEach((match) => {
        if (match.index != null) {
          const replacement2 = getReplacement(match, this.original);
          if (replacement2 !== match[0]) {
            this.overwrite(
              match.index,
              match.index + match[0].length,
              replacement2
            );
          }
        }
      });
    } else {
      const match = this.original.match(searchValue);
      if (match && match.index != null) {
        const replacement2 = getReplacement(match, this.original);
        if (replacement2 !== match[0]) {
          this.overwrite(
            match.index,
            match.index + match[0].length,
            replacement2
          );
        }
      }
    }
    return this;
  }
  _replaceString(string, replacement) {
    const { original } = this;
    const index = original.indexOf(string);
    if (index !== -1) {
      this.overwrite(index, index + string.length, replacement);
    }
    return this;
  }
  replace(searchValue, replacement) {
    if (typeof searchValue === "string") {
      return this._replaceString(searchValue, replacement);
    }
    return this._replaceRegexp(searchValue, replacement);
  }
  _replaceAllString(string, replacement) {
    const { original } = this;
    const stringLength = string.length;
    for (let index = original.indexOf(string); index !== -1; index = original.indexOf(string, index + stringLength)) {
      const previous = original.slice(index, index + stringLength);
      if (previous !== replacement)
        this.overwrite(index, index + stringLength, replacement);
    }
    return this;
  }
  replaceAll(searchValue, replacement) {
    if (typeof searchValue === "string") {
      return this._replaceAllString(searchValue, replacement);
    }
    if (!searchValue.global) {
      throw new TypeError(
        "MagicString.prototype.replaceAll called with a non-global RegExp argument"
      );
    }
    return this._replaceRegexp(searchValue, replacement);
  }
};

// node_modules/.pnpm/@jridgewell+resolve-uri@3.1.2/node_modules/@jridgewell/resolve-uri/dist/resolve-uri.mjs
var schemeRegex = /^[\w+.-]+:\/\//;
var urlRegex = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/;
var fileRegex = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
function isAbsoluteUrl(input) {
  return schemeRegex.test(input);
}
function isSchemeRelativeUrl(input) {
  return input.startsWith("//");
}
function isAbsolutePath(input) {
  return input.startsWith("/");
}
function isFileUrl(input) {
  return input.startsWith("file:");
}
function isRelative(input) {
  return /^[.?#]/.test(input);
}
function parseAbsoluteUrl(input) {
  const match = urlRegex.exec(input);
  return makeUrl(match[1], match[2] || "", match[3], match[4] || "", match[5] || "/", match[6] || "", match[7] || "");
}
function parseFileUrl(input) {
  const match = fileRegex.exec(input);
  const path2 = match[2];
  return makeUrl("file:", "", match[1] || "", "", isAbsolutePath(path2) ? path2 : "/" + path2, match[3] || "", match[4] || "");
}
function makeUrl(scheme, user, host, port, path2, query, hash) {
  return {
    scheme,
    user,
    host,
    port,
    path: path2,
    query,
    hash,
    type: 7
  };
}
function parseUrl(input) {
  if (isSchemeRelativeUrl(input)) {
    const url2 = parseAbsoluteUrl("http:" + input);
    url2.scheme = "";
    url2.type = 6;
    return url2;
  }
  if (isAbsolutePath(input)) {
    const url2 = parseAbsoluteUrl("http://foo.com" + input);
    url2.scheme = "";
    url2.host = "";
    url2.type = 5;
    return url2;
  }
  if (isFileUrl(input))
    return parseFileUrl(input);
  if (isAbsoluteUrl(input))
    return parseAbsoluteUrl(input);
  const url = parseAbsoluteUrl("http://foo.com/" + input);
  url.scheme = "";
  url.host = "";
  url.type = input ? input.startsWith("?") ? 3 : input.startsWith("#") ? 2 : 4 : 1;
  return url;
}
function stripPathFilename(path2) {
  if (path2.endsWith("/.."))
    return path2;
  const index = path2.lastIndexOf("/");
  return path2.slice(0, index + 1);
}
function mergePaths(url, base) {
  normalizePath3(base, base.type);
  if (url.path === "/") {
    url.path = base.path;
  } else {
    url.path = stripPathFilename(base.path) + url.path;
  }
}
function normalizePath3(url, type) {
  const rel = type <= 4;
  const pieces = url.path.split("/");
  let pointer = 1;
  let positive = 0;
  let addTrailingSlash = false;
  for (let i = 1; i < pieces.length; i++) {
    const piece = pieces[i];
    if (!piece) {
      addTrailingSlash = true;
      continue;
    }
    addTrailingSlash = false;
    if (piece === ".")
      continue;
    if (piece === "..") {
      if (positive) {
        addTrailingSlash = true;
        positive--;
        pointer--;
      } else if (rel) {
        pieces[pointer++] = piece;
      }
      continue;
    }
    pieces[pointer++] = piece;
    positive++;
  }
  let path2 = "";
  for (let i = 1; i < pointer; i++) {
    path2 += "/" + pieces[i];
  }
  if (!path2 || addTrailingSlash && !path2.endsWith("/..")) {
    path2 += "/";
  }
  url.path = path2;
}
function resolve2(input, base) {
  if (!input && !base)
    return "";
  const url = parseUrl(input);
  let inputType = url.type;
  if (base && inputType !== 7) {
    const baseUrl = parseUrl(base);
    const baseType = baseUrl.type;
    switch (inputType) {
      case 1:
        url.hash = baseUrl.hash;
      // fall through
      case 2:
        url.query = baseUrl.query;
      // fall through
      case 3:
      case 4:
        mergePaths(url, baseUrl);
      // fall through
      case 5:
        url.user = baseUrl.user;
        url.host = baseUrl.host;
        url.port = baseUrl.port;
      // fall through
      case 6:
        url.scheme = baseUrl.scheme;
    }
    if (baseType > inputType)
      inputType = baseType;
  }
  normalizePath3(url, inputType);
  const queryHash = url.query + url.hash;
  switch (inputType) {
    // This is impossible, because of the empty checks at the start of the function.
    // case UrlType.Empty:
    case 2:
    case 3:
      return queryHash;
    case 4: {
      const path2 = url.path.slice(1);
      if (!path2)
        return queryHash || ".";
      if (isRelative(base || input) && !isRelative(path2)) {
        return "./" + path2 + queryHash;
      }
      return path2 + queryHash;
    }
    case 5:
      return url.path + queryHash;
    default:
      return url.scheme + "//" + url.user + url.host + url.port + url.path + queryHash;
  }
}

// node_modules/.pnpm/@jridgewell+trace-mapping@0.3.25/node_modules/@jridgewell/trace-mapping/dist/trace-mapping.mjs
function resolve3(input, base) {
  if (base && !base.endsWith("/"))
    base += "/";
  return resolve2(input, base);
}
function stripFilename(path2) {
  if (!path2)
    return "";
  const index = path2.lastIndexOf("/");
  return path2.slice(0, index + 1);
}
var COLUMN = 0;
function maybeSort(mappings, owned) {
  const unsortedIndex = nextUnsortedSegmentLine(mappings, 0);
  if (unsortedIndex === mappings.length)
    return mappings;
  if (!owned)
    mappings = mappings.slice();
  for (let i = unsortedIndex; i < mappings.length; i = nextUnsortedSegmentLine(mappings, i + 1)) {
    mappings[i] = sortSegments(mappings[i], owned);
  }
  return mappings;
}
function nextUnsortedSegmentLine(mappings, start) {
  for (let i = start; i < mappings.length; i++) {
    if (!isSorted(mappings[i]))
      return i;
  }
  return mappings.length;
}
function isSorted(line) {
  for (let j = 1; j < line.length; j++) {
    if (line[j][COLUMN] < line[j - 1][COLUMN]) {
      return false;
    }
  }
  return true;
}
function sortSegments(line, owned) {
  if (!owned)
    line = line.slice();
  return line.sort(sortComparator2);
}
function sortComparator2(a, b) {
  return a[COLUMN] - b[COLUMN];
}
var found = false;
function binarySearch(haystack, needle, low, high) {
  while (low <= high) {
    const mid = low + (high - low >> 1);
    const cmp = haystack[mid][COLUMN] - needle;
    if (cmp === 0) {
      found = true;
      return mid;
    }
    if (cmp < 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  found = false;
  return low - 1;
}
function upperBound(haystack, needle, index) {
  for (let i = index + 1; i < haystack.length; index = i++) {
    if (haystack[i][COLUMN] !== needle)
      break;
  }
  return index;
}
function lowerBound(haystack, needle, index) {
  for (let i = index - 1; i >= 0; index = i--) {
    if (haystack[i][COLUMN] !== needle)
      break;
  }
  return index;
}
function memoizedState() {
  return {
    lastKey: -1,
    lastNeedle: -1,
    lastIndex: -1
  };
}
function memoizedBinarySearch(haystack, needle, state, key) {
  const { lastKey, lastNeedle, lastIndex } = state;
  let low = 0;
  let high = haystack.length - 1;
  if (key === lastKey) {
    if (needle === lastNeedle) {
      found = lastIndex !== -1 && haystack[lastIndex][COLUMN] === needle;
      return lastIndex;
    }
    if (needle >= lastNeedle) {
      low = lastIndex === -1 ? 0 : lastIndex;
    } else {
      high = lastIndex;
    }
  }
  state.lastKey = key;
  state.lastNeedle = needle;
  return state.lastIndex = binarySearch(haystack, needle, low, high);
}
var LEAST_UPPER_BOUND = -1;
var GREATEST_LOWER_BOUND = 1;
var TraceMap = class {
  constructor(map, mapUrl) {
    const isString = typeof map === "string";
    if (!isString && map._decodedMemo)
      return map;
    const parsed = isString ? JSON.parse(map) : map;
    const { version, file, names, sourceRoot, sources, sourcesContent } = parsed;
    this.version = version;
    this.file = file;
    this.names = names || [];
    this.sourceRoot = sourceRoot;
    this.sources = sources;
    this.sourcesContent = sourcesContent;
    this.ignoreList = parsed.ignoreList || parsed.x_google_ignoreList || void 0;
    const from = resolve3(sourceRoot || "", stripFilename(mapUrl));
    this.resolvedSources = sources.map((s) => resolve3(s || "", from));
    const { mappings } = parsed;
    if (typeof mappings === "string") {
      this._encoded = mappings;
      this._decoded = void 0;
    } else {
      this._encoded = void 0;
      this._decoded = maybeSort(mappings, isString);
    }
    this._decodedMemo = memoizedState();
    this._bySources = void 0;
    this._bySourceMemos = void 0;
  }
};
function cast(map) {
  return map;
}
function decodedMappings(map) {
  var _a;
  return (_a = cast(map))._decoded || (_a._decoded = decode(cast(map)._encoded));
}
function traceSegment(map, line, column) {
  const decoded = decodedMappings(map);
  if (line >= decoded.length)
    return null;
  const segments = decoded[line];
  const index = traceSegmentInternal(segments, cast(map)._decodedMemo, line, column, GREATEST_LOWER_BOUND);
  return index === -1 ? null : segments[index];
}
function traceSegmentInternal(segments, memo, line, column, bias) {
  let index = memoizedBinarySearch(segments, column, memo, line);
  if (found) {
    index = (bias === LEAST_UPPER_BOUND ? upperBound : lowerBound)(segments, column, index);
  } else if (bias === LEAST_UPPER_BOUND)
    index++;
  if (index === -1 || index === segments.length)
    return -1;
  return index;
}

// node_modules/.pnpm/@jridgewell+set-array@1.2.1/node_modules/@jridgewell/set-array/dist/set-array.mjs
var SetArray = class {
  constructor() {
    this._indexes = { __proto__: null };
    this.array = [];
  }
};
function cast2(set) {
  return set;
}
function get(setarr, key) {
  return cast2(setarr)._indexes[key];
}
function put(setarr, key) {
  const index = get(setarr, key);
  if (index !== void 0)
    return index;
  const { array, _indexes: indexes } = cast2(setarr);
  const length = array.push(key);
  return indexes[key] = length - 1;
}
function remove(setarr, key) {
  const index = get(setarr, key);
  if (index === void 0)
    return;
  const { array, _indexes: indexes } = cast2(setarr);
  for (let i = index + 1; i < array.length; i++) {
    const k = array[i];
    array[i - 1] = k;
    indexes[k]--;
  }
  indexes[key] = void 0;
  array.pop();
}

// node_modules/.pnpm/@jridgewell+gen-mapping@0.3.5/node_modules/@jridgewell/gen-mapping/dist/gen-mapping.mjs
var COLUMN2 = 0;
var SOURCES_INDEX = 1;
var SOURCE_LINE = 2;
var SOURCE_COLUMN = 3;
var NAMES_INDEX = 4;
var NO_NAME = -1;
var GenMapping = class {
  constructor({ file, sourceRoot } = {}) {
    this._names = new SetArray();
    this._sources = new SetArray();
    this._sourcesContent = [];
    this._mappings = [];
    this.file = file;
    this.sourceRoot = sourceRoot;
    this._ignoreList = new SetArray();
  }
};
function cast3(map) {
  return map;
}
var maybeAddSegment = (map, genLine, genColumn, source, sourceLine, sourceColumn, name, content) => {
  return addSegmentInternal(true, map, genLine, genColumn, source, sourceLine, sourceColumn, name, content);
};
function setSourceContent(map, source, content) {
  const { _sources: sources, _sourcesContent: sourcesContent } = cast3(map);
  const index = put(sources, source);
  sourcesContent[index] = content;
}
function setIgnore(map, source, ignore = true) {
  const { _sources: sources, _sourcesContent: sourcesContent, _ignoreList: ignoreList } = cast3(map);
  const index = put(sources, source);
  if (index === sourcesContent.length)
    sourcesContent[index] = null;
  if (ignore)
    put(ignoreList, index);
  else
    remove(ignoreList, index);
}
function toDecodedMap(map) {
  const { _mappings: mappings, _sources: sources, _sourcesContent: sourcesContent, _names: names, _ignoreList: ignoreList } = cast3(map);
  removeEmptyFinalLines(mappings);
  return {
    version: 3,
    file: map.file || void 0,
    names: names.array,
    sourceRoot: map.sourceRoot || void 0,
    sources: sources.array,
    sourcesContent,
    mappings,
    ignoreList: ignoreList.array
  };
}
function toEncodedMap(map) {
  const decoded = toDecodedMap(map);
  return Object.assign(Object.assign({}, decoded), { mappings: encode(decoded.mappings) });
}
function addSegmentInternal(skipable, map, genLine, genColumn, source, sourceLine, sourceColumn, name, content) {
  const { _mappings: mappings, _sources: sources, _sourcesContent: sourcesContent, _names: names } = cast3(map);
  const line = getLine(mappings, genLine);
  const index = getColumnIndex(line, genColumn);
  if (!source) {
    if (skipable && skipSourceless(line, index))
      return;
    return insert(line, index, [genColumn]);
  }
  const sourcesIndex = put(sources, source);
  const namesIndex = name ? put(names, name) : NO_NAME;
  if (sourcesIndex === sourcesContent.length)
    sourcesContent[sourcesIndex] = content !== null && content !== void 0 ? content : null;
  if (skipable && skipSource(line, index, sourcesIndex, sourceLine, sourceColumn, namesIndex)) {
    return;
  }
  return insert(line, index, name ? [genColumn, sourcesIndex, sourceLine, sourceColumn, namesIndex] : [genColumn, sourcesIndex, sourceLine, sourceColumn]);
}
function getLine(mappings, index) {
  for (let i = mappings.length; i <= index; i++) {
    mappings[i] = [];
  }
  return mappings[index];
}
function getColumnIndex(line, genColumn) {
  let index = line.length;
  for (let i = index - 1; i >= 0; index = i--) {
    const current = line[i];
    if (genColumn >= current[COLUMN2])
      break;
  }
  return index;
}
function insert(array, index, value) {
  for (let i = array.length; i > index; i--) {
    array[i] = array[i - 1];
  }
  array[index] = value;
}
function removeEmptyFinalLines(mappings) {
  const { length } = mappings;
  let len = length;
  for (let i = len - 1; i >= 0; len = i, i--) {
    if (mappings[i].length > 0)
      break;
  }
  if (len < length)
    mappings.length = len;
}
function skipSourceless(line, index) {
  if (index === 0)
    return true;
  const prev = line[index - 1];
  return prev.length === 1;
}
function skipSource(line, index, sourcesIndex, sourceLine, sourceColumn, namesIndex) {
  if (index === 0)
    return false;
  const prev = line[index - 1];
  if (prev.length === 1)
    return false;
  return sourcesIndex === prev[SOURCES_INDEX] && sourceLine === prev[SOURCE_LINE] && sourceColumn === prev[SOURCE_COLUMN] && namesIndex === (prev.length === 5 ? prev[NAMES_INDEX] : NO_NAME);
}

// node_modules/.pnpm/@ampproject+remapping@2.3.0/node_modules/@ampproject/remapping/dist/remapping.mjs
var SOURCELESS_MAPPING = /* @__PURE__ */ SegmentObject("", -1, -1, "", null, false);
var EMPTY_SOURCES = [];
function SegmentObject(source, line, column, name, content, ignore) {
  return { source, line, column, name, content, ignore };
}
function Source(map, sources, source, content, ignore) {
  return {
    map,
    sources,
    source,
    content,
    ignore
  };
}
function MapSource(map, sources) {
  return Source(map, sources, "", null, false);
}
function OriginalSource(source, content, ignore) {
  return Source(null, EMPTY_SOURCES, source, content, ignore);
}
function traceMappings(tree) {
  const gen = new GenMapping({ file: tree.map.file });
  const { sources: rootSources, map } = tree;
  const rootNames = map.names;
  const rootMappings = decodedMappings(map);
  for (let i = 0; i < rootMappings.length; i++) {
    const segments = rootMappings[i];
    for (let j = 0; j < segments.length; j++) {
      const segment = segments[j];
      const genCol = segment[0];
      let traced = SOURCELESS_MAPPING;
      if (segment.length !== 1) {
        const source2 = rootSources[segment[1]];
        traced = originalPositionFor(source2, segment[2], segment[3], segment.length === 5 ? rootNames[segment[4]] : "");
        if (traced == null)
          continue;
      }
      const { column, line, name, content, source, ignore } = traced;
      maybeAddSegment(gen, i, genCol, source, line, column, name);
      if (source && content != null)
        setSourceContent(gen, source, content);
      if (ignore)
        setIgnore(gen, source, true);
    }
  }
  return gen;
}
function originalPositionFor(source, line, column, name) {
  if (!source.map) {
    return SegmentObject(source.source, line, column, name, source.content, source.ignore);
  }
  const segment = traceSegment(source.map, line, column);
  if (segment == null)
    return null;
  if (segment.length === 1)
    return SOURCELESS_MAPPING;
  return originalPositionFor(source.sources[segment[1]], segment[2], segment[3], segment.length === 5 ? source.map.names[segment[4]] : name);
}
function asArray(value) {
  if (Array.isArray(value))
    return value;
  return [value];
}
function buildSourceMapTree(input, loader) {
  const maps = asArray(input).map((m) => new TraceMap(m, ""));
  const map = maps.pop();
  for (let i = 0; i < maps.length; i++) {
    if (maps[i].sources.length > 1) {
      throw new Error(`Transformation map ${i} must have exactly one source file.
Did you specify these with the most recent transformation maps first?`);
    }
  }
  let tree = build(map, loader, "", 0);
  for (let i = maps.length - 1; i >= 0; i--) {
    tree = MapSource(maps[i], [tree]);
  }
  return tree;
}
function build(map, loader, importer, importerDepth) {
  const { resolvedSources, sourcesContent, ignoreList } = map;
  const depth = importerDepth + 1;
  const children = resolvedSources.map((sourceFile, i) => {
    const ctx = {
      importer,
      depth,
      source: sourceFile || "",
      content: void 0,
      ignore: void 0
    };
    const sourceMap = loader(ctx.source, ctx);
    const { source, content, ignore } = ctx;
    if (sourceMap)
      return build(new TraceMap(sourceMap, source), loader, source, depth);
    const sourceContent = content !== void 0 ? content : sourcesContent ? sourcesContent[i] : null;
    const ignored = ignore !== void 0 ? ignore : ignoreList ? ignoreList.includes(i) : false;
    return OriginalSource(source, sourceContent, ignored);
  });
  return MapSource(map, children);
}
var SourceMap2 = class {
  constructor(map, options) {
    const out = options.decodedMappings ? toDecodedMap(map) : toEncodedMap(map);
    this.version = out.version;
    this.file = out.file;
    this.mappings = out.mappings;
    this.names = out.names;
    this.ignoreList = out.ignoreList;
    this.sourceRoot = out.sourceRoot;
    this.sources = out.sources;
    if (!options.excludeContent) {
      this.sourcesContent = out.sourcesContent;
    }
  }
  toString() {
    return JSON.stringify(this);
  }
};
function remapping(input, loader, options) {
  const opts = typeof options === "object" ? options : { excludeContent: !!options, decodedMappings: false };
  const tree = buildSourceMapTree(input, loader);
  return new SourceMap2(traceMappings(tree), opts);
}

// node_modules/.pnpm/vite-css-modules@1.5.2_postcss@8.4.47_rollup@4.24.0_vite@5.4.10/node_modules/vite-css-modules/dist/index.mjs
import path$1 from "path";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var INFINITY = 1 / 0;
var symbolTag = "[object Symbol]";
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
var rsAstralRange = "\\ud800-\\udfff";
var rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23";
var rsComboSymbolsRange = "\\u20d0-\\u20f0";
var rsDingbatRange = "\\u2700-\\u27bf";
var rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
var rsMathOpRange = "\\xac\\xb1\\xd7\\xf7";
var rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
var rsPunctuationRange = "\\u2000-\\u206f";
var rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
var rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
var rsVarRange = "\\ufe0e\\ufe0f";
var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
var rsApos = "['\u2019]";
var rsAstral = "[" + rsAstralRange + "]";
var rsBreak = "[" + rsBreakRange + "]";
var rsCombo = "[" + rsComboMarksRange + rsComboSymbolsRange + "]";
var rsDigits = "\\d+";
var rsDingbat = "[" + rsDingbatRange + "]";
var rsLower = "[" + rsLowerRange + "]";
var rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]";
var rsFitz = "\\ud83c[\\udffb-\\udfff]";
var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
var rsNonAstral = "[^" + rsAstralRange + "]";
var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
var rsUpper = "[" + rsUpperRange + "]";
var rsZWJ = "\\u200d";
var rsLowerMisc = "(?:" + rsLower + "|" + rsMisc + ")";
var rsUpperMisc = "(?:" + rsUpper + "|" + rsMisc + ")";
var rsOptLowerContr = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?";
var rsOptUpperContr = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?";
var reOptMod = rsModifier + "?";
var rsOptVar = "[" + rsVarRange + "]?";
var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
var rsSeq = rsOptVar + reOptMod + rsOptJoin;
var rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq;
var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
var reApos = RegExp(rsApos, "g");
var reComboMark = RegExp(rsCombo, "g");
var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
var reUnicodeWord = RegExp([
  rsUpper + "?" + rsLower + "+" + rsOptLowerContr + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
  rsUpperMisc + "+" + rsOptUpperContr + "(?=" + [rsBreak, rsUpper + rsLowerMisc, "$"].join("|") + ")",
  rsUpper + "?" + rsLowerMisc + "+" + rsOptLowerContr,
  rsUpper + "+" + rsOptUpperContr,
  rsDigits,
  rsEmoji
].join("|"), "g");
var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + "]");
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
var deburredLetters = {
  // Latin-1 Supplement block.
  "\xC0": "A",
  "\xC1": "A",
  "\xC2": "A",
  "\xC3": "A",
  "\xC4": "A",
  "\xC5": "A",
  "\xE0": "a",
  "\xE1": "a",
  "\xE2": "a",
  "\xE3": "a",
  "\xE4": "a",
  "\xE5": "a",
  "\xC7": "C",
  "\xE7": "c",
  "\xD0": "D",
  "\xF0": "d",
  "\xC8": "E",
  "\xC9": "E",
  "\xCA": "E",
  "\xCB": "E",
  "\xE8": "e",
  "\xE9": "e",
  "\xEA": "e",
  "\xEB": "e",
  "\xCC": "I",
  "\xCD": "I",
  "\xCE": "I",
  "\xCF": "I",
  "\xEC": "i",
  "\xED": "i",
  "\xEE": "i",
  "\xEF": "i",
  "\xD1": "N",
  "\xF1": "n",
  "\xD2": "O",
  "\xD3": "O",
  "\xD4": "O",
  "\xD5": "O",
  "\xD6": "O",
  "\xD8": "O",
  "\xF2": "o",
  "\xF3": "o",
  "\xF4": "o",
  "\xF5": "o",
  "\xF6": "o",
  "\xF8": "o",
  "\xD9": "U",
  "\xDA": "U",
  "\xDB": "U",
  "\xDC": "U",
  "\xF9": "u",
  "\xFA": "u",
  "\xFB": "u",
  "\xFC": "u",
  "\xDD": "Y",
  "\xFD": "y",
  "\xFF": "y",
  "\xC6": "Ae",
  "\xE6": "ae",
  "\xDE": "Th",
  "\xFE": "th",
  "\xDF": "ss",
  // Latin Extended-A block.
  "\u0100": "A",
  "\u0102": "A",
  "\u0104": "A",
  "\u0101": "a",
  "\u0103": "a",
  "\u0105": "a",
  "\u0106": "C",
  "\u0108": "C",
  "\u010A": "C",
  "\u010C": "C",
  "\u0107": "c",
  "\u0109": "c",
  "\u010B": "c",
  "\u010D": "c",
  "\u010E": "D",
  "\u0110": "D",
  "\u010F": "d",
  "\u0111": "d",
  "\u0112": "E",
  "\u0114": "E",
  "\u0116": "E",
  "\u0118": "E",
  "\u011A": "E",
  "\u0113": "e",
  "\u0115": "e",
  "\u0117": "e",
  "\u0119": "e",
  "\u011B": "e",
  "\u011C": "G",
  "\u011E": "G",
  "\u0120": "G",
  "\u0122": "G",
  "\u011D": "g",
  "\u011F": "g",
  "\u0121": "g",
  "\u0123": "g",
  "\u0124": "H",
  "\u0126": "H",
  "\u0125": "h",
  "\u0127": "h",
  "\u0128": "I",
  "\u012A": "I",
  "\u012C": "I",
  "\u012E": "I",
  "\u0130": "I",
  "\u0129": "i",
  "\u012B": "i",
  "\u012D": "i",
  "\u012F": "i",
  "\u0131": "i",
  "\u0134": "J",
  "\u0135": "j",
  "\u0136": "K",
  "\u0137": "k",
  "\u0138": "k",
  "\u0139": "L",
  "\u013B": "L",
  "\u013D": "L",
  "\u013F": "L",
  "\u0141": "L",
  "\u013A": "l",
  "\u013C": "l",
  "\u013E": "l",
  "\u0140": "l",
  "\u0142": "l",
  "\u0143": "N",
  "\u0145": "N",
  "\u0147": "N",
  "\u014A": "N",
  "\u0144": "n",
  "\u0146": "n",
  "\u0148": "n",
  "\u014B": "n",
  "\u014C": "O",
  "\u014E": "O",
  "\u0150": "O",
  "\u014D": "o",
  "\u014F": "o",
  "\u0151": "o",
  "\u0154": "R",
  "\u0156": "R",
  "\u0158": "R",
  "\u0155": "r",
  "\u0157": "r",
  "\u0159": "r",
  "\u015A": "S",
  "\u015C": "S",
  "\u015E": "S",
  "\u0160": "S",
  "\u015B": "s",
  "\u015D": "s",
  "\u015F": "s",
  "\u0161": "s",
  "\u0162": "T",
  "\u0164": "T",
  "\u0166": "T",
  "\u0163": "t",
  "\u0165": "t",
  "\u0167": "t",
  "\u0168": "U",
  "\u016A": "U",
  "\u016C": "U",
  "\u016E": "U",
  "\u0170": "U",
  "\u0172": "U",
  "\u0169": "u",
  "\u016B": "u",
  "\u016D": "u",
  "\u016F": "u",
  "\u0171": "u",
  "\u0173": "u",
  "\u0174": "W",
  "\u0175": "w",
  "\u0176": "Y",
  "\u0177": "y",
  "\u0178": "Y",
  "\u0179": "Z",
  "\u017B": "Z",
  "\u017D": "Z",
  "\u017A": "z",
  "\u017C": "z",
  "\u017E": "z",
  "\u0132": "IJ",
  "\u0133": "ij",
  "\u0152": "Oe",
  "\u0153": "oe",
  "\u0149": "'n",
  "\u017F": "ss"
};
var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function("return this")();
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1, length = array ? array.length : 0;
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}
function asciiToArray(string) {
  return string.split("");
}
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}
function basePropertyOf(object) {
  return function(key) {
    return object == null ? void 0 : object[key];
  };
}
var deburrLetter = basePropertyOf(deburredLetters);
function hasUnicode(string) {
  return reHasUnicode.test(string);
}
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}
function stringToArray(string) {
  return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}
var objectProto = Object.prototype;
var objectToString = objectProto.toString;
var Symbol2 = root.Symbol;
var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
var symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseSlice(array, start, end) {
  var index = -1, length = array.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function castSlice(array, start, end) {
  var length = array.length;
  end = end === void 0 ? length : end;
  return !start && end >= length ? array : baseSlice(array, start, end);
}
function createCaseFirst(methodName) {
  return function(string) {
    string = toString2(string);
    var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
    var chr = strSymbols ? strSymbols[0] : string.charAt(0);
    var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
    return chr[methodName]() + trailing;
  };
}
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
  };
}
function isObjectLike(value) {
  return !!value && typeof value == "object";
}
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
function toString2(value) {
  return value == null ? "" : baseToString(value);
}
var camelCase = createCompounder(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize(word) : word);
});
function capitalize(string) {
  return upperFirst(toString2(string).toLowerCase());
}
function deburr(string) {
  string = toString2(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
}
var upperFirst = createCaseFirst("toUpperCase");
function words(string, pattern, guard) {
  string = toString2(string);
  pattern = pattern;
  if (pattern === void 0) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}
var lodash_camelcase = camelCase;
var camelCase$1 = /* @__PURE__ */ getDefaultExportFromCjs(lodash_camelcase);
var shouldKeepOriginalExport = (cssModuleConfig) => !("localsConvention" in cssModuleConfig && (typeof cssModuleConfig.localsConvention === "function" || cssModuleConfig.localsConvention === "camelCaseOnly" || cssModuleConfig.localsConvention === "dashesOnly"));
var dashesCamelCase = (string) => string.replaceAll(/-+(\w)/g, (_, firstLetter) => firstLetter.toUpperCase());
var getLocalesConventionFunction = (config) => {
  if (!("localsConvention" in config)) {
    return;
  }
  const { localsConvention } = config;
  if (!localsConvention || typeof localsConvention === "function") {
    return localsConvention;
  }
  if (localsConvention === "camelCase" || localsConvention === "camelCaseOnly") {
    return camelCase$1;
  }
  if (localsConvention === "dashes" || localsConvention === "dashesOnly") {
    return dashesCamelCase;
  }
};
var importStatement = (specifier, source) => `import ${Array.isArray(specifier) ? `{${specifier.join(",")}}` : specifier} from${JSON.stringify(source)};`;
var importsToCode = (imports, allowArbitraryNamedExports = false) => Array.from(imports).map(
  ([file, importedAs], index) => {
    const importFrom = `${file}?.module.css`;
    if (allowArbitraryNamedExports) {
      return importStatement(
        Object.entries(importedAs).map(
          ([exportName, importAs]) => `${JSON.stringify(exportName)} as ${importAs}`
        ),
        importFrom
      );
    }
    const importDefault = `cssModule${index}`;
    return `${importStatement(importDefault, importFrom)}const {${Object.entries(importedAs).map(
      ([exportName, importAs]) => `${JSON.stringify(exportName)}: ${importAs}`
    ).join(",")}} = ${importDefault};`;
  }
).join("");
var exportsToCode = (exports, allowArbitraryNamedExports = false) => {
  const variables = /* @__PURE__ */ new Set();
  const exportedVariables = Object.entries(exports).flatMap(
    ([exportName, { exportAs, code: value }]) => {
      const jsVariable = makeLegalIdentifier(exportName);
      variables.add(`const ${jsVariable} = \`${value}\`;`);
      return Array.from(exportAs).map((exportAsName) => {
        const exportNameSafe = makeLegalIdentifier(exportAsName);
        if (exportAsName !== exportNameSafe) {
          exportAsName = JSON.stringify(exportAsName);
        }
        return [jsVariable, exportAsName];
      });
    }
  );
  const namedExports = `export {${exportedVariables.map(
    ([jsVariable, exportName]) => jsVariable === exportName ? jsVariable : exportName[0] !== '"' || allowArbitraryNamedExports ? `${jsVariable} as ${exportName}` : ""
  ).filter(Boolean).join(",")}};`;
  const defaultExports = `export default{${exportedVariables.map(
    ([jsVariable, exportName]) => jsVariable === exportName ? jsVariable : `${exportName}: ${jsVariable}`
  ).join(",")}}`;
  return `${Array.from(variables).join("")}${namedExports}${defaultExports}`;
};
var generateEsm = (imports, exports, allowArbitraryNamedExports = false) => importsToCode(imports, allowArbitraryNamedExports) + exportsToCode(exports, allowArbitraryNamedExports);
var dtsComment = `
/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
/**
 * Generated by vite-css-modules
 * https://npmjs.com/vite-css-modules
 */
`.trim();
var generateTypes = (exports, allowArbitraryNamedExports = false) => {
  const variables = /* @__PURE__ */ new Set();
  const exportedVariables = Object.entries(exports).flatMap(
    ([exportName, { exportAs }]) => {
      const jsVariable = makeLegalIdentifier(exportName);
      variables.add(`const ${jsVariable}: string;`);
      return Array.from(exportAs).map((exportAsName) => {
        const exportNameSafe = makeLegalIdentifier(exportAsName);
        if (exportAsName !== exportNameSafe) {
          exportAsName = JSON.stringify(exportAsName);
        }
        return [jsVariable, exportAsName];
      });
    }
  );
  const namedExports = `export {
${exportedVariables.map(
    ([jsVariable, exportName]) => jsVariable === exportName ? `	${jsVariable}` : exportName[0] !== '"' || allowArbitraryNamedExports ? `	${jsVariable} as ${exportName}` : ""
  ).filter(Boolean).join(",\n")}
};`;
  const defaultExports = `export default {
${exportedVariables.map(
    ([jsVariable, exportName]) => `	${jsVariable === exportName ? jsVariable : `${exportName}: ${jsVariable}`}`
  ).join(",\n")}
}`;
  return `${dtsComment}
${Array.from(variables).join("\n")}

${namedExports}

${defaultExports}
`;
};
var arbitraryModuleNamespaceNames = {
  // https://github.com/evanw/esbuild/blob/c809af050a74f022d9cf61c66e13365434542420/compat-table/src/index.ts#L392
  es: [2022],
  chrome: [90],
  node: [16],
  firefox: [87],
  safari: [14, 1],
  ios: [14, 5]
};
var targetPattern = /^(chrome|deno|edge|firefox|hermes|ie|ios|node|opera|rhino|safari|es)(\w+)/i;
var parseTarget = (target) => {
  const hasType = target.match(targetPattern);
  if (!hasType) {
    return;
  }
  const [, type, version] = hasType;
  return [
    type.toLowerCase(),
    version.split(".").map(Number)
  ];
};
var compareSemver = (semverA, semverB) => semverA[0] - semverB[0] || (semverA[1] || 0) - (semverB[1] || 0) || (semverA[2] || 0) - (semverB[2] || 0) || 0;
var supportsArbitraryModuleNamespace = ({ build: { target: targets } }) => Boolean(
  targets && (Array.isArray(targets) ? targets : [targets]).every((target) => {
    if (target === "esnext") {
      return true;
    }
    const hasType = parseTarget(target);
    if (!hasType) {
      return false;
    }
    const [type, version] = hasType;
    const addedInVersion = arbitraryModuleNamespaceNames[type];
    if (!addedInVersion) {
      return false;
    }
    return compareSemver(addedInVersion, version) <= 0;
  })
);
var cssModuleRE = /\.module\.(css|less|sass|scss|styl|stylus|pcss|postcss|sss)(?:$|\?)/;
var pluginName = "vite:css-modules";
var postfixRE = /[?#].*$/;
var cleanUrl = (url) => url.replace(postfixRE, "");
var loadExports = async (context, requestId, fromId) => {
  const resolved = await context.resolve(requestId, fromId);
  if (!resolved) {
    throw new Error(`Cannot resolve "${requestId}" from "${fromId}"`);
  }
  const loaded = await context.load({
    id: resolved.id
  });
  const pluginMeta = loaded.meta[pluginName];
  return pluginMeta.exports;
};
var cssModules = (config, patchConfig) => {
  const filter = createFilter(cssModuleRE);
  const allowArbitraryNamedExports = supportsArbitraryModuleNamespace(config);
  const cssConfig = config.css;
  const cssModuleConfig = { ...cssConfig.modules };
  const lightningCssOptions = { ...cssConfig.lightningcss };
  const { devSourcemap } = cssConfig;
  const isLightningCss = cssConfig.transformer === "lightningcss";
  const loadTransformer = isLightningCss ? Promise.resolve().then(() => (init_lightningcss_BRyKngQ(), lightningcss_BRyKngQ_exports)) : Promise.resolve().then(() => (init_index_Bfui3y_Y(), index_Bfui3y_Y_exports));
  let transform3;
  return {
    name: pluginName,
    buildStart: async () => {
      const transformer = await loadTransformer;
      transform3 = transformer.transform;
    },
    load: {
      // Fallback load from disk in case it can't be loaded by another plugin (e.g. vue)
      order: "post",
      handler: async (id) => {
        if (!filter(id)) {
          return;
        }
        id = id.split("?", 2)[0];
        return await readFile(id, "utf8");
      }
    },
    async transform(inputCss, id) {
      if (!filter(id)) {
        return;
      }
      const cssModule = transform3(
        inputCss,
        /**
         * Relative path from project root to get stable CSS modules hash
         * https://github.com/vitejs/vite/blob/57463fc53fedc8f29e05ef3726f156a6daf65a94/packages/vite/src/node/plugins/css.ts#L2690
         */
        cleanUrl(path.relative(config.root, id)),
        isLightningCss ? lightningCssOptions : cssModuleConfig,
        devSourcemap
      );
      let outputCss = cssModule.code;
      const imports = /* @__PURE__ */ new Map();
      let counter = 0;
      const keepOriginalExport = shouldKeepOriginalExport(cssModuleConfig);
      const localsConventionFunction = getLocalesConventionFunction(cssModuleConfig);
      const registerImport = (fromFile, exportName) => {
        let importFrom = imports.get(fromFile);
        if (!importFrom) {
          importFrom = {};
          imports.set(fromFile, importFrom);
        }
        if (!exportName) {
          return;
        }
        if (!importFrom[exportName]) {
          importFrom[exportName] = `_${counter}`;
          counter += 1;
        }
        return importFrom[exportName];
      };
      const exports = {};
      await Promise.all(
        Object.entries(cssModule.exports).map(async ([exportName, exported]) => {
          const exportAs = /* @__PURE__ */ new Set();
          if (keepOriginalExport) {
            exportAs.add(exportName);
          }
          let code;
          let resolved;
          if (typeof exported === "string") {
            const transformedExport = localsConventionFunction?.(exportName, exportName, id);
            if (transformedExport) {
              exportAs.add(transformedExport);
            }
            code = exported;
            resolved = exported;
          } else {
            const transformedExport = localsConventionFunction?.(exportName, exported.name, id);
            if (transformedExport) {
              exportAs.add(transformedExport);
            }
            const composedClasses = await Promise.all(
              exported.composes.map(async (dep) => {
                if (dep.type === "dependency") {
                  const loaded = await loadExports(this, `${dep.specifier}?.module.css`, id);
                  const exportedEntry = loaded[dep.name];
                  if (!exportedEntry) {
                    throw new Error(`Cannot resolve ${JSON.stringify(dep.name)} from ${JSON.stringify(dep.specifier)}`);
                  }
                  const [exportAsName] = Array.from(exportedEntry.exportAs);
                  const importedAs = registerImport(dep.specifier, exportAsName);
                  return {
                    resolved: exportedEntry.resolved,
                    code: `\${${importedAs}}`
                  };
                }
                return {
                  resolved: dep.name,
                  code: dep.name
                };
              })
            );
            code = [exported.name, ...composedClasses.map((c) => c.code)].join(" ");
            resolved = [exported.name, ...composedClasses.map((c) => c.resolved)].join(" ");
          }
          exports[exportName] = {
            code,
            resolved,
            exportAs
          };
        })
      );
      let { map } = cssModule;
      const references = Object.entries(cssModule.references);
      if (references.length > 0) {
        const ms = new MagicString(outputCss);
        await Promise.all(
          references.map(async ([placeholder, source]) => {
            const loaded = await loadExports(this, `${source.specifier}?.module.css`, id);
            const exported = loaded[source.name];
            if (!exported) {
              throw new Error(`Cannot resolve "${source.name}" from "${source.specifier}"`);
            }
            registerImport(source.specifier);
            ms.replaceAll(placeholder, exported.code);
          })
        );
        outputCss = ms.toString();
        if (map) {
          const newMap = remapping(
            [
              ms.generateMap({
                source: id,
                file: id,
                includeContent: true
              }),
              map
            ],
            () => null
          );
          map = newMap;
        }
      }
      if ("getJSON" in cssModuleConfig && typeof cssModuleConfig.getJSON === "function") {
        const json = {};
        for (const exported of Object.values(exports)) {
          for (const exportAs of exported.exportAs) {
            json[exportAs] = exported.resolved;
          }
        }
        cssModuleConfig.getJSON(id, json, id);
      }
      const jsCode = generateEsm(imports, exports, allowArbitraryNamedExports);
      if (patchConfig?.generateSourceTypes) {
        const filePath = id.split("?", 2)[0];
        if (filePath && cssModuleRE.test(filePath)) {
          const fileExists = await access(filePath).then(() => true, () => false);
          if (fileExists) {
            await writeFile(
              `${id}.d.ts`,
              generateTypes(exports, allowArbitraryNamedExports)
            );
          }
        }
      }
      return {
        code: jsCode,
        map,
        meta: {
          [pluginName]: {
            css: outputCss,
            exports
          }
        }
      };
    }
  };
};
var directRequestRE = /[?&]direct\b/;
var inlineRE = /[?&]inline\b/;
var CSS_LANGS_RE = /\.(?:css|less|sass|scss|styl|stylus|pcss|postcss|sss)(?:$|\?)/;
var isDirectCSSRequest = (request) => CSS_LANGS_RE.test(request) && directRequestRE.test(request);
var appendInlineSoureMap = (map) => {
  if (typeof map !== "string") {
    map = JSON.stringify(map);
  }
  const sourceMapUrl = `data:application/json;base64,${Buffer.from(map).toString("base64")}`;
  return `
/*# sourceMappingURL=${sourceMapUrl} */`;
};
var supportNewCssModules = (viteCssPostPlugin, config, pluginInstance) => {
  const { transform: viteCssPostPluginTransform } = viteCssPostPlugin;
  if (typeof viteCssPostPluginTransform !== "function") {
    throw new TypeError("vite:css-post plugin transform is not a function");
  }
  viteCssPostPlugin.transform = async function(jsCode, id, options) {
    if (cssModuleRE.test(id)) {
      const inlined = inlineRE.test(id);
      const info = this.getModuleInfo(id);
      const pluginMeta = info.meta[pluginInstance.name];
      if (!pluginMeta) {
        throw new Error(`${pluginInstance.name} meta not found`);
      }
      let { css } = pluginMeta;
      if (config.command === "serve") {
        if (isDirectCSSRequest(id)) {
          return css;
        }
        if (options?.ssr) {
          return jsCode || `export default ${JSON.stringify(css)}`;
        }
        if (inlined) {
          return `export default ${JSON.stringify(css)}`;
        }
        if (config.css?.devSourcemap) {
          const map = this.getCombinedSourcemap();
          css += appendInlineSoureMap(map);
        }
        const code = [
          `import { updateStyle as __vite__updateStyle, removeStyle as __vite__removeStyle } from ${JSON.stringify(path$1.posix.join(config.base, "/@vite/client"))}`,
          `const __vite__id = ${JSON.stringify(id)}`,
          `const __vite__css = ${JSON.stringify(css)}`,
          "__vite__updateStyle(__vite__id, __vite__css)",
          // css modules exports change on edit so it can't self accept
          `${jsCode}`,
          "import.meta.hot.prune(() => __vite__removeStyle(__vite__id))"
        ].join("\n");
        return {
          code,
          map: { mappings: "" }
        };
      }
      const result = await Reflect.apply(viteCssPostPluginTransform, this, [css, id]);
      if (inlined) {
        return result;
      }
      return {
        code: jsCode,
        map: { mappings: "" },
        moduleSideEffects: "no-treeshake"
      };
    }
    return Reflect.apply(viteCssPostPluginTransform, this, arguments);
  };
};
var supportCssModulesHMR = (vitePlugins) => {
  const viteCssAnalysisPlugin = vitePlugins.find((plugin) => plugin.name === "vite:css-analysis");
  if (!viteCssAnalysisPlugin) {
    return;
  }
  const {
    configureServer,
    transform: transform3
  } = viteCssAnalysisPlugin;
  if (typeof transform3 !== "function") {
    throw new TypeError("vite:css-analysis plugin transform is not a function");
  }
  if (typeof configureServer !== "function") {
    throw new TypeError("vite:css-analysis plugin transform is not a function");
  }
  const tag = "?vite-css-modules?inline";
  viteCssAnalysisPlugin.configureServer = function(server) {
    const { getModuleById } = server.moduleGraph;
    server.moduleGraph.getModuleById = function(id) {
      const tagIndex = id.indexOf(tag);
      if (tagIndex !== -1) {
        id = id.slice(0, tagIndex) + id.slice(tagIndex + tag.length);
      }
      return Reflect.apply(getModuleById, this, [id]);
    };
    return Reflect.apply(configureServer, this, [server]);
  };
  viteCssAnalysisPlugin.transform = async function(css, id, options) {
    if (cssModuleRE.test(id)) {
      id += tag;
    }
    return Reflect.apply(transform3, this, [css, id, options]);
  };
};
var patchCssModules = (patchConfig) => ({
  name: "patch-css-modules",
  enforce: "pre",
  configResolved: (config) => {
    const pluginInstance = cssModules(config, patchConfig);
    const cssConfig = config.css;
    const isCssModulesDisabled = (cssConfig.transformer === "lightningcss" ? cssConfig.lightningcss?.cssModules : cssConfig.modules) === false;
    if (isCssModulesDisabled) {
      return;
    }
    if (cssConfig.transformer === "lightningcss") {
      if (cssConfig.lightningcss) {
        cssConfig.lightningcss.cssModules = false;
      }
      cssConfig.transformer = void 0;
    }
    cssConfig.modules = false;
    const viteCssPostPluginIndex = config.plugins.findIndex((plugin) => plugin.name === "vite:css-post");
    if (viteCssPostPluginIndex === -1) {
      throw new Error("vite:css-post plugin not found");
    }
    const viteCssPostPlugin = config.plugins[viteCssPostPluginIndex];
    config.plugins.splice(
      viteCssPostPluginIndex,
      0,
      pluginInstance
    );
    supportNewCssModules(
      viteCssPostPlugin,
      config,
      pluginInstance
    );
    supportCssModulesHMR(config.plugins);
  }
});

// index.ts
var import_css_class_generator = __toESM(require_css_class_generator(), 1);
var presets = () => ({
  name: "@basmilius/vite-vue-preset",
  config: () => ({
    build: {
      assetsInlineLimit: 0,
      cssMinify: "esbuild",
      minify: "esbuild",
      rollupOptions: {
        output: {
          assetFileNames: "[hash].[ext]",
          chunkFileNames: "[hash].js",
          entryFileNames: "[hash].js",
          compact: true,
          minifyInternalExports: true
        }
      }
    },
    css: {
      preprocessorMaxWorkers: true,
      preprocessorOptions: {
        scss: {
          api: "modern-compiler"
        }
      },
      modules: {
        generateScopedName(name) {
          if (name.startsWith("i__const_")) {
            name = name.substring(9);
            name = name.substring(0, name.length - 2);
          }
          const hash = createHash("sha1").update(name).digest("hex").substring(0, 5);
          return (0, import_css_class_generator.default)(parseInt(hash, 16));
        }
      }
    },
    json: {
      stringify: true
    },
    resolve: {
      alias: {
        "@": resolve4(process.cwd(), "./src")
      },
      extensions: [
        ".js",
        ".ts",
        ".json",
        ".vue"
      ]
    }
  })
});
var vite_vue_preset_default = () => [
  patchCssModules(),
  presets()
];
export {
  vite_vue_preset_default as default
};
