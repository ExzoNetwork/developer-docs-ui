"use strict";
(() => {
var exports = {};
exports.id = 972;
exports.ids = [972];
exports.modules = {

/***/ 424:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7834);
/* harmony import */ var _components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7336);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__, _components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__]);
([_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__, _components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/*@jsxRuntime automatic @jsxImportSource react*/ 

const title = "Industry use cases";

const sections = [
    {
        title: "Decentralized applications",
        id: "applications"
    },
    {
        title: "NFT Marketplaces",
        id: "marketplaces"
    },
    {
        title: "Decentralized finance",
        id: "finance"
    }
];
function _createMdxContent(props) {
    const _components = Object.assign({
        h1: "h1",
        p: "p",
        h2: "h2",
        ul: "ul",
        li: "li",
        h3: "h3"
    }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h1, {
                children: "Industry use cases",
                ...{
                    className: "border-b border-zinc-900/5 dark:border-white/5 xl:max-w-none pb-5 mb-7"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "How Exzo Network can be implemented into different industries, projects, and markets.",
                ...{
                    className: "lead"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "applications",
                title: "Decentralized applications",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Develop cutting-edge Web3 applications on immutable, shared ledgers that no one party can control, or use Exzo Networks as a bridge solution."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "example-decentralized-applications",
                children: "Example decentralized applications"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Decentralized exchange with automated market making via smart contracts. Ex: UniSwap, Pancakeswap, SushiSwap."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Yield generating applications such as Yearn Finance."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Swap router aggregators from multiple liquidity sources on different decentralized exchanges such as 1inch or 0x."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Lending and borrowing via smart contracts such as AAVE."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Liquidity farms."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Governance voting applications using smart contracts."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "marketplaces",
                title: "NFT Marketplaces",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Build a marketplace for digital collectibles that customers can buy, trade, and share on a carbon-neutral blockchain with 0 gas fees"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Non-Fungible Tokens (NFTs) have captured the imagination of the Web3 community. While the most powerful NFT use cases might still be to come, this technology is already transforming digital ownership, identity, creative expression, and community membership.\r\nBecause NFTs are digital assets that can be bought, sold, or traded, NFT marketplaces play an important role in holding inventory and connecting buyers and sellers.\r\nIn this blog, we are going to build the “backend” of an NFT marketplace using Solidity. We’ll go through the process for building the smart contracts that hold the business logic for our NFT marketplace step-by-step. In practice, this means creating a single NftMarketplace.sol smart contract and a sample ERC721-compliant token (NFT) contract which we can use to list on our marketplace."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "finance",
                title: "Decentralized finance",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Key examples of how Exzo Network can be implemented into decentralized finance."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "use-cases-within-decentralized-finance",
                children: "Use cases within decentralized finance"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Removing Inefficient Processes"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The trust, security, and automation that blockchain offers can transform paper-based finance systems into fully digital processes that reduce costs and increase efficiency."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Processing Payments and Transfers"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The security and efficiency of smart contracts make blockchain uniquely suited for building payment processing systems that can transfer money instantly, while maintaining control and auditability."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Automating Loan Processing and Lending"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "You can utilize Exzo Networks blockchain to simplify and accelerate the process of completing loans by automating syndicate formation, handling underwriting, processing fund distribution, and more."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Enabling Cross-Border and Unbanked Services"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Exzo Network offers enormous advantages for cross-border payment solutions and serving the unbanked, such as eliminating intermediaries, reducing settlement times, increasing trust, and reducing costs."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Modernizing Trade Finance"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Trade finance requires the exchange of large amounts of secure data between multiple parties. Exzo Networks blockchain inherent transparency and security makes it possible to digitize these processes, creating enormous efficiencies."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Managing Digital Assets"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Exzo Network makes it possible to create digital representations of real world assets, bringing the processes used to transfer, trade, and manage them into the modern age."
            })
        ]
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout  } = Object.assign({}, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
    return MDXLayout ? react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXLayout, Object.assign({}, props, {
        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_createMdxContent, props)
    })) : _createMdxContent(props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);
const getStaticProps = ()=>({
        props: JSON.parse(JSON.stringify({
            GuidesOther: _components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I,
            _provideComponents: _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents,
            sections,
            title
        }))
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7834:
/***/ ((module) => {

module.exports = import("@mdx-js/react");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,47,825,336], () => (__webpack_exec__(424)));
module.exports = __webpack_exports__;

})();