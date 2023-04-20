import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import external from "rollup-plugin-peer-deps-external";
import copy from "rollup-plugin-copy";
import packageJson from "./package.json" assert {type: "json"};

const EXTENSIONS = [".ts", ".tsx", ".js", ".jsx", ".json", ".d.ts"];

export default [
    {
        external: [
            "react",
            "react-dom",
        ],
        input: "src/index.js",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            }
        ],
        plugins: [
            resolve(),
            external({
                includeDependencies: true,
            }),
            babel({babelHelpers: "bundled"}),
            commonjs(),
            postcss(),
			copy({
				targets: [
					{src: "src/index.d.ts", dest: "dist/types/index.d.ts"}
				]
			})
        ],
    },
    {
        input: "dist/esm/index.js",
        output: [
			{ dir: "dist/esm", format: "esm", sourcemap: true },
			{ dir: "dist/cjs", format: "cjs", exports: "named", sourcemap: true },
        ],
        plugins: [],
        external: [/\.css$/],
    }
]