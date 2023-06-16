"use strict";
(() => {
var exports = {};
exports.id = 363;
exports.ids = [363];
exports.modules = {

/***/ 5726:
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

const title = "Wallets";

const sections = [
    {
        title: "Exzo Wallet Guide",
        id: "wallet_guide"
    },
    {
        title: "App Wallets",
        id: "app_wallets"
    },
    {
        title: "Web Wallets",
        id: "web_wallets"
    },
    {
        title: "Command-Line Wallets",
        id: "command_wallets"
    },
    {
        title: "Support/ Troubleshooting",
        id: "support_troubleshooting"
    }
];
function _createMdxContent(props) {
    const _components = Object.assign({
        h1: "h1",
        p: "p",
        h2: "h2",
        h3: "h3"
    }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h1, {
                children: "Wallets",
                ...{
                    className: "border-b border-zinc-900/5 dark:border-white/5 xl:max-w-none pb-5 mb-7"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "wallet_guide",
                title: "Exzo Wallet Guide",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "This document describes the different wallet options that are available to users of the Exzo Network who want to be able to send, receive and interact with XZO tokens on the Exzo Network blockchain."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "what-is-a-wallet",
                children: "What is a Wallet?"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A crypto wallet is an essential tool for anyone looking to securely manage their cryptocurrency holdings. It serves as a container for a collection of key pairs, enabling the sending, receiving, and tracking of cryptocurrency transactions. Wallets can come in various forms, including digital files, pieces of paper, or specialized hardware devices. Some wallets also offer user-friendly smartphone apps and computer programs to manage and interact with their keys."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Each keypair consists of a private key, which must be kept confidential at all times, and its corresponding public key or wallet address. The public key is used to receive cryptocurrency, and it can be shared openly, whereas the private key is required to sign transactions and make changes to the wallet."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Wallets provide various approaches to keypair security, ranging from ease of use to more robust backup solutions. Exzo Network supports multiple wallet types to ensure users can balance convenience with security according to their preferences."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "To receive XZO tokens on the Exzo Network blockchain, creating a wallet is the first crucial step. Once created, the wallet generates a unique public key that can be shared with others to receive tokens. It's important to note that the private key must be kept secure and should never be shared with anyone. Losing the private key could result in the permanent loss of all tokens stored in the wallet."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "supported-wallets",
                children: "Supported Wallets"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a versatile blockchain platform, Exzo Network supports various types of wallets to cater to users' diverse needs. These wallets can be accessed through the Exzo Network native command-line app or third-party solutions."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "For most users, we recommend using one of our user-friendly app wallets or browser-based web wallets, which provide a familiar and intuitive interface for managing their cryptocurrency holdings. These wallets simplify the process of sending, receiving, and tracking transactions without requiring the user to learn complex command-line tools."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "However, for advanced users or developers seeking to leverage the full capabilities of the Exzo Network blockchain, our command-line wallets may be more suitable. These wallets provide access to all features of the platform and are typically the first to support new features before third-party wallets integrate them."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "In summary, whether you're a novice or an experienced user, Exzo Network has a wallet solution to suit your needs. We encourage users to explore our range of wallet options and select the one that offers the optimal balance of security, convenience, and functionality for their specific requirements."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "app_wallets",
                title: "App Wallets",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "exzo-network-wallets",
                children: "Exzo Network Wallets"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Exzo Network provides users with a choice to register and log in to their own wallet on either the web version or desktop. Regardless of the version, the wallet functions are identical, enabling users to manage their cryptocurrency assets seamlessly."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Moreover, our wallet is designed to be user-friendly and intuitive, offering a straightforward interface that simplifies the process of sending and receiving tokens, as well as tracking transaction history. Additionally, we are continually updating the wallet with the latest exchange rates, ensuring users are informed about the value of their holdings in real-time."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "By offering users a choice of web or desktop versions, we strive to provide flexibility and convenience to our users, making it easy for them to manage their cryptocurrency assets from any device, anywhere in the world."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The wallet is continually updated with the current XZO exchange rates against all fiat currencies."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Desktop Wallet"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The desktop version enables users to store their wallet directly on their computer. Using the desktop Exzo Network wallet, users are protected against online attacks, including phishing, IP spoofing, and XSS. You can download App on every popular OS - MacOS, Windows, Linux."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Mobile Wallet"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "With mobile version you initialize your wallet with a single mnemonic phrase. This way you will never lose your private keys. You can easily, selling, transferring, as well as storing digital currency."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Available on: Android, iOS"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "web_wallets",
                title: "Web Wallets",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "While the web version of Exzo Network's wallet offers convenient access to your cryptocurrency assets from any device, it's essential to note that the security of your assets may be lower if you're not using a secure device."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Web wallets are susceptible to various security risks, including malware infections, phishing attacks, and other forms of cyber threats that can compromise the safety of your cryptocurrency holdings. Therefore, it's vital to ensure that you're using a trusted and secure device before logging into your web wallet."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "That being said, Exzo Network takes security very seriously, and we implement various measures to protect our users' assets, such as advanced encryption protocols and multi-factor authentication. Additionally, we always recommend our users take additional steps to protect their cryptocurrency assets, such as enabling two-factor authentication and using secure devices to access their wallets."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "In conclusion, while the web version of our wallet offers ease of use and flexibility, we urge our users to exercise caution when accessing their cryptocurrency assets from any device and take appropriate security measures to safeguard their holdings."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "command_wallets",
                title: "Command-Line Wallets",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Exzo Network offers users the flexibility to choose between several wallet types, including Command Line Wallets and App Wallets, to interface with the Exzo Network blockchain."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "For those new to using command line tools, we highly recommend using one of our App Wallets, which provide a user-friendly interface for sending and receiving XZO tokens without the need for any technical expertise."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "However, for advanced users or developers who prefer to work with command line tools, we also offer Command Line Wallets, which provide direct access to the Exzo Network command line tools. To use a Command Line Wallet, users must first install the Exzo Network CLI tools, which can be downloaded from our website."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Regardless of which wallet type you choose, Exzo Network prioritizes security and offers advanced encryption protocols, multi-factor authentication, and other features to safeguard your cryptocurrency holdings."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "To use a Command Line Wallet, you must first install the Exzo Network CLI tools"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "file-system-wallet",
                children: "File System Wallet"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A file system wallet, aka an FS wallet, is a directory in your computer's file system. Each file in the directory holds a keypair."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "File System Wallet Security"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A file system wallet is the most convenient and least secure form of wallet. It is convenient because the keypair is stored in a simple file. You can generate as many keys as you would like and trivially back them up by copying the files. It is insecure because the keypair files are unencrypted. If you are the only user of your computer and you are confident it is free of malware, an FS wallet is a fine solution for small amounts of cryptocurrency. If, however, your computer contains malware and is connected to the Internet, that malware may upload your keys and use them to take your tokens. Likewise, because the keypairs are stored on your computer as files, a skilled hacker with physical access to your computer may be able to access it. Using an encrypted hard drive, such as FileVault on MacOS, minimizes that risk."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "File System Wallet"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "paper-wallet",
                children: "Paper Wallet"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A paper wallet is a collection of seed phrases written on paper. A seed phrase is some number of words (typically 12 or 24) that can be used to regenerate a keypair on demand."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Paper Wallet Security"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "In terms of convenience versus security, a paper wallet sits at the opposite side of the spectrum from an FS wallet. It is terribly inconvenient to use, but offers excellent security. That high security is further amplified when paper wallets are used in conjunction with offline signing. Custody services such as Coinbase Custody use this combination. Paper wallets and custody services are an excellent way to secure a large number of tokens for a long period of time."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "support_troubleshooting",
                title: "Support/ Troubleshooting",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "If you have questions or are having trouble setting up or using your wallet of choice, please make sure you've read through all the relevant pages in our Wallet Guide. The Exzo Network team is working hard to support new features on popular wallets, and we do our best to keep our documents up to date with the latest available features."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "If you have questions after reading the docs, feel free to reach out to us on our Telegram."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "For technical support, contact our support team if you have any technical questions."
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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,47,825,336], () => (__webpack_exec__(5726)));
module.exports = __webpack_exports__;

})();