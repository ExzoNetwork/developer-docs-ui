"use strict";
(() => {
var exports = {};
exports.id = 297;
exports.ids = [297];
exports.modules = {

/***/ 2941:
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

const title = "Performance Reports";

const sections = [
    {
        title: "October 10th 2022",
        id: "october_2022"
    }
];
function _createMdxContent(props) {
    const _components = Object.assign({
        h1: "h1",
        h2: "h2",
        p: "p",
        pre: "pre",
        code: "code"
    }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components), { Note  } = _components;
    if (!Note) _missingMdxReference("Note", true);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h1, {
                children: "Performance Reports",
                ...{
                    className: "border-b border-zinc-900/5 dark:border-white/5 xl:max-w-none pb-5 mb-7"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "october_2022",
                title: "October 10th 2022",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "summary",
                children: "Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "This test was done to measure the SC ERC20 token transfers, SC ERC721 token minting and EOA to EOA transactions functionality with heavy loads and speed of the transactions on the nodes with higher hardware resources."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The goal was to check if everything is working as expected during heavy loads. That was also the reason we’ve introduced gas metrics in the loadbot output, which show us if the blocks are filled with transactions properly."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "All transactions were sent to the single node via GRPC API, and the receipts were received via JSON-RPC API. After all transactions were done, gas information was read from each block, using the eth_getBlockByNumber JSON-RPC method."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Our aim was to strive to reach a maximum possible TPS on the hardware resources available. To acheive this, we've modified the block gas limit and block time parameters, to give us the best possible tps results and keep the system integrity and stability."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Note, {
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                        children: "Production Environments"
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                        children: "When configuring a production environment, you need to be carefull if you're trying to acheive high performance of the chain. If block gas limit parameter is set to a high value, block time is set to 1s, and there is a high transaction load on a single node, that node will consume a lot ( if not all available ) RAM and can cause server crash. Use the loadbot to test everything thoroughly, monitor the system resource utilization and set your configuration parameters accordingly."
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "results-of-eoa-to-eoa-transfers",
                children: "Results of EOA to EOA transfers​"
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
                                        children: "Metric"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "w-1/2 border border-slate-300 px-3 py-0 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "Value"
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
                                            children: "Transaction type"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "EOA to EOA"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Transactions per second"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "1428"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Transactions failed"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "0"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Transactions succeeded"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "30000"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Total blocks used"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "15"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Total run time"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "21.374620s"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "results-of-erc-20-token-transfers",
                children: "Results of ERC20 token transfers​"
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
                                        children: "Metric"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "w-1/2 border border-slate-300 px-3 py-0 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "Value"
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
                                            children: "Transaction type"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "ERC20"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Transactions per second"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "1111"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Transactions failed"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "0"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Transactions succeeded"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "50000"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Total blocks used"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "38"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "ERC20 transaction run time"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "45.906450s"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "SC Deploy time"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "2.006580s"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "results-of-erc-721-token-minting",
                children: "Results of ERC721 token minting​"
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
                                        children: "Metric"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "w-1/2 border border-slate-300 px-3 py-0 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "Value"
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
                                            children: "Transaction type"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "ERC721"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Transactions per second"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "714"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Transactions failed"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "0"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Transactions succeeded"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "30000"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Total blocks used"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "39"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "ERC721 transaction run time"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "42.864140s"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "SC Deploy time"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "2.005500s"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "environment-eoa-to-eoa",
                children: "Environment EOA to EOA"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "Cloud provider    AWS EC2\r\nInstance size    c6a.48xlarge\r\nNetworking    private subnet\r\nOperating system    Linux Ubuntu 20.04 LTS - Focal Fossa\r\nFile descriptor limit    65535\r\nMax user processes    65535\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">Cloud provider    AWS EC2</span></span>\n<span><span style="color: var(--shiki-color-text)">Instance size    c6a.48xlarge</span></span>\n<span><span style="color: var(--shiki-color-text)">Networking    private subnet</span></span>\n<span><span style="color: var(--shiki-color-text)">Operating system    Linux Ubuntu 20.04 LTS - Focal Fossa</span></span>\n<span><span style="color: var(--shiki-color-text)">File descriptor limit    65535</span></span>\n<span><span style="color: var(--shiki-color-text)">Max user processes    65535</span></span>\n<span></span>'
                }),
                ...{
                    title: "Host Configuration"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "Exzo Network version	Release v0.1.1\r\nValidator nodes	4\r\nNon-validator nodes    0\r\nConsensus    IBFT PoA\r\nBlock time    1s\r\nBlock gas limit	70778880\r\nMax slots    276480\r\nAverage block utilization    59.34%\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">Exzo Network version	Release v0.1.1</span></span>\n<span><span style="color: var(--shiki-color-text)">Validator nodes	4</span></span>\n<span><span style="color: var(--shiki-color-text)">Non-validator nodes    0</span></span>\n<span><span style="color: var(--shiki-color-text)">Consensus    IBFT PoA</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-keyword)">time</span><span style="color: var(--shiki-color-text)">    1s</span></span>\n<span><span style="color: var(--shiki-color-text)">Block gas limit	70778880</span></span>\n<span><span style="color: var(--shiki-color-text)">Max slots    276480</span></span>\n<span><span style="color: var(--shiki-color-text)">Average block utilization    59.34%</span></span>\n<span></span>'
                }),
                ...{
                    title: "Blockchain Configuration"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "Total Transactions    30000\r\nTransactions sent per second    1428\r\nType of transactions    EOA to EOA transfers\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">Total Transactions    30000</span></span>\n<span><span style="color: var(--shiki-color-text)">Transactions sent per second    1428</span></span>\n<span><span style="color: var(--shiki-color-text)">Type of transactions    EOA to EOA transfers</span></span>\n<span></span>'
                }),
                ...{
                    title: "Loadbot Configuration"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "[COUNT DATA]Transactions submitted = 30000Transactions failed    = 0[APPROXIMATE TPS]Approximate number of transactions per second = 1428[TURN AROUND DATA]Average transaction turn around = 4.394900sFastest transaction turn around = 1.133980sSlowest transaction turn around = 7.258690sTotal loadbot execution time    = 21.374620s[BLOCK DATA]Blocks required = 15Block #110 = 1268 txns (26628000 gasUsed / 70778880 gasLimit) utilization = 37.62%Block #111 = 2744 txns (57624000 gasUsed / 70778880 gasLimit) utilization = 81.41%Block #112 = 2333 txns (48993000 gasUsed / 70778880 gasLimit) utilization = 69.22%Block #113 = 1326 txns (27846000 gasUsed / 70778880 gasLimit) utilization = 39.34%Block #114 = 1852 txns (38892000 gasUsed / 70778880 gasLimit) utilization = 54.95%Block #115 = 2270 txns (47670000 gasUsed / 70778880 gasLimit) utilization = 67.35%Block #116 = 559 txns (11739000 gasUsed / 70778880 gasLimit) utilization  = 16.59%Block #117 = 3370 txns (70770000 gasUsed / 70778880 gasLimit) utilization = 99.99%Block #118 = 910 txns (19110000 gasUsed / 70778880 gasLimit) utilization  = 27.00%Block #119 = 3132 txns (65772000 gasUsed / 70778880 gasLimit) utilization = 92.93%Block #120 = 1207 txns (25347000 gasUsed / 70778880 gasLimit) utilization = 35.81%Block #121 = 3370 txns (70770000 gasUsed / 70778880 gasLimit) utilization = 99.99%Block #122 = 2734 txns (57414000 gasUsed / 70778880 gasLimit) utilization = 81.12%Block #123 = 2737 txns (57477000 gasUsed / 70778880 gasLimit) utilization = 81.21%Block #124 = 188 txns (3948000 gasUsed / 70778880 gasLimit) utilization   = 5.58%[[COUNT DATA]\r\nTransactions submitted = 30000\r\nTransactions failed    = 0\r\n\r\n[APPROXIMATE TPS]\r\nApproximate number of transactions per second = 1428\r\n\r\n[TURN AROUND DATA]\r\nAverage transaction turn around = 4.394900s\r\nFastest transaction turn around = 1.133980s\r\nSlowest transaction turn around = 7.258690s\r\nTotal loadbot execution time    = 21.374620s\r\n\r\n[BLOCK DATA]\r\nBlocks required = 15\r\n\r\nBlock #110 = 1268 txns (26628000 gasUsed / 70778880 gasLimit) utilization = 37.62%\r\nBlock #111 = 2744 txns (57624000 gasUsed / 70778880 gasLimit) utilization = 81.41%\r\nBlock #112 = 2333 txns (48993000 gasUsed / 70778880 gasLimit) utilization = 69.22%\r\nBlock #113 = 1326 txns (27846000 gasUsed / 70778880 gasLimit) utilization = 39.34%\r\nBlock #114 = 1852 txns (38892000 gasUsed / 70778880 gasLimit) utilization = 54.95%\r\nBlock #115 = 2270 txns (47670000 gasUsed / 70778880 gasLimit) utilization = 67.35%\r\nBlock #116 = 559 txns (11739000 gasUsed / 70778880 gasLimit) utilization  = 16.59%\r\nBlock #117 = 3370 txns (70770000 gasUsed / 70778880 gasLimit) utilization = 99.99%\r\nBlock #118 = 910 txns (19110000 gasUsed / 70778880 gasLimit) utilization  = 27.00%\r\nBlock #119 = 3132 txns (65772000 gasUsed / 70778880 gasLimit) utilization = 92.93%\r\nBlock #120 = 1207 txns (25347000 gasUsed / 70778880 gasLimit) utilization = 35.81%\r\nBlock #121 = 3370 txns (70770000 gasUsed / 70778880 gasLimit) utilization = 99.99%\r\nBlock #122 = 2734 txns (57414000 gasUsed / 70778880 gasLimit) utilization = 81.12%\r\nBlock #123 = 2737 txns (57477000 gasUsed / 70778880 gasLimit) utilization = 81.21%\r\nBlock #124 = 188 txns (3948000 gasUsed / 70778880 gasLimit) utilization   = 5.58%\r\n\r\n[AVERAGE BLOCK UTILIZATION]\r\nAverage utilization across all blocks = 59.34%\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">[COUNT DATA]Transactions submitted = 30000Transactions failed    = 0[APPROXIMATE TPS]Approximate number of transactions per second = 1428[TURN AROUND DATA]Average transaction turn around = 4.394900sFastest transaction turn around = 1.133980sSlowest transaction turn around = 7.258690sTotal loadbot execution </span><span style="color: var(--shiki-token-keyword)">time</span><span style="color: var(--shiki-color-text)">    = 21.374620s[BLOCK DATA]Blocks required = 15Block </span><span style="color: var(--shiki-token-comment)">#110 = 1268 txns (26628000 gasUsed / 70778880 gasLimit) utilization = 37.62%Block #111 = 2744 txns (57624000 gasUsed / 70778880 gasLimit) utilization = 81.41%Block #112 = 2333 txns (48993000 gasUsed / 70778880 gasLimit) utilization = 69.22%Block #113 = 1326 txns (27846000 gasUsed / 70778880 gasLimit) utilization = 39.34%Block #114 = 1852 txns (38892000 gasUsed / 70778880 gasLimit) utilization = 54.95%Block #115 = 2270 txns (47670000 gasUsed / 70778880 gasLimit) utilization = 67.35%Block #116 = 559 txns (11739000 gasUsed / 70778880 gasLimit) utilization  = 16.59%Block #117 = 3370 txns (70770000 gasUsed / 70778880 gasLimit) utilization = 99.99%Block #118 = 910 txns (19110000 gasUsed / 70778880 gasLimit) utilization  = 27.00%Block #119 = 3132 txns (65772000 gasUsed / 70778880 gasLimit) utilization = 92.93%Block #120 = 1207 txns (25347000 gasUsed / 70778880 gasLimit) utilization = 35.81%Block #121 = 3370 txns (70770000 gasUsed / 70778880 gasLimit) utilization = 99.99%Block #122 = 2734 txns (57414000 gasUsed / 70778880 gasLimit) utilization = 81.12%Block #123 = 2737 txns (57477000 gasUsed / 70778880 gasLimit) utilization = 81.21%Block #124 = 188 txns (3948000 gasUsed / 70778880 gasLimit) utilization   = 5.58%[[COUNT DATA]</span></span>\n<span><span style="color: var(--shiki-color-text)">Transactions submitted = 30000</span></span>\n<span><span style="color: var(--shiki-color-text)">Transactions failed    = 0</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">[APPROXIMATE TPS]</span></span>\n<span><span style="color: var(--shiki-color-text)">Approximate number of transactions per second = 1428</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">[TURN AROUND DATA]</span></span>\n<span><span style="color: var(--shiki-color-text)">Average transaction turn around = 4.394900s</span></span>\n<span><span style="color: var(--shiki-color-text)">Fastest transaction turn around = 1.133980s</span></span>\n<span><span style="color: var(--shiki-color-text)">Slowest transaction turn around = 7.258690s</span></span>\n<span><span style="color: var(--shiki-color-text)">Total loadbot execution </span><span style="color: var(--shiki-token-keyword)">time</span><span style="color: var(--shiki-color-text)">    = 21.374620s</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">[BLOCK DATA]</span></span>\n<span><span style="color: var(--shiki-color-text)">Blocks required = 15</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#110 = 1268 txns (26628000 gasUsed / 70778880 gasLimit) utilization = 37.62%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#111 = 2744 txns (57624000 gasUsed / 70778880 gasLimit) utilization = 81.41%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#112 = 2333 txns (48993000 gasUsed / 70778880 gasLimit) utilization = 69.22%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#113 = 1326 txns (27846000 gasUsed / 70778880 gasLimit) utilization = 39.34%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#114 = 1852 txns (38892000 gasUsed / 70778880 gasLimit) utilization = 54.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#115 = 2270 txns (47670000 gasUsed / 70778880 gasLimit) utilization = 67.35%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#116 = 559 txns (11739000 gasUsed / 70778880 gasLimit) utilization  = 16.59%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#117 = 3370 txns (70770000 gasUsed / 70778880 gasLimit) utilization = 99.99%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#118 = 910 txns (19110000 gasUsed / 70778880 gasLimit) utilization  = 27.00%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#119 = 3132 txns (65772000 gasUsed / 70778880 gasLimit) utilization = 92.93%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#120 = 1207 txns (25347000 gasUsed / 70778880 gasLimit) utilization = 35.81%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#121 = 3370 txns (70770000 gasUsed / 70778880 gasLimit) utilization = 99.99%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#122 = 2734 txns (57414000 gasUsed / 70778880 gasLimit) utilization = 81.12%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#123 = 2737 txns (57477000 gasUsed / 70778880 gasLimit) utilization = 81.21%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#124 = 188 txns (3948000 gasUsed / 70778880 gasLimit) utilization   = 5.58%</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">[AVERAGE BLOCK UTILIZATION]</span></span>\n<span><span style="color: var(--shiki-color-text)">Average utilization across all blocks = 59.34%</span></span>\n<span></span>'
                }),
                ...{
                    title: "Loadbot log"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "environment-erc-20",
                children: "Environment ERC20​"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "Cloud provider	AWS EC2\r\nInstance size	c6a.48xlarge\r\nNetworking    private subnet\r\nOperating system    Linux Ubuntu 20.04 LTS - Focal Fossa\r\nFile descriptor limit    65535\r\nMax user processes    65535\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">Cloud provider	AWS EC2</span></span>\n<span><span style="color: var(--shiki-color-text)">Instance size	c6a.48xlarge</span></span>\n<span><span style="color: var(--shiki-color-text)">Networking    private subnet</span></span>\n<span><span style="color: var(--shiki-color-text)">Operating system    Linux Ubuntu 20.04 LTS - Focal Fossa</span></span>\n<span><span style="color: var(--shiki-color-text)">File descriptor limit    65535</span></span>\n<span><span style="color: var(--shiki-color-text)">Max user processes    65535</span></span>\n<span></span>'
                }),
                ...{
                    title: "Host Configuration"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "Exzo Network version	Release v0.1.0\r\nValidator nodes	4\r\nNon-validator nodes	0\r\nConsensus    IBFT PoA\r\nBlock time    1s\r\nBlock gas limit    47185920\r\nMax slots    184320\r\nAverage block utilization    81.29%\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">Exzo Network version	Release v0.1.0</span></span>\n<span><span style="color: var(--shiki-color-text)">Validator nodes	4</span></span>\n<span><span style="color: var(--shiki-color-text)">Non-validator nodes	0</span></span>\n<span><span style="color: var(--shiki-color-text)">Consensus    IBFT PoA</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-keyword)">time</span><span style="color: var(--shiki-color-text)">    1s</span></span>\n<span><span style="color: var(--shiki-color-text)">Block gas limit    47185920</span></span>\n<span><span style="color: var(--shiki-color-text)">Max slots    184320</span></span>\n<span><span style="color: var(--shiki-color-text)">Average block utilization    81.29%</span></span>\n<span></span>'
                }),
                ...{
                    title: "Blockchain Configuration"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "Total Transactions	50000\r\nTransactions sent per second	1111\r\nType of transactions	ERC20 to ERC20 transfers\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">Total Transactions	50000</span></span>\n<span><span style="color: var(--shiki-color-text)">Transactions sent per second	1111</span></span>\n<span><span style="color: var(--shiki-color-text)">Type of transactions	ERC20 to ERC20 transfers</span></span>\n<span></span>'
                }),
                ...{
                    title: "Loadbot Configuration"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "[COUNT DATA]\r\nTransactions submitted = 50000\r\nTransactions failed    = 0\r\n\r\n[APPROXIMATE TPS]\r\nApproximate number of transactions per second = 1111\r\n\r\n[CONTRACT DEPLOYMENT INFO]\r\nContract address     = 0x33123b7a4420798b1D208ABBac657B7b103edbD9\r\nTotal execution time = 2.006580s\r\n\r\n[CONTRACT DEPLOYMENT BLOCK DATA]\r\nBlocks required = 1\r\nBlock #174 = 1 txns (1055757 gasUsed / 47185920 gasLimit) utilization = 2.24%\r\n\r\n[TURN AROUND DATA]\r\nAverage transaction turn around = 8.856780s\r\nFastest transaction turn around = 2.006200s\r\nSlowest transaction turn around = 15.977210s\r\nTotal loadbot execution time    = 45.906450s\r\n\r\n[BLOCK DATA]\r\nBlocks required = 38\r\n\r\nBlock #176 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%\r\nBlock #177 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%\r\nBlock #178 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%\r\nBlock #179 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%\r\nBlock #180 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%\r\nBlock #181 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%\r\nBlock #182 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%\r\nBlock #183 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%\r\nBlock #184 = 688 txns (20055200 gasUsed / 47185920 gasLimit) utilization  = 42.50%\r\nBlock #185 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%\r\nBlock #186 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%\r\nBlock #187 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%\r\nBlock #188 = 317 txns (9240550 gasUsed / 47185920 gasLimit) utilization   = 19.58%\r\nBlock #189 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%\r\nBlock #190 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%\r\nBlock #191 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%\r\nBlock #192 = 89 txns (2594350 gasUsed / 47185920 gasLimit) utilization    = 5.50%\r\nBlock #193 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%\r\nBlock #194 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%\r\nBlock #195 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%\r\nBlock #196 = 795 txns (23174250 gasUsed / 47185920 gasLimit) utilization  = 49.11%\r\nBlock #197 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%\r\nBlock #198 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%\r\nBlock #199 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%\r\nBlock #200 = 594 txns (17315100 gasUsed / 47185920 gasLimit) utilization  = 36.70%\r\nBlock #201 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%\r\nBlock #202 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%\r\nBlock #203 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%\r\nBlock #204 = 208 txns (6063200 gasUsed / 47185920 gasLimit) utilization   = 12.85%\r\nBlock #205 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%\r\nBlock #206 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%\r\nBlock #207 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%\r\nBlock #208 = 30 txns (874500 gasUsed / 47185920 gasLimit) utilization     = 1.85%\r\nBlock #209 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%\r\nBlock #210 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%\r\nBlock #211 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%\r\nBlock #212 = 177 txns (5159550 gasUsed / 47185920 gasLimit) utilization   = 10.93%\r\nBlock #213 = 180 txns (5247000 gasUsed / 47185920 gasLimit) utilization   = 11.12%\r\n\r\n[AVERAGE BLOCK UTILIZATION]\r\nAverage utilization across all blocks = 81.29%\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">[COUNT DATA]</span></span>\n<span><span style="color: var(--shiki-color-text)">Transactions submitted = 50000</span></span>\n<span><span style="color: var(--shiki-color-text)">Transactions failed    = 0</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">[APPROXIMATE TPS]</span></span>\n<span><span style="color: var(--shiki-color-text)">Approximate number of transactions per second = 1111</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">[CONTRACT DEPLOYMENT INFO]</span></span>\n<span><span style="color: var(--shiki-color-text)">Contract address     = 0x33123b7a4420798b1D208ABBac657B7b103edbD9</span></span>\n<span><span style="color: var(--shiki-color-text)">Total execution </span><span style="color: var(--shiki-token-keyword)">time</span><span style="color: var(--shiki-color-text)"> = 2.006580s</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">[CONTRACT DEPLOYMENT BLOCK DATA]</span></span>\n<span><span style="color: var(--shiki-color-text)">Blocks required = 1</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#174 = 1 txns (1055757 gasUsed / 47185920 gasLimit) utilization = 2.24%</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">[TURN AROUND DATA]</span></span>\n<span><span style="color: var(--shiki-color-text)">Average transaction turn around = 8.856780s</span></span>\n<span><span style="color: var(--shiki-color-text)">Fastest transaction turn around = 2.006200s</span></span>\n<span><span style="color: var(--shiki-color-text)">Slowest transaction turn around = 15.977210s</span></span>\n<span><span style="color: var(--shiki-color-text)">Total loadbot execution </span><span style="color: var(--shiki-token-keyword)">time</span><span style="color: var(--shiki-color-text)">    = 45.906450s</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">[BLOCK DATA]</span></span>\n<span><span style="color: var(--shiki-color-text)">Blocks required = 38</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#176 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#177 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#178 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#179 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#180 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#181 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#182 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#183 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#184 = 688 txns (20055200 gasUsed / 47185920 gasLimit) utilization  = 42.50%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#185 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#186 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#187 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#188 = 317 txns (9240550 gasUsed / 47185920 gasLimit) utilization   = 19.58%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#189 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#190 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#191 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#192 = 89 txns (2594350 gasUsed / 47185920 gasLimit) utilization    = 5.50%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#193 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#194 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#195 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#196 = 795 txns (23174250 gasUsed / 47185920 gasLimit) utilization  = 49.11%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#197 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#198 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#199 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#200 = 594 txns (17315100 gasUsed / 47185920 gasLimit) utilization  = 36.70%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#201 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#202 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#203 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#204 = 208 txns (6063200 gasUsed / 47185920 gasLimit) utilization   = 12.85%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#205 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#206 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#207 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#208 = 30 txns (874500 gasUsed / 47185920 gasLimit) utilization     = 1.85%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#209 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#210 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#211 = 1618 txns (47164700 gasUsed / 47185920 gasLimit) utilization = 99.96%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#212 = 177 txns (5159550 gasUsed / 47185920 gasLimit) utilization   = 10.93%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#213 = 180 txns (5247000 gasUsed / 47185920 gasLimit) utilization   = 11.12%</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">[AVERAGE BLOCK UTILIZATION]</span></span>\n<span><span style="color: var(--shiki-color-text)">Average utilization across all blocks = 81.29%</span></span>\n<span></span>'
                }),
                ...{
                    title: "Loadbot log"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "environment-erc-721",
                children: "Environment ERC721​"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "Cloud provider	AWS EC2\r\nInstance size	c6a.48xlarge\r\nNetworking	private subnet\r\nOperating system	Linux Ubuntu 20.04 LTS - Focal Fossa\r\nFile descriptor limit	65535\r\nMax user processes	65535\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">Cloud provider	AWS EC2</span></span>\n<span><span style="color: var(--shiki-color-text)">Instance size	c6a.48xlarge</span></span>\n<span><span style="color: var(--shiki-color-text)">Networking	private subnet</span></span>\n<span><span style="color: var(--shiki-color-text)">Operating system	Linux Ubuntu 20.04 LTS - Focal Fossa</span></span>\n<span><span style="color: var(--shiki-color-text)">File descriptor limit	65535</span></span>\n<span><span style="color: var(--shiki-color-text)">Max user processes	65535</span></span>\n<span></span>'
                }),
                ...{
                    title: "Host Configuration"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "Exzo Network version	Release v0.4.1\r\nValidator nodes	4\r\nNon-validator nodes	0\r\nConsensus	IBFT PoA\r\nBlock time	1s\r\nBlock gas limit	94371840\r\nMax slots	1000000\r\nAverage block utilization	93.88%\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">Exzo Network version	Release v0.4.1</span></span>\n<span><span style="color: var(--shiki-color-text)">Validator nodes	4</span></span>\n<span><span style="color: var(--shiki-color-text)">Non-validator nodes	0</span></span>\n<span><span style="color: var(--shiki-color-text)">Consensus	IBFT PoA</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-keyword)">time</span><span style="color: var(--shiki-color-text)">	1s</span></span>\n<span><span style="color: var(--shiki-color-text)">Block gas limit	94371840</span></span>\n<span><span style="color: var(--shiki-color-text)">Max slots	1000000</span></span>\n<span><span style="color: var(--shiki-color-text)">Average block utilization	93.88%</span></span>\n<span></span>'
                }),
                ...{
                    title: "Blockchain Configuration"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "Total Transactions	30000\r\nTransactions sent per second	714\r\nType of transactions	ERC721 token mint\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">Total Transactions	30000</span></span>\n<span><span style="color: var(--shiki-color-text)">Transactions sent per second	714</span></span>\n<span><span style="color: var(--shiki-color-text)">Type of transactions	ERC721 token mint</span></span>\n<span></span>'
                }),
                ...{
                    title: "Loadbot Configuration"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "[COUNT DATA]\r\nTransactions submitted = 30000\r\nTransactions failed    = 0\r\n\r\n[APPROXIMATE TPS]\r\nApproximate number of transactions per second = 714\r\n\r\n[CONTRACT DEPLOYMENT INFO]\r\nContract address     = 0x4Ceff7F2f9fC9f150a42AfcabceEDABeB723E56f\r\nTotal execution time = 2.005500s\r\n\r\n[CONTRACT DEPLOYMENT BLOCK DATA]\r\nBlocks required = 1\r\nBlock #59 = 1 txns (2528772 gasUsed / 94371840 gasLimit) utilization = 2.68%\r\n\r\n[TURN AROUND DATA]\r\nAverage transaction turn around = 13.191620s\r\nFastest transaction turn around = 2.034710s\r\nSlowest transaction turn around = 23.686180s\r\nTotal loadbot execution time    = 42.864140s\r\n\r\n[BLOCK DATA]\r\nBlocks required = 39\r\n\r\nBlock #61 = 818 txns (94237644 gasUsed / 94371840 gasLimit) utilization = 99.86%\r\nBlock #62 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #63 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #64 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #65 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #66 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #67 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #68 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #69 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #70 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #71 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #72 = 510 txns (58738980 gasUsed / 94371840 gasLimit) utilization = 62.24%\r\nBlock #73 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #74 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #75 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #76 = 674 txns (77624892 gasUsed / 94371840 gasLimit) utilization = 82.25%\r\nBlock #77 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #78 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #79 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #80 = 179 txns (20621682 gasUsed / 94371840 gasLimit) utilization = 21.85%\r\nBlock #81 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #82 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #83 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #84 = 231 txns (26609898 gasUsed / 94371840 gasLimit) utilization = 28.20%\r\nBlock #85 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #86 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #87 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #88 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #89 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #90 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #91 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #92 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #93 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #94 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #95 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #96 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #97 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #98 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%\r\nBlock #99 = 561 txns (64612038 gasUsed / 94371840 gasLimit) utilization = 68.47%\r\n\r\n[AVERAGE BLOCK UTILIZATION]\r\nAverage utilization across all blocks = 93.88%\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">[COUNT DATA]</span></span>\n<span><span style="color: var(--shiki-color-text)">Transactions submitted = 30000</span></span>\n<span><span style="color: var(--shiki-color-text)">Transactions failed    = 0</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">[APPROXIMATE TPS]</span></span>\n<span><span style="color: var(--shiki-color-text)">Approximate number of transactions per second = 714</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">[CONTRACT DEPLOYMENT INFO]</span></span>\n<span><span style="color: var(--shiki-color-text)">Contract address     = 0x4Ceff7F2f9fC9f150a42AfcabceEDABeB723E56f</span></span>\n<span><span style="color: var(--shiki-color-text)">Total execution </span><span style="color: var(--shiki-token-keyword)">time</span><span style="color: var(--shiki-color-text)"> = 2.005500s</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">[CONTRACT DEPLOYMENT BLOCK DATA]</span></span>\n<span><span style="color: var(--shiki-color-text)">Blocks required = 1</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#59 = 1 txns (2528772 gasUsed / 94371840 gasLimit) utilization = 2.68%</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">[TURN AROUND DATA]</span></span>\n<span><span style="color: var(--shiki-color-text)">Average transaction turn around = 13.191620s</span></span>\n<span><span style="color: var(--shiki-color-text)">Fastest transaction turn around = 2.034710s</span></span>\n<span><span style="color: var(--shiki-color-text)">Slowest transaction turn around = 23.686180s</span></span>\n<span><span style="color: var(--shiki-color-text)">Total loadbot execution </span><span style="color: var(--shiki-token-keyword)">time</span><span style="color: var(--shiki-color-text)">    = 42.864140s</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">[BLOCK DATA]</span></span>\n<span><span style="color: var(--shiki-color-text)">Blocks required = 39</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#61 = 818 txns (94237644 gasUsed / 94371840 gasLimit) utilization = 99.86%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#62 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#63 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#64 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#65 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#66 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#67 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#68 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#69 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#70 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#71 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#72 = 510 txns (58738980 gasUsed / 94371840 gasLimit) utilization = 62.24%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#73 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#74 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#75 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#76 = 674 txns (77624892 gasUsed / 94371840 gasLimit) utilization = 82.25%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#77 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#78 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#79 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#80 = 179 txns (20621682 gasUsed / 94371840 gasLimit) utilization = 21.85%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#81 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#82 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#83 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#84 = 231 txns (26609898 gasUsed / 94371840 gasLimit) utilization = 28.20%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#85 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#86 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#87 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#88 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#89 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#90 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#91 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#92 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#93 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#94 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#95 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#96 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#97 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#98 = 819 txns (94322802 gasUsed / 94371840 gasLimit) utilization = 99.95%</span></span>\n<span><span style="color: var(--shiki-color-text)">Block </span><span style="color: var(--shiki-token-comment)">#99 = 561 txns (64612038 gasUsed / 94371840 gasLimit) utilization = 68.47%</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">[AVERAGE BLOCK UTILIZATION]</span></span>\n<span><span style="color: var(--shiki-color-text)">Average utilization across all blocks = 93.88%</span></span>\n<span></span>'
                }),
                ...{
                    title: "Loadbot log"
                }
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
function _missingMdxReference(id, component) {
    throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,47,825,336], () => (__webpack_exec__(2941)));
module.exports = __webpack_exports__;

})();