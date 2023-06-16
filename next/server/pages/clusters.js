"use strict";
(() => {
var exports = {};
exports.id = 810;
exports.ids = [810];
exports.modules = {

/***/ 694:
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

const title = "Clusters";

const sections = [
    {
        title: "Exzo Network Clusters",
        id: "exzo_network_clusters"
    },
    {
        title: "Benchmark a Cluster",
        id: "benchmark_cluster"
    },
    {
        title: "Performance Metrics",
        id: "performance_metrics"
    }
];
function _createMdxContent(props) {
    const _components = Object.assign({
        h1: "h1",
        p: "p",
        ul: "ul",
        li: "li",
        a: "a",
        h2: "h2",
        code: "code",
        h3: "h3",
        pre: "pre"
    }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h1, {
                children: "Clusters",
                ...{
                    className: "border-b border-zinc-900/5 dark:border-white/5 xl:max-w-none pb-5 mb-7"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "exzo_network_clusters",
                title: "Exzo Network Clusters",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Exzo Network maintains several different clusters with different purposes."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Before you begin make sure you have first installed the Exzo Network command line tools"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Explorers:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                href: "http://native.exzonetwork.com/",
                                children: "http://native.exzonetwork.com/"
                            }),
                            " Native explorer."
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                href: "http://evmexplorer.exzonetwork.com/",
                                children: "http://evmexplorer.exzonetwork.com/"
                            }),
                            " EVM mainnet explorer."
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                href: "http://evmexplorer.testnet.exzonetwork.com/",
                                children: "http://evmexplorer.testnet.exzonetwork.com/"
                            }),
                            " EVM testnet explorer."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "testnet",
                children: "Testnet"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                className: "w-full border-collapse border border-slate-400 bg-white text-sm shadow-sm dark:border-slate-500 dark:bg-inherit",
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "w-1/2 border border-slate-300 px-3 py-0 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "Space"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "w-1/2 border border-slate-300 px-3 py-0 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "Native"
                                    })
                                })
                            ]
                        })
                    }),
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                        children: [
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "RPC"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "https://api.testnet.exzo.network"
                                            })
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Websocket"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "wss://api.testnet.exzo.network"
                                            })
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Block Explorer"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "exzo airdrop 1 -u https://api.testnet.exzo.network --faucet-host         airdrop.testnet.exzo.network"
                                            })
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Faucet CLI"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "exzo airdrop 1 -u https://api.testnet.exzo.network --faucet-host         airdrop.testnet.exzo.network"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                className: "w-full border-collapse border border-slate-400 bg-white text-sm shadow-sm dark:border-slate-500 dark:bg-inherit",
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "w-1/2 border border-slate-300 px-3 py-0 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "Space"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "w-1/2 border border-slate-300 px-3 py-0 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "EVM"
                                    })
                                })
                            ]
                        })
                    }),
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                        children: [
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "chainId"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "2370"
                                            })
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "ETH RPC"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "https://evm.testnet.exzoscan.io/rpc"
                                            })
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "ETH Websocket"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "wss://api.testnet.exzoscan.io/"
                                            })
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Block Explorer"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "https://evmexplorer.testnet.exzoscan.io"
                                            })
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Block Explorer"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                            children: [
                                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                    children: "https://explorer.testnet.exzoscan.io"
                                                }),
                                                " (V-encoded Legacy addresses)"
                                            ]
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Faucet bot"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "https://t.me/exzo_network_faucet_bot"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Testnet serves as a playground for anyone who wants to take Exzo Network for a test drive, as a user, token holder, app developer, or validator."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Application developers should target Testnet."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Potential validators should first target Testnet."
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Key differences between Testnet and Mainnet:",
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Testnet tokens are not real"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Testnet includes a token faucet for airdrops for application testing"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Testnet may be subject to ledger resets"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Testnet typically runs a newer software version than Mainnet Beta"
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Gossip entrypoint for Testnet: ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "bootstrap.testnet.exzonetwork.com:8001"
                            })
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "mainnet",
                children: "Mainnet"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                className: "w-full border-collapse border border-slate-400 bg-white text-sm shadow-sm dark:border-slate-500 dark:bg-inherit",
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "w-1/2 border border-slate-300 px-3 py-0 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "Space"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "w-1/2 border border-slate-300 px-3 py-0 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "Native"
                                    })
                                })
                            ]
                        })
                    }),
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                        children: [
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "RPC"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "https://api.exzoscan.io"
                                            })
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Websocket"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "wss://api.exzoscan.io"
                                            })
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Block Explorer"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "https://native.exzoscan.io"
                                            })
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Shred version"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "17211"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Genesis hash"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "EsZtukC1MYxB2tohUTdigaUdy1k6kCU8HKS8LEK99iJY"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                className: "w-full border-collapse border border-slate-400 bg-white text-sm shadow-sm dark:border-slate-500 dark:bg-inherit",
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "w-1/2 border border-slate-300 px-3 py-0 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "Space"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "w-1/2 border border-slate-300 px-3 py-0 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "EVM"
                                    })
                                })
                            ]
                        })
                    }),
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                        children: [
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "chainId"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "1229"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "ETH RPC"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "https://evm-explorer.exzoscan.io/rpc"
                                            })
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "ETH Websocket"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "wss://api.exzoscan.io/"
                                            })
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Block Explorer"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                children: "https://evm.exzoscan.io"
                                            })
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Block Explorer"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                            children: [
                                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                    children: "https://evm-explorer.exzoscan.io/"
                                                }),
                                                " (V-encoded Legacy addresses)"
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Gossip entrypoint for Mainnet: ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "bootstrap.exzoscan.io:8001"
                            })
                        ]
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Shred version: 17211"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Some of the popular nodes:"
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "78rvyxYJAUXGaZHJWyz7Yx81ribpAYvwupVuF9CugGws"
                            }),
                            ", ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "FSZbHLPerYngGGwgWbXHtqTLRvLmgKVeUZCKwbFttWng"
                            }),
                            ", ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "Eydu1kJNyPQNKtYrH4dqJJRxrxHuHtbXJCjgo6pSGSjf"
                            }),
                            ", ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "QnQHuNAYMd7jaUJ61Pchi9bD7NbaZ4jxZ4cbdEaYMWF"
                            }),
                            ", ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "Fxb6TgvScYJxjHjSpTr6a4xgLULLQSh8uhAexG5tzFJ6"
                            })
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                children: [
                    "Example ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "exzo"
                    }),
                    " command-line configuration"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "exzoconfig set --url https://api.exzoscan.io\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">exzoconfig </span><span style="color: var(--shiki-token-function)">set</span><span style="color: var(--shiki-color-text)"> --url https://api.exzoscan.io</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                children: [
                    "Example ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "exzo-validator"
                    }),
                    " command-line"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "$ exzo-validator \\\r\n    --identity ~/validator-keypair.json \\\r\n    --vote-account ~/vote-account-keypair.json \\\r\n    --no-untrusted-rpc \\\r\n    --ledger ~/validator-ledger \\\r\n    --rpc-port 8899 \\\r\n    --enable-rpc-transaction-history \\\r\n    --trusted-validator 78rvyxYJAUXGaZHJWyz7Yx81ribpAYvwupVuF9CugGws \\\r\n    --trusted-validator FSZbHLPerYngGGwgWbXHtqTLRvLmgKVeUZCKwbFttWng \\\r\n    --dynamic-port-range 8000-8010 \\\r\n    --entrypoint bootstrap.exzoscan.io:8001 \\\r\n    --limit-ledger-size\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">$ exzo-validator \\</span></span>\n<span><span style="color: var(--shiki-color-text)">    --identity </span><span style="color: var(--shiki-token-keyword)">~</span><span style="color: var(--shiki-color-text)">/validator-keypair.json \\</span></span>\n<span><span style="color: var(--shiki-color-text)">    --vote-account </span><span style="color: var(--shiki-token-keyword)">~</span><span style="color: var(--shiki-color-text)">/vote-account-keypair.json \\</span></span>\n<span><span style="color: var(--shiki-color-text)">    --no-untrusted-rpc \\</span></span>\n<span><span style="color: var(--shiki-color-text)">    --ledger </span><span style="color: var(--shiki-token-keyword)">~</span><span style="color: var(--shiki-color-text)">/validator-ledger \\</span></span>\n<span><span style="color: var(--shiki-color-text)">    --rpc-port 8899 \\</span></span>\n<span><span style="color: var(--shiki-color-text)">    --enable-rpc-transaction-history \\</span></span>\n<span><span style="color: var(--shiki-color-text)">    --trusted-validator 78rvyxYJAUXGaZHJWyz7Yx81ribpAYvwupVuF9CugGws \\</span></span>\n<span><span style="color: var(--shiki-color-text)">    --trusted-validator FSZbHLPerYngGGwgWbXHtqTLRvLmgKVeUZCKwbFttWng \\</span></span>\n<span><span style="color: var(--shiki-color-text)">    --dynamic-port-range 8000-8010 \\</span></span>\n<span><span style="color: var(--shiki-color-text)">    --entrypoint bootstrap.exzoscan.io:8001 \\</span></span>\n<span><span style="color: var(--shiki-color-text)">    --limit-ledger-size</span></span>\n<span></span>'
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
                        children: "--trusted-validators"
                    }),
                    " is operated by Exzo Network"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "benchmark_cluster",
                title: "Benchmark a Cluster",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The Exzo Network git repository contains all the scripts you might need to spin up your own local testnet. Depending on what you're looking to achieve, you may want to run a different variation, as the full-fledged, performance-enhanced multinode testnet is considerably more complex to set up than a Rust-only, singlenode testnode. If you are looking to develop high-level features, such as experimenting with smart contracts, save yourself some setup headaches and stick to the Rust-only singlenode demo. If you're doing performance optimization of the transaction pipeline, consider the enhanced singlenode demo. If you're doing consensus work, you'll need at least a Rust-only multinode demo. If you want to reproduce our TPS metrics, run the enhanced multinode demo."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "For all four variations, you'd need the latest Rust toolchain and the Exzo Network source code:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "First, setup Rust, Cargo and system packages as described in the Exzo Network README-"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Now checkout the code from GitHub:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "git clone https://github.com/exzonetwork/exzonetwork-chain.git\r\ncd exzo-network-blockchain\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">git clone https://github.com/exzonetwork/exzonetwork-chain.git</span></span>\n<span><span style="color: var(--shiki-token-function)">cd</span><span style="color: var(--shiki-color-text)"> exzo-network-blockchain</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The demo code is sometimes broken between releases as we add new low-level features, so if this is your first time running the demo, you'll improve your odds of success if you check out the latest release before proceeding:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "TAG=$(git describe --tags $(git rev-list --tags --max-count=1))\r\ngit checkout $TAG\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">TAG=</span><span style="color: var(--shiki-token-string-expression)">$(git describe --tags $(git rev-list --tags --max-count=1))</span></span>\n<span><span style="color: var(--shiki-color-text)">git checkout $TAG</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Configuration Setup"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Ensure important programs such as the vote program are built before any nodes are started. Note that we are using the release build here for good performance. If you want the debug build, use just ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "cargo build"
                    }),
                    " and omit the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "NDEBUG=1"
                    }),
                    " part of the command."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "cargo build --release\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">cargo build --release</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The network is initialized with a genesis ledger generated by running the following script."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "NDEBUG=1 ./multinode-demo/setup.sh\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">NDEBUG=1 ./multinode-demo/setup.sh</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Faucet"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: 'In order for the validators and clients to work, we\'ll need to spin up a faucet to give out some test tokens. The faucet delivers Milton Friedman-style "air drops" (free tokens to requesting clients) to be used in test transactions.'
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Start the faucet with:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "NDEBUG=1 ./multinode-demo/faucet.sh\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">NDEBUG=1 ./multinode-demo/faucet.sh</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Singlenode Testnet"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Before you start a validator, make sure you know the IP address of the machine you want to be the bootstrap validator for the demo, and make sure that udp ports 8000-10000 are open on all the machines you want to test with."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Now start the bootstrap validator in a separate shell:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "NDEBUG=1 ./multinode-demo/bootstrap-validator.sh\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">NDEBUG=1 ./multinode-demo/bootstrap-validator.sh</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Wait a few seconds for the server to initialize. It will print \"leader ready...\" when it's ready to receive transactions. The leader will request some tokens from the faucet if it doesn't have any. The faucet does not need to be running for subsequent leader starts."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Multinode Testnet"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "To run a multinode testnet, after starting a leader node, spin up some additional validators in separate shells:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "NDEBUG=1 ./multinode-demo/validator-x.sh\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">NDEBUG=1 ./multinode-demo/validator-x.sh</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "To run a performance-enhanced validator on Linux, CUDA 10.0 must be installed on your system:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "./fetch-perf-libs.sh\r\nNDEBUG=1 SOLANA_CUDA=1 ./multinode-demo/bootstrap-validator.sh\r\nNDEBUG=1 SOLANA_CUDA=1 ./multinode-demo/validator.sh\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">./fetch-perf-libs.sh</span></span>\n<span><span style="color: var(--shiki-color-text)">NDEBUG=1 SOLANA_CUDA=1 ./multinode-demo/bootstrap-validator.sh</span></span>\n<span><span style="color: var(--shiki-color-text)">NDEBUG=1 SOLANA_CUDA=1 ./multinode-demo/validator.sh</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Testnet Client Demo"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Now that your singlenode or multinode testnet is up and running let's send it some transactions!"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "In a separate shell start the client:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "NDEBUG=1 ./multinode-demo/bench-tps.sh # runs against localhost by default\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">NDEBUG=1 ./multinode-demo/bench-tps.sh </span><span style="color: var(--shiki-token-comment)"># runs against localhost by default</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "What just happened? The client demo spins up several threads to send 500,000 transactions to the testnet as quickly as it can. The client then pings the testnet periodically to see how many transactions it processed in that time. Take note that the demo intentionally floods the network with UDP packets, such that the network will almost certainly drop a bunch of them. This ensures the testnet has an opportunity to reach 710k TPS. The client demo completes after it has convinced itself the testnet won't process any additional transactions. You should see several TPS measurements printed to the screen. In the multinode variation, you'll see TPS measurements for each validator node as well."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Testnet Debugging"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "There are some useful debug messages in the code, you can enable them on a per-module and per-level basis. Before running a leader or validator set the normal RUST_LOG environment variable."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "For example"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "To enable ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "info"
                            }),
                            " everywhere and ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "debug"
                            }),
                            " only in the exzonetwork::banking_stage module:"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "export RUST_LOG=solana=info,solana::banking_stage=debug\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> RUST_LOG=solana=info,solana::banking_stage=debug</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "To enable BPF program logging:"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "export RUST_LOG=solana_bpf_loader=trace\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> RUST_LOG=solana_bpf_loader=trace</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Generally we are using ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "debug"
                    }),
                    " for infrequent debug messages, ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "trace"
                    }),
                    " for potentially frequent messages and ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "info"
                    }),
                    " for performance-related logging."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "You can also attach to a running process with GDB. The leader's process is named exzonetwork-validator:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "sudo gdb\r\nattach <PID>\r\nset logging on\r\nthread apply all bt\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">sudo gdb</span></span>\n<span><span style="color: var(--shiki-color-text)">attach </span><span style="color: var(--shiki-token-keyword)">&lt;</span><span style="color: var(--shiki-color-text)">PID</span><span style="color: var(--shiki-token-keyword)">&gt;</span></span>\n<span><span style="color: var(--shiki-token-function)">set</span><span style="color: var(--shiki-color-text)"> logging on</span></span>\n<span><span style="color: var(--shiki-color-text)">thread apply all bt</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "This will dump all the threads stack traces into gdb.txt"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Developer Testnet"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "In this example the client connects to our public testnet. To run validators on the testnet you would need to open udp ports ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "8000-10000"
                    }),
                    "."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "NDEBUG=1 ./multinode-demo/bench-tps.sh --entrypoint bootstrap.testnet.exzoscan.io:8001 --faucet bootstrap.testnet.exzoscan.io:9900 --duration 60 --tx_count 50\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">NDEBUG=1 ./multinode-demo/bench-tps.sh --entrypoint bootstrap.testnet.exzoscan.io:8001 --faucet bootstrap.testnet.exzoscan.io:9900 --duration 60 --tx_count 50</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "performance_metrics",
                title: "Performance Metrics",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Exzo Network cluster performance is measured as average number of transactions per second that the network can sustain (TPS). And, how long it takes for a transaction to be confirmed by super majority of the cluster (Confirmation Time)."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Each cluster node maintains various counters that are incremented on certain events. These counters are periodically uploaded to a cloud based database. Exzo Network metrics dashboard fetches these counters, and computes the performance metrics and displays it on the dashboard."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "tps",
                children: "TPS"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Each node's bank runtime maintains a count of transactions that it has processed. The dashboard first calculates the median count of transactions across all metrics enabled nodes in the cluster. The median cluster transaction count is then averaged over a 2 second period and displayed in the TPS time series graph. The dashboard also shows the Mean TPS, Max TPS and Total Transaction Count stats which are all calculated from the median transaction count."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "confirmation-time",
                children: "Confirmation Time"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Each validator node maintains a list of active ledger forks that are visible to the node. A fork is considered to be frozen when the node has received and processed all entries corresponding to the fork. A fork is considered to be confirmed when it receives cumulative super majority vote, and when one of its children forks is frozen."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The node assigns a timestamp to every new fork, and computes the time it took to confirm the fork. This time is reflected as validator confirmation time in performance metrics. The performance dashboard displays the average of each validator node's confirmation time as a time series graph."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "hardware-setup",
                children: "Hardware setup"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The validator software is deployed to GCP n1-standard-16 instances with 1TB pd-ssd disk, and 2x Nvidia V100 GPUs. These are deployed in the us-west-1 region."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "solana-bench-tps is started after the network converges from a client machine with n1-standard-16 CPU-only instance with the following arguments: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "--tx\\_count=50000 --thread-batch-sleep 1000"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "TPS and confirmation metrics are captured from the dashboard numbers over a 5 minute average of when the bench-tps transfer stage begins."
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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,47,825,336], () => (__webpack_exec__(694)));
module.exports = __webpack_exports__;

})();