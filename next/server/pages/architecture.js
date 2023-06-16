"use strict";
(() => {
var exports = {};
exports.id = 118;
exports.ids = [118];
exports.modules = {

/***/ 4640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/callflow_image.16473a3d.png","height":821,"width":2063,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAAAAACLoxGUAAAAH0lEQVR42gWAgQkAMAzC/P/hEVFXFB6mVW3sTgvkbwc9YheP8pkwBgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":3});

/***/ }),

/***/ 8428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/retransmit_stage_image.fb146645.svg","height":720,"width":968,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 1905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/tpu_image.f7c528de.svg","height":304,"width":696,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 3831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/tvu_image.08dcba89.svg","height":592,"width":928,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ ImageOther)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


function ImageOther({ img , width , height  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        src: img,
        width: width,
        height: height,
        alt: "image"
    });
}


/***/ }),

/***/ 834:
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
/* harmony import */ var _components_ImageOther__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(447);
/* harmony import */ var _images_callflow_image_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4640);
/* harmony import */ var _images_tpu_image_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1905);
/* harmony import */ var _images_tvu_image_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3831);
/* harmony import */ var _images_retransmit_stage_image_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8428);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__, _components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__]);
([_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__, _components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/*@jsxRuntime automatic @jsxImportSource react*/ 

const title = "Architecture";






const sections = [
    {
        title: "Cluster",
        id: "cluster"
    },
    {
        title: "Validator",
        id: "validator"
    }
];
function _createMdxContent(props) {
    const _components = Object.assign({
        h1: "h1",
        h2: "h2",
        p: "p",
        h3: "h3",
        ol: "ol",
        li: "li",
        ul: "ul",
        a: "a",
        code: "code"
    }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h1, {
                children: "Architecture",
                ...{
                    className: "border-b border-zinc-900/5 dark:border-white/5 xl:max-w-none pb-5 mb-7"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "cluster",
                title: "Cluster",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "exzo-cluster",
                children: "Exzo Cluster"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A Exzo cluster is a set of validators working together to serve client transactions and maintain the integrity of the ledger. Many clusters may coexist. When two clusters share a common genesis block, they attempt to converge. Otherwise, they simply ignore the existence of the other. Transactions sent to the wrong one are quietly rejected. In this section, we'll discuss how a cluster is created, how nodes join the cluster, how they share the ledger, how they ensure the ledger is replicated, and how they cope with buggy and malicious nodes."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "creating-a-cluster",
                children: "Creating a Cluster"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Before starting any validators, one first needs to create a genesis config. The config references two public keys, a mint and a bootstrap validator. The validator holding the bootstrap validator's private key is responsible for appending the first entries to the ledger. It initializes its internal state with the mint's account. That account will hold the number of native tokens defined by the genesis config. The second validator then contacts the bootstrap validator to register as a validator. Additional validators then register with any registered member of the cluster."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A validator receives all entries from the leader and submits votes confirming those entries are valid. After voting, the validator is expected to store those entries. Once the validator observes a sufficient number of copies exist, it deletes its copy."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "joining-a-cluster",
                children: "Joining a Cluster"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Validators enter the cluster via registration messages sent to its control plane. The control plane is implemented using a gossip protocol, meaning that a node may register with any existing node, and expect its registration to propagate to all nodes in the cluster. The time it takes for all nodes to synchronize is proportional to the square of the number of nodes participating in the cluster. Algorithmically, that's considered very slow, but in exchange for that time, a node is assured that it eventually has all the same information as every other node, and that that information cannot be censored by any one node."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "sending-transactions-to-a-cluster",
                children: "Sending Transactions to a Cluster"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Clients send transactions to any validator's Transaction Processing Unit (TPU) port. If the node is in the validator role, it forwards the transaction to the designated leader. If in the leader role, the node bundles incoming transactions, timestamps them creating an entry, and pushes them onto the cluster's data plane. Once on the data plane, the transactions are validated by validator nodes, effectively appending them to the ledger."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "confirming-transactions",
                children: "Confirming Transactions"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A Exzo cluster is capable of subsecond confirmation for up to 150 nodes with plans to scale up to hundreds of thousands of nodes. Once fully implemented, confirmation times are expected to increase only with the logarithm of the number of validators, where the logarithm's base is very high. If the base is one thousand, for example, it means that for the first thousand nodes, confirmation will be the duration of three network hops plus the time it takes the slowest validator of a supermajority to vote. For the next million nodes, confirmation increases by only one network hop."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Exzo defines confirmation as the duration of time from when the leader timestamps a new entry to the moment when it recognizes a supermajority of ledger votes."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A gossip network is much too slow to achieve subsecond confirmation once the network grows beyond a certain size. The time it takes to send messages to all nodes is proportional to the square of the number of nodes. If a blockchain wants to achieve low confirmation and attempts to do it using a gossip network, it will be forced to centralize to just a handful of nodes."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Scalable confirmation can be achieved using the follow combination of techniques:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Timestamp transactions with a VDF sample and sign the timestamp."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Split the transactions into batches, send each to separate nodes and have"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "each node share its batch with its peers."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Repeat the previous step recursively until all nodes have all batches."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Exzo rotates leaders at fixed intervals, called slots. Each leader may only produce entries during its allotted slot. The leader therefore timestamps transactions so that validators may lookup the public key of the designated leader. The leader then signs the timestamp so that a validator may verify the signature, proving the signer is owner of the designated leader's public key."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Next, transactions are broken into batches so that a node can send transactions to multiple parties without making multiple copies. If, for example, the leader needed to send 60 transactions to 6 nodes, it would break that collection of 60 into batches of 10 transactions and send one to each node. This allows the leader to put 60 transactions on the wire, not 60 transactions for each node. Each node then shares its batch with its peers. Once the node has collected all 6 batches, it reconstructs the original set of 60 transactions."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A batch of transactions can only be split so many times before it is so small that header information becomes the primary consumer of network bandwidth. At the time of this writing, the approach is scaling well up to about 150 validators. To scale up to hundreds of thousands of validators, each node can apply the same technique as the leader node to another set of nodes of equal size. We call the technique Turbine Block Propagation."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "synchronization",
                children: "Synchronization"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Fast, reliable synchronization is the biggest reason why we've chosen Solana for achieving high throughput. Traditional blockchains synchronize on large chunks of transactions called blocks. By synchronizing on blocks, a transaction cannot be processed until a duration, called \"block time\", has passed. In Proof of Work consensus, these block times need to be very large (~10 minutes) to minimize the odds of multiple validators producing a new valid block at the same time. There's no such constraint in Proof of Stake consensus, but without reliable timestamps, a validator cannot determine the order of incoming blocks. The popular workaround is to tag each block with a wallclock timestamp. Because of clock drift and variance in network latencies, the timestamp is only accurate within an hour or two. To workaround the workaround, these systems lengthen block times to provide reasonable certainty that the median timestamp on each block is always increasing."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: 'Solana takes a very different approach, which it calls Proof of History or PoH. Leader nodes "timestamp" blocks with cryptographic proofs that some duration of time has passed since the last proof. All data hashed into the proof most certainly have occurred before the proof was generated. The node then shares the new block with validator nodes, which are able to verify those proofs. The blocks can arrive at validators in any order or even could be replayed years later. With such reliable synchronization guarantees, Solana is able to break blocks into smaller batches of transactions called entries. Entries are streamed to validators in realtime, before any notion of block consensus.'
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Solana technically never sends a block, but uses the term to describe the sequence of entries that validators vote on to achieve confirmation. In that way, Solana's confirmation times can be compared apples to apples to block-based systems. The current implementation sets block time to 800ms."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "What's happening under the hood is that entries are streamed to validators as quickly as a leader node can batch a set of valid transactions into an entry. Validators process those entries long before it is time to vote on their validity. By processing the transactions optimistically, there is effectively no delay between the time the last entry is received and the time when the node can vote. In the event consensus is not achieved, a node simply rolls back its state. This optimisic processing technique was introduced in 1981 and called Optimistic Concurrency Control. It can be applied to blockchain architecture where a cluster votes on a hash that represents the full ledger up to some block height. In Solana, it is implemented trivially using the last entry's PoH hash."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "relationship-to-vdfs",
                children: "Relationship to VDFs"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The Proof of History technique was first described for use in blockchain by Solana in November of 2017. In June of the following year, a similar technique was described at Stanford and called a verifiable delay function or VDF."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A desirable property of a VDF is that verification time is very fast. Solana's approach to verifying its delay function is proportional to the time it took to create it. Split over a 4000 core GPU, it is sufficiently fast for Solana's needs, but if you asked the authors of the paper cited above, they might tell you (and have) that Solana's approach is algorithmically slow and it shouldn't be called a VDF. We argue the term VDF should represent the category of verifiable delay functions and not just the subset with certain performance characteristics. Until that's resolved, Solana will likely continue using the term PoH for its application-specific VDF."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Another difference between PoH and VDFs is that a VDF is used only for tracking duration. PoH's hash chain, on the other hand, includes hashes of any data the application observed. That data is a double-edged sword. On one side, the data \"proves history\" - that the data most certainly existed before hashes after it. On the other side, it means the application can manipulate the hash chain by changing when the data is hashed. The PoH chain therefore does not serve as a good source of randomness whereas a VDF without that data could. Solana's leader rotation algorithm, for example, is derived only from the VDF height and not its hash at that height."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "relationship-to-consensus-mechanisms",
                children: "Relationship to Consensus Mechanisms"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Proof of History is not a consensus mechanism, but it is used to improve the performance of Solana's Proof of Stake consensus. It is also used to improve the performance of the data plane protocols."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "leader-rotation",
                children: "Leader Rotation"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "At any given moment, a cluster expects only one validator to produce ledger entries. By having only one leader at a time, all validators are able to replay identical copies of the ledger. The drawback of only one leader at a time, however, is that a malicious leader is capable of censoring votes and transactions. Since censoring cannot be distinguished from the network dropping packets, the cluster cannot simply elect a single node to hold the leader role indefinitely. Instead, the cluster minimizes the influence of a malicious leader by rotating which node takes the lead."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Each validator selects the expected leader using the same algorithm, described below. When the validator receives a new signed ledger entry, it can be certain that an entry was produced by the expected leader. The order of slots which each leader is assigned a slot is called a leader schedule."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "leader-schedule-rotation",
                children: "Leader Schedule Rotation"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A validator rejects blocks that are not signed by the slot leader. The list of identities of all slot leaders is called a leader schedule. The leader schedule is recomputed locally and periodically. It assigns slot leaders for a duration of time called an epoch. The schedule must be computed far in advance of the slots it assigns, such that the ledger state it uses to compute the schedule is finalized. That duration is called the leader schedule offset. Exzo sets the offset to the duration of slots until the next epoch. That is, the leader schedule for an epoch is calculated from the ledger state at the start of the previous epoch. The offset of one epoch is fairly arbitrary and assumed to be sufficiently long such that all validators will have finalized their ledger state before the next schedule is generated. A cluster may choose to shorten the offset to reduce the time between stake changes and leader schedule updates."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "While operating without partitions lasting longer than an epoch, the schedule only needs to be generated when the root fork crosses the epoch boundary. Since the schedule is for the next epoch, any new stakes committed to the root fork will not be active until the next epoch. The block used for generating the leader schedule is the first block to cross the epoch boundary."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "without-a-partition-lasting-longer-than-an-epoch-the-cluster-will-work-as-follows",
                children: "Without a partition lasting longer than an epoch, the cluster will work as follows:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A validator continuously updates its own root fork as it votes."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The validator updates its leader schedule each time the slot height crosses an epoch boundary."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "For example:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The epoch duration is 100 slots. The root fork is updated from fork computed at slot height 99 to a fork computed at slot height 102. Forks with slots at height 100, 101 were skipped because of failures. The new leader schedule is computed using fork at slot height 102. It is active from slot 200 until it is updated again."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "No inconsistency can exist because every validator that is voting with the cluster has skipped 100 and 101 when its root passes 102. All validators, regardless of voting pattern, would be committing to a root that is either 102, or a descendant of 102."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "leader-schedule-rotation-with-epoch-sized-partitions",
                children: "Leader Schedule Rotation with Epoch Sized Partitions."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The duration of the leader schedule offset has a direct relationship to the likelihood of a cluster having an inconsistent view of the correct leader schedule."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Consider the following scenario:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Two partitions that are generating half of the blocks each. Neither is coming to a definitive supermajority fork. Both will cross epoch 100 and 200 without actually committing to a root and therefore a cluster-wide commitment to a new leader schedule."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "In this unstable scenario, multiple valid leader schedules exist."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A leader schedule is generated for every fork whose direct parent is in the previous epoch."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The leader schedule is valid after the start of the next epoch for descendant forks until it is updated."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Each partition's schedule will diverge after the partition lasts more than an epoch. For this reason, the epoch duration should be selected to be much much larger then slot time and the expected length for a fork to be committed to root."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "After observing the cluster for a sufficient amount of time, the leader schedule offset can be selected based on the median partition duration and its standard deviation. For example, an offset longer then the median partition duration plus six standard deviations would reduce the likelihood of an inconsistent ledger schedule in the cluster to 1 in 1 million."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "leader-schedule-generation-at-genesis",
                children: "Leader Schedule Generation at Genesis"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The genesis config declares the first leader for the first epoch. This leader ends up scheduled for the first two epochs because the leader schedule is also generated at slot 0 for the next epoch. The length of the first two epochs can be specified in the genesis config as well. The minimum length of the first epochs must be greater than or equal to the maximum rollback depth as defined in Tower BFT."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "leader-schedule-generation-algorithm",
                children: "Leader Schedule Generation Algorithm"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Leader schedule is generated using a predefined seed. The process is as follows:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Periodically use the PoH tick height (a monotonically increasing counter) to seed a stable pseudo-random algorithm."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "At that height, sample the bank for all the staked accounts with leader identities that have voted within a cluster-configured number of ticks. The sample is called the active set."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Sort the active set by stake weight."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Use the random seed to select nodes weighted by stake to create a stake-weighted ordering."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "This ordering becomes valid after a cluster-configured number of ticks."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "schedule-attack-vectors",
                children: "Schedule Attack Vectors"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "seed",
                children: "Seed"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The seed that is selected is predictable but unbiasable. There is no grinding attack to influence its outcome."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "active-set",
                children: "Active Set"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A leader can bias the active set by censoring validator votes. Two possible ways exist for leaders to censor the active set:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Ignore votes from validators"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Refuse to vote for blocks with votes from validators"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "To reduce the likelihood of censorship, the active set is calculated at the leader schedule offset boundary over an active set sampling duration. The active set sampling duration is long enough such that votes will have been collected by multiple leaders."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "delegating",
                children: "Delegating"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Leaders can censor new delegation transactions or refuse to validate blocks with new delegations. This attack is similar to censorship of validator votes."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "validator-operational-key-loss",
                children: "Validator operational key loss"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Leaders and validators are expected to use ephemeral keys for operation, and stake owners authorize the validators to do work with their stake via delegation."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The cluster should be able to recover from the loss of all the ephemeral keys used by leaders and validators, which could occur through a common software vulnerability shared by all the nodes. Stake owners should be able to vote directly by co-signing a validator vote even though the stake is currently delegated to a validator."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "appending-entries",
                children: "Appending Entries"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The lifetime of a leader schedule is called an epoch. The epoch is split into slots, where each slot has a duration of T PoH ticks."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A leader transmits entries during its slot. After T ticks, all the validators switch to the next scheduled leader. Validators must ignore entries sent outside a leader's assigned slot."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "All T ticks must be observed by the next leader for it to build its own entries on. If entries are not observed (leader is down) or entries are invalid (leader is buggy or malicious), the next leader must produce ticks to fill the previous leader's slot. Note that the next leader should do repair requests in parallel, and postpone sending ticks until it is confident other validators also failed to observe the previous leader's entries. If a leader incorrectly builds on its own ticks, the leader following it must replace all its ticks."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "fork-generation",
                children: "Fork Generation"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Fork Generation"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "This section describes how forks naturally occur as a consequence of leader rotation."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Overview"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: 'Nodes take turns being leader and generating the PoH that encodes state changes. The cluster can tolerate loss of connection to any leader by synthesizing what the leader would have generated had it been connected but not ingesting any state changes. The possible number of forks is thereby limited to a "there/not-there" skip list of forks that may arise on leader rotation slot boundaries. At any given slot, only a single leader\'s transactions will be accepted.'
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Message Flow"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Transactions are ingested by the current leader."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Leader filters valid transactions."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Leader executes valid transactions updating its state."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Leader packages transactions into entries based off its current PoH slot."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Leader transmits the entries to validator nodes (in signed shreds)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {}),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The PoH stream includes ticks; empty entries that indicate liveness of the leader and the passage of time on the cluster."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "A leader's stream begins with the tick entries necessary to complete PoH back to the leader's most recently observed prior leader slot."
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                start: "7",
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Validators retransmit entries to peers in their set and to further downstream nodes."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Validators validate the transactions and execute them on their state."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Validators compute the hash of the state."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "At specific times, i.e. specific PoH tick counts, validators transmit votes to the leader."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {}),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Votes are signatures of the hash of the computed state at that PoH tick count."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Votes are also propagated via gossip."
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                start: "12",
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Leader executes the votes, the same as any other transaction, and broadcasts them to the cluster."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Validators observe their votes and all the votes from the cluster."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Partitions, Forks"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Forks can arise at PoH tick counts that correspond to a vote. The next leader may not have observed the last vote slot and may start their slot with generated virtual PoH entries. These empty ticks are generated by all nodes in the cluster at a cluster-configured rate for hashes/per/tick Z."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: 'There are only two possible versions of the PoH during a voting slot: PoH with T ticks and entries generated by the current leader, or PoH with just ticks. The "just ticks" version of the PoH can be thought of as a virtual ledger, one that all nodes in the cluster can derive from the last tick in the previous slot.'
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Validators can ignore forks at other points (e.g. from the wrong leader), or slash the leader responsible for the fork."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Validators vote based on a greedy choice to maximize their reward described in Tower BFT."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Validator's View"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Time Progression"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The diagram below represents a validator's view of the PoH stream with possible forks over time. L1, L2, etc. are leader slots, and Es represent entries from that leader during that leader's slot. The xs represent ticks only, and time flows downwards in the diagram."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: 'Note that an E appearing on 2 forks at the same slot is a slashable condition, so a validator observing E3 and E3\' can slash L3 and safely choose x for that slot. Once a validator commits to a fork, other forks can be discarded below that tick count. For any slot, validators need only consider a single "has entries" chain or a "ticks only" chain to be proposed by a leader. But multiple virtual entries may overlap as they link back to the previous slot.'
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Time Division"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "It's useful to consider leader rotation over PoH tick count as time division of the job of encoding state for the cluster. The following table presents the above tree of forks as a time-divided ledger."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                className: "w-full border-collapse border border-slate-400 bg-white text-sm shadow-sm dark:border-slate-500 dark:bg-inherit",
                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                    children: [
                        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "leader slot"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "L1"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "L2"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "L3"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "L4"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "L5"
                                    })
                                })
                            ]
                        }),
                        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "data"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "E1"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "E2"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "E3"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "E4"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "E5"
                                    })
                                })
                            ]
                        }),
                        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "ticks since prev"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "L1"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "L2"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "L3"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "x"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "xx"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: 'Note that only data from leader L3 will be accepted during leader slot L3. Data from L3 may include "catchup" ticks back to a slot other than L2 if L3 did not observe L2\'s data. L4 and L5\'s transmissions include the "ticks to prev" PoH entries.'
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "This arrangement of the network data streams permits nodes to save exactly this to the ledger for replay, restart, and checkpoints."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Leader's View"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "When a new leader begins a slot, it must first transmit any PoH (ticks) required to link the new slot with the most recently observed and voted slot. The fork the leader proposes would link the current slot to a previous fork that the leader has voted on with virtual ticks."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "managing-forks",
                children: "Managing Forks"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Managing Forks"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The ledger is permitted to fork at slot boundaries. The resulting data structure forms a tree called a blockstore. When the validator interprets the blockstore, it must maintain state for each fork in the chain. We call each instance an active fork. It is the responsibility of a validator to weigh those forks, such that it may eventually select a fork."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A validator selects a fork by submiting a vote to a slot leader on that fork. The vote commits the validator for a duration of time called a lockout period. The validator is not permitted to vote on a different fork until that lockout period expires. Each subsequent vote on the same fork doubles the length of the lockout period. After some cluster-configured number of votes (currently 32), the length of the lockout period reaches what's called max lockout. Until the max lockout is reached, the validator has the option to wait until the lockout period is over and then vote on another fork. When it votes on another fork, it performs an operation called rollback, whereby the state rolls back in time to a shared checkpoint and then jumps forward to the tip of the fork that it just voted on. The maximum distance that a fork may roll back is called the rollback depth. Rollback depth is the number of votes required to achieve max lockout. Whenever a validator votes, any checkpoints beyond the rollback depth become unreachable. That is, there is no scenario in which the validator will need to roll back beyond rollback depth. It therefore may safely prune unreachable forks and squash all checkpoints beyond rollback depth into the root checkpoint."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Active Forks"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "An active fork is as a sequence of checkpoints that has a length at least one longer than the rollback depth. The shortest fork will have a length exactly one longer than the rollback depth. For example:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The following sequences are active forks:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            (4, 1),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            (5, 1),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            (6, 1),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            (7, 1),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Pruning and Squashing"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A validator may vote on any checkpoint in the tree. In the diagram above, that's every node except the leaves of the tree. After voting, the validator prunes nodes that fork from a distance farther than the rollback depth and then takes the opportunity to minimize its memory usage by squashing any nodes it can into the root."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Starting from the example above, with a rollback depth of 2, consider a vote on 5 versus a vote on 6. First, a vote on 5:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The new root is 2, and any active forks that are not descendants from 2 are pruned."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Alternatively, a vote on 6:"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The tree remains with a root of 1, since the active fork starting at 6 is only 2 checkpoints from the root."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "turbine-block-propagation",
                children: "Turbine Block Propagation"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Turbine Block Propagation"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "An Exzo Network cluster uses a multi-layer block propagation mechanism called Turbine to broadcast transaction shreds to all nodes with minimal amount of duplicate messages. The cluster divides itself into small collections of nodes, called neighborhoods. Each node is responsible for sharing any data it receives with the other nodes in its neighborhood, as well as propagating the data on to a small set of nodes in other neighborhoods. This way each node only has to communicate with a small number of nodes."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "During its slot, the leader node distributes shreds between the validator nodes in the first neighborhood (layer 0). Each validator shares its data within its neighborhood, but also retransmits the shreds to one node in some neighborhoods in the next layer (layer 1). The layer-1 nodes each share their data with their neighborhood peers, and retransmit to nodes in the next layer, etc, until all nodes in the cluster have received all the shreds."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Neighborhood Assignment - Weighted Selection"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "In order for data plane fanout to work, the entire cluster must agree on how the cluster is divided into neighborhoods. To achieve this, all the recognized validator nodes (the TVU peers) are sorted by stake and stored in a list. This list is then indexed in different ways to figure out neighborhood boundaries and retransmit peers. For example, the leader will simply select the first nodes to make up layer 0. These will automatically be the highest stake holders, allowing the heaviest votes to come back to the leader first. Layer 0 and lower-layer nodes use the same logic to find their neighbors and next layer peers."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "To reduce the possibility of attack vectors, each shred is transmitted over a random tree of neighborhoods. Each node uses the same set of nodes representing the cluster. A random tree is generated from the set for each shred using a seed derived from the leader id, slot and shred index."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Layer and Neighborhood Structure"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The current leader makes its initial broadcasts to at most DATA_PLANE_FANOUT nodes. If this layer 0 is smaller than the number of nodes in the cluster, then the data plane fanout mechanism adds layers below. Subsequent layers follow these constraints to determine layer-capacity: Each neighborhood contains DATA_PLANE_FANOUT nodes. Layer 0 starts with 1 neighborhood with fanout nodes. The number of nodes in each additional layer grows by a factor of fanout."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "As mentioned above, each node in a layer only has to broadcast its shreds to its neighbors and to exactly 1 node in some next-layer neighborhoods, instead of to every TVU peer in the cluster. A good way to think about this is, layer 0 starts with 1 neighborhood with fanout nodes, layer 1 adds fanout neighborhoods, each with fanout nodes and layer 2 will have fanout * number of nodes in layer 1 and so on."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "This way each node only has to communicate with a maximum of 2 * DATA_PLANE_FANOUT - 1 nodes."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The following diagram shows how the Leader sends shreds with a fanout of 2 to Neighborhood 0 in Layer 0 and how the nodes in Neighborhood 0 share their data with each other."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The following diagram shows how Neighborhood 0 fans out to Neighborhoods 1 and 2."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Finally, the following diagram shows a two layer cluster with a fanout of 2."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Configuration Values"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "DATA_PLANE_FANOUT - Determines the size of layer 0. Subsequent layers grow by a factor of DATA_PLANE_FANOUT. The number of nodes in a neighborhood is equal to the fanout value. Neighborhoods will fill to capacity before new ones are added, i.e if a neighborhood isn't full, it must be the last one."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Currently, configuration is set when the cluster is launched. In the future, these parameters may be hosted on-chain, allowing modification on the fly as the cluster sizes change."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Calculating the required FEC rate"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Turbine relies on retransmission of packets between validators. Due to retransmission, any network wide packet loss is compounded, and the probability of the packet failing to reach its destination increases on each hop. The FEC rate needs to take into account the network wide packet loss, and the propagation depth."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A shred group is the set of data and coding packets that can be used to reconstruct each other. Each shred group has a chance of failure, based on the likelyhood of the number of packets failing that exceeds the FEC rate. If a validator fails to reconstruct the shred group, then the block cannot be reconstructed, and the validator has to rely on repair to fixup the blocks."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The probability of the shred group failing can be computed using the binomial distribution. If the FEC rate is 16:4, then the group size is 20, and at least 4 of the shreds must fail for the group to fail. Which is equal to the sum of the probability of 4 or more trails failing out of 20."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Probability of a block succeeding in turbine:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Probability of packet failure: P = 1 - (1 - network_packet_loss_rate)^2"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "FEC rate: K:M"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Number of trials: N = K + M"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Shred group failure rate: S = SUM of i=0 -> M for binomial(prob_failure = P, trials = N, failures = i)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Shreds per block: G"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Block success rate: B = (1 - S) ^ (G / N)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Binomial distribution for exactly i results with probability of P in N trials is defined as (N choose i) _ P^i _ (1 - P)^(N-i)"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "For example:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Network packet loss rate is 15%."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "50k tps network generates 6400 shreds per second."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "FEC rate increases the total shreds per block by the FEC ratio."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "With a FEC rate: 16:4"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "G = 8000"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "P = 1 - 0.85 * 0.85 = 1 - 0.7225 = 0.2775"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "S = SUM of i=0 -> 4 for binomial(prob_failure = 0.2775, trials = 20, failures = i) = 0.689414"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "B = (1 - 0.689) ^ (8000 / 20) = 10^-203"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "With FEC rate of 16:16"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "G = 12800"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "S = SUM of i=0 -> 32 for binomial(prob_failure = 0.2775, trials = 64, failures = i) = 0.002132"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "B = (1 - 0.002132) ^ (12800 / 32) = 0.42583"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "With FEC rate of 32:32"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "G = 12800"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "S = SUM of i=0 -> 32 for binomial(prob_failure = 0.2775, trials = 64, failures = i) = 0.000048"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "B = (1 - 0.000048) ^ (12800 / 64) = 0.99045"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Neighborhoods"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The following diagram shows how two neighborhoods in different layers interact. To cripple a neighborhood, enough nodes (erasure codes +1) from the neighborhood above need to fail. Since each neighborhood receives shreds from multiple nodes in a neighborhood in the upper layer, we'd need a big network failure in the upper layers to end up with incomplete data."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "secure-vote-signing",
                children: "Secure Vote Signing"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Secure Vote Signing"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A validator receives entries from the current leader and submits votes confirming those entries are valid. This vote submission presents a security challenge, because forged votes that violate consensus rules could be used to slash the validator's stake."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The validator votes on its chosen fork by submitting a transaction that uses an asymmetric key to sign the result of its validation work. Other entities can verify this signature using the validator's public key. If the validator's key is used to sign incorrect data (e.g. votes on multiple forks of the ledger), the node's stake or its resources could be compromised."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Exzo Network addresses this risk by splitting off a separate vote signer service that evaluates each vote to ensure it does not violate a slashing condition."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Validators, Vote Signers, and Stakeholders"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: 'When a validator receives multiple blocks for the same slot, it tracks all possible forks until it can determine a "best" one. A validator selects the best fork by submitting a vote to it, using a vote signer to minimize the possibility of its vote inadvertently violating a consensus rule and getting a stake slashed.'
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A vote signer evaluates the vote proposed by the validator and signs the vote only if it does not violate a slashing condition. A vote signer only needs to maintain minimal state regarding the votes it signed and the votes signed by the rest of the cluster. It doesn't need to process a full set of transactions."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A stakeholder is an identity that has control of the staked capital. The stakeholder can delegate its stake to the vote signer. Once a stake is delegated, the vote signer's votes represent the voting weight of all the delegated stakes, and produce rewards for all the delegated stakes."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Currently, there is a 1:1 relationship between validators and vote signers, and stakeholders delegate their entire stake to a single vote signer."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Signing service"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The vote signing service consists of a JSON RPC server and a request processor. At startup, the service starts the RPC server at a configured port and waits for validator requests. It expects the following type of requests:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Register a new validator node"
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The request must contain validator's identity (public key)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The request must be signed with the validator's private key"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The service drops the request if signature of the request cannot be verified"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The service creates a new voting asymmetric key for the validator, and returns the public key as a response"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "If a validator tries to register again, the service returns the public key from the pre-existing keypair"
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                start: "2",
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Sign a vote"
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The request must contain a voting transaction and all verification data"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The request must be signed with the validator's private key"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The service drops the request if signature of the request cannot be verified"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The service verifies the voting data"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The service returns a signature for the transaction"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Validator voting"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: 'A validator node, at startup, creates a new vote account and registers it with the cluster by submitting a new "vote register" transaction. The other nodes on the cluster process this transaction and include the new validator in the active set. Subsequently, the validator submits a "new vote" transaction signed with the validator\'s voting private key on each voting event.'
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Configuration"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The validator node is configured with the signing service's network endpoint (IP/Port)."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Registration"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: 'At startup, the validator registers itself with its signing service using JSON RPC. The RPC call returns the voting public key for the validator node. The validator creates a new "vote register" transaction including this public key, and submits it to the cluster.'
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Vote Collection"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The validator looks up the votes submitted by all the nodes in the cluster for the last voting period. This information is submitted to the signing service with a new vote signing request."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "New Vote Signing"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: 'The validator creates a "new vote" transaction and sends it to the signing service using JSON RPC. The RPC request also includes the vote verification data. On success, the RPC call returns the signature for the vote. On failure, RPC call returns the failure code.'
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "stake-delegation-and-rewards",
                children: "Stake Delegation and Rewards"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Stake Delegation and Rewards"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Stakers are rewarded for helping to validate the ledger. They do this by delegating their stake to validator nodes. Those validators do the legwork of replaying the ledger and sending votes to a per-node vote account to which stakers can delegate their stakes. The rest of the cluster uses those stake-weighted votes to select a block when forks arise. Both the validator and staker need some economic incentive to play their part. The validator needs to be compensated for its hardware and the staker needs to be compensated for the risk of getting its stake slashed. The economics are covered in staking rewards. This section, on the other hand, describes the underlying mechanics of its implementation."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Basic Design"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The general idea is that the validator owns a Vote account. The Vote account tracks validator votes, counts validator generated credits, and provides any additional validator specific state. The Vote account is not aware of any stakes delegated to it and has no staking weight."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A separate Stake account (created by a staker) names a Vote account to which the stake is delegated. Rewards generated are proportional to the amount of lamports staked. The Stake account is owned by the staker only. Some portion of the lamports stored in this account are the stake."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Passive Delegation"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Any number of Stake accounts can delegate to a single Vote account without an interactive action from the identity controlling the Vote account or submitting votes to the account."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The total stake allocated to a Vote account can be calculated by the sum of all the Stake accounts that have the Vote account pubkey as the StakeState::Stake::voter_pubkey."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Vote and Stake accounts"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The rewards process is split into two on-chain programs. The Vote program solves the problem of making stakes slashable. The Stake program acts as custodian of the rewards pool and provides for passive delegation. The Stake program is responsible for paying rewards to staker and voter when shown that a staker's delegate has participated in validating the ledger."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "VoteState"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "VoteState is the current state of all the votes the validator has submitted to the network. VoteState contains the following state information:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "votes - The submitted votes data structure."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "credits - The total number of rewards this Vote program has generated over its lifetime."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "root_slot - The last slot to reach the full lockout commitment necessary for rewards."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "commission - The commission taken by this VoteState for any rewards claimed by staker's Stake accounts. This is the percentage ceiling of the reward."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Account::lamports - The accumulated lamports from the commission. These do not count as stakes."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "authorized_voter - Only this identity is authorized to submit votes. This field can only modified by this identity."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "node_pubkey - The Exzo Network node that votes in this account."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "authorized_withdrawer - the identity of the entity in charge of the lamports of this account, separate from the account's address and the authorized vote signer."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "VoteInstruction::Initialize(VoteInit)"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "account[0] - RW - The VoteState."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "VoteInit carries the new vote account's node_pubkey, authorized_voter, authorized_withdrawer, and commission."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "other VoteState members defaulted."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "VoteInstruction::Authorize(Pubkey, VoteAuthorize)"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Updates the account with a new authorized voter or withdrawer, according to the VoteAuthorize parameter (Voter or Withdrawer). The transaction must be signed by the Vote account's current authorized_voter or authorized_withdrawer."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "account[0] - RW - The VoteState. VoteState::authorized_voter or authorized_withdrawer is set to Pubkey."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "VoteInstruction::Vote(Vote)"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "account[0] - RW - The VoteState. VoteState::lockouts and VoteState::credits are updated according to voting lockout rules see ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                                href: "https://docs.velas.com/implemented-proposals/tower-bft.md",
                                children: "Tower BFT"
                            }),
                            "."
                        ]
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "account[1] - RO - sysvar::slot_hashes A list of some N most recent slots and their hashes for the vote to be verified against."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "account[2] - RO - sysvar::clock The current network time, expressed in slots, epochs."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "StakeState"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A StakeState takes one of four forms, StakeState::Uninitialized, StakeState::Initialized, StakeState::Stake, and StakeState::RewardsPool. Only the first three forms are used in staking, but only StakeState::Stake is interesting. All RewardsPools are created at genesis."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "StakeState::Stake"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "StakeState::Stake is the current delegation preference of the staker and contains the following state information:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Account::lamports - The lamports available for staking."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "stake - the staked amount (subject to warmup and cooldown) for generating rewards, always less than or equal to Account::lamports."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "voter_pubkey - The pubkey of the VoteState instance the lamports are delegated to."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "credits_observed - The total credits claimed over the lifetime of the program."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "activated - the epoch at which this stake was activated/delegated. The full stake will be counted after warmup."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "deactivated - the epoch at which this stake was de-activated, some cooldown epochs are required before the account is fully deactivated, and the stake available for withdrawal."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "authorized_staker - the pubkey of the entity that must sign delegation, activation, and deactivation transactions."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "authorized_withdrawer - the identity of the entity in charge of the lamports of this account, separate from the account's address, and the authorized staker."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "StakeState::RewardsPool"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "To avoid a single network-wide lock or contention in redemption, 256 RewardsPools are part of genesis under pre-determined keys, each with std::u64::MAX credits to be able to satisfy redemptions according to point value."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The Stakes and the RewardsPool are accounts that are owned by the same Stake program."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "StakeInstruction::DelegateStake"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The Stake account is moved from Initialized to StakeState::Stake form, or from a deactivated (i.e. fully cooled-down) StakeState::Stake to activated StakeState::Stake. This is how stakers choose the vote account and validator node to which their stake account lamports are delegated. The transaction must be signed by the stake's authorized_staker."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "account[0] - RW - The StakeState::Stake instance. StakeState::Stake::credits_observed is initialized to VoteState::credits, StakeState::Stake::voter_pubkey is initialized to account[1]. If this is the initial delegation of stake, StakeState::Stake::stake is initialized to the account's balance in lamports, StakeState::Stake::activated is initialized to the current Bank epoch, and StakeState::Stake::deactivated is initialized to std::u64::MAX"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "account[1] - R - The VoteState instance."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "account[2] - R - sysvar::clock account, carries information about current Bank epoch."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "account[3] - R - sysvar::stakehistory account, carries information about stake history."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "account[4] - R - stake::Config account, carries warmup, cooldown, and slashing configuration."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "StakeInstruction::Authorize(Pubkey, StakeAuthorize)"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Updates the account with a new authorized staker or withdrawer, according to the StakeAuthorize parameter (Staker or Withdrawer). The transaction must be by signed by the Stakee account's current authorized_staker or authorized_withdrawer. Any stake lock-up must have expired, or the lock-up custodian must also sign the transaction."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "account[0] - RW - The StakeState."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "StakeState::authorized_staker or authorized_withdrawer is set to to Pubkey."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "StakeInstruction::Deactivate"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A staker may wish to withdraw from the network. To do so he must first deactivate his stake, and wait for cooldown. The transaction must be signed by the stake's authorized_staker."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "account[0] - RW - The StakeState::Stake instance that is deactivating."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "account[1] - R - sysvar::clock account from the Bank that carries current epoch."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "StakeState::Stake::deactivated is set to the current epoch + cooldown. The account's stake will ramp down to zero by that epoch, and Account::lamports will be available for withdrawal."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "StakeInstruction::Withdraw(u64)"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Lamports build up over time in a Stake account and any excess over activated stake can be withdrawn. The transaction must be signed by the stake's authorized_withdrawer."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "account[0] - RW - The StakeState::Stake from which to withdraw."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "account[1] - RW - Account that should be credited with the withdrawn lamports."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "account[2] - R - sysvar::clock account from the Bank that carries current epoch, to calculate stake."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "account[3] - R - sysvar::stake_history account from the Bank that carries stake warmup/cooldown history."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Benefits of the design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Single vote for all the stakers."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Clearing of the credit variable is not necessary for claiming rewards."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Each delegated stake can claim its rewards independently."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Commission for the work is deposited when a reward is claimed by the delegated stake."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Example Callflow"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageOther__WEBPACK_IMPORTED_MODULE_3__/* .ImageOther */ .Y, {
                img: _images_callflow_image_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                width: 300,
                height: 119
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Staking Rewards"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The specific mechanics and rules of the validator rewards regime is outlined here. Rewards are earned by delegating stake to a validator that is voting correctly. Voting incorrectly exposes that validator's stakes to slashing."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Basics"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The network pays rewards from a portion of network inflation. The number of lamports available to pay rewards for an epoch is fixed and must be evenly divided among all staked nodes according to their relative stake weight and participation. The weighting unit is called a point."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Rewards for an epoch are not available until the end of that epoch."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "At the end of each epoch, the total number of points earned during the epoch is summed and used to divide the rewards portion of epoch inflation to arrive at a point value. This value is recorded in the bank in a sysvar that maps epochs to point values."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "During redemption, the stake program counts the points earned by the stake for each epoch, multiplies that by the epoch's point value, and transfers lamports in that amount from a rewards account into the stake and vote accounts according to the vote account's commission setting."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Economics"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Point value for an epoch depends on aggregate network participation. If participation in an epoch drops off, point values are higher for those that do participate."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Earning credits"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Validators earn one vote credit for every correct vote that exceeds maximum lockout, i.e. every time the validator's vote account retires a slot from its lockout list, making that vote a root for the node."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Stakers who have delegated to that validator earn points in proportion to their stake. Points earned is the product of vote credits and stake."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Stake warmup, cooldown, withdrawal"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: 'Stakes, once delegated, do not become effective immediately. They must first pass through a warmup period. During this period some portion of the stake is considered "effective", the rest is considered "activating". Changes occur on epoch boundaries.'
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The stake program limits the rate of change to total network stake, reflected in the stake program's config::warmup_rate (set to 25% per epoch in the current implementation)."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The amount of stake that can be warmed up each epoch is a function of the previous epoch's total effective stake, total activating stake, and the stake program's configured warmup rate."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: 'Cooldown works the same way. Once a stake is deactivated, some part of it is considered "effective", and also "deactivating". As the stake cools down, it continues to earn rewards and be exposed to slashing, but it also becomes available for withdrawal.'
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Bootstrap stakes are not subject to warmup."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: 'Rewards are paid against the "effective" portion of the stake for that epoch.'
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Warmup example"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Consider the situation of a single stake of 1,000 activated at epoch N, with network warmup rate of 20%, and a quiescent total network stake at epoch N of 2,000."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "At epoch N+1, the amount available to be activated for the network is 400 (20% of 2000), and at epoch N, this example stake is the only stake activating, and so is entitled to all of the warmup room available."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                className: "w-full border-collapse border border-slate-400 bg-white text-sm shadow-sm dark:border-slate-500 dark:bg-inherit",
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "w-1/5 border border-slate-300 px-3 py-0 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "epoch"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "w-1/5 border border-slate-300 px-3 py-0 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "effective"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "w-1/5 border border-slate-300 px-3 py-0 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "activating"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "w-1/5 border border-slate-300 px-3 py-0 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "total effective"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "w-1/5 border border-slate-300 px-3 py-0 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "total activating"
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
                                            children: "N-1"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "\xa0"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "\xa0"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "2,000"
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
                                            children: "N"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "0"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "1,000"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "2,000"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "1,000"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "N+1"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "400"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "600"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "2,400"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "600"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "N+2"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "880"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "120"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "2,880"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "120"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "N+3"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "1000"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "0"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "3,000"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "0"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Were 2 stakes (X and Y) to activate at epoch N, they would be awarded a portion of the 20% in proportion to their stakes. At each epoch effective and activating for each stake is a function of the previous epoch's state."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                className: "w-full border-collapse border border-slate-400 bg-white text-sm shadow-sm dark:border-slate-500 dark:bg-inherit",
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "w-1/7 border border-slate-300 px-3 py-0 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "epoch"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "w-1/7 border border-slate-300 px-3 py-0 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "X eff"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "w-1/7 border border-slate-300 px-3 py-0 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "X act"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "w-1/7 border border-slate-300 px-3 py-0 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "Y eff"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "w-1/7 border border-slate-300 px-3 py-0 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "Y act"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "w-1/7 border border-slate-300 px-3 py-0 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "total effective"
                                    })
                                }),
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    className: "w-1/7 border border-slate-300 px-3 py-0 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200",
                                    children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "total activating"
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
                                            children: "N-1"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "\xa0"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "\xa0"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "\xa0"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "\xa0"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "2,000"
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
                                            children: "N"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "0"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "1,000"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "0"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "200"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "2,000"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "1,200"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "N+1"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "333"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "667"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "67"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "133"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "2,400"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "800"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "N+2"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "733"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "267"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "146"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "54"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "2,880"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "321"
                                        })
                                    })
                                ]
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "N+3"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "1000"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "0"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "200"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "0"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "3,200"
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        className: "border border-slate-300 px-3 py-0 text-slate-500 dark:border-slate-700 dark:text-slate-200",
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                            children: "0"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Withdrawal"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Only lamports in excess of effective+activating stake may be withdrawn at any time. This means that during warmup, effectively no stake can be withdrawn. During cooldown, any tokens in excess of effective stake may be withdrawn (activating == 0). Because earned rewards are automatically added to stake, withdrawal is generally only possible after deactivation."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Lock-up"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Stake accounts support the notion of lock-up, wherein the stake account balance is unavailable for withdrawal until a specified time. Lock-up is specified as an epoch height, i.e. the minimum epoch height that must be reached by the network before the stake account balance is available for withdrawal, unless the transaction is also signed by a specified custodian. This information is gathered when the stake account is created, and stored in the Lockup field of the stake account's state. Changing the authorized staker or withdrawer is also subject to lock-up, as such an operation is effectively a transfer."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I, {
                id: "validator",
                title: "Validator",
                level: 2,
                isShow: false
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "anatomy-of-a-validator",
                children: "Anatomy of a Validator"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Pipelining"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The validators make extensive use of an optimization common in CPU design, called pipelining. Pipelining is the right tool for the job when there's a stream of input data that needs to be processed by a sequence of steps, and there's different hardware responsible for each. The quintessential example is using a washer and dryer to wash/dry/fold several loads of laundry. Washing must occur before drying and drying before folding, but each of the three operations is performed by a separate unit. To maximize efficiency, one creates a pipeline of stages. We'll call the washer one stage, the dryer another, and the folding process a third. To run the pipeline, one adds a second load of laundry to the washer just after the first load is added to the dryer. Likewise, the third load is added to the washer after the second is in the dryer and the first is being folded. In this way, one can make progress on three loads of laundry simultaneously. Given infinite loads, the pipeline will consistently complete a load at the rate of the slowest stage in the pipeline."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Pipelining in the Validator"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The validator contains two pipelined processes, one used in leader mode called the TPU and one used in validator mode called the TVU. In both cases, the hardware being pipelined is the same, the network input, the GPU cards, the CPU cores, writes to disk, and the network output. What it does with that hardware is different. The TPU exists to create ledger entries whereas the TVU exists to validate them."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "tpu",
                children: "TPU"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "TPU Block Diagram"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageOther__WEBPACK_IMPORTED_MODULE_3__/* .ImageOther */ .Y, {
                img: _images_tpu_image_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                width: 696,
                height: 304
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "tvu",
                children: "TVU"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "TVU Block Diagram"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageOther__WEBPACK_IMPORTED_MODULE_3__/* .ImageOther */ .Y, {
                img: _images_tvu_image_svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                width: 750,
                height: 478
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "retransmit-stage",
                children: "Retransmit Stage"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Retransmit Block Diagram"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageOther__WEBPACK_IMPORTED_MODULE_3__/* .ImageOther */ .Y, {
                img: _images_retransmit_stage_image_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                width: 750,
                height: 557
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "blockstore",
                children: "Blockstore"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "After a block reaches finality, all blocks from that one on down to the genesis block form a linear chain with the familiar name blockchain. Until that point, however, the validator must maintain all potentially valid chains, called forks. The process by which forks naturally form as a result of leader rotation is described in fork generation. The blockstore data structure described here is how a validator copes with those forks until blocks are finalized."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The blockstore allows a validator to record every shred it observes on the network, in any order, as long as the shred is signed by the expected leader for a given slot."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Shreds are moved to a fork-able key space the tuple of leader slot + shred index (within the slot). This permits the skip-list structure of the Exzo Network protocol to be stored in its entirety, without a-priori choosing which fork to follow, which Entries to persist or when to persist them."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Repair requests for recent shreds are served out of RAM or recent files and out of deeper storage for less recent shreds, as implemented by the store backing Blockstore."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Functionalities of Blockstore"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Persistence: the Blockstore lives in the front of the nodes verification pipeline, right behind network receive and signature verification. If the shred received is consistent with the leader schedule (i.e. was signed by the leader for the indicated slot), it is immediately stored."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Repair: repair is the same as window repair above, but able to serve any shred that's been received. Blockstore stores shreds with signatures, preserving the chain of origination."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Forks: Blockstore supports random access of shreds, so can support a validator's need to rollback and replay from a Bank checkpoint."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Restart: with proper pruning/culling, the Blockstore can be replayed by ordered enumeration of entries from slot 0. The logic of the replay stage (i.e. dealing with forks) will have to be used for the most recent entries in the Blockstore."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Blockstore Design"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Entries in the Blockstore are stored as key-value pairs, where the key is the concatenated slot index and shred index for an entry, and the value is the entry data. Note shred indexes are zero-based for each slot (i.e. they're slot-relative)."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The Blockstore maintains metadata for each slot, in the SlotMeta struct containing:"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {}),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "slot_index - The index of this slot"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "num_blocks - The number of blocks in the slot (used for chaining to a previous slot)"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "consumed - The highest shred index n, such that for all m < n, there exists a shred in this slot with shred index equal to n (i.e. the highest consecutive shred index)."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "received - The highest received shred index for the slot"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "next_slots - A list of future slots this slot could chain to. Used when rebuilding"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "the ledger to find possible fork points."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                start: "2",
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {}),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "last_index - The index of the shred that is flagged as the last shred for this slot. This flag on a shred will be set by the leader for a slot when they are transmitting the last shred for a slot."
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: 'is_rooted - True iff every block from 0...slot forms a full sequence without any holes. We can derive is_rooted for each slot with the following rules. Let slot(n) be the slot with index n, and slot(n).is_full() is true if the slot with index n has all the ticks expected for that slot. Let is_rooted(n) be the statement that "the slot(n).is_rooted is true". Then:'
                            }),
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "is_rooted(0) is_rooted(n+1) iff (is_rooted(n) and slot(n).is_full()"
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                start: "3",
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Chaining - When a shred for a new slot x arrives, we check the number of blocks (num_blocks) for that new slot (this information is encoded in the shred). We then know that this new slot chains to slot x - num_blocks."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: 'Subscriptions - The Blockstore records a set of slots that have been "subscribed" to. This means entries that chain to these slots will be sent on the Blockstore channel for consumption by the ReplayStage. See the Blockstore APIs for details.'
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Update notifications - The Blockstore notifies listeners when slot(n).is_rooted is flipped from false to true for any n."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Blockstore APIs"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "The Blockstore offers a subscription based API that ReplayStage uses to ask for entries it's interested in. The entries will be sent on a channel exposed by the Blockstore. These subscription API's are as follows: 1. ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "fn get_slots_since(slot_indexes: &[u64]) -> Vec<SlotMeta>:"
                    }),
                    " Returns new slots connecting to any element of the list slot_indexes."
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "fn get_slot_entries(slot_index: u64, entry_start_index: usize, ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "max_entries: Option<u64>) -> Vec<Entry>:"
                            }),
                            " Returns the entry vector for the slot starting with entry_start_index, capping the result at max if max_entries == Some(max), otherwise, no upper limit on the length of the return vector is imposed."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Note: Cumulatively, this means that the replay stage will now have to know when a slot is finished, and subscribe to the next slot it's interested in to get the next set of entries. Previously, the burden of chaining slots fell on the Blockstore."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Interfacing with Bank"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The bank exposes to replay stage:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "prev_hash: which PoH chain it's working on as indicated by the hash of the last"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "entry it processed"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                start: "2",
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "tick_height: the ticks in the PoH chain currently being verified by this"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "bank"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                start: "3",
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "votes: a stack of records that contain: 1. prev_hashes: what anything after this vote must chain to in PoH 2. tick_height: the tick height at which this vote was cast 3. lockout period: how long a chain must be observed to be in the ledger to"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "be able to be chained below this vote"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Replay stage uses Blockstore APIs to find the longest chain of entries it can hang off a previous vote. If that chain of entries does not hang off the latest vote, the replay stage rolls back the bank to that vote and replays the chain from there."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Pruning Blockstore"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Once Blockstore entries are old enough, representing all the possible forks becomes less useful, perhaps even problematic for replay upon restart. Once a validator's votes have reached max lockout, however, any Blockstore contents that are not on the PoH chain for that vote for can be pruned, expunged."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "gossip-service",
                children: "Gossip Service"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The Gossip Service acts as a gateway to nodes in the control plane. Validators use the service to ensure information is available to all other nodes in a cluster. The service broadcasts information using a gossip protocol."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "gossip-overview",
                children: "Gossip Overview"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Nodes continuously share signed data objects among themselves in order to manage a cluster. For example, they share their contact information, ledger height, and votes."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: 'Every tenth of a second, each node sends a "push" message and/or a "pull" message. Push and pull messages may elicit responses, and push messages may be forwarded on to others in the cluster.'
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Gossip runs on a well-known UDP/IP port or a port in a well-known range. Once a cluster is bootstrapped, nodes advertise to each other where to find their gossip endpoint (a socket address)."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "gossip-records",
                children: "Gossip Records"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Records shared over gossip are arbitrary, but signed and versioned (with a timestamp) as needed to make sense to the node receiving them. If a node receives two records from the same source, it updates its own copy with the record with the most recent timestamp."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "gossip-service-interface",
                children: "Gossip Service Interface"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Push Message"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "A node sends a push message to tells the cluster it has information to share. Nodes send push messages to ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "PUSH_FANOUT"
                    }),
                    " push peers."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Upon receiving a push message, a node examines the message for:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Duplication: if the message has been seen before, the node drops the message and may respond with ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "PushMessagePrune"
                            }),
                            " if forwarded from a low staked node"
                        ]
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "New data: if the message is new to the node"
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Stores the new information with an updated version in its cluster info and purges any previous older value"
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Stores the message in pushed_once (used for detecting duplicates, purged after ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "PUSH_MSG_TIMEOUT"
                            }),
                            " * 5 ms)"
                        ]
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Retransmits the messages to its own push peers"
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
                            "Expiration: nodes drop push messages that are older than ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "PUSH_MSG_TIMEOUT"
                            })
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Push Peers, Prune Message"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A nodes selects its push peers at random from the active set of known peers. The node keeps this selection for a relatively long time. When a prune message is received, the node drops the push peer that sent the prune. Prune is an indication that there is another, higher stake weighted path to that node than direct push."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "The set of push peers is kept fresh by rotating a new node into the set every ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "PUSH_MSG_TIMEOUT/2"
                    }),
                    " milliseconds."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Pull Message"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A node sends a pull message to ask the cluster if there is any new information. A pull message is sent to a single peer at random and comprises a Bloom filter that represents things it already has. A node receiving a pull message iterates over its values and constructs a pull response of things that miss the filter and would fit in a message."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A node constructs the pull Bloom filter by iterating over current values and recently purged values."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A node handles items in a pull response the same way it handles new data in a push message."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "purging",
                children: "Purging"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Nodes retain prior versions of values (those updated by a pull or push) and expired values (those older than ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "GOSSIP_PULL_CRDS_TIMEOUT_MS"
                    }),
                    ") in ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "purged_values"
                    }),
                    " (things I recently had). Nodes purge ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "purged_values"
                    }),
                    " that are older than 5 * ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "GOSSIP_PULL_CRDS_TIMEOUT_MS"
                    }),
                    "."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "eclipse-attacks",
                children: "Eclipse Attacks"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "An eclipse attack is an attempt to take over the set of node connections with adversarial endpoints."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "This is relevant to our implementation in the following ways."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Pull messages select a random node from the network. An eclipse attack on pull would require an attacker to influence the random selection in such a way that only adversarial nodes are selected for pull."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Push messages maintain an active set of nodes and select a random fanout for every push message. An eclipse attack on push would influence the active set selection, or the random fanout selection."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Time and Stake based weights"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Weights are calculated based on ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "time since last picked"
                    }),
                    " and the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "natural log"
                    }),
                    " of the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "stake weight"
                    }),
                    "."
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Taking the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "ln"
                    }),
                    " of the stake weight allows giving all nodes a fairer chance of network coverage in a reasonable amount of time. It helps normalize the large possible ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "stake weight"
                    }),
                    " differences between nodes. This way a node with low ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "stake weight"
                    }),
                    ", compared to a node with large ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "stake weight"
                    }),
                    " will only have to wait a few multiples of ln(",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "stake"
                    }),
                    ") seconds before it gets picked."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "There is no way for an adversary to influence these parameters."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Pull Message"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A node is selected as a pull target based on the weights described above."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Push Message"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A prune message can only remove an adversary from a potential connection."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Just like pull message, nodes are selected into the active set based on weights."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "notable-differences-from-plum-tree",
                children: "Notable differences from PlumTree"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The active push protocol described here is based on Plum Tree. The main differences are:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Push messages have a wallclock that is signed by the originator. Once the wallclock expires the message is dropped. A hop limit is difficult to implement in an adversarial setting."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Lazy Push is not implemented because its not obvious how to prevent an adversary from forging the message fingerprint. A naive approach would allow an adversary to be prioritized for pull based on their input."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "the-runtime",
                children: "The Runtime"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The runtime is a concurrent transaction processor. Transactions specify their data dependencies upfront and dynamic memory allocation is explicit. By separating program code from the state it operates on, the runtime is able to choreograph concurrent access. Transactions accessing only read-only accounts are executed in parallel whereas transactions accessing writable accounts are serialized. The runtime interacts with the program through an entrypoint with a well-defined interface. The data stored in an account is an opaque type, an array of bytes. The program has full control over its contents."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The transaction structure specifies a list of public keys and signatures for those keys and a sequential list of instructions that will operate over the states associated with the account keys. For the transaction to be committed all the instructions must execute successfully; if any abort the whole transaction fails to commit."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Account Structure"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Accounts maintain a lamport balance and program-specific memory."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "transaction-engine",
                children: "Transaction Engine"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The engine maps public keys to accounts and routes them to the program's entrypoint."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Execution"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Transactions are batched and processed in a pipeline. The TPU and TVU follow a slightly different path. The TPU runtime ensures that PoH record occurs before memory is committed."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The TVU runtime ensures that PoH verification occurs before the runtime processes any transactions."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "At the execute stage, the loaded accounts have no data dependencies, so all the programs can be executed in parallel."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The runtime enforces the following rules:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Only the owner program may modify the contents of an account. This means that upon assignment data vector is guaranteed to be zero."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Total balances on all the accounts is equal before and after execution of a transaction."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "After the transaction is executed, balances of read-only accounts must be equal to the balances before the transaction."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "All instructions in the transaction executed atomically. If one fails, all account modifications are discarded."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Execution of the program involves mapping the program's public key to an entrypoint which takes a pointer to the transaction, and an array of loaded accounts."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "SystemProgram Interface"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "CreateAccount"
                            }),
                            " - This allows the user to create an account with an allocated data array and assign it to a Program."
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "CreateAccountWithSeed"
                            }),
                            " - Same as ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "CreateAccount"
                            }),
                            ", but the new account's address is derived from",
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "the funding account's pubkey,"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "a mnemonic string (seed), and"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "the pubkey of the Program"
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
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "Assign"
                            }),
                            " - Allows the user to assign an existing account to a program."
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "Transfer"
                            }),
                            " - Transfers lamports between accounts."
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Program State Security"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "For blockchain to function correctly, the program code must be resilient to user inputs. That is why in this design the program specific code is the only code that can change the state of the data byte array in the Accounts that are assigned to it. It is also the reason why ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "Assign"
                    }),
                    " or ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "CreateAccount"
                    }),
                    " must zero out the data. Otherwise there would be no possible way for the program to distinguish the recently assigned account data from a natively generated state transition without some additional metadata from the runtime to indicate that this memory is assigned instead of natively generated."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "To pass messages between programs, the receiving program must accept the message and copy the state over. But in practice a copy isn't needed and is undesirable. The receiving program can read the state belonging to other Accounts without copying it, and during the read it has a guarantee of the sender program's state."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Notes"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "There is no dynamic memory allocation. Client's need to use ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "CreateAccount"
                            }),
                            " instructions to create memory before passing it to another program. This instruction can be composed into a single transaction with the call to the program itself."
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "CreateAccount"
                            }),
                            " and ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "Assign"
                            }),
                            " guarantee that when account is assigned to the program, the Account's data is zero initialized."
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Transactions that assign an account to a program or allocate space must be signed by the Account address' private key unless the Account is being created by ",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                                children: "CreateAccountWithSeed"
                            }),
                            ", in which case there is no corresponding private key for the account's address/pubkey."
                        ]
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Once assigned to program an Account cannot be reassigned."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Runtime guarantees that a program's code is the only code that can modify Account data that the Account is assigned to."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Runtime guarantees that the program can only spend lamports that are in accounts that are assigned to it."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Runtime guarantees the balances belonging to accounts are balanced before and after the transaction."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Runtime guarantees that instructions all executed successfully when a transaction is committed."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "future-work",
                children: "Future Work"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Continuations and Signals for long running Transactions"
                    }),
                    "\n"
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
const getStaticProps = ()=>({
        props: JSON.parse(JSON.stringify({
            GuidesOther: _components_GuidesOther__WEBPACK_IMPORTED_MODULE_2__/* .GuidesOther */ .I,
            ImageOther: _components_ImageOther__WEBPACK_IMPORTED_MODULE_3__/* .ImageOther */ .Y,
            _provideComponents: _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents,
            imgCallFlow: _images_callflow_image_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
            imgRetransmit: _images_retransmit_stage_image_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
            imgTpu: _images_tpu_image_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
            imgTvu: _images_tvu_image_svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,636,675,47,825,336], () => (__webpack_exec__(834)));
module.exports = __webpack_exports__;

})();