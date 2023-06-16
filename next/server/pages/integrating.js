"use strict";
(() => {
var exports = {};
exports.id = 426;
exports.ids = [426];
exports.modules = {

/***/ 4810:
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

const title = "Integrating";

const sections = [
    {
        title: "Add Exzo Network to Your Exchange",
        id: "exzo_network_to_exchange"
    }
];
function _createMdxContent(props) {
    const _components = Object.assign({
        h1: "h1",
        p: "p",
        h2: "h2",
        ol: "ol",
        li: "li",
        pre: "pre",
        code: "code",
        ul: "ul",
        h3: "h3"
    }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h1, {
                children: "Integrating",
                ...{
                    className: "border-b border-zinc-900/5 dark:border-white/5 xl:max-w-none pb-5 mb-7"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "exzo_network_to_exchange",
                title: "Add Exzo Network to Your Exchange",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "This guide describes how to add Exzo Network native token XZO to your cryptocurrency exchange."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "node-setup",
                children: "Node Setup"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "We highly recommend setting up at least two of your own Exzo Network api nodes to give you a trusted entrypoint to the network, allow you full control over how much data is retained, and ensure you do not miss any data if one node fails."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "To run an api node:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Install the Exzo Network command-line tool suite"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Boot the node with at least the following parameters:"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "exzonetwork-validator \\\r\n  --ledger <LEDGER_PATH> \\\r\n  --identity <VALIDATOR_IDENTITY_KEYPAIR> \\\r\n  --entrypoint <CLUSTER_ENTRYPOINT> \\\r\n  --expected-genesis-hash <EXPECTED_GENESIS_HASH> \\\r\n  --expected-shred-version <EXPECTED_SHRED_VERSION> \\\r\n  --rpc-port 8899 \\\r\n  --no-voting \\\r\n  --enable-rpc-transaction-history \\\r\n  --limit-ledger-size <SHRED_COUNT> \\\r\n  --trusted-validator <VALIDATOR_ADDRESS> \\\r\n  --no-untrusted-rpc\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">exzonetwork-validator \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  --ledger </span><span style="color: var(--shiki-token-keyword)">&lt;</span><span style="color: var(--shiki-color-text)">LEDGER_PATH</span><span style="color: var(--shiki-token-keyword)">&gt;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  --identity </span><span style="color: var(--shiki-token-keyword)">&lt;</span><span style="color: var(--shiki-color-text)">VALIDATOR_IDENTITY_KEYPAIR</span><span style="color: var(--shiki-token-keyword)">&gt;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  --entrypoint </span><span style="color: var(--shiki-token-keyword)">&lt;</span><span style="color: var(--shiki-color-text)">CLUSTER_ENTRYPOINT</span><span style="color: var(--shiki-token-keyword)">&gt;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  --expected-genesis-hash </span><span style="color: var(--shiki-token-keyword)">&lt;</span><span style="color: var(--shiki-color-text)">EXPECTED_GENESIS_HASH</span><span style="color: var(--shiki-token-keyword)">&gt;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  --expected-shred-version </span><span style="color: var(--shiki-token-keyword)">&lt;</span><span style="color: var(--shiki-color-text)">EXPECTED_SHRED_VERSION</span><span style="color: var(--shiki-token-keyword)">&gt;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  --rpc-port 8899 \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  --no-voting \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  --enable-rpc-transaction-history \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  --limit-ledger-size </span><span style="color: var(--shiki-token-keyword)">&lt;</span><span style="color: var(--shiki-color-text)">SHRED_COUNT</span><span style="color: var(--shiki-token-keyword)">&gt;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  --trusted-validator </span><span style="color: var(--shiki-token-keyword)">&lt;</span><span style="color: var(--shiki-color-text)">VALIDATOR_ADDRESS</span><span style="color: var(--shiki-token-keyword)">&gt;</span><span style="color: var(--shiki-color-text)"> \\</span></span>\n<span><span style="color: var(--shiki-color-text)">  --no-untrusted-rpc</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Customize ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "--ledger"
                    }),
                    " to your desired ledger storage location, and ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "--rpc-port"
                    }),
                    " to the port you want to expose."
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "The ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "--entrypoint"
                    }),
                    " and ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "--expected-genesis-hash"
                    }),
                    " parameters are all specific to the cluster you are joining. Current parameters for Mainnet Beta"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "The ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "--limit-ledger-size"
                    }),
                    " parameter allows you to specify how many ledger shreds your node retains on disk. If you do not include this parameter, the validator will keep the entire ledger until it runs out of disk space. The default value attempts to keep the ledger disk usage under 500GB. More or less disk usage may be requested by adding an argument to ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "--limit-ledger-size"
                    }),
                    " if desired. Check ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "exzonetwork-validator --help"
                    }),
                    " for the default limit value used by ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "--limit-ledger-size"
                    }),
                    ". More information about selecting a custom limit value is available here."
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Specifying one or more ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "--trusted-validator"
                    }),
                    " parameters can protect you from booting from a malicious snapshot. More on the value of booting with trusted validators"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Optional parameters to consider:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "--private-rpc"
                            }),
                            " prevents your RPC port from being published for use by other nodes"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "--rpc-bind-address"
                            }),
                            " allows you to specify a different IP address to bind the RPC port"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Automatic Restarts"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "We recommend configuring each of your nodes to restart automatically on exit, to ensure you miss as little data as possible. Running the Exzo Network software as a systemd service is one great option."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Ledger Continuity"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "By default, each of your nodes will boot from a snapshot provided by one of your trusted validators. This snapshot reflects the current state of the chain, but does not contain the complete historical ledger. If one of your node exits and boots from a new snapshot, there may be a gap in the ledger on that node. In order to prevent this issue, add the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "--no-snapshot-fetch"
                    }),
                    " parameter to your ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "exzonetwork-validator"
                    }),
                    " command to receive historical ledger data instead of a snapshot."
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "If you pass the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "--no-snapshot-fetch"
                    }),
                    " parameter on your initial boot, it will take your node a very long time to catch up. We recommend booting from a snapshot first, and then using the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "--no-snapshot-fetch"
                    }),
                    " parameter for reboots."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "It is important to note that the amount of historical ledger available to your nodes is limited to what your trusted validators retain. You will need to ensure your nodes do not experience downtimes longer than this span, if ledger continuity is crucial for you."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "setting-up-deposit-accounts",
                children: "Setting up Deposit Accounts"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Exzo Network accounts do not require any on-chain initialization; once they contain some XZO, they exist. To set up a deposit account for your exchange, simply generate a Exzo Network keypair using any of our wallet tools."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "We recommend using a unique deposit account for each of your users."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Exzo Network accounts are charged rent on creation and once per epoch, but they can be made rent-exempt if they contain 2-years worth of rent in XZO. In order to find the minimum rent-exempt balance for your deposit accounts, query the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "getMinimumBalanceForRentExemption"
                    }),
                    " endpoint:"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "json",
                code: 'curl -X POST -H "Content-Type: application/json" -d \'{"jsonrpc": "2.0","id":1,"method":"getMinimumBalanceForRentExemption","params":[0]}\' localhost:8899\r\n\r\n{"jsonrpc":"2.0","result":890880,"id":1}\n',
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-json",
                    children: '<span><span style="color: var(--shiki-color-text)">curl -X POST -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Content-Type: application/json&quot;</span><span style="color: var(--shiki-color-text)"> -d &#39;{</span><span style="color: var(--shiki-token-keyword)">&quot;jsonrpc&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;2.0&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-keyword)">&quot;method&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;getMinimumBalanceForRentExemption&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-keyword)">&quot;params&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)">[</span><span style="color: var(--shiki-token-constant)">0</span><span style="color: var(--shiki-color-text)">]}&#39; localhost:</span><span style="color: var(--shiki-token-constant)">8899</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">{</span><span style="color: var(--shiki-token-keyword)">&quot;jsonrpc&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;2.0&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-keyword)">&quot;result&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-token-constant)">890880</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Offline Accounts"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "You may wish to keep the keys for one or more collection accounts offline for greater security. If so, you will need to move XZO to hot accounts using our offline methods."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "listening-for-deposits",
                children: "Listening for Deposits"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "When a user wants to deposit XZO into your exchange, instruct them to send a transfer to the appropriate deposit address."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "validating-user-supplied-account-addresses-for-withdrawals-in-xzo",
                children: "Validating User-supplied Account Addresses for Withdrawals in XZO"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Solana addresses a 32-byte array, encoded with the bitcoin base58 alphabet. This results in an ASCII text string matching the following regular expression:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "[1-9A-HJ-NP-Za-km-z]",
                    (32, 44)
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "This check is insufficient on its own as Solana addresses are not checksummed, so typos cannot be detected. To further validate the user's input, the string can be decoded and the resulting byte array's length confirmed to be 32. However, there are some addresses that can decode to 32 bytes despite a typo such as a single missing character, reversed characters and ignored case."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Poll for Blocks"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The easiest way to track all the deposit accounts for your exchange is to poll for each confirmed block and inspect for addresses of interest, using the JSON-RPC service of your Exzo Network api node."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "To identify which blocks are available, send a ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "getConfirmedBlocks"
                            }),
                            " request, passing the last block you have already processed as the start-slot parameter:"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "json",
                code: 'curl -X POST -H "Content-Type: application/json" -d \'{"jsonrpc": "2.0","id":1,"method":"getConfirmedBlocks","params":[5]}\' localhost:8899\r\n \r\n{"jsonrpc":"2.0","result":[5,6,8,9,11],"id":1}\n',
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-json",
                    children: '<span><span style="color: var(--shiki-color-text)">curl -X POST -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Content-Type: application/json&quot;</span><span style="color: var(--shiki-color-text)"> -d &#39;{</span><span style="color: var(--shiki-token-keyword)">&quot;jsonrpc&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;2.0&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-keyword)">&quot;method&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;getConfirmedBlocks&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-keyword)">&quot;params&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)">[</span><span style="color: var(--shiki-token-constant)">5</span><span style="color: var(--shiki-color-text)">]}&#39; localhost:</span><span style="color: var(--shiki-token-constant)">8899</span></span>\n<span><span style="color: var(--shiki-color-text)"> </span></span>\n<span><span style="color: var(--shiki-color-text)">{</span><span style="color: var(--shiki-token-keyword)">&quot;jsonrpc&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;2.0&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-keyword)">&quot;result&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)">[</span><span style="color: var(--shiki-token-constant)">5</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-constant)">6</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-constant)">8</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-constant)">9</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-constant)">11</span><span style="color: var(--shiki-color-text)">]</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Not every slot produces a block, so there may be gaps in the sequence of integers."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "For each block, request its contents with a getConfirmedBlock request:"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "json",
                code: 'curl -X POST -H "Content-Type: application/json" -d \'{"jsonrpc": "2.0","id":1,"method":"getConfirmedBlock","params":[5, "json"]}\' localhost:8899\r\n \r\n{\r\n  "jsonrpc": "2.0",\r\n  "result": {\r\n    "blockhash": "2WcrsKSVANoe6xQHKtCcqNdUpCQPQ3vb6QTgi1dcE2oL",\r\n    "parentSlot": 4,\r\n    "previousBlockhash": "7ZDoGW83nXgP14vnn9XhGSaGjbuLdLWkQAoUQ7pg6qDZ",\r\n    "rewards": [],\r\n    "transactions": [\r\n      {\r\n        "meta": {\r\n          "err": null,\r\n          "fee": 5000,\r\n          "postBalances": [\r\n            2033973061360,\r\n            218099990000,\r\n            42000000003\r\n          ],\r\n          "preBalances": [\r\n            2044973066360,\r\n            207099990000,\r\n            42000000003\r\n          ],\r\n          "status": {\r\n            "Ok": null\r\n          }\r\n        },\r\n        "transaction": {\r\n          "message": {\r\n            "accountKeys": [\r\n              "Bbqg1M4YVVfbhEzwA9SpC9FhsaG83YMTYoR4a8oTDLX",\r\n              "47Sbuv6jL7CViK9F2NMW51aQGhfdpUu7WNvKyH645Rfi",\r\n              "11111111111111111111111111111111"\r\n            ],\r\n            "header": {\r\n              "numReadonlySignedAccounts": 0,\r\n              "numReadonlyUnsignedAccounts": 1,\r\n              "numRequiredSignatures": 1\r\n            },\r\n            "instructions": [\r\n              {\r\n                "accounts": [\r\n                  0,\r\n                  1\r\n                ],\r\n                "data": "3Bxs3zyH82bhpB8j",\r\n                "programIdIndex": 2\r\n              }\r\n            ],\r\n            "recentBlockhash": "7GytRgrWXncJWKhzovVoP9kjfLwoiuDb3cWjpXGnmxWh"\r\n          },\r\n          "signatures": [\r\n            "dhjhJp2V2ybQGVfELWM1aZy98guVVsxRCB5KhNiXFjCBMK5KEyzV8smhkVvs3xwkAug31KnpzJpiNPtcD5bG1t6"\r\n          ]\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  "id": 1\r\n}\n',
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-json",
                    children: '<span><span style="color: var(--shiki-color-text)">curl -X POST -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Content-Type: application/json&quot;</span><span style="color: var(--shiki-color-text)"> -d &#39;{</span><span style="color: var(--shiki-token-keyword)">&quot;jsonrpc&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;2.0&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-keyword)">&quot;method&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;getConfirmedBlock&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-keyword)">&quot;params&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)">[</span><span style="color: var(--shiki-token-constant)">5</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;json&quot;</span><span style="color: var(--shiki-color-text)">]}&#39; localhost:</span><span style="color: var(--shiki-token-constant)">8899</span></span>\n<span><span style="color: var(--shiki-color-text)"> </span></span>\n<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;jsonrpc&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;2.0&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;result&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;blockhash&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;2WcrsKSVANoe6xQHKtCcqNdUpCQPQ3vb6QTgi1dcE2oL&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;parentSlot&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">4</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;previousBlockhash&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;7ZDoGW83nXgP14vnn9XhGSaGjbuLdLWkQAoUQ7pg6qDZ&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;rewards&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> []</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;transactions&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">      {</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;meta&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">          </span><span style="color: var(--shiki-token-keyword)">&quot;err&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">          </span><span style="color: var(--shiki-token-keyword)">&quot;fee&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">5000</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">          </span><span style="color: var(--shiki-token-keyword)">&quot;postBalances&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-constant)">2033973061360</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-constant)">218099990000</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-constant)">42000000003</span></span>\n<span><span style="color: var(--shiki-color-text)">          ]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">          </span><span style="color: var(--shiki-token-keyword)">&quot;preBalances&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-constant)">2044973066360</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-constant)">207099990000</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-constant)">42000000003</span></span>\n<span><span style="color: var(--shiki-color-text)">          ]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">          </span><span style="color: var(--shiki-token-keyword)">&quot;status&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;Ok&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span></span>\n<span><span style="color: var(--shiki-color-text)">          }</span></span>\n<span><span style="color: var(--shiki-color-text)">        }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;transaction&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">          </span><span style="color: var(--shiki-token-keyword)">&quot;message&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;accountKeys&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">              </span><span style="color: var(--shiki-token-string-expression)">&quot;Bbqg1M4YVVfbhEzwA9SpC9FhsaG83YMTYoR4a8oTDLX&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">              </span><span style="color: var(--shiki-token-string-expression)">&quot;47Sbuv6jL7CViK9F2NMW51aQGhfdpUu7WNvKyH645Rfi&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">              </span><span style="color: var(--shiki-token-string-expression)">&quot;11111111111111111111111111111111&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">            ]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;header&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">              </span><span style="color: var(--shiki-token-keyword)">&quot;numReadonlySignedAccounts&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">0</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">              </span><span style="color: var(--shiki-token-keyword)">&quot;numReadonlyUnsignedAccounts&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">              </span><span style="color: var(--shiki-token-keyword)">&quot;numRequiredSignatures&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">1</span></span>\n<span><span style="color: var(--shiki-color-text)">            }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;instructions&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">              {</span></span>\n<span><span style="color: var(--shiki-color-text)">                </span><span style="color: var(--shiki-token-keyword)">&quot;accounts&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">                  </span><span style="color: var(--shiki-token-constant)">0</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">                  </span><span style="color: var(--shiki-token-constant)">1</span></span>\n<span><span style="color: var(--shiki-color-text)">                ]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">                </span><span style="color: var(--shiki-token-keyword)">&quot;data&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;3Bxs3zyH82bhpB8j&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">                </span><span style="color: var(--shiki-token-keyword)">&quot;programIdIndex&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">2</span></span>\n<span><span style="color: var(--shiki-color-text)">              }</span></span>\n<span><span style="color: var(--shiki-color-text)">            ]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;recentBlockhash&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;7GytRgrWXncJWKhzovVoP9kjfLwoiuDb3cWjpXGnmxWh&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">          }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">          </span><span style="color: var(--shiki-token-keyword)">&quot;signatures&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-string-expression)">&quot;dhjhJp2V2ybQGVfELWM1aZy98guVVsxRCB5KhNiXFjCBMK5KEyzV8smhkVvs3xwkAug31KnpzJpiNPtcD5bG1t6&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">          ]</span></span>\n<span><span style="color: var(--shiki-color-text)">        }</span></span>\n<span><span style="color: var(--shiki-color-text)">      }</span></span>\n<span><span style="color: var(--shiki-color-text)">    ]</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">1</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "The ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "preBalances"
                    }),
                    " and ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "postBalances"
                    }),
                    " fields allow you to track the balance changes in every account without having to parse the entire transaction. They list the starting and ending balances of each account in lamport, indexed to the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "accountKeys"
                    }),
                    " list. For example, if the deposit address if interest is ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "47Sbuv6jL7CViK9F2NMW51aQGhfdpUu7WNvKyH645Rfi"
                    }),
                    ", this transaction represents a transfer of 218099990000 - 207099990000 = 11000000000 lamports = 11 XZO"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "If you need more information about the transaction type or other specifics, you can request the block from RPC in binary format, and parse it using either our Rust SDK or Javascript SDK."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Address History"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "You can also query the transaction history of a specific address. This is generally not a viable method for tracking all your deposit addresses over all slots, but may be useful for examining a few accounts for a specific period of time."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Send a ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "getConfirmedSignaturesForAddress2"
                            }),
                            " request to the api node, specifying a range of recent slots:"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "json",
                code: 'curl -X POST -H "Content-Type: application/json" -d \'{"jsonrpc": "2.0","id":1,"method":"getConfirmedSignaturesForAddress2","params":["6H94zdiaYfRfPfKjYLjyr2VFBg6JHXygy84r3qhc3NsC", {"limit": 3}]}\' localhost:8899\r\n \r\n{\r\n  "jsonrpc": "2.0",\r\n  "result": [\r\n    {\r\n      "err": null,\r\n      "memo": null,\r\n      "signature": "35YGay1Lwjwgxe9zaH6APSHbt9gYQUCtBWTNL3aVwVGn9xTFw2fgds7qK5AL29mP63A9j3rh8KpN1TgSR62XCaby",\r\n      "slot": 114\r\n    },\r\n    {\r\n      "err": null,\r\n      "memo": null,\r\n      "signature": "4bJdGN8Tt2kLWZ3Fa1dpwPSEkXWWTSszPSf1rRVsCwNjxbbUdwTeiWtmi8soA26YmwnKD4aAxNp8ci1Gjpdv4gsr",\r\n      "slot": 112\r\n    },\r\n    {\r\n      "err": null,\r\n      "memo": null,\r\n      "signature": "dhjhJp2V2ybQGVfELWM1aZy98guVVsxRCB5KhNiXFjCBMK5KEyzV8smhkVvs3xwkAug31KnpzJpiNPtcD5bG1t6",\r\n      "slot": 108\r\n    }\r\n  ],\r\n  "id": 1\r\n}\r\nFor each signature returned, get the transaction details by sending a getConfirmedTransaction request:\r\ncurl -X POST -H "Content-Type: application/json" -d \'{"jsonrpc": "2.0","id":1,"method":"getConfirmedTransaction","params":["dhjhJp2V2ybQGVfELWM1aZy98guVVsxRCB5KhNiXFjCBMK5KEyzV8smhkVvs3xwkAug31KnpzJpiNPtcD5bG1t6", "json"]}\' localhost:8899\r\n \r\n// Result\r\n{\r\n  "jsonrpc": "2.0",\r\n  "result": {\r\n    "slot": 5,\r\n    "transaction": {\r\n      "message": {\r\n        "accountKeys": [\r\n          "Bbqg1M4YVVfbhEzwA9SpC9FhsaG83YMTYoR4a8oTDLX",\r\n          "47Sbuv6jL7CViK9F2NMW51aQGhfdpUu7WNvKyH645Rfi",\r\n          "11111111111111111111111111111111"\r\n        ],\r\n        "header": {\r\n          "numReadonlySignedAccounts": 0,\r\n          "numReadonlyUnsignedAccounts": 1,\r\n          "numRequiredSignatures": 1\r\n        },\r\n        "instructions": [\r\n          {\r\n            "accounts": [\r\n              0,\r\n              1\r\n            ],\r\n            "data": "3Bxs3zyH82bhpB8j",\r\n            "programIdIndex": 2\r\n          }\r\n        ],\r\n        "recentBlockhash": "7GytRgrWXncJWKhzovVoP9kjfLwoiuDb3cWjpXGnmxWh"\r\n      },\r\n      "signatures": [\r\n        "dhjhJp2V2ybQGVfELWM1aZy98guVVsxRCB5KhNiXFjCBMK5KEyzV8smhkVvs3xwkAug31KnpzJpiNPtcD5bG1t6"\r\n      ]\r\n    },\r\n    "meta": {\r\n      "err": null,\r\n      "fee": 5000,\r\n      "postBalances": [\r\n        2033973061360,\r\n        218099990000,\r\n        42000000003\r\n      ],\r\n      "preBalances": [\r\n        2044973066360,\r\n        207099990000,\r\n        42000000003\r\n      ],\r\n      "status": {\r\n        "Ok": null\r\n      }\r\n    }\r\n  },\r\n  "id": 1\r\n}\n',
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-json",
                    children: '<span><span style="color: var(--shiki-color-text)">curl -X POST -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Content-Type: application/json&quot;</span><span style="color: var(--shiki-color-text)"> -d &#39;{</span><span style="color: var(--shiki-token-keyword)">&quot;jsonrpc&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;2.0&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-keyword)">&quot;method&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;getConfirmedSignaturesForAddress2&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-keyword)">&quot;params&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)">[</span><span style="color: var(--shiki-token-string-expression)">&quot;6H94zdiaYfRfPfKjYLjyr2VFBg6JHXygy84r3qhc3NsC&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> {</span><span style="color: var(--shiki-token-keyword)">&quot;limit&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">3</span><span style="color: var(--shiki-color-text)">}]}&#39; localhost:</span><span style="color: var(--shiki-token-constant)">8899</span></span>\n<span><span style="color: var(--shiki-color-text)"> </span></span>\n<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;jsonrpc&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;2.0&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;result&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;err&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;memo&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;signature&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;35YGay1Lwjwgxe9zaH6APSHbt9gYQUCtBWTNL3aVwVGn9xTFw2fgds7qK5AL29mP63A9j3rh8KpN1TgSR62XCaby&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;slot&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">114</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;err&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;memo&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;signature&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;4bJdGN8Tt2kLWZ3Fa1dpwPSEkXWWTSszPSf1rRVsCwNjxbbUdwTeiWtmi8soA26YmwnKD4aAxNp8ci1Gjpdv4gsr&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;slot&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">112</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;err&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;memo&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;signature&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;dhjhJp2V2ybQGVfELWM1aZy98guVVsxRCB5KhNiXFjCBMK5KEyzV8smhkVvs3xwkAug31KnpzJpiNPtcD5bG1t6&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;slot&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">108</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span></span>\n<span><span style="color: var(--shiki-color-text)">  ]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">1</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span><span style="color: var(--shiki-color-text)">For each signature returned, get the transaction details by sending a getConfirmedTransaction request:</span></span>\n<span><span style="color: var(--shiki-color-text)">curl -X POST -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Content-Type: application/json&quot;</span><span style="color: var(--shiki-color-text)"> -d &#39;{</span><span style="color: var(--shiki-token-keyword)">&quot;jsonrpc&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;2.0&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-keyword)">&quot;method&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;getConfirmedTransaction&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-keyword)">&quot;params&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)">[</span><span style="color: var(--shiki-token-string-expression)">&quot;dhjhJp2V2ybQGVfELWM1aZy98guVVsxRCB5KhNiXFjCBMK5KEyzV8smhkVvs3xwkAug31KnpzJpiNPtcD5bG1t6&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;json&quot;</span><span style="color: var(--shiki-color-text)">]}&#39; localhost:</span><span style="color: var(--shiki-token-constant)">8899</span></span>\n<span><span style="color: var(--shiki-color-text)"> </span></span>\n<span><span style="color: var(--shiki-token-comment)">// Result</span></span>\n<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;jsonrpc&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;2.0&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;result&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;slot&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">5</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;transaction&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;message&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;accountKeys&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">          </span><span style="color: var(--shiki-token-string-expression)">&quot;Bbqg1M4YVVfbhEzwA9SpC9FhsaG83YMTYoR4a8oTDLX&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">          </span><span style="color: var(--shiki-token-string-expression)">&quot;47Sbuv6jL7CViK9F2NMW51aQGhfdpUu7WNvKyH645Rfi&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">          </span><span style="color: var(--shiki-token-string-expression)">&quot;11111111111111111111111111111111&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">        ]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;header&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">          </span><span style="color: var(--shiki-token-keyword)">&quot;numReadonlySignedAccounts&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">0</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">          </span><span style="color: var(--shiki-token-keyword)">&quot;numReadonlyUnsignedAccounts&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">          </span><span style="color: var(--shiki-token-keyword)">&quot;numRequiredSignatures&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">1</span></span>\n<span><span style="color: var(--shiki-color-text)">        }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;instructions&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">          {</span></span>\n<span><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;accounts&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">              </span><span style="color: var(--shiki-token-constant)">0</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">              </span><span style="color: var(--shiki-token-constant)">1</span></span>\n<span><span style="color: var(--shiki-color-text)">            ]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;data&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;3Bxs3zyH82bhpB8j&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">            </span><span style="color: var(--shiki-token-keyword)">&quot;programIdIndex&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">2</span></span>\n<span><span style="color: var(--shiki-color-text)">          }</span></span>\n<span><span style="color: var(--shiki-color-text)">        ]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;recentBlockhash&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;7GytRgrWXncJWKhzovVoP9kjfLwoiuDb3cWjpXGnmxWh&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">      }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;signatures&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-string-expression)">&quot;dhjhJp2V2ybQGVfELWM1aZy98guVVsxRCB5KhNiXFjCBMK5KEyzV8smhkVvs3xwkAug31KnpzJpiNPtcD5bG1t6&quot;</span></span>\n<span><span style="color: var(--shiki-color-text)">      ]</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;meta&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;err&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;fee&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">5000</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;postBalances&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-constant)">2033973061360</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-constant)">218099990000</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-constant)">42000000003</span></span>\n<span><span style="color: var(--shiki-color-text)">      ]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;preBalances&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-constant)">2044973066360</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-constant)">207099990000</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-constant)">42000000003</span></span>\n<span><span style="color: var(--shiki-color-text)">      ]</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;status&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;Ok&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span></span>\n<span><span style="color: var(--shiki-color-text)">      }</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">1</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "sending-withdrawals",
                children: "Sending Withdrawals"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "To accommodate a user's request to withdraw XZO, you must generate a Exzo Network transfer transaction, and send it to the api node to be forwarded to your cluster."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Synchronous"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Sending a synchronous transfer to the Exzo Network cluster allows you to easily ensure that a transfer is successful and finalized by the cluster."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Exzo Network command-line tool offers a simple command, ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "exzonetwork transfer"
                    }),
                    ", to generate, submit, and confirm transfer transactions. By default, this method will wait and track progress on stderr until the transaction has been finalized by the cluster. If the transaction fails, it will report any transaction errors."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "exzonetwork transfer <USER_ADDRESS> <AMOUNT> --allow-unfunded-recipient --keypair <KEYPAIR> --url http://localhost:8899\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">exzonetwork transfer </span><span style="color: var(--shiki-token-keyword)">&lt;</span><span style="color: var(--shiki-color-text)">USER_ADDRESS</span><span style="color: var(--shiki-token-keyword)">&gt;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">&lt;</span><span style="color: var(--shiki-color-text)">AMOUNT</span><span style="color: var(--shiki-token-keyword)">&gt;</span><span style="color: var(--shiki-color-text)"> --allow-unfunded-recipient --keypair </span><span style="color: var(--shiki-token-keyword)">&lt;</span><span style="color: var(--shiki-color-text)">KEYPAIR</span><span style="color: var(--shiki-token-keyword)">&gt;</span><span style="color: var(--shiki-color-text)"> --url http://localhost:8899</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "The Solana Javascript SDK offers a similar approach for the JS ecosystem. Use the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "SystemProgram"
                    }),
                    " to build a transfer transaction, and submit it using the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "sendAndConfirmTransaction"
                    }),
                    " method."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Asynchronous"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "For greater flexibility, you can submit withdrawal transfers asynchronously. In these cases, it is your responsibility to verify that the transaction succeeded and was finalized by the cluster."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Note: Each transaction contains a recent blockhash to indicate its liveness. It is critical to wait until this blockhash expires before retrying a withdrawal transfer that does not appear to have been confirmed or finalized by the cluster. Otherwise, you risk a double spend. See more on blockhash expiration below."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "First, get a recent blockhash using the getFees endpoint or the CLI command:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "exzonetwork fees --url http://localhost:8899\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">exzonetwork fees --url http://localhost:8899</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "In the command-line tool, pass the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "--no-wait"
                    }),
                    " argument to send a transfer asynchronously, and include your recent blockhash with the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "--blockhash"
                    }),
                    " argument:"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "exzonetwork transfer <USER_ADDRESS> <AMOUNT> --allow-unfunded-recipient --no-wait --blockhash <RECENT_BLOCKHASH> --keypair <KEYPAIR> --url http://localhost:8899\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">exzonetwork transfer </span><span style="color: var(--shiki-token-keyword)">&lt;</span><span style="color: var(--shiki-color-text)">USER_ADDRESS</span><span style="color: var(--shiki-token-keyword)">&gt;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">&lt;</span><span style="color: var(--shiki-color-text)">AMOUNT</span><span style="color: var(--shiki-token-keyword)">&gt;</span><span style="color: var(--shiki-color-text)"> --allow-unfunded-recipient --no-wait --blockhash </span><span style="color: var(--shiki-token-keyword)">&lt;</span><span style="color: var(--shiki-color-text)">RECENT_BLOCKHASH</span><span style="color: var(--shiki-token-keyword)">&gt;</span><span style="color: var(--shiki-color-text)"> --keypair </span><span style="color: var(--shiki-token-keyword)">&lt;</span><span style="color: var(--shiki-color-text)">KEYPAIR</span><span style="color: var(--shiki-token-keyword)">&gt;</span><span style="color: var(--shiki-color-text)"> --url http://localhost:8899</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "You can also build, sign, and serialize the transaction manually, and fire it off to the cluster using the JSON-RPC ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "sendTransaction"
                    }),
                    " endpoint."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Transaction Confirmations & Finality"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Get the status of a batch of transactions using the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "getSignatureStatuses"
                    }),
                    " JSON-RPC endpoint. The confirmations field reports how many confirmed blocks have elapsed since the transaction was processed. If ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "confirmations: null"
                    }),
                    ", it is finalized."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "json",
                code: 'curl -X POST -H "Content-Type: application/json" -d \'{"jsonrpc":"2.0", "id":1, "method":"getSignatureStatuses", "params":[["5VERv8NMvzbJMEkV8xnrLkEaWRtSz9CosKDYjCJjBRnbJLgp8uirBgmQpjKhoR4tjF3ZpRzrFmBV6UjKdiSZkQUW", "5j7s6NiJS3JAkvgkoc18WVAsiSaci2pxB2A6ueCJP4tprA2TFg9wSyTLeYouxPBJEMzJinENTkpA52YStRW5Dia7"]]}\' http://localhost:8899\r\n \r\n{\r\n  "jsonrpc": "2.0",\r\n  "result": {\r\n    "context": {\r\n      "slot": 82\r\n    },\r\n    "value": [\r\n      {\r\n        "slot": 72,\r\n        "confirmations": 10,\r\n        "err": null,\r\n        "status": {\r\n          "Ok": null\r\n        }\r\n      },\r\n      {\r\n        "slot": 48,\r\n        "confirmations": null,\r\n        "err": null,\r\n        "status": {\r\n          "Ok": null\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  "id": 1\r\n}\n',
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-json",
                    children: '<span><span style="color: var(--shiki-color-text)">curl -X POST -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Content-Type: application/json&quot;</span><span style="color: var(--shiki-color-text)"> -d &#39;{</span><span style="color: var(--shiki-token-keyword)">&quot;jsonrpc&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;2.0&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">&quot;method&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;getSignatureStatuses&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">&quot;params&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)">[[</span><span style="color: var(--shiki-token-string-expression)">&quot;5VERv8NMvzbJMEkV8xnrLkEaWRtSz9CosKDYjCJjBRnbJLgp8uirBgmQpjKhoR4tjF3ZpRzrFmBV6UjKdiSZkQUW&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;5j7s6NiJS3JAkvgkoc18WVAsiSaci2pxB2A6ueCJP4tprA2TFg9wSyTLeYouxPBJEMzJinENTkpA52YStRW5Dia7&quot;</span><span style="color: var(--shiki-color-text)">]]}&#39; http:</span><span style="color: var(--shiki-token-comment)">//localhost:8899</span></span>\n<span><span style="color: var(--shiki-color-text)"> </span></span>\n<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;jsonrpc&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;2.0&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;result&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;context&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">      </span><span style="color: var(--shiki-token-keyword)">&quot;slot&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">82</span></span>\n<span><span style="color: var(--shiki-color-text)">    }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;value&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> [</span></span>\n<span><span style="color: var(--shiki-color-text)">      {</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;slot&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">72</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;confirmations&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">10</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;err&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;status&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">          </span><span style="color: var(--shiki-token-keyword)">&quot;Ok&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span></span>\n<span><span style="color: var(--shiki-color-text)">        }</span></span>\n<span><span style="color: var(--shiki-color-text)">      }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">      {</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;slot&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">48</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;confirmations&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;err&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;status&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">          </span><span style="color: var(--shiki-token-keyword)">&quot;Ok&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">null</span></span>\n<span><span style="color: var(--shiki-color-text)">        }</span></span>\n<span><span style="color: var(--shiki-color-text)">      }</span></span>\n<span><span style="color: var(--shiki-color-text)">    ]</span></span>\n<span><span style="color: var(--shiki-color-text)">  }</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">1</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Blockhash Expiration"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "When you request a recent blockhash for your withdrawal transaction using the getFees endpoint or ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "exzonetwork fees"
                    }),
                    ", the response will include the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "lastValidSlot"
                    }),
                    ", the last slot in which the blockhash will be valid. You can check the cluster slot with a ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "getSlot"
                    }),
                    " query; once the cluster slot is greater than ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "lastValidSlot"
                    }),
                    ", the withdrawal transaction using that blockhash should never succeed."
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "You can also doublecheck whether a particular blockhash is still valid by sending a ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "getFeeCalculatorForBlockhash"
                    }),
                    " request with the blockhash as a parameter. If the response value is null, the blockhash is expired, and the withdrawal transaction should never succeed."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "testing-the-integration",
                children: "Testing the Integration"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Be sure to test your complete workflow on Exzo Network devnet and testnet clusters before moving to production on mainnet-beta. Devnet is the most open and flexible, and ideal for initial development, while testnet offers more realistic cluster configuration. Devnet features a token faucet, but you will need to request some testnet XZO to get going on testnet."
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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,47,825,336], () => (__webpack_exec__(4810)));
module.exports = __webpack_exports__;

})();