"use strict";
(() => {
var exports = {};
exports.id = 206;
exports.ids = [206];
exports.modules = {

/***/ 1331:
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

const title = "Software";

const sections = [
    {
        title: "Vision Documentation",
        id: "vision_doc"
    },
    {
        title: "Quick Start",
        id: "quick_start"
    },
    {
        title: "Specifications",
        id: "specifications"
    },
    {
        title: "Technical Perspective",
        id: "tech_perspective"
    },
    {
        title: "User Stories",
        id: "user_stories"
    }
];
function _createMdxContent(props) {
    const _components = Object.assign({
        h1: "h1",
        p: "p",
        ul: "ul",
        li: "li",
        h2: "h2",
        a: "a",
        h3: "h3",
        pre: "pre",
        code: "code"
    }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components), { Note , CodeGroup , Row , Col , Properties , Property  } = _components;
    if (!CodeGroup) _missingMdxReference("CodeGroup", true);
    if (!Col) _missingMdxReference("Col", true);
    if (!Note) _missingMdxReference("Note", true);
    if (!Properties) _missingMdxReference("Properties", true);
    if (!Property) _missingMdxReference("Property", true);
    if (!Row) _missingMdxReference("Row", true);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h1, {
                children: "Software",
                ...{
                    className: "border-b border-zinc-900/5 dark:border-white/5 xl:max-w-none pb-5 mb-7"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "vision_doc",
                title: "Vision Documentation",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Exzo Network project includes two main components"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "A web-based application that will provide a platform for decentralized cross-chain conversion of digital assets."
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "A blockchain network based on Proof-of-Stake consensus mechanism that will provide an ecosystem for creating customized blockchains, deploying smart contracts, with low fees and high throughput."
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Exzo Network project will be aimed to including full support of Ethereum based dApps."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "All critical components of the system will be reused as much as possible from existing open source projects to reduce time-to-market and costs of implementation."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "ecosystem-needs-and-requirements",
                children: "Ecosystem Needs & Requirements"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Cryptocurrencies have an isolated existence. Designed to be decentralized and work independently, they either have their own separate blockchain ecosystem or run off of other larger ones such as Ethereum and Binance Smart Chain."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "This essentially means that one token cannot interact with another if they run on different ecosystems. As more and more tokens are launched coupled with increased interest due to DeFi, the struggle is getting more serious."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Exzo Network project is committed to promote adoption of cryptocurrencies by providing products that are useful and easy to use."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "First of all, the cross-chain swap solution should solve the problem of converting tokens between different blockchains which can now be complicated for the general user."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "There is another problem that is relevant for small and medium businesses who want to implement blockchain and dApps into their operations. Using existing solutions puts limitations on business applicability and is often accompanied with high transactional costs. Custom development of a decentralized application or the blockchain network can be costly and time consuming. By implementing the innovative blockchain architecture Exzo Network native blockchain network should allow cheap, simple and fast creation of custom blockchains with low-cost transactions for businesses that need it."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Businesses that already run their applications on Ethereum struggle with high fees and low TPS rate. They need a cheaper and faster alternative to optimize their operations. Exzo Network blockchain should provide full support for Ethereum based smart contracts written in Solidity for the smooth and efficient transition from Ethereum to Exzo Network blockchain."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "solution-overview",
                children: "Solution Overview"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Exzo Network will be the platform that provides a wide range of blockchain and DeFi opportunities for users from swapping tokens between different blockchains and earn profits from staking to creating fully-functional dApps written in Solidity and fully compatible with Ethereum Virtual Machine (EVM)."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Initially Exzo Network ecosystem will be a fork of Fantom Network (",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://fantom.foundation/",
                        children: "https://fantom.foundation/"
                    }),
                    "). This will give faster time to market, robust technology and feature-rich solutions."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Main components of the platform will include:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Cross-chain swap application"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Main blockchain network supporting Solidity dApps"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Governance token"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Staking module"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Blockchain explorer"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Wallet"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "In later versions, it is planned to introduce enterprise solutions for managing, tracking, and securing private data such as healthcare data/patient data, data for private sector industries, government, etc."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "major-features",
                children: "Major Features"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Cross-chain swap app"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Web application integrated with open source liquidity provider API's that allows to swap tokens between networks supported by these providers from the custom Exzo Network web interface."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "PoS blockchain network"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The solution forked from Fantom blockchain network that will allow for staking and natively building swap bridges between multiple blockchains. The network will be governed by the native Exzo Network token providing the ecosystem for creating swap liquidity pools."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Wallet Application"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Mobile client for storing all supported tokens and accessing DeFi features provided by the network including swaps and staking."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "EVM compatible Solidity dApps"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Full support of Ethereum based smart contracts written in Solidity to allow for dApp development and transition of users from Ethereum to Exzo Network blockchain."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Blockchain Explorer"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Web application integrated with the native network that allows to track and search transactions on the ledger."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "scope-and-limitations",
                children: "Scope & Limitations"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The initial version of Exzo Network project will focus on creating the fastest possible value for end users by providing Exzo Network token swap application integrated with open source liquidity providers via their API's."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "In parallel the efforts will be directed to the development of the core functionality of the platform that covers the MVP features and forms the basis for further development. The MVP release will include a forked and Exzo Network branded set of applications from Fantom blockchain ecosystem."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "For the budget optimization the software will not have features for the general consumer, such as:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Ability to swap tokens that are not supported by open source liquidity providers (initial version)."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Ability to swap tokens between networks that are not supported by Fantom blockchain at the time of the fork."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Custom features that are not supported by Fantom blockchain at the time of the fork."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "other-needs",
                children: "Other Needs"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The solution will initially run on AWS cloud infrastructure utilizing message-based architecture and modern technologies like Docker, RabbitMQ, Redis, Lerna, etc."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "accessibility",
                children: "Accessibility"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Exzo Network platform will be designed to be as widely accessible as possible. Therefore, it should be compatible with the latest versions of Google Chrome, Firefox, Safari, Edge, Brave, and Internet Explorer browsers."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "quick_start",
                title: "Quick Start",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Note, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                    children: "Good to know: A quick start guide can be good to help folks get up and running\r\nwith your API in a few steps. Some people prefer diving in with the basics\r\nrather than meticulously reading every page of documentation!"
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "get-your-api-keys",
                children: "Get your API keys"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Your API requests are authenticated using API keys. Any request that doesn't include an API key will return an error."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "You can generate an API key from your Dashboard at any time."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "install-the-library",
                children: "Install the library"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The best way to interact with our API is to use one of our official libraries:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CodeGroup, {
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                        language: "bash",
                        code: "# Install via NPM\r\nnpm install --save my-api\n",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            className: "language-bash",
                            children: '<span><span style="color: var(--shiki-token-comment)"># Install via NPM</span></span>\n<span><span style="color: var(--shiki-color-text)">npm install --save my-api</span></span>\n<span></span>'
                        }),
                        ...{
                            language: "js"
                        }
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                        language: "bash",
                        code: "# Install via pip\r\npip install --upgrade myapi\n",
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                            className: "language-bash",
                            children: '<span><span style="color: var(--shiki-token-comment)"># Install via pip</span></span>\n<span><span style="color: var(--shiki-color-text)">pip install --upgrade myapi</span></span>\n<span></span>'
                        }),
                        ...{
                            language: "python"
                        }
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Note, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                    children: "Good to know: Using tabs to separate out different languages is a great way to\r\npresent technical examples or code documentation without cramming your docs\r\nwith extra sections or pages per language."
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "make-your-first-request",
                children: "Make your first request"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "To make your first request, send an authenticated request to the pets endpoint. This will create a ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "pet"
                    }),
                    ", which is nice."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Note, {
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                    children: "Good to know: You can use the API Method block to fully document an API\r\nmethod. You can also sync your API blocks with an OpenAPI file or URL to\r\nauto-populate them."
                })
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Take a look at how you might call this method using our official libraries, or via ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "curl"
                    }),
                    ":"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "create-pet",
                children: "Create pet",
                ...{
                    tag: "POST",
                    label: "https://api.myapi.com/v1/pet"
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Row, {
                children: [
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Col, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Creates a new pet."
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                                children: "Required attributes"
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Properties, {
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                    name: "name",
                                    type: "string",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "The name of the pet"
                                    })
                                })
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                                children: "Optional attributes"
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Properties, {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "owner_id",
                                        type: "string",
                                        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                            children: [
                                                "The ",
                                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                                    children: "id"
                                                }),
                                                " of the user who owns the pet"
                                            ]
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "species",
                                        type: "string",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "The species of the pet"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Property, {
                                        name: "breed",
                                        type: "string",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "The breed of the pet"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Col, {
                        sticky: true,
                        children: [
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CodeGroup, {
                                title: "Request",
                                tag: "POST",
                                label: "https://api.myapi.com/v1/pet",
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "bash",
                                        code: "curl https://api.myapi.com/v1/pet\r\n-u YOUR_API_KEY:\r\n-d name='Wilson'\r\n-d species='dog'\r\n-d owner_id='sha7891bikojbkreuy'\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-bash",
                                            children: '<span><span style="color: var(--shiki-color-text)">curl https://api.myapi.com/v1/pet</span></span>\n<span><span style="color: var(--shiki-color-text)">-u YOUR_API_KEY:</span></span>\n<span><span style="color: var(--shiki-color-text)">-d name=</span><span style="color: var(--shiki-token-string-expression)">&#39;Wilson&#39;</span></span>\n<span><span style="color: var(--shiki-color-text)">-d species=</span><span style="color: var(--shiki-token-string-expression)">&#39;dog&#39;</span></span>\n<span><span style="color: var(--shiki-color-text)">-d owner_id=</span><span style="color: var(--shiki-token-string-expression)">&#39;sha7891bikojbkreuy&#39;</span></span>\n<span></span>'
                                        }),
                                        ...{
                                            title: "cURL"
                                        }
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "js",
                                        code: "// require the myapi module and set it up with your API key\r\nconst myapi = require('myapi')(YOUR_API_KEY);\r\n\r\nconst newPet = away myapi.pet.create({\r\n    name: 'Wilson',\r\n    owner_id: 'sha7891bikojbkreuy',\r\n    species: 'Dog',\r\n    breed: 'Golden Retriever',\r\n})\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-js",
                                            children: '<span><span style="color: var(--shiki-token-comment)">// require the myapi module and set it up with your API key</span></span>\n<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">myapi</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">require</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-string-expression)">&#39;myapi&#39;</span><span style="color: var(--shiki-color-text)">)(</span><span style="color: var(--shiki-token-constant)">YOUR_API_KEY</span><span style="color: var(--shiki-color-text)">);</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-keyword)">const</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">newPet</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> away </span><span style="color: var(--shiki-token-constant)">myapi</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">pet</span><span style="color: var(--shiki-token-function)">.create</span><span style="color: var(--shiki-color-text)">({</span></span>\n<span><span style="color: var(--shiki-color-text)">    name</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;Wilson&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    owner_id</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;sha7891bikojbkreuy&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    species</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;Dog&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    breed</span><span style="color: var(--shiki-token-keyword)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&#39;Golden Retriever&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">})</span></span>\n<span></span>'
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                        language: "python",
                                        code: "// Set your API key before making the request\r\nmyapi.api_key = YOUR_API_KEY\r\n\r\nmyapi.Pet.create(\r\n    name='Wilson',\r\n    owner_id='sha7891bikojbkreuy',\r\n    species='Dog',\r\n    breed='Golden Retriever',\r\n)\n",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                            className: "language-python",
                                            children: '<span><span style="color: var(--shiki-token-keyword)">//</span><span style="color: var(--shiki-color-text)"> Set your API key before making the request</span></span>\n<span><span style="color: var(--shiki-color-text)">myapi</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">api_key </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> YOUR_API_KEY</span></span>\n<span></span>\n<span><span style="color: var(--shiki-color-text)">myapi</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-color-text)">Pet</span><span style="color: var(--shiki-token-punctuation)">.</span><span style="color: var(--shiki-token-function)">create</span><span style="color: var(--shiki-token-punctuation)">(</span></span>\n<span><span style="color: var(--shiki-token-punctuation)">    name</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&#39;Wilson&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-token-punctuation)">    owner_id</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&#39;sha7891bikojbkreuy&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-token-punctuation)">    species</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&#39;Dog&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-token-punctuation)">    breed</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-string-expression)">&#39;Golden Retriever&#39;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-token-punctuation)">)</span></span>\n<span></span>'
                                        })
                                    })
                                ]
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                                language: "json",
                                code: '{\r\n    "name"="Wilson",\r\n    "owner": {\r\n        "id": "sha7891bikojbkreuy",\r\n        "name": "Samuel Passet",\r\n    "species": "Dog",}\r\n    "breed": "Golden Retriever",\r\n}\n',
                                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                    className: "language-json",
                                    children: '<span><span style="color: var(--shiki-color-text)">{</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;name&quot;</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-keyword)">&quot;Wilson&quot;</span><span style="color: var(--shiki-color-text)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;owner&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> {</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;id&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;sha7891bikojbkreuy&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">        </span><span style="color: var(--shiki-token-keyword)">&quot;name&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Samuel Passet&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-keyword)">&quot;species&quot;</span><span style="color: var(--shiki-token-punctuation)">:</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-string-expression)">&quot;Dog&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)">}</span></span>\n<span><span style="color: var(--shiki-color-text)">    </span><span style="color: var(--shiki-token-string-expression)">&quot;breed&quot;</span><span style="color: var(--shiki-color-text)">: </span><span style="color: var(--shiki-token-string-expression)">&quot;Golden Retriever&quot;</span><span style="color: var(--shiki-token-punctuation)">,</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
                                }),
                                ...{
                                    title: "Response"
                                }
                            })
                        ]
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "specifications",
                title: "Specifications",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-1-exzo-swap-main-page",
                children: "1.1 ExzoSwap: Main page"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.1.1 Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a Guest I want to view the main page so that I could navigate through the features of ExzoSwap app."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.1.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.1.2.1. A user should be able to navigate to ExzoSwap application from the ExzoCoin (Exzo Network) website."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.1.2.2. The main page of ExzoSwap application should include the following elements in the header:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Exzo Network logo"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Bridges links dropdown menu"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Network selector dropdown menu"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Buy crypto button"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Connect Wallet button"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Language selector button"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.1.2.3. The swap widget should include:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Refresh button"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Settings button"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Source token selector"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Amount input field"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Target token selector"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Swap protocol selector"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Action buttons"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Swap rate and route indicator"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.1.3. UI Design"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-2-exzo-swap-connect-a-wallet",
                children: "1.2. ExzoSwap: Connect a wallet"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.2.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a User I want to connect a wallet so that I could swap tokens on my existing crypto wallet."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.2.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.2.2.1. Once a user clicks “Connect wallet” button the Connect wallet widget is displayed."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.2.2.2. A user should be able to:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Open Terms of service and Privacy policy pages"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Check the “I read and accept” confirmation checkbox"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Choose a network"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Select a wallet: Metamask or WalletConnect"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.2.2.3. Once a user selects a wallet the corresponding web3 app widget is displayed."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.2.2.4. A user selects an account and confirms the connection"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.2.2.5. Once the connection is successful the account alias and wallet balance is displayed in the header."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.2.3. UI Design"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-3-exzo-swap-buy-cryptocurrency-with-a-credit-card",
                children: "1.3. ExzoSwap: Buy cryptocurrency with a credit card"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.3.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a User I want to buy cryptocurrency with a credit card so that I could convert fiat to crypto."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.3.2. Acceptance criteria"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                children: [
                    "1.3.2.1. Upon clicking on the Buy Crypto button a user should be redirected to MoonPay payment gateway (",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://buy.moonpay.io/",
                        children: "https://buy.moonpay.io/"
                    }),
                    ")."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.3.2.2. The payment gateway allows a user to select a cryptocurrency from a list, fill in the target wallet address and buy the selected cryptocurrency with a credit card."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.3.3. UI Design"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-4-exzo-swap-transfer-coins-via-bridges",
                children: "1.4. ExzoSwap: Transfer coins via bridges"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.4.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a User I want to transfer coins via bridges so that I could move tokens from one blockchain to another."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.4.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.4.2.1. A user should be able to move supported tokens between blockchains using bridges."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.4.2.2. Upon clicking on an item in the Bridges dropdown menu a webpage of the corresponding bridge is open in a new browser tab."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.4.2.3. The list of bridges:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://www.binance.org/en/bridge",
                            children: "https://www.binance.org/en/bridge"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://wallet.matic.network/bridge/",
                            children: "https://wallet.matic.network/bridge/"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://gateway.optimism.io/",
                            children: "https://gateway.optimism.io/"
                        })
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                            href: "https://bridge.arbitrum.io/",
                            children: "https://bridge.arbitrum.io/"
                        })
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.4.3. UI Design"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-5-exzo-swap-select-the-chain-for-swap",
                children: "1.5. ExzoSwap: Select the chain for swap"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.5.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a User I want to select the chain for swap so that I could choose the blockchain where I will perform the swap."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.5.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.5.2.1. A user should be able to select a network where they want to swap tokens."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.5.2.2. The selection of a network affects the list of available tokens and protocols in the Swap parameters widget."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.5.2.3. The system should identify if the connected wallet is configured for the selected network and prompt a user to change wallet settings if the wallet network is different."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.5.3. UI Design"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-6-exzo-swap-set-the-swap-parameters",
                children: "1.6. ExzoSwap: Set the swap parameters"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.6.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a User I want to set the swap parameters so that I could define the direction and the amount of the swap"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.6.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.6.2.1. A user should be able to select the source token from the dropdown list and the amount to swap."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.6.2.2. The system should validate if the amount of selected token on the connected wallet of a user is sufficient."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.6.2.3. The system should display the approximate value of defined amount of selected tokens calculated in USD."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.6.2.4. A user should be able to select the target token from the dropdown list."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.6.2.5. A user should be able to view and select available swap protocols to be used for the swap."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.6.2.6. Each swap protocol item should include the name of the protocol, amount to be received, the cost of transaction and total amount of the swap operation."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.6.3. UI Design"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-7-exzo-swap-view-the-details-of-the-deal-rate-fees-route",
                children: "1.7. ExzoSwap: View the details of the deal (rate, fees, route)"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.7.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a User I want to view the details of the deal (rate, fees, route) so that I could understand the full cost of the swap"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.7.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.7.2.1. Once swap parameters are set a user should be able to view the conversion rate and the conversion route."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.7.3. UI Design"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-8-exzo-swap-set-additional-parameters-gas-limit-slippage",
                children: "1.8. ExzoSwap: Set additional parameters (gas limit, slippage)"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.8.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a User I want to set additional parameters (gas limit, slippage) so that I could optimize transaction cost and rate"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.8.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.8.2.1. Upon clicking the Swap settings button the advanced swap parameters widget is open"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.8.2.2. A user should be able to set the Gas limit price for the transaction:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "One of predefined values (Low, Medium or High)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Custom value"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.8.2.3. A user should be able to set the Slippage tolerance value for the transaction:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "One of predefined values"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Custom value"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.8.2.4. Transaction is not executed if it is not possible to complete the transaction within gas price and slippage tolerance limits defined by a user."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.8.3. UI Design"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-9-exzo-swap-confirm-the-deal",
                children: "1.9. ExzoSwap: Confirm the deal"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.9.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a User I want to confirm the deal so that I could initiate the swap transaction"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.9.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.9.2.1. After setting all the parameters of the swap a user should be able to initiate the swap execution by clicking on the Swap Currency button."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.9.2.2. Upon clicking on the Swap Currency button the linked wallet application should be triggered and open for the transaction confirmation."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.9.2.3. If the wallet is not connected to the application, clicking on the Swap Currency button (or if a user clicks Connect Wallet button) should open the Connect Wallet widget."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.9.3. UI Design"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-10-exzo-wallet-home-page",
                children: "1.10. Exzo Wallet: Home page"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.10.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a Guest I want to view the home page so that I could navigate through the features of the Exzo Wallet app"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.10.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.10.2.1. A user should be able to open the Exzo Wallet application from the website of Exzo Network."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.10.2.2. Exzo Wallet app should include the sidebar menu and main content area."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.10.2.3. Sidebar menu should include the following clickable elements:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Exzo logo - redirecting to the main page of Exzo"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Home - redirecting to the home page of Exzo Wallet app"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Wallet - redirecting to the Wallet page"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Staking - redirecting to the Staking page"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Governance - redirecting to the Governance page"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Swap - redirecting to ExzoSwap application"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.10.2.4. The main content area should include:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Action buttons (Connect wallet, Create wallet, Restore wallet)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "General statistics of all wallets within the account (Total balance, Available balance)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The list of wallets associated with the account"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Details of each wallet (Name, Address, Type, Total balance, Available balance)"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.10.3. UI Design"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-11-exzo-wallet-connect-metamask",
                children: "1.11. Exzo Wallet: Connect Metamask"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.11.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a User I want to connect metamask so that I could use funds from my Metamask wallet inside the Exzo Wallet app"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.11.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.11.2.1. A user should be able to connect their Metamask wallet to the Exzo Wallet application."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.11.2.2. Once connected, the user's Metamask wallet is displayed in the list of wallets inside the Exzo Wallet application."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-12-exzo-wallet-create-a-new-wallet",
                children: "1.12. Exzo Wallet: Create a new wallet"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.12.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a User I want to create a new wallet so that I could generate a new key pair for transactions"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.12.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.12.2.1. A user should be able to create a wallet by clicking on the Create wallet button at the home page of Exzo Wallet application."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.12.2.2. The flow of creating a wallet consists of four steps:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Step 1 - a user creates a password for the wallet and downloads keystore file to their local machine"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Step 2 - a seed phrase is displayed. At this step a user should also be available to view the wallet’s private key"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Step 3 - a seed phrase confirmation check. At this step a user should confirm the seed phrase displayed at Step 2 by clicking the words in the correct order."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Step 4 - the confirmation message is displayed. Upon clicking the Access wallet button a user should be redirected to the Wallet page of the newly created wallet."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.12.3. UI Design"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-13-exzo-wallet-restore-wallet",
                children: "1.13. Exzo Wallet: Restore wallet"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.13.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a User I want to restore wallet so that I could recover my funds"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.13.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.13.2.1. Upon clicking on the Restore wallet button from the home page of Exzo Wallet application the Restore wallet widget is displayed."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.13.2.2. The Restore wallet widget should provide three options for wallet recovery:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Uploading keystore file and providing a password to it"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Entering the mnemonic phrase"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Entering the private key of the wallet"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.13.2.3. Once wallet recovery is successful, a user should be redirected to the Wallet page of the recovered wallet"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.13.3. UI Design"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-14-exzo-wallet-edit-wallet-settings",
                children: "1.14. Exzo Wallet: Edit wallet settings"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.14.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a User I want to edit wallet settings so that I could personalize my wallets in Exzo Wallet app"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.14.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.14.2.1. A user should be able to access wallet settings from the wallet item in the list of wallets at the home page of Exzo Wallet application or from a wallet page by clicking the Edit button (pencil icon)."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.14.2.2. Once the Edit button is clicked, the Wallet Settings widget is displayed."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.14.2.3. In the Wallet Settings widget a user should be able to:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "View wallet address"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Copy wallet address"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Show QR code with wallet address"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "View wallet type"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "View and edit wallet display name"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "View and edit the order of wallet display in the list of wallets"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Remove wallet"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Save changes"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.14.3. UI Design"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-15-exzo-wallet-copy-wallet-address",
                children: "1.15. Exzo Wallet: Copy wallet address"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.15.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a User I want to copy wallet address so that I could add my wallet address to a clipboard with a single click"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.15.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.15.2.1. A user should be able to copy wallet address to the clipboard by clicking the Copy button from the wallet item in the list of wallets at the home page of Exzo Wallet application, or from Wallet Settings widget, or from a wallet page."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.15.3. UI Design"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-16-exzo-wallet-show-qr-code-with-wallet-address",
                children: "1.16. Exzo Wallet: Show QR code with wallet address"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.16.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a User I want to show qr code with wallet address so that I could share my wallet address for scanning with a camera"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.16.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.16.2.1. A user should be able to display a wallet address with QR-code for scanning by clicking the QR-code button from the Wallet Settings widget, or from a wallet page."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.16.3. UI Design"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-17-exzo-wallet-remove-wallet",
                children: "1.17. Exzo Wallet: Remove wallet"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.17.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a User I want to delete wallet so that I could remove a wallet from my Exzo Wallet app"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.17.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.17.2.1. A user should be able to remove a wallet from the list of wallets by clicking the Remove wallet button from the Wallet Settings widget."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.17.2.2. Once the Remove wallet button is clicked, the confirmation widget is displayed."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.17.2.3. Upon clicking the Remove button at the confirmation widget, the wallet is removed from the list of wallets."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.17.2.4. A user should be able to access the removed wallet by completing the Restore wallet operation."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.17.3. UI Design"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-18-exzo-wallet-view-the-history-of-transactions",
                children: "1.18. Exzo Wallet: View the history of transactions"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.18.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a User I want to view the history of transactions so that I could see all the incoming and outgoing transactions of my wallet"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.18.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.18.2.1. A user should be able to view the list of transactions for the wallet at the wallet page including:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Transaction address"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Timestamp"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Address of the counterparty"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Received/sent amount"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.18.3. UI Design"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-19-exzo-wallet-view-the-list-of-assets",
                children: "1.19. Exzo Wallet: View the list of assets"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.19.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a User I want to view the list of assets so that I could see all tokens in my wallet"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.19.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.19.2.1. A user should be able to view the list of assets on their wallet including:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The name of an asset"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Available amount"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Deposited amount"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Borrowed amount"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.19.3. UI Design"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-20-exzo-wallet-send-assets",
                children: "1.20. Exzo Wallet: Send assets"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.20.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a User I want to send assets so that I could transfer tokens to another wallet address"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.20.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.20.2.1. A user should be able to send funds from their wallet to another wallet address."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.20.2.2. Once a user clicks on the Send button from the wallet page, the Send assets widget is displayed."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.20.2.3. The flow of sending assets from Exzo Wallet application consists of three steps:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Step 1 - select the destination network (Exzo, Ethereum or Binance)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Step 2 - Enter the amount to be sent, enter recipient’s wallet address and memo. A user should not be able to enter the amount exceeding the total wallet holdings."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Review and confirm the details of the transaction"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.20.2.4. Once the transaction is confirmed it should be sent to a validator node for processing."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.20.2.5. Once the transaction is accepted by a validator it appears on the list of transactions at the wallet page."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.20.3. UI Design"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-21-exzo-wallet-receive-assets",
                children: "1.21. Exzo Wallet: Receive assets"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.21.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a User I want to receive assets so that I could get tokens to my wallet address"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.21.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.21.3. UI Design"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-22-exzo-wallet-stake-exzo-coin-and-get-a-reward",
                children: "1.22. Exzo Wallet: Stake ExzoCoin and get a reward"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.22.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a User I want to stake ExzoCoin so that I could get rewards for securing the network"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.22.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.22.2.1. A user should be able to stake ExzoCoin for the reward."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.22.2.2. There should be two options for staking:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Running a validator node"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Delegation"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.22.2.3. Delegation staking page is open upon clicking Staking in the sidebar menu."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.22.2.4. A user should be able to view active delegations per selected wallet and for all wallets on separate tabs."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.22.2.5. Each delegation includes the details: Delegation time, Validator name, Delegated amount."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.22.2.6. Upon click on Add delegation button the delegation widget is displayed."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.22.2.7. The delegation flow includes two steps:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Step 1 - enter delegation amount and select a validator from the list"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Step 2 - review details and confirm delegation"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.22.2.8. Once confirmed, the delegation is displayed on the list of delegations."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.22.2.9. The reward is paid to the user's account proportionally to the amount delegated to the given validator for each block mined by this validator."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.22.3. UI Design"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-23-exzo-wallet-vote-on-governance-proposals",
                children: "1.23. Exzo Wallet: Vote on governance proposals"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.23.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a User I want to vote on governance proposals so that I could express my opinion on network changes"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.23.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.23.2.1. A user should be able to vote for the proposals suggested by validators from the Governance page that should be accessible under by clicking the Governance button in the sidebar menu."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.23.2.2. The Governance page should include the list of proposals with the following fields:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "ID/Name of a proposals"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Start/End dates of voting"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "User’s votes"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Votes rate"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Winner proposal"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Proposal status"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Details button"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.23.2.3. By clicking Details button a user should be able to access the page with details of the selected proposal that include:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Proposal’s name, description and address"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Current voting stats"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Voting controls"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.23.2.4. To vote on proposals a user should delegate their stake to a validator."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.23.3. UI Design"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-24-exzo-network-run-a-validator-node",
                children: "1.24. Exzo Network: Run a validator node"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.24.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a Validator I want to run a validator node so that I could get rewards for validating transactions"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.24.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.24.2.1. To earn additional fees for validating transactions on chain a user should run a full validator node."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.24.2.2. Validator’s account should meet requirements of ExzoCoin amount on the wallet."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.24.2.3. The flow to setup a full validator node:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Launch Cloud instance that meets recommended requirements"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Install Exzo Network build"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Create validator wallet"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Fund validator wallet"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Register Validator on-chain"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Create a validator key"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Run a node"
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                children: [
                    "1.24.2.4. Detailed description of the installation process can be found by the following ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://docs.fantom.foundation/staking/how-to-run-a-validator-node",
                        children: "reference"
                    }),
                    "."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-25-exzo-network-run-a-read-only-node",
                children: "1.25. Exzo Network: Run a read-only node"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.25.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a User I want to run a read-only node so that I could read on-chain data in real time"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.25.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.25.2.1. To read data from the network without the ability to validate transactions and earn validator fees a user should be able to run a read-only node."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.25.2.2. The flow to setup a read-only node:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Launch Cloud instance that meets recommended requirements"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Install Exzo Network build"
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                children: [
                    "1.25.2.3. Detailed description of the installation process can be found by the following ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://docs.fantom.foundation/staking/run-a-read-only-node",
                        children: "reference"
                    }),
                    "."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-26-exzo-network-deploy-a-solidity-smart-contract",
                children: "1.26. Exzo Network: Deploy a Solidity smart contract"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.26.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a User I want to deploy a solidity smart contract so that I could run ERC-20 or ERC-721 smart contracts on Exzo Network"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.26.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.26.2.1. To deploy a smart contract, a user sends a transaction to the Exzo Network containing smart contract’s bytecode without specifying any recipients."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.26.2.2. After the contract is deployed, it will be available to all users of the Exzo Network."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.26.2.3. Smart contracts should have an Exzo Network address like other accounts."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                children: [
                    "1.26.2.4. Detailed description of the installation process can be found by the following ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://docs.fantom.foundation/tutorials/deploy-a-smart-contract",
                        children: "reference"
                    }),
                    "."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-27-exzo-network-create-a-fixed-cap-asset",
                children: "1.27. Exzo Network: Create a fixed-cap asset"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.27.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a User I want to create a fixed-cap asset so that I could issue a token with fixed supply"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.27.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.27.2.1. A user should be able to create a fixed-cap asset on Exzo Network that are fungible tokens for which the supply is determined at the time of asset creation."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.27.2.2. To deploy a smart contract a user should:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Compile a code of the smart contract into bytecode"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Deploy a smart contract by sending a transaction to the Exzo Network"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Navigate to the explorer to check that the token has been created"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "exzo-network-create-a-variable-cap-asset",
                children: "Exzo Network: Create a variable-cap asset"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.28.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a User I want to create a variable-cap asset so that I could issue a token with variable supply"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.28.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.28.2.1. A user should be able to create a fixed-cap asset on Exzo Network that are fungible tokens for which the supply is determined at the time of asset creation."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.28.2.2. To deploy a smart contract a user should:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Compile a code of the smart contract into bytecode"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Deploy a smart contract by sending a transaction to the Exzo Network"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Navigate to the explorer to check that the token has been created"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.28.2.3. A user should be able to use the _mint function to create additional units of the token."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-29-exzo-network-create-a-local-test-network",
                children: "1.29. Exzo Network: Create a local test network"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.29.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a User I want to create a local test network so that I could test dApps locally without risk"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.29.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.29.2.1. A user should be able to set up a local instance of Ezxo Network for testing purposes."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.29.2.2. To create a local test network a user should:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Install Go"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Install build tools"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Install go-lachesis"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Install the Special Fee Contract"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Create a validator"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Setup mainnet genesis"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Add the precompiled contract"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Configure SFC"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Create a validator on the SFC"
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                children: [
                    "1.29.3. Detailed description of the installation process can be found by the following ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://docs.fantom.foundation/tutorials/create-a-local-test-network",
                        children: "reference"
                    }),
                    "."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-30-exzo-scan-main-page",
                children: "1.30. Exzo Scan: Main page"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.30.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a Guest I want a main page so that I could navigate through the features of Exzo Scan app"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.30.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.30.2.1. The main page of the Exzo Scan application should include:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Exzo Scan logo"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Main menu (available from all pages)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Main/Test network switcher"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Search bar with filters (All, Addresses, Tokens, Tags, Labels, Websites)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Current ExzoCoin price (in USD, in BTC, daily change percent)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "ExzoCoin market cap (in USD, in ExzoCoin)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Latest block (height, block time, number of transactions, throughput TPS)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The number of active validators"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Current epoch ID"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "ExzoCoin transaction history chart"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The list of latest blocks (block height, time since the validation, validator’s address, transactions count, block time, total amount of ExzoCoin transferred)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The list of latest transactions (txid, time since the block validation, from/to addresses, transferred amount)"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.30.2.2. A user should be able to add Exzo Network to Metamask from the main page of Exzo Scan web application."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.30.3. UI Design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Refer to: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://ftmscan.com",
                        children: "https://ftmscan.com"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-31-exzo-scan-view-top-accounts-by-balance",
                children: "1.31. Exzo Scan: View top accounts by balance"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.31.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a Guest I want to view top accounts by balance so that I could check addresses with highest balances"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.31.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.31.2.1. A user should be able to access Top Accounts by ExzoCoin balance page from the main menu of Exzo Scan application."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.31.2.2. The page should include:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Estimated number of accounts with total ExzoCoin holdings"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The list of accounts (rank, address, name tag, balance, percentage of total cap, tnx count)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Pagination controls (first page, last page, next page, previous page, current page number, total number of pages, dropdown to set the number of records to show per page)"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.31.3. UI Design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Refer to: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://ftmscan.com/accounts",
                        children: "https://ftmscan.com/accounts"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-32-exzo-scan-view-account-details",
                children: "1.32. Exzo Scan: View account details"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.32.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a Guest I want to view account details so that I could check the info of a specific wallet address"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.32.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.32.2.1. By clicking on account address from any page of Exzo Scan application a user should be able to view the Account Details page."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.32.2.2. The page should include:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Account address with controls to copy the address to the clipboard and show the address as QR code"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The total balance of ExzoCoin on the account"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "USD value of ExzoCoin holdings on the account and current ExzoCoin price in USD"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Other token holdings on the account including the button to view the detailed page of token holdings of the account"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The list of transactions of the account (total number of transactions from/to the account, txnid, method, block, age, from/to addresses, txn value, txn fee)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The list of internal transactions (same structure as above, excluding fee)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The list of ERC-20 token transactions (same structure as above, including token name)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The list of ERC-721 token transactions (same structure as above, including token id)"
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Analytics charts (including date range selector):",
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "ExzoCoin balance chart (Exzo Account balance chart, historic USD value chart, highest/lowest ExzoCoin/USD value indicators)"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Transactions (ExzoCoin transactions, unique outgoing addresses, unique incoming addresses)"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Txn fees (used, spent, including totals)"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "ExzoCoin transfers (sent, received)"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Token transfers (including token contracts count)"
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Comments (view and comment)"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.32.3. UI Design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Refer to: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://ftmscan.com/address/0xebf4fbb9c81b84dd5cf89bc75588e5d0018501b3",
                        children: "https://ftmscan.com/address/0xebf4fbb9c81b84dd5cf89bc75588e5d0018501b3"
                    })
                ],
                ...{
                    className: "break-words"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-33-exzo-scan-view-token-holdings-by-account",
                children: "1.33. Exzo Scan: View token holdings by account"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.33.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a Guest I want to view token holdings by account so that I could check tokens amounts per address"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.33.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.33.2.1. A user should be able to view the page with details on token holdings for a specific account by clicking on the corresponding action button from the Account Details page (if the account has no token holdings, this functionality is not available)."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.33.2.2. The page should include:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Total value of account holdings in Exzocoin"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Total value of account holdings in USD"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The list of tokens available on the account (token logo, token name, token address, Symbol, quantity, token price, daily change, value in ExzoCoin, value in USD)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Pagination controls (first page, last page, next page, previous page, current page number, total number of pages, dropdown to set the number of records to show per page)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Search bar"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.33.3. UI Design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Refer to: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://ftmscan.com/tokenholdings?a=0xff7f8a0b3232fe3b68ea361ddca657c4f7896b43",
                        children: "https://ftmscan.com/tokenholdings?a=0xff7f8a0b3232fe3b68ea361ddca657c4f7896b43"
                    })
                ],
                ...{
                    className: "break-words"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-34-exzo-scan-view-the-list-of-confirmed-transactions",
                children: "1.34. Exzo Scan: View the list of confirmed transactions"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.34.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a Guest I want to view the list of confirmed transactions so that I could check all the transactions added to the blockchain"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.34.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.34.2.1. A user should be able to access the Transactions page from the main menu of Exzo Scan application."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.34.2.2. The page should include:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The list of transactions (total number of transactions, txnid, method, block, age, from/to addresses, txn value, txn fee)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Pagination controls (first page, last page, next page, previous page, current page number, total number of pages, dropdown to set the number of records to show per page)"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.34.3. UI Design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Refer to: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://ftmscan.com/txs",
                        children: "https://ftmscan.com/txs"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-35-exzo-scan-view-the-list-of-pending-transactions",
                children: "1.35. Exzo Scan: View the list of pending transactions"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.35.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a Guest I want to view the list of pending transactions so that I could check transactions that are are not yet validated"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.35.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.35.2.1. A user should be able to access the Pending Transactions page from the main menu of Exzo Scan application."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.35.2.2. The page should include:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The list of pending transactions (total number of pending transactions, txnid, nonce, method, last seen, gas limit, gas price, from/to addresses, txn value)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Pagination controls (first page, last page, next page, previous page, current page number, total number of pages, dropdown to set the number of records to show per page)"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.35.3. UI Design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Refer to: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://ftmscan.com/txsPending",
                        children: "https://ftmscan.com/txsPending"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-36-exzo-scan-view-transaction-details",
                children: "1.36. Exzo Scan: View transaction details"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.36.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a Guest I want to view transaction details so that I could check the extended information of a specific transaction"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.36.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.36.2.1. By clicking on account address from any page of Exzo Scan application a user should be able to view the Account Details page."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.36.2.2. The page should include:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Transaction hash"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Status"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Block height and number of block confirmations"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "From/To addresses"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Value (in ExzoCoin and USD)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Transaction fee (in ExzoCoin and USD)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Gas limit"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Gas used (amount and percentage of gas limit)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Gas price (in ExzoCoin and Gwei)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Nonce"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Input data (including the functionality to decode)"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.36.3. UI Design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Refer to: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://ftmscan.com/tx/0xcb27811a2975b19608608107f587c46a085d6dc1a234aa35725e8f6866fb1ea2",
                        children: "https://ftmscan.com/tx/0xcb27811a2975b19608608107f587c46a085d6dc1a234aa35725e8f6866fb1ea2"
                    })
                ],
                ...{
                    className: "break-words"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-37-exzo-scan-view-contract-internal-transactions",
                children: "1.37. Exzo Scan: View contract internal transactions"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.37.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a Guest I want to view contract internal transactions so that I could check transactions related to a specific smart contract"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.37.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.37.2.1. A user should be able to access the Contract Internal Transactions page from the main menu of Exzo Scan application."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.37.2.2. The page should include:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The list of contract internal transactions (total number of internal transactions, block height, age, parent txnid, type, from/to addresses, txn value)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Pagination controls (first page, last page, next page, previous page, current page number, total number of pages, dropdown to set the number of records to show per page)"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.37.3. UI Design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Refer to: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://ftmscan.com/txsInternal",
                        children: "https://ftmscan.com/txsInternal"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-38-exzo-scan-view-blocks",
                children: "1.38. Exzo Scan: View blocks"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.38.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a Guest I want to view blocks so that I could check blocks details"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.38.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.38.2.1. A user should be able to access the Blocks page from the main menu of Exzo Scan application."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.38.2.2. The page should include:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The list of blocks (total number of blocks, block height, age, number of transactions in the block, gas used, block reward)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Pagination controls (first page, last page, next page, previous page, current page number, total number of pages, dropdown to set the number of records to show per page)"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.38.3. UI Design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Refer to: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://ftmscan.com/blocks",
                        children: "https://ftmscan.com/blocks"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-39-exzo-scan-view-block-details",
                children: "1.39. Exzo Scan: View block details"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.39.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a Guest I want to view block details so that I could check the extended information of a specific block"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.39.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.39.2.1. By clicking on block height (block ID) from any page of Exzo Scan application a user should be able to view the Block page."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.39.2.2. The page should include:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Block height (block ID)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Timestamp"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Number of transactions (including internal)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Block reward"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Difficulty"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Total difficulty"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Size"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Gas used"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Extra data"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Hash"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Parent hash"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Sha3Uncles"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Nonce"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Comments (view and comment)"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.39.3. UI Design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Refer to: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://ftmscan.com/block/18241801",
                        children: "https://ftmscan.com/block/18241801"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-40-exzo-scan-view-verified-contracts",
                children: "1.40. Exzo Scan: View verified contracts"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.40.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a Guest I want to view verified contracts so that I could check smart contracts that have been verified by Exzo Scan app"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.40.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.40.2.1. A user should be able to access the Contracts page from the main menu of Exzo Scan application."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.40.2.2. The page should include:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Quick filter dropdown (latest, open source, Solidity compiler, Vyper compiler, contract security audit)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The list of verified contracts (total number of contracts, contract address, contract name, compiler, compiler version, balance on the contract, number of transactions, contract settings marks, verification date, audit mark, license type)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Pagination controls (first page, last page, next page, previous page, current page number, total number of pages, dropdown to set the number of records to show per page)"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.40.3. UI Design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Refer to: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://ftmscan.com/contractsVerified",
                        children: "https://ftmscan.com/contractsVerified"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-41-exzo-scan-view-contract-details",
                children: "1.41. Exzo Scan: View contract details"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.41.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a Guest I want to view contract details so that I could check the extended information of a specific smart contract"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.41.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.41.2.1. By clicking on a contract address from any page of Exzo Scan application a user should be able to view the Contract page."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.41.2.2. The page should include all the elements as Account page plus:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Contract code tab including:",
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Verification mark"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Contract name"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Compiler Version"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Optimization Enabled"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Other Settings"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Contract Source Code blockUI Design"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Contract Security Audit"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Contract ABI"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Contract Creation Code"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Constructor Arguments"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Deployed ByteCode Sourcemap"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Swarm Source"
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Read contract tab (read functions and their values)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Write contract tab (write functions including inputs and Write buttons for their execution)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Contract events tab (total number of events, txn hash, method, logs)"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.41.3. UI Design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Refer to: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://ftmscan.com/address/0x0eca94713829bba13877b7c67a9cdd9873522fc0",
                        children: "https://ftmscan.com/address/0x0eca94713829bba13877b7c67a9cdd9873522fc0"
                    })
                ],
                ...{
                    className: "break-words"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-42-exzo-scan-view-validators-leaderboard",
                children: "1.42. Exzo Scan: View validators leaderboard"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.42.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a Guest I want to view validators leaderboard so that I could check the most performing validators"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.42.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.42.2.1. A user should be able to access the Validators page from the main menu of Exzo Scan application."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.42.2.2. The page should include:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The list of validators (total number of validators, rank, Address, ID, downtime, self-staked amount, delegated amount, total staked, status)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Pagination controls (first page, last page, next page, previous page, current page number, total number of pages, dropdown to set the number of records to show per page)"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.42.3. UI Design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Refer to: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://ftmscan.com/validators",
                        children: "https://ftmscan.com/validators"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-43-exzo-scan-view-epochs",
                children: "1.43. Exzo Scan: View epochs"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.43.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a Guest I want to view epochs so that I could check the confirmed batches of blocks"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.43.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.43.2.1. A user should be able to access the Epochs page from the main menu of Exzo Scan application."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.43.2.2. The page should include:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The list of epochs (total number of epochs, epoch ID, end time, total base reward, total fee, total reward)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Pagination controls (first page, last page, next page, previous page, current page number, total number of pages, dropdown to set the number of records to show per page)"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.43.3. UI Design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Refer to: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://ftmscan.com/epochs",
                        children: "https://ftmscan.com/epochs"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-44-exzo-scan-view-epoch-details",
                children: "1.44. Exzo Scan: View epoch details"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.44.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a Guest I want to view epoch details so that I could check the extended information of a specific epoch"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.44.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.44.2.1. By clicking on epoch ID from any page of Exzo Scan application a user should be able to view the Epoch page."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.44.2.2. The page should include:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Epoch ID"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "End time"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Total base reward"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Total fee"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Total reward weight"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Comments (view and comment)"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.44.3. UI Design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Refer to: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://ftmscan.com/epoch/40399",
                        children: "https://ftmscan.com/epoch/40399"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-45-exzo-scan-view-erc-20-top-tokens",
                children: "1.45. Exzo Scan: View ERC-20 top tokens"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.45.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a Guest I want to view erc-20 top tokens so that I could check the most valuable ERC-20 tokens on chain"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.45.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.45.2.1. A user should be able to access the Token Tracker page from the main menu of Exzo Scan application."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.45.2.2. The page should include:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The list of ERC-20 tokens (total number of tokens, token name and logo, token price in USD/BTC/EXZO, daily change percent, daily trading volume, market cap, number of token holders)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Pagination controls (first page, last page, next page, previous page, current page number, total number of pages, dropdown to set the number of records to show per page)"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.45.3. UI Design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Refer to: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://ftmscan.com/tokens",
                        children: "https://ftmscan.com/tokens"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-46-exzo-scan-view-erc-20-token-transfers",
                children: "1.46. Exzo Scan: View ERC-20 token transfers"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.46.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a Guest I want to view erc-20 token transfers so that I could check transactions of ERC-20 tokens"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.46.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.46.2.1. A user should be able to access the Token Transfers page from the main menu of Exzo Scan application."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.46.2.2. The page should include:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The list of ERC-20 token transactions (total number of transactions, txn hash, age, from/to addresses, value, token name and symbol)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Pagination controls (first page, last page, next page, previous page, current page number, total number of pages, dropdown to set the number of records to show per page)"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.46.3. UI Design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Refer to: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://ftmscan.com/tokentxns",
                        children: "https://ftmscan.com/tokentxns"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-47-exzo-scan-view-erc-721-top-tokens",
                children: "1.47. Exzo Scan: View ERC-721 top tokens"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.47.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a Guest I want to view erc-721 top tokens so that I could check the most valuable ERC-721 tokens on chain"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.47.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.47.2.1. A user should be able to access the Non-Fungible Token Tracker page from the main menu of Exzo Scan application."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.47.2.2. The page should include:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The list of non-fungible tokens (total number of NFT token contracts, token name and logo, daily number of transfers, weekly number of transfers)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Pagination controls (first page, last page, next page, previous page, current page number, total number of pages, dropdown to set the number of records to show per page)"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.47.3. UI Design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Refer to: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://ftmscan.com/tokens-nft",
                        children: "https://ftmscan.com/tokens-nft"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-48-exzo-scan-view-erc-721-token-transfers",
                children: "1.48. Exzo Scan: View ERC-721 token transfers"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.48.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a Guest I want to view erc-721 token transfers so that I could check transactions of ERC-721 tokens"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.48.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.48.2.1. A user should be able to access the Non-Fungible Token Transfers page from the main menu of Exzo Scan application."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.48.2.2. The page should include:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The list of non-fungible token transactions (total number of transactions, txn hash, age, from/to addresses, token ID, token name and symbol)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Pagination controls (first page, last page, next page, previous page, current page number, total number of pages, dropdown to set the number of records to show per page)"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.48.3. UI Design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Refer to: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://ftmscan.com/tokentxns-nft",
                        children: "https://ftmscan.com/tokentxns-nft"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-49-exzo-scan-view-charts-and-stats",
                children: "1.49. Exzo Scan: View charts and stats"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.49.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a Guest I want to view charts and stats so that I could get visual insights on blockchain data"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.49.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.49.2.1. A user should be able to access the Exzo Network Charts & Statistics page from the main menu of Exzo Scan application."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.49.2.2. The page should include the preview images for the following charts:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Daily Transactions Chart"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "ERC-20 Daily Token Transfer Chart"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Unique Addresses Chart"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Average Block Size Chart"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Average Block Time Chart"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Average Gas Price Chart"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Daily Gas Used Chart"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Block Count and Rewards Chart"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Network Pending Transactions Chart"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Network Transaction Fee Chart"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Network Utilization Chart"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Verified Contracts Chart"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.49.2.3. Upon clicking on a chart preview image the page with the selected chart is open"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.49.2.4. A user should be able to print the chart and/or download it in various file formats (png, jpeg, pdf, svg, csv)"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.49.3. UI Design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Refer to: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://ftmscan.com/charts",
                        children: "https://ftmscan.com/charts"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-50-exzo-scan-view-top-statistics",
                children: "1.50. Exzo Scan: View top statistics"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.50.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a Guest I want to view top statistics so that I could check selected highlights from blockchain data"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.50.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.50.2.1. A user should be able to access the Top Statistics page from the main menu of Exzo Scan application."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.50.2.2. The page should include:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The list of top EXZO senders (Rank, Address, Total Amount Sent, Percentage)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The list of top EXZO receivers (Rank, Address, Total Amount Received, Percentage)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Top Txn Count Sent (Rank, Address, Total Txn, Percentage)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Top Txn Count Received (Rank, Address, Total Txn, Percentage)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Top Tokens by Unique Senders (Rank, Token Name, Unique Senders)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Top Tokens by Unique Receivers (Rank, Token Name, Unique Receivers)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Top Tokens by Total Uniques (Rank, Token Name, Total Uniques)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Top Tokens by Txn Count (Tag Cloud, Rank, Token Name, Txn Count)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Top Accounts by Gas Used (Pie Chart, Rank, Address, Gas Used)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Top Accounts by Txn Count (Pie Chart, Rank, Address, Txn Count)"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.50.2.3. A user should be able to switch between 24 Hours, 3 Days and 7 Days statistics period for all data sets."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.50.2.4. The Overview tab should include the top ranked address from each data set with the value."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.50.3. UI Design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Refer to: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://ftmscan.com/topstat#Overview",
                        children: "https://ftmscan.com/topstat#Overview"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-51-exzo-scan-developer-apis",
                children: "1.51. Exzo Scan: Developer APIs"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.51.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a Guest I want to developer apis so that I could get information about available API endpoints and methods"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.51.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.51.2.1. A user should be able to access the Developers API page from the main menu of Exzo Scan application."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.51.2.2. The page should include the API reference for the following methods:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Get EXZO Balance for a single Address"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Get EXZO Balance for multiple Addresses in a single call"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Get a list of 'Normal' Transactions By Address"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: 'Get a list of "ERC-20 - Token Transfer Events" by Address'
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: 'Get a list of "ERC721 - Token Transfer Events" by Address'
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Get list of Blocks Validated by Address"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Get Contract ABI for Verified Contract Source Codes"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Get Contract Source Code for Verified Contract Source Codes"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Get ERC20-Token TotalSupply by ContractAddress"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Get ERC20-Token Account Balance for TokenContractAddress"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Get Total Supply of EXZO on the Exzo Network"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Get Validators list on the Exzo Network"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "EXZO RPC Nodes"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.51.3. UI Design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Refer to: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://ftmscan.com/apis",
                        children: "https://ftmscan.com/apis"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-52-exzo-scan-verify-contract",
                children: "1.52. Exzo Scan: Verify contract"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.52.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a Guest I want to verify contract so that I could verify the contract that was deployed to the network"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.52.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.52.2.1. After deploying the smart contract a user should be able to verify it."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.52.2.2. A user should be able to access the Verify & Publish Contract Source Code page from the main menu of Exzo Scan application."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.52.2.3. In order to verify the code of a smart contract a user should:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "enter the address of the deployed smart contract"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "select compiler type from the dropdown"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "select open source license type"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "agree to the terms of service"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "enter the source code of the smart contract"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "enter the ABI encoded parameters of deployment"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.52.2.4. The Exzo Scan application should verify the code of the smart contract and display errors if any."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.52.2.5. Once the contract is successfully verified the verification mark is added on the page of the smart contract."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.52.3. UI Design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Refer to: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://ftmscan.com/verifyContract",
                        children: "https://ftmscan.com/verifyContract"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "exzo-scan-bytecode-to-opcode-disassemble",
                children: "Exzo Scan: Bytecode to Opcode Disassemble"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.53.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a Guest I want to bytecode to opcode disassemble so that I could decode the low level Contract ByteCodes to Opcodes"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.53.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.53.2.1. A user should be able to disassemble the bytecode to opcode at the Bytecode to Opcode Disassembler page that should be accessible from the main menu of Exzo Scan application."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.53.2.2. The page should include:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Bytecode input field"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Decode button"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.53.2.3. If the decoding is successful, the opcode is displayed on the page. Otherwise the error message is displayed with the description of the error."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.53.3. UI Design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Refer to: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://ftmscan.com/opcode-tool",
                        children: "https://ftmscan.com/opcode-tool"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-54-exzo-scan-broadcast-raw-transaction",
                children: "1.54. Exzo Scan: Broadcast Raw Transaction"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.54.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a Guest I want to broadcast raw transaction so that I could paste a Signed Raw Transaction in hex format and broadcast it over the Exzo Network"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.54.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.54.2.1. A user should be able to send a transaction via Broadcast Raw Transaction page that should be accessible from the main menu of Exzo Scan application."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.54.2.2. The page should include:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Transaction hex input field"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Send Transaction button"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.54.2.3. If the sending is successful, the txn hash is displayed on the page. Otherwise the error message is displayed with the description of the error."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.54.3. UI Design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Refer to: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://ftmscan.com/pushTx",
                        children: "https://ftmscan.com/pushTx"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-55-exzo-scan-registration",
                children: "1.55. Exzo Scan: Registration"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.55.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a User I want to register an account so that I could get access to the additional functionality of Exzo Scan app"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.55.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.55.2.1. A user should be able to create an account with Exzo Scan application."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.55.2.2. Registration form should be opened from the login screen by clicking the Sign Up link."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.55.2.3. Registration form should include:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Username input field (should be unique)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Email address input field (should be unique)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Password input field"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Confirm Password input field (should match Password)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Agree to the TnC check-box"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Opt-in for a newsletter check-box"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Captcha widget"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Create an Account button"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.55.2.4. Once a user submits the registration form, the email with an activation link is sent to the registered email address."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.55.2.5. Once a user activates their account by clicking the activation link, they can login to their profile on Exzo Scan application."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.55.3. UI Design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Refer to: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://ftmscan.com/register",
                        children: "https://ftmscan.com/register"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-56-exzo-scan-authentication",
                children: "1.56. Exzo Scan: Authentication"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.56.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a User I want to pass an authentication so that I could log into my personal profile on Exzo Scan app"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.56.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.56.2.1. A user should be able to login to their profile on Exzo Scan application by clicking on the Sign In button at the main menu."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.56.2.2. Login page should include:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Username input field"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Password input field"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.56.2.3. A user should be able to recover their password with Forgot password functionality."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.56.2.4. Once a user is successfully logged in, they should be able to navigate to their profile page."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.56.2.5. A logged in user should be able to terminate their session by clicking the Sign Out button from the main menu."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.56.3. UI Design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Refer to: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://ftmscan.com/login",
                        children: "https://ftmscan.com/login"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-57-exzo-scan-user-profile",
                children: "1.57. Exzo Scan: User profile"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.57.1. Summary"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As a User I want to manage user profile so that I could use features available for registered users only"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.57.2. Acceptance criteria"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.57.2.1. A registered and logged in user should be able to open their profile page from the main menu."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.57.2.2. On the profile page a user should be able to:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "View and change profile details (email address, password, username, profile picture, profile bio, website link)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Manage watchlist (add address, set events notifications)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Manage transaction private notes"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Manage address private notes"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Manage token ignore list"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Manage API keys"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Manage verified addresses"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Manage custom ABIs"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.57.3. UI Design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Refer to: ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://ftmscan.com/myaccount",
                        children: "https://ftmscan.com/myaccount"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "tech_perspective",
                title: "Technical Perspective",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-1-purpose",
                children: "1.1. Purpose"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The document defines the understanding of the general objectives for the creation of the project “Exzo Network - innovative blockchain platform - (hereinafter - the software product, System, Platform, “Exzo Network”). The document sets out the main requirements for the software product, defines the scope of this product, the purpose of implementation, restrictions and strategic decisions on project implementation, agreed between the Customer and the Developer. The Software Requirement Specification document is the basis for the software product development process."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-2-scope",
                children: "1.2. Scope"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "This document was created and should be used within the “ExzoCoin” project."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "All persons mentioned in this document, to some extent, participate in the project or are interested in its implementation."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "This document should indicate only the main functions and features of the product, and only those that have been agreed upon by all stakeholders. Functions and features that do not have the status of accepted but are only developments for the future - can not be included in this document without the appropriate designations."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-3-definitions-and-acronyms",
                children: "1.3. Definitions and Acronyms"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "SRS - Software Requirements Specification - this document."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "UI - User Interface."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "AWS - Amazon Web Services cloud environment."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-4-overall-description",
                children: "1.4. Overall Description"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "“ExzoCoin” project includes two main components:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.4.1. A web-based application that will provide a platform for decentralized cross-chain conversion of digital assets based on 1INCH API."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "This application will have the similar design and functionality as the 1INCH app (",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://app.1inch.io/",
                        children: "https://app.1inch.io/"
                    }),
                    ")."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The process of interacting with the application could be described in the following simplified steps:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Navigate to the swap application from ExzoCoin website"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Connect wallet with Metamask or WalletConnect"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Buy cryptocurrency via MoonPay"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Use bridges to move coins cross-chain"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Select the chain"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Set the direction of exchange"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "View the details of the deal (rate, fees)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Set additional parameters (gas limit, slippage)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Confirm the deal"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.4.2. A blockchain network based on Fantom blockchain fork that will provide an ecosystem for creating customized blockchains, deploying smart contracts, with full support of Solidity smart contracts."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "This solution will allow users to perform the following use cases:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Use Exzo Network official wallet"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Use Exzo Network native coin ExzoCoin"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Connect with Metamask to the testnet and mainnet"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Run a validator node"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Run a read-only node"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Stake native ExzoCoin and get a reward"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Deploy a smart contract written in Solidity"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Create a fixed-cap asset"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Create a variable-cap asset"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Create a local test network"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Explore the network for transactions and other on-chain data"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-5-exzo-swap-high-level-solution-architecture",
                children: "1.5. ExzoSwap High-Level Solution Architecture"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.5.1. ExzoSwap FE App is a standalone React application. This application is built into several js and CSS files and is meant to be served from the s3 bucket using cloud front."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.5.2. ExzoSwap App is integrated with 1INCH API through a secured VPN connection."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.5.3. A user interacts with ExzoSwap App from their web browser using Metamask extension (or Wallet Connect integration) for making transactions."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-6-exzo-network-high-level-solution-architecture",
                children: "1.6. Exzo Network High-Level Solution Architecture"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.6.1. A Validator node consists of three components: state machine, consensus and networking."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.6.2. An application can communicate to a node via CLI. Opera network supports auditing by permitting participants to join in post-validation mode."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.6.3. An observer (or Monitor) node consists of a state machine, post validation component and networking component."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.6.4. The network supports three types of participants: users, validators and monitors."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1.6.5. Each validating node can create new event blocks. Generation of a new event block indicates that the new block and all of its ancestors have been validated by the creator node of that new event block."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.h3, {
                children: [
                    "1.6.6. The consensus mechanism is inherited from the Fantom’s Opera Network and described in the Lachesis Whitepaper (",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://arxiv.org/pdf/2108.01900.pdf",
                        children: "https://arxiv.org/pdf/2108.01900.pdf"
                    }),
                    ")"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "user_stories",
                title: "User Stories",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "1-the-list-of-user-stories",
                children: "1. The List of User Stories"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                className: "w-full border-collapse border border-slate-400 bg-white text-sm shadow-sm dark:border-slate-500 dark:bg-inherit",
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "w-1/4 border border-slate-300 px-3 py-0 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "No"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "w-1/4 border border-slate-300 px-3 py-0 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "Epic"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "w-1/4 border border-slate-300 px-3 py-0 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "Role"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "w-1/4 border border-slate-300 px-3 py-0 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "Feature"
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
                                            children: "1"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "ExzoSwap"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Guest"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "View the main page"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "2"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "ExzoSwap"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "User"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Connect a wallet"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "3"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "ExzoSwap"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "User"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Buy cryptocurrency with credit card"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "4"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "ExzoSwap"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "User"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Transfer coins via bridges"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "5"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "ExzoSwap"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "User"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Select the chain for swap"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "6"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "ExzoSwap"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "User"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Set the swap parameters"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "7"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "ExzoSwap"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "User"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "View the details of the deal (rate, fees, route)"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "8"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "ExzoSwap"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "User"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Set additional parameters (gas limit, slippage)"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "9"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "ExzoSwap"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "User"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Confirm the deal"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "10"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Wallet"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Guest"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "View the home page"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "11"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Wallet"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "User"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Connect Metamask"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "12"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Wallet"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "User"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Create a new wallet"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "13"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Wallet"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "User"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Restore wallet"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "14"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Wallet"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "User"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Edit wallet settings"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "15"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Wallet"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "User"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Copy wallet address"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "16"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Wallet"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "User"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Show QR code with wallet address"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "17"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Wallet"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "User"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Delete wallet"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "18"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Wallet"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "User"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "View the history of transactions"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "19"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Wallet"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "User"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "View the list of assets"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "20"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Wallet"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "User"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Send assets"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "21"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Wallet"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "User"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Receive assets"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "22"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Wallet"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "User"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Stake ExzoCoin"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "23"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Wallet"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "User"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Vote on governance proposals"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "24"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Network"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Validator"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Run a validator node"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "25"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Network"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "User"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Run a read-only node"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "26"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Network"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "User"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Deploy a Solidity smart contract"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "27"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Network"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "User"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Create a fixed-cap asset"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "28"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Network"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "User"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Create a variable-cap asset"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "29"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Network"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "User"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Create a local test network"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "30"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Scan"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Guest"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Main page"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "31"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Scan"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Guest"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "View top accounts by balance"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "32"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Scan"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Guest"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "View account details"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "33"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Scan"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Guest"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "View token holdings by account"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "34"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Scan"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Guest"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "View the list of confirmed transactions"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "35"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Scan"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Guest"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "View the list of pending transactions"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "36"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Scan"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Guest"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "View transaction details"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "37"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Scan"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Guest"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "View contract internal transactions"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "38"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Scan"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Guest"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "View blocks"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "39"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Scan"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Guest"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "View block details"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "40"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Scan"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Guest"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "View verified contracts"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "41"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Scan"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Guest"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "View contract details"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "42"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Scan"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Guest"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "View validators leaderboard"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "43"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Scan"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Guest"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "View epochs"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "44"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Scan"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Guest"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "View epoch details"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "45"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Scan"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Guest"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "View ERC-20 top tokens"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "46"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Scan"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Guest"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "View ERC-20 token transfers"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "47"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Scan"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Guest"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "View ERC-721 top tokens"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "48"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Scan"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Guest"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "View ERC-721 token transfers"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "49"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Scan"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Guest"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "View charts and stats"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "50"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Scan"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Guest"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "View top statistics"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "51"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Scan"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Guest"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Developer APIs"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "52"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Scan"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Guest"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Verify contract"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "53"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Scan"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Guest"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Bytecode to Opcode Disassemble"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "54"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Scan"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Guest"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Broadcast Raw Transaction"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "55"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Scan"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "User"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Register an account"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "56"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Scan"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "User"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Pass an authentication"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "57"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Exzo Scan"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "User"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "Manage user profile"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,47,825,336], () => (__webpack_exec__(1331)));
module.exports = __webpack_exports__;

})();