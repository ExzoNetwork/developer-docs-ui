"use strict";
(() => {
var exports = {};
exports.id = 879;
exports.ids = [879];
exports.modules = {

/***/ 2650:
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

const title = "Staking";

const sections = [
    {
        title: "Staking on Exzo",
        id: "staking_exzo"
    },
    {
        title: "Stake Account Structure",
        id: "stake_account_structure"
    }
];
function _createMdxContent(props) {
    const _components = Object.assign({
        h1: "h1",
        h2: "h2",
        p: "p",
        ol: "ol",
        li: "li",
        h3: "h3",
        ul: "ul"
    }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h1, {
                children: "Staking",
                ...{
                    className: "border-b border-zinc-900/5 dark:border-white/5 xl:max-w-none pb-5 mb-7"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "staking_exzo",
                title: "Staking on Exzo",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "staking-on-exzo-network",
                children: "Staking on Exzo Network"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "By staking your XZO tokens, you help secure the network and earn rewards while doing so."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "You can stake by delegating your tokens to validators who process transactions and run the network."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Delegating stake is a shared-risk shared-reward financial model that may provide returns to holders of tokens delegated for a long period. This is achieved by aligning the financial incentives of the token-holders (delegators) and the validators to whom they delegate."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The more stake a validator has delegated to them, the more often this validator is chosen to write new transactions to the ledger. The more transactions the validator writes, the more rewards they and their delegators earn. Validators who configure their systems to be able to process more transactions at a time not only earn proportionally more rewards for doing so, they also keep the network running as fast and as smoothly as possible."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Validators incur costs by running and maintaining their systems, and this is passed on to delegators in the form of a fee collected as a percentage of rewards earned. This fee is known as a commission. Since validators earn more rewards the more stake is delegated to them, they may compete with one another to offer the lowest commission for their services."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "You risk losing tokens when staking through a process known as slashing. Slashing involves the removal and destruction of a portion of a validator's delegated stake in response to intentional malicious behavior, such as creating invalid transactions or censoring certain types of transactions or network participants."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "When a validator is slashed, all token holders who have delegated stake to that validator lose a portion of their delegation. While this means an immediate loss for the token holder, it also is a loss of future rewards for the validator due to their reduced total delegation."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Rewards and slashing align validator and token holder interests which helps keep the network secure, robust and performant."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Note: Slashing is not enabled on Mainnet at this time.",
                ...{
                    className: "italic"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "how-do-i-stake-my-xzo-tokens",
                children: "How do I stake my XZO tokens?"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "In order to stake tokens on XZO, you first will need to transfer some XZO into a wallet that supports staking, then follow the steps or instructions provided by the wallet to create a stake account and delegate your stake. Different wallets will vary slightly in their process for this but the general description is below."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "There are two options for staking in the Exzo Network system — creating your own pool and becoming a validator or Join an existing pool as a delegator."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "To become a Validator user should have at least 1 mln of XZO Tokens"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "To become a Delegator user should have at least 1 XZO"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Every 6 hours (currently) 19 nodes are chosen based on their reputation. When a node is chosen, it will generate a reward at the end of the epoch and it will be distributed between and all delegates."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Nodes and delegates generate rewards based on balance, the distribution of the reward generated in a node is 40% the for pool organizer (as a minimum), and 60% to be distributed among all the delegates based on their balance."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The process is done through a smart contract that the user can finish and withdraw their balance whenever they want, totally safe, and secure for the user."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Supported Wallets"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Exzo Network command line tools can perform all stake operations in conjunction with a CLI-generated keypair file wallet and paper wallet. Staking commands using the Command Line Tools."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Create a Stake Account"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A stake account is a different type of account from a wallet address that is used to simply send and receive XZO tokens to other addresses. If you have received XZO in a wallet address you control, you can use some of these tokens to create and fund a new stake account, which will have a different address than the wallet you used to create it. Depending on which wallet you are using the steps to create a stake account may vary slightly. Not all wallets support stake accounts, see Supported Wallets."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Delegate your Stake"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "For staking your XZO tokens use supported wallet, choose the validator and amount of XZO that will be delegated, then confirm to execute the smart contract."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "stake-account-details",
                children: "Stake Account Details"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "For more information about the operations and permissions associated with a stake account, please see Stake Accounts"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "stake_account_structure",
                title: "Stake Account Structure",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "stake-account-structure",
                children: "Stake Account Structure"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A stake account on Exzo Network can be used to delegate tokens to validators on the network to potentially earn rewards for the owner of the stake account. Stake accounts are created and managed differently than a traditional wallet address, known as a system account. A system account is only able to send and receive XZO from other accounts on the network, whereas a stake account supports more complex operations needed to manage a delegation of tokens."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Stake accounts on Exzo Network also work differently than those of other Proof-of-Stake blockchain networks that you may be familiar with. This document describes the high-level structure and functions of a Exzo Network stake account."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Account Address"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Each stake account has a unique address which can be used to look up the account information in the command line or in any network explorer tools. However, unlike a wallet address in which the holder of the address's keypair controls the wallet, the keypair associated with a stake account address does not necessarily have any control over the account. In fact, a keypair or private key may not even exist for a stake account's address."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The only time a stake account's address has a keypair file is when creating a stake account using the command line tools, a new keypair file is created first only to ensure that the stake account's address is new and unique."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Understanding Account Authorities"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Certain types of accounts may have one or more signing authorities associated with a given account. An account authority is used to sign certain transactions for the account it controls. This is different from some other blockchain networks where the holder of the keypair associated with the account's address controls all of the account's activity."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Each stake account has two signing authorities specified by their respective address, each of which is authorized to perform certain operations on the stake account."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The stake authority is used to sign transactions for the following operations:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Delegating stake"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Deactivating the stake delegation"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Splitting the stake account, creating a new stake account with a portion of the funds in the first account"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Merging two undelegated stake accounts into one"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Setting a new stake authority"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The withdraw authority signs transactions for the following:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Withdrawing un-delegated stake into a wallet address"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Setting a new withdraw authority"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Setting a new stake authority"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The stake authority and withdraw authority are set when the stake account is created, and they can be changed to authorize a new signing address at any time. The stake and withdraw authority can be the same address or two different addresses."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The withdraw authority keypair holds more control over the account as it is needed to liquidate the tokens in the stake account, and can be used to reset the stake authority if the stake authority keypair becomes lost or compromised."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Securing the withdraw authority against loss or theft is of utmost importance when managing a stake account."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Multiple Delegations"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Each stake account may only be used to delegate to one validator at a time. All of the tokens in the account are either delegated or un-delegated, or in the process of becoming delegated or un-delegated. To delegate a fraction of your tokens to a validator, or to delegate to multiple validators, you must create multiple stake accounts."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "This can be accomplished by creating multiple stake accounts from a wallet address containing some tokens, or by creating a single large stake account and using the stake authority to split the account into multiple accounts with token balances of your choosing."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The same stake and withdraw authorities can be assigned to multiple stake accounts."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Merging stake accounts"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Two stake accounts that have the same authorities and lockup can be merged into a single resulting stake account. A merge is possible between two stakes in the following states with no additional conditions:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "two deactivated stakes"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "an inactive stake into an activating stake during its activation epoch"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "For the following cases, the voter pubkey and vote credits observed must match:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "two activated stakes"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "two activating accounts that share an activation epoch, during the activation epoch"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: 'All other combinations of stake states will fail to merge, including all "transient" states, where a stake is activating or deactivating with a non-zero effective stake.'
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Delegation Warmup and Cooldown"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "When a stake account is delegated, or a delegation is deactivated, the operation does not take effect immediately."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A delegation or deactivation takes several epochs to complete, with a fraction of the delegation becoming active or inactive at each epoch boundary after the transaction containing the instructions has been submitted to the cluster."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "There is also a limit on how much total stake can become delegated or deactivated in a single epoch, to prevent large sudden changes in stake across the network as a whole. Since warmup and cooldown are dependent on the behavior of other network participants, their exact duration is difficult to predict. Details on the warmup and cooldown timing can be found here."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Lockups"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Stake accounts can have a lockup which prevents the tokens they hold from being withdrawn before a particular date or epoch has been reached. While locked up, the stake account can still be delegated, un-delegated, or split, and its stake and withdraw authorities can be changed as normal. Only withdrawal into a wallet address is not allowed."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A lockup can only be added when a stake account is first created, but it can be modified later, by the lockup authority or custodian, the address of which is also set when the account is created."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Destroying a Stake Account"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Like other types of accounts on the Exzo Network network, a stake account that has a balance of 0 XZO is no longer tracked. If a stake account is not delegated and all of the tokens it contains are withdrawn to a wallet address, the account at that address is effectively destroyed, and will need to be manually re-created for the address to be used again."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Viewing Stake Accounts"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Stake account details can be viewed on the Exzo Network Explorer by copying and pasting an account address into the search bar."
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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,47,825,336], () => (__webpack_exec__(2650)));
module.exports = __webpack_exports__;

})();