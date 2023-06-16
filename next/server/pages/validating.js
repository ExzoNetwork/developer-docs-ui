"use strict";
(() => {
var exports = {};
exports.id = 342;
exports.ids = [342];
exports.modules = {

/***/ 4065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/exzoscan.96741470.png","height":1024,"width":1024,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA9UlEQVR42mOAAZ/vpzRszyw47PX+5CHH33c04BI6l3fyO72/2GZxbtkf0XkF/w0OTP5v++DQL+PH51s1Tu7iZzB9eqHa4tb+/3ILig4xzCrUZVqRv1R5Ze1/wyuH/2vcPFfLoP/oWqXWnqX/+brDJsKN7bd1U1k//b/GlQv1DBq3rlUqrZr2X6AlFK6AM93PRaQi5r/qxmX1DArnLlTLzOz9zxBpcJChTEaHpzVsiXBH2n/xuTP+S61YUcsgvWmTgN7uue16hxb80dy74L/a3hX/1U7u/61w+XIb75mbAnBrff+/0LR+deGoyZNLh7Ue3dSEiQMA9RJu9YZXywIAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 4893:
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
/* harmony import */ var _components_ResourcesOther__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8230);
/* harmony import */ var _images_exzoscan_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4065);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__, _components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__, _components_ResourcesOther__WEBPACK_IMPORTED_MODULE_3__]);
([_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__, _components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__, _components_ResourcesOther__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/*@jsxRuntime automatic @jsxImportSource react*/ 

const title = "Validating";



const sections = [
    {
        title: "Running a Validator",
        id: "running_validator"
    },
    {
        title: "Validator Requirements",
        id: "validator_req"
    },
    {
        title: "Starting a Validator",
        id: "starting_validator"
    },
    {
        title: "Vote Account Management",
        id: "acc_management"
    },
    {
        title: "Staking",
        id: "staking"
    },
    {
        title: "Monitoring a Validator",
        id: "monitoring_validator"
    },
    {
        title: "Publishing Validator Info",
        id: "publish_validator_info"
    },
    {
        title: "Security Recommendations",
        id: "security_recomm"
    },
    {
        title: "Troubleshooting",
        id: "troubleshooting"
    }
];
const elements = [
    {
        href: "https://exzoscan.io",
        name: "Native chain Explorer",
        description: "",
        icon: _images_exzoscan_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
        pattern: {
            y: 16,
            squares: [
                [
                    0,
                    1
                ],
                [
                    1,
                    3
                ]
            ]
        }
    },
    {
        href: "https://evm.exzoscan.io",
        name: "EVM chain Explorer",
        description: "",
        icon: _images_exzoscan_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
        pattern: {
            y: 16,
            squares: [
                [
                    0,
                    1
                ],
                [
                    1,
                    3
                ]
            ]
        }
    }
];
function _createMdxContent(props) {
    const _components = Object.assign({
        h1: "h1",
        p: "p",
        h2: "h2",
        ul: "ul",
        li: "li",
        a: "a",
        code: "code",
        pre: "pre",
        h3: "h3",
        ol: "ol"
    }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components), { Note  } = _components;
    if (!Note) _missingMdxReference("Note", true);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h1, {
                children: "Validating",
                ...{
                    className: "border-b border-zinc-900/5 dark:border-white/5 xl:max-w-none pb-5 mb-7"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "running_validator",
                title: "Running a Validator",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "This section describes how run a Exzo Network validator node."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "There are several clusters available to connect to, see choosing a Cluster for an overview of each."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "validator_req",
                title: "Validator Requirements",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "hardware-requirements",
                children: "Hardware Requirements"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "CPU",
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "12 cores / 24 threads, or more"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "2.8GHz, or faster"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "AVX2 instruction support (to use official release binaries, self-compile otherwise)"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Support for AVX512f and/or SHA-NI instructions is helpful"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "The AMD Zen3 series is popular with the validator community"
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
                            "RAM",
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "128GB, or more"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Motherboard with 256GB capacity suggested"
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
                            "Disk",
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "PCIe Gen3 x4 NVME SSD, or better"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Accounts: 500GB, or larger. High TBW (Total Bytes Written)"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Ledger: 1TB or larger. High TBW suggested"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "OS: (Optional) 500GB, or larger. SATA OK"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "The OS may be installed on the ledger disk, though testing has shown better performance with the ledger on its own disk"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Accounts and ledger can be stored on the same disk, however due to high IOPS, this is not recommended"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "The Samsung 970 and 980 Pro series SSDs are popular with the validator community"
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
                            "GPUs",
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Not strictly necessary at this time"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Motherboard and power supply speced to add one or more high-end GPUs in the future suggested"
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "suggested-rpc-node-requirements",
                children: "Suggested RPC Node Requirements"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The above should be considered the bare minimum hardware requirements for running a RPC node as these nodes require more in-depth details, historical data and increased reliability. To provide the full functionality of an RPC node please upgrade the requirements to the recommended ones below."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "CPU",
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "16 cores / 32 threads, or more"
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
                            "RAM",
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "256 GB, or more"
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
                            "Disk",
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Consider a larger ledger disk if longer transaction history is required"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Accounts and ledger should not be stored on the same disk"
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "virtual-machines-on-cloud-platforms",
                children: "Virtual Machines on Cloud Platforms"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "While you can run a validator on a cloud computing platform, it may not be cost-efficient over the long term."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "However, it may be convenient to run non-voting api nodes on VM instances for your own internal usage. This use case includes exchanges and services built on the Exzo Network."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "In fact, the mainnet-beta validators operated by the team are currently (Mar. 2023) run on GCE n2-standard-32 (32 vCPUs, 128 GB memory) instances with 2048 GB SSD for operational convenience."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "For other cloud platforms, select instance types with similar specs."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Also note that egress internet traffic usage may turn out to be high, especially for the case of running delegated validators."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "docker",
                children: "Docker"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Running validator for live clusters (including mainnet-beta) inside Docker is not recommended and generally not supported. This is due to concerns of general Docker's containerzation overhead and resultant performance degradation unless specially configured."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "We use Docker only for development purposes."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "software",
                children: "Software"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "We build and run on Ubuntu 20.04."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "See Installing Exzo Network for the current Exzo Network  software release."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Be sure to ensure that the machine used is not behind a residential NAT to avoid NAT traversal issues. A cloud-hosted machine works best. Ensure that IP ports 8000 through 10000 are not blocked for Internet inbound and outbound traffic."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Prebuilt binaries are available for Linux x86_64 on CPUs supporting AVX2 (Ubuntu 20.04 recommended). MacOS or WSL users may build from source."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "gpu-requirements",
                children: "GPU Requirements"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "CUDA is required to make use of the GPU on your system. The provided Exzo Network release binaries are built on Ubuntu 20.04 with ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://developer.nvidia.com/cuda-toolkit-archive",
                        children: "CUDA Toolkit 10.1 update 1"
                    }),
                    ". If your machine is using a different CUDA version than you will need to rebuild from source."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "stake-requirements",
                children: "Stake Requirements"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Anyone can start a validator node, however it will not generate rewards before it's total delegated stake reaches 10,000 XZO or more."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "starting_validator",
                title: "Starting a Validator",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "configure-the-exzo-network-cli",
                children: "Configure the Exzo Network CLI"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "The Exzo Network cli includes ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "get"
                    }),
                    " and ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "set"
                    }),
                    " configuration commands to automatically set the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "--url"
                    }),
                    " argument for cli commands. For example:"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "exzo-network config set --url https://testnet.exzoscan.io/rpc\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">exzo-network config </span><span style="color: var(--shiki-token-function)">set</span><span style="color: var(--shiki-color-text)"> --url https://testnet.exzoscan.io/rpc</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "While this section demonstrates how to connect to the Devnet cluster, the steps are similar for the other Exzo Network Clusters."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "confirm-the-cluster-is-reachable",
                children: "Confirm The Cluster Is Reachable"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Before attaching a validator node, sanity check that the cluster is accessible to your machine by fetching the transaction count:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "exzo-network transaction-count\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">exzo-network transaction-count</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "confirm-your-installation",
                children: "Confirm your Installation"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Try running following command to join the gossip network and view all the other nodes in the cluster:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "exzo-gossip spy --entrypoint bootstrap.testnet.exzoscan.io:8001\r\n# Press ^C to exit\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">exzo-gossip spy --entrypoint bootstrap.testnet.exzoscan.io:8001</span></span>\n<span><span style="color: var(--shiki-token-comment)"># Press ^C to exit</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "enabling-cuda",
                children: "Enabling CUDA"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "If your machine has a GPU with CUDA installed (Linux-only currently), include the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "--cuda"
                    }),
                    " argument to exzo-network",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "-validator"
                    }),
                    "."
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "When your validator is started look for the following log message to indicate that CUDA is enabled: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: '"[<timestamp> solana::validator] CUDA is enabled"'
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "system-tuning",
                children: "System Tuning"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Linux"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Automatic"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The Exzo Network repo includes a daemon to adjust system settings to optimize performance (namely by increasing the OS UDP buffer limits, and scheduling PoH with realtime policy)."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "The daemon (",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "solana-sys-tuner"
                    }),
                    ") is included in the Exzo Network binary release. Restart it, before restarting your validator, after each software upgrade to ensure that the latest recommended settings are applied."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "To run it:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "sudo solana-sys-tuner --user $(whoami) > sys-tuner.log 2>&1 &\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">sudo solana-sys-tuner --user </span><span style="color: var(--shiki-token-string-expression)">$(whoami)</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">&gt;</span><span style="color: var(--shiki-color-text)"> sys-tuner.log </span><span style="color: var(--shiki-token-keyword)">2&gt;&amp;1</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">&amp;</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Manual"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "If you would prefer to manage system settings on your own, you may do so with the following commands."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Increase UDP buffers"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: 'sudo bash -c "cat >/etc/sysctl.d/20-solana-udp-buffers.conf <<EOF\r\n# Increase UDP buffer size\r\nnet.core.rmem_default = 134217728\r\nnet.core.rmem_max = 134217728\r\nnet.core.wmem_default = 134217728\r\nnet.core.wmem_max = 134217728\r\nEOF"\n',
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">sudo bash -c </span><span style="color: var(--shiki-token-string-expression)">&quot;cat &gt;/etc/sysctl.d/20-solana-udp-buffers.conf &lt;&lt;EOF</span></span>\n<span><span style="color: var(--shiki-token-string-expression)"># Increase UDP buffer size</span></span>\n<span><span style="color: var(--shiki-token-string-expression)">net.core.rmem_default = 134217728</span></span>\n<span><span style="color: var(--shiki-token-string-expression)">net.core.rmem_max = 134217728</span></span>\n<span><span style="color: var(--shiki-token-string-expression)">net.core.wmem_default = 134217728</span></span>\n<span><span style="color: var(--shiki-token-string-expression)">net.core.wmem_max = 134217728</span></span>\n<span><span style="color: var(--shiki-token-string-expression)">EOF&quot;</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "sudo sysctl -p /etc/sysctl.d/20-solana-udp-buffers.conf\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">sudo sysctl -p /etc/sysctl.d/20-solana-udp-buffers.conf</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Increased memory mapped files limit"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: 'sudo bash -c "cat >/etc/sysctl.d/20-solana-mmaps.conf <<EOF\r\n# Increase memory mapped files limit\r\nvm.max_map_count = 500000\r\nEOF"\n',
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">sudo bash -c </span><span style="color: var(--shiki-token-string-expression)">&quot;cat &gt;/etc/sysctl.d/20-solana-mmaps.conf &lt;&lt;EOF</span></span>\n<span><span style="color: var(--shiki-token-string-expression)"># Increase memory mapped files limit</span></span>\n<span><span style="color: var(--shiki-token-string-expression)">vm.max_map_count = 500000</span></span>\n<span><span style="color: var(--shiki-token-string-expression)">EOF&quot;</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "sudo sysctl -p /etc/sysctl.d/20-solana-mmaps.conf\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">sudo sysctl -p /etc/sysctl.d/20-solana-mmaps.conf</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Add"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "LimitNOFILE=500000\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">LimitNOFILE=500000</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "to the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "[Service]"
                    }),
                    " section of your systemd service file, if you use one, otherwise add it to ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "/etc/systemd/system.conf"
                    }),
                    "."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "sudo systemctl daemon-reload\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">sudo systemctl daemon-reload</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: 'sudo bash -c "cat >/etc/security/limits.d/90-solana-nofiles.conf <<EOF\r\n# Increase process file descriptor count limit\r\n* - nofile 500000\r\nEOF"\n',
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">sudo bash -c </span><span style="color: var(--shiki-token-string-expression)">&quot;cat &gt;/etc/security/limits.d/90-solana-nofiles.conf &lt;&lt;EOF</span></span>\n<span><span style="color: var(--shiki-token-string-expression)"># Increase process file descriptor count limit</span></span>\n<span><span style="color: var(--shiki-token-string-expression)">* - nofile 500000</span></span>\n<span><span style="color: var(--shiki-token-string-expression)">EOF&quot;</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "### Close all open sessions (log out then, in again) ###\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-token-comment)">### Close all open sessions (log out then, in again) ###</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The identity public key can now be viewed by running:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "exzo-network-keygen pubkey ~/validator-keypair.json\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">exzo-network-keygen pubkey </span><span style="color: var(--shiki-token-keyword)">~</span><span style="color: var(--shiki-color-text)">/validator-keypair.json</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Note, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                    children: 'Note: The "validator-keypair.json” file is also your (ed25519) private key.'
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "paper-wallet-identity",
                children: "Paper Wallet identity"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "You can create a paper wallet for your identity file instead of writing the keypair file to disk with:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "exzo-network-keygen new --no-outfile\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">exzo-network-keygen new --no-outfile</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The corresponding identity public key can now be viewed by running:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "exzo-network-keygen pubkey ASK\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">exzo-network-keygen pubkey ASK</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "and then entering your seed phrase."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "See Paper Wallet Usage for more info."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "acc_management",
                title: "Vote Account Management",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "This page describes how to set up an on-chain vote account. Creating a vote account is needed if you plan to run a validator node on Velas."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "create-a-vote-account",
                children: "Create a Vote Account"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A vote account can be created with the create-vote-account command. The vote account can be configured when first created or after the validator is running. All aspects of the vote account can be changed except for the vote account address, which is fixed for the lifetime of the account."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Configure an Existing Vote Account"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "To change the validator identity, use vote-update-validator."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "To change the vote authority, use vote-authorize-voter."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "To change the withdraw authority, use vote-authorize-withdrawer."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "To change the commission, use vote-update-commission."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "vote-account-structure",
                children: "Vote Account Structure"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Vote Account Address"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A vote account is created at an address that is either the public key of a keypair file, or at a derived address based on a keypair file's public key and a seed string."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The address of a vote account is never needed to sign any transactions, but is just used to look up the account information."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "When someone wants to delegate tokens in a stake account, the delegation command is pointed at the vote account address of the validator to whom the token-holder wants to delegate."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Validator Identity"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: 'The validator identity is a system account that is used to pay for all the vote transaction fees submitted to the vote account. Because the validator is expected to vote on most valid blocks it receives, the validator identity account is frequently (potentially multiple times per second) signing transactions and paying fees. For this reason the validator identity keypair must be stored as a "hot wallet" in a keypair file on the same system the validator process is running.'
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: 'Because a hot wallet is generally less secure than an offline or "cold" wallet, the validator operator may choose to store only enough VLX on the identity account to cover voting fees for a limited amount of time, such as a few weeks or months. The validator identity account could be periodically topped off from a more secure wallet.'
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "This practice can reduce the risk of loss of funds if the validator node's disk or file system becomes compromised or corrupted."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The validator identity is required to be provided when a vote account is created. The validator identity can also be changed after an account is created by using the vote-update-validator command."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Vote Authority"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The vote authority keypair is used to sign each vote transaction the validator node wants to submit to the cluster. This doesn't necessarily have to be unique from the validator identity, as you will see later in this document. Because the vote authority, like the validator identity, is signing transactions frequently, this also must be a hot keypair on the same file system as the validator process."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The vote authority can be set to the same address as the validator identity. If the validator identity is also the vote authority, only one signature per vote transaction is needed in order to both sign the vote and pay the transaction fee. Because transaction fees on Exzo Network are assessed per-signature, having one signer instead of two will result in half the transaction fee paid compared to setting the vote authority and validator identity to two different accounts."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The vote authority can be set when the vote account is created. If it is not provided, the default behavior is to assign it the same as the validator identity. The vote authority can be changed later with the vote-authorize-voter command."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The vote authority can be changed at most once per epoch. If the authority is changed with vote-authorize-voter, this will not take effect until the beginning of the next epoch. To support a smooth transition of the vote signing, Exzo Network-validator allows the --authorized-voter argument to be specified multiple times. This allows the validator process to keep voting successfully when the network reaches an epoch boundary at which the validator's vote authority account changes."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Withdraw Authority"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The withdraw authority keypair is used to withdraw funds from a vote account using the withdraw-from-vote-account command. Any network rewards a validator earns are deposited into the vote account and are only retrievable by signing with the withdraw authority keypair."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The withdraw authority is also required to sign any transaction to change a vote account's commission, and to change the validator identity on a vote account."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Because the vote account could accrue a significant balance, consider keeping the withdraw authority keypair in an offline/cold wallet, as it is not needed to sign frequent transactions."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The withdraw authority can be set at vote account creation with the --authorized-withdrawer option. If this is not provided, the validator identity will be set as the withdraw authority by default."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The withdraw authority can be changed later with the vote-authorize-withdrawer command."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Commission"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Commission is the percent of network rewards earned by a validator that are deposited into the validator's vote account. The remainder of the rewards are distributed to all of the stake accounts delegated to that vote account, proportional to the active stake weight of each stake account."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "For example, if a vote account has a commission of 10%, for all rewards earned by that validator in a given epoch, 10% of these rewards will be deposited into the vote account in the first block of the following epoch. The remaining 90% will be deposited into delegated stake accounts as immediately active stake."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A validator may choose to set a low commission to try to attract more stake delegations as a lower commission results in a larger percentage of rewards passed along to the delegator. As there are costs associated with setting up and operating a validator node, a validator would ideally set a high enough commission to at least cover their expenses."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Commission can be set upon vote account creation with the --commission option. If it is not provided, it will default to 100%, which will result in all rewards deposited in the vote account, and none passed on to any delegated stake accounts."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Commission can also be changed later with the vote-update-commission command."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "When setting the commission, only integer values in the set [0-100] are accepted. The integer represents the number of percentage points for the commission, so creating an account with --commission 10 will set a 10% commission."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "key-rotation",
                children: "Key Rotation"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Rotating the vote account authority keys require special handling when dealing with a live validator."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Vote Account Validator Identity"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "You will need access to the withdraw authority keypair for the vote account to change the validator identity. The follow steps assume that ~/withdraw-authority.json is that keypair."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Create the new validator identity keypair, Exzo Network-keygen new -o ~/new-validator-keypair.json."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Ensure that the new identity account has been funded, Exzo Network transfer ~/new-validator-keypair.json 500."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Run Exzo Network vote-update-validator ~/vote-account-keypair.json ~/new-validator-keypair.json ~/withdraw-authority.json to modify the validator identity in your vote account"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Restart your validator with the new identity keypair for the --identity argument"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "vote-account-authorized-voter",
                children: "Vote Account Authorized Voter"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The vote authority keypair may only be changed at epoch boundaries and requires some additional arguments to Exzo Network-validator for a seamless migration."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Run Exzo Network epoch-info. If there is not much time remaining time in the current epoch, consider waiting for the next epoch to allow your validator plenty of time to restart and catch up."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Create the new vote authority keypair, Exzo Network-keygen new -o ~/new-vote-authority.json."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Determine the current vote authority keypair by running Exzo Network vote-account ~/vote-account-keypair.json. It may be validator's identity account (the default) or some other keypair. The following steps assume that ~/validator-keypair.json is that keypair."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Run Exzo Network vote-authorize-voter ~/vote-account-keypair.json ~/validator-keypair.json ~/new-vote-authority.json. The new vote authority is scheduled to become active starting at the next epoch."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Exzo Network-validator now needs to be restarted with the old and new vote authority keypairs, so that it can smoothly transition at the next epoch. Add the two arguments on restart: --authorized-voter ~/validator-keypair.json --authorized-voter ~/new-vote-authority.json"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "After the cluster reaches the next epoch, remove the --authorized-voter ~/validator-keypair.json argument and restart Exzo Network-validator, as the old vote authority keypair is no longer required."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "vote-account-authorized-withdrawer",
                children: "Vote Account Authorized Withdrawer"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "No special handling is required. Use the Exzo Network vote-authorize-withdrawer command as needed."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "staking",
                title: "Staking",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "By default your validator will have no stake. This means it will be ineligible to become leader."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "monitoring-catch-up",
                children: "Monitoring Catch Up"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "To delegate stake, first make sure your validator is running and has caught up to the cluster. It may take some time to catch up after your validator boots. Use the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "catchup"
                    }),
                    " command to monitor your validator through this process:"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "exzonetwork catchup ~/validator-keypair.json\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">exzonetwork catchup </span><span style="color: var(--shiki-token-keyword)">~</span><span style="color: var(--shiki-color-text)">/validator-keypair.json</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Until your validator has caught up, it will not be able to vote successfully and stake cannot be delegated to it."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Also if you find the cluster's slot advancing faster than yours, you will likely never catch up. This typically implies some kind of networking issue between your validator and the rest of the cluster."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "create-stake-keypair",
                children: "Create Stake Keypair"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "If you haven’t already done so, create a staking keypair. If you have completed this step, you should see the “validator-stake-keypair.json” in your Exzo Network runtime directory."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "exzonetwork-keygen new -o ~/validator-stake-keypair.json\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">exzonetwork-keygen new -o </span><span style="color: var(--shiki-token-keyword)">~</span><span style="color: var(--shiki-color-text)">/validator-stake-keypair.json</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "delegate-stake",
                children: "Delegate Stake"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Now delegate 1 XZO to your validator by first creating your stake account:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "exzonetwork create-stake-account ~/validator-stake-keypair.json 1\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">exzonetwork create-stake-account </span><span style="color: var(--shiki-token-keyword)">~</span><span style="color: var(--shiki-color-text)">/validator-stake-keypair.json 1</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "and then delegating that stake to your validator:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "exzonetwork delegate-stake ~/validator-stake-keypair.json ~/vote-account-keypair.json\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">exzonetwork delegate-stake </span><span style="color: var(--shiki-token-keyword)">~</span><span style="color: var(--shiki-color-text)">/validator-stake-keypair.json </span><span style="color: var(--shiki-token-keyword)">~</span><span style="color: var(--shiki-color-text)">/vote-account-keypair.json</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Don’t delegate your remaining XZO, as your validator will use those tokens to vote."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Stakes can be re-delegated to another node at any time with the same command, but only one re-delegation is permitted per epoch:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "exzonetwork delegate-stake ~/validator-stake-keypair.json ~/some-other-vote-account-keypair.json\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">exzonetwork delegate-stake </span><span style="color: var(--shiki-token-keyword)">~</span><span style="color: var(--shiki-color-text)">/validator-stake-keypair.json </span><span style="color: var(--shiki-token-keyword)">~</span><span style="color: var(--shiki-color-text)">/some-other-vote-account-keypair.json</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Assuming the node is voting, now you're up and running and generating validator rewards. Rewards are paid automatically on epoch boundaries."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The rewards lamport earned are split between your stake account and the vote account according to the commission rate set in the vote account. Rewards can only be earned while the validator is up and running. Further, once staked, the validator becomes an important part of the network. In order to safely remove a validator from the network, first deactivate its stake."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "At the end of each slot, a validator is expected to send a vote transaction. These vote transactions are paid for by lamport from a validator's identity account."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "This is a normal transaction so the standard transaction fee will apply. The transaction fee range is defined by the genesis block. The actual fee will fluctuate based on transaction load. You can determine the current fee via the RPC API “getRecentBlockhash” before submitting a transaction."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "validator-stake-warm-up",
                children: "Validator Stake Warm-up"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Stakes need to warm up, and warmup increments are applied at Epoch boundaries, so it can take an hour or more for stake to come fully online."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "To monitor your validator during its warmup period:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "View your vote account:",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "exzonetwork vote-account ~/vote-account-keypair.json"
                            }),
                            " This displays the current state of all the votes the validator has submitted to the network."
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "View your stake account, the delegation preference and details of your stake:",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "solana stake-account ~/validator-stake-keypair.json"
                            })
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "exzonetwork validators"
                            }),
                            " displays the current active stake of all validators, including yours"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "exzonetwork stake-history"
                            }),
                            " shows the history of stake warming up and cooling down over recent epochs"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Look for log messages on your validator indicating your next leader slot: ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "[2019-09-27T20:16:00.319721164Z INFO exzonetwork_core::replay_stage] <VALIDATOR_IDENTITY_PUBKEY> voted and reset PoH at tick height ####. My next leader slot is ####"
                            })
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Once your stake is warmed up, you will see a stake balance listed for your validator by running ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "exzonetwork validators"
                            })
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "monitor-your-staked-validator",
                children: "Monitor Your Staked Validator"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Confirm your validator becomes a leader"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "After your validator is caught up, use the ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "exzonetwork balance"
                            }),
                            " command to monitor the earnings as your validator is selected as leader and collects transaction fees"
                        ]
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Exzo Network nodes offer a number of useful JSON-RPC methods to return information about the network and your validator's participation. Make a request by using curl (or another http client of your choosing), specifying the desired method in JSON-RPC-formatted data. For example:"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "json",
                code: '// Request\r\n  curl -X POST -H "Content-Type: application/json" -d \'{"jsonrpc":"2.0","id":1, "method":"getEpochInfo"}\' http://localhost:8899\r\n \r\n  // Result\r\n  {"jsonrpc":"2.0","result":{"epoch":3,"slotIndex":126,"slotsInEpoch":256},"id":1}\n',
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-json",
                    children: '<span><span style="color: var(--shiki-token-comment)">// Request</span></span>\n<span><span style="color: var(--shiki-color-text)">  curl -X POST -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Content-Type: application/json&quot;</span><span style="color: var(--shiki-color-text)"> -d &#39;{</span><span style="color: var(--shiki-token-keyword)">&quot;jsonrpc&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;2.0&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">&quot;method&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;getEpochInfo&quot;</span><span style="color: var(--shiki-color-text)">}&#39; http:</span><span style="color: var(--shiki-token-comment)">//localhost:8899</span></span>\n<span><span style="color: var(--shiki-color-text)"> </span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-comment)">// Result</span></span>\n<span><span style="color: var(--shiki-color-text)">  {</span><span style="color: var(--shiki-token-keyword)">&quot;jsonrpc&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;2.0&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-keyword)">&quot;result&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)">{</span><span style="color: var(--shiki-token-keyword)">&quot;epoch&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-token-constant)">3</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-keyword)">&quot;slotIndex&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-token-constant)">126</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-keyword)">&quot;slotsInEpoch&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-token-constant)">256</span><span style="color: var(--shiki-color-text)">}</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-token-constant)">1</span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Helpful JSON-RPC methods:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "getEpochInfo"
                            }),
                            " An epoch is the time, i.e. number of slots, for which a leader schedule is valid. This will tell you what the current epoch is and how far into it the cluster is."
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "getVoteAccounts"
                            }),
                            " This will tell you how much active stake your validator currently has. A % of the validator's stake is activated on an epoch boundary. You can learn more about staking on Exzo Network here."
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "getLeaderSchedule"
                            }),
                            " At any given moment, the network expects only one validator to produce ledger entries. The validator currently selected to produce ledger entries is called the “leader”. This will return the complete leader schedule (on a slot-by-slot basis) for currently activated stake, the identity pubkey will show up 1 or more times here."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "deactivating-stake",
                children: "Deactivating Stake"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Before detaching your validator from the cluster, you should deactivate the stake that was previously delegated by running:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "exzonetwork deactivate-stake ~/validator-stake-keypair.json\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">exzonetwork deactivate-stake </span><span style="color: var(--shiki-token-keyword)">~</span><span style="color: var(--shiki-color-text)">/validator-stake-keypair.json</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Stake is not deactivated immediately and instead cools down in a similar fashion as stake warm up. Your validator should remain attached to the cluster while the stake is cooling down. While cooling down, your stake will continue to earn rewards. Only after stake cooldown is it safe to turn off your validator or withdraw it from the network. Cooldown may take several epochs to complete, depending on active stake and the size of your stake."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Note that a stake account may only be used once, so after deactivation, use the cli's ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "withdraw-stake"
                    }),
                    " command to recover the previously staked lamport."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "monitoring_validator",
                title: "Monitoring a Validator",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "check-gossip",
                children: "Check Gossip"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Confirm the IP address and identity pubkey of your validator is visible in the gossip network by running:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "exzonetwork-gossip spy --entrypoint bootstrap.exzonetwork.com:8001\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">exzonetwork-gossip spy --entrypoint bootstrap.exzonetwork.com:8001</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "check-your-balance",
                children: "Check Your Balance"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Your account balance should decrease by the transaction fee amount as your validator submits votes, and increase after serving as the leader. Pass the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "--lamports"
                    }),
                    " are to observe in finer detail:"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "exzonetwork balance --lamports\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">exzonetwork balance --lamports</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "check-vote-activity",
                children: "Check Vote Activity"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "The ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "exzonetwork vote-account"
                    }),
                    " command displays the recent voting activity from your validator:"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "exzonetwork vote-account ~/vote-account-keypair.json\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">exzonetwork vote-account </span><span style="color: var(--shiki-token-keyword)">~</span><span style="color: var(--shiki-color-text)">/vote-account-keypair.json</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "get-cluster-info",
                children: "Get Cluster Info"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "There are several useful JSON-RPC endpoints for monitoring your validator on the cluster, as well as the health of the cluster:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: '# Similar to exzonetwork-gossip, you should see your validator in the list of cluster nodes\r\ncurl -X POST -H "Content-Type: application/json" -d \'{"jsonrpc":"2.0","id":1, "method":"getClusterNodes"}\' https://explorer.testnet.exzonetwork.com/rpc\r\n# If your validator is properly voting, it should appear in the list of `current` vote accounts. If staked, `stake` should be > 0\r\ncurl -X POST -H "Content-Type: application/json" -d \'{"jsonrpc":"2.0","id":1, "method":"getVoteAccounts"}\' https://explorer.testnet.exzonetwork.com/rpc\r\n# Returns the current leader schedule\r\ncurl -X POST -H "Content-Type: application/json" -d \'{"jsonrpc":"2.0","id":1, "method":"getLeaderSchedule"}\' https://explorer.testnet.exzonetwork.com/rpc\r\n# Returns info about the current epoch. slotIndex should progress on subsequent calls.\r\ncurl -X POST -H "Content-Type: application/json" -d \'{"jsonrpc":"2.0","id":1, "method":"getEpochInfo"}\' https://explorer.testnet.exzonetwork.com/rpc\n',
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-token-comment)"># Similar to exzonetwork-gossip, you should see your validator in the list of cluster nodes</span></span>\n<span><span style="color: var(--shiki-color-text)">curl -X POST -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Content-Type: application/json&quot;</span><span style="color: var(--shiki-color-text)"> -d </span><span style="color: var(--shiki-token-string-expression)">&#39;{&quot;jsonrpc&quot;:&quot;2.0&quot;,&quot;id&quot;:1, &quot;method&quot;:&quot;getClusterNodes&quot;}&#39;</span><span style="color: var(--shiki-color-text)"> https://explorer.testnet.exzonetwork.com/rpc</span></span>\n<span><span style="color: var(--shiki-token-comment)"># If your validator is properly voting, it should appear in the list of `current` vote accounts. If staked, `stake` should be &gt; 0</span></span>\n<span><span style="color: var(--shiki-color-text)">curl -X POST -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Content-Type: application/json&quot;</span><span style="color: var(--shiki-color-text)"> -d </span><span style="color: var(--shiki-token-string-expression)">&#39;{&quot;jsonrpc&quot;:&quot;2.0&quot;,&quot;id&quot;:1, &quot;method&quot;:&quot;getVoteAccounts&quot;}&#39;</span><span style="color: var(--shiki-color-text)"> https://explorer.testnet.exzonetwork.com/rpc</span></span>\n<span><span style="color: var(--shiki-token-comment)"># Returns the current leader schedule</span></span>\n<span><span style="color: var(--shiki-color-text)">curl -X POST -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Content-Type: application/json&quot;</span><span style="color: var(--shiki-color-text)"> -d </span><span style="color: var(--shiki-token-string-expression)">&#39;{&quot;jsonrpc&quot;:&quot;2.0&quot;,&quot;id&quot;:1, &quot;method&quot;:&quot;getLeaderSchedule&quot;}&#39;</span><span style="color: var(--shiki-color-text)"> https://explorer.testnet.exzonetwork.com/rpc</span></span>\n<span><span style="color: var(--shiki-token-comment)"># Returns info about the current epoch. slotIndex should progress on subsequent calls.</span></span>\n<span><span style="color: var(--shiki-color-text)">curl -X POST -H </span><span style="color: var(--shiki-token-string-expression)">&quot;Content-Type: application/json&quot;</span><span style="color: var(--shiki-color-text)"> -d </span><span style="color: var(--shiki-token-string-expression)">&#39;{&quot;jsonrpc&quot;:&quot;2.0&quot;,&quot;id&quot;:1, &quot;method&quot;:&quot;getEpochInfo&quot;}&#39;</span><span style="color: var(--shiki-color-text)"> https://explorer.testnet.exzonetwork.com/rpc</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "publish_validator_info",
                title: "Publishing Validator Info",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "You can publish your validator information to the chain to be publicly visible to other users."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "run-exzo-network-validator-info",
                children: "Run Exzo Network validator-info"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Run the Exzo Network CLI to populate a validator info account:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "exzonetwork validator-info publish --keypair ~/validator-keypair.json <VALIDATOR_INFO_ARGS> <VALIDATOR_NAME>\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">exzonetwork validator-info publish --keypair </span><span style="color: var(--shiki-token-keyword)">~</span><span style="color: var(--shiki-color-text)">/validator-keypair.json </span><span style="color: var(--shiki-token-keyword)">&lt;</span><span style="color: var(--shiki-color-text)">VALIDATOR_INFO_ARGS</span><span style="color: var(--shiki-token-keyword)">&gt;</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">&lt;</span><span style="color: var(--shiki-color-text)">VALIDATOR_NAME</span><span style="color: var(--shiki-token-keyword)">&gt;</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "For details about optional fields for VALIDATOR_INFO_ARGS:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "exzonetwork validator-info publish --help\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">exzonetwork validator-info publish --help</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "example-commands",
                children: "Example Commands"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Example publish command:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: 'exzonetwork validator-info publish "Elvis Validator" -n elvis -w "https://elvis-validates.com"\n',
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">exzonetwork validator-info publish </span><span style="color: var(--shiki-token-string-expression)">&quot;Elvis Validator&quot;</span><span style="color: var(--shiki-color-text)"> -n elvis -w </span><span style="color: var(--shiki-token-string-expression)">&quot;https://elvis-validates.com&quot;</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Example query command:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: "exzonetwork validator-info get\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">exzonetwork validator-info get</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "which outputs"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "bash",
                code: 'Validator info from 8WdJvDz6obhADdxpGCiJKZsDYwTLNEDFizayqziDc9ah\r\nValidator pubkey: 6dMH3u76qZ7XG4bVboVRnBHR2FfrxEqTTTyj4xmyDMWo\r\nInfo: {"keybaseUsername":"elvis","name":"Elvis Validator","website":"https://elvis-validates.com"}\n',
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-bash",
                    children: '<span><span style="color: var(--shiki-color-text)">Validator info from 8WdJvDz6obhADdxpGCiJKZsDYwTLNEDFizayqziDc9ah</span></span>\n<span><span style="color: var(--shiki-color-text)">Validator pubkey: 6dMH3u76qZ7XG4bVboVRnBHR2FfrxEqTTTyj4xmyDMWo</span></span>\n<span><span style="color: var(--shiki-color-text)">Info: {</span><span style="color: var(--shiki-token-string-expression)">&quot;keybaseUsername&quot;</span><span style="color: var(--shiki-color-text)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;elvis&quot;</span><span style="color: var(--shiki-color-text)">,</span><span style="color: var(--shiki-token-string-expression)">&quot;name&quot;</span><span style="color: var(--shiki-color-text)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;Elvis Validator&quot;</span><span style="color: var(--shiki-color-text)">,</span><span style="color: var(--shiki-token-string-expression)">&quot;website&quot;</span><span style="color: var(--shiki-color-text)">:</span><span style="color: var(--shiki-token-string-expression)">&quot;https://elvis-validates.com&quot;</span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
                }),
                ...{
                    title: ""
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "keybase",
                children: "Keybase"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Including a Keybase username allows client applications (like the Exzo Network Explorer) to automatically pull in your validator public profile, including cryptographic proofs, brand identity, etc. To connect your validator pubkey with Keybase:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Join ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                href: "https://keybase.io/",
                                children: "https://keybase.io/"
                            }),
                            " and complete the profile for your validator"
                        ]
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Add your validator identity pubkey to Keybase:"
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Create an empty file on your local computer called ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "validator-<PUBKEY>"
                            })
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "In Keybase, navigate to the Files section, and upload your pubkey file to a ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "exzonetwork"
                            }),
                            " subdirectory in your public folder: ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "/keybase/public/<KEYBASE_USERNAME>/exzonetwork"
                            })
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "To check your pubkey, ensure you can successfully browse to ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "https://keybase.pub/<KEYBASE_USERNAME>/exzonetwork/validator-<PUBKEY>"
                            })
                        ],
                        ...{
                            className: "break-words"
                        }
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                start: "3",
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Add or update your ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "exzonetwork validator-info"
                            }),
                            " with your Keybase username. The CLI will verify the ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "validator-<PUBKEY>"
                            }),
                            " file"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "security_recomm",
                title: "Security Recommendations",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "ode-to-linux-system-administration-generic-best-practices",
                children: "Ode to Linux System Administration Generic Best Practices"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "troubleshooting",
                title: "Troubleshooting",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "useful-links-and-discussion",
                children: "Useful Links & Discussion"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ResourcesOther__WEBPACK_IMPORTED_MODULE_3__/* .ResourcesOther */ .m, {
                id: "validating",
                title: "",
                level: 2,
                elements: elements,
                isHeading: false
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
            ResourcesOther: _components_ResourcesOther__WEBPACK_IMPORTED_MODULE_3__/* .ResourcesOther */ .m,
            _provideComponents: _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents,
            elements,
            logoExzoscan: _images_exzoscan_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
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

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

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

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,636,675,47,825,336,230], () => (__webpack_exec__(4893)));
module.exports = __webpack_exports__;

})();