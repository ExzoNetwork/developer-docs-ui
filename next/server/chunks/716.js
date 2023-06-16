"use strict";
exports.id = 716;
exports.ids = [716];
exports.modules = {

/***/ 4716:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "search": () => (/* binding */ search)
/* harmony export */ });
/* harmony import */ var flexsearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8395);

let sectionIndex = new flexsearch__WEBPACK_IMPORTED_MODULE_0__.Document({
    tokenize: "full",
    document: {
        id: "url",
        index: "content",
        store: [
            "title",
            "pageTitle"
        ]
    },
    context: {
        resolution: 9,
        depth: 2,
        bidirectional: true
    }
});
let data = [
    {
        "url": "/architecture",
        "sections": [
            [
                "Architecture ",
                null,
                []
            ],
            [
                "Exzo Cluster",
                "exzo-cluster",
                [
                    "A Exzo cluster is a set of validators working together to serve client transactions and maintain the integrity of the ledger. Many clusters may coexist. When two clusters share a common genesis block, they attempt to converge. Otherwise, they simply ignore the existence of the other. Transactions sent to the wrong one are quietly rejected. In this section, we'll discuss how a cluster is created, how nodes join the cluster, how they share the ledger, how they ensure the ledger is replicated, and how they cope with buggy and malicious nodes."
                ]
            ],
            [
                "Creating a Cluster",
                "creating-a-cluster",
                [
                    "Before starting any validators, one first needs to create a genesis config. The config references two public keys, a mint and a bootstrap validator. The validator holding the bootstrap validator's private key is responsible for appending the first entries to the ledger. It initializes its internal state with the mint's account. That account will hold the number of native tokens defined by the genesis config. The second validator then contacts the bootstrap validator to register as a validator. Additional validators then register with any registered member of the cluster.",
                    "A validator receives all entries from the leader and submits votes confirming those entries are valid. After voting, the validator is expected to store those entries. Once the validator observes a sufficient number of copies exist, it deletes its copy."
                ]
            ],
            [
                "Joining a Cluster",
                "joining-a-cluster",
                [
                    "Validators enter the cluster via registration messages sent to its control plane. The control plane is implemented using a gossip protocol, meaning that a node may register with any existing node, and expect its registration to propagate to all nodes in the cluster. The time it takes for all nodes to synchronize is proportional to the square of the number of nodes participating in the cluster. Algorithmically, that's considered very slow, but in exchange for that time, a node is assured that it eventually has all the same information as every other node, and that that information cannot be censored by any one node."
                ]
            ],
            [
                "Sending Transactions to a Cluster",
                "sending-transactions-to-a-cluster",
                [
                    "Clients send transactions to any validator's Transaction Processing Unit (TPU) port. If the node is in the validator role, it forwards the transaction to the designated leader. If in the leader role, the node bundles incoming transactions, timestamps them creating an entry, and pushes them onto the cluster's data plane. Once on the data plane, the transactions are validated by validator nodes, effectively appending them to the ledger."
                ]
            ],
            [
                "Confirming Transactions",
                "confirming-transactions",
                [
                    "A Exzo cluster is capable of subsecond confirmation for up to 150 nodes with plans to scale up to hundreds of thousands of nodes. Once fully implemented, confirmation times are expected to increase only with the logarithm of the number of validators, where the logarithm's base is very high. If the base is one thousand, for example, it means that for the first thousand nodes, confirmation will be the duration of three network hops plus the time it takes the slowest validator of a supermajority to vote. For the next million nodes, confirmation increases by only one network hop.",
                    "Exzo defines confirmation as the duration of time from when the leader timestamps a new entry to the moment when it recognizes a supermajority of ledger votes.",
                    "A gossip network is much too slow to achieve subsecond confirmation once the network grows beyond a certain size. The time it takes to send messages to all nodes is proportional to the square of the number of nodes. If a blockchain wants to achieve low confirmation and attempts to do it using a gossip network, it will be forced to centralize to just a handful of nodes.",
                    "Scalable confirmation can be achieved using the follow combination of techniques:",
                    "Timestamp transactions with a VDF sample and sign the timestamp.",
                    "Split the transactions into batches, send each to separate nodes and have",
                    "each node share its batch with its peers.",
                    "Repeat the previous step recursively until all nodes have all batches.",
                    "Exzo rotates leaders at fixed intervals, called slots. Each leader may only produce entries during its allotted slot. The leader therefore timestamps transactions so that validators may lookup the public key of the designated leader. The leader then signs the timestamp so that a validator may verify the signature, proving the signer is owner of the designated leader's public key.",
                    "Next, transactions are broken into batches so that a node can send transactions to multiple parties without making multiple copies. If, for example, the leader needed to send 60 transactions to 6 nodes, it would break that collection of 60 into batches of 10 transactions and send one to each node. This allows the leader to put 60 transactions on the wire, not 60 transactions for each node. Each node then shares its batch with its peers. Once the node has collected all 6 batches, it reconstructs the original set of 60 transactions.",
                    "A batch of transactions can only be split so many times before it is so small that header information becomes the primary consumer of network bandwidth. At the time of this writing, the approach is scaling well up to about 150 validators. To scale up to hundreds of thousands of validators, each node can apply the same technique as the leader node to another set of nodes of equal size. We call the technique Turbine Block Propagation."
                ]
            ],
            [
                "Synchronization",
                "synchronization",
                [
                    "Fast, reliable synchronization is the biggest reason why we've chosen Solana for achieving high throughput. Traditional blockchains synchronize on large chunks of transactions called blocks. By synchronizing on blocks, a transaction cannot be processed until a duration, called \"block time\", has passed. In Proof of Work consensus, these block times need to be very large (~10 minutes) to minimize the odds of multiple validators producing a new valid block at the same time. There's no such constraint in Proof of Stake consensus, but without reliable timestamps, a validator cannot determine the order of incoming blocks. The popular workaround is to tag each block with a wallclock timestamp. Because of clock drift and variance in network latencies, the timestamp is only accurate within an hour or two. To workaround the workaround, these systems lengthen block times to provide reasonable certainty that the median timestamp on each block is always increasing.",
                    'Solana takes a very different approach, which it calls Proof of History or PoH. Leader nodes "timestamp" blocks with cryptographic proofs that some duration of time has passed since the last proof. All data hashed into the proof most certainly have occurred before the proof was generated. The node then shares the new block with validator nodes, which are able to verify those proofs. The blocks can arrive at validators in any order or even could be replayed years later. With such reliable synchronization guarantees, Solana is able to break blocks into smaller batches of transactions called entries. Entries are streamed to validators in realtime, before any notion of block consensus.',
                    "Solana technically never sends a block, but uses the term to describe the sequence of entries that validators vote on to achieve confirmation. In that way, Solana's confirmation times can be compared apples to apples to block-based systems. The current implementation sets block time to 800ms.",
                    "What's happening under the hood is that entries are streamed to validators as quickly as a leader node can batch a set of valid transactions into an entry. Validators process those entries long before it is time to vote on their validity. By processing the transactions optimistically, there is effectively no delay between the time the last entry is received and the time when the node can vote. In the event consensus is not achieved, a node simply rolls back its state. This optimisic processing technique was introduced in 1981 and called Optimistic Concurrency Control. It can be applied to blockchain architecture where a cluster votes on a hash that represents the full ledger up to some block height. In Solana, it is implemented trivially using the last entry's PoH hash."
                ]
            ],
            [
                "Relationship to VDFs",
                "relationship-to-vdfs",
                [
                    "The Proof of History technique was first described for use in blockchain by Solana in November of 2017. In June of the following year, a similar technique was described at Stanford and called a verifiable delay function or VDF.",
                    "A desirable property of a VDF is that verification time is very fast. Solana's approach to verifying its delay function is proportional to the time it took to create it. Split over a 4000 core GPU, it is sufficiently fast for Solana's needs, but if you asked the authors of the paper cited above, they might tell you (and have) that Solana's approach is algorithmically slow and it shouldn't be called a VDF. We argue the term VDF should represent the category of verifiable delay functions and not just the subset with certain performance characteristics. Until that's resolved, Solana will likely continue using the term PoH for its application-specific VDF.",
                    "Another difference between PoH and VDFs is that a VDF is used only for tracking duration. PoH's hash chain, on the other hand, includes hashes of any data the application observed. That data is a double-edged sword. On one side, the data \"proves history\" - that the data most certainly existed before hashes after it. On the other side, it means the application can manipulate the hash chain by changing when the data is hashed. The PoH chain therefore does not serve as a good source of randomness whereas a VDF without that data could. Solana's leader rotation algorithm, for example, is derived only from the VDF height and not its hash at that height."
                ]
            ],
            [
                "Relationship to Consensus Mechanisms",
                "relationship-to-consensus-mechanisms",
                [
                    "Proof of History is not a consensus mechanism, but it is used to improve the performance of Solana's Proof of Stake consensus. It is also used to improve the performance of the data plane protocols."
                ]
            ],
            [
                "Leader Rotation",
                "leader-rotation",
                [
                    "At any given moment, a cluster expects only one validator to produce ledger entries. By having only one leader at a time, all validators are able to replay identical copies of the ledger. The drawback of only one leader at a time, however, is that a malicious leader is capable of censoring votes and transactions. Since censoring cannot be distinguished from the network dropping packets, the cluster cannot simply elect a single node to hold the leader role indefinitely. Instead, the cluster minimizes the influence of a malicious leader by rotating which node takes the lead.",
                    "Each validator selects the expected leader using the same algorithm, described below. When the validator receives a new signed ledger entry, it can be certain that an entry was produced by the expected leader. The order of slots which each leader is assigned a slot is called a leader schedule."
                ]
            ],
            [
                "Leader Schedule Rotation",
                "leader-schedule-rotation",
                [
                    "A validator rejects blocks that are not signed by the slot leader. The list of identities of all slot leaders is called a leader schedule. The leader schedule is recomputed locally and periodically. It assigns slot leaders for a duration of time called an epoch. The schedule must be computed far in advance of the slots it assigns, such that the ledger state it uses to compute the schedule is finalized. That duration is called the leader schedule offset. Exzo sets the offset to the duration of slots until the next epoch. That is, the leader schedule for an epoch is calculated from the ledger state at the start of the previous epoch. The offset of one epoch is fairly arbitrary and assumed to be sufficiently long such that all validators will have finalized their ledger state before the next schedule is generated. A cluster may choose to shorten the offset to reduce the time between stake changes and leader schedule updates.",
                    "While operating without partitions lasting longer than an epoch, the schedule only needs to be generated when the root fork crosses the epoch boundary. Since the schedule is for the next epoch, any new stakes committed to the root fork will not be active until the next epoch. The block used for generating the leader schedule is the first block to cross the epoch boundary."
                ]
            ],
            [
                "Without a partition lasting longer than an epoch, the cluster will work as follows:",
                "without-a-partition-lasting-longer-than-an-epoch-the-cluster-will-work-as-follows",
                [
                    "A validator continuously updates its own root fork as it votes.",
                    "The validator updates its leader schedule each time the slot height crosses an epoch boundary.",
                    "For example:",
                    "The epoch duration is 100 slots. The root fork is updated from fork computed at slot height 99 to a fork computed at slot height 102. Forks with slots at height 100, 101 were skipped because of failures. The new leader schedule is computed using fork at slot height 102. It is active from slot 200 until it is updated again.",
                    "No inconsistency can exist because every validator that is voting with the cluster has skipped 100 and 101 when its root passes 102. All validators, regardless of voting pattern, would be committing to a root that is either 102, or a descendant of 102."
                ]
            ],
            [
                "Leader Schedule Rotation with Epoch Sized Partitions.",
                "leader-schedule-rotation-with-epoch-sized-partitions",
                [
                    "The duration of the leader schedule offset has a direct relationship to the likelihood of a cluster having an inconsistent view of the correct leader schedule.",
                    "Consider the following scenario:",
                    "Two partitions that are generating half of the blocks each. Neither is coming to a definitive supermajority fork. Both will cross epoch 100 and 200 without actually committing to a root and therefore a cluster-wide commitment to a new leader schedule.",
                    "In this unstable scenario, multiple valid leader schedules exist.",
                    "A leader schedule is generated for every fork whose direct parent is in the previous epoch.",
                    "The leader schedule is valid after the start of the next epoch for descendant forks until it is updated.",
                    "Each partition's schedule will diverge after the partition lasts more than an epoch. For this reason, the epoch duration should be selected to be much much larger then slot time and the expected length for a fork to be committed to root.",
                    "After observing the cluster for a sufficient amount of time, the leader schedule offset can be selected based on the median partition duration and its standard deviation. For example, an offset longer then the median partition duration plus six standard deviations would reduce the likelihood of an inconsistent ledger schedule in the cluster to 1 in 1 million."
                ]
            ],
            [
                "Leader Schedule Generation at Genesis",
                "leader-schedule-generation-at-genesis",
                [
                    "The genesis config declares the first leader for the first epoch. This leader ends up scheduled for the first two epochs because the leader schedule is also generated at slot 0 for the next epoch. The length of the first two epochs can be specified in the genesis config as well. The minimum length of the first epochs must be greater than or equal to the maximum rollback depth as defined in Tower BFT."
                ]
            ],
            [
                "Leader Schedule Generation Algorithm",
                "leader-schedule-generation-algorithm",
                [
                    "Leader schedule is generated using a predefined seed. The process is as follows:",
                    "Periodically use the PoH tick height (a monotonically increasing counter) to seed a stable pseudo-random algorithm.",
                    "At that height, sample the bank for all the staked accounts with leader identities that have voted within a cluster-configured number of ticks. The sample is called the active set.",
                    "Sort the active set by stake weight.",
                    "Use the random seed to select nodes weighted by stake to create a stake-weighted ordering.",
                    "This ordering becomes valid after a cluster-configured number of ticks."
                ]
            ],
            [
                "Schedule Attack Vectors",
                "schedule-attack-vectors",
                []
            ],
            [
                "Seed",
                "seed",
                [
                    "The seed that is selected is predictable but unbiasable. There is no grinding attack to influence its outcome."
                ]
            ],
            [
                "Active Set",
                "active-set",
                [
                    "A leader can bias the active set by censoring validator votes. Two possible ways exist for leaders to censor the active set:",
                    "Ignore votes from validators",
                    "Refuse to vote for blocks with votes from validators",
                    "To reduce the likelihood of censorship, the active set is calculated at the leader schedule offset boundary over an active set sampling duration. The active set sampling duration is long enough such that votes will have been collected by multiple leaders."
                ]
            ],
            [
                "Delegating",
                "delegating",
                [
                    "Leaders can censor new delegation transactions or refuse to validate blocks with new delegations. This attack is similar to censorship of validator votes."
                ]
            ],
            [
                "Validator operational key loss",
                "validator-operational-key-loss",
                [
                    "Leaders and validators are expected to use ephemeral keys for operation, and stake owners authorize the validators to do work with their stake via delegation.",
                    "The cluster should be able to recover from the loss of all the ephemeral keys used by leaders and validators, which could occur through a common software vulnerability shared by all the nodes. Stake owners should be able to vote directly by co-signing a validator vote even though the stake is currently delegated to a validator."
                ]
            ],
            [
                "Appending Entries",
                "appending-entries",
                [
                    "The lifetime of a leader schedule is called an epoch. The epoch is split into slots, where each slot has a duration of T PoH ticks.",
                    "A leader transmits entries during its slot. After T ticks, all the validators switch to the next scheduled leader. Validators must ignore entries sent outside a leader's assigned slot.",
                    "All T ticks must be observed by the next leader for it to build its own entries on. If entries are not observed (leader is down) or entries are invalid (leader is buggy or malicious), the next leader must produce ticks to fill the previous leader's slot. Note that the next leader should do repair requests in parallel, and postpone sending ticks until it is confident other validators also failed to observe the previous leader's entries. If a leader incorrectly builds on its own ticks, the leader following it must replace all its ticks."
                ]
            ],
            [
                "Fork Generation",
                "fork-generation",
                [
                    "Fork Generation",
                    "This section describes how forks naturally occur as a consequence of leader rotation.",
                    "Overview",
                    'Nodes take turns being leader and generating the PoH that encodes state changes. The cluster can tolerate loss of connection to any leader by synthesizing what the leader would have generated had it been connected but not ingesting any state changes. The possible number of forks is thereby limited to a "there/not-there" skip list of forks that may arise on leader rotation slot boundaries. At any given slot, only a single leader\'s transactions will be accepted.',
                    "Message Flow",
                    "Transactions are ingested by the current leader.",
                    "Leader filters valid transactions.",
                    "Leader executes valid transactions updating its state.",
                    "Leader packages transactions into entries based off its current PoH slot.",
                    "Leader transmits the entries to validator nodes (in signed shreds)",
                    "The PoH stream includes ticks; empty entries that indicate liveness of the leader and the passage of time on the cluster.",
                    "A leader's stream begins with the tick entries necessary to complete PoH back to the leader's most recently observed prior leader slot.",
                    "Validators retransmit entries to peers in their set and to further downstream nodes.",
                    "Validators validate the transactions and execute them on their state.",
                    "Validators compute the hash of the state.",
                    "At specific times, i.e. specific PoH tick counts, validators transmit votes to the leader.",
                    "Votes are signatures of the hash of the computed state at that PoH tick count.",
                    "Votes are also propagated via gossip.",
                    "Leader executes the votes, the same as any other transaction, and broadcasts them to the cluster.",
                    "Validators observe their votes and all the votes from the cluster.",
                    "Partitions, Forks",
                    "Forks can arise at PoH tick counts that correspond to a vote. The next leader may not have observed the last vote slot and may start their slot with generated virtual PoH entries. These empty ticks are generated by all nodes in the cluster at a cluster-configured rate for hashes/per/tick Z.",
                    'There are only two possible versions of the PoH during a voting slot: PoH with T ticks and entries generated by the current leader, or PoH with just ticks. The "just ticks" version of the PoH can be thought of as a virtual ledger, one that all nodes in the cluster can derive from the last tick in the previous slot.',
                    "Validators can ignore forks at other points (e.g. from the wrong leader), or slash the leader responsible for the fork.",
                    "Validators vote based on a greedy choice to maximize their reward described in Tower BFT.",
                    "Validator's View",
                    "Time Progression",
                    "The diagram below represents a validator's view of the PoH stream with possible forks over time. L1, L2, etc. are leader slots, and Es represent entries from that leader during that leader's slot. The xs represent ticks only, and time flows downwards in the diagram.",
                    'Note that an E appearing on 2 forks at the same slot is a slashable condition, so a validator observing E3 and E3\' can slash L3 and safely choose x for that slot. Once a validator commits to a fork, other forks can be discarded below that tick count. For any slot, validators need only consider a single "has entries" chain or a "ticks only" chain to be proposed by a leader. But multiple virtual entries may overlap as they link back to the previous slot.',
                    "Time Division",
                    "It's useful to consider leader rotation over PoH tick count as time division of the job of encoding state for the cluster. The following table presents the above tree of forks as a time-divided ledger.",
                    "leader slot",
                    "L1",
                    "L2",
                    "L3",
                    "L4",
                    "L5",
                    "data",
                    "E1",
                    "E2",
                    "E3",
                    "E4",
                    "E5",
                    "ticks since prev",
                    "L1",
                    "L2",
                    "L3",
                    "x",
                    "xx",
                    'Note that only data from leader L3 will be accepted during leader slot L3. Data from L3 may include "catchup" ticks back to a slot other than L2 if L3 did not observe L2\'s data. L4 and L5\'s transmissions include the "ticks to prev" PoH entries.',
                    "This arrangement of the network data streams permits nodes to save exactly this to the ledger for replay, restart, and checkpoints.",
                    "Leader's View",
                    "When a new leader begins a slot, it must first transmit any PoH (ticks) required to link the new slot with the most recently observed and voted slot. The fork the leader proposes would link the current slot to a previous fork that the leader has voted on with virtual ticks."
                ]
            ],
            [
                "Managing Forks",
                "managing-forks",
                [
                    "Managing Forks",
                    "The ledger is permitted to fork at slot boundaries. The resulting data structure forms a tree called a blockstore. When the validator interprets the blockstore, it must maintain state for each fork in the chain. We call each instance an active fork. It is the responsibility of a validator to weigh those forks, such that it may eventually select a fork.",
                    "A validator selects a fork by submiting a vote to a slot leader on that fork. The vote commits the validator for a duration of time called a lockout period. The validator is not permitted to vote on a different fork until that lockout period expires. Each subsequent vote on the same fork doubles the length of the lockout period. After some cluster-configured number of votes (currently 32), the length of the lockout period reaches what's called max lockout. Until the max lockout is reached, the validator has the option to wait until the lockout period is over and then vote on another fork. When it votes on another fork, it performs an operation called rollback, whereby the state rolls back in time to a shared checkpoint and then jumps forward to the tip of the fork that it just voted on. The maximum distance that a fork may roll back is called the rollback depth. Rollback depth is the number of votes required to achieve max lockout. Whenever a validator votes, any checkpoints beyond the rollback depth become unreachable. That is, there is no scenario in which the validator will need to roll back beyond rollback depth. It therefore may safely prune unreachable forks and squash all checkpoints beyond rollback depth into the root checkpoint.",
                    "Active Forks",
                    "An active fork is as a sequence of checkpoints that has a length at least one longer than the rollback depth. The shortest fork will have a length exactly one longer than the rollback depth. For example:",
                    "The following sequences are active forks:",
                    "Pruning and Squashing",
                    "A validator may vote on any checkpoint in the tree. In the diagram above, that's every node except the leaves of the tree. After voting, the validator prunes nodes that fork from a distance farther than the rollback depth and then takes the opportunity to minimize its memory usage by squashing any nodes it can into the root.",
                    "Starting from the example above, with a rollback depth of 2, consider a vote on 5 versus a vote on 6. First, a vote on 5:",
                    "The new root is 2, and any active forks that are not descendants from 2 are pruned.",
                    "Alternatively, a vote on 6:",
                    "The tree remains with a root of 1, since the active fork starting at 6 is only 2 checkpoints from the root."
                ]
            ],
            [
                "Turbine Block Propagation",
                "turbine-block-propagation",
                [
                    "Turbine Block Propagation",
                    "An Exzo Network cluster uses a multi-layer block propagation mechanism called Turbine to broadcast transaction shreds to all nodes with minimal amount of duplicate messages. The cluster divides itself into small collections of nodes, called neighborhoods. Each node is responsible for sharing any data it receives with the other nodes in its neighborhood, as well as propagating the data on to a small set of nodes in other neighborhoods. This way each node only has to communicate with a small number of nodes.",
                    "During its slot, the leader node distributes shreds between the validator nodes in the first neighborhood (layer 0). Each validator shares its data within its neighborhood, but also retransmits the shreds to one node in some neighborhoods in the next layer (layer 1). The layer-1 nodes each share their data with their neighborhood peers, and retransmit to nodes in the next layer, etc, until all nodes in the cluster have received all the shreds.",
                    "Neighborhood Assignment - Weighted Selection",
                    "In order for data plane fanout to work, the entire cluster must agree on how the cluster is divided into neighborhoods. To achieve this, all the recognized validator nodes (the TVU peers) are sorted by stake and stored in a list. This list is then indexed in different ways to figure out neighborhood boundaries and retransmit peers. For example, the leader will simply select the first nodes to make up layer 0. These will automatically be the highest stake holders, allowing the heaviest votes to come back to the leader first. Layer 0 and lower-layer nodes use the same logic to find their neighbors and next layer peers.",
                    "To reduce the possibility of attack vectors, each shred is transmitted over a random tree of neighborhoods. Each node uses the same set of nodes representing the cluster. A random tree is generated from the set for each shred using a seed derived from the leader id, slot and shred index.",
                    "Layer and Neighborhood Structure",
                    "The current leader makes its initial broadcasts to at most DATA_PLANE_FANOUT nodes. If this layer 0 is smaller than the number of nodes in the cluster, then the data plane fanout mechanism adds layers below. Subsequent layers follow these constraints to determine layer-capacity: Each neighborhood contains DATA_PLANE_FANOUT nodes. Layer 0 starts with 1 neighborhood with fanout nodes. The number of nodes in each additional layer grows by a factor of fanout.",
                    "As mentioned above, each node in a layer only has to broadcast its shreds to its neighbors and to exactly 1 node in some next-layer neighborhoods, instead of to every TVU peer in the cluster. A good way to think about this is, layer 0 starts with 1 neighborhood with fanout nodes, layer 1 adds fanout neighborhoods, each with fanout nodes and layer 2 will have fanout * number of nodes in layer 1 and so on.",
                    "This way each node only has to communicate with a maximum of 2 * DATA_PLANE_FANOUT - 1 nodes.",
                    "The following diagram shows how the Leader sends shreds with a fanout of 2 to Neighborhood 0 in Layer 0 and how the nodes in Neighborhood 0 share their data with each other.",
                    "The following diagram shows how Neighborhood 0 fans out to Neighborhoods 1 and 2.",
                    "Finally, the following diagram shows a two layer cluster with a fanout of 2.",
                    "Configuration Values",
                    "DATA_PLANE_FANOUT - Determines the size of layer 0. Subsequent layers grow by a factor of DATA_PLANE_FANOUT. The number of nodes in a neighborhood is equal to the fanout value. Neighborhoods will fill to capacity before new ones are added, i.e if a neighborhood isn't full, it must be the last one.",
                    "Currently, configuration is set when the cluster is launched. In the future, these parameters may be hosted on-chain, allowing modification on the fly as the cluster sizes change.",
                    "Calculating the required FEC rate",
                    "Turbine relies on retransmission of packets between validators. Due to retransmission, any network wide packet loss is compounded, and the probability of the packet failing to reach its destination increases on each hop. The FEC rate needs to take into account the network wide packet loss, and the propagation depth.",
                    "A shred group is the set of data and coding packets that can be used to reconstruct each other. Each shred group has a chance of failure, based on the likelyhood of the number of packets failing that exceeds the FEC rate. If a validator fails to reconstruct the shred group, then the block cannot be reconstructed, and the validator has to rely on repair to fixup the blocks.",
                    "The probability of the shred group failing can be computed using the binomial distribution. If the FEC rate is 16:4, then the group size is 20, and at least 4 of the shreds must fail for the group to fail. Which is equal to the sum of the probability of 4 or more trails failing out of 20.",
                    "Probability of a block succeeding in turbine:",
                    "Probability of packet failure: P = 1 - (1 - network_packet_loss_rate)^2",
                    "FEC rate: K:M",
                    "Number of trials: N = K + M",
                    "Shred group failure rate: S = SUM of i=0 -> M for binomial(prob_failure = P, trials = N, failures = i)",
                    "Shreds per block: G",
                    "Block success rate: B = (1 - S) ^ (G / N)",
                    "Binomial distribution for exactly i results with probability of P in N trials is defined as (N choose i) _ P^i _ (1 - P)^(N-i)",
                    "For example:",
                    "Network packet loss rate is 15%.",
                    "50k tps network generates 6400 shreds per second.",
                    "FEC rate increases the total shreds per block by the FEC ratio.",
                    "With a FEC rate: 16:4",
                    "G = 8000",
                    "P = 1 - 0.85 * 0.85 = 1 - 0.7225 = 0.2775",
                    "S = SUM of i=0 -> 4 for binomial(prob_failure = 0.2775, trials = 20, failures = i) = 0.689414",
                    "B = (1 - 0.689) ^ (8000 / 20) = 10^-203",
                    "With FEC rate of 16:16",
                    "G = 12800",
                    "S = SUM of i=0 -> 32 for binomial(prob_failure = 0.2775, trials = 64, failures = i) = 0.002132",
                    "B = (1 - 0.002132) ^ (12800 / 32) = 0.42583",
                    "With FEC rate of 32:32",
                    "G = 12800",
                    "S = SUM of i=0 -> 32 for binomial(prob_failure = 0.2775, trials = 64, failures = i) = 0.000048",
                    "B = (1 - 0.000048) ^ (12800 / 64) = 0.99045",
                    "Neighborhoods",
                    "The following diagram shows how two neighborhoods in different layers interact. To cripple a neighborhood, enough nodes (erasure codes +1) from the neighborhood above need to fail. Since each neighborhood receives shreds from multiple nodes in a neighborhood in the upper layer, we'd need a big network failure in the upper layers to end up with incomplete data."
                ]
            ],
            [
                "Secure Vote Signing",
                "secure-vote-signing",
                [
                    "Secure Vote Signing",
                    "A validator receives entries from the current leader and submits votes confirming those entries are valid. This vote submission presents a security challenge, because forged votes that violate consensus rules could be used to slash the validator's stake.",
                    "The validator votes on its chosen fork by submitting a transaction that uses an asymmetric key to sign the result of its validation work. Other entities can verify this signature using the validator's public key. If the validator's key is used to sign incorrect data (e.g. votes on multiple forks of the ledger), the node's stake or its resources could be compromised.",
                    "Exzo Network addresses this risk by splitting off a separate vote signer service that evaluates each vote to ensure it does not violate a slashing condition.",
                    "Validators, Vote Signers, and Stakeholders",
                    'When a validator receives multiple blocks for the same slot, it tracks all possible forks until it can determine a "best" one. A validator selects the best fork by submitting a vote to it, using a vote signer to minimize the possibility of its vote inadvertently violating a consensus rule and getting a stake slashed.',
                    "A vote signer evaluates the vote proposed by the validator and signs the vote only if it does not violate a slashing condition. A vote signer only needs to maintain minimal state regarding the votes it signed and the votes signed by the rest of the cluster. It doesn't need to process a full set of transactions.",
                    "A stakeholder is an identity that has control of the staked capital. The stakeholder can delegate its stake to the vote signer. Once a stake is delegated, the vote signer's votes represent the voting weight of all the delegated stakes, and produce rewards for all the delegated stakes.",
                    "Currently, there is a 1:1 relationship between validators and vote signers, and stakeholders delegate their entire stake to a single vote signer.",
                    "Signing service",
                    "The vote signing service consists of a JSON RPC server and a request processor. At startup, the service starts the RPC server at a configured port and waits for validator requests. It expects the following type of requests:",
                    "Register a new validator node",
                    "The request must contain validator's identity (public key)",
                    "The request must be signed with the validator's private key",
                    "The service drops the request if signature of the request cannot be verified",
                    "The service creates a new voting asymmetric key for the validator, and returns the public key as a response",
                    "If a validator tries to register again, the service returns the public key from the pre-existing keypair",
                    "Sign a vote",
                    "The request must contain a voting transaction and all verification data",
                    "The request must be signed with the validator's private key",
                    "The service drops the request if signature of the request cannot be verified",
                    "The service verifies the voting data",
                    "The service returns a signature for the transaction",
                    "Validator voting",
                    'A validator node, at startup, creates a new vote account and registers it with the cluster by submitting a new "vote register" transaction. The other nodes on the cluster process this transaction and include the new validator in the active set. Subsequently, the validator submits a "new vote" transaction signed with the validator\'s voting private key on each voting event.',
                    "Configuration",
                    "The validator node is configured with the signing service's network endpoint (IP/Port).",
                    "Registration",
                    'At startup, the validator registers itself with its signing service using JSON RPC. The RPC call returns the voting public key for the validator node. The validator creates a new "vote register" transaction including this public key, and submits it to the cluster.',
                    "Vote Collection",
                    "The validator looks up the votes submitted by all the nodes in the cluster for the last voting period. This information is submitted to the signing service with a new vote signing request.",
                    "New Vote Signing",
                    'The validator creates a "new vote" transaction and sends it to the signing service using JSON RPC. The RPC request also includes the vote verification data. On success, the RPC call returns the signature for the vote. On failure, RPC call returns the failure code.'
                ]
            ],
            [
                "Stake Delegation and Rewards",
                "stake-delegation-and-rewards",
                [
                    "Stake Delegation and Rewards",
                    "Stakers are rewarded for helping to validate the ledger. They do this by delegating their stake to validator nodes. Those validators do the legwork of replaying the ledger and sending votes to a per-node vote account to which stakers can delegate their stakes. The rest of the cluster uses those stake-weighted votes to select a block when forks arise. Both the validator and staker need some economic incentive to play their part. The validator needs to be compensated for its hardware and the staker needs to be compensated for the risk of getting its stake slashed. The economics are covered in staking rewards. This section, on the other hand, describes the underlying mechanics of its implementation.",
                    "Basic Design",
                    "The general idea is that the validator owns a Vote account. The Vote account tracks validator votes, counts validator generated credits, and provides any additional validator specific state. The Vote account is not aware of any stakes delegated to it and has no staking weight.",
                    "A separate Stake account (created by a staker) names a Vote account to which the stake is delegated. Rewards generated are proportional to the amount of lamports staked. The Stake account is owned by the staker only. Some portion of the lamports stored in this account are the stake.",
                    "Passive Delegation",
                    "Any number of Stake accounts can delegate to a single Vote account without an interactive action from the identity controlling the Vote account or submitting votes to the account.",
                    "The total stake allocated to a Vote account can be calculated by the sum of all the Stake accounts that have the Vote account pubkey as the StakeState::Stake::voter_pubkey.",
                    "Vote and Stake accounts",
                    "The rewards process is split into two on-chain programs. The Vote program solves the problem of making stakes slashable. The Stake program acts as custodian of the rewards pool and provides for passive delegation. The Stake program is responsible for paying rewards to staker and voter when shown that a staker's delegate has participated in validating the ledger.",
                    "VoteState",
                    "VoteState is the current state of all the votes the validator has submitted to the network. VoteState contains the following state information:",
                    "votes - The submitted votes data structure.",
                    "credits - The total number of rewards this Vote program has generated over its lifetime.",
                    "root_slot - The last slot to reach the full lockout commitment necessary for rewards.",
                    "commission - The commission taken by this VoteState for any rewards claimed by staker's Stake accounts. This is the percentage ceiling of the reward.",
                    "Account::lamports - The accumulated lamports from the commission. These do not count as stakes.",
                    "authorized_voter - Only this identity is authorized to submit votes. This field can only modified by this identity.",
                    "node_pubkey - The Exzo Network node that votes in this account.",
                    "authorized_withdrawer - the identity of the entity in charge of the lamports of this account, separate from the account's address and the authorized vote signer.",
                    "VoteInstruction::Initialize(VoteInit)",
                    "account[0] - RW - The VoteState.",
                    "VoteInit carries the new vote account's node_pubkey, authorized_voter, authorized_withdrawer, and commission.",
                    "other VoteState members defaulted.",
                    "VoteInstruction::Authorize(Pubkey, VoteAuthorize)",
                    "Updates the account with a new authorized voter or withdrawer, according to the VoteAuthorize parameter (Voter or Withdrawer). The transaction must be signed by the Vote account's current authorized_voter or authorized_withdrawer.",
                    "account[0] - RW - The VoteState. VoteState::authorized_voter or authorized_withdrawer is set to Pubkey.",
                    "VoteInstruction::Vote(Vote)",
                    "account[0] - RW - The VoteState. VoteState::lockouts and VoteState::credits are updated according to voting lockout rules see Tower BFT.",
                    "account[1] - RO - sysvar::slot_hashes A list of some N most recent slots and their hashes for the vote to be verified against.",
                    "account[2] - RO - sysvar::clock The current network time, expressed in slots, epochs.",
                    "StakeState",
                    "A StakeState takes one of four forms, StakeState::Uninitialized, StakeState::Initialized, StakeState::Stake, and StakeState::RewardsPool. Only the first three forms are used in staking, but only StakeState::Stake is interesting. All RewardsPools are created at genesis.",
                    "StakeState::Stake",
                    "StakeState::Stake is the current delegation preference of the staker and contains the following state information:",
                    "Account::lamports - The lamports available for staking.",
                    "stake - the staked amount (subject to warmup and cooldown) for generating rewards, always less than or equal to Account::lamports.",
                    "voter_pubkey - The pubkey of the VoteState instance the lamports are delegated to.",
                    "credits_observed - The total credits claimed over the lifetime of the program.",
                    "activated - the epoch at which this stake was activated/delegated. The full stake will be counted after warmup.",
                    "deactivated - the epoch at which this stake was de-activated, some cooldown epochs are required before the account is fully deactivated, and the stake available for withdrawal.",
                    "authorized_staker - the pubkey of the entity that must sign delegation, activation, and deactivation transactions.",
                    "authorized_withdrawer - the identity of the entity in charge of the lamports of this account, separate from the account's address, and the authorized staker.",
                    "StakeState::RewardsPool",
                    "To avoid a single network-wide lock or contention in redemption, 256 RewardsPools are part of genesis under pre-determined keys, each with std::u64::MAX credits to be able to satisfy redemptions according to point value.",
                    "The Stakes and the RewardsPool are accounts that are owned by the same Stake program.",
                    "StakeInstruction::DelegateStake",
                    "The Stake account is moved from Initialized to StakeState::Stake form, or from a deactivated (i.e. fully cooled-down) StakeState::Stake to activated StakeState::Stake. This is how stakers choose the vote account and validator node to which their stake account lamports are delegated. The transaction must be signed by the stake's authorized_staker.",
                    "account[0] - RW - The StakeState::Stake instance. StakeState::Stake::credits_observed is initialized to VoteState::credits, StakeState::Stake::voter_pubkey is initialized to account[1]. If this is the initial delegation of stake, StakeState::Stake::stake is initialized to the account's balance in lamports, StakeState::Stake::activated is initialized to the current Bank epoch, and StakeState::Stake::deactivated is initialized to std::u64::MAX",
                    "account[1] - R - The VoteState instance.",
                    "account[2] - R - sysvar::clock account, carries information about current Bank epoch.",
                    "account[3] - R - sysvar::stakehistory account, carries information about stake history.",
                    "account[4] - R - stake::Config account, carries warmup, cooldown, and slashing configuration.",
                    "StakeInstruction::Authorize(Pubkey, StakeAuthorize)",
                    "Updates the account with a new authorized staker or withdrawer, according to the StakeAuthorize parameter (Staker or Withdrawer). The transaction must be by signed by the Stakee account's current authorized_staker or authorized_withdrawer. Any stake lock-up must have expired, or the lock-up custodian must also sign the transaction.",
                    "account[0] - RW - The StakeState.",
                    "StakeState::authorized_staker or authorized_withdrawer is set to to Pubkey.",
                    "StakeInstruction::Deactivate",
                    "A staker may wish to withdraw from the network. To do so he must first deactivate his stake, and wait for cooldown. The transaction must be signed by the stake's authorized_staker.",
                    "account[0] - RW - The StakeState::Stake instance that is deactivating.",
                    "account[1] - R - sysvar::clock account from the Bank that carries current epoch.",
                    "StakeState::Stake::deactivated is set to the current epoch + cooldown. The account's stake will ramp down to zero by that epoch, and Account::lamports will be available for withdrawal.",
                    "StakeInstruction::Withdraw(u64)",
                    "Lamports build up over time in a Stake account and any excess over activated stake can be withdrawn. The transaction must be signed by the stake's authorized_withdrawer.",
                    "account[0] - RW - The StakeState::Stake from which to withdraw.",
                    "account[1] - RW - Account that should be credited with the withdrawn lamports.",
                    "account[2] - R - sysvar::clock account from the Bank that carries current epoch, to calculate stake.",
                    "account[3] - R - sysvar::stake_history account from the Bank that carries stake warmup/cooldown history.",
                    "Benefits of the design",
                    "Single vote for all the stakers.",
                    "Clearing of the credit variable is not necessary for claiming rewards.",
                    "Each delegated stake can claim its rewards independently.",
                    "Commission for the work is deposited when a reward is claimed by the delegated stake.",
                    "Example Callflow",
                    "Staking Rewards",
                    "The specific mechanics and rules of the validator rewards regime is outlined here. Rewards are earned by delegating stake to a validator that is voting correctly. Voting incorrectly exposes that validator's stakes to slashing.",
                    "Basics",
                    "The network pays rewards from a portion of network inflation. The number of lamports available to pay rewards for an epoch is fixed and must be evenly divided among all staked nodes according to their relative stake weight and participation. The weighting unit is called a point.",
                    "Rewards for an epoch are not available until the end of that epoch.",
                    "At the end of each epoch, the total number of points earned during the epoch is summed and used to divide the rewards portion of epoch inflation to arrive at a point value. This value is recorded in the bank in a sysvar that maps epochs to point values.",
                    "During redemption, the stake program counts the points earned by the stake for each epoch, multiplies that by the epoch's point value, and transfers lamports in that amount from a rewards account into the stake and vote accounts according to the vote account's commission setting.",
                    "Economics",
                    "Point value for an epoch depends on aggregate network participation. If participation in an epoch drops off, point values are higher for those that do participate.",
                    "Earning credits",
                    "Validators earn one vote credit for every correct vote that exceeds maximum lockout, i.e. every time the validator's vote account retires a slot from its lockout list, making that vote a root for the node.",
                    "Stakers who have delegated to that validator earn points in proportion to their stake. Points earned is the product of vote credits and stake.",
                    "Stake warmup, cooldown, withdrawal",
                    'Stakes, once delegated, do not become effective immediately. They must first pass through a warmup period. During this period some portion of the stake is considered "effective", the rest is considered "activating". Changes occur on epoch boundaries.',
                    "The stake program limits the rate of change to total network stake, reflected in the stake program's config::warmup_rate (set to 25% per epoch in the current implementation).",
                    "The amount of stake that can be warmed up each epoch is a function of the previous epoch's total effective stake, total activating stake, and the stake program's configured warmup rate.",
                    'Cooldown works the same way. Once a stake is deactivated, some part of it is considered "effective", and also "deactivating". As the stake cools down, it continues to earn rewards and be exposed to slashing, but it also becomes available for withdrawal.',
                    "Bootstrap stakes are not subject to warmup.",
                    'Rewards are paid against the "effective" portion of the stake for that epoch.',
                    "Warmup example",
                    "Consider the situation of a single stake of 1,000 activated at epoch N, with network warmup rate of 20%, and a quiescent total network stake at epoch N of 2,000.",
                    "At epoch N+1, the amount available to be activated for the network is 400 (20% of 2000), and at epoch N, this example stake is the only stake activating, and so is entitled to all of the warmup room available.",
                    "epoch",
                    "effective",
                    "activating",
                    "total effective",
                    "total activating",
                    "N-1",
                    "\xa0",
                    "\xa0",
                    "2,000",
                    "0",
                    "N",
                    "0",
                    "1,000",
                    "2,000",
                    "1,000",
                    "N+1",
                    "400",
                    "600",
                    "2,400",
                    "600",
                    "N+2",
                    "880",
                    "120",
                    "2,880",
                    "120",
                    "N+3",
                    "1000",
                    "0",
                    "3,000",
                    "0",
                    "Were 2 stakes (X and Y) to activate at epoch N, they would be awarded a portion of the 20% in proportion to their stakes. At each epoch effective and activating for each stake is a function of the previous epoch's state.",
                    "epoch",
                    "X eff",
                    "X act",
                    "Y eff",
                    "Y act",
                    "total effective",
                    "total activating",
                    "N-1",
                    "\xa0",
                    "\xa0",
                    "\xa0",
                    "\xa0",
                    "2,000",
                    "0",
                    "N",
                    "0",
                    "1,000",
                    "0",
                    "200",
                    "2,000",
                    "1,200",
                    "N+1",
                    "333",
                    "667",
                    "67",
                    "133",
                    "2,400",
                    "800",
                    "N+2",
                    "733",
                    "267",
                    "146",
                    "54",
                    "2,880",
                    "321",
                    "N+3",
                    "1000",
                    "0",
                    "200",
                    "0",
                    "3,200",
                    "0",
                    "Withdrawal",
                    "Only lamports in excess of effective+activating stake may be withdrawn at any time. This means that during warmup, effectively no stake can be withdrawn. During cooldown, any tokens in excess of effective stake may be withdrawn (activating == 0). Because earned rewards are automatically added to stake, withdrawal is generally only possible after deactivation.",
                    "Lock-up",
                    "Stake accounts support the notion of lock-up, wherein the stake account balance is unavailable for withdrawal until a specified time. Lock-up is specified as an epoch height, i.e. the minimum epoch height that must be reached by the network before the stake account balance is available for withdrawal, unless the transaction is also signed by a specified custodian. This information is gathered when the stake account is created, and stored in the Lockup field of the stake account's state. Changing the authorized staker or withdrawer is also subject to lock-up, as such an operation is effectively a transfer."
                ]
            ],
            [
                "Anatomy of a Validator",
                "anatomy-of-a-validator",
                [
                    "Pipelining",
                    "The validators make extensive use of an optimization common in CPU design, called pipelining. Pipelining is the right tool for the job when there's a stream of input data that needs to be processed by a sequence of steps, and there's different hardware responsible for each. The quintessential example is using a washer and dryer to wash/dry/fold several loads of laundry. Washing must occur before drying and drying before folding, but each of the three operations is performed by a separate unit. To maximize efficiency, one creates a pipeline of stages. We'll call the washer one stage, the dryer another, and the folding process a third. To run the pipeline, one adds a second load of laundry to the washer just after the first load is added to the dryer. Likewise, the third load is added to the washer after the second is in the dryer and the first is being folded. In this way, one can make progress on three loads of laundry simultaneously. Given infinite loads, the pipeline will consistently complete a load at the rate of the slowest stage in the pipeline.",
                    "Pipelining in the Validator",
                    "The validator contains two pipelined processes, one used in leader mode called the TPU and one used in validator mode called the TVU. In both cases, the hardware being pipelined is the same, the network input, the GPU cards, the CPU cores, writes to disk, and the network output. What it does with that hardware is different. The TPU exists to create ledger entries whereas the TVU exists to validate them."
                ]
            ],
            [
                "TPU",
                "tpu",
                [
                    "TPU Block Diagram"
                ]
            ],
            [
                "TVU",
                "tvu",
                [
                    "TVU Block Diagram"
                ]
            ],
            [
                "Retransmit Stage",
                "retransmit-stage",
                [
                    "Retransmit Block Diagram"
                ]
            ],
            [
                "Blockstore",
                "blockstore",
                [
                    "After a block reaches finality, all blocks from that one on down to the genesis block form a linear chain with the familiar name blockchain. Until that point, however, the validator must maintain all potentially valid chains, called forks. The process by which forks naturally form as a result of leader rotation is described in fork generation. The blockstore data structure described here is how a validator copes with those forks until blocks are finalized.",
                    "The blockstore allows a validator to record every shred it observes on the network, in any order, as long as the shred is signed by the expected leader for a given slot.",
                    "Shreds are moved to a fork-able key space the tuple of leader slot + shred index (within the slot). This permits the skip-list structure of the Exzo Network protocol to be stored in its entirety, without a-priori choosing which fork to follow, which Entries to persist or when to persist them.",
                    "Repair requests for recent shreds are served out of RAM or recent files and out of deeper storage for less recent shreds, as implemented by the store backing Blockstore.",
                    "Functionalities of Blockstore",
                    "Persistence: the Blockstore lives in the front of the nodes verification pipeline, right behind network receive and signature verification. If the shred received is consistent with the leader schedule (i.e. was signed by the leader for the indicated slot), it is immediately stored.",
                    "Repair: repair is the same as window repair above, but able to serve any shred that's been received. Blockstore stores shreds with signatures, preserving the chain of origination.",
                    "Forks: Blockstore supports random access of shreds, so can support a validator's need to rollback and replay from a Bank checkpoint.",
                    "Restart: with proper pruning/culling, the Blockstore can be replayed by ordered enumeration of entries from slot 0. The logic of the replay stage (i.e. dealing with forks) will have to be used for the most recent entries in the Blockstore.",
                    "Blockstore Design",
                    "Entries in the Blockstore are stored as key-value pairs, where the key is the concatenated slot index and shred index for an entry, and the value is the entry data. Note shred indexes are zero-based for each slot (i.e. they're slot-relative).",
                    "The Blockstore maintains metadata for each slot, in the SlotMeta struct containing:",
                    "slot_index - The index of this slot",
                    "num_blocks - The number of blocks in the slot (used for chaining to a previous slot)",
                    "consumed - The highest shred index n, such that for all m < n, there exists a shred in this slot with shred index equal to n (i.e. the highest consecutive shred index).",
                    "received - The highest received shred index for the slot",
                    "next_slots - A list of future slots this slot could chain to. Used when rebuilding",
                    "the ledger to find possible fork points.",
                    "last_index - The index of the shred that is flagged as the last shred for this slot. This flag on a shred will be set by the leader for a slot when they are transmitting the last shred for a slot.",
                    'is_rooted - True iff every block from 0...slot forms a full sequence without any holes. We can derive is_rooted for each slot with the following rules. Let slot(n) be the slot with index n, and slot(n).is_full() is true if the slot with index n has all the ticks expected for that slot. Let is_rooted(n) be the statement that "the slot(n).is_rooted is true". Then:',
                    "is_rooted(0) is_rooted(n+1) iff (is_rooted(n) and slot(n).is_full()",
                    "Chaining - When a shred for a new slot x arrives, we check the number of blocks (num_blocks) for that new slot (this information is encoded in the shred). We then know that this new slot chains to slot x - num_blocks.",
                    'Subscriptions - The Blockstore records a set of slots that have been "subscribed" to. This means entries that chain to these slots will be sent on the Blockstore channel for consumption by the ReplayStage. See the Blockstore APIs for details.',
                    "Update notifications - The Blockstore notifies listeners when slot(n).is_rooted is flipped from false to true for any n.",
                    "Blockstore APIs",
                    "The Blockstore offers a subscription based API that ReplayStage uses to ask for entries it's interested in. The entries will be sent on a channel exposed by the Blockstore. These subscription API's are as follows: 1. fn get_slots_since(slot_indexes: &[u64]) -> Vec<SlotMeta>: Returns new slots connecting to any element of the list slot_indexes.",
                    "fn get_slot_entries(slot_index: u64, entry_start_index: usize, max_entries: Option<u64>) -> Vec<Entry>: Returns the entry vector for the slot starting with entry_start_index, capping the result at max if max_entries == Some(max), otherwise, no upper limit on the length of the return vector is imposed.",
                    "Note: Cumulatively, this means that the replay stage will now have to know when a slot is finished, and subscribe to the next slot it's interested in to get the next set of entries. Previously, the burden of chaining slots fell on the Blockstore.",
                    "Interfacing with Bank",
                    "The bank exposes to replay stage:",
                    "prev_hash: which PoH chain it's working on as indicated by the hash of the last",
                    "entry it processed",
                    "tick_height: the ticks in the PoH chain currently being verified by this",
                    "bank",
                    "votes: a stack of records that contain: 1. prev_hashes: what anything after this vote must chain to in PoH 2. tick_height: the tick height at which this vote was cast 3. lockout period: how long a chain must be observed to be in the ledger to",
                    "be able to be chained below this vote",
                    "Replay stage uses Blockstore APIs to find the longest chain of entries it can hang off a previous vote. If that chain of entries does not hang off the latest vote, the replay stage rolls back the bank to that vote and replays the chain from there.",
                    "Pruning Blockstore",
                    "Once Blockstore entries are old enough, representing all the possible forks becomes less useful, perhaps even problematic for replay upon restart. Once a validator's votes have reached max lockout, however, any Blockstore contents that are not on the PoH chain for that vote for can be pruned, expunged."
                ]
            ],
            [
                "Gossip Service",
                "gossip-service",
                [
                    "The Gossip Service acts as a gateway to nodes in the control plane. Validators use the service to ensure information is available to all other nodes in a cluster. The service broadcasts information using a gossip protocol."
                ]
            ],
            [
                "Gossip Overview",
                "gossip-overview",
                [
                    "Nodes continuously share signed data objects among themselves in order to manage a cluster. For example, they share their contact information, ledger height, and votes.",
                    'Every tenth of a second, each node sends a "push" message and/or a "pull" message. Push and pull messages may elicit responses, and push messages may be forwarded on to others in the cluster.',
                    "Gossip runs on a well-known UDP/IP port or a port in a well-known range. Once a cluster is bootstrapped, nodes advertise to each other where to find their gossip endpoint (a socket address)."
                ]
            ],
            [
                "Gossip Records",
                "gossip-records",
                [
                    "Records shared over gossip are arbitrary, but signed and versioned (with a timestamp) as needed to make sense to the node receiving them. If a node receives two records from the same source, it updates its own copy with the record with the most recent timestamp."
                ]
            ],
            [
                "Gossip Service Interface",
                "gossip-service-interface",
                [
                    "Push Message",
                    "A node sends a push message to tells the cluster it has information to share. Nodes send push messages to PUSH_FANOUT push peers.",
                    "Upon receiving a push message, a node examines the message for:",
                    "Duplication: if the message has been seen before, the node drops the message and may respond with PushMessagePrune if forwarded from a low staked node",
                    "New data: if the message is new to the node",
                    "Stores the new information with an updated version in its cluster info and purges any previous older value",
                    "Stores the message in pushed_once (used for detecting duplicates, purged after PUSH_MSG_TIMEOUT * 5 ms)",
                    "Retransmits the messages to its own push peers",
                    "Expiration: nodes drop push messages that are older than PUSH_MSG_TIMEOUT",
                    "Push Peers, Prune Message",
                    "A nodes selects its push peers at random from the active set of known peers. The node keeps this selection for a relatively long time. When a prune message is received, the node drops the push peer that sent the prune. Prune is an indication that there is another, higher stake weighted path to that node than direct push.",
                    "The set of push peers is kept fresh by rotating a new node into the set every PUSH_MSG_TIMEOUT/2 milliseconds.",
                    "Pull Message",
                    "A node sends a pull message to ask the cluster if there is any new information. A pull message is sent to a single peer at random and comprises a Bloom filter that represents things it already has. A node receiving a pull message iterates over its values and constructs a pull response of things that miss the filter and would fit in a message.",
                    "A node constructs the pull Bloom filter by iterating over current values and recently purged values.",
                    "A node handles items in a pull response the same way it handles new data in a push message."
                ]
            ],
            [
                "Purging",
                "purging",
                [
                    "Nodes retain prior versions of values (those updated by a pull or push) and expired values (those older than GOSSIP_PULL_CRDS_TIMEOUT_MS) in purged_values (things I recently had). Nodes purge purged_values that are older than 5 * GOSSIP_PULL_CRDS_TIMEOUT_MS."
                ]
            ],
            [
                "Eclipse Attacks",
                "eclipse-attacks",
                [
                    "An eclipse attack is an attempt to take over the set of node connections with adversarial endpoints.",
                    "This is relevant to our implementation in the following ways.",
                    "Pull messages select a random node from the network. An eclipse attack on pull would require an attacker to influence the random selection in such a way that only adversarial nodes are selected for pull.",
                    "Push messages maintain an active set of nodes and select a random fanout for every push message. An eclipse attack on push would influence the active set selection, or the random fanout selection.",
                    "Time and Stake based weights",
                    "Weights are calculated based on time since last picked and the natural log of the stake weight.",
                    "Taking the ln of the stake weight allows giving all nodes a fairer chance of network coverage in a reasonable amount of time. It helps normalize the large possible stake weight differences between nodes. This way a node with low stake weight, compared to a node with large stake weight will only have to wait a few multiples of ln(stake) seconds before it gets picked.",
                    "There is no way for an adversary to influence these parameters.",
                    "Pull Message",
                    "A node is selected as a pull target based on the weights described above.",
                    "Push Message",
                    "A prune message can only remove an adversary from a potential connection.",
                    "Just like pull message, nodes are selected into the active set based on weights."
                ]
            ],
            [
                "Notable differences from PlumTree",
                "notable-differences-from-plum-tree",
                [
                    "The active push protocol described here is based on Plum Tree. The main differences are:",
                    "Push messages have a wallclock that is signed by the originator. Once the wallclock expires the message is dropped. A hop limit is difficult to implement in an adversarial setting.",
                    "Lazy Push is not implemented because its not obvious how to prevent an adversary from forging the message fingerprint. A naive approach would allow an adversary to be prioritized for pull based on their input."
                ]
            ],
            [
                "The Runtime",
                "the-runtime",
                [
                    "The runtime is a concurrent transaction processor. Transactions specify their data dependencies upfront and dynamic memory allocation is explicit. By separating program code from the state it operates on, the runtime is able to choreograph concurrent access. Transactions accessing only read-only accounts are executed in parallel whereas transactions accessing writable accounts are serialized. The runtime interacts with the program through an entrypoint with a well-defined interface. The data stored in an account is an opaque type, an array of bytes. The program has full control over its contents.",
                    "The transaction structure specifies a list of public keys and signatures for those keys and a sequential list of instructions that will operate over the states associated with the account keys. For the transaction to be committed all the instructions must execute successfully; if any abort the whole transaction fails to commit.",
                    "Account Structure",
                    "Accounts maintain a lamport balance and program-specific memory."
                ]
            ],
            [
                "Transaction Engine",
                "transaction-engine",
                [
                    "The engine maps public keys to accounts and routes them to the program's entrypoint.",
                    "Execution",
                    "Transactions are batched and processed in a pipeline. The TPU and TVU follow a slightly different path. The TPU runtime ensures that PoH record occurs before memory is committed.",
                    "The TVU runtime ensures that PoH verification occurs before the runtime processes any transactions.",
                    "At the execute stage, the loaded accounts have no data dependencies, so all the programs can be executed in parallel.",
                    "The runtime enforces the following rules:",
                    "Only the owner program may modify the contents of an account. This means that upon assignment data vector is guaranteed to be zero.",
                    "Total balances on all the accounts is equal before and after execution of a transaction.",
                    "After the transaction is executed, balances of read-only accounts must be equal to the balances before the transaction.",
                    "All instructions in the transaction executed atomically. If one fails, all account modifications are discarded.",
                    "Execution of the program involves mapping the program's public key to an entrypoint which takes a pointer to the transaction, and an array of loaded accounts.",
                    "SystemProgram Interface",
                    "CreateAccount - This allows the user to create an account with an allocated data array and assign it to a Program.",
                    "CreateAccountWithSeed - Same as CreateAccount, but the new account's address is derived from",
                    "the funding account's pubkey,",
                    "a mnemonic string (seed), and",
                    "the pubkey of the Program",
                    "Assign - Allows the user to assign an existing account to a program.",
                    "Transfer - Transfers lamports between accounts.",
                    "Program State Security",
                    "For blockchain to function correctly, the program code must be resilient to user inputs. That is why in this design the program specific code is the only code that can change the state of the data byte array in the Accounts that are assigned to it. It is also the reason why Assign or CreateAccount must zero out the data. Otherwise there would be no possible way for the program to distinguish the recently assigned account data from a natively generated state transition without some additional metadata from the runtime to indicate that this memory is assigned instead of natively generated.",
                    "To pass messages between programs, the receiving program must accept the message and copy the state over. But in practice a copy isn't needed and is undesirable. The receiving program can read the state belonging to other Accounts without copying it, and during the read it has a guarantee of the sender program's state.",
                    "Notes",
                    "There is no dynamic memory allocation. Client's need to use CreateAccount instructions to create memory before passing it to another program. This instruction can be composed into a single transaction with the call to the program itself.",
                    "CreateAccount and Assign guarantee that when account is assigned to the program, the Account's data is zero initialized.",
                    "Transactions that assign an account to a program or allocate space must be signed by the Account address' private key unless the Account is being created by CreateAccountWithSeed, in which case there is no corresponding private key for the account's address/pubkey.",
                    "Once assigned to program an Account cannot be reassigned.",
                    "Runtime guarantees that a program's code is the only code that can modify Account data that the Account is assigned to.",
                    "Runtime guarantees that the program can only spend lamports that are in accounts that are assigned to it.",
                    "Runtime guarantees the balances belonging to accounts are balanced before and after the transaction.",
                    "Runtime guarantees that instructions all executed successfully when a transaction is committed."
                ]
            ],
            [
                "Future Work",
                "future-work",
                [
                    "Continuations and Signals for long running Transactions"
                ]
            ]
        ]
    },
    {
        "url": "/clusters",
        "sections": [
            [
                "Clusters ",
                null,
                [
                    "Exzo Network maintains several different clusters with different purposes.",
                    "Before you begin make sure you have first installed the Exzo Network command line tools",
                    "Explorers:",
                    "http://native.exzonetwork.com/ Native explorer.",
                    "http://evmexplorer.exzonetwork.com/ EVM mainnet explorer.",
                    "http://evmexplorer.testnet.exzonetwork.com/ EVM testnet explorer."
                ]
            ],
            [
                "Testnet",
                "testnet",
                [
                    "Space",
                    "Native",
                    "RPC",
                    "https://api.testnet.exzo.network",
                    "Websocket",
                    "wss://api.testnet.exzo.network",
                    "Block Explorer",
                    "exzo airdrop 1 -u https://api.testnet.exzo.network --faucet-host\r\n        airdrop.testnet.exzo.network",
                    "Faucet CLI",
                    "exzo airdrop 1 -u https://api.testnet.exzo.network --faucet-host\r\n        airdrop.testnet.exzo.network",
                    "Space",
                    "EVM",
                    "chainId",
                    "2370",
                    "ETH RPC",
                    "https://evm.testnet.exzoscan.io/rpc",
                    "ETH Websocket",
                    "wss://api.testnet.exzoscan.io/",
                    "Block Explorer",
                    "https://evmexplorer.testnet.exzoscan.io",
                    "Block Explorer",
                    "https://explorer.testnet.exzoscan.io (V-encoded Legacy addresses)",
                    "Faucet bot",
                    "https://t.me/exzo_network_faucet_bot",
                    "Testnet serves as a playground for anyone who wants to take Exzo Network for a test drive, as a user, token holder, app developer, or validator.",
                    "Application developers should target Testnet.",
                    "Potential validators should first target Testnet.",
                    "Key differences between Testnet and Mainnet:",
                    "Testnet tokens are not real",
                    "Testnet includes a token faucet for airdrops for application testing",
                    "Testnet may be subject to ledger resets",
                    "Testnet typically runs a newer software version than Mainnet Beta",
                    "Gossip entrypoint for Testnet: bootstrap.testnet.exzonetwork.com:8001"
                ]
            ],
            [
                "Mainnet",
                "mainnet",
                [
                    "Space",
                    "Native",
                    "RPC",
                    "https://api.exzoscan.io",
                    "Websocket",
                    "wss://api.exzoscan.io",
                    "Block Explorer",
                    "https://native.exzoscan.io",
                    "Shred version",
                    "17211",
                    "Genesis hash",
                    "EsZtukC1MYxB2tohUTdigaUdy1k6kCU8HKS8LEK99iJY",
                    "Space",
                    "EVM",
                    "chainId",
                    "1229",
                    "ETH RPC",
                    "https://evm-explorer.exzoscan.io/rpc",
                    "ETH Websocket",
                    "wss://api.exzoscan.io/",
                    "Block Explorer",
                    "https://evm.exzoscan.io",
                    "Block Explorer",
                    "https://evm-explorer.exzoscan.io/ (V-encoded Legacy addresses)",
                    "Gossip entrypoint for Mainnet: bootstrap.exzoscan.io:8001",
                    "Shred version: 17211",
                    "Some of the popular nodes:",
                    "78rvyxYJAUXGaZHJWyz7Yx81ribpAYvwupVuF9CugGws, FSZbHLPerYngGGwgWbXHtqTLRvLmgKVeUZCKwbFttWng, Eydu1kJNyPQNKtYrH4dqJJRxrxHuHtbXJCjgo6pSGSjf, QnQHuNAYMd7jaUJ61Pchi9bD7NbaZ4jxZ4cbdEaYMWF, Fxb6TgvScYJxjHjSpTr6a4xgLULLQSh8uhAexG5tzFJ6",
                    "Example exzo command-line configuration",
                    "Example exzo-validator command-line",
                    "The --trusted-validators is operated by Exzo Network",
                    "The Exzo Network git repository contains all the scripts you might need to spin up your own local testnet. Depending on what you're looking to achieve, you may want to run a different variation, as the full-fledged, performance-enhanced multinode testnet is considerably more complex to set up than a Rust-only, singlenode testnode. If you are looking to develop high-level features, such as experimenting with smart contracts, save yourself some setup headaches and stick to the Rust-only singlenode demo. If you're doing performance optimization of the transaction pipeline, consider the enhanced singlenode demo. If you're doing consensus work, you'll need at least a Rust-only multinode demo. If you want to reproduce our TPS metrics, run the enhanced multinode demo.",
                    "For all four variations, you'd need the latest Rust toolchain and the Exzo Network source code:",
                    "First, setup Rust, Cargo and system packages as described in the Exzo Network README-",
                    "Now checkout the code from GitHub:",
                    "The demo code is sometimes broken between releases as we add new low-level features, so if this is your first time running the demo, you'll improve your odds of success if you check out the latest release before proceeding:",
                    "Configuration Setup",
                    "Ensure important programs such as the vote program are built before any nodes are started. Note that we are using the release build here for good performance. If you want the debug build, use just cargo build and omit the NDEBUG=1 part of the command.",
                    "The network is initialized with a genesis ledger generated by running the following script.",
                    "Faucet",
                    'In order for the validators and clients to work, we\'ll need to spin up a faucet to give out some test tokens. The faucet delivers Milton Friedman-style "air drops" (free tokens to requesting clients) to be used in test transactions.',
                    "Start the faucet with:",
                    "Singlenode Testnet",
                    "Before you start a validator, make sure you know the IP address of the machine you want to be the bootstrap validator for the demo, and make sure that udp ports 8000-10000 are open on all the machines you want to test with.",
                    "Now start the bootstrap validator in a separate shell:",
                    "Wait a few seconds for the server to initialize. It will print \"leader ready...\" when it's ready to receive transactions. The leader will request some tokens from the faucet if it doesn't have any. The faucet does not need to be running for subsequent leader starts.",
                    "Multinode Testnet",
                    "To run a multinode testnet, after starting a leader node, spin up some additional validators in separate shells:",
                    "To run a performance-enhanced validator on Linux, CUDA 10.0 must be installed on your system:",
                    "Testnet Client Demo",
                    "Now that your singlenode or multinode testnet is up and running let's send it some transactions!",
                    "In a separate shell start the client:",
                    "What just happened? The client demo spins up several threads to send 500,000 transactions to the testnet as quickly as it can. The client then pings the testnet periodically to see how many transactions it processed in that time. Take note that the demo intentionally floods the network with UDP packets, such that the network will almost certainly drop a bunch of them. This ensures the testnet has an opportunity to reach 710k TPS. The client demo completes after it has convinced itself the testnet won't process any additional transactions. You should see several TPS measurements printed to the screen. In the multinode variation, you'll see TPS measurements for each validator node as well.",
                    "Testnet Debugging",
                    "There are some useful debug messages in the code, you can enable them on a per-module and per-level basis. Before running a leader or validator set the normal RUST_LOG environment variable.",
                    "For example",
                    "To enable info everywhere and debug only in the exzonetwork::banking_stage module:",
                    "To enable BPF program logging:",
                    "Generally we are using debug for infrequent debug messages, trace for potentially frequent messages and info for performance-related logging.",
                    "You can also attach to a running process with GDB. The leader's process is named exzonetwork-validator:",
                    "This will dump all the threads stack traces into gdb.txt",
                    "Developer Testnet",
                    "In this example the client connects to our public testnet. To run validators on the testnet you would need to open udp ports 8000-10000.",
                    "Exzo Network cluster performance is measured as average number of transactions per second that the network can sustain (TPS). And, how long it takes for a transaction to be confirmed by super majority of the cluster (Confirmation Time).",
                    "Each cluster node maintains various counters that are incremented on certain events. These counters are periodically uploaded to a cloud based database. Exzo Network metrics dashboard fetches these counters, and computes the performance metrics and displays it on the dashboard."
                ]
            ],
            [
                "TPS",
                "tps",
                [
                    "Each node's bank runtime maintains a count of transactions that it has processed. The dashboard first calculates the median count of transactions across all metrics enabled nodes in the cluster. The median cluster transaction count is then averaged over a 2 second period and displayed in the TPS time series graph. The dashboard also shows the Mean TPS, Max TPS and Total Transaction Count stats which are all calculated from the median transaction count."
                ]
            ],
            [
                "Confirmation Time",
                "confirmation-time",
                [
                    "Each validator node maintains a list of active ledger forks that are visible to the node. A fork is considered to be frozen when the node has received and processed all entries corresponding to the fork. A fork is considered to be confirmed when it receives cumulative super majority vote, and when one of its children forks is frozen.",
                    "The node assigns a timestamp to every new fork, and computes the time it took to confirm the fork. This time is reflected as validator confirmation time in performance metrics. The performance dashboard displays the average of each validator node's confirmation time as a time series graph."
                ]
            ],
            [
                "Hardware setup",
                "hardware-setup",
                [
                    "The validator software is deployed to GCP n1-standard-16 instances with 1TB pd-ssd disk, and 2x Nvidia V100 GPUs. These are deployed in the us-west-1 region.",
                    "solana-bench-tps is started after the network converges from a client machine with n1-standard-16 CPU-only instance with the following arguments: --tx\\_count=50000 --thread-batch-sleep 1000",
                    "TPS and confirmation metrics are captured from the dashboard numbers over a 5 minute average of when the bench-tps transfer stage begins."
                ]
            ]
        ]
    },
    {
        "url": "/command_line",
        "sections": [
            [
                "Command Line ",
                null,
                [
                    "In this section, we will describe how to use the Exzo Network command-line tools to create a wallet, to send and receive XZO tokens, and to participate in the cluster by delegating stake.",
                    "To interact with a Exzo Network cluster, we will use its command-line interface, also known as the CLI. We use the command-line because it is the first place the Exzo Network core team deploys new functionality. The command-line interface is not necessarily the easiest to use, but it provides the most direct, flexible, and secure access to your Exzo Network accounts."
                ]
            ],
            [
                "Getting Started",
                "getting-started",
                [
                    "To get started using the Solana Command Line (CLI) tools:",
                    "Install the Exzo Network Tools",
                    "Choose a Cluster",
                    "Create a Wallet",
                    "Check out our CLI conventions",
                    "There are multiple ways to install the Exzo Network tools on your computer depending on your preferred workflow:",
                    "Use Exzo Network Install Tool",
                    "MacOS & Linux",
                    "Windows",
                    "Download Prebuilt Binaries",
                    "Linux",
                    "MacOS",
                    "Windows",
                    "Build From Source"
                ]
            ],
            [
                "Use Exzo Network Install Tool",
                "use-exzo-network-install-tool",
                [
                    "MacOS & Linux",
                    "Open your favorite Terminal application",
                    "Install the Exzo Network release LATEST_Exzo Network_RELEASE on your machine by running:",
                    "If you are connecting to a different testnet, you can replace LATEST_EXZONETWORK_RELEASE with the release tag matching the software version of your desired testnet, or replace it with the named channel stable, beta, or edge.",
                    "The following output indicates a successful update:",
                    "Release version: LATEST_EXZONETWORK_RELEASE",
                    "Release URL: https://github.com/exzonetwork/exzo-network-blockchain/releases/download/LATEST_EXZONETWORK_RELEASE/exzonetwork-release-x86_64-unknown-linux-gnu.tar.bz2 ",
                    "Update successful",
                    "Depending on your system, the end of the installer messaging may prompt you to",
                    "Please update your PATH environment variable to include the Exzo Network programs:",
                    "If you get the above message, copy and paste the recommended command below it to update PATH",
                    "Confirm you have the desired version of exzonetwork installed by running:",
                    "After a successful install, exzonetwork-install update may be used to easily update the Exzo Network software to a newer version at any time.",
                    "Windows",
                    "Open a Command Prompt (cmd.exe) as an Administrator ",
                    "Search for Command Prompt in the Windows search bar. When the Command Prompt app appears, right-click and select “Open as Administrator”. If you are prompted by a pop-up window asking “Do you want to allow this app to make changes to your device?”, click Yes.",
                    "Copy and paste the following command, then press Enter to download the Exzo Network installer into a temporary directory:",
                    "Copy and paste the following command, then press Enter to install the latest stable version of Exzo Network. If you see a security pop-up by your system, please select to allow the program to run.",
                    "C:\\exzo-install-tmp\\exzo-install-init.exe stable",
                    "When the installer is finished, press Enter.",
                    "Close the command prompt window and re-open a new command prompt window as a normal user",
                    'Search for "Command Prompt" in the search bar, then left click on the Command Prompt app icon, no need to run as Administrator)',
                    "Confirm you have the desired version of exzo installed by entering:",
                    "After a successful install, exzo-install update may be used to easily update the Exzo Network software to a newer version at any time."
                ]
            ],
            [
                "Download Prebuilt Binaries",
                "download-prebuilt-binaries",
                [
                    "If you would rather not use exzo-install to manage the install, you can manually download and install the binaries.",
                    "Linux",
                    "Download the binaries by navigating to https://github.com/exzonetwork/exzonetwork-chain/releases/latest, download exzonetwork-release-x86_64-unknown-linux-msvc.tar.bz2, then extract the archive: ",
                    "MacOS",
                    "Download the binaries by navigating to https://github.com/exzonetwork/exzo-network-blockchain/releases/latest, download exzonetwork-release-x86_64-apple-darwin.tar.bz2, then extract the archive:",
                    "Windows",
                    "Download the binaries by navigating to https://github.com/exzonetwork/exzonetwork-chain/releases/latest, download exzonetwork-release-x86_64-pc-windows-msvc.tar.bz2, then extract the archive using WinZip or similar. ",
                    "Open a Command Prompt and navigate to the directory into which you extracted the binaries and run:"
                ]
            ],
            [
                "Build From Source",
                "build-from-source",
                [
                    "If you are unable to use the prebuilt binaries or prefer to build it yourself from source, navigate to https://github.com/exzonetwork/exzo-network-blockchain/releases/latest, and download the Source Code archive. Extract the code and build the binaries with:",
                    "Before running any Exzo Network CLI commands, let's go over some conventions that you will see across all commands. First, the Exzo Network CLI is actually a collection of different commands for each action you might want to take. You can view the list of all possible commands by running:",
                    "To zoom in on how to use a particular command, run:",
                    "where you replace the text <COMMAND> with the name of the command you want to learn more about.",
                    "The command's usage message will typically contain words such as <AMOUNT>, <ACCOUNT_ADDRESS> or <KEYPAIR>. Each word is a placeholder for the type of text you can execute the command with. For example, you can replace <AMOUNT> with a number such as 42 or 100.42. You can replace <ACCOUNT_ADDRESS> with the base58 encoding of your public key, such as 9grmKMwTiZwUHSExjtbFzHLPTdWoXgcg1bZkhvwTrTww."
                ]
            ],
            [
                "Keypair conventions",
                "keypair-conventions",
                [
                    "Many commands using the CLI tools require a value for a <KEYPAIR>. The value you should use for the keypair depend on what type of command line wallet you created.",
                    "For example, the way to display any wallet's address (also known as the keypair's pubkey), the CLI help document shows:",
                    "Below, we show how to resolve what you should put in <KEYPAIR> depending on your wallet type.",
                    "Paper Wallet",
                    "In a paper wallet, the keypair is securely derived from the seed words and optional passphrase you entered when the wallet was create. To use a paper wallet keypair anywhere the <KEYPAIR> text is shown in examples or help documents, enter the word ASK and the program will prompt you to enter your seed words when you run the command.",
                    "To display the wallet address of a Paper Wallet:",
                    "File System Wallet",
                    "With a file system wallet, the keypair is stored in a file on your computer. Replace <KEYPAIR> with the complete file path to the keypair file.",
                    "For example, if the file system keypair file location is /home/exzo/my_wallet.json, to display the address, do:",
                    "Copy",
                    "See Exzo Network Clusters for general information about the available clusters."
                ]
            ],
            [
                "Configure the command-line tool",
                "configure-the-command-line-tool",
                [
                    "You can check what cluster the Exzo Network command-line tool (CLI) is currently targeting by running the following command:",
                    "Use exzonetwork config set command to target a particular cluster. After setting a cluster target, any future subcommands will send/receive information from that cluster.",
                    "For example to target the Devnet cluster, run:"
                ]
            ],
            [
                "Ensure Versions Match",
                "ensure-versions-match",
                [
                    "Though not strictly necessary, the CLI will generally work best when its version matches the software version running on the cluster. To get the locally-installed CLI version, run:",
                    "To get the cluster version, run:",
                    "Ensure the local CLI version is greater than or equal to the cluster version.",
                    "This page decribes how to receive and send XZO tokens using the command line tools with a command line wallet such as a paper wallet, and a file system wallet. Before you begin, make sure you have created a wallet and have access to its address (pubkey) and the signing keypair. Check out our conventions for entering keypairs for different wallet types."
                ]
            ],
            [
                "Testing your Wallet",
                "testing-your-wallet",
                [
                    "Before sharing your public key with others, you may want to first ensure the key is valid and that you indeed hold the corresponding private key.",
                    "In this example, we will create a second wallet in addition to your first wallet, and then transfer some tokens to it. This will confirm that you can send and receive tokens on your wallet type of choice.",
                    "This test example uses our Developer Testnet, called devnet. Tokens issued on devnet have no value, so don't worry if you lose them.",
                    "Airdrop some tokens to get started",
                    "First, airdrop yourself some play tokens on the devnet.",
                    "where you replace the text <RECIPIENT_ACCOUNT_ADDRESS> with your base58-encoded public key/wallet address.",
                    "Check your balance",
                    "Confirm the airdrop was successful by checking the account's balance. It should output 10 XZO:",
                    "Create a second wallet address",
                    "We will need a new address to receive our tokens. Create a second keypair and record its pubkey:",
                    "The output will contain the address after the text pubkey:.",
                    "Copy the address. We will use it in the next step.",
                    "You can also create a second (or more) wallet of any type: paper, file system.",
                    "Transfer tokens from your first wallet to the second address",
                    "Next, prove that you own the airdropped tokens by transferring them. The Exzo Network cluster will only accept the transfer if you sign the transaction with the private keypair corresponding to the sender's public key in the transaction.",
                    "where you replace <KEYPAIR> with the path to a keypair in your first wallet, and replace <RECIPIENT_ACCOUNT_ADDRESS> with the address of your second wallet.",
                    "Confirm the updated balances with exzo balance:",
                    "exzonetwork balance <ACCOUNT_ADDRESS> --url  https://rpc-test-1.exzo.network",
                    "where <ACCOUNT_ADDRESS> is either the public key from your keypair or the recipient's public key.",
                    "Full example of test transfer"
                ]
            ],
            [
                "Receive Tokens",
                "receive-tokens",
                [
                    "To receive tokens, you will need an address for others to send tokens to. In Exzo Network, the wallet address is the public key of a keypair. There are a variety of techniques for generating keypairs. The method you choose will depend on how you choose to store keypairs. Keypairs are stored in wallets. Before receiving tokens, you will need to create a wallet. Once completed, you should have a public key for each keypair you generated. The public key is a long string of base58 characters. Its length varies from 32 to 44 characters."
                ]
            ],
            [
                "Send Tokens",
                "send-tokens",
                [
                    "If you already hold XZO and want to send tokens to someone, you will need a path to your keypair, their base58-encoded public key, and a number of tokens to transfer. Once you have that collected, you can transfer tokens with the exzo transfer command:",
                    "Confirm the updated balances with exzonetwork balance:",
                    "Copy",
                    "After you have received XZO, you might consider putting it to use by delegating stake to a validator. Stake is what we call tokens in a stake account. Exzo Network weights validator votes by the amount of stake delegated to them, which gives those validators more influence in determining then next valid block of transactions in the blockchain. Exzo Network then generates new XZO periodically to reward stakers and validators. You earn more rewards the more stake you delegate."
                ]
            ],
            [
                "Create a Stake Account",
                "create-a-stake-account",
                [
                    "To delegate stake, you will need to transfer some tokens into a stake account. To create an account, you will need a keypair. Its public key will be used as the stake account address. No need for a password or encryption here; this keypair will be discarded right after creating the stake account.",
                    "The output will contain the public key after the text pubkey:.",
                    "Copy the public key and store it for safekeeping. You will need it any time you want to perform an action on the stake account you create next.",
                    "Now, create a stake account:",
                    '<AMOUNT> tokens are transferred from the account at the "from" <KEYPAIR> to a new stake account at the public key of stake-account.json.',
                    "The stake-account.json file can now be discarded. To authorize additional actions, you will use the --stake-authority or --withdraw-authority keypair, not stake-account.json.",
                    "View the new stake account with the exzonetwork stake-account command:",
                    "The output will look similar to this:",
                    "Set Stake and Withdraw Authorities",
                    "Stake and withdraw authorities can be set when creating an account via the --stake-authority and --withdraw-authority options, or afterward with the exzonetwork stake-authorize command. For example, to set a new stake authority, run:",
                    "This will use the existing stake authority <KEYPAIR> to authorize a new stake authority <PUBKEY> on the stake account <STAKE_ACCOUNT_ADDRESS>.",
                    "Advanced: Derive Stake Account Addresses",
                    "When you delegate stake, you delegate all tokens in the stake account to a single validator. To delegate to multiple validators, you will need multiple stake accounts. Creating a new keypair for each account and managing those addresses can be cumbersome. Fortunately, you can derive stake addresses using the --seed option:",
                    '<STRING> is an arbitrary string up to 32 bytes, but will typically be a number corresponding to which derived account this is. The first account might be "0", then "1", and so on. The public key of <STAKE_ACCOUNT_KEYPAIR> acts as the base address. The command derives a new address from the base address and seed string. To see what stake address the command will derive, use exzonetwork create-address-with-seed:',
                    "<PUBKEY> is the public key of the <STAKE_ACCOUNT_KEYPAIR> passed to exzonetwork create-stake-account."
                ]
            ],
            [
                "Delegate Stake",
                "delegate-stake",
                [
                    "To delegate your stake to a validator, you will need its vote account address. Find it by querying the cluster for the list of all validators and their vote accounts with the exzonetwork validators command:",
                    "The first column of each row contains the validator's identity and the second is the vote account address. Choose a validator and use its vote account address in exzonetwork delegate-stake:",
                    "The stake authority <KEYPAIR> authorizes the operation on the account with address <STAKE_ACCOUNT_ADDRESS>. The stake is delegated to the vote account with address <VOTE_ACCOUNT_ADDRESS>.",
                    "After delegating stake, use exzonetwork stake-account to observe the changes to the stake account:",
                    'You will see new fields "Delegated Stake" and "Delegated Vote Account Address" in the output. The output will look similar to this:'
                ]
            ],
            [
                "Deactivate Stake",
                "deactivate-stake",
                [
                    "Once delegated, you can undelegate stake with the exzonetwork deactivate-stake command:",
                    "The stake authority <KEYPAIR> authorizes the operation on the account with address <STAKE_ACCOUNT_ADDRESS>.",
                    'Note that stake takes several epochs to "cool down". Attempts to delegate stake in the cool down period will fail.'
                ]
            ],
            [
                "Withdraw Stake",
                "withdraw-stake",
                [
                    "Transfer tokens out of a stake account with the exzonetwork withdraw-stake command:",
                    "<STAKE_ACCOUNT_ADDRESS> is the existing stake account, the stake authority <KEYPAIR> is the withdraw authority, and <AMOUNT> is the number of tokens to transfer to <RECIPIENT_ADDRESS>."
                ]
            ],
            [
                "Split Stake",
                "split-stake",
                [
                    "You may want to delegate stake to additional validators while your existing stake is not eligible for withdrawal. It might not be eligible because it is currently staked, cooling down, or locked up. To transfer tokens from an existing stake account to a new one, use the exzonetwork split-stake command:",
                    "<STAKE_ACCOUNT_ADDRESS> is the existing stake account, the stake authority <KEYPAIR> is the stake authority, <NEW_STAKE_ACCOUNT_KEYPAIR> is the keypair for the new account, and <AMOUNT> is the number of tokens to transfer to the new account.",
                    "To split a stake account into a derived account address, use the --seed option. See Derive Stake Account Addresses for details.",
                    'If you want to delegate stake to many different validators, you will need to create a separate stake account for each. If you follow the convention of creating the first stake account at seed "0", the second at "1", the third at "2", and so on, then the exzonetwork-stake-accounts tool will allow you to operate on all accounts with single invocations. You can use it to sum up the balances of all accounts, move accounts to a new wallet, or set new authorities.'
                ]
            ],
            [
                "Usage",
                "usage",
                [
                    "Create a stake account",
                    "Create and fund a derived stake account at the stake authority public key:",
                    "Count accounts",
                    "Count the number of derived accounts:",
                    "Get stake account balances",
                    "Sum the balance of derived stake accounts:",
                    "Get stake account addresses",
                    "List the address of each stake account derived from the given public key:",
                    "Set new authorities",
                    "Set new authorities on each derived stake account:",
                    "Relocate stake accounts",
                    "Relocate stake accounts:",
                    "To atomically rebase and authorize each stake account, use the 'move' command:",
                    "Developers can deploy on-chain programs (often called smart contracts elsewhere) with the Exzo Network tools.",
                    "To learn about developing and executing programs on Exzo Network, start with the overview and then dig into the details of on-chain programs.",
                    "To deploy a program, use the Exzo Network tools to interact with the on-chain loader to:",
                    "Initialize a program account",
                    "Upload the program's shared object to the program account's data buffer",
                    "Verify the uploaded program",
                    "Finalize the program by marking the program account executable.",
                    "Once deployed, anyone can execute the program by sending transactions that reference it to the cluster."
                ]
            ],
            [
                "Usage",
                "usage-2",
                [
                    "Deploy a program",
                    "To deploy a program, you will need the location of the program's shared object (the program binary .so)",
                    "Successful deployment will return the program id of the deployed program, for example:",
                    "Specify the keypair in the deploy command to deploy to a specific program id:",
                    "If the program id is not specified on the command line the tools will first look for a keypair file matching the <PROGRAM_FILEPATH>, or internally generate a new keypair.",
                    "A matching program keypair file is in the same directory as the program's shared object, and named <PROGRAM_NAME>-keypair.json. Matching program keypairs are generated automatically by the program build tools:",
                    "Showing a program account",
                    "To get information about a deployed program:",
                    "An example output looks like:",
                    "Program Id is the address that can be referenced in an instruction's program_id field when invoking a program.",
                    "Owner: The loader this program was deployed with.",
                    "ProgramData Address is the account associated with the program account that holds the program's data (shared object).",
                    "Authority is the program's upgrade authority.",
                    "Last Deployed In Slot is the slot in which the program was last deployed.",
                    "Data Length is the size of the space reserved for deployments. The actual space used by the currently deployed program may be less.",
                    "Redeploy a program",
                    "A program can be redeployed to the same address to facilitate rapid development, bug fixes, or upgrades. Matching keypair files are generated once so that redeployments will be to the same program address.",
                    "The command looks the same as the deployment command:",
                    "By default, programs are deployed to accounts that are twice the size of the original deployment. Doing so leaves room for program growth in future redeployments. But, if the initially deployed program is very small (like a simple helloworld program) and then later grows substantially, the redeployment may fail. To avoid this, specify a max_len that is at least the size (in bytes) that the program is expected to become (plus some wiggle room).",
                    "Note that program accounts are required to be rent-exempt, and the max-len is fixed after initial deployment, so any XZO in the program accounts is locked up permanently.",
                    "Resuming a failed deploy",
                    "If program deployment fails, there will be a hanging intermediate buffer account that contains a non-zero balance. In order to recoup that balance you may resume a failed deployment by providing the same intermediate buffer to a new call to deploy.",
                    "Deployment failures will print an error message specifying the seed phrase needed to recover the generated intermediate buffer's keypair:",
                    "To recover the keypair:",
                    "When asked, enter the 12-word seed phrase.",
                    "Then issue a new deploy command and specify the buffer:",
                    "Closing buffer accounts and reclaiming their lamports",
                    "If deployment fails there will be a left over buffer account that holds lamports. The buffer account can either be used to resume a deploy or closed. When closed, the full balance of the buffer account will be transferred to the recipient's account.",
                    "The buffer account's authority must be present to close a buffer account, to list all the open buffer accounts that match the default authority:",
                    "To specify a different authority:",
                    "To close a single account:",
                    "To close a single account and specify a different authority than the default:",
                    "To close a single account and specify a different recipient than the default:",
                    "To close all the buffer accounts associated with the current authority:",
                    "To show all buffer accounts regardless of the authority",
                    "Set a program's upgrade authority",
                    "The program's upgrade authority must to be present to deploy a program. If no authority is specified during program deployment, the default keypair is used as the authority. This is why redeploying a program in the steps above didn't require an authority to be explicitly specified.",
                    "The authority can be specified during deployment:",
                    "Or after deployment and using the default keypair as the current authority:",
                    "Or after deployment and specifying the current authority:",
                    "Immutable programs",
                    "A program can be marked immutable, which prevents all further redeployments, by specifying the --final flag during deployment:",
                    "Or anytime after:",
                    "exzonetwork program deploy ... utilizes Exno Network’s upgradeable loader, but there is another way to deploy immutable programs using the original on-chain loader:",
                    "Programs deployed with exzonetwork deploy ... are not redeployable and are not compatible with the exzonetwork program ... commands.",
                    "Dumping a program to a file",
                    "The deployed program may be dumped back to a local file:",
                    "The dumped file will be in the same as what was deployed, so in the case of a shared object, the dumped file will be a fully functional shared object. Note that the dump command dumps the entire data space, which means the output file will have trailing zeros after the shared object's data up to max_len. Sometimes it is useful to dump and compare a program to ensure it matches a known program binary. The original program file can be zero-extended, hashed, and compared to the hash of the dumped file.",
                    "Using an intermediary Buffer account",
                    "Instead of deploying directly to the program account, the program can be written to an intermediary buffer account. Intermediary accounts can useful for things like multi-entity governed programs where the governing members fist verify the intermediary buffer contents and then vote to allow an upgrade using it.",
                    "Buffer accounts support authorities like program accounts:",
                    "One exception is that buffer accounts cannot be marked immutable like program accounts can, so they don't support --final.",
                    "The buffer account, once entirely written, can be passed to deploy to deploy the program:",
                    "Note, the buffer's authority must match the program's upgrade authority.",
                    "Buffers also support show and dump just like programs do.",
                    "Some security models require keeping signing keys, and thus the signing process, separated from transaction creation and network broadcast. Examples include:",
                    "Collecting signatures from geographically disparate signers in a multi-signature scheme",
                    "Signing transactions using an airgapped signing device",
                    "This document describes using Exzo Network CLI to separately sign and submit a transaction."
                ]
            ],
            [
                "Commands Supporting Offline Signing",
                "commands-supporting-offline-signing",
                [
                    "At present, the following commands support offline signing:"
                ]
            ],
            [
                "Signing Transactions Offline",
                "signing-transactions-offline",
                [
                    "To sign a transaction offline, pass the following arguments on the command line",
                    "--sign-only, prevents the client from submitting the signed transaction to the network. Instead, the pubkey/signature pairs are printed to stdout.",
                    " --blockhash BASE58_HASH, allows the caller to specify the value used to fill the transaction's recent_blockhash field. This serves a number of purposes, namely: Eliminates the need to connect to the network and query a recent blockhash via RPC Enables the signers to coordinate the blockhash in a multiple-signature scheme.",
                    "Example: Offline Signing a Payment"
                ]
            ],
            [
                "Submitting Offline Signed Transactions to the Network",
                "submitting-offline-signed-transactions-to-the-network",
                [
                    "To submit a transaction that has been signed offline to the network, pass the following arguments on the command line",
                    "--blockhash BASE58_HASH, must be the same blockhash as was used to sign",
                    "--signer BASE58_PUBKEY=BASE58_SIGNATURE, one for each offline signer. This includes the pubkey/signature pairs directly in the transaction rather than signing it with any local keypair(s)",
                    "Example: Submitting an Offline Signed Payment"
                ]
            ],
            [
                "Offline Signing Over Multiple Sessions",
                "offline-signing-over-multiple-sessions",
                [
                    "Offline signing can also take place over multiple sessions. In this scenario, pass the absent signer's public key for each role. All pubkeys that were specified, but no signature was generated for will be listed as absent in the offline signing output",
                    "Example: Transfer with Two Offline Signing Sessions"
                ]
            ],
            [
                "Buying More Time to Sign",
                "buying-more-time-to-sign",
                [
                    "Typically a Exzo Network transaction must be signed and accepted by the network within a number of slots from the blockhash in its recent_blockhash field (~2min at the time of this writing). If your signing procedure takes longer than this, a Durable Transaction Nonce can give you the extra time you need.",
                    "Durable transaction nonces are a mechanism for getting around the typical short lifetime of a transaction's recent_blockhash."
                ]
            ],
            [
                "Usage Examples",
                "usage-examples",
                [
                    "Full usage details for durable nonce CLI commands can be found in the CLI reference.",
                    "Nonce Authority",
                    "Authority over a nonce account can optionally be assigned to another account. In doing so the new authority inherits full control over the nonce account from the previous authority, including the account creator. This feature enables the creation of more complex account ownership arrangements and derived account addresses not associated with a keypair. The --nonce-authority <AUTHORITY_KEYPAIR> argument is used to specify this account and is supported by the following commands",
                    "create-nonce-account",
                    "new-nonce",
                    "withdraw-from-nonce-account",
                    "authorize-nonce-account",
                    "Nonce Account Creation",
                    "The durable transaction nonce feature uses an account to store the next nonce value. Durable nonce accounts must be rent-exempt, so need to carry the minimum balance to achieve this.",
                    "A nonce account is created by first generating a new keypair, then create the account on chain",
                    "To keep the keypair entirely offline, use the Paper Wallet keypair generation instructions instead.",
                    "Full usage documentation",
                    "Querying the Stored Nonce Value",
                    "Creating a durable nonce transaction requires passing the stored nonce value as the value to the --blockhash argument upon signing and submission. Obtain the presently stored nonce value with",
                    "Advancing the Stored Nonce Value",
                    "While not typically needed outside a more useful transaction, the stored nonce value can be advanced by",
                    "Full usage documentation",
                    "Display Nonce Account",
                    "Inspect a nonce account in a more human friendly format with",
                    "Full usage documentation",
                    "Withdraw Funds from a Nonce Account",
                    "Withdraw funds from a nonce account with",
                    "Close a nonce account by withdrawing the full balance",
                    "Full usage documentation",
                    "Assign a New Authority to a Nonce Account",
                    "Reassign the authority of a nonce account after creation with",
                    "Full usage documentation"
                ]
            ],
            [
                "Other Commands Supporting Durable Nonces",
                "other-commands-supporting-durable-nonces",
                [
                    "To make use of durable nonces with other CLI subcommands, two arguments must be supported.",
                    "--nonce, specifies the account storing the nonce value",
                    "--nonce-authority, specifies an optional nonce authority",
                    "The following subcommands have received this treatment so far",
                    "pay",
                    "delegate-stake",
                    "deactivate-stake",
                    "Example Pay Using Durable Nonce",
                    "Here we demonstrate Alice paying Bob 1 XZO using a durable nonce. The procedure is the same for all subcommands supporting durable nonces",
                    "Create accounts",
                    "First we need some accounts for Alice, Alice's nonce and Bob",
                    "Fund Alice's account",
                    "Alice will need some funds to create a nonce account and send to Bob. Airdrop her some XZO",
                    "Create Alice's nonce account",
                    "Now Alice needs a nonce account. Create one",
                    "Here, no separate nonce authority is employed, so alice.json has full authority over the nonce account",
                    "A failed first attempt to pay Bob",
                    "Alice attempts to pay Bob, but takes too long to sign. The specified blockhash expires and the transaction fails",
                    "Nonce to the rescue!",
                    "Alice retries the transaction, this time specifying her nonce account and the blockhash stored there",
                    "Remember, alice.json is the nonce authority in this example",
                    "Success!",
                    "The transaction succeeds! Bob receives 0.01 XZO from Alice and Alice's stored nonce advances to a new value",
                    "The solana-cli crate provides a command-line interface tool for Exzo Network"
                ]
            ],
            [
                "Examples",
                "examples",
                [
                    "Get Pubkey",
                    "Airdrop XZO/Lamports",
                    "Get Balance",
                    "Confirm Transaction",
                    "Deploy program"
                ]
            ],
            [
                "Usage",
                "usage-3",
                [
                    "exzonetwork-cli"
                ]
            ]
        ]
    },
    {
        "url": "/create_metamask_wallet",
        "sections": [
            [
                "Create new MetaMask Wallet  ",
                null,
                [
                    "How to create a new wallet in MetaMask?",
                    "When the extension is installed, click on the icon in the upper right corner to open the MetaMask, read the introductions and click Continue.",
                    "Create a strong password and click Create.",
                    "Read the introduction text, then accept terms of use and privacy note. Click Accept.",
                    "Reveal secret words by clicking on the image. You will see a 12 words seed phrase. Copy your secret phrase and store it n a safe place. When ready click Next.",
                    "Confirm your Secret phrase by selecting words in the same order as in your secret phrase. Then click Confirm.",
                    "That’s it! You have successfully created an account in MetaMask with a wallet address!",
                    "Now you can view your address on Etherscan (Ethereum blockchain explorer), check the QR code, copy your wallet’s address to clipboard or export your wallet’s private key:"
                ]
            ]
        ]
    },
    {
        "url": "/developing_native_exzo",
        "sections": [
            [
                "Developing on native Exzo ",
                null,
                []
            ],
            [
                "Overview",
                "overview",
                [
                    "An app interacts with an Exzo Network cluster by sending it transactions with one or more instructions. The Exzo Network runtime passes those instructions to programs deployed by app developers beforehand. An instruction might, for example, tell a program to transfer lamports from one account to another or create an interactive contract that governs how lamports are transferred. Instructions are executed sequentially and atomically for each transaction. If any instruction is invalid, all account changes in the transaction are discarded.",
                    "To start developing immediately you can build, deploy, and run one of the examples."
                ]
            ],
            [
                "Transactions",
                "transactions",
                [
                    "Program execution begins with a transaction being submitted to the cluster. The Exzo Network runtime will execute a program to process each of the instructions contained in the transaction, in order, and atomically."
                ]
            ],
            [
                "Anatomy of a Transaction",
                "anatomy-of-a-transaction",
                [
                    "This section documents the binary format of a transaction.",
                    "Transaction Format",
                    "A transaction contains a compact-array of signatures, followed by a message. Each item in the signatures array is a digital signature of the given message. The Exzo Network runtime verifies that the number of signatures matches the number in the first 8 bits of the message header. It also verifies that each signature was signed by the private key corresponding to the public key at the same index in the message's account addresses array.",
                    "Signature Format",
                    "Each digital signature is in the ed25519 binary format and consumes 64 bytes.",
                    "Message Format",
                    "A message contains a header, followed by a compact-array of account addresses, followed by a recent blockhash, followed by a compact-array of instructions.",
                    "Message Header Format",
                    "The message header contains three unsigned 8-bit values. The first value is the number of required signatures in the containing transaction. The second value is the number of those corresponding account addresses that are read-only. The third value in the message header is the number of read-only account addresses not requiring signatures.",
                    "Account Addresses Format",
                    "The addresses that require signatures appear at the beginning of the account address array, with addresses requesting write access first and read-only accounts following. The addresses that do not require signatures follow the addresses that do, again with read-write accounts first and read-only accounts following.",
                    "Blockhash Format",
                    "A blockhash contains a 32-byte SHA-256 hash. It is used to indicate when a client last observed the ledger. Validators will reject transactions when the blockhash is too old.",
                    "Instruction Format",
                    "An instruction contains a program ID index, followed by a compact-array of account address indexes, followed by a compact-array of opaque 8-bit data. The program ID index is used to identify an on-chain program that can interpret the opaque data. The program ID index is an unsigned 8-bit index to an account address in the message's array of account addresses. The account address indexes are each an unsigned 8-bit index into that same array.",
                    "Compact-Array Format",
                    "A compact-array is serialized as the array length, followed by each array item. The array length is a special multi-byte encoding called compact-u16.",
                    "Compact-u16 Format",
                    "A compact-u16 is a multi-byte encoding of 16 bits. The first byte contains the lower 7 bits of the value in its lower 7 bits. If the value is above 0x7f, the high bit is set and the next 7 bits of the value are placed into the lower 7 bits of a second byte. If the value is above 0x3fff, the high bit is set and the remaining 2 bits of the value are placed into the lower 2 bits of a third byte.",
                    "Account Address Format",
                    "An account address is 32-bytes of arbitrary data. When the address requires a digital signature, the runtime interprets it as the public key of an ed25519 keypair."
                ]
            ],
            [
                "Instructions",
                "instructions",
                [
                    "Each instruction specifies a single program, a subset of the transaction's accounts that should be passed to the program, and a data byte array that is passed to the program. The program interprets the data array and operates on the accounts specified by the instructions. The program can return successfully, or with an error code. An error return causes the entire transaction to fail immediately.",
                    "Programs typically provide helper functions to construct instructions they support. For example, the system program provides the following Rust helper to construct a SystemInstruction::CreateAccount instruction:",
                    "Which can be found here.",
                    "Program Id",
                    "The instruction's program id specifies which program will process this instruction. The program's account's owner specifies which loader should be used to load and execute the program and the data contains information about how the runtime should execute the program.",
                    "In the case of on-chain BPF programs, the owner is the BPF Loader and the account data holds the BPF bytecode. Program accounts are permanently marked as executable by the loader once they are successfully deployed. The runtime will reject transactions that specify programs that are not executable.",
                    "Unlike on-chain programs, Native Programs are handled differently in that they are built directly into the Exzo Network runtime.",
                    "Accounts",
                    "The accounts referenced by an instruction represent on-chain state and serve as both the inputs and outputs of a program. More information about Accounts can be found in the Accounts section.",
                    "Instruction data",
                    "Each instruction caries a general purpose byte array that is passed to the program along with the accounts. The contents of the instruction data is program specific and typically used to convey what operations the program should perform, and any additional information those operations may need above and beyond what the accounts contain.",
                    "Programs are free to specify how information is encoded into the instruction data byte array. The choice of how data is encoded should take into account the overhead of decoding since that step is performed by the program on-chain. It's been observed that some common encodings (Rust's bincode for example) are very inefficient.",
                    "The Exzo Network Program Library's Token program gives one example of how instruction data can be encoded efficiently, but note that this method only supports fixed sized types. Token utilizes the Pack trait to encode/decode instruction data for both token instructions as well as token account states.",
                    "Multiple instructions in a single transaction",
                    "A transaction can contain instructions in any order. This means a malicious user could craft transactions that may pose instructions in an order that the program has not been protected against. Programs should be hardened to properly and safely handle any possible instruction sequence.",
                    "One not so obvious example is account deinitialization. Some programs may attempt to deinitialize an account by setting its lamports to zero, with the assumption that the runtime will delete the account. This assumption may be valid between transactions, but it is not between instructions or cross-program invocations. To harden against this, the program should also explicitly zero out the account's data.",
                    "An example of where this could be a problem is if a token program, upon transferring the token out of an account, sets the account's lamports to zero, assuming it will be deleted by the runtime. If the program does not zero out the account's data, a malicious user could trail this instruction with another that transfers the tokens a second time."
                ]
            ],
            [
                "Signatures",
                "signatures",
                [
                    "Each transaction explicitly lists all account public keys referenced by the transaction's instructions. A subset of those public keys are each accompanied by a transaction signature. Those signatures signal on-chain programs that the account holder has authorized the transaction. Typically, the program uses the authorization to permit debiting the account or modifying its data. More information about how the authorization is communicated to a program can be found in Accounts."
                ]
            ],
            [
                "Recent Blockhash",
                "recent-blockhash",
                [
                    "A transaction includes a recent blockhash to prevent duplication and to give transactions lifetimes. Any transaction that is completely identical to a previous one is rejected, so adding a newer blockhash allows multiple transactions to repeat the exact same action. Transactions also have lifetimes that are defined by the blockhash, as any transaction whose blockhash is too old will be rejected."
                ]
            ],
            [
                "JSON RPC API",
                "json-rpc-api",
                [
                    "Exzo Network nodes accept HTTP requests using the JSON-RPC 2.0 specification.",
                    "To interact with a Exzo Network node inside a JavaScript application, use the solana-web3.js library, which gives a convenient interface for the RPC methods."
                ]
            ],
            [
                "RPC HTTP Endpoint",
                "rpc-http-endpoint",
                [
                    "Default port: 8899 eg. http://localhost:8899, http://192.168.1.88:8899"
                ]
            ],
            [
                "RPC PubSub WebSocket Endpoint",
                "rpc-pub-sub-web-socket-endpoint",
                [
                    "Default port: 8900 eg. ws://localhost:8900, http://192.168.1.88:8900"
                ]
            ],
            [
                "Methods",
                "methods",
                [
                    "getAccountInfo",
                    "getBalance",
                    "getBlockCommitment",
                    "getBlockTime",
                    "getClusterNodes",
                    "getConfirmedBlock",
                    "getConfirmedBlocks",
                    "getConfirmedBlocksWithLimit",
                    "getConfirmedSignaturesForAddress",
                    "getConfirmedSignaturesForAddress2",
                    "getConfirmedTransaction",
                    "getEpochInfo",
                    "getEpochSchedule",
                    "getFeeCalculatorForBlockhash",
                    "getFeeRateGovernor",
                    "getFees",
                    "getFirstAvailableBlock",
                    "getGenesisHash",
                    "getHealth",
                    "getIdentity",
                    "getInflationGovernor",
                    "getInflationRate",
                    "getInflationReward",
                    "getLargestAccounts",
                    "getLeaderSchedule",
                    "getMaxRetransmitSlot",
                    "getMaxShredInsertSlot",
                    "getMinimumBalanceForRentExemption",
                    "getMultipleAccounts",
                    "getProgramAccounts",
                    "getRecentBlockhash",
                    "getRecentPerformanceSamples",
                    "getSnapshotSlot",
                    "getSignatureStatuses",
                    "getSlot",
                    "getSlotLeader",
                    "getSlotLeaders",
                    "getStakeActivation",
                    "getSupply",
                    "getTokenAccountBalance",
                    "getTokenAccountsByDelegate",
                    "getTokenAccountsByOwner",
                    "getTokenLargestAccounts",
                    "getTokenSupply",
                    "getTransactionCount",
                    "getVersion",
                    "getVoteAccounts",
                    "minimumLedgerSlot",
                    "requestAirdrop",
                    "sendTransaction",
                    "simulateTransaction",
                    "Subscription Websocket",
                    "accountSubscribe",
                    "accountUnsubscribe",
                    "logsSubscribe",
                    "logsUnsubscribe",
                    "programSubscribe",
                    "programUnsubscribe",
                    "signatureSubscribe",
                    "signatureUnsubscribe",
                    "slotSubscribe",
                    "slotUnsubscribe"
                ]
            ],
            [
                "Request Formatting",
                "request-formatting",
                [
                    "To make a JSON-RPC request, send an HTTP POST request with a Content-Type: application/json header. The JSON request data should contain 4 fields:",
                    'jsonrpc: <string>, set to "2.0"',
                    "id: <number>, a unique client-generated identifying integer",
                    "method: <string>, a string containing the method to be invoked",
                    "params: <array>, a JSON array of ordered parameter values",
                    "Example using curl:",
                    "The response output will be a JSON object with the following fields:",
                    "jsonrpc: <string>, matching the request specification",
                    "id: <number>, matching the request identifier",
                    "result: <array|number|object|string>, requested data or success confirmation",
                    "Requests can be sent in batches by sending an array of JSON-RPC request objects as the data for a single POST."
                ]
            ],
            [
                "Definitions",
                "definitions",
                [
                    "Hash: A SHA-256 hash of a chunk of data.",
                    "Pubkey: The public key of a Ed25519 key-pair.",
                    "Signature: An Ed25519 signature of a chunk of data.",
                    "Transaction: A Exzo Network instruction signed by a client key-pair."
                ]
            ],
            [
                "Configuring State Commitment",
                "configuring-state-commitment",
                [
                    "Exzo Network nodes choose which bank state to query based on a commitment requirement set by the client. Clients may specify either:",
                    '"max" - the node will query the most recent bank confirmed by the cluster as having reached maximum lockout.',
                    '"root" - the node will query the most recent bank having reached maximum lockout on this node.',
                    '"single" - the node will query the most recent bank having reached 1 cluster confirmation.',
                    '"singleGossip" - the node will query the most recent bank having reached 1 cluster confirmation via gossip votes; may occur before or after single, depending on gossip traffic.',
                    '"recent" - the node will query its most recent bank.',
                    "The commitment parameter should be included as the last element in the params array:",
                    "Default",
                    'If commitment configuration is not provided, the node will default to "max" commitment',
                    "Only methods that query bank state accept the commitment parameter. They are indicated in the API Reference below.",
                    "RpcResponse Structure",
                    "Many methods that take a commitment parameter return an RpcResponse JSON object comprised of two parts:",
                    "context : An RpcResponseContext JSON structure including a slot field at which the operation was evaluated.",
                    "value : The value returned by the operation itself."
                ]
            ],
            [
                "Health Check",
                "health-check",
                [
                    'Although not a JSON RPC API, a GET /heath at the RPC HTTP Endpoint provides a health-check mechanism for use by load balancers or other network infrastructure. This request will always return a HTTP 200 OK response with a body of "ok" or "behind" based on the following conditions:',
                    'If one or more --trusted-validator arguments are provided to exzonetwork-validator, "ok" is returned when the node has within HEALTH_CHECK_SLOT_DISTANCE slots of the highest trusted validator, otherwise "behind" is returned.',
                    '"ok" is always returned if no trusted validators are provided.'
                ]
            ],
            [
                "JSON RPC API Reference",
                "json-rpc-api-reference",
                [
                    "getAccountInfo",
                    "Returns all information associated with the account of provided Pubkey",
                    "Parameters",
                    "<string> - Pubkey of account to query, as base-58 encoded string",
                    "<object> - (optional) Configuration object containing the following optional fields:",
                    "(optional) Commitment",
                    'encoding: <string> - encoding for Account data, either "base58" (slow), "base64", or jsonParsed". "base58" is limited to Account data of less than 128 bytes. "base64" will return base64 encoded data for Account data of any size. Parsed-JSON encoding attempts to use program-specific state parsers to return more human-readable and explicit account state data. If parsed-JSON is requested but a parser cannot be found, the field falls back to base64 encoding, detectable when the data field is type <string>. jsonParsed encoding is UNSTABLE',
                    '(optional) dataSlice: <object> - limit the returned account data using the provided offset: <usize> and length: <usize> fields; only available for "base58" or "base64" encoding.',
                    "Results",
                    "The result will be an RpcResponse JSON object with value equal to:",
                    "<null> - if the requested account doesn't exist",
                    "<object> - otherwise, a JSON object containing:",
                    "lamports: <u64>, number of lamports assigned to this account, as a u64",
                    "owner: <string>, base-58 encoded Pubkey of the program this account has been assigned to",
                    "data: <[string, encoding]|object>, data associated with the account, either as encoded binary data or JSON format {<program>: <state>}, depending on encoding parameter",
                    "executable: <bool>, boolean indicating if the account contains a program (and is strictly read-only)",
                    "rentEpoch: <u64>, the epoch at which this account will next owe rent, as u64",
                    "Example",
                    "getBalance",
                    "Returns the balance of the account of provided Pubkey",
                    "Parameters",
                    "<string> - Pubkey of account to query, as base-58 encoded string",
                    "<object> - (optional) Commitment",
                    "Results",
                    "RpcResponse<u64> - RpcResponse JSON object with value field set to the balance",
                    "Example",
                    "getBlockCommitment",
                    "Returns commitment for particular block",
                    "Parameters",
                    "<u64> - block, identified by Slot",
                    "Results",
                    "The result field will be a JSON object containing:",
                    "commitment - commitment, comprising either:",
                    "<null> - Unknown block",
                    "<array> - commitment, array of u64 integers logging the amount of cluster stake in lamports that has voted on the block at each depth from 0 to MAX_LOCKOUT_HISTORY + 1",
                    "totalStake - total active stake, in lamports, of the current epoch",
                    "Example",
                    "getBlockTime",
                    "Returns the estimated production time of a confirmed block.",
                    "Each validator reports their UTC time to the ledger on a regular interval by intermittently adding a timestamp to a Vote for a particular block. A requested block's time is calculated from the stake-weighted mean of the Vote timestamps in a set of recent blocks recorded on the ledger.",
                    "Nodes that are booting from snapshot or limiting ledger size (by purging old slots) will return null timestamps for blocks below their lowest root + TIMESTAMP_SLOT_RANGE. Users interested in having this historical data must query a node that is built from genesis and retains the entire ledger.",
                    "Parameters",
                    "<u64> - block, identified by Slot",
                    "Results",
                    "<i64> - estimated production time, as Unix timestamp (seconds since the Unix epoch)",
                    "<null> - timestamp is not available for this block",
                    "Example",
                    "getClusterNodes",
                    "Returns information about all the nodes participating in the cluster",
                    "Parameters",
                    "None",
                    "Results",
                    "The result field will be an array of JSON objects, each with the following sub fields:",
                    "pubkey: <string> - Node public key, as base-58 encoded string",
                    "gossip: <string> - Gossip network address for the node",
                    "tpu: <string> - TPU network address for the node",
                    "rpc: <string>|null - JSON RPC network address for the node, or null if the JSON RPC service is not enabled",
                    "version: <string>|null - The software version of the node, or null if the version information is not available",
                    "Example",
                    "getConfirmedBlock",
                    "Returns identity and transaction information about a confirmed block in the ledger",
                    "Parameters",
                    "<u64> - slot, as u64 integer",
                    '<string> - encoding for each returned Transaction, either "json", "jsonParsed", "base58" (slow), or "base64". If parameter not provided, the default encoding is JSON. jsonParsed encoding is UNSTABLE Parsed-JSON encoding attempts to use program-specific instruction parsers to return more human-readable and explicit data in the transaction.message.instructions list. If parsed-JSON is requested but a parser cannot be found, the instruction falls back to regular JSON encoding (accounts, data, and programIdIndex fields).',
                    "Results",
                    "The result field will be an object with the following fields:",
                    "<null> - if specified block is not confirmed",
                    "<object> - if block is confirmed, an object with the following fields:",
                    "blockhash: <string> - the blockhash of this block, as base-58 encoded string",
                    'previousBlockhash: <string> - the blockhash of this blocks parent, as base-58 encoded string; if the parent block is not available due to ledger cleanup, this field will return "11111111111111111111111111111111"',
                    "parentSlot: <u64> - the slot index of this block's parent",
                    "transactions: <array> - an array of JSON objects containing:",
                    "transaction: <object|[string,encoding]> - Transaction object, either in JSON format or encoded binary data, depending on encoding parameter",
                    "meta: <object> - transaction status metadata object, containing null or:",
                    "err: <object | null> - Error if transaction failed, null if transaction succeeded. TransactionError definitions",
                    "fee: <u64> - fee this transaction was charged, as u64 integer",
                    "preBalances: <array> - array of u64 account balances from before the transaction was processed",
                    "postBalances: <array> - array of u64 account balances after the transaction was processed",
                    "DEPRECATED: status: <object> - Transaction status",
                    '"Ok": <null> - Transaction was successful',
                    '"Err": <ERR> - Transaction failed with TransactionError',
                    "rewards: <array> - an array of JSON objects containing:",
                    "pubkey: <string> - The public key, as base-58 encoded string, of the account that received the reward",
                    "lamports: <i64> - number of reward lamports credited or debited by the account, as a i64",
                    "blockTime: <i64 | null> - estimated production time, as Unix timestamp (seconds since the Unix epoch). null if not available",
                    "Example",
                    "Transaction Structure",
                    "Transactions are quite different from those on other blockchains. Be sure to review Anatomy of a Transaction to learn about transactions on Exzo Network.",
                    "The JSON structure of a transaction is defined as follows:",
                    "signatures: <array[string]> - A list of base-58 encoded signatures applied to the transaction. The list is always of length message.header.numRequiredSignatures, and the signature at index i corresponds to the public key at index i in message.account_keys.",
                    "message: <object> - Defines the content of the transaction.",
                    "accountKeys: <array[string]> - List of base-58 encoded public keys used by the transaction, including by the instructions and for signatures. The first message.header.numRequiredSignatures public keys must sign the transaction.",
                    "header: <object> - Details the account types and signatures required by the transaction.",
                    "numRequiredSignatures: <number> - The total number of signatures required to make the transaction valid. The signatures must match the first numRequiredSignatures of message.account_keys.",
                    "numReadonlySignedAccounts: <number> - The last numReadonlySignedAccounts of the signed keys are read-only accounts. Programs may process multiple transactions that load read-only accounts within a single PoH entry, but are not permitted to credit or debit lamports or modify account data. Transactions targeting the same read-write account are evaluated sequentially.",
                    "numReadonlyUnsignedAccounts: <number> - The last numReadonlyUnsignedAccounts of the unsigned keys are read-only accounts.",
                    "recentBlockhash: <string> - A base-58 encoded hash of a recent block in the ledger used to prevent transaction duplication and to give transactions lifetimes.",
                    "instructions: <array[object]> - List of program instructions that will be executed in sequence and committed in one atomic transaction if all succeed.",
                    "programIdIndex: <number> - Index into the message.accountKeys array indicating the program account that executes this instruction.",
                    "accounts: <array[number]> - List of ordered indices into the message.accountKeys array indicating which accounts to pass to the program.",
                    "data: <string> - The program input data encoded in a base-58 string.",
                    "getConfirmedBlocks",
                    "Returns a list of confirmed blocks",
                    "Parameters",
                    "<u64> - start_slot, as u64 integer",
                    "<u64> - (optional) end_slot, as u64 integer",
                    "Results",
                    "The result field will be an array of u64 integers listing confirmed blocks between start_slot and either end_slot, if provided, or latest confirmed block, inclusive. Max range allowed is 500,000 slots.",
                    "Example",
                    "getConfirmedBlocksWithLimit",
                    "Returns a list of confirmed blocks starting at the given slot",
                    "Parameters",
                    "<u64> - start_slot, as u64 integer",
                    "<u64> - limit, as u64 integer",
                    '(optional) Commitment; "processed" is not supported. If parameter not provided, the default is "finalized".',
                    "Results",
                    "The result field will be an array of u64 integers listing confirmed blocks starting at start_slot for up to limit blocks, inclusive.",
                    "Example",
                    "getConfirmedSignaturesForAddress",
                    "DEPRECATED: Please use getConfirmedSignaturesForAddress2 instead",
                    "Returns a list of all the confirmed signatures for transactions involving an address, within a specified Slot range. Max range allowed is 10,000 Slots",
                    "Parameters",
                    "<string> - account address as base-58 encoded string",
                    "<u64> - start slot, inclusive",
                    "<u64> - end slot, inclusive",
                    "Results",
                    "The result field will be an array of:",
                    "<string> - transaction signature as base-58 encoded string",
                    "The signatures will be ordered based on the Slot in which they were confirmed in, from lowest to highest Slot",
                    "Example",
                    "getConfirmedSignaturesForAddress2",
                    "Returns confirmed signatures for transactions involving an address backwards in time from the provided signature or most recent confirmed block",
                    "Parameters",
                    "<string> - account address as base-58 encoded string",
                    "<object> - (optional) Configuration object containing the following fields:",
                    "before: <string> - (optional) start searching backwards from this transaction signature. If not provided the search starts from the top of the highest max confirmed block.",
                    "limit: <number> - (optional) maximum transaction signatures to return (between 1 and 1,000, default: 1,000).",
                    "Results",
                    "The result field will be an array of transaction signature information, ordered from newest to oldest transaction:",
                    "<object>",
                    "signature: <string> - transaction signature as base-58 encoded string",
                    "slot: <u64> - The slot that contains the block with the transaction",
                    "err: <object | null> - Error if transaction failed, null if transaction succeeded. TransactionError definitions",
                    "memo: <string |null> - Memo associated with the transaction, null if no memo is present",
                    "Example",
                    "getConfirmedTransaction",
                    "Returns transaction details for a confirmed transaction",
                    "Parameters",
                    "<string> - transaction signature as base-58 encoded string N encoding attempts to use program-specific instruction parsers to return more human-readable and explicit data in the transaction.message.instructions list. If parsed-JSON is requested but a parser cannot be found, the instruction falls back to regular JSON encoding (accounts, data, and programIdIndex fields).",
                    '<string> - (optional) encoding for the returned Transaction, either "json", "jsonParsed", "base58" (slow), or "base64". If parameter not provided, the default encoding is JSON. jsonParsed encoding is UNSTABLE',
                    "Results",
                    "<null> - if transaction is not found or not confirmed",
                    "<object> - if transaction is confirmed, an object with the following fields:",
                    "slot: <u64> - the slot this transaction was processed in",
                    "transaction: <object|[string,encoding]> - Transaction object, either in JSON format or encoded binary data, depending on encoding parameter",
                    "meta: <object | null> - transaction status metadata object:",
                    "err: <object | null> - Error if transaction failed, null if transaction succeeded. TransactionError definitions",
                    "fee: <u64> - fee this transaction was charged, as u64 integer",
                    "preBalances: <array> - array of u64 account balances from before the transaction was processed",
                    "postBalances: <array> - array of u64 account balances after the transaction was processed",
                    "DEPRECATED: status: <object> - Transaction status",
                    '"Ok": <null> - Transaction was successful',
                    '"Err": <ERR> - Transaction failed with TransactionError',
                    "Example",
                    "getEpochInfo",
                    "Returns information about the current epoch",
                    "Parameters",
                    "<object> - (optional) Commitment",
                    "Results",
                    "The result field will be an object with the following fields:",
                    "absoluteSlot: <u64>, the current slot",
                    "blockHeight: <u64>, the current block height",
                    "epoch: <u64>, the current epoch",
                    "slotIndex: <u64>, the current slot relative to the start of the current epoch",
                    "slotsInEpoch: <u64>, the number of slots in this epoch",
                    "Example",
                    "getEpochSchedule",
                    "Returns epoch schedule information from this cluster's genesis config",
                    "Parameters",
                    "None",
                    "Results",
                    "The result field will be an object with the following fields:",
                    "slotsPerEpoch: <u64>, the maximum number of slots in each epoch",
                    "leaderScheduleSlotOffset: <u64>, the number of slots before beginning of an epoch to calculate a leader schedule for that epoch",
                    "warmup: <bool>, whether epochs start short and grow",
                    "firstNormalEpoch: <u64>, first normal-length epoch, log2(slotsPerEpoch) - log2(MINIMUM_SLOTS_PER_EPOCH)",
                    "firstNormalSlot: <u64>, MINIMUM_SLOTS_PER_EPOCH * (2.pow(firstNormalEpoch) - 1)",
                    "Example",
                    "getFeeCalculatorForBlockhash",
                    "Returns the fee calculator associated with the query blockhash, or null if the blockhash has expired",
                    "Parameters",
                    "<string> - query blockhash as a Base58 encoded string",
                    "<object> - (optional) Commitment",
                    "Results",
                    "The result will be an RpcResponse JSON object with value equal to:",
                    "<null> - if the query blockhash has expired",
                    "<object> - otherwise, a JSON object containing:",
                    "feeCalculator: <object>, FeeCalculator object describing the cluster fee rate at the queried blockhash",
                    "Example",
                    "getFeeRateGovernor",
                    "Returns the fee rate governor information from the root bank",
                    "Parameters",
                    "None",
                    "Results",
                    "The result field will be an object with the following fields:",
                    "burnPercent: <u8>, Percentage of fees collected to be destroyed",
                    "maxLamportssPerSignature: <u64>, Largest value lamportsPerSignature can attain for the next slot",
                    "minLamportsPerSignature: <u64>, Smallest value lamportsPerSignature can attain for the next slot",
                    "targetLamportsPerSignature: <u64>, Desired fee rate for the cluster",
                    "targetSignaturesPerSlot: <u64>, Desired signature rate for the cluster",
                    "Example",
                    "getFees",
                    "Returns a recent block hash from the ledger, a fee schedule that can be used to compute the cost of submitting a transaction using it, and the last slot in which the blockhash will be valid.",
                    "Parameters",
                    "<object> - (optional) Commitment",
                    "Results",
                    "The result will be an RpcResponse JSON object with value set to a JSON object with the following fields:",
                    "blockhash: <string> - a Hash as base-58 encoded string",
                    "feeCalculator: <object> - FeeCalculator object, the fee schedule for this block hash",
                    "lastValidSlot: <u64> - last slot in which a blockhash will be valid",
                    "Example",
                    "getFirstAvailableBlock",
                    "Returns the slot of the lowest confirmed block that has not been purged from the ledger",
                    "Parameters",
                    "None",
                    "Results",
                    "<u64> - Slot",
                    "Example",
                    "getGenesisHash",
                    "Returns the genesis hash",
                    "Parameters",
                    "None",
                    "Results",
                    "<string> - a Hash as base-58 encoded string",
                    "Example",
                    "getHealth",
                    "Returns the current health of the node.",
                    'If one or more --trusted-validator arguments are provided to exzonetwork-validator, "ok" is returned when the node has within HEALTH_CHECK_SLOT_DISTANCE slots of the highest trusted validator, otherwise an error is returned. "ok" is always returned if no trusted validators are provided.',
                    "Parameters",
                    "None",
                    "Results",
                    'If the node is healthy: "ok" If the node is unhealthy, a JSON RPC error response is returned. The specifics of the error response are UNSTABLE and may change in the future',
                    "Example",
                    "getIdentity",
                    "Returns the identity pubkey for the current node",
                    "Parameters",
                    "None",
                    "Results",
                    "The result field will be a JSON object with the following fields:",
                    "identity, the identity pubkey of the current node (as a base-58 encoded string)",
                    "Example",
                    "getInflationGovernor",
                    "Returns the current inflation governor",
                    "Parameters",
                    "<object> - (optional) Commitment",
                    "Results",
                    "The result field will be a JSON object with the following fields:",
                    "initial: <f64>, the initial inflation percentage from time 0",
                    "terminal: <f64>, terminal inflation percentage",
                    "taper: <f64>, rate per year at which inflation is lowered",
                    "foundation: <f64>, percentage of total inflation allocated to the foundation",
                    "foundationTerm: <f64>, duration of foundation pool inflation in years",
                    "Example",
                    "getInflationRate",
                    "Returns the specific inflation values for the current epoch",
                    "Parameters",
                    "None",
                    "Results",
                    "The result field will be a JSON object with the following fields:",
                    "total: <f64>, total inflation",
                    "validator: <f64>, inflation allocated to validators",
                    "foundation: <f64>, inflation allocated to the foundation",
                    "foundation: <f64>, percentage of total inflation allocated to the foundation",
                    "epoch: <f64>, epoch for which these values are valid",
                    "Example",
                    "getInflationReward",
                    "Returns the inflation reward for a list of addresses for an epoch",
                    "Parameters",
                    "<array> - An array of addresses to query, as base-58 encoded strings",
                    "<object> - (optional) Configuration object containing the following optional fields:",
                    "(optional) Commitment",
                    "(optional) epoch: <u64> - An epoch for which the reward occurs. If omitted, the previous epoch will be used",
                    "Results",
                    "The result field will be a JSON array with the following fields:",
                    "epoch: <u64>, epoch for which reward occured",
                    "effectiveSlot: <u64>, the slot in which the rewards are effective",
                    "amount: <u64>, reward amount in lamports",
                    "foundation: <f64>, percentage of total inflation allocated to the foundation",
                    "postBalance: <u64>, post balance of the account in lamports",
                    "Example",
                    "getLargestAccounts",
                    "Returns the 20 largest accounts, by lamport balance",
                    "Parameters",
                    "<object> - (optional) Configuration object containing the following optional fields:",
                    "(optional) Commitment",
                    "(optional) filter: <string> - filter results by account type; currently supported: circulating|nonCirculating",
                    "Results",
                    "The result will be an RpcResponse JSON object with value equal to an array of:",
                    "<object> - otherwise, a JSON object containing:",
                    "address: <string>, base-58 encoded address of the account",
                    "lamports: <u64>, number of lamports in the account, as a u64",
                    "Example",
                    "getLeaderSchedule",
                    "Returns the leader schedule for an epoch",
                    "Parameters",
                    "<u64> - (optional) Fetch the leader schedule for the epoch that corresponds to the provided slot. If unspecified, the leader schedule for the current epoch is fetched",
                    "<object> - (optional) Commitment",
                    "Results",
                    "<null> - if requested epoch is not found",
                    "<object> - otherwise, the result field will be a dictionary of leader public keys (as base-58 encoded strings) and their corresponding leader slot indices as values (indices are to the first slot in the requested epoch)",
                    "Example",
                    "getMaxRetransmitSlot",
                    "Get the max slot seen from retransmit stage.",
                    "Results",
                    "<u64> - Slot",
                    "Example",
                    "getMaxShredInsertSlot",
                    "Get the max slot seen from after shred insert.",
                    "Results",
                    "<u64> - Slot",
                    "Example",
                    "getMinimumBalanceForRentExemption",
                    "Returns minimum balance required to make account rent exempt.",
                    "Parameters",
                    "<usize> - account data length",
                    "<object> - (optional) Commitment",
                    "Results",
                    "<u64> - minimum lamports required in account",
                    "Example",
                    "getMultipleAccounts",
                    "Returns the account information for a list of Pubkeys",
                    "Parameters",
                    "<array> - An array of Pubkeys to query, as base-58 encoded strings",
                    "<object> - (optional) Configuration object containing the following optional fields:",
                    "(optional) Commitment",
                    'encoding: <string> - encoding for Account data, either "base58" (slow), "base64", or jsonParsed". "base58" is limited to Account data of less than 128 bytes. "base64" will return base64 encoded data for Account data of any size. Parsed-JSON encoding attempts to use program-specific state parsers to return more human-readable and explicit account state data. If parsed-JSON is requested but a parser cannot be found, the field falls back to base64 encoding, detectable when the data field is type <string>. jsonParsed encoding is UNSTABLE',
                    '(optional) dataSlice: <object> - limit the returned account data using the provided offset: <usize> and length: <usize> fields; only available for "base58" or "base64" encoding.',
                    "Results",
                    "The result will be an RpcResponse JSON object with value equal to:",
                    "An array of:",
                    "<null> - if the account at that Pubkey doesn't exist",
                    "<object> - otherwise, a JSON object containing:",
                    "lamports: <u64>, number of lamports assigned to this account, as a u64",
                    "owner: <string>, base-58 encoded Pubkey of the program this account has been assigned to",
                    "data: <[string, encoding]|object>, data associated with the account, either as encoded binary data or JSON format {<program>: <state>}, depending on encoding parameter",
                    "executable: <bool>, boolean indicating if the account contains a program (and is strictly read-only)",
                    "rentEpoch: <u64>, the epoch at which this account will next owe rent, as u64",
                    "Example",
                    "getProgramAccounts",
                    "Returns all accounts owned by the provided program Pubkey",
                    "Parameters",
                    "<string> - Pubkey of program, as base-58 encoded string",
                    "<object> - (optional) Configuration object containing the following optional fields:",
                    "(optional) Commitment",
                    'encoding: <string> - encoding for Account data, either "base58" (slow), "base64" or jsonParsed". Parsed-JSON encoding attempts to use program-specific state parsers to return more human-readable and explicit account state data. If parsed-JSON is requested but a parser cannot be found, the field falls back to base64 encoding, detectable when the data field is type <string>. If parsed-JSON is requested for the SPL Token program, when a valid mint cannot be found for a particular account, that account will be filtered out from results. jsonParsed encoding is UNSTABLE',
                    '(optional) dataSlice: <object> - limit the returned account data using the provided offset: <usize> and length: <usize> fields; only available for "base58" or "base64" encoding.',
                    "(optional) filters: <array> - filter results using various filter objects; account must meet all filter criteria to be included in results",
                    "Filters",
                    "memcmp: <object> - compares a provided series of bytes with program account data at a particular offset. Fields:",
                    "offset: <usize> - offset into program account data to start comparison",
                    "bytes: <string> - data to match, as base-58 encoded string",
                    "dataSize: <u64> - compares the program account data length with the provided data size",
                    "Results",
                    "The result field will be an array of JSON objects, which will contain:",
                    "pubkey: <string> - the account Pubkey as base-58 encoded string",
                    "account: <object> - a JSON object, with the following sub fields:",
                    "lamports: <u64>, number of lamports assigned to this account, as a u64",
                    "owner: <string>, base-58 encoded Pubkey of the program this account has been assigned to data: <[string,encoding]|object>, data associated with the account, either as encoded binary data or JSON format {<program>: <state>}, depending on encoding parameter",
                    "executable: <bool>, boolean indicating if the account contains a program (and is strictly read-only)",
                    "rentEpoch: <u64>, the epoch at which this account will next owe rent, as u64",
                    "Example",
                    "getRecentBlockhash",
                    "Returns a recent block hash from the ledger, and a fee schedule that can be used to compute the cost of submitting a transaction using it.",
                    "Parameters",
                    "<object> - (optional) Commitment",
                    "Results",
                    "An RpcResponse containing a JSON object consisting of a string blockhash and FeeCalculator JSON object.",
                    "RpcResponse<object> - RpcResponse JSON object with value field set to a JSON object including:",
                    "blockhash: <string> - a Hash as base-58 encoded string",
                    "feeCalculator: <object> - FeeCalculator object, the fee schedule for this block hash",
                    "Example",
                    "getRecentPerformanceSamples",
                    "Returns a list of recent performance samples, in reverse slot order. Performance samples are taken every 60 seconds and include the number of transactions and slots that occur in a given time window.",
                    "Parameters",
                    "limit: <usize> - (optional) number of samples to return (maximum 720)",
                    "Results",
                    "An array of:",
                    "RpcPerfSample<object>",
                    "slot: <u64> - Slot in which sample was taken at",
                    "numTransactions: <u64> - Number of transactions in sample",
                    "numSlots: <u64> - Number of slots in sample",
                    "samplePeriodSecs: <u16> - Number of seconds in a sample window",
                    "Example",
                    "getSnapshotSlot",
                    "Returns the highest slot that the node has a snapshot for",
                    "Parameters",
                    "None",
                    "Results",
                    "<u64> - Snapshot slot",
                    "Example",
                    "getSignatureStatuses",
                    "Returns the statuses of a list of signatures. Unless the searchTransactionHistory configuration parameter is included, this method only searches the recent status cache of signatures, which retains statuses for all active slots plus MAX_RECENT_BLOCKHASHES rooted slots.",
                    "Parameters",
                    "<array> - An array of transaction signatures to confirm, as base-58 encoded strings",
                    "<object> - (optional) Configuration object containing the following field:",
                    "searchTransactionHistory: <bool> - if true, a Exzo Network node will search its ledger cache for any signatures not found in the recent status cache",
                    "Results",
                    "An RpcResponse containing a JSON object consisting of an array of TransactionStatus objects.",
                    "RpcResponse<object> - RpcResponse JSON object with value field:",
                    "An array of:",
                    "<null> - Unknown transaction",
                    "<object>",
                    "slot: <u64> - The slot the transaction was processed",
                    "confirmations: <usize | null> - Number of blocks since signature confirmation, null if rooted, as well as finalized by a supermajority of the cluster",
                    "err: <object | null> - Error if transaction failed, null if transaction succeeded. TransactionError definitions",
                    "DEPRECATED: status: <object> - Transaction status",
                    '"Ok": <null> - Transaction was successful',
                    '"Err": <ERR> - Transaction failed with TransactionError',
                    "Example",
                    "getSlot",
                    "Returns the current slot the node is processing",
                    "Parameters",
                    "<object> - (optional) Commitment",
                    "Results",
                    "<u64> - Current slot",
                    "Example",
                    "getSlotLeader",
                    "Returns the current slot leader",
                    "Parameters",
                    "<object> - (optional) Commitment",
                    "Results",
                    "<string> - Node identity Pubkey as base-58 encoded string",
                    "Example",
                    "getSlotLeaders",
                    "Returns the slot leaders for a given slot range",
                    "Parameters",
                    "<u64> - Start slot, as u64 integer",
                    "<u64> - Limit, as u64 integer",
                    "Results",
                    "<array<string>> - Node identity public keys as base-58 encoded strings",
                    "Example",
                    "getStakeActivation",
                    "Returns epoch activation information for a stake account",
                    "Parameters",
                    "<string> - Pubkey of stake account to query, as base-58 encoded string",
                    "<object> - (optional) Configuration object containing the following optional fields:",
                    "<object> - (optional) Commitment",
                    "(optional) epoch: <u64> - epoch for which to calculate activation details. If parameter not provided, defaults to current epoch.",
                    "Results",
                    "The result will be a JSON object with the following fields:",
                    "state: <string - the stake account's activation state, one of: active, inactive, activating, deactivating",
                    "active: <u64> - stake active during the epoch",
                    "inactive: <u64> - stake inactive during the epoch",
                    "Example",
                    "getSupply",
                    "Returns information about the current supply.",
                    "Parameters",
                    "<object> - (optional) Commitment",
                    "Results",
                    "The result will be an RpcResponse JSON object with value equal to a JSON object containing:",
                    "total: <u64> - Total supply in lamports",
                    "circulating: <u64> - Circulating supply in lamports",
                    "nonCirculating: <u64> - Non-circulating supply in lamports",
                    "nonCirculatingAccounts: <array> - an array of account addresses of non-circulating accounts, as strings",
                    "Example"
                ]
            ],
            [
                "getTokenAccountBalance",
                "get-token-account-balance",
                [
                    "Returns the token balance of an SPL Token account.",
                    "Parameters",
                    "<string> - Pubkey of Token account to query, as base-58 encoded string",
                    "<object> - (optional) Commitment",
                    "Results",
                    "The result will be an RpcResponse JSON object with value equal to a JSON object containing:",
                    "amount: <string> - the raw balance without decimals, a string representation of u64",
                    "decimals: <u8> - number of base 10 digits to the right of the decimal place",
                    "uiAmount: <number | null> - the balance, using mint-prescribed decimals DEPRECATED",
                    "uiAmountString: <string> - the balance as a string, using mint-prescribed decimals",
                    "Example"
                ]
            ],
            [
                "getTokenAccountsByDelegate",
                "get-token-accounts-by-delegate",
                [
                    "Returns all SPL Token accounts by approved Delegate. UNSTABLE",
                    "Parameters",
                    "<string> - Pubkey of account delegate to query, as base-58 encoded string",
                    "<object> - Either:",
                    "mint: <string> - Pubkey of the specific token Mint to limit accounts to, as base-58 encoded string; or",
                    "programId: <string> - Pubkey of the Token program ID that owns the accounts, as base-58 encoded string",
                    "<object> - (optional) Configuration object containing the following optional fields:",
                    "<object> - (optional) Commitment",
                    'encoding: <string> - encoding for Account data, either "base58" (slow), "base64", "base64+zstd" or "jsonParsed". "jsonParsed" encoding attempts to use program-specific state parsers to return more human-readable and explicit account state data. If "jsonParsed" is requested but a valid mint cannot be found for a particular account, that account will be filtered out from results.',
                    '(optional) dataSlice: <object> - limit the returned account data using the provided offset: <usize> and length: <usize> fields; only available for "base58","base64" or "base64+zstd" encodings.',
                    "Results",
                    "The result will be an RpcResponse JSON object with value equal to an array of JSON objects, which will contain:",
                    "pubkey: <string> - the account Pubkey as base-58 encoded string",
                    "account: <object> - a JSON object, with the following sub fields:",
                    "lamports: <u64>, number of lamports assigned to this account, as a u64",
                    "owner: <string>, base-58 encoded Pubkey of the program this account has been assigned to",
                    "data: <object>, Token state data associated with the account, either as encoded binary data or in JSON format {<program>: <state>}",
                    "executable: <bool>, boolean indicating if the account contains a program (and is strictly read-only)",
                    "rentEpoch: <u64>, the epoch at which this account will next owe rent, as u64",
                    "Example"
                ]
            ],
            [
                "getTokenAccountsByOwner",
                "get-token-accounts-by-owner",
                [
                    "Returns all SPL Token accounts by token owner.",
                    "Parameters",
                    "<string> - Pubkey of account owner to query, as base-58 encoded string",
                    "<object> - Either:",
                    "mint: <string> - Pubkey of the specific token Mint to limit accounts to, as base-58 encoded string; or",
                    "programId: <string> - Pubkey of the Token program ID that owns the accounts, as base-58 encoded string",
                    "<object> - (optional) Configuration object containing the following optional fields:",
                    "<object> - (optional) Commitment",
                    'encoding: <string> - encoding for Account data, either "base58" (slow), "base64", "base64+zstd" or "jsonParsed". "jsonParsed" encoding attempts to use program-specific state parsers to return more human-readable and explicit account state data. If "jsonParsed" is requested but a valid mint cannot be found for a particular account, that account will be filtered out from results.',
                    '(optional) dataSlice: <object> - limit the returned account data using the provided offset: <usize> and length: <usize> fields; only available for "base58","base64" or "base64+zstd" encodings.',
                    "Results",
                    "The result will be an RpcResponse JSON object with value equal to an array of JSON objects, which will contain:",
                    "pubkey: <string> - the account Pubkey as base-58 encoded string",
                    "account: <object> - a JSON object, with the following sub fields:",
                    "lamports: <u64>, number of lamports assigned to this account, as a u64",
                    "owner: <string>, base-58 encoded Pubkey of the program this account has been assigned to",
                    "data: <object>, Token state data associated with the account, either as encoded binary data or in JSON format {<program>: <state>}",
                    "executable: <bool>, boolean indicating if the account contains a program (and is strictly read-only)",
                    "rentEpoch: <u64>, the epoch at which this account will next owe rent, as u64",
                    "Example"
                ]
            ],
            [
                "getTokenLargestAccounts",
                "get-token-largest-accounts",
                [
                    "Returns the 20 largest accounts of a particular SPL Token type.",
                    "Parameters",
                    "<string> - Pubkey of token Mint to query, as base-58 encoded string",
                    "<object> - (optional) Commitment",
                    "Results",
                    "The result will be an RpcResponse JSON object with value equal to an array of JSON objects containing:",
                    "address: <string> - the address of the token account",
                    "amount: <string> - the raw token account balance without decimals, a string representation of u64",
                    "decimals: <u8> - number of base 10 digits to the right of the decimal place",
                    "uiAmount: <number | null> - the token account balance, using mint-prescribed decimals DEPRECATED",
                    "uiAmountString: <string> - the token account balance as a string, using mint-prescribed decimals",
                    "Example"
                ]
            ],
            [
                "getTokenSupply",
                "get-token-supply",
                [
                    "Returns the total supply of an SPL Token type.",
                    "Parameters",
                    "<string> - Pubkey of token Mint to query, as base-58 encoded string",
                    "<object> - (optional) Commitment",
                    "Results",
                    "The result will be an RpcResponse JSON object with value equal to a JSON object containing:",
                    "amount: <string> - the raw total token supply without decimals, a string representation of u64",
                    "decimals: <u8> - number of base 10 digits to the right of the decimal place",
                    "uiAmount: <number | null> - the total token supply, using mint-prescribed decimals DEPRECATED",
                    "uiAmountString: <string> - the total token supply as a string, using mint-prescribed decimals",
                    "Example"
                ]
            ],
            [
                "getTransactionCount",
                "get-transaction-count",
                [
                    "Returns the current Transaction count from the ledger",
                    "Parameters",
                    "<object> - (optional) Commitment",
                    "Results",
                    "<u64> - count",
                    "Example"
                ]
            ],
            [
                "getVersion",
                "get-version",
                [
                    "Returns the current Exzo Network versions running on the node",
                    "Parameters",
                    "None",
                    "Results",
                    "The result field will be a JSON object with the following fields:",
                    "solana-core, software version of solana-core",
                    "Example"
                ]
            ],
            [
                "getVoteAccounts",
                "get-vote-accounts",
                [
                    "Returns the account info and associated stake for all the voting accounts in the current bank.",
                    "Parameters",
                    "<object> - (optional) Commitment",
                    "Results",
                    "The result field will be a JSON object of current and delinquent accounts, each containing an array of JSON objects with the following sub fields:",
                    "votePubkey: <string> - Vote account public key, as base-58 encoded string",
                    "nodePubkey: <string> - Node public key, as base-58 encoded string",
                    "activatedStake: <u64> - the stake, in lamport, delegated to this vote account and active in this epoch",
                    "epochVoteAccount: <bool> - bool, whether the vote account is staked for this epoch",
                    "commission: <number>, percentage (0-100) of rewards payout owed to the vote account",
                    "lastVote: <u64> - Most recent slot voted on by this vote account",
                    "epochCredits: <array> - History of how many credits earned by the end of each epoch, as an array of arrays containing: [epoch, credits, previousCredits]",
                    "Example"
                ]
            ],
            [
                "minimumLedgerSlot",
                "minimum-ledger-slot",
                [
                    "Returns the lowest slot that the node has information about in its ledger. This value may increase over time if the node is configured to purge older ledger data",
                    "Parameters",
                    "None",
                    "Results",
                    "u64 - Minimum ledger slot",
                    "Example"
                ]
            ],
            [
                "requestAirdrop",
                "request-airdrop",
                [
                    "Requests an airdrop of lamports to a Pubkey",
                    "Parameters",
                    "<string> - Pubkey of account to receive lamports, as base-58 encoded string",
                    "<integer> - lamports, as a u64",
                    "<object> - (optional) Commitment (used for retrieving blockhash and verifying airdrop success)",
                    "Results",
                    "<string> - Transaction Signature of airdrop, as base-58 encoded string",
                    "Example"
                ]
            ],
            [
                "sendTransaction",
                "send-transaction",
                [
                    "Submits a signed transaction to the cluster for processing.",
                    "Before submitting, the following preflight checks are performed:",
                    "The transaction signatures are verified",
                    "The transaction is simulated against the latest max confirmed bank and on failure an error will be returned. Preflight checks may be disabled if desired.",
                    "Parameters",
                    "<string> - fully-signed Transaction, as base-58 encoded string",
                    "<object> - (optional) Configuration object containing the following field:",
                    "skipPreflight: <bool> - if true, skip the preflight transaction checks (default: false)",
                    'preflightCommitment: <string> - (optional) Commitment level to use for preflight (default: "max").',
                    "Results",
                    "<string> - Transaction Signature, as base-58 encoded string",
                    "Example"
                ]
            ],
            [
                "simulateTransaction",
                "simulate-transaction",
                [
                    "Simulate sending a transaction",
                    "Parameters",
                    "<string> - Transaction, as base-58 encoded string. The transaction must have a valid blockhash, but is not required to be signed.",
                    "<object> - (optional) Configuration object containing the following field:",
                    "sigVerify: <bool> - if true the transaction signatures will be verified (default: false)",
                    'commitment: <string> - (optional) Commitment level to simulate the transaction at (default: "max").',
                    "Results",
                    "An RpcResponse containing a TransactionStatus object The result will be an RpcResponse JSON object with value set to a JSON object with the following fields:",
                    "err: <object | string | null> - Error if transaction failed, null if transaction succeeded. TransactionError definitions",
                    "logs: <array | null> - Array of log messages the transaction instructions output during execution, null if simulation failed before the transaction was able to execute (for example due to an invalid blockhash or signature verification failure)",
                    "Example"
                ]
            ],
            [
                "Subscription Websocket",
                "subscription-websocket",
                [
                    "After connecting to the RPC PubSub websocket at ws://<ADDRESS>/:",
                    "Submit subscription requests to the websocket using the methods below",
                    "Multiple subscriptions may be active at once",
                    'Many subscriptions take the optional commitment parameter, defining how finalized a change should be to trigger a notification. For subscriptions, if commitment is unspecified, the default value is "single".',
                    "accountSubscribe",
                    "Subscribe to an account to receive notifications when the lamports or data for a given account public key changes",
                    "Parameters",
                    "<string> - account Pubkey, as base-58 encoded string",
                    "<object> - (optional) Configuration object containing the following optional fields:",
                    "<object> - (optional) Commitment",
                    'encoding: <string> - encoding for Account data, either "base58" (slow), "base64" or jsonParsed". Parsed-JSON encoding attempts to use program-specific state parsers to return more human-readable and explicit account state data. If parsed-JSON is requested but a parser cannot be found, the field falls back to binary encoding, detectable when the data field is type <string>. jsonParsed encoding is UNSTABLE',
                    "Results",
                    "<number> - Subscription id (needed to unsubscribe)",
                    "Example"
                ]
            ],
            [
                "accountUnsubscribe",
                "account-unsubscribe",
                [
                    "Unsubscribe from account change notifications",
                    "Parameters",
                    "<number> - id of account Subscription to cancel",
                    "Results",
                    "<bool> - unsubscribe success message",
                    "Example"
                ]
            ],
            [
                "programSubscribe",
                "program-subscribe",
                [
                    "Subscribe to a program to receive notifications when the lamports or data for a given account owned by the program changes",
                    "Parameters",
                    "<string> - program_id Pubkey, as base-58 encoded string",
                    "<object> - (optional) Configuration object containing the following optional fields:",
                    "(optional) Commitment",
                    'encoding: <string> - encoding for Account data, either "base58" (slow), "base64" or jsonParsed". Parsed-JSON encoding attempts to use program-specific state parsers to return more human-readable and explicit account state data. If parsed-JSON is requested but a parser cannot be found, the field falls back to base64 encoding, detectable when the data field is type <string>. jsonParsed encoding is UNSTABLE',
                    "(optional) filters: <array> - filter results using various filter objects; account must meet all filter criteria to be included in results",
                    "Results",
                    "<integer> - Subscription id (needed to unsubscribe)",
                    "Example"
                ]
            ],
            [
                "logsSubscribe",
                "logs-subscribe",
                [
                    "Subscribe to transaction logging",
                    "Parameters",
                    "filter: <string>|<object> - filter criteria for the logs to receive results by account type; currently supported:",
                    "all - subscribe to all transactions except for simple vote transactions",
                    "allWithVotes - subscribe to all transactions including simple vote transactions",
                    '{ "mentions": [ <string> ] } - subscribe to all transactions that mention the provided Pubkey (as base-58 encoded string)',
                    "<object> - (optional) Configuration object containing the following optional fields:",
                    "(optional) Commitment",
                    "Results",
                    "<integer> - Subscription id (needed to unsubscribe)",
                    "Example"
                ]
            ],
            [
                "logsUnsubscribe",
                "logs-unsubscribe",
                [
                    "Unsubscribe from transaction logging",
                    "Parameters",
                    "<integer> - id of subscription to cancel",
                    "Results",
                    "<bool> - unsubscribe success message",
                    "Example"
                ]
            ],
            [
                "programUnsubscribe",
                "program-unsubscribe",
                [
                    "Unsubscribe from program-owned account change notifications",
                    "Parameters",
                    "<integer> - id of account Subscription to cancel",
                    "Results",
                    "<bool> - unsubscribe success message",
                    "Example"
                ]
            ],
            [
                "signatureSubscribe",
                "signature-subscribe",
                [
                    "Subscribe to a transaction signature to receive notification when the transaction is confirmed On signatureNotification, the subscription is automatically cancelled",
                    "Parameters",
                    "<string> - Transaction Signature, as base-58 encoded string",
                    "(optional) Commitment",
                    "Results",
                    "integer - subscription id (needed to unsubscribe)",
                    "Example"
                ]
            ],
            [
                "signatureUnsubscribe",
                "signature-unsubscribe",
                [
                    "Unsubscribe from signature confirmation notification",
                    "Parameters",
                    "<integer> - subscription id to cancel",
                    "Results",
                    "<bool> - unsubscribe success message",
                    "Example"
                ]
            ],
            [
                "slotSubscribe",
                "slot-subscribe",
                [
                    "Subscribe to receive notification anytime a slot is processed by the validator",
                    "Parameters",
                    "None",
                    "Results",
                    "integer - subscription id (needed to unsubscribe)",
                    "Example"
                ]
            ],
            [
                "Notification Format",
                "notification-format",
                [
                    "Subscribe to receive notification anytime a slot is processed by the validator",
                    "Parameters",
                    "None",
                    "Results",
                    "integer - subscription id (needed to unsubscribe)",
                    "Example"
                ]
            ],
            [
                "Notification Format",
                "notification-format-2",
                []
            ],
            [
                "slotUnsubscribe",
                "slot-unsubscribe",
                [
                    "Unsubscribe from slot notifications",
                    "Parameters",
                    "<integer> - subscription id to cancel",
                    "Results",
                    "<bool> - unsubscribe success message",
                    "Example"
                ]
            ],
            [
                "rootSubscribe",
                "root-subscribe",
                [
                    "Subscribe to receive notification anytime a new root is set by the validator.",
                    "Parameters",
                    "None",
                    "Results",
                    "integer - subscription id (needed to unsubscribe)",
                    "Example"
                ]
            ],
            [
                "Notification Format",
                "notification-format-3",
                [
                    "The result is the latest root slot number."
                ]
            ],
            [
                "rootUnsubscribe",
                "root-unsubscribe",
                [
                    "Unsubscribe from root notifications",
                    "Parameters",
                    "<integer> - subscription id to cancel",
                    "Results",
                    "<bool> - unsubscribe success message",
                    "Example"
                ]
            ],
            [
                "voteSubscribe - Unstable, disabled by default",
                "vote-subscribe-unstable-disabled-by-default",
                [
                    "This subscription is unstable and only available if the validator was started with the --rpc-pubsub-enable-vote-subscription flag. The format of this subscription may change in the future.",
                    "Subscribe to receive notification anytime a new vote is observed in gossip. These votes are pre-consensus therefore there is no guarantee these votes will enter the ledger.",
                    "Parameters",
                    "None",
                    "Results",
                    "integer - subscription id (needed to unsubscribe)",
                    "Example"
                ]
            ],
            [
                "Notification Format",
                "notification-format-4",
                [
                    "The result is the latest vote, containing its hash, a list of voted slots, and an optional timestamp."
                ]
            ],
            [
                "voteUnsubscribe",
                "vote-unsubscribe",
                [
                    "Unsubscribe from vote notifications",
                    "Parameters",
                    "<integer> - subscription id to cancel",
                    "Results",
                    "<bool> - unsubscribe success message",
                    "Example"
                ]
            ],
            [
                "JavaScript API",
                "java-script-api",
                [
                    "This is the Exzo Network Javascript API built on JSON RPC API"
                ]
            ],
            [
                "Installation",
                "installation",
                []
            ],
            [
                "Development Environment Setup",
                "development-environment-setup",
                [
                    "Install the latest Exzo Network release from https://docs.exzonetwork.com/cli/install-exzonetwork-cli-tools",
                    "BPF program development",
                    "Use cargo build-bpf from the latest release"
                ]
            ],
            [
                "Usage",
                "usage",
                []
            ],
            [
                "Examples",
                "examples",
                [
                    "Example scripts for the web3.js repo and native programs:",
                    "Web3 Examples",
                    "Example scripts for the Solana Program Library:",
                    "Token Program Examples"
                ]
            ],
            [
                "Flow",
                "flow",
                [
                    "A Flow library definition is provided at https://unpkg.com/@solana/web3.js@latest/module.flow.js. Download the file and add the following line under the [libs] section of your project’s .flowconfig to activate it: "
                ]
            ],
            [
                "Releases",
                "releases",
                [
                    "Releases are available on Github and npmjs.com",
                    "Each Github release features a tarball containing API documentation and a minified version of the module suitable for direct use in a browser environment (<script> tag)"
                ]
            ],
            [
                "Disclaimer",
                "disclaimer",
                [
                    "All claims, content, designs, algorithms, estimates, roadmaps, specifications, and performance measurements described in this project are done with the Solana Foundation’s (“SF”) best efforts. It is up to the reader to check and validate their accuracy and truthfulness. Furthermore nothing in this project constitutes a solicitation for investment.",
                    "Any content produced by SF or developer resources that SF provides, are for educational and inspiration purposes only. SF does not encourage, induce or sanction the deployment, integration or use of any such applications (including the code comprising the Solana blockchain protocol) in violation of applicable laws or regulations and hereby prohibits any such deployment, integration or use. This includes use of any such applications by the reader (a) in violation of export control or sanctions laws of the United States or any other applicable jurisdiction, (b) if the reader is located in or ordinarily resident in a country or territory subject to comprehensive sanctions administered by the U.S. Office of Foreign Assets Control (OFAC), or (c) if the reader is or is working on behalf of a Specially Designated National (SDN) or a person subject to similar blocking or denied party prohibitions.",
                    "The reader should be aware that U.S. export control and sanctions laws prohibit U.S. persons (and other persons that are subject to such laws) from transacting with persons in certain countries and territories or that are on the SDN list. As a project based primarily on open-source software, it is possible that such sanctioned persons may nevertheless bypass prohibitions, obtain the code comprising the Solana blockchain protocol (or other project code or applications) and deploy, integrate, or otherwise use it. Accordingly, there is a risk to individuals that other persons using the Solana blockchain protocol may be sanctioned persons and that transactions with such persons would be a violation of U.S. export controls and sanctions law. This risk applies to individuals, organizations, and other ecosystem participants that deploy, integrate, or use the Solana blockchain protocol code directly (e.g., as a node operator), and individuals that transact on the Solana blockchain through light clients, third party interfaces, and/or wallet software."
                ]
            ],
            [
                "Rust API",
                "rust-api",
                [
                    "See rust.exzo.network for documentation of all crates published by Exzo Network. In particular exzonetwork-sdk for working with common data structures and exzonetwork-client for querying the JSON RPC API."
                ]
            ],
            [
                "Native Programs",
                "native-programs",
                [
                    "Exzo Network contains a small handful of native programs, which are required to run validator nodes. Unlike third-party programs, the native programs are part of the validator implementation and can be upgraded as part of cluster upgrades. Upgrades may occur to add features, fix bugs, or improve performance. Interface changes to individual instructions should rarely, if ever, occur. Instead, when change is needed, new instructions are added and previous ones are marked deprecated. Apps can upgrade on their own timeline without concern of breakages across upgrades.",
                    "For each native program the program id and description each supported instruction is provided. A transaction can mix and match instructions from different programs, as well include instructions from on-chain programs."
                ]
            ],
            [
                "System Program",
                "system-program",
                [
                    "Create new accounts, allocate account data, assign accounts to owning programs, transfer lamports from System Program owned accounts and pay transacation fees.",
                    "Program id: 11111111111111111111111111111111",
                    "Instructions: SystemInstruction"
                ]
            ],
            [
                "Config Program",
                "config-program",
                [
                    "Add configuration data to the chain and the list of public keys that are permitted to modify it",
                    'Program id: Config1111111111111111111111111111111111111 Instructions: config_instruction Unlike the other programs, the Config program does not define any individual instructions. It has just one implicit instruction, a "store" instruction. Its instruction data is a set of keys that gate access to the account, and the data to store in it.'
                ]
            ],
            [
                "Stake Program",
                "stake-program",
                [
                    "Create and manage accounts representing stake and rewards for delegations to validators.",
                    "Program id: Stake11111111111111111111111111111111111111",
                    "Instructions: StakeInstruction"
                ]
            ],
            [
                "Vote Program",
                "vote-program",
                [
                    "Create and manage accounts that track validator voting state and rewards.",
                    "Program id: Vote111111111111111111111111111111111111111",
                    "Instructions: VoteInstruction"
                ]
            ],
            [
                "BPF Loader",
                "bpf-loader",
                [
                    "Deploys, upgrades, and executes programs on the chain.",
                    "Program id: BPFLoaderUpgradeab1e11111111111111111111111",
                    'Instructions: LoaderInstruction The BPF Upgradeable Loader marks itself as "owner" of the executable and program-data accounts it creates to store your program. When a user invokes an instruction via a program id, the Exzo Network runtime will load both you’re the program and its owner, the BPF Upgradeable Loader. The runtime then passes your program to the BPF Upgradeable Loader to process the instruction.',
                    "More information about deployment"
                ]
            ],
            [
                "Secp256k1 Program",
                "secp256k1-program",
                [
                    "Verify secp256k1 public key recovery operations (ecrecover).",
                    "Program id: KeccakSecp256k11111111111111111111111111111",
                    "Instructions: new_secp256k1_instruction The secp256k1 program processes an instruction which takes in as the first byte a count of the following struct serialized in the instruction data:",
                    "Pseudo code of the operation:",
                    "This allows the user to specify any instruction data in the transaction for signature and message data. By specifying a special instructions sysvar, one can also receive data from the transaction itself.",
                    "Cost of the transaction will count the number of signatures to verify multiplied by the signature cost verify multiplier."
                ]
            ],
            [
                "Optimization notes",
                "optimization-notes",
                [
                    "The operation will have to take place after (at least partial) deserialization, but all inputs come from the transaction data itself, this allows it to be relatively easy to execute in parallel to transaction processing and PoH verification."
                ]
            ],
            [
                "Sysvar Cluster Data",
                "sysvar-cluster-data",
                [
                    "Exzo Network exposes a variety of cluster state data to programs via sysvar accounts. These accounts are populated at known addresses published along with the account layouts in the solana-program crate, and outlined below.",
                    "To include sysvar data in program operations, pass the sysvar account address in the list of accounts in a transaction. The account can be read in your instruction processor like any other account. Access to sysvars accounts is always readonly."
                ]
            ],
            [
                "Clock",
                "clock",
                [
                    "The Clock sysvar contains data on cluster time, including the current slot, epoch, and estimated wall-clock Unix timestamp. It is updated every slot.",
                    "Address: SysvarC1ock11111111111111111111111111111111",
                    "Layout: Clock",
                    "Fields:",
                    "slot: the current slot",
                    "epoch_start_timestamp: the Unix timestamp of the first slot in this epoch. In the first slot of an epoch, this timestamp is identical to the unix_timestamp (below).",
                    "epoch: the current epoch",
                    "leader_schedule_epoch: the most recent epoch for which the leader schedule has already been generated",
                    "unix_timestamp: the Unix timestamp of this slot. Each slot has an estimated duration based on Proof of History. But in reality, slots may elapse faster and slower than this estimate. As a result, the Unix timestamp of a slot is generated based on oracle input from voting validators. This timestamp is calculated as the stake-weighted median of timestamp estimates provided by votes, bounded by the expected time elapsed since the start of the epoch.",
                    "More explicitly: for each slot, the most recent vote timestamp provided by each validator is used to generate a timestamp estimate for the current slot (the elapsed slots since the vote timestamp are assumed to be Bank::ns_per_slot). Each timestamp estimate is associated with the stake delegated to that vote account to create a distribution of timestamps by stake. The median timestamp is used as the unix_timestamp, unless the elapsed time since the epoch_start_timestamp has deviated from the expected elapsed time by more than 25%."
                ]
            ],
            [
                "EpochSchedule",
                "epoch-schedule",
                [
                    "The EpochSchedule sysvar contains epoch scheduling constants that are set in genesis, and enables calculating the number of slots in a given epoch, the epoch for a given slot, etc. (Note: the epoch schedule is distinct from the leader schedule)",
                    "Address: SysvarEpochSchedu1e111111111111111111111111",
                    "Layout: EpochSchedule"
                ]
            ],
            [
                "Fees",
                "fees",
                [
                    "The Fees sysvar contains the fee calculator for the current slot. It is updated every slot, based on the fee-rate governor.",
                    "Address: SysvarFees111111111111111111111111111111111",
                    "Layout: Fees"
                ]
            ],
            [
                "Instructions",
                "instructions-2",
                [
                    "The Instructions sysvar contains the serialized instructions in a Message while that Message is being processed. This allows program instructions to reference other instructions in the same transaction.",
                    "Address: Sysvar1nstructions1111111111111111111111111",
                    "Layout: Instructions"
                ]
            ],
            [
                "RecentBlockhashes",
                "recent-blockhashes",
                [
                    "The RecentBlockhashes sysvar contains the active recent blockhashes as well as their associated fee calculators. It is updated every slot.",
                    "Address: SysvarRecentB1ockHashes11111111111111111111",
                    "Layout: RecentBlockhashes"
                ]
            ],
            [
                "Rent",
                "rent",
                [
                    "The Rent sysvar contains the rental rate. Currently, the rate is static and set in genesis. The Rent burn percentage is modified by manual feature activation.",
                    "Address: SysvarRent111111111111111111111111111111111",
                    "Layout: Rent"
                ]
            ],
            [
                "SlotHashes",
                "slot-hashes",
                [
                    "The SlotHashes sysvar contains the most recent hashes of the slot's parent banks. It is updated every slot.",
                    "Address: SysvarS1otHashes111111111111111111111111111",
                    "Layout: SlotHashes"
                ]
            ],
            [
                "SlotHistory",
                "slot-history",
                [
                    "The SlotHistory sysvar contains a bitvector of slots present over the last epoch. It is updated every slot.",
                    "Address: SysvarS1otHistory11111111111111111111111111",
                    "Layout: SlotHistory"
                ]
            ],
            [
                "StakeHistory",
                "stake-history",
                [
                    "The StakeHistory sysvar contains the history of cluster-wide stake activations and de-activations per epoch. It is updated at the start of every epoch.",
                    "Address: SysvarStakeHistory1111111111111111111111111",
                    "Layout: StakeHistory"
                ]
            ],
            [
                "Overview",
                "overview-2",
                [
                    "Developers can write and deploy their own programs to the Exzo Network blockchain.",
                    "The Helloworld example is a good starting place to see how a program is written, built, deployed, and interacted with on-chain."
                ]
            ],
            [
                "Berkley Packet Filter (BPF)",
                "berkley-packet-filter-bpf",
                [
                    "Exzo Network on-chain programs are compiled via the LLVM compiler infrastructure to an Executable and Linkable Format (ELF) containing a variation of the Berkley Packet Filter (BPF) bytecode.",
                    "Because Exzo Network uses the LLVM compiler infrastructure, a program may be written in any programming language that can target the LLVM's BPF backend. Exzo Network currently supports writing programs in Rust and C/C++.",
                    "BPF provides an efficient instruction set that can be executed in a interpreted virtual machine or as efficient just-in-time compiled native instructions."
                ]
            ],
            [
                "Memory map",
                "memory-map",
                [
                    "The virtual address memory map used by Exzo Network BPF programs is fixed and laid out as follows",
                    "Program code starts at 0x100000000",
                    "Stack data starts at 0x200000000",
                    "Heap data starts at 0x300000000",
                    "Program input parameters start at 0x400000000 The above virtual addresses are start addresses but programs are given access to a subset of the memory map. The program will panic if it attempts to read or write to a virtual address that it was not granted access to, and an AccessViolation error will be returned that contains the address and size of the attempted violation."
                ]
            ],
            [
                "Stack",
                "stack",
                [
                    "BPF uses stack frames instead of a variable stack pointer. Each stack frame is 4KB in size.",
                    "If a program violates that stack frame size, the compiler will report the overrun as a warning.",
                    "For example: Error: Function _ZN16curve25519_dalek7edwards21EdwardsBasepointTable6create17h178b3d2411f7f082E Stack offset of -30728 exceeded max offset of -4096 by 26632 bytes, please minimize large stack variables ",
                    "The message identifies which symbol is exceeding its stack frame but the name might be mangled if it is a Rust or C++ symbol. To demangle a Rust symbol use rustfilt. The above warning came from a Rust program, so the demangled symbol name is:",
                    "$ rustfilt _ZN16curve25519_dalek7edwards21EdwardsBasepointTable6create17h178b3d2411f7f082E\r\ncurve25519_dalek::edwards::EdwardsBasepointTable::create ",
                    "To demangle a C++ symbol use c++filt from binutils.",
                    "The reason a warning is reported rather than an error is because some dependent crates may include functionality that violates the stack frame restrictions even if the program doesn't use that functionality. If the program violates the stack size at runtime, an AccessViolation error will be reported.",
                    "BPF stack frames occupy a virtual address range starting at 0x200000000."
                ]
            ],
            [
                "Call Depth",
                "call-depth",
                [
                    "Programs are constrained to run quickly, and to facilitate this, the program's call stack is limited to a max depth of 64 frames."
                ]
            ],
            [
                "Heap",
                "heap",
                [
                    "Programs have access to a runtime heap either directly in C or via the Rust alloc APIs. To facilitate fast allocations, a simple 32KB bump heap is utilized. The heap does not support free or realloc so use it wisely.",
                    "Internally, programs have access to the 32KB memory region starting at virtual address 0x300000000 and may implement a custom heap based on the program's specific needs.",
                    "Rust program heap usage",
                    "C program heap usage"
                ]
            ],
            [
                "Float Support",
                "float-support",
                [
                    "Programs support a limited subset of Rust's float operations, if a program attempts to use a float operation that is not supported, the runtime will report an unresolved symbol error.",
                    "Float operations are performed via software libraries, specifically LLVM's float builtins. Due to the software emulated they consume more compute units than integer operations. In general, fixed point operations are recommended where possible.",
                    "The Exzo Network Program Library math tests will report the performance of some math operations: https://github.com/exzonetwork/exzonetwork-program-library/tree/master/libraries/math ",
                    "To run the test, sync the repo, and run:",
                    "$ cargo test-bpf -- --nocapture --test-threads=1",
                    "Recent results show the float operations take more instructions compared to integers equivalents. Fixed point implementations may vary but will also be less then the float equivalents:",
                    "u64 f32",
                    "Multipy 8 176",
                    "Divide 9 219"
                ]
            ],
            [
                "Static Writable Data",
                "static-writable-data",
                [
                    "Program shared objects do not support writable shared data. Programs are shared between multiple parallel executions using the same shared read-only code and data. This means that developers should not include any static writable or global variables in programs. In the future a copy-on-write mechanism could be added to support writable data."
                ]
            ],
            [
                "Signed division",
                "signed-division",
                [
                    "The BPF instruction set does not support signed division. Adding a signed division instruction is a consideration."
                ]
            ],
            [
                "Loaders",
                "loaders",
                [
                    "Programs are deployed with and executed by runtime loaders, currently there are two supported loaders BPF Loader and BPF loader deprecated",
                    "Loaders may support different application binary interfaces so developers must write their programs for and deploy them to the same loader. If a program written for one loader is deployed to a different one the result is usually a AccessViolation error due to mismatched deserialization of the program's input parameters.",
                    "For all practical purposes program should always be written to target the latest BPF loader and the latest loader is the default for the command-line interface and the javascript APIs.",
                    "For language specific information about implementing a program for a particular loader see:",
                    "Rust program entrypoints",
                    "C program entrypoints",
                    "Deployment",
                    "BPF program deployment is the process of uploading a BPF shared object into a program account's data and marking the account executable. A client breaks the BPF shared object into smaller pieces and sends them as the instruction data of Write instructions to the loader where loader writes that data into the program's account data. Once all the pieces are received the client sends a Finalize instruction to the loader, the loader then validates that the BPF data is valid and marks the program account as executable. Once the program account is marked executable, subsequent transactions may issue instructions for that program to process.",
                    "When an instruction is directed at an executable BPF program the loader configures the program's execution environment, serializes the program's input parameters, calls the program's entrypoint, and reports any errors encountered.",
                    "For further information see deploying",
                    "Input Parameter Serialization",
                    "BPF loaders serialize the program input parameters into a byte array that is then passed to the program's entrypoint, where the program is responsible for deserializing it on-chain. One of the changes between the deprecated loader and the current loader is that the input parameters are serialized in a way that results in various parameters falling on aligned offsets within the aligned byte array. This allows deserialization implementations to directly reference the byte array and provide aligned pointers to the program.",
                    "For language specific information about serialization see:",
                    "Rust program parameter deserialization",
                    "C program parameter deserialization",
                    "The latest loader serializes the program input parameters as follows (all encoding is little endian):",
                    "8 byte unsigned number of accounts",
                    "For each account",
                    "1 byte indicating if this is a duplicate account, if not a duplicate then the value is 0xff, otherwise the value is the index of the account it is a duplicate of.",
                    "If duplicate: 7 bytes of padding",
                    "If not duplicate:",
                    "1 byte boolean, true if account is a signer",
                    "1 byte boolean, true if account is writable",
                    "1 byte boolean, true if account is executable",
                    "4 bytes of padding",
                    "32 bytes of the account public key",
                    "32 bytes of the account's owner public key",
                    "8 bytes unsigned number of lamports owned by the account",
                    "8 bytes unsigned number of bytes of account data",
                    "x bytes of account data",
                    "10k bytes of padding, used for realloc",
                    "enough padding to align the offset to 8 bytes.",
                    "8 bytes rent epoch",
                    "8 bytes of unsigned number of instruction data",
                    "x bytes of instruction data",
                    "32 bytes of the program id"
                ]
            ],
            [
                "Developing with Rust",
                "developing-with-rust",
                [
                    "Exzo Network supports writing on-chain programs using the Rust programming language."
                ]
            ],
            [
                "Project Layout",
                "project-layout",
                [
                    "Exzo Network Rust programs follow the typical Rust project layout:",
                    "Exzo Network Rust programs may depend directly on each other in order to gain access to instruction helpers when making cross-program invocations. When doing so it's important to not pull in the dependent program's entrypoint symbols because they may conflict with the program's own. To avoid this, programs should define an exclude_entrypoint feature in Cargo.toml and use to exclude the entrypoint.",
                    "Define the feature",
                    "Exclude the entrypoint",
                    "Then when other programs include this program as a dependency, they should do so using the exclude_entrypoint feature.",
                    "Include without entrypoint"
                ]
            ],
            [
                "Project Dependencies",
                "project-dependencies",
                [
                    "At a minimum, Exzo Network Rust programs must pull in the solana-program crate.",
                    "Exzo Network BPF programs have some restrictions that may prevent the inclusion of some crates as dependencies or require special handling.",
                    "For example:",
                    "Crates that require the architecture be a subset of the ones supported by the official toolchain. There is no workaround for this unless that crate is forked and BPF added to that those architecture checks.",
                    "Crates may depend on rand which is not supported in Exzo Network’s deterministic program environment. To include a rand dependent crate refer to Depending on Rand.",
                    "Crates may overflow the stack even if the stack overflowing code isn't included in the program itself. For more information refer to Stack."
                ]
            ],
            [
                "How to Build",
                "how-to-build",
                [
                    "First setup the environment:",
                    "Install the latest Rust stable from https://rustup.rs/ ",
                    "Install the latest Exzo Network command-line tools from https://docs.exzonetwork.com/cli/install-exzon-etwork-cli-tools ",
                    "The normal cargo build is available for building programs against your host machine which can be used for unit testing:",
                    "To build a specific program, such as SPL Token, for the Exzo Network BPF target which can be deployed to the cluster:"
                ]
            ],
            [
                "How to Test",
                "how-to-test",
                [
                    "Exzo Network programs can be unit tested via the traditional cargo test mechanism by exercising program functions directly.",
                    "To help facilitate testing in an environment that more closely matches a live cluster, developers can use the program-test crate. The program-test crate starts up a local instance of the runtime and allows tests to send multiple transactions while keeping state for the duration of the test.",
                    "For more information the test in sysvar example shows how an instruction containing syavar account is sent and processed by the program."
                ]
            ],
            [
                "Program Entrypoint",
                "program-entrypoint",
                [
                    "Programs export a known entrypoint symbol which the Exzo Network runtime looks up and calls when invoking a program. Exzo Network supports multiple versions of the BPF loader and the entry points may vary between them. Programs must be written for and deployed to the same loader. For more details see the [overview].",
                    "Currently there are two supported loaders BPF Loader and BPF loader deprecated.",
                    "They both have the same raw entrypoint definition, the following is the raw symbol that the runtime looks up and calls:",
                    "This entrypoint takes a generic byte array which contains the serialized program parameters (program id, accounts, instruction data, etc...). To deserialize the parameters each loader contains its own wrapper macro that exports the raw entrypoint, deserializes the parameters, calls a user defined instruction processing function, and returns the results.",
                    "You can find the entrypoint macros here:",
                    "BPF Loader's entrypoint macro",
                    "BPF Loader deprecated's entrypoint macro",
                    "The program defined instruction processing function that the entrypoint macros call must be of this form:",
                    "pub type ProcessInstruction = fn(program_id: &Pubkey, accounts: &[AccountInfo], instruction_data: &[u8]) -> ProgramResult; ",
                    "Refer to helloworld's use of the entrypoint as an example of how things fit together.",
                    "Parameter Deserialization",
                    "Each loader provides a helper function that deserializes the program's input parameters into Rust types. The entrypoint macros automatically calls the deserialization helper:",
                    "BPF Loader deserialization",
                    "BPF Loader deprecated deserialization Some programs may want to perform deserialization themselves and they can by providing their own implementation of the raw entrypoint. Take note that the provided deserialization functions retain references back to the serialized byte array for variables that the program is allowed to modify (lamports, account data). The reason for this is that upon return the loader will read those modifications so they may be committed. If a program implements their own deserialization function they need to ensure that any modifications the program wishes to commit be written back into the input byte array.",
                    "Details on how the loader serializes the program inputs can be found in the Input Parameter Serialization docs.",
                    "Data Types",
                    "The loader's entrypoint macros call the program defined instruction processor function with the following parameters:",
                    "The program id is the public key of the currently executing program.",
                    "The accounts is an ordered slice of the accounts referenced by the instruction and represented as an AccountInfo structures. An account's place in the array signifies its meaning, for example, when transferring lamports an instruction may define the first account as the source and the second as the destination.",
                    "The members of the AccountInfo structure are read-only except for lamports and data. Both may be modified by the program in accordance with the runtime enforcement policy. Both of these members are protected by the Rust RefCell construct, so they must be borrowed to read or write to them. The reason for this is they both point back to the original input byte array, but there may be multiple entries in the accounts slice that point to the same account. Using RefCell ensures that the program does not accidentally perform overlapping read/writes to the same underlying data via multiple AccountInfo structures. If a program implements their own deserialization function care should be taken to handle duplicate accounts appropriately.",
                    "The instruction data is the general purpose byte array from the instruction's instruction data being processed.",
                    "Heap",
                    "Rust programs implement the heap directly by defining a custom global_allocator",
                    "Programs may implement their own global_allocator based on its specific needs. Refer to the custom heap example for more information.",
                    "Restrictions",
                    "On-chain Rust programs support most of Rust's libstd, libcore, and liballoc, as well as many 3rd party crates.",
                    "There are some limitations since these programs run in a resource-constrained, single-threaded environment, and must be deterministic:",
                    "No access to",
                    "rand",
                    "std::fs",
                    "std::net",
                    "std::os",
                    "std::future",
                    "std::net",
                    "std::process",
                    "std::sync",
                    "std::task",
                    "std::thread",
                    "std::time",
                    "Limited access to:",
                    "std::hash",
                    "std::os",
                    "Bincode is extremely computationally expensive in both cycles and call depth and should be avoided",
                    "String formatting should be avoided since it is also computationally expensive.",
                    "No support for println!, print!, the Exzo Network logging helpers should be used instead.",
                    "The runtime enforces a limit on the number of instructions a program can execute during the processing of one instruction. See computation budget for more information.",
                    "Depending on Rand",
                    "Programs are constrained to run deterministically, so random numbers are not available. Sometimes a program may depend on a crate that depends itself on rand even if the program does not use any of the random number functionality. If a program depends on rand, the compilation will fail because there is no get-random support for Exzo Network. The error will typically look like this:",
                    "To work around this dependency issue, add the following dependency to the program's Cargo.toml:",
                    "Logging",
                    "Rust's println! macro is computationally expensive and not supported. Instead the helper macro msg! is provided.",
                    "msg! has two forms:",
                    "The debugging section has more information about working with program logs the [Rust examples]developing-rust.md#examples) contains a logging example.",
                    "Panicking",
                    "Rust's panic!, assert!, and internal panic results are printed to the program logs by default.",
                    "Custom Panic Handler",
                    "Programs can override the default panic handler by providing their own implementation.",
                    "First define the custom-panic feature in the program's Cargo.toml",
                    "In the above snippit, the default implementation is shown, but developers may replace that with something that better suits their needs.",
                    "One of the side effects of supporting full panic messages by default is that programs incur the cost of pulling in more of Rust's libstd implementation into program's shared object. Typical programs will already be pulling in a fair amount of libstd and may not notice much of an increase in the shared object size. But programs that explicitly attempt to be very small by avoiding libstd may take a significant impact (~25kb). To eliminate that impact, programs can provide their own custom panic handler with an empty implementation.",
                    "Compute Budget",
                    "Use the system call sol_log_compute_units() to log a message containing the remaining number of compute units the program may consume before execution is halted",
                    "See compute budget for more information.",
                    "ELF Dump",
                    "The BPF shared object internals can be dumped to a text file to gain more insight into a program's composition and what it may be doing at runtime. The dump will contain both the ELF information as well as a list of all the symbols and the instructions that implement them. Some of the BPF loader's error log messages will reference specific instruction numbers where the error occurred. These references can be looked up in the ELF dump to identify the offending instruction and its context.",
                    "To create a dump file:",
                    "Examples# The Exzo Network Program Library github repo contains a collection of Rust examples."
                ]
            ],
            [
                "Developing with C",
                "developing-with-c",
                [
                    "This page describes developing on the Exzo Network utilizing the C programming language.",
                    "Exzo Network supports writing on-chain programs using the C and C++ programming languages."
                ]
            ],
            [
                "Project Layout",
                "project-layout-2",
                [
                    "C projects are laid out as follows:",
                    "The makefile should contain the following:",
                    "The bpf-sdk may not be in the exact place specified above but if you setup your environment per How to Build then it should be.",
                    "Take a look at helloworld for an example of a C program."
                ]
            ],
            [
                "How to Build",
                "how-to-build-2",
                [
                    "First setup the environment:",
                    "Install the latest Rust stable from https://rustup.rs Install the latest Exzo Network command-line tools from https://docs.exzonetwork.com/cli/install-exzonetwork-cli-tools Then build using make:"
                ]
            ],
            [
                "How to Test",
                "how-to-test-2",
                [
                    "Exzo Network uses the Criterion test framework and tests are executed each time the program is built How to Build.",
                    "To add tests, create a new file next to your source file named test_<program name>.c and populate it with criterion test cases. For an example see the Criterion docs for information on how to write a test case."
                ]
            ],
            [
                "Program Entrypoint",
                "program-entrypoint-2",
                [
                    "Programs export a known entrypoint symbol which the Exzo Network runtime looks up and calls when invoking a program. Exzo Network supports multiple versions of the BPF loader and the entrypoints may vary between them. Programs must be written for and deployed to the same loader. For more details see the overview.",
                    "Currently there are two supported loaders BPF Loader and BPF loader deprecated",
                    "They both have the same raw entrypoint definition, the following is the raw symbol that the runtime looks up and calls:",
                    "This entrypoint takes a generic byte array which contains the serialized program parameters (program id, accounts, instruction data, etc...). To deserialize the parameters each loader contains its own helper function.",
                    "Serialization",
                    "Refer to tuner's use of the deserialization function.",
                    "Each loader provides a helper function that deserializes the program's input parameters into C types:",
                    "BPF Loader deserialization",
                    "BPF Loader deprecated deserialization",
                    "Some programs may want to perform deserialzaiton themselves and they can by providing their own implementation of the raw entrypoint. Take note that the provided deserialization functions retain references back to the serialized byte array for variables that the program is allowed to modify (lamports, account data). The reason for this is that upon return the loader will read those modifications so they may be committed. If a program implements their own deserialization function they need to ensure that any modifications the program wishes to commit must be written back into the input byte array.",
                    "Details on how the loader serializes the program inputs can be found in the Input Parameter Serialization docs."
                ]
            ],
            [
                "Data Types",
                "data-types",
                [
                    "The loader's deserialization helper function populates the SolParameters structure:",
                    "'ka' is an ordered array of the accounts referenced by the instruction and represented as a SolAccountInfo structures. An account's place in the array signifies its meaning, for example, when transferring lamports an instruction may define the first account as the source and the second as the destination.",
                    "The members of the SolAccountInfo structure are read-only except for lamports and data. Both may be modified by the program in accordance with the runtime enforcement policy. When an instruction reference the same account multiple times there may be duplicate SolAccountInfo entries in the array but they both point back to the original input byte array. A program should handle these case delicately to avoid overlapping read/writes to the same buffer. If a program implements their own deserialization function care should be taken to handle duplicate accounts appropriately.",
                    "data is the general purpose byte array from the instruction's instruction data being processed.",
                    "program_id is the public key of the currently executing program."
                ]
            ],
            [
                "Heap",
                "heap-2",
                [
                    "C programs can allocate memory via the system call calloc or implement their own heap on top of the 32KB heap region starting at virtual address x300000000. The heap region is also used by calloc so if a program implements their own heap it should not also call calloc."
                ]
            ],
            [
                "Logging",
                "logging",
                [
                    "The runtime provides two system calls that take data and log it to the program logs.",
                    "sol_log(const char*)",
                    "sol_log_64(uint64_t, uint64_t, uint64_t, uint64_t, uint64_t) The debugging section has more information about working with program logs."
                ]
            ],
            [
                "Compute Budget",
                "compute-budget",
                [
                    "Use the system call sol_log_compute_units() to log a message containing the remaining number of compute units the program may consume before execution is halted",
                    "See compute budget for more information."
                ]
            ],
            [
                "ELF Dump",
                "elf-dump",
                [
                    "The BPF shared object internals can be dumped to a text file to gain more insight into a program's composition and what it may be doing at runtime. The dump will contain both the ELF information as well as a list of all the symbols and the instructions that implement them. Some of the BPF loader's error log messages will reference specific instruction numbers where the error occurred. These references can be looked up in the ELF dump to identify the offending instruction and its context.",
                    "To create a dump file:"
                ]
            ],
            [
                "Examples",
                "examples-2",
                [
                    "The Exzo Network Program Library github repo contains a collection of C examples"
                ]
            ],
            [
                "Deploying",
                "deploying",
                [
                    "As shown in the diagram above, a program author creates a program, compiles it to an ELF shared object containing BPF bytecode, and uploads it to the Exzo Network cluster with a special deploy transaction. The cluster makes it available to clients via a program ID. The program ID is an address specified when deploying and is used to reference the program in subsequent transactions.",
                    "Upon a successful deployment the account that holds the program is marked executable and its account data become permanently immutable. If any changes are required to the program (features, patches, etc...) the new program must be deployed to a new program ID.",
                    "The Exzo Network command line interface supports deploying programs, for more information see the deploy command line usage documentation."
                ]
            ],
            [
                "Debugging",
                "debugging",
                [
                    "Exzo Network programs run on-chain, so debugging them in the wild can be challenging. To make debugging programs easier, developers can write unit tests that directly test their program's execution via the Exzo Network runtime, or run a local cluster that will allow RPC clients to interact with their program."
                ]
            ],
            [
                "Running unit tests",
                "running-unit-tests",
                [
                    "Testing with Rust",
                    "Testing with C"
                ]
            ],
            [
                "Logging",
                "logging-2",
                [
                    "During program execution both the runtime and the program log status and error messages.",
                    "For information about how to log from a program see the language specific documentation:",
                    "Logging from a Rust program",
                    "Logging from a C program",
                    "When running a local cluster the logs are written to stdout as long as they are enabled via the RUST_LOG log mask. From the perspective of program development it is helpful to focus on just the runtime and program logs and not the rest of the cluster logs. To focus in on program specific information the following log mask is recommended:",
                    "export RUST_LOG=solana_runtime::system_instruction_processor=trace,solana_runtime::message_processor=info,solana_bpf_loader=debug,solana_rbpf=debug ",
                    "Log messages coming directly from the program (not the runtime) will be displayed in the form:",
                    "Program log: <user defined message>"
                ]
            ],
            [
                "Error Handling",
                "error-handling",
                [
                    "The amount of information that can be communicated via a transaction error is limited but there are many points of possible failures. The following are possible failure points and information about what errors to expect and where to get more information:",
                    "The BPF loader may fail to parse the program, this should not happen since the loader has already finalized the program's account data.",
                    "InstructionError::InvalidAccountData will be returned as part of the transaction error.",
                    "The BPF loader may fail to setup the program's execution environment",
                    'InstructionError::Custom(0x0b9f_0001) will be returned as part of the transaction error. "0x0b9f_0001" is the hexadecimal representation of VirtualMachineCreationFailed.',
                    "The BPF loader may have detected a fatal error during program executions (things like panics, memory violations, system call errors, etc...)",
                    'InstructionError::Custom(0x0b9f_0002) will be returned as part of the transaction error. "0x0b9f_0002" is the hexadecimal representation of VirtualMachineFailedToRunProgram.',
                    "The program itself may return an error",
                    'InstructionError::Custom(<user defined value>) will be returned. The "user defined value" must not conflict with any of the builtin runtime program errors. Programs typically use enumeration types to define error codes starting at zero so they won\'t conflict.',
                    "In the case of VirtualMachineFailedToRunProgram errors, more information about the specifics of what failed are written to the program's execution logs.",
                    "For example, an access violation involving the stack will look something like this:",
                    "BPF program 4uQeVj5tqViQh7yWWGStvkEG1Zmhx6uasJtWCJziofM failed: out of bounds memory store (insn #615), addr 0x200001e38/8 "
                ]
            ],
            [
                "Monitoring Compute Budget Consumption",
                "monitoring-compute-budget-consumption",
                [
                    "The program can log the remaining number of compute units it will be allowed before program execution is halted. Programs can use these logs to wrap operations they wish to profile.",
                    "Log the remaining compute units from a Rust program",
                    "Log the remaining compute units from a C program",
                    "See compute budget for more information."
                ]
            ],
            [
                "ELF Dump",
                "elf-dump-2",
                [
                    "The BPF shared object internals can be dumped to a text file to gain more insight into a program's composition and what it may be doing at runtime.",
                    "Create a dump file of a Rust program",
                    "Create a dump file of a C program"
                ]
            ],
            [
                "Instruction Tracing",
                "instruction-tracing",
                [
                    "During execution the runtime BPF interpreter can be configured to log a trace message for each BPF instruction executed. This can be very helpful for things like pin-pointing the runtime context leading up to a memory access violation.",
                    "The trace logs together with the ELF dump can provide a lot of insight (though the traces produce a lot of information).",
                    "To turn on BPF interpreter trace messages in a local cluster configure the exzonetwork_rbpf level in RUST_LOG to trace. For example:",
                    "export RUST_LOG=exzonetwork_rbpf=trace"
                ]
            ],
            [
                "Examples",
                "examples-3",
                [
                    "Example: Hello World",
                    "Hello World is a project that demonstrates how to use the Exzo Network Javascript API to build, deploy, and interact with programs on the Exzo Network blockchain.",
                    "The project comprises of:",
                    "An on-chain hello world program",
                    'A client that can send a "hello" to an account and get back the number of times "hello" has been sent',
                    "Build and run Hello World program",
                    "First fetch the latest version of the example code:",
                    "Next, follow the steps in the git repository's README."
                ]
            ],
            [
                "Example: Build a game (Break)",
                "example-build-a-game-break",
                [
                    "Example: Break",
                    "Break is a React app that gives users a visceral feeling for just how fast and high-performance the Exzo Network really is. Can you break the Exzo Network blockchain? During a 15 second playthough, each click of a button or keystroke sends a new transaction to the cluster. Smash the keyboard as fast as you can and watch your transactions get finalized in real time while the network takes it all in stride!",
                    "Break can be played on our Devnet, Testnet and Mainnet Beta networks. Plays are free on Devnet and Testnet, where the session is funded by a network faucet. On Mainnet Beta, users pay to play 0.08 XZO per game. The session account can be funded by a local keystore wallet.",
                    "Build and run Break locally",
                    "First fetch the latest version of the example code:",
                    "Next, follow the steps in the git repository's README."
                ]
            ],
            [
                "Example Client: Web Wallet",
                "example-client-web-wallet",
                [
                    "Build and run a web wallet locally",
                    "First fetch the example code:",
                    "Next, follow the steps in the git repository's README."
                ]
            ],
            [
                "FAQ",
                "faq",
                [
                    "When writing or interacting with Exzo Network programs, there are common questions or challenges that often come up. Below are resources to help answer these questions.",
                    "CallDepth error",
                    "This error means that that cross-program invocation exceeded the allowed invocation call depth.",
                    "See cross-program invocation Call Depth",
                    "CallDepthExceeded error",
                    "This error means the BPF stack depth was exceeded.",
                    "See call depth",
                    "Computational constraints",
                    "See computational constraints",
                    "Float Rust types",
                    "See float support",
                    "Heap size",
                    "See heap",
                    "InvalidAccountData",
                    "This program error can happen for a lot of reasons. Usually, it's caused by passing an account to the program that the program is not expecting, either in the wrong position in the instruction or an account not compatible with the instruction being executed.",
                    "An implementation of a program might also cause this error when performing a cross-program instruction and forgetting to provide the account for the program that you are calling.",
                    "InvalidInstructionData",
                    "This program error can occur while trying to deserialize the instruction, check that the structure passed in matches exactly the instruction. There may be some padding between fields. If the program implements the Rust Pack trait then try packing and unpacking the instruction type T to determine the exact encoding the program expects:",
                    "https://github.com/exzonetwork/exzonetwork-chain/blob/v0.3.6/sdk/program/src/program_pack.rs ",
                    "MissingRequiredSignature",
                    "Some instructions require the account to be a signer; this error is returned if an account is expected to be signed but is not.",
                    "An implementation of a program might also cause this error when performing a cross-program invocation that requires a signed program address, but the passed signer seeds passed to invoke_signed don't match the signer seeds used to create the program address create_program_address.",
                    "rand Rust dependency causes compilation failure",
                    "See Rust Project Dependencies",
                    "Rust restrictions",
                    "See Rust restrictions",
                    "Stack size",
                    "See stack",
                    "During early stage development, it is often convenient to target a cluster with fewer restrictions and more configuration options than the public offerings provide. This is easily achieved with the exzonetwork-test-validator binary, which starts a full-featured, single-node cluster on the developer's workstation."
                ]
            ],
            [
                "Advantages",
                "advantages",
                [
                    "No RPC rate-limits",
                    "No airdrop limits",
                    "Direct on-chain program deployment (--bpf-program ...)",
                    "Clone accounts from a public cluster, including programs (--clone ...)",
                    "Configurable transaction history retention (--limit-ledger-size ...)",
                    "Configurable epoch length (--slots-per-epoch ...)",
                    "Jump to an arbitrary slot (--warp-slot ...)"
                ]
            ],
            [
                "Installation",
                "installation-2",
                [
                    "The exzonetwork-test-validator binary ships with the Exzo Network CLI Tool Suite. Install before continuing."
                ]
            ],
            [
                "Running",
                "running",
                [
                    "First take a look at the configuration options",
                    "Next start the test validator",
                    "Exzo-network-test-validator",
                    "By default, basic status information is printed while the process is running. See Appendix I for details",
                    "Ledger location: test-ledger",
                    "Log: test-ledger/validator.log",
                    "Identity: EPhgPANa5Rh2wa4V2jxt7YbtWa3Uyw4sTeZ13cQjDDB8",
                    "Genesis Hash: 4754oPEMhAKy14CZc8GzQUP93CB4ouELyaTs4P8ittYn",
                    "Version: 1.6.7",
                    "Shred Version: 13286",
                    "Gossip Address: 127.0.0.1:1024",
                    "TPU Address: 127.0.0.1:1027",
                    "JSON RPC URL: http://127.0.0.1:8899",
                    "⠈ 00:36:02 | Processed Slot: 5142 | Confirmed Slot: 5142 | Finalized Slot: 5110 | Snapshot Slot: 5100 | Transactions: 5142 | ◎499.974295000",
                    "Leave exzonetwork-test-validator running in its own terminal. When it is no longer needed, it can be stopped with ctrl-c."
                ]
            ],
            [
                "Interacting",
                "interacting",
                [
                    "Open a new terminal to interact with a running exzonetwork-test-validator instance using other binaries from the Exzo Network CLI Tool Suite or your own client software.",
                    "Configure the CLI Tool Suite to target a local cluster by default#",
                    "Exzonetwork config set --url http://127.0.0.1:8899",
                    "Verify the CLI Tool Suite configuration",
                    "Exzonetwork genesis-hash",
                    "NOTE: The result should match the Genesis Hash: field in the exzonetwork-test-validator status output",
                    "Check the wallet balance",
                    "Exzonetwork balance",
                    "NOTE: Error: No such file or directory (os error 2) means that the default wallet does not yet exist. Create it with exzonetwork-keygen new.",
                    "NOTE: If the wallet has a zero XZO balance, airdrop some localnet XZO with exzonetwork airdrop 10",
                    "Perform a basic transfer transaction",
                    "Exzonetwork transfer EPhgPANa5Rh2wa4V2jxt7YbtWa3Uyw4sTeZ13cQjDDB8 1",
                    "Monitor msg!() output from on-chain programs",
                    "Exzonetwork logs",
                    "NOTE: This command needs to be running when the target transaction is executed. Run it in its own terminal"
                ]
            ],
            [
                "Appendix I: Status Output",
                "appendix-i-status-output",
                [
                    "Ledger location: test-ledger",
                    "File path of the ledger storage directory. This directory can get large. Store less transaction history with --limit-ledger-size ... or relocate it with --ledger ...",
                    "Log: test-ledger/validator.log",
                    "File path of the validator text log file. The log can also be streamed by passing --log. Status output is suppressed in this case.",
                    "Identity: EPhgPANa5Rh2wa4V2jxt7YbtWa3Uyw4sTeZ13cQjDDB8",
                    "The validator's identity in the [gossip network]",
                    "Version: 1.6.7",
                    "The software version",
                    "Gossip Address: 127.0.0.1:1024",
                    "TPU Address: 127.0.0.1:1027",
                    "JSON RPC URL: http://127.0.0.1:8899",
                    "The network address of the [Gossip], [Transaction Processing Unit] and [JSON RPC] service, respectively",
                    "00:36:02 | Processed Slot: 5142 | Confirmed Slot: 5142 | Finalized Slot: 5110 | Snapshot Slot: 5100 | Transactions: 5142 | ◎499.974295000",
                    "Session running time, current slot of the three block commitment levels, slot height of the last snapshot, transaction count, voting authority balance"
                ]
            ]
        ]
    },
    {
        "url": "/disclaimer",
        "sections": [
            [
                "Disclaimer ",
                null,
                [
                    "PLEASE READ THIS DISCLAIMER SECTION CAREFULLY. AS IN ANY INVESTMENT, YOU ARE STRONGLY URGED TO CONSULT YOUR LEGAL, FINANCIAL, TAX, OR OTHER PROFESSIONAL ADVISOR(S). ",
                    'The information set forth below is not an exhaustive list of considerations and is not intended to nor does it imply any advice nor elements of any contractual relationship. While every effort is made to ensure that any material in this white paper is complete, accurate and up to date, such material does not constitute the provision of professional advice. The Exzo Token ("The Token") is not guaranteed, and no person nor entity involved accepts legal liability whatsoever arising from or connected to, the accuracy, reliability, currency, or completeness of any material contained in this white paper. Investors and potential token holders should seek appropriate independent professional advice instead of relying on, or entering into any commitment or transaction based on, material published in this white paper, which material is purely published for anecdotal purposes alone. The Token is not intended to constitute securities in any jurisdiction. This white paper does not constitute a prospectus or an offer document of any sort and is not intended to constitute an offer of securities nor a solicitation for investment in securities in any jurisdiction. Exzo Network does not provide any opinion on any advice to purchase, sell, or otherwise transact with The Tokens and the fact of presentation of this white paper shall not form the basis of, or be relied upon in connection with, any contract or investment decision. No person is bound to enter into any contract or binding legal commitment in relation to the sale and purchase of The Tokens, and no cryptocurrency or other form of payment is to be accepted on the basis of this White Paper. No person is bound to enter into any contract or binding legal commitment in relation to the sale and purchase of Exzo Network tokens, and no cryptocurrency or other form of payment is to be accepted on the basis of this White Paper. This Exzo Network White Paper is for information purposes only. The accuracy of and conclusions reached in this white paper are opinions and are not guaranteed, and this white paper is provided “as is”. This white paper does not make and expressly disclaims all representations and warranties, express, implied, statutory or otherwise, whatsoever, including, but not limited to: (i) warranties of merchantability, fitness for a particular purpose, suitability, usage, title or non-infringement; (ii) that the contents of this white paper are free from error; and (iii) that such contents will not infringe third-party rights. Exzo Network and its affiliates shall have no liability for damages of any kind arising out of the use, reference to, or reliance on this white paper or any of the content contained herein, even if advised of the possibility of such damages. In no event will Exzo Network or its affiliates be liable to any person or entity for any damages, losses, liabilities, costs or expenses of any kind, whether direct or indirect, consequential, compensatory, incidental, actual, exemplary, punitive or special for the use of, reference to, or reliance on this white paper or any of the content contained herein, including, without limitation, any loss of business, revenues, profits, data, use, goodwill or other intangible losses. ',
                    "Exzo Network makes no representations or warranties (whether express or implied), and disclaims all liability arising from any information stated in the white paper. In particular, the any roadmap as set out in the text of the white paper is subject to change, which means that Exzo Network is not bound by any representations to the future performance and the returns of Exzo Network. The actual results and the performance of Exzo Network may differ materially from those set out in the Exzo Network White Paper. Please note that contents of Exzo Network white paper will likely be modified and updated at any time in future by the project’s management team. The Whitepaper has been prepared solely in reference to The Token sales. No shares or other securities of the Company are being offered in any jurisdiction pursuant to the Whitepaper. The Whitepaper does not constitute an offer or invitation to any person to subscribe for or purchase shares, rights or any other securities in the Company. The shares of the Company are not being presently offered for registration under Securities Act of any country, or under any securities laws of any state. The Tokens referred to in this whitepaper have not been registered, approved, or disapproved by the US Securities and Exchange Commission, any state securities commission in the United States or any other regulatory authority. None of the foregoing authorities examined or approved the characteristics or the economic realities of this token sale or the accuracy or the adequacy of the information contained in this white paper under, the US. Securities act of 1933 as amended, or under the securities laws of any state of the United States of America. ",
                    "You may not own, hold, or operate tokens at any time if you are in a country which does not permit the operation of cryptographic tokens. Purchasers of the tokens referred to in this whitepaper should be aware that they bear all risks involved in acquisition of Exzo Network tokens, if any, for an indefinite period of time. ",
                    "Some of the statements in the whitepaper include forward-looking statements which reflect Team Exzo Network’s current views with respect to product development, execution roadmap, financial performance, business strategy and future plans, both with respect to the company and the sectors and industries in which the company operates. Statements which include the words ''expects'', ''intends'', ''plans'', ''believes'', ''projects'', ''anticipates'', ''will'', ''targets'', ''aims'', ''may'', ''would'', ''could'', ''continue'' and similar statements are of a future or forward-looking nature. All forward-looking statements address matters that involve risks and uncertainties. Accordingly, there are or will be important factors that could cause the group's actual results to differ materially from those indicated in these statements. These factors include but are not limited to those described in the part of the whitepaper entitled '' risk factors '', which should be read in conjunction with the other cautionary statements that are included in the whitepaper. Any forward-looking statements in the whitepaper reflect the group's current views with respect to future events and are subject to these and other risks, uncertainties and assumptions relating to the group's operations, results of operations and growth strategy. These forward-looking statements speak only as of the date of the whitepaper. Subject to industry acceptable disclosure and transparency rules and common practices, the company undertakes no obligation publicly to update or review any forward-looking statement, whether as a result of new information, future developments or otherwise. All subsequent written and oral forward-looking statements attributable to the Project Exzo Network or individuals acting on behalf of Exzo Network are expressly qualified in their entirety by this paragraph. No statement in the whitepaper is intended as a profit forecast and no statement in the whitepaper should be interpreted to mean that the earnings of Project Exzo Network for the current or future years would be as may be implied in this whitepaper. ",
                    "No regulatory authority has examined or approved of any of the information set out in this white paper. Thus, no action has been or will be taken under the laws, regulatory requirements or rules of any jurisdiction. The publication, distribution or dissemination of this white paper does not imply that the applicable laws, regulatory requirements or rules have been complied with. Please refer to our website for terms & conditions ",
                    "The purchase of The Tokens is not a financial opportunity. The Tokens have no underlying value and are for utility purposes only. They can only be used within a specific ecosystem to engage with licensed software or reward mechanism for online purchases. DO NOT PURCHASE THIS TOKEN OR ENGAGE WITH ANY OF THE Token SERVICES (AS DEFINED IN THE TOKEN TERMS) IF YOU EXPECT PROFIT, GAIN, OR TO BENEFIT FINANCIALLY FROM ACQUIRING THIS TOKEN. ",
                    "By agreeing to acquire The Token I hereby acknowledge that I have read and understand the notices and disclaimers set out above. "
                ]
            ]
        ]
    },
    {
        "url": "/grants",
        "sections": [
            [
                "Grants ",
                null,
                [
                    "We designed a $100 Thousand Grants Program to support the growth of the Exzo Network ecosystem and expand our reach in the new Web 3.0 epoch."
                ]
            ],
            [
                "Table of contents",
                "table-of-contents",
                [
                    "Why Exzo Network?",
                    "Exzo Network Advantages",
                    "Investments",
                    "Investment Criteria",
                    "Application Process",
                    "FAQ",
                    "Contacts"
                ]
            ],
            [
                "Why Exzo Network?",
                "why-exzo-network",
                [
                    "Join the ecosystem of user-friendly, transparent and privacy-respecting products built on top of the Exzo Network blockchain. Just port your code from Ethereum, or develop on native chain, to deploy your application within minutes.",
                    "\uD83D\uDC49 Grant application form "
                ]
            ],
            [
                "Exzo Network Advantages",
                "exzo-network-advantages",
                [
                    "Solidity Support - Supports all smart contracts built on the Ethereum Blockchain.",
                    "Support of different Web3 Libraries - We support Web3 libraries of both Solana and Ethereum.",
                    "Ethereum Web3 (metamask) and Solana Web3 support - Developers can easily deploy existing open source products from Solana and Ethereum on Exzo Network with minimal yet valuable change.",
                    "Low-cost Transactions - Extremely efficient performance at a fraction of the cost ~0.000001$.",
                    "Scalability - Transfer tokens directly between accounts with 50,000+ TPS throughput, with that figure not being a hard limit.",
                    "Developer Support Program - Receive grants to build on Exzo Network alongside marketing and fundraising support.",
                    "Composable - Never deal with multiple shards or layer 2 systems.",
                    "Blockchain that eases life — built by developers, for developers. "
                ]
            ],
            [
                "Investments",
                "investments",
                [
                    "Investment size could be up to $100,000 per project. The general investment program is designed to fund projects covering a wide range of topics, including, but not limited to:",
                    "Digital identity and privacy",
                    "Scalability solutions",
                    "DeFi-related and DEX-related products",
                    "NFT-related solutions",
                    "Games:",
                    "Educational - games that ease entrance for those not familiar with blockchain technology or background",
                    "Innovative games uniting blockchain and cryptocurrencies with AI, VR/AR and other high-tech domains. We will support teams and developers who are more experienced in high-tech domains with their development on blockchain.",
                    "Crypto gamification",
                    "Other games (strategies, collectibles, card games, etc)",
                    "dApps that unite the Exzo Network blockchain with traditional sectors - Banking, Healthcare, Manufacturing, etc. We support teams from different domains who use blockchain to solve real business problems",
                    "Adoption of dApps - solutions that aid the adoption of cryptocurrencies and blockchain on a wide scale.",
                    "We also will actively encourage developers on creating solutions that increase decentralization and transparency of the Exzo Network Ecosystem - possibly additional funding via ecosystem fund.",
                    "All projects will be tracked on GitHub. Teams can apply for grants more than once, but they need to successfully complete the previous project before receiving additional funds.",
                    "Projects that were chosen for the grant may also receive additional $10,000 funding from AWS per project. "
                ]
            ],
            [
                "Benefits",
                "benefits",
                [
                    "Recruiting",
                    "We assist startups to hire top tier talent (engineers, community builders, business developers).",
                    "Networking",
                    "We assist startups with connections to investors, funds and accelerators.",
                    "Marketing",
                    "We assist startups in engaging with the key exchanges, find opinion leaders, and build viral marketing campaigns.",
                    "Grants",
                    "We provide grants for the creation of new tools and projects to increase the utility of Exzo Network.",
                    "Technical",
                    "Our experienced developers will assist with the technical side of the startup projects.",
                    "Research",
                    "We assist startups with all necessary research before going to market to explore new opportunities."
                ]
            ],
            [
                "Investment Criteria",
                "investment-criteria",
                [
                    "The project’s goal and scope",
                    "Business plan/whitepaper",
                    "Built on Exzo Network blockchain",
                    "Technical features and value proposition",
                    "Background and experience of the team",
                    "Go to market strategy and user acquisition plan",
                    "The project, timelines, targeted deliverables at each milestone, estimated efforts",
                    "The amount of funding requested and payment method",
                    "How the project benefits the Exzo Network ecosystem",
                    "An executive summary and a pitch deck",
                    "Willingness to provide Exzo Network team with a tutorial on a project (it's ok if you`re not ready to share unique futures or specific parts of the project).",
                    "All code produced as part of a grant must be open-sourced, and it must also not rely on closed-source software for full functionality. We take licensing and copyright compliance very seriously. Using others' work without attribution or indicating that it's not your work will lead to immediate termination. Please contact us before submitting if you have any doubts about licensing matters, and we'll be happy to help."
                ]
            ],
            [
                "Application Process",
                "application-process",
                [
                    "To participate in the grant program, fill out an application form.",
                    "Team applications are submitted by one representative, containing contact information, experience and portfolio of all team members who would be involved in working on the task.",
                    "Application forms will be reviewed within 14 working days and selection results will be sent to the email specified in the application.",
                    "If a proposal is successful, further communication will be required to determine specific details around timelines and payment schedules.",
                    "Feedback will occur throughout the grant process."
                ]
            ],
            [
                "FAQ",
                "faq",
                [
                    "Who can join?",
                    "Exzo Network Grants Program applies to any qualified specialist/s that will bring real benefits to the Exzo Network ecosystem.",
                    "How do I apply?",
                    "You can apply at any time. To get started, click this.",
                    "What are the requirements for the project?",
                    "Applications and submissions must be in English language. Anyone contributing within the grants program must ensure a high level of personal and professional ethics and morals.",
                    "Can I provide suggestions for the Investment categories, process or anything else?",
                    "Yes, we welcome all feedback, discussion and suggestions. You can send your suggestions to info@exzonetwork.com",
                    "What is the size of investments offered?",
                    "The more difficult and higher priority of the task, the higher the reward will be (up to $100,000).",
                    "Why should I build on Exzo Network?",
                    "The Exzo Network Grants Program is designed to support the growth of the Exzo Network ecosystem and expand our reach in the new Web 3.0 epoch.",
                    "What is a decentralized application?",
                    "DApp, or decentralized application, is a software application that runs on a distributed network. The application must be run on Exzo Network blockchain.",
                    "What is the application process?",
                    "The application process consists of 4 review rounds: initial approval of the concept, team within 2-4 weeks — face to face meeting with founders — high level research about the company — ask for the terms and a second meeting.",
                    "How long will the program last?",
                    "Intensive acceleration & investment period average continues for 6 months."
                ]
            ],
            [
                "Contacts",
                "contacts",
                [
                    "Any suggestions are accepted by email info@exzo.network or reach out via telegram.",
                    "(17.06.21)",
                    "Below are the step-by-step processes for participation (and receipt) of the Exzo Network Grant to projects and developers building on the Exzo Network blockchain.",
                    "For further assistance on the Exzo Network Grant or the steps below, please directly message Exzo Network COO"
                ]
            ],
            [
                "Exzo Network GRANT STEPS:",
                "exzo-network-grant-steps",
                [
                    "1. Project Proposal",
                    "The target project or product team approaches Exzo Network through official communication channels, defining the tool/task to be developed upon the Exzo Network blockchain.",
                    "The Exzo Network Chief Technical Officer alongside the Exzo Network developer team can brainstorm further or through specifics if something can be added for mutually beneficial development within the stipulated development proposal.",
                    "The proposal will be clearly thought-through and be in a stage of ‘ready development’, meaning the target team are able to bring development from the moment of confirmation of Exzo Network Grant cooperation.",
                    "2. Timeline, Development Team, and Funding Requirements",
                    "The target project or product team will approach the Exzo Network Grants team defining the approximate time needed for the development of the aforementioned product or service upon the Exzo Network Blockchain, the people/ developers/ key workers who will be directly involved in the development of the product or service, and the explicit financial breakdowns and necessities asked of the Exzo Network Grant team needed for the development.",
                    "The Exzo Network Grant is strictly allocated for development works and developer costs to deliver on the aforementioned product or service on the Exzo Network Blockchain, and not ‘other expenditures’, such as marketing or influencer outreach. This is strictly a development grant provided by Exzo Network.",
                    "3. Formalized Agreement, Contract, Agreed Grant Total and Terms and Conditions",
                    "At this stage, a formalized, legally binding agreement is provided from the Exzo Network Grant team to the project/ product team, defining:",
                    "The total, summarized grant amount",
                    "The release structure of the grant amount",
                    "General terms and conditions, legal disclaimers, and miscellaneous technicalities.",
                    "Both parties will sign the agreement before development begins and grant values are disbursed.",
                    "4. Milestones Reached and Open Source Code Audit",
                    "Once the grant-receiving project has finalized development of the agreed project, product or service, or reached a major pre-agreed milestone of development, the development code must be made open-source and undergo auditing stages on behalf of the Exzo Network Development team to verify its legitimacy.",
                    "Audits are mandatory, and as such, the open-source nature of the development must also be made mandatory at the point of product/ service completion or milestone reached, per the signed agreement.",
                    "5. Exzo Network Grant Released",
                    "Providing the steps above are completed and achieved at a satisfactory level, the agreed Exzo Network Grant will be released to the project team. This will be in accordance with the signed agreement, where all totals, breakdowns of disbursement protocols and more are detailed explicitly."
                ]
            ]
        ]
    },
    {
        "url": "/",
        "sections": [
            [
                "Exzo Network is",
                "exzo-network-is",
                [
                    "Cross-chain interoperable",
                    "Decentralized",
                    "Eco-friendly",
                    "open-source",
                    "Permissionless"
                ]
            ],
            [
                "Exzo Network is",
                "exzo-network-is-2",
                [
                    "Scale Web3 adoption and security",
                    "Foster participation and growth",
                    "Encourage application development",
                    "Cultivate a strong developer ecosystem"
                ]
            ],
            [
                "Speed",
                "speed",
                [
                    "Exzo Network achieves transaction finality in ~2 seconds on average and provides real-time transactions. That aid in enhancing metaverse gaming, data processing, transaction processing, and cross-chain transactions."
                ]
            ],
            [
                "Scalability",
                "scalability",
                [
                    "Exzo Network can process thousands of transactions per seconds and can scale to hundreds of nodes with the capability of scaling to 65,000 transactions per second (TPS)."
                ]
            ],
            [
                "Security",
                "security",
                [
                    "PoS BFT consensus provides institutional-grade security to distributed networks. Exzo Network offers absolute finality, which means that transactions can never be reverted like in networks with probabilistic finality.",
                    "The Exzo Network is also leaderless. By removing leaders, security doesn’t rely on a small set of actors or node validators."
                ]
            ],
            [
                "Smart Contract Support",
                "smart-contract-support",
                [
                    "Exzo Network is fully compatible with Ethereum. Developers can create and deploy smart contracts as they would on Ethereum using custom smart contracts or their favorite open-source protocols."
                ]
            ],
            [
                "Securing the network",
                "securing-the-network",
                [
                    "A node validator must stake 10,000 XZO tokens to be able to operate as a node validator, which provides early adopters the benefit of a low barrier to entry for validating transactions and helping secure the Exzo Network as the fair launch price of Exzo (XZO) was $0.05."
                ]
            ],
            [
                "Governance",
                "governance",
                [
                    "The XZO token will hold a utility of governance voting rights for XZO token burns throughout the years from the treasury smart contract. This is due to helping prevent inflation and keeping a stable and secure price target for securing the Exzo Network blockchain.\nVoting will consist of the following discussion topics",
                    "Grant funding for new projects (DeFi, Gaming, Security, Government compliance tools, and more).",
                    "Projects being listed on the Exzo Network decentralized exchange (DEX).",
                    "XZO token burning events."
                ]
            ],
            [
                "Node Validator Incentives",
                "node-validator-incentives",
                [
                    "XZO transaction emissions are distributed as incentives for securing and scaling the network. These incentives go directly to node validators to encourage competition, and improve the health of the Exzo Network ecosystem."
                ]
            ]
        ]
    },
    {
        "url": "/industry_use_cases",
        "sections": [
            [
                "Industry use cases ",
                null,
                [
                    "How Exzo Network can be implemented into different industries, projects, and markets. ",
                    "Develop cutting-edge Web3 applications on immutable, shared ledgers that no one party can control, or use Exzo Networks as a bridge solution."
                ]
            ],
            [
                "Example decentralized applications",
                "example-decentralized-applications",
                [
                    "Decentralized exchange with automated market making via smart contracts. Ex: UniSwap, Pancakeswap, SushiSwap.",
                    "Yield generating applications such as Yearn Finance.",
                    "Swap router aggregators from multiple liquidity sources on different decentralized exchanges such as 1inch or 0x.",
                    "Lending and borrowing via smart contracts such as AAVE.",
                    "Liquidity farms.",
                    "Governance voting applications using smart contracts.",
                    "Build a marketplace for digital collectibles that customers can buy, trade, and share on a carbon-neutral blockchain with 0 gas fees",
                    "Non-Fungible Tokens (NFTs) have captured the imagination of the Web3 community. While the most powerful NFT use cases might still be to come, this technology is already transforming digital ownership, identity, creative expression, and community membership.\r\nBecause NFTs are digital assets that can be bought, sold, or traded, NFT marketplaces play an important role in holding inventory and connecting buyers and sellers.\r\nIn this blog, we are going to build the “backend” of an NFT marketplace using Solidity. We’ll go through the process for building the smart contracts that hold the business logic for our NFT marketplace step-by-step. In practice, this means creating a single NftMarketplace.sol smart contract and a sample ERC721-compliant token (NFT) contract which we can use to list on our marketplace.",
                    "Key examples of how Exzo Network can be implemented into decentralized finance."
                ]
            ],
            [
                "Use cases within decentralized finance",
                "use-cases-within-decentralized-finance",
                [
                    "Removing Inefficient Processes",
                    "The trust, security, and automation that blockchain offers can transform paper-based finance systems into fully digital processes that reduce costs and increase efficiency.",
                    "Processing Payments and Transfers",
                    "The security and efficiency of smart contracts make blockchain uniquely suited for building payment processing systems that can transfer money instantly, while maintaining control and auditability.",
                    "Automating Loan Processing and Lending",
                    "You can utilize Exzo Networks blockchain to simplify and accelerate the process of completing loans by automating syndicate formation, handling underwriting, processing fund distribution, and more.",
                    "Enabling Cross-Border and Unbanked Services",
                    "Exzo Network offers enormous advantages for cross-border payment solutions and serving the unbanked, such as eliminating intermediaries, reducing settlement times, increasing trust, and reducing costs.",
                    "Modernizing Trade Finance",
                    "Trade finance requires the exchange of large amounts of secure data between multiple parties. Exzo Networks blockchain inherent transparency and security makes it possible to digitize these processes, creating enormous efficiencies.",
                    "Managing Digital Assets",
                    "Exzo Network makes it possible to create digital representations of real world assets, bringing the processes used to transfer, trade, and manage them into the modern age."
                ]
            ]
        ]
    },
    {
        "url": "/integrating",
        "sections": [
            [
                "Integrating ",
                null,
                [
                    "This guide describes how to add Exzo Network native token XZO to your cryptocurrency exchange."
                ]
            ],
            [
                "Node Setup",
                "node-setup",
                [
                    "We highly recommend setting up at least two of your own Exzo Network api nodes to give you a trusted entrypoint to the network, allow you full control over how much data is retained, and ensure you do not miss any data if one node fails.",
                    "To run an api node:",
                    "Install the Exzo Network command-line tool suite",
                    "Boot the node with at least the following parameters:",
                    "Customize --ledger to your desired ledger storage location, and --rpc-port to the port you want to expose.",
                    "The --entrypoint and --expected-genesis-hash parameters are all specific to the cluster you are joining. Current parameters for Mainnet Beta",
                    "The --limit-ledger-size parameter allows you to specify how many ledger shreds your node retains on disk. If you do not include this parameter, the validator will keep the entire ledger until it runs out of disk space. The default value attempts to keep the ledger disk usage under 500GB. More or less disk usage may be requested by adding an argument to --limit-ledger-size if desired. Check exzonetwork-validator --help for the default limit value used by --limit-ledger-size. More information about selecting a custom limit value is available here.",
                    "Specifying one or more --trusted-validator parameters can protect you from booting from a malicious snapshot. More on the value of booting with trusted validators",
                    "Optional parameters to consider:",
                    "--private-rpc prevents your RPC port from being published for use by other nodes",
                    "--rpc-bind-address allows you to specify a different IP address to bind the RPC port",
                    "Automatic Restarts",
                    "We recommend configuring each of your nodes to restart automatically on exit, to ensure you miss as little data as possible. Running the Exzo Network software as a systemd service is one great option.",
                    "Ledger Continuity",
                    "By default, each of your nodes will boot from a snapshot provided by one of your trusted validators. This snapshot reflects the current state of the chain, but does not contain the complete historical ledger. If one of your node exits and boots from a new snapshot, there may be a gap in the ledger on that node. In order to prevent this issue, add the --no-snapshot-fetch parameter to your exzonetwork-validator command to receive historical ledger data instead of a snapshot.",
                    "If you pass the --no-snapshot-fetch parameter on your initial boot, it will take your node a very long time to catch up. We recommend booting from a snapshot first, and then using the --no-snapshot-fetch parameter for reboots.",
                    "It is important to note that the amount of historical ledger available to your nodes is limited to what your trusted validators retain. You will need to ensure your nodes do not experience downtimes longer than this span, if ledger continuity is crucial for you."
                ]
            ],
            [
                "Setting up Deposit Accounts",
                "setting-up-deposit-accounts",
                [
                    "Exzo Network accounts do not require any on-chain initialization; once they contain some XZO, they exist. To set up a deposit account for your exchange, simply generate a Exzo Network keypair using any of our wallet tools.",
                    "We recommend using a unique deposit account for each of your users.",
                    "Exzo Network accounts are charged rent on creation and once per epoch, but they can be made rent-exempt if they contain 2-years worth of rent in XZO. In order to find the minimum rent-exempt balance for your deposit accounts, query the getMinimumBalanceForRentExemption endpoint:",
                    "Offline Accounts",
                    "You may wish to keep the keys for one or more collection accounts offline for greater security. If so, you will need to move XZO to hot accounts using our offline methods."
                ]
            ],
            [
                "Listening for Deposits",
                "listening-for-deposits",
                [
                    "When a user wants to deposit XZO into your exchange, instruct them to send a transfer to the appropriate deposit address."
                ]
            ],
            [
                "Validating User-supplied Account Addresses for Withdrawals in XZO",
                "validating-user-supplied-account-addresses-for-withdrawals-in-xzo",
                [
                    "Solana addresses a 32-byte array, encoded with the bitcoin base58 alphabet. This results in an ASCII text string matching the following regular expression:",
                    "[1-9A-HJ-NP-Za-km-z]32,44",
                    "This check is insufficient on its own as Solana addresses are not checksummed, so typos cannot be detected. To further validate the user's input, the string can be decoded and the resulting byte array's length confirmed to be 32. However, there are some addresses that can decode to 32 bytes despite a typo such as a single missing character, reversed characters and ignored case.",
                    "Poll for Blocks",
                    "The easiest way to track all the deposit accounts for your exchange is to poll for each confirmed block and inspect for addresses of interest, using the JSON-RPC service of your Exzo Network api node.",
                    "To identify which blocks are available, send a getConfirmedBlocks request, passing the last block you have already processed as the start-slot parameter:",
                    "Not every slot produces a block, so there may be gaps in the sequence of integers.",
                    "For each block, request its contents with a getConfirmedBlock request:",
                    "The preBalances and postBalances fields allow you to track the balance changes in every account without having to parse the entire transaction. They list the starting and ending balances of each account in lamport, indexed to the accountKeys list. For example, if the deposit address if interest is 47Sbuv6jL7CViK9F2NMW51aQGhfdpUu7WNvKyH645Rfi, this transaction represents a transfer of 218099990000 - 207099990000 = 11000000000 lamports = 11 XZO",
                    "If you need more information about the transaction type or other specifics, you can request the block from RPC in binary format, and parse it using either our Rust SDK or Javascript SDK.",
                    "Address History",
                    "You can also query the transaction history of a specific address. This is generally not a viable method for tracking all your deposit addresses over all slots, but may be useful for examining a few accounts for a specific period of time.",
                    "Send a getConfirmedSignaturesForAddress2 request to the api node, specifying a range of recent slots:"
                ]
            ],
            [
                "Sending Withdrawals",
                "sending-withdrawals",
                [
                    "To accommodate a user's request to withdraw XZO, you must generate a Exzo Network transfer transaction, and send it to the api node to be forwarded to your cluster.",
                    "Synchronous",
                    "Sending a synchronous transfer to the Exzo Network cluster allows you to easily ensure that a transfer is successful and finalized by the cluster.",
                    "Exzo Network command-line tool offers a simple command, exzonetwork transfer, to generate, submit, and confirm transfer transactions. By default, this method will wait and track progress on stderr until the transaction has been finalized by the cluster. If the transaction fails, it will report any transaction errors.",
                    "The Solana Javascript SDK offers a similar approach for the JS ecosystem. Use the SystemProgram to build a transfer transaction, and submit it using the sendAndConfirmTransaction method.",
                    "Asynchronous",
                    "For greater flexibility, you can submit withdrawal transfers asynchronously. In these cases, it is your responsibility to verify that the transaction succeeded and was finalized by the cluster.",
                    "Note: Each transaction contains a recent blockhash to indicate its liveness. It is critical to wait until this blockhash expires before retrying a withdrawal transfer that does not appear to have been confirmed or finalized by the cluster. Otherwise, you risk a double spend. See more on blockhash expiration below.",
                    "First, get a recent blockhash using the getFees endpoint or the CLI command:",
                    "In the command-line tool, pass the --no-wait argument to send a transfer asynchronously, and include your recent blockhash with the --blockhash argument:",
                    "You can also build, sign, and serialize the transaction manually, and fire it off to the cluster using the JSON-RPC sendTransaction endpoint.",
                    "Transaction Confirmations & Finality",
                    "Get the status of a batch of transactions using the getSignatureStatuses JSON-RPC endpoint. The confirmations field reports how many confirmed blocks have elapsed since the transaction was processed. If confirmations: null, it is finalized.",
                    "Blockhash Expiration",
                    "When you request a recent blockhash for your withdrawal transaction using the getFees endpoint or exzonetwork fees, the response will include the lastValidSlot, the last slot in which the blockhash will be valid. You can check the cluster slot with a getSlot query; once the cluster slot is greater than lastValidSlot, the withdrawal transaction using that blockhash should never succeed.",
                    "You can also doublecheck whether a particular blockhash is still valid by sending a getFeeCalculatorForBlockhash request with the blockhash as a parameter. If the response value is null, the blockhash is expired, and the withdrawal transaction should never succeed."
                ]
            ],
            [
                "Testing the Integration",
                "testing-the-integration",
                [
                    "Be sure to test your complete workflow on Exzo Network devnet and testnet clusters before moving to production on mainnet-beta. Devnet is the most open and flexible, and ideal for initial development, while testnet offers more realistic cluster configuration. Devnet features a token faucet, but you will need to request some testnet XZO to get going on testnet."
                ]
            ]
        ]
    },
    {
        "url": "/links",
        "sections": [
            [
                "Links ",
                null,
                []
            ]
        ]
    },
    {
        "url": "/nft_tutorials",
        "sections": [
            [
                "NFT Tutorials ",
                null,
                []
            ]
        ]
    },
    {
        "url": "/performance_reports",
        "sections": [
            [
                "Performance Reports ",
                null,
                []
            ],
            [
                "Summary",
                "summary",
                [
                    "This test was done to measure the SC ERC20 token transfers, SC ERC721 token minting and EOA to EOA transactions functionality with heavy loads and speed of the transactions on the nodes with higher hardware resources.",
                    "The goal was to check if everything is working as expected during heavy loads. That was also the reason we’ve introduced gas metrics in the loadbot output, which show us if the blocks are filled with transactions properly.",
                    "All transactions were sent to the single node via GRPC API, and the receipts were received via JSON-RPC API. After all transactions were done, gas information was read from each block, using the eth_getBlockByNumber JSON-RPC method.",
                    "Our aim was to strive to reach a maximum possible TPS on the hardware resources available. To acheive this, we've modified the block gas limit and block time parameters, to give us the best possible tps results and keep the system integrity and stability.",
                    "Production Environments",
                    "When configuring a production environment, you need to be carefull if you're trying to acheive high performance of the chain. If block gas limit parameter is set to a high value, block time is set to 1s, and there is a high transaction load on a single node, that node will consume a lot ( if not all available ) RAM and can cause server crash. Use the loadbot to test everything thoroughly, monitor the system resource utilization and set your configuration parameters accordingly."
                ]
            ],
            [
                "Results of EOA to EOA transfers​",
                "results-of-eoa-to-eoa-transfers",
                [
                    "Metric",
                    "Value",
                    "Transaction type",
                    "EOA to EOA",
                    "Transactions per second",
                    "1428",
                    "Transactions failed",
                    "0",
                    "Transactions succeeded",
                    "30000",
                    "Total blocks used",
                    "15",
                    "Total run time",
                    "21.374620s"
                ]
            ],
            [
                "Results of ERC20 token transfers​",
                "results-of-erc-20-token-transfers",
                [
                    "Metric",
                    "Value",
                    "Transaction type",
                    "ERC20",
                    "Transactions per second",
                    "1111",
                    "Transactions failed",
                    "0",
                    "Transactions succeeded",
                    "50000",
                    "Total blocks used",
                    "38",
                    "ERC20 transaction run time",
                    "45.906450s",
                    "SC Deploy time",
                    "2.006580s"
                ]
            ],
            [
                "Results of ERC721 token minting​",
                "results-of-erc-721-token-minting",
                [
                    "Metric",
                    "Value",
                    "Transaction type",
                    "ERC721",
                    "Transactions per second",
                    "714",
                    "Transactions failed",
                    "0",
                    "Transactions succeeded",
                    "30000",
                    "Total blocks used",
                    "39",
                    "ERC721 transaction run time",
                    "42.864140s",
                    "SC Deploy time",
                    "2.005500s"
                ]
            ],
            [
                "Environment EOA to EOA",
                "environment-eoa-to-eoa",
                []
            ],
            [
                "Environment ERC20​",
                "environment-erc-20",
                []
            ],
            [
                "Environment ERC721​",
                "environment-erc-721",
                []
            ]
        ]
    },
    {
        "url": "/setup_metamask_mainnet",
        "sections": [
            [
                "Set up MetaMask (Mainnet) ",
                null,
                [
                    "This tutorial will help you set up to connect MetaMask to Exzo Network Mainnet via a custom RPC endpoint. You may pick one in this list of public endpoints here, and follow the following steps. ",
                    "Select network: Custom RPC",
                    "Network Name: Exzo Network",
                    "RPC Url: https://mainnet.exzo.technology​",
                    "ChainID: 1229",
                    "Symbol: XZO",
                    "Block Explorer URL: https://exzoscan.io​",
                    "This is how it should look in your MetaMask wallet. ",
                    "Caution",
                    "Make sure you are visiting https://docs.exzo.technology in the URL address and only add these parameters above as malicious individuals can put out false information to hack your wallet or access your funds."
                ]
            ]
        ]
    },
    {
        "url": "/setup_metamask_testnet",
        "sections": [
            [
                "Set up MetaMask (Testnet) ",
                null,
                [
                    "This tutorial will help you set up to connect MetaMask to Exzo Network Testnet via a custom RPC endpoint. You may pick one in this list of public endpoints here, and follow the following steps. ",
                    "Select network: Custom RPC",
                    "Network Name: Exzo Network Testnet",
                    "New RPC Url: https://testnet.exzo.technology​",
                    "ChainID: 2370",
                    "Symbol: XZO",
                    "Block Explorer: https://testnet.exzoscan.io/",
                    "This is what it should look like in your MetaMask wallet. "
                ]
            ]
        ]
    },
    {
        "url": "/smart_contract_audits",
        "sections": [
            [
                "Smart Contract Audits ",
                null,
                [
                    "We have all of our smart contracts audited and reports generated. Feel free to review them below. "
                ]
            ]
        ]
    },
    {
        "url": "/software",
        "sections": [
            [
                "Software ",
                null,
                [
                    "Exzo Network project includes two main components",
                    "A web-based application that will provide a platform for decentralized cross-chain conversion of digital assets.",
                    "A blockchain network based on Proof-of-Stake consensus mechanism that will provide an ecosystem for creating customized blockchains, deploying smart contracts, with low fees and high throughput.",
                    "Exzo Network project will be aimed to including full support of Ethereum based dApps.",
                    "All critical components of the system will be reused as much as possible from existing open source projects to reduce time-to-market and costs of implementation."
                ]
            ],
            [
                "Ecosystem Needs & Requirements",
                "ecosystem-needs-and-requirements",
                [
                    "Cryptocurrencies have an isolated existence. Designed to be decentralized and work independently, they either have their own separate blockchain ecosystem or run off of other larger ones such as Ethereum and Binance Smart Chain.",
                    "This essentially means that one token cannot interact with another if they run on different ecosystems. As more and more tokens are launched coupled with increased interest due to DeFi, the struggle is getting more serious.",
                    "Exzo Network project is committed to promote adoption of cryptocurrencies by providing products that are useful and easy to use.",
                    "First of all, the cross-chain swap solution should solve the problem of converting tokens between different blockchains which can now be complicated for the general user.",
                    "There is another problem that is relevant for small and medium businesses who want to implement blockchain and dApps into their operations. Using existing solutions puts limitations on business applicability and is often accompanied with high transactional costs. Custom development of a decentralized application or the blockchain network can be costly and time consuming. By implementing the innovative blockchain architecture Exzo Network native blockchain network should allow cheap, simple and fast creation of custom blockchains with low-cost transactions for businesses that need it.",
                    "Businesses that already run their applications on Ethereum struggle with high fees and low TPS rate. They need a cheaper and faster alternative to optimize their operations. Exzo Network blockchain should provide full support for Ethereum based smart contracts written in Solidity for the smooth and efficient transition from Ethereum to Exzo Network blockchain."
                ]
            ],
            [
                "Solution Overview",
                "solution-overview",
                [
                    "Exzo Network will be the platform that provides a wide range of blockchain and DeFi opportunities for users from swapping tokens between different blockchains and earn profits from staking to creating fully-functional dApps written in Solidity and fully compatible with Ethereum Virtual Machine (EVM).",
                    "Initially Exzo Network ecosystem will be a fork of Fantom Network (https://fantom.foundation/). This will give faster time to market, robust technology and feature-rich solutions.",
                    "Main components of the platform will include:",
                    "Cross-chain swap application",
                    "Main blockchain network supporting Solidity dApps",
                    "Governance token",
                    "Staking module",
                    "Blockchain explorer",
                    "Wallet",
                    "In later versions, it is planned to introduce enterprise solutions for managing, tracking, and securing private data such as healthcare data/patient data, data for private sector industries, government, etc."
                ]
            ],
            [
                "Major Features",
                "major-features",
                [
                    "Cross-chain swap app",
                    "Web application integrated with open source liquidity provider API's that allows to swap tokens between networks supported by these providers from the custom Exzo Network web interface.",
                    "PoS blockchain network",
                    "The solution forked from Fantom blockchain network that will allow for staking and natively building swap bridges between multiple blockchains. The network will be governed by the native Exzo Network token providing the ecosystem for creating swap liquidity pools.",
                    "Wallet Application",
                    "Mobile client for storing all supported tokens and accessing DeFi features provided by the network including swaps and staking.",
                    "EVM compatible Solidity dApps",
                    "Full support of Ethereum based smart contracts written in Solidity to allow for dApp development and transition of users from Ethereum to Exzo Network blockchain.",
                    "Blockchain Explorer",
                    "Web application integrated with the native network that allows to track and search transactions on the ledger."
                ]
            ],
            [
                "Scope & Limitations",
                "scope-and-limitations",
                [
                    "The initial version of Exzo Network project will focus on creating the fastest possible value for end users by providing Exzo Network token swap application integrated with open source liquidity providers via their API's.",
                    "In parallel the efforts will be directed to the development of the core functionality of the platform that covers the MVP features and forms the basis for further development. The MVP release will include a forked and Exzo Network branded set of applications from Fantom blockchain ecosystem.",
                    "For the budget optimization the software will not have features for the general consumer, such as:",
                    "Ability to swap tokens that are not supported by open source liquidity providers (initial version).",
                    "Ability to swap tokens between networks that are not supported by Fantom blockchain at the time of the fork.",
                    "Custom features that are not supported by Fantom blockchain at the time of the fork."
                ]
            ],
            [
                "Other Needs",
                "other-needs",
                [
                    "The solution will initially run on AWS cloud infrastructure utilizing message-based architecture and modern technologies like Docker, RabbitMQ, Redis, Lerna, etc."
                ]
            ],
            [
                "Accessibility",
                "accessibility",
                [
                    "Exzo Network platform will be designed to be as widely accessible as possible. Therefore, it should be compatible with the latest versions of Google Chrome, Firefox, Safari, Edge, Brave, and Internet Explorer browsers.",
                    "Good to know: A quick start guide can be good to help folks get up and running\r\nwith your API in a few steps. Some people prefer diving in with the basics\r\nrather than meticulously reading every page of documentation!"
                ]
            ],
            [
                "Get your API keys",
                "get-your-api-keys",
                [
                    "Your API requests are authenticated using API keys. Any request that doesn't include an API key will return an error.",
                    "You can generate an API key from your Dashboard at any time."
                ]
            ],
            [
                "Install the library",
                "install-the-library",
                [
                    "The best way to interact with our API is to use one of our official libraries:",
                    "Good to know: Using tabs to separate out different languages is a great way to\r\npresent technical examples or code documentation without cramming your docs\r\nwith extra sections or pages per language."
                ]
            ],
            [
                "Make your first request",
                "make-your-first-request",
                [
                    "To make your first request, send an authenticated request to the pets endpoint. This will create a pet, which is nice.",
                    "Good to know: You can use the API Method block to fully document an API\r\nmethod. You can also sync your API blocks with an OpenAPI file or URL to\r\nauto-populate them.",
                    "Take a look at how you might call this method using our official libraries, or via curl:"
                ]
            ],
            [
                "Create pet ",
                "create-pet",
                [
                    "Creates a new pet.",
                    "Required attributes",
                    "The name of the pet",
                    "Optional attributes",
                    "The id of the user who owns the pet",
                    "The species of the pet",
                    "The breed of the pet"
                ]
            ],
            [
                "1.1 ExzoSwap: Main page",
                "1-1-exzo-swap-main-page",
                [
                    "1.1.1 Summary",
                    "As a Guest I want to view the main page so that I could navigate through the features of ExzoSwap app.",
                    "1.1.2. Acceptance criteria",
                    "1.1.2.1. A user should be able to navigate to ExzoSwap application from the ExzoCoin (Exzo Network) website.",
                    "1.1.2.2. The main page of ExzoSwap application should include the following elements in the header:",
                    "Exzo Network logo",
                    "Bridges links dropdown menu",
                    "Network selector dropdown menu",
                    "Buy crypto button",
                    "Connect Wallet button",
                    "Language selector button",
                    "1.1.2.3. The swap widget should include:",
                    "Refresh button",
                    "Settings button",
                    "Source token selector",
                    "Amount input field",
                    "Target token selector",
                    "Swap protocol selector",
                    "Action buttons",
                    "Swap rate and route indicator",
                    "1.1.3. UI Design"
                ]
            ],
            [
                "1.2. ExzoSwap: Connect a wallet",
                "1-2-exzo-swap-connect-a-wallet",
                [
                    "1.2.1. Summary",
                    "As a User I want to connect a wallet so that I could swap tokens on my existing crypto wallet.",
                    "1.2.2. Acceptance criteria",
                    "1.2.2.1. Once a user clicks “Connect wallet” button the Connect wallet widget is displayed.",
                    "1.2.2.2. A user should be able to:",
                    "Open Terms of service and Privacy policy pages",
                    "Check the “I read and accept” confirmation checkbox",
                    "Choose a network",
                    "Select a wallet: Metamask or WalletConnect",
                    "1.2.2.3. Once a user selects a wallet the corresponding web3 app widget is displayed.",
                    "1.2.2.4. A user selects an account and confirms the connection",
                    "1.2.2.5. Once the connection is successful the account alias and wallet balance is displayed in the header.",
                    "1.2.3. UI Design"
                ]
            ],
            [
                "1.3. ExzoSwap: Buy cryptocurrency with a credit card",
                "1-3-exzo-swap-buy-cryptocurrency-with-a-credit-card",
                [
                    "1.3.1. Summary",
                    "As a User I want to buy cryptocurrency with a credit card so that I could convert fiat to crypto.",
                    "1.3.2. Acceptance criteria",
                    "1.3.2.1. Upon clicking on the Buy Crypto button a user should be redirected to MoonPay payment gateway (https://buy.moonpay.io/).",
                    "1.3.2.2. The payment gateway allows a user to select a cryptocurrency from a list, fill in the target wallet address and buy the selected cryptocurrency with a credit card.",
                    "1.3.3. UI Design"
                ]
            ],
            [
                "1.4. ExzoSwap: Transfer coins via bridges",
                "1-4-exzo-swap-transfer-coins-via-bridges",
                [
                    "1.4.1. Summary",
                    "As a User I want to transfer coins via bridges so that I could move tokens from one blockchain to another.",
                    "1.4.2. Acceptance criteria",
                    "1.4.2.1. A user should be able to move supported tokens between blockchains using bridges.",
                    "1.4.2.2. Upon clicking on an item in the Bridges dropdown menu a webpage of the corresponding bridge is open in a new browser tab.",
                    "1.4.2.3. The list of bridges:",
                    "https://www.binance.org/en/bridge",
                    "https://wallet.matic.network/bridge/",
                    "https://gateway.optimism.io/",
                    "https://bridge.arbitrum.io/",
                    "1.4.3. UI Design"
                ]
            ],
            [
                "1.5. ExzoSwap: Select the chain for swap",
                "1-5-exzo-swap-select-the-chain-for-swap",
                [
                    "1.5.1. Summary",
                    "As a User I want to select the chain for swap so that I could choose the blockchain where I will perform the swap.",
                    "1.5.2. Acceptance criteria",
                    "1.5.2.1. A user should be able to select a network where they want to swap tokens.",
                    "1.5.2.2. The selection of a network affects the list of available tokens and protocols in the Swap parameters widget.",
                    "1.5.2.3. The system should identify if the connected wallet is configured for the selected network and prompt a user to change wallet settings if the wallet network is different.",
                    "1.5.3. UI Design"
                ]
            ],
            [
                "1.6. ExzoSwap: Set the swap parameters",
                "1-6-exzo-swap-set-the-swap-parameters",
                [
                    "1.6.1. Summary",
                    "As a User I want to set the swap parameters so that I could define the direction and the amount of the swap",
                    "1.6.2. Acceptance criteria",
                    "1.6.2.1. A user should be able to select the source token from the dropdown list and the amount to swap.",
                    "1.6.2.2. The system should validate if the amount of selected token on the connected wallet of a user is sufficient.",
                    "1.6.2.3. The system should display the approximate value of defined amount of selected tokens calculated in USD.",
                    "1.6.2.4. A user should be able to select the target token from the dropdown list.",
                    "1.6.2.5. A user should be able to view and select available swap protocols to be used for the swap.",
                    "1.6.2.6. Each swap protocol item should include the name of the protocol, amount to be received, the cost of transaction and total amount of the swap operation.",
                    "1.6.3. UI Design"
                ]
            ],
            [
                "1.7. ExzoSwap: View the details of the deal (rate, fees, route)",
                "1-7-exzo-swap-view-the-details-of-the-deal-rate-fees-route",
                [
                    "1.7.1. Summary",
                    "As a User I want to view the details of the deal (rate, fees, route) so that I could understand the full cost of the swap",
                    "1.7.2. Acceptance criteria",
                    "1.7.2.1. Once swap parameters are set a user should be able to view the conversion rate and the conversion route.",
                    "1.7.3. UI Design"
                ]
            ],
            [
                "1.8. ExzoSwap: Set additional parameters (gas limit, slippage)",
                "1-8-exzo-swap-set-additional-parameters-gas-limit-slippage",
                [
                    "1.8.1. Summary",
                    "As a User I want to set additional parameters (gas limit, slippage) so that I could optimize transaction cost and rate",
                    "1.8.2. Acceptance criteria",
                    "1.8.2.1. Upon clicking the Swap settings button the advanced swap parameters widget is open",
                    "1.8.2.2. A user should be able to set the Gas limit price for the transaction:",
                    "One of predefined values (Low, Medium or High)",
                    "Custom value",
                    "1.8.2.3. A user should be able to set the Slippage tolerance value for the transaction:",
                    "One of predefined values",
                    "Custom value",
                    "1.8.2.4. Transaction is not executed if it is not possible to complete the transaction within gas price and slippage tolerance limits defined by a user.",
                    "1.8.3. UI Design"
                ]
            ],
            [
                "1.9. ExzoSwap: Confirm the deal",
                "1-9-exzo-swap-confirm-the-deal",
                [
                    "1.9.1. Summary",
                    "As a User I want to confirm the deal so that I could initiate the swap transaction",
                    "1.9.2. Acceptance criteria",
                    "1.9.2.1. After setting all the parameters of the swap a user should be able to initiate the swap execution by clicking on the Swap Currency button.",
                    "1.9.2.2. Upon clicking on the Swap Currency button the linked wallet application should be triggered and open for the transaction confirmation.",
                    "1.9.2.3. If the wallet is not connected to the application, clicking on the Swap Currency button (or if a user clicks Connect Wallet button) should open the Connect Wallet widget.",
                    "1.9.3. UI Design"
                ]
            ],
            [
                "1.10. Exzo Wallet: Home page",
                "1-10-exzo-wallet-home-page",
                [
                    "1.10.1. Summary",
                    "As a Guest I want to view the home page so that I could navigate through the features of the Exzo Wallet app",
                    "1.10.2. Acceptance criteria",
                    "1.10.2.1. A user should be able to open the Exzo Wallet application from the website of Exzo Network.",
                    "1.10.2.2. Exzo Wallet app should include the sidebar menu and main content area.",
                    "1.10.2.3. Sidebar menu should include the following clickable elements:",
                    "Exzo logo - redirecting to the main page of Exzo",
                    "Home - redirecting to the home page of Exzo Wallet app",
                    "Wallet - redirecting to the Wallet page",
                    "Staking - redirecting to the Staking page",
                    "Governance - redirecting to the Governance page",
                    "Swap - redirecting to ExzoSwap application",
                    "1.10.2.4. The main content area should include:",
                    "Action buttons (Connect wallet, Create wallet, Restore wallet)",
                    "General statistics of all wallets within the account (Total balance, Available balance)",
                    "The list of wallets associated with the account",
                    "Details of each wallet (Name, Address, Type, Total balance, Available balance)",
                    "1.10.3. UI Design"
                ]
            ],
            [
                "1.11. Exzo Wallet: Connect Metamask",
                "1-11-exzo-wallet-connect-metamask",
                [
                    "1.11.1. Summary",
                    "As a User I want to connect metamask so that I could use funds from my Metamask wallet inside the Exzo Wallet app",
                    "1.11.2. Acceptance criteria",
                    "1.11.2.1. A user should be able to connect their Metamask wallet to the Exzo Wallet application.",
                    "1.11.2.2. Once connected, the user's Metamask wallet is displayed in the list of wallets inside the Exzo Wallet application."
                ]
            ],
            [
                "1.12. Exzo Wallet: Create a new wallet",
                "1-12-exzo-wallet-create-a-new-wallet",
                [
                    "1.12.1. Summary",
                    "As a User I want to create a new wallet so that I could generate a new key pair for transactions",
                    "1.12.2. Acceptance criteria",
                    "1.12.2.1. A user should be able to create a wallet by clicking on the Create wallet button at the home page of Exzo Wallet application.",
                    "1.12.2.2. The flow of creating a wallet consists of four steps:",
                    "Step 1 - a user creates a password for the wallet and downloads keystore file to their local machine",
                    "Step 2 - a seed phrase is displayed. At this step a user should also be available to view the wallet’s private key",
                    "Step 3 - a seed phrase confirmation check. At this step a user should confirm the seed phrase displayed at Step 2 by clicking the words in the correct order.",
                    "Step 4 - the confirmation message is displayed. Upon clicking the Access wallet button a user should be redirected to the Wallet page of the newly created wallet.",
                    "1.12.3. UI Design"
                ]
            ],
            [
                "1.13. Exzo Wallet: Restore wallet",
                "1-13-exzo-wallet-restore-wallet",
                [
                    "1.13.1. Summary",
                    "As a User I want to restore wallet so that I could recover my funds",
                    "1.13.2. Acceptance criteria",
                    "1.13.2.1. Upon clicking on the Restore wallet button from the home page of Exzo Wallet application the Restore wallet widget is displayed.",
                    "1.13.2.2. The Restore wallet widget should provide three options for wallet recovery:",
                    "Uploading keystore file and providing a password to it",
                    "Entering the mnemonic phrase",
                    "Entering the private key of the wallet",
                    "1.13.2.3. Once wallet recovery is successful, a user should be redirected to the Wallet page of the recovered wallet",
                    "1.13.3. UI Design"
                ]
            ],
            [
                "1.14. Exzo Wallet: Edit wallet settings",
                "1-14-exzo-wallet-edit-wallet-settings",
                [
                    "1.14.1. Summary",
                    "As a User I want to edit wallet settings so that I could personalize my wallets in Exzo Wallet app",
                    "1.14.2. Acceptance criteria",
                    "1.14.2.1. A user should be able to access wallet settings from the wallet item in the list of wallets at the home page of Exzo Wallet application or from a wallet page by clicking the Edit button (pencil icon).",
                    "1.14.2.2. Once the Edit button is clicked, the Wallet Settings widget is displayed.",
                    "1.14.2.3. In the Wallet Settings widget a user should be able to:",
                    "View wallet address",
                    "Copy wallet address",
                    "Show QR code with wallet address",
                    "View wallet type",
                    "View and edit wallet display name",
                    "View and edit the order of wallet display in the list of wallets",
                    "Remove wallet",
                    "Save changes",
                    "1.14.3. UI Design"
                ]
            ],
            [
                "1.15. Exzo Wallet: Copy wallet address",
                "1-15-exzo-wallet-copy-wallet-address",
                [
                    "1.15.1. Summary",
                    "As a User I want to copy wallet address so that I could add my wallet address to a clipboard with a single click",
                    "1.15.2. Acceptance criteria",
                    "1.15.2.1. A user should be able to copy wallet address to the clipboard by clicking the Copy button from the wallet item in the list of wallets at the home page of Exzo Wallet application, or from Wallet Settings widget, or from a wallet page.",
                    "1.15.3. UI Design"
                ]
            ],
            [
                "1.16. Exzo Wallet: Show QR code with wallet address",
                "1-16-exzo-wallet-show-qr-code-with-wallet-address",
                [
                    "1.16.1. Summary",
                    "As a User I want to show qr code with wallet address so that I could share my wallet address for scanning with a camera",
                    "1.16.2. Acceptance criteria",
                    "1.16.2.1. A user should be able to display a wallet address with QR-code for scanning by clicking the QR-code button from the Wallet Settings widget, or from a wallet page.",
                    "1.16.3. UI Design"
                ]
            ],
            [
                "1.17. Exzo Wallet: Remove wallet",
                "1-17-exzo-wallet-remove-wallet",
                [
                    "1.17.1. Summary",
                    "As a User I want to delete wallet so that I could remove a wallet from my Exzo Wallet app",
                    "1.17.2. Acceptance criteria",
                    "1.17.2.1. A user should be able to remove a wallet from the list of wallets by clicking the Remove wallet button from the Wallet Settings widget.",
                    "1.17.2.2. Once the Remove wallet button is clicked, the confirmation widget is displayed.",
                    "1.17.2.3. Upon clicking the Remove button at the confirmation widget, the wallet is removed from the list of wallets.",
                    "1.17.2.4. A user should be able to access the removed wallet by completing the Restore wallet operation.",
                    "1.17.3. UI Design"
                ]
            ],
            [
                "1.18. Exzo Wallet: View the history of transactions",
                "1-18-exzo-wallet-view-the-history-of-transactions",
                [
                    "1.18.1. Summary",
                    "As a User I want to view the history of transactions so that I could see all the incoming and outgoing transactions of my wallet",
                    "1.18.2. Acceptance criteria",
                    "1.18.2.1. A user should be able to view the list of transactions for the wallet at the wallet page including:",
                    "Transaction address",
                    "Timestamp",
                    "Address of the counterparty",
                    "Received/sent amount",
                    "1.18.3. UI Design"
                ]
            ],
            [
                "1.19. Exzo Wallet: View the list of assets",
                "1-19-exzo-wallet-view-the-list-of-assets",
                [
                    "1.19.1. Summary",
                    "As a User I want to view the list of assets so that I could see all tokens in my wallet",
                    "1.19.2. Acceptance criteria",
                    "1.19.2.1. A user should be able to view the list of assets on their wallet including:",
                    "The name of an asset",
                    "Available amount",
                    "Deposited amount",
                    "Borrowed amount",
                    "1.19.3. UI Design"
                ]
            ],
            [
                "1.20. Exzo Wallet: Send assets",
                "1-20-exzo-wallet-send-assets",
                [
                    "1.20.1. Summary",
                    "As a User I want to send assets so that I could transfer tokens to another wallet address",
                    "1.20.2. Acceptance criteria",
                    "1.20.2.1. A user should be able to send funds from their wallet to another wallet address.",
                    "1.20.2.2. Once a user clicks on the Send button from the wallet page, the Send assets widget is displayed.",
                    "1.20.2.3. The flow of sending assets from Exzo Wallet application consists of three steps:",
                    "Step 1 - select the destination network (Exzo, Ethereum or Binance)",
                    "Step 2 - Enter the amount to be sent, enter recipient’s wallet address and memo. A user should not be able to enter the amount exceeding the total wallet holdings.",
                    "Review and confirm the details of the transaction",
                    "1.20.2.4. Once the transaction is confirmed it should be sent to a validator node for processing.",
                    "1.20.2.5. Once the transaction is accepted by a validator it appears on the list of transactions at the wallet page.",
                    "1.20.3. UI Design"
                ]
            ],
            [
                "1.21. Exzo Wallet: Receive assets",
                "1-21-exzo-wallet-receive-assets",
                [
                    "1.21.1. Summary",
                    "As a User I want to receive assets so that I could get tokens to my wallet address",
                    "1.21.2. Acceptance criteria",
                    "1.21.3. UI Design"
                ]
            ],
            [
                "1.22. Exzo Wallet: Stake ExzoCoin and get a reward",
                "1-22-exzo-wallet-stake-exzo-coin-and-get-a-reward",
                [
                    "1.22.1. Summary",
                    "As a User I want to stake ExzoCoin so that I could get rewards for securing the network",
                    "1.22.2. Acceptance criteria",
                    "1.22.2.1. A user should be able to stake ExzoCoin for the reward.",
                    "1.22.2.2. There should be two options for staking:",
                    "Running a validator node",
                    "Delegation",
                    "1.22.2.3. Delegation staking page is open upon clicking Staking in the sidebar menu.",
                    "1.22.2.4. A user should be able to view active delegations per selected wallet and for all wallets on separate tabs.",
                    "1.22.2.5. Each delegation includes the details: Delegation time, Validator name, Delegated amount.",
                    "1.22.2.6. Upon click on Add delegation button the delegation widget is displayed.",
                    "1.22.2.7. The delegation flow includes two steps:",
                    "Step 1 - enter delegation amount and select a validator from the list",
                    "Step 2 - review details and confirm delegation",
                    "1.22.2.8. Once confirmed, the delegation is displayed on the list of delegations.",
                    "1.22.2.9. The reward is paid to the user's account proportionally to the amount delegated to the given validator for each block mined by this validator.",
                    "1.22.3. UI Design"
                ]
            ],
            [
                "1.23. Exzo Wallet: Vote on governance proposals",
                "1-23-exzo-wallet-vote-on-governance-proposals",
                [
                    "1.23.1. Summary",
                    "As a User I want to vote on governance proposals so that I could express my opinion on network changes",
                    "1.23.2. Acceptance criteria",
                    "1.23.2.1. A user should be able to vote for the proposals suggested by validators from the Governance page that should be accessible under by clicking the Governance button in the sidebar menu.",
                    "1.23.2.2. The Governance page should include the list of proposals with the following fields:",
                    "ID/Name of a proposals",
                    "Start/End dates of voting",
                    "User’s votes",
                    "Votes rate",
                    "Winner proposal",
                    "Proposal status",
                    "Details button",
                    "1.23.2.3. By clicking Details button a user should be able to access the page with details of the selected proposal that include:",
                    "Proposal’s name, description and address",
                    "Current voting stats",
                    "Voting controls",
                    "1.23.2.4. To vote on proposals a user should delegate their stake to a validator.",
                    "1.23.3. UI Design"
                ]
            ],
            [
                "1.24. Exzo Network: Run a validator node",
                "1-24-exzo-network-run-a-validator-node",
                [
                    "1.24.1. Summary",
                    "As a Validator I want to run a validator node so that I could get rewards for validating transactions",
                    "1.24.2. Acceptance criteria",
                    "1.24.2.1. To earn additional fees for validating transactions on chain a user should run a full validator node.",
                    "1.24.2.2. Validator’s account should meet requirements of ExzoCoin amount on the wallet.",
                    "1.24.2.3. The flow to setup a full validator node:",
                    "Launch Cloud instance that meets recommended requirements",
                    "Install Exzo Network build",
                    "Create validator wallet",
                    "Fund validator wallet",
                    "Register Validator on-chain",
                    "Create a validator key",
                    "Run a node",
                    "1.24.2.4. Detailed description of the installation process can be found by the following reference."
                ]
            ],
            [
                "1.25. Exzo Network: Run a read-only node",
                "1-25-exzo-network-run-a-read-only-node",
                [
                    "1.25.1. Summary",
                    "As a User I want to run a read-only node so that I could read on-chain data in real time",
                    "1.25.2. Acceptance criteria",
                    "1.25.2.1. To read data from the network without the ability to validate transactions and earn validator fees a user should be able to run a read-only node.",
                    "1.25.2.2. The flow to setup a read-only node:",
                    "Launch Cloud instance that meets recommended requirements",
                    "Install Exzo Network build",
                    "1.25.2.3. Detailed description of the installation process can be found by the following reference."
                ]
            ],
            [
                "1.26. Exzo Network: Deploy a Solidity smart contract",
                "1-26-exzo-network-deploy-a-solidity-smart-contract",
                [
                    "1.26.1. Summary",
                    "As a User I want to deploy a solidity smart contract so that I could run ERC-20 or ERC-721 smart contracts on Exzo Network",
                    "1.26.2. Acceptance criteria",
                    "1.26.2.1. To deploy a smart contract, a user sends a transaction to the Exzo Network containing smart contract’s bytecode without specifying any recipients.",
                    "1.26.2.2. After the contract is deployed, it will be available to all users of the Exzo Network.",
                    "1.26.2.3. Smart contracts should have an Exzo Network address like other accounts.",
                    "1.26.2.4. Detailed description of the installation process can be found by the following reference."
                ]
            ],
            [
                "1.27. Exzo Network: Create a fixed-cap asset",
                "1-27-exzo-network-create-a-fixed-cap-asset",
                [
                    "1.27.1. Summary",
                    "As a User I want to create a fixed-cap asset so that I could issue a token with fixed supply",
                    "1.27.2. Acceptance criteria",
                    "1.27.2.1. A user should be able to create a fixed-cap asset on Exzo Network that are fungible tokens for which the supply is determined at the time of asset creation.",
                    "1.27.2.2. To deploy a smart contract a user should:",
                    "Compile a code of the smart contract into bytecode",
                    "Deploy a smart contract by sending a transaction to the Exzo Network",
                    "Navigate to the explorer to check that the token has been created"
                ]
            ],
            [
                "Exzo Network: Create a variable-cap asset",
                "exzo-network-create-a-variable-cap-asset",
                [
                    "1.28.1. Summary",
                    "As a User I want to create a variable-cap asset so that I could issue a token with variable supply",
                    "1.28.2. Acceptance criteria",
                    "1.28.2.1. A user should be able to create a fixed-cap asset on Exzo Network that are fungible tokens for which the supply is determined at the time of asset creation.",
                    "1.28.2.2. To deploy a smart contract a user should:",
                    "Compile a code of the smart contract into bytecode",
                    "Deploy a smart contract by sending a transaction to the Exzo Network",
                    "Navigate to the explorer to check that the token has been created",
                    "1.28.2.3. A user should be able to use the _mint function to create additional units of the token."
                ]
            ],
            [
                "1.29. Exzo Network: Create a local test network",
                "1-29-exzo-network-create-a-local-test-network",
                [
                    "1.29.1. Summary",
                    "As a User I want to create a local test network so that I could test dApps locally without risk",
                    "1.29.2. Acceptance criteria",
                    "1.29.2.1. A user should be able to set up a local instance of Ezxo Network for testing purposes.",
                    "1.29.2.2. To create a local test network a user should:",
                    "Install Go",
                    "Install build tools",
                    "Install go-lachesis",
                    "Install the Special Fee Contract",
                    "Create a validator",
                    "Setup mainnet genesis",
                    "Add the precompiled contract",
                    "Configure SFC",
                    "Create a validator on the SFC",
                    "1.29.3. Detailed description of the installation process can be found by the following reference."
                ]
            ],
            [
                "1.30. Exzo Scan: Main page",
                "1-30-exzo-scan-main-page",
                [
                    "1.30.1. Summary",
                    "As a Guest I want a main page so that I could navigate through the features of Exzo Scan app",
                    "1.30.2. Acceptance criteria",
                    "1.30.2.1. The main page of the Exzo Scan application should include:",
                    "Exzo Scan logo",
                    "Main menu (available from all pages)",
                    "Main/Test network switcher",
                    "Search bar with filters (All, Addresses, Tokens, Tags, Labels, Websites)",
                    "Current ExzoCoin price (in USD, in BTC, daily change percent)",
                    "ExzoCoin market cap (in USD, in ExzoCoin)",
                    "Latest block (height, block time, number of transactions, throughput TPS)",
                    "The number of active validators",
                    "Current epoch ID",
                    "ExzoCoin transaction history chart",
                    "The list of latest blocks (block height, time since the validation, validator’s address, transactions count, block time, total amount of ExzoCoin transferred)",
                    "The list of latest transactions (txid, time since the block validation, from/to addresses, transferred amount)",
                    "1.30.2.2. A user should be able to add Exzo Network to Metamask from the main page of Exzo Scan web application.",
                    "1.30.3. UI Design",
                    "Refer to: https://ftmscan.com"
                ]
            ],
            [
                "1.31. Exzo Scan: View top accounts by balance",
                "1-31-exzo-scan-view-top-accounts-by-balance",
                [
                    "1.31.1. Summary",
                    "As a Guest I want to view top accounts by balance so that I could check addresses with highest balances",
                    "1.31.2. Acceptance criteria",
                    "1.31.2.1. A user should be able to access Top Accounts by ExzoCoin balance page from the main menu of Exzo Scan application.",
                    "1.31.2.2. The page should include:",
                    "Estimated number of accounts with total ExzoCoin holdings",
                    "The list of accounts (rank, address, name tag, balance, percentage of total cap, tnx count)",
                    "Pagination controls (first page, last page, next page, previous page, current page number, total number of pages, dropdown to set the number of records to show per page)",
                    "1.31.3. UI Design",
                    "Refer to: https://ftmscan.com/accounts"
                ]
            ],
            [
                "1.32. Exzo Scan: View account details",
                "1-32-exzo-scan-view-account-details",
                [
                    "1.32.1. Summary",
                    "As a Guest I want to view account details so that I could check the info of a specific wallet address",
                    "1.32.2. Acceptance criteria",
                    "1.32.2.1. By clicking on account address from any page of Exzo Scan application a user should be able to view the Account Details page.",
                    "1.32.2.2. The page should include:",
                    "Account address with controls to copy the address to the clipboard and show the address as QR code",
                    "The total balance of ExzoCoin on the account",
                    "USD value of ExzoCoin holdings on the account and current ExzoCoin price in USD",
                    "Other token holdings on the account including the button to view the detailed page of token holdings of the account",
                    "The list of transactions of the account (total number of transactions from/to the account, txnid, method, block, age, from/to addresses, txn value, txn fee)",
                    "The list of internal transactions (same structure as above, excluding fee)",
                    "The list of ERC-20 token transactions (same structure as above, including token name)",
                    "The list of ERC-721 token transactions (same structure as above, including token id)",
                    "Analytics charts (including date range selector):",
                    "ExzoCoin balance chart (Exzo Account balance chart, historic USD value chart, highest/lowest ExzoCoin/USD value indicators)",
                    "Transactions (ExzoCoin transactions, unique outgoing addresses, unique incoming addresses)",
                    "Txn fees (used, spent, including totals)",
                    "ExzoCoin transfers (sent, received)",
                    "Token transfers (including token contracts count)",
                    "Comments (view and comment)",
                    "1.32.3. UI Design",
                    "Refer to: https://ftmscan.com/address/0xebf4fbb9c81b84dd5cf89bc75588e5d0018501b3 "
                ]
            ],
            [
                "1.33. Exzo Scan: View token holdings by account",
                "1-33-exzo-scan-view-token-holdings-by-account",
                [
                    "1.33.1. Summary",
                    "As a Guest I want to view token holdings by account so that I could check tokens amounts per address",
                    "1.33.2. Acceptance criteria",
                    "1.33.2.1. A user should be able to view the page with details on token holdings for a specific account by clicking on the corresponding action button from the Account Details page (if the account has no token holdings, this functionality is not available).",
                    "1.33.2.2. The page should include:",
                    "Total value of account holdings in Exzocoin",
                    "Total value of account holdings in USD",
                    "The list of tokens available on the account (token logo, token name, token address, Symbol, quantity, token price, daily change, value in ExzoCoin, value in USD)",
                    "Pagination controls (first page, last page, next page, previous page, current page number, total number of pages, dropdown to set the number of records to show per page)",
                    "Search bar",
                    "1.33.3. UI Design",
                    "Refer to: https://ftmscan.com/tokenholdings?a=0xff7f8a0b3232fe3b68ea361ddca657c4f7896b43 "
                ]
            ],
            [
                "1.34. Exzo Scan: View the list of confirmed transactions",
                "1-34-exzo-scan-view-the-list-of-confirmed-transactions",
                [
                    "1.34.1. Summary",
                    "As a Guest I want to view the list of confirmed transactions so that I could check all the transactions added to the blockchain",
                    "1.34.2. Acceptance criteria",
                    "1.34.2.1. A user should be able to access the Transactions page from the main menu of Exzo Scan application.",
                    "1.34.2.2. The page should include:",
                    "The list of transactions (total number of transactions, txnid, method, block, age, from/to addresses, txn value, txn fee)",
                    "Pagination controls (first page, last page, next page, previous page, current page number, total number of pages, dropdown to set the number of records to show per page)",
                    "1.34.3. UI Design",
                    "Refer to: https://ftmscan.com/txs"
                ]
            ],
            [
                "1.35. Exzo Scan: View the list of pending transactions",
                "1-35-exzo-scan-view-the-list-of-pending-transactions",
                [
                    "1.35.1. Summary",
                    "As a Guest I want to view the list of pending transactions so that I could check transactions that are are not yet validated",
                    "1.35.2. Acceptance criteria",
                    "1.35.2.1. A user should be able to access the Pending Transactions page from the main menu of Exzo Scan application.",
                    "1.35.2.2. The page should include:",
                    "The list of pending transactions (total number of pending transactions, txnid, nonce, method, last seen, gas limit, gas price, from/to addresses, txn value)",
                    "Pagination controls (first page, last page, next page, previous page, current page number, total number of pages, dropdown to set the number of records to show per page)",
                    "1.35.3. UI Design",
                    "Refer to: https://ftmscan.com/txsPending"
                ]
            ],
            [
                "1.36. Exzo Scan: View transaction details",
                "1-36-exzo-scan-view-transaction-details",
                [
                    "1.36.1. Summary",
                    "As a Guest I want to view transaction details so that I could check the extended information of a specific transaction",
                    "1.36.2. Acceptance criteria",
                    "1.36.2.1. By clicking on account address from any page of Exzo Scan application a user should be able to view the Account Details page.",
                    "1.36.2.2. The page should include:",
                    "Transaction hash",
                    "Status",
                    "Block height and number of block confirmations",
                    "From/To addresses",
                    "Value (in ExzoCoin and USD)",
                    "Transaction fee (in ExzoCoin and USD)",
                    "Gas limit",
                    "Gas used (amount and percentage of gas limit)",
                    "Gas price (in ExzoCoin and Gwei)",
                    "Nonce",
                    "Input data (including the functionality to decode)",
                    "1.36.3. UI Design",
                    "Refer to: https://ftmscan.com/tx/0xcb27811a2975b19608608107f587c46a085d6dc1a234aa35725e8f6866fb1ea2 "
                ]
            ],
            [
                "1.37. Exzo Scan: View contract internal transactions",
                "1-37-exzo-scan-view-contract-internal-transactions",
                [
                    "1.37.1. Summary",
                    "As a Guest I want to view contract internal transactions so that I could check transactions related to a specific smart contract",
                    "1.37.2. Acceptance criteria",
                    "1.37.2.1. A user should be able to access the Contract Internal Transactions page from the main menu of Exzo Scan application.",
                    "1.37.2.2. The page should include:",
                    "The list of contract internal transactions (total number of internal transactions, block height, age, parent txnid, type, from/to addresses, txn value)",
                    "Pagination controls (first page, last page, next page, previous page, current page number, total number of pages, dropdown to set the number of records to show per page)",
                    "1.37.3. UI Design",
                    "Refer to: https://ftmscan.com/txsInternal"
                ]
            ],
            [
                "1.38. Exzo Scan: View blocks",
                "1-38-exzo-scan-view-blocks",
                [
                    "1.38.1. Summary",
                    "As a Guest I want to view blocks so that I could check blocks details",
                    "1.38.2. Acceptance criteria",
                    "1.38.2.1. A user should be able to access the Blocks page from the main menu of Exzo Scan application.",
                    "1.38.2.2. The page should include:",
                    "The list of blocks (total number of blocks, block height, age, number of transactions in the block, gas used, block reward)",
                    "Pagination controls (first page, last page, next page, previous page, current page number, total number of pages, dropdown to set the number of records to show per page)",
                    "1.38.3. UI Design",
                    "Refer to: https://ftmscan.com/blocks"
                ]
            ],
            [
                "1.39. Exzo Scan: View block details",
                "1-39-exzo-scan-view-block-details",
                [
                    "1.39.1. Summary",
                    "As a Guest I want to view block details so that I could check the extended information of a specific block",
                    "1.39.2. Acceptance criteria",
                    "1.39.2.1. By clicking on block height (block ID) from any page of Exzo Scan application a user should be able to view the Block page.",
                    "1.39.2.2. The page should include:",
                    "Block height (block ID)",
                    "Timestamp",
                    "Number of transactions (including internal)",
                    "Block reward",
                    "Difficulty",
                    "Total difficulty",
                    "Size",
                    "Gas used",
                    "Extra data",
                    "Hash",
                    "Parent hash",
                    "Sha3Uncles",
                    "Nonce",
                    "Comments (view and comment)",
                    "1.39.3. UI Design",
                    "Refer to: https://ftmscan.com/block/18241801"
                ]
            ],
            [
                "1.40. Exzo Scan: View verified contracts",
                "1-40-exzo-scan-view-verified-contracts",
                [
                    "1.40.1. Summary",
                    "As a Guest I want to view verified contracts so that I could check smart contracts that have been verified by Exzo Scan app",
                    "1.40.2. Acceptance criteria",
                    "1.40.2.1. A user should be able to access the Contracts page from the main menu of Exzo Scan application.",
                    "1.40.2.2. The page should include:",
                    "Quick filter dropdown (latest, open source, Solidity compiler, Vyper compiler, contract security audit)",
                    "The list of verified contracts (total number of contracts, contract address, contract name, compiler, compiler version, balance on the contract, number of transactions, contract settings marks, verification date, audit mark, license type)",
                    "Pagination controls (first page, last page, next page, previous page, current page number, total number of pages, dropdown to set the number of records to show per page)",
                    "1.40.3. UI Design",
                    "Refer to: https://ftmscan.com/contractsVerified"
                ]
            ],
            [
                "1.41. Exzo Scan: View contract details",
                "1-41-exzo-scan-view-contract-details",
                [
                    "1.41.1. Summary",
                    "As a Guest I want to view contract details so that I could check the extended information of a specific smart contract",
                    "1.41.2. Acceptance criteria",
                    "1.41.2.1. By clicking on a contract address from any page of Exzo Scan application a user should be able to view the Contract page.",
                    "1.41.2.2. The page should include all the elements as Account page plus:",
                    "Contract code tab including:",
                    "Verification mark",
                    "Contract name",
                    "Compiler Version",
                    "Optimization Enabled",
                    "Other Settings",
                    "Contract Source Code blockUI Design",
                    "Contract Security Audit",
                    "Contract ABI",
                    "Contract Creation Code",
                    "Constructor Arguments",
                    "Deployed ByteCode Sourcemap",
                    "Swarm Source",
                    "Read contract tab (read functions and their values)",
                    "Write contract tab (write functions including inputs and Write buttons for their execution)",
                    "Contract events tab (total number of events, txn hash, method, logs)",
                    "1.41.3. UI Design",
                    "Refer to: https://ftmscan.com/address/0x0eca94713829bba13877b7c67a9cdd9873522fc0 "
                ]
            ],
            [
                "1.42. Exzo Scan: View validators leaderboard",
                "1-42-exzo-scan-view-validators-leaderboard",
                [
                    "1.42.1. Summary",
                    "As a Guest I want to view validators leaderboard so that I could check the most performing validators",
                    "1.42.2. Acceptance criteria",
                    "1.42.2.1. A user should be able to access the Validators page from the main menu of Exzo Scan application.",
                    "1.42.2.2. The page should include:",
                    "The list of validators (total number of validators, rank, Address, ID, downtime, self-staked amount, delegated amount, total staked, status)",
                    "Pagination controls (first page, last page, next page, previous page, current page number, total number of pages, dropdown to set the number of records to show per page)",
                    "1.42.3. UI Design",
                    "Refer to: https://ftmscan.com/validators"
                ]
            ],
            [
                "1.43. Exzo Scan: View epochs",
                "1-43-exzo-scan-view-epochs",
                [
                    "1.43.1. Summary",
                    "As a Guest I want to view epochs so that I could check the confirmed batches of blocks",
                    "1.43.2. Acceptance criteria",
                    "1.43.2.1. A user should be able to access the Epochs page from the main menu of Exzo Scan application.",
                    "1.43.2.2. The page should include:",
                    "The list of epochs (total number of epochs, epoch ID, end time, total base reward, total fee, total reward)",
                    "Pagination controls (first page, last page, next page, previous page, current page number, total number of pages, dropdown to set the number of records to show per page)",
                    "1.43.3. UI Design",
                    "Refer to: https://ftmscan.com/epochs"
                ]
            ],
            [
                "1.44. Exzo Scan: View epoch details",
                "1-44-exzo-scan-view-epoch-details",
                [
                    "1.44.1. Summary",
                    "As a Guest I want to view epoch details so that I could check the extended information of a specific epoch",
                    "1.44.2. Acceptance criteria",
                    "1.44.2.1. By clicking on epoch ID from any page of Exzo Scan application a user should be able to view the Epoch page.",
                    "1.44.2.2. The page should include:",
                    "Epoch ID",
                    "End time",
                    "Total base reward",
                    "Total fee",
                    "Total reward weight",
                    "Comments (view and comment)",
                    "1.44.3. UI Design",
                    "Refer to: https://ftmscan.com/epoch/40399"
                ]
            ],
            [
                "1.45. Exzo Scan: View ERC-20 top tokens",
                "1-45-exzo-scan-view-erc-20-top-tokens",
                [
                    "1.45.1. Summary",
                    "As a Guest I want to view erc-20 top tokens so that I could check the most valuable ERC-20 tokens on chain",
                    "1.45.2. Acceptance criteria",
                    "1.45.2.1. A user should be able to access the Token Tracker page from the main menu of Exzo Scan application.",
                    "1.45.2.2. The page should include:",
                    "The list of ERC-20 tokens (total number of tokens, token name and logo, token price in USD/BTC/EXZO, daily change percent, daily trading volume, market cap, number of token holders)",
                    "Pagination controls (first page, last page, next page, previous page, current page number, total number of pages, dropdown to set the number of records to show per page)",
                    "1.45.3. UI Design",
                    "Refer to: https://ftmscan.com/tokens"
                ]
            ],
            [
                "1.46. Exzo Scan: View ERC-20 token transfers",
                "1-46-exzo-scan-view-erc-20-token-transfers",
                [
                    "1.46.1. Summary",
                    "As a Guest I want to view erc-20 token transfers so that I could check transactions of ERC-20 tokens",
                    "1.46.2. Acceptance criteria",
                    "1.46.2.1. A user should be able to access the Token Transfers page from the main menu of Exzo Scan application.",
                    "1.46.2.2. The page should include:",
                    "The list of ERC-20 token transactions (total number of transactions, txn hash, age, from/to addresses, value, token name and symbol)",
                    "Pagination controls (first page, last page, next page, previous page, current page number, total number of pages, dropdown to set the number of records to show per page)",
                    "1.46.3. UI Design",
                    "Refer to: https://ftmscan.com/tokentxns"
                ]
            ],
            [
                "1.47. Exzo Scan: View ERC-721 top tokens",
                "1-47-exzo-scan-view-erc-721-top-tokens",
                [
                    "1.47.1. Summary",
                    "As a Guest I want to view erc-721 top tokens so that I could check the most valuable ERC-721 tokens on chain",
                    "1.47.2. Acceptance criteria",
                    "1.47.2.1. A user should be able to access the Non-Fungible Token Tracker page from the main menu of Exzo Scan application.",
                    "1.47.2.2. The page should include:",
                    "The list of non-fungible tokens (total number of NFT token contracts, token name and logo, daily number of transfers, weekly number of transfers)",
                    "Pagination controls (first page, last page, next page, previous page, current page number, total number of pages, dropdown to set the number of records to show per page)",
                    "1.47.3. UI Design",
                    "Refer to: https://ftmscan.com/tokens-nft"
                ]
            ],
            [
                "1.48. Exzo Scan: View ERC-721 token transfers",
                "1-48-exzo-scan-view-erc-721-token-transfers",
                [
                    "1.48.1. Summary",
                    "As a Guest I want to view erc-721 token transfers so that I could check transactions of ERC-721 tokens",
                    "1.48.2. Acceptance criteria",
                    "1.48.2.1. A user should be able to access the Non-Fungible Token Transfers page from the main menu of Exzo Scan application.",
                    "1.48.2.2. The page should include:",
                    "The list of non-fungible token transactions (total number of transactions, txn hash, age, from/to addresses, token ID, token name and symbol)",
                    "Pagination controls (first page, last page, next page, previous page, current page number, total number of pages, dropdown to set the number of records to show per page)",
                    "1.48.3. UI Design",
                    "Refer to: https://ftmscan.com/tokentxns-nft"
                ]
            ],
            [
                "1.49. Exzo Scan: View charts and stats",
                "1-49-exzo-scan-view-charts-and-stats",
                [
                    "1.49.1. Summary",
                    "As a Guest I want to view charts and stats so that I could get visual insights on blockchain data",
                    "1.49.2. Acceptance criteria",
                    "1.49.2.1. A user should be able to access the Exzo Network Charts & Statistics page from the main menu of Exzo Scan application.",
                    "1.49.2.2. The page should include the preview images for the following charts:",
                    "Daily Transactions Chart",
                    "ERC-20 Daily Token Transfer Chart",
                    "Unique Addresses Chart",
                    "Average Block Size Chart",
                    "Average Block Time Chart",
                    "Average Gas Price Chart",
                    "Daily Gas Used Chart",
                    "Block Count and Rewards Chart",
                    "Network Pending Transactions Chart",
                    "Network Transaction Fee Chart",
                    "Network Utilization Chart",
                    "Verified Contracts Chart",
                    "1.49.2.3. Upon clicking on a chart preview image the page with the selected chart is open",
                    "1.49.2.4. A user should be able to print the chart and/or download it in various file formats (png, jpeg, pdf, svg, csv)",
                    "1.49.3. UI Design",
                    "Refer to: https://ftmscan.com/charts"
                ]
            ],
            [
                "1.50. Exzo Scan: View top statistics",
                "1-50-exzo-scan-view-top-statistics",
                [
                    "1.50.1. Summary",
                    "As a Guest I want to view top statistics so that I could check selected highlights from blockchain data",
                    "1.50.2. Acceptance criteria",
                    "1.50.2.1. A user should be able to access the Top Statistics page from the main menu of Exzo Scan application.",
                    "1.50.2.2. The page should include:",
                    "The list of top EXZO senders (Rank, Address, Total Amount Sent, Percentage)",
                    "The list of top EXZO receivers (Rank, Address, Total Amount Received, Percentage)",
                    "Top Txn Count Sent (Rank, Address, Total Txn, Percentage)",
                    "Top Txn Count Received (Rank, Address, Total Txn, Percentage)",
                    "Top Tokens by Unique Senders (Rank, Token Name, Unique Senders)",
                    "Top Tokens by Unique Receivers (Rank, Token Name, Unique Receivers)",
                    "Top Tokens by Total Uniques (Rank, Token Name, Total Uniques)",
                    "Top Tokens by Txn Count (Tag Cloud, Rank, Token Name, Txn Count)",
                    "Top Accounts by Gas Used (Pie Chart, Rank, Address, Gas Used)",
                    "Top Accounts by Txn Count (Pie Chart, Rank, Address, Txn Count)",
                    "1.50.2.3. A user should be able to switch between 24 Hours, 3 Days and 7 Days statistics period for all data sets.",
                    "1.50.2.4. The Overview tab should include the top ranked address from each data set with the value.",
                    "1.50.3. UI Design",
                    "Refer to: https://ftmscan.com/topstat#Overview"
                ]
            ],
            [
                "1.51. Exzo Scan: Developer APIs",
                "1-51-exzo-scan-developer-apis",
                [
                    "1.51.1. Summary",
                    "As a Guest I want to developer apis so that I could get information about available API endpoints and methods",
                    "1.51.2. Acceptance criteria",
                    "1.51.2.1. A user should be able to access the Developers API page from the main menu of Exzo Scan application.",
                    "1.51.2.2. The page should include the API reference for the following methods:",
                    "Get EXZO Balance for a single Address",
                    "Get EXZO Balance for multiple Addresses in a single call",
                    "Get a list of 'Normal' Transactions By Address",
                    'Get a list of "ERC-20 - Token Transfer Events" by Address',
                    'Get a list of "ERC721 - Token Transfer Events" by Address',
                    "Get list of Blocks Validated by Address",
                    "Get Contract ABI for Verified Contract Source Codes",
                    "Get Contract Source Code for Verified Contract Source Codes",
                    "Get ERC20-Token TotalSupply by ContractAddress",
                    "Get ERC20-Token Account Balance for TokenContractAddress",
                    "Get Total Supply of EXZO on the Exzo Network",
                    "Get Validators list on the Exzo Network",
                    "EXZO RPC Nodes",
                    "1.51.3. UI Design",
                    "Refer to: https://ftmscan.com/apis"
                ]
            ],
            [
                "1.52. Exzo Scan: Verify contract",
                "1-52-exzo-scan-verify-contract",
                [
                    "1.52.1. Summary",
                    "As a Guest I want to verify contract so that I could verify the contract that was deployed to the network",
                    "1.52.2. Acceptance criteria",
                    "1.52.2.1. After deploying the smart contract a user should be able to verify it.",
                    "1.52.2.2. A user should be able to access the Verify & Publish Contract Source Code page from the main menu of Exzo Scan application.",
                    "1.52.2.3. In order to verify the code of a smart contract a user should:",
                    "enter the address of the deployed smart contract",
                    "select compiler type from the dropdown",
                    "select open source license type",
                    "agree to the terms of service",
                    "enter the source code of the smart contract",
                    "enter the ABI encoded parameters of deployment",
                    "1.52.2.4. The Exzo Scan application should verify the code of the smart contract and display errors if any.",
                    "1.52.2.5. Once the contract is successfully verified the verification mark is added on the page of the smart contract.",
                    "1.52.3. UI Design",
                    "Refer to: https://ftmscan.com/verifyContract"
                ]
            ],
            [
                "Exzo Scan: Bytecode to Opcode Disassemble",
                "exzo-scan-bytecode-to-opcode-disassemble",
                [
                    "1.53.1. Summary",
                    "As a Guest I want to bytecode to opcode disassemble so that I could decode the low level Contract ByteCodes to Opcodes",
                    "1.53.2. Acceptance criteria",
                    "1.53.2.1. A user should be able to disassemble the bytecode to opcode at the Bytecode to Opcode Disassembler page that should be accessible from the main menu of Exzo Scan application.",
                    "1.53.2.2. The page should include:",
                    "Bytecode input field",
                    "Decode button",
                    "1.53.2.3. If the decoding is successful, the opcode is displayed on the page. Otherwise the error message is displayed with the description of the error.",
                    "1.53.3. UI Design",
                    "Refer to: https://ftmscan.com/opcode-tool"
                ]
            ],
            [
                "1.54. Exzo Scan: Broadcast Raw Transaction",
                "1-54-exzo-scan-broadcast-raw-transaction",
                [
                    "1.54.1. Summary",
                    "As a Guest I want to broadcast raw transaction so that I could paste a Signed Raw Transaction in hex format and broadcast it over the Exzo Network",
                    "1.54.2. Acceptance criteria",
                    "1.54.2.1. A user should be able to send a transaction via Broadcast Raw Transaction page that should be accessible from the main menu of Exzo Scan application.",
                    "1.54.2.2. The page should include:",
                    "Transaction hex input field",
                    "Send Transaction button",
                    "1.54.2.3. If the sending is successful, the txn hash is displayed on the page. Otherwise the error message is displayed with the description of the error.",
                    "1.54.3. UI Design",
                    "Refer to: https://ftmscan.com/pushTx"
                ]
            ],
            [
                "1.55. Exzo Scan: Registration",
                "1-55-exzo-scan-registration",
                [
                    "1.55.1. Summary",
                    "As a User I want to register an account so that I could get access to the additional functionality of Exzo Scan app",
                    "1.55.2. Acceptance criteria",
                    "1.55.2.1. A user should be able to create an account with Exzo Scan application.",
                    "1.55.2.2. Registration form should be opened from the login screen by clicking the Sign Up link.",
                    "1.55.2.3. Registration form should include:",
                    "Username input field (should be unique)",
                    "Email address input field (should be unique)",
                    "Password input field",
                    "Confirm Password input field (should match Password)",
                    "Agree to the TnC check-box",
                    "Opt-in for a newsletter check-box",
                    "Captcha widget",
                    "Create an Account button",
                    "1.55.2.4. Once a user submits the registration form, the email with an activation link is sent to the registered email address.",
                    "1.55.2.5. Once a user activates their account by clicking the activation link, they can login to their profile on Exzo Scan application.",
                    "1.55.3. UI Design",
                    "Refer to: https://ftmscan.com/register"
                ]
            ],
            [
                "1.56. Exzo Scan: Authentication",
                "1-56-exzo-scan-authentication",
                [
                    "1.56.1. Summary",
                    "As a User I want to pass an authentication so that I could log into my personal profile on Exzo Scan app",
                    "1.56.2. Acceptance criteria",
                    "1.56.2.1. A user should be able to login to their profile on Exzo Scan application by clicking on the Sign In button at the main menu.",
                    "1.56.2.2. Login page should include:",
                    "Username input field",
                    "Password input field",
                    "1.56.2.3. A user should be able to recover their password with Forgot password functionality.",
                    "1.56.2.4. Once a user is successfully logged in, they should be able to navigate to their profile page.",
                    "1.56.2.5. A logged in user should be able to terminate their session by clicking the Sign Out button from the main menu.",
                    "1.56.3. UI Design",
                    "Refer to: https://ftmscan.com/login"
                ]
            ],
            [
                "1.57. Exzo Scan: User profile",
                "1-57-exzo-scan-user-profile",
                [
                    "1.57.1. Summary",
                    "As a User I want to manage user profile so that I could use features available for registered users only",
                    "1.57.2. Acceptance criteria",
                    "1.57.2.1. A registered and logged in user should be able to open their profile page from the main menu.",
                    "1.57.2.2. On the profile page a user should be able to:",
                    "View and change profile details (email address, password, username, profile picture, profile bio, website link)",
                    "Manage watchlist (add address, set events notifications)",
                    "Manage transaction private notes",
                    "Manage address private notes",
                    "Manage token ignore list",
                    "Manage API keys",
                    "Manage verified addresses",
                    "Manage custom ABIs",
                    "1.57.3. UI Design",
                    "Refer to: https://ftmscan.com/myaccount"
                ]
            ],
            [
                "1.1. Purpose",
                "1-1-purpose",
                [
                    "The document defines the understanding of the general objectives for the creation of the project “Exzo Network - innovative blockchain platform - (hereinafter - the software product, System, Platform, “Exzo Network”). The document sets out the main requirements for the software product, defines the scope of this product, the purpose of implementation, restrictions and strategic decisions on project implementation, agreed between the Customer and the Developer. The Software Requirement Specification document is the basis for the software product development process."
                ]
            ],
            [
                "1.2. Scope",
                "1-2-scope",
                [
                    "This document was created and should be used within the “ExzoCoin” project.",
                    "All persons mentioned in this document, to some extent, participate in the project or are interested in its implementation.",
                    "This document should indicate only the main functions and features of the product, and only those that have been agreed upon by all stakeholders. Functions and features that do not have the status of accepted but are only developments for the future - can not be included in this document without the appropriate designations."
                ]
            ],
            [
                "1.3. Definitions and Acronyms",
                "1-3-definitions-and-acronyms",
                [
                    "SRS - Software Requirements Specification - this document.",
                    "UI - User Interface.",
                    "AWS - Amazon Web Services cloud environment."
                ]
            ],
            [
                "1.4. Overall Description",
                "1-4-overall-description",
                [
                    "“ExzoCoin” project includes two main components:",
                    "1.4.1. A web-based application that will provide a platform for decentralized cross-chain conversion of digital assets based on 1INCH API.",
                    "This application will have the similar design and functionality as the 1INCH app (https://app.1inch.io/).",
                    "The process of interacting with the application could be described in the following simplified steps:",
                    "Navigate to the swap application from ExzoCoin website",
                    "Connect wallet with Metamask or WalletConnect",
                    "Buy cryptocurrency via MoonPay",
                    "Use bridges to move coins cross-chain",
                    "Select the chain",
                    "Set the direction of exchange",
                    "View the details of the deal (rate, fees)",
                    "Set additional parameters (gas limit, slippage)",
                    "Confirm the deal",
                    "1.4.2. A blockchain network based on Fantom blockchain fork that will provide an ecosystem for creating customized blockchains, deploying smart contracts, with full support of Solidity smart contracts.",
                    "This solution will allow users to perform the following use cases:",
                    "Use Exzo Network official wallet",
                    "Use Exzo Network native coin ExzoCoin",
                    "Connect with Metamask to the testnet and mainnet",
                    "Run a validator node",
                    "Run a read-only node",
                    "Stake native ExzoCoin and get a reward",
                    "Deploy a smart contract written in Solidity",
                    "Create a fixed-cap asset",
                    "Create a variable-cap asset",
                    "Create a local test network",
                    "Explore the network for transactions and other on-chain data"
                ]
            ],
            [
                "1.5. ExzoSwap High-Level Solution Architecture",
                "1-5-exzo-swap-high-level-solution-architecture",
                [
                    "1.5.1. ExzoSwap FE App is a standalone React application. This application is built into several js and CSS files and is meant to be served from the s3 bucket using cloud front.",
                    "1.5.2. ExzoSwap App is integrated with 1INCH API through a secured VPN connection.",
                    "1.5.3. A user interacts with ExzoSwap App from their web browser using Metamask extension (or Wallet Connect integration) for making transactions."
                ]
            ],
            [
                "1.6. Exzo Network High-Level Solution Architecture",
                "1-6-exzo-network-high-level-solution-architecture",
                [
                    "1.6.1. A Validator node consists of three components: state machine, consensus and networking.",
                    "1.6.2. An application can communicate to a node via CLI. Opera network supports auditing by permitting participants to join in post-validation mode.",
                    "1.6.3. An observer (or Monitor) node consists of a state machine, post validation component and networking component.",
                    "1.6.4. The network supports three types of participants: users, validators and monitors.",
                    "1.6.5. Each validating node can create new event blocks. Generation of a new event block indicates that the new block and all of its ancestors have been validated by the creator node of that new event block.",
                    "1.6.6. The consensus mechanism is inherited from the Fantom’s Opera Network and described in the Lachesis Whitepaper (https://arxiv.org/pdf/2108.01900.pdf)"
                ]
            ],
            [
                "1. The List of User Stories",
                "1-the-list-of-user-stories",
                [
                    "No",
                    "Epic",
                    "Role",
                    "Feature",
                    "1",
                    "ExzoSwap",
                    "Guest",
                    "View the main page",
                    "2",
                    "ExzoSwap",
                    "User",
                    "Connect a wallet",
                    "3",
                    "ExzoSwap",
                    "User",
                    "Buy cryptocurrency with credit card",
                    "4",
                    "ExzoSwap",
                    "User",
                    "Transfer coins via bridges",
                    "5",
                    "ExzoSwap",
                    "User",
                    "Select the chain for swap",
                    "6",
                    "ExzoSwap",
                    "User",
                    "Set the swap parameters",
                    "7",
                    "ExzoSwap",
                    "User",
                    "View the details of the deal (rate, fees, route)",
                    "8",
                    "ExzoSwap",
                    "User",
                    "Set additional parameters (gas limit, slippage)",
                    "9",
                    "ExzoSwap",
                    "User",
                    "Confirm the deal",
                    "10",
                    "Exzo Wallet",
                    "Guest",
                    "View the home page",
                    "11",
                    "Exzo Wallet",
                    "User",
                    "Connect Metamask",
                    "12",
                    "Exzo Wallet",
                    "User",
                    "Create a new wallet",
                    "13",
                    "Exzo Wallet",
                    "User",
                    "Restore wallet",
                    "14",
                    "Exzo Wallet",
                    "User",
                    "Edit wallet settings",
                    "15",
                    "Exzo Wallet",
                    "User",
                    "Copy wallet address",
                    "16",
                    "Exzo Wallet",
                    "User",
                    "Show QR code with wallet address",
                    "17",
                    "Exzo Wallet",
                    "User",
                    "Delete wallet",
                    "18",
                    "Exzo Wallet",
                    "User",
                    "View the history of transactions",
                    "19",
                    "Exzo Wallet",
                    "User",
                    "View the list of assets",
                    "20",
                    "Exzo Wallet",
                    "User",
                    "Send assets",
                    "21",
                    "Exzo Wallet",
                    "User",
                    "Receive assets",
                    "22",
                    "Exzo Wallet",
                    "User",
                    "Stake ExzoCoin",
                    "23",
                    "Exzo Wallet",
                    "User",
                    "Vote on governance proposals",
                    "24",
                    "Exzo Network",
                    "Validator",
                    "Run a validator node",
                    "25",
                    "Exzo Network",
                    "User",
                    "Run a read-only node",
                    "26",
                    "Exzo Network",
                    "User",
                    "Deploy a Solidity smart contract",
                    "27",
                    "Exzo Network",
                    "User",
                    "Create a fixed-cap asset",
                    "28",
                    "Exzo Network",
                    "User",
                    "Create a variable-cap asset",
                    "29",
                    "Exzo Network",
                    "User",
                    "Create a local test network",
                    "30",
                    "Exzo Scan",
                    "Guest",
                    "Main page",
                    "31",
                    "Exzo Scan",
                    "Guest",
                    "View top accounts by balance",
                    "32",
                    "Exzo Scan",
                    "Guest",
                    "View account details",
                    "33",
                    "Exzo Scan",
                    "Guest",
                    "View token holdings by account",
                    "34",
                    "Exzo Scan",
                    "Guest",
                    "View the list of confirmed transactions",
                    "35",
                    "Exzo Scan",
                    "Guest",
                    "View the list of pending transactions",
                    "36",
                    "Exzo Scan",
                    "Guest",
                    "View transaction details",
                    "37",
                    "Exzo Scan",
                    "Guest",
                    "View contract internal transactions",
                    "38",
                    "Exzo Scan",
                    "Guest",
                    "View blocks",
                    "39",
                    "Exzo Scan",
                    "Guest",
                    "View block details",
                    "40",
                    "Exzo Scan",
                    "Guest",
                    "View verified contracts",
                    "41",
                    "Exzo Scan",
                    "Guest",
                    "View contract details",
                    "42",
                    "Exzo Scan",
                    "Guest",
                    "View validators leaderboard",
                    "43",
                    "Exzo Scan",
                    "Guest",
                    "View epochs",
                    "44",
                    "Exzo Scan",
                    "Guest",
                    "View epoch details",
                    "45",
                    "Exzo Scan",
                    "Guest",
                    "View ERC-20 top tokens",
                    "46",
                    "Exzo Scan",
                    "Guest",
                    "View ERC-20 token transfers",
                    "47",
                    "Exzo Scan",
                    "Guest",
                    "View ERC-721 top tokens",
                    "48",
                    "Exzo Scan",
                    "Guest",
                    "View ERC-721 token transfers",
                    "49",
                    "Exzo Scan",
                    "Guest",
                    "View charts and stats",
                    "50",
                    "Exzo Scan",
                    "Guest",
                    "View top statistics",
                    "51",
                    "Exzo Scan",
                    "Guest",
                    "Developer APIs",
                    "52",
                    "Exzo Scan",
                    "Guest",
                    "Verify contract",
                    "53",
                    "Exzo Scan",
                    "Guest",
                    "Bytecode to Opcode Disassemble",
                    "54",
                    "Exzo Scan",
                    "Guest",
                    "Broadcast Raw Transaction",
                    "55",
                    "Exzo Scan",
                    "User",
                    "Register an account",
                    "56",
                    "Exzo Scan",
                    "User",
                    "Pass an authentication",
                    "57",
                    "Exzo Scan",
                    "User",
                    "Manage user profile"
                ]
            ]
        ]
    },
    {
        "url": "/solidity_tutorials",
        "sections": [
            [
                "Solidity Tutorials ",
                null,
                [
                    "An ERC-721 token is a type of non-fungible token (NFT) on the Ethereum blockchain, defined by the Ethereum Request for Comments 721 (ERC-721) standard."
                ]
            ],
            [
                "Background",
                "background",
                [
                    "An ERC-721 token is a type of non-fungible token (NFT) on the Ethereum blockchain, defined by the Ethereum Request for Comments 721 (ERC-721) standard. It represents unique digital assets, such as digital art, virtual real estate, collectibles, and digital goods. The standard defines a set of rules and interfaces for managing and transferring NFTs on the Ethereum network.",
                    "Unlike ERC-20 tokens, which are fungible and interchangeable, ERC-721 tokens are non-fungible, meaning each token has a unique value and is not interchangeable with other tokens. Each ERC-721 token has a unique identifier (Token ID) and can be associated with specific metadata, such as descriptions, images, or other information related to the digital asset.",
                    "The ERC-721 standard includes functions for:",
                    "Token ownership management: These functions allow users to check the ownership of a token, transfer ownership, and approve others to transfer the token on their behalf.",
                    "Token metadata management: These functions help manage metadata associated with each token, such as token URI, which can be used to store information about the digital asset.",
                    "Enumeration: These functions enable enumeration of owned tokens, providing a way to count and list tokens owned by a specific address.",
                    "By implementing the ERC-721 standard, developers can create NFTs with unique properties and ensure compatibility with various wallets, marketplaces, and platforms that support this standard.",
                    "Creating an ERC-721 NFT Smart Contract involves several steps. Here's a detailed guide to help you create one using Solidity and the Ethereum network:"
                ]
            ],
            [
                "Set up your environment",
                "set-up-your-environment",
                [
                    "To begin, you will need the following tools:",
                    "Node.js (v8.9.4 or later)",
                    "Truffle (v5.x.x)",
                    "Ganache (for local blockchain deployment)",
                    "A text editor or IDE (e.g., Visual Studio Code)",
                    "To install Truffle, use the following command:"
                ]
            ],
            [
                "Create a new Truffle project",
                "create-a-new-truffle-project",
                [
                    "In your terminal, navigate to the directory where you want to create the project and run:",
                    "This command will generate a new Truffle project with basic files and folders."
                ]
            ],
            [
                "Install OpenZeppelin Contracts library",
                "install-open-zeppelin-contracts-library",
                [
                    "ERC-721 is based on the OpenZeppelin Contracts library, which offers a secure and well-tested implementation of the standard.",
                    "Install the library by running:"
                ]
            ],
            [
                "Create an ERC-721 smart contract",
                "create-an-erc-721-smart-contract",
                [
                    "In your Truffle project, navigate to the contracts folder and create a new file called MyNFT.sol.",
                    "Add the following code:",
                    "This code imports the necessary libraries and creates a basic ERC-721 NFT smart contract called MyNFT. The mintNFT function allows you to mint new NFTs and assign a tokenURI for metadata."
                ]
            ],
            [
                "Deploy the smart contract",
                "deploy-the-smart-contract",
                [
                    "Create a new file in the migrations folder named 2_deploy_contract.js and add the following code:",
                    "This code tells Truffle how to deploy the smart contract to the Ethereum network."
                ]
            ],
            [
                "Compile and deploy the contract",
                "compile-and-deploy-the-contract",
                [
                    "Start Ganache and make sure you have a local blockchain running. In your terminal, compile the contract using:",
                    "Once compiled, deploy the contract to the local blockchain with:"
                ]
            ],
            [
                "Interact with the smart contract",
                "interact-with-the-smart-contract",
                [
                    "You can interact with the smart contract using Truffle console, web3.js, or other tools like the Exzo Wallet Chrome extension and Remix IDE.",
                    "To use the Truffle console, run:",
                    "Inside the console, you can mint an NFT:",
                    'Replace "0xYourAddress" with the recipient\'s Ethereum address and "https://your-token-uri.com/" with the actual token URI.',
                    "You can utilize Pinata to upload the images of your NFT and their metadata, which is in JSON format.",
                    "To learn more about the recommended metadaa structure you can vieew the OpenSea metadata guidelines here.",
                    "Below is an example of a metadata JSON file structure",
                    "Now you have a basic understanding of creating an ERC-721 NFT smart contract using Solidity, Truffle, and the OpenZeppelin Contracts library. You can expand the functionality by adding more features such as royalty payments, access.",
                    "Make sure to always get your code audited before deploying it live. A good resource for quick auditing is SolidityScan.",
                    "This tutorial is for informational purposes only. We did not have the code audited and do not take ownership of any of the code associated with this tutorial.",
                    "Exzo Network utilizes the Ethereum Virtual Machine (EVM) in the backend. Smart contracts are written in Solidity and they can function on the Exzo Network as they do on Ethereum.",
                    "To deploy a smart contract, you send a Exzo Network transaction containing your bytecode without specifying any recipients.",
                    "After the contract is deployed, it will be available to all users of the Exzo Network. Smart contracts have a Fantom address like other accounts."
                ]
            ],
            [
                "Requirements",
                "requirements",
                [
                    "Bytecode (compiled code) of your smart contract",
                    "Exzo (XZO) for gas costs",
                    "Deployment script/plugin",
                    "Access to a Exzo Network node, either by running your own node or API access to a node."
                ]
            ],
            [
                "Tools",
                "tools",
                [
                    "Bytecode (compiled code) of your smart contract",
                    "Access to a Exzo Network node, either by running your own node or API access to a node.",
                    "Truffle: Development environment, testing framework and asset pipeline for blockchains using the EVM",
                    "Remix: IDE that’s used to write, compile, debug & deploy Solidity code ll in your browser.",
                    "Solidity: Solidity is an object-oriented, high-level language for implementing smart contracts.",
                    "OpenZeppelin: OpenZeppelin Contracts helps you minimize risk by using battle-tested libraries of smart contracts for Ethereum and other blockchains.",
                    "This is a tutorial on how to deploy an ERC-20 token smart contract on the Exzo Network using the Solidity programming language.",
                    "One of the most significant smart contract standards on Exzo Network is known as ERC-20, which has emerged as the technical standard used for all smart contracts on the Ethereum blockchain for fungible token implementations.",
                    "ERC-20 defines a common list of rules that all fungible Exzo Network tokens should adhere to. Consequently, this token standard empowers developers of all types to accurately predict how new tokens will function within the larger Exzo Network system. This simplifies and eases developers’ tasks, because they can proceed with their work, knowing that each and every new project won’t need to be redone every time a new token is released, as long as the token follows the rules.",
                    "Here is a line-by-line explainer of what every function is for. After this we’ll present a simple implementation of the ERC-20 token."
                ]
            ],
            [
                "Getters",
                "getters",
                [
                    "The ERC-20 standard allows an address to give an allowance to another address to be able to retrieve tokens from it. This getter returns the remaining number of tokens that the spender will be allowed to spend on behalf of owner. This function is a getter and does not modify the state of the contract and should return 0 by default"
                ]
            ],
            [
                "FUNCTIONS",
                "functions",
                [
                    "Moves the amount of tokens from the function caller address (msg.sender) to the recipient address. This function emits the Transfer event defined later. It returns true if the transfer was possible.",
                    "Set the amount of allowance the spender is allowed to transfer from the function caller (msg.sender) balance. This function emits the Approval event. The function returns whether the allowance was successfully set.",
                    "Moves the amount of tokens from sender to recipient using the allowance mechanism. amount is then deducted from the caller’s allowance. This function emits the Transfer event."
                ]
            ],
            [
                "EVENTS",
                "events",
                [
                    "This event is emitted when the amount of tokens (value) is sent from the from address to the to address.",
                    "In the case of minting new tokens, the transfer is usually from the 0x00..0000 address while in the case of burning tokens the transfer is to 0x00..0000.",
                    "This event is emitted when the amount of tokens (value) is approved by the owner to be used by the spender."
                ]
            ],
            [
                "A BASIC IMPLEMENTATION OF ERC-20 TOKENS",
                "a-basic-implementation-of-erc-20-tokens",
                [
                    "Here is the most simple code to base your ERC-20 token from:",
                    "Non-Fungible Tokens (NFTs) have captured the imagination of the Web3 community. While the most powerful NFT use cases might still be to come, this technology is already transforming digital ownership, identity, creative expression, and community membership.",
                    "Because NFTs are digital assets that can be bought, sold, or traded, NFT marketplaces play an important role in holding inventory and connecting buyers and sellers.",
                    "In this blog, we are going to build the “backend” of an NFT marketplace using Solidity. We’ll go through the process for building the smart contracts that hold the business logic for our NFT marketplace step-by-step. In practice, this means creating a single NftMarketplace.sol smart contract and a sample ERC721-compliant token (NFT) contract which we can use to list on our marketplace.",
                    "This blog is intended for those with some coding experience. If you’re comfortable with basic JavaScript, you will be able to follow along. It would also help to have some familiarity with common Ethereum terminology, which you can brush up on by taking a look through this glossary.",
                    "The marketplace will have the following basic operations:",
                    "List the NFT.",
                    "Update and cancel the listing.",
                    "Buy the NFT (transfer ownership).",
                    "Get a listing.",
                    "Get a seller’s proceeds.",
                    "These operations will be implemented on the marketplace smart contract. It’s recommended that you take a moment to understand the above operations because the coding logic for them naturally comes from analyzing the inputs and outputs for each.",
                    "For example, what data do we need to list an NFT on the marketplace? We would need the token ID for sure. Since this is a marketplace that can list multiple unrelated NFTs, we would also need the contract address for each “family” of NFTs. Additionally, since we are listing NFTs for sale, we need to be able to add the price of each token as well.",
                    "We will go deeper into defining our function signatures shortly, but first let’s get our project and environment set up.",
                    "If you’d like to see the reference repo for this project, you can find it here. It goes more in-depth than what we will cover here, so it’s useful if you want to dive deeper into this project."
                ]
            ],
            [
                "Project Setup",
                "project-setup",
                [
                    "We will use yarn, so run npm install -g yarn on your machine to install it globally. You’ll also need to make sure you have nodeJS runtime on your machine too, so check you have it installed by running node –version.",
                    "We are going to use the Hardhat Ethereum development environment to compile, deploy, test, and interact with our smart contracts, so take a moment to read through the Hardhat Getting Started guide.",
                    "We will refer to your project directory in paths as <<root>>, so open up the terminal app and cd into your root directory, then open up your IDE (you can use any IDE you’re comfortable with that supports Javascript). Create a package.json file in your project directory and paste the content from here. You’ll see that it contains the NPM dependency packages, including those referred in Hardhat’s Getting Started guide. Then run yarn install to install all the project dependencies. When the installation is complete you should see a node_modules folder inside your project root. This contains all your dependencies, including Hardhat.",
                    "In this tutorial we will develop on Hardhat’s local blockchain network, which means we aren’t interacting with testnets or the Ethereum mainnet. When you’re ready to test on a testnet like Rinkeby, follow these steps from the repo’s README.",
                    "In your project root, run /<<root>> yarn hardhat to initialize Hardhat and select option 4: “Create an empty hardhat.config.js”.",
                    "Creating empty Hardhat config ",
                    "Once the Hardhat initialization is done, you will have an empty hardhat.config.js file in your project root. Now you have a choice: you can paste this content into that file if you plan to deploy on a live testnet, because you’ll need the various constants declared in there that specify configuration details for different testnet and mainnet networks. Note that to access testnet or mainnet nodes, you will need to use an Ethereum node access provider such as Infura, Alchemy, or Moralis. We don’t need them for this blog, but they are necessary when you decide to test on external testnets or deploy to production on mainnet.",
                    "Or, if you just want to follow along with this blog, you can copy and paste the config code snippet below. We will refer to this file as “Hardhat Config” going forward, and for this tutorial the important part is the exported object (module.exports = {defaultNetwork: {...} } ). This is the object that holds our project configuration, which defines our default, hardhat, and localhost networks.",
                    "For the purposes of this following along with this blog, your exported configuration object can look like this minimal config, so you can replace the exported object in that linked file with this:",
                    "Our project will have the following folders:",
                    "A contracts folder. This holds our NFT marketplace logic and also the sample NFT contract.",
                    "A deploy folder. This is used with the hardhat-deploy plugin and houses our deployment scripts, which will deploy compiled smart contracts to the Hardhat-provided local development blockchains.",
                    "A scripts folder. This holds the scripts that we use to interact with the deployed contracts locally on our Hardhat development blockchain.",
                    "Let’s get started building our marketplace."
                ]
            ],
            [
                "Building the NFT Marketplace",
                "building-the-nft-marketplace",
                [
                    "In your project root, create a new contracts folder. Inside that folder, create the NftMarketplace.sol file (your file path will look like ../<< root >>/contracts/NftMarketplace.sol).",
                    "Now let’s consider the method signatures we need in the NftMarketplace smart contract for the various operations we discussed above. They’re going to look like this:",
                    "While this looks simple enough, putting together the smart contract requires a lot of careful thinking, checking, and overcoming constraints. So let’s go deeper. We also want to protect against re-entrancy attacks that exploit the way Ethereum smart contracts work to run repeated and undesirable execution of code—often code that transfers token ownership. A good smart contract developer must be familiar with these potential vulnerabilities.",
                    "In implementing the marketplace’s logic, we will use the following fields and data structures:",
                    "A Listing struct with price and seller property variables.",
                    "Three events—ItemListed, ItemCanceled and ItemBought.",
                    "Two mappings—s_listings and s_proceeds, which are the state variables stored on the blockchain.",
                    "Three function modifiers.",
                    "Don’t worry—you’ll understand each of these pieces as we continue to build our smart contract.",
                    "Let’s start by declaring the smart contract.",
                    "You’ll see that we are importing two files from OpenZeppelin, which provides open-source, audited, and secure smart contract templates that can be reused. Our smart contract inherits from its ReentrancyGuard smart contract (see it on Github), which provides very valuable protections, modifiers, and methods that we can use. We must also import the IERC721.sol file, an interface that we will be using shortly. However, our marketplace smart contract does not implement the ERC721 token standard because it is not the token contract.",
                    "Implementing listItem()",
                    "Let’s start with the listItem() method, the signature of which you’re already familiar with. We’ll make it an external function because it needs to be called by other contracts or by end user accounts (from the frontend web application, for example). We also want listItem() to do the following:",
                    "Ensure that the item being listed is not already listed. We do this with a Solidity function modifier.",
                    "Ensure that the person listing the item (i.e. calling this method) is the owner.",
                    "Ensure that the token’s contract has “approved” our NFT marketplace to operate the token (to transfer it, etc.).",
                    "Check that the price is greater than zero wei.",
                    "Emit a listing event.",
                    "Store the listing details in the smart contract’s state (i.e. the marketplace application’s state).",
                    "Now let’s write this method inside the marketplace contract.",
                    "Function Modifiers, Events, and State Variables",
                    "Now let’s implement the function modifiers, events, and application state variables that hold data. Look carefully at the comments below to know where to place these pieces, or refer to the reference Github repo.",
                    "You’ll see that :",
                    "The Listing struct holds only two pieces of information—the seller’s Ethereum account address and the listing price for the seller’s token.",
                    "The state variable s_listings is a mapping of NFT contract addresses to token IDs that themselves point to Listing data structs. So each listen token ID points to data that identifies the seller of that token and the price of that token.",
                    "The state variable s_proceeds is a mapping between a seller’s address and the amount they’ve earned in sales.",
                    "The ItemListed event contains useful information—the seller’s account address, token ID, token contract address, and the listed item’s price.",
                    "We also add two function modifiers. notListed checks that the token ID is not currently listed (we don’t want to go through the compute operations of listing something that is already contained in s_listings). If there is such a listing, it reverts the transaction with an AlreadyListed error. We will implement these errors in a moment. notListed also takes in details about the token and then checks to see whether that listing has a non-zero price (if you remember, our listItem() method requires that the price must be higher than zero. It will revert with a PriceMustBeAboveZero() error if the condition is not met).",
                    "The second modifier is the isOwner() modifier, which checks whether the entity that calls listItem() actually owns that item. If not, the call to listItem() reverts with the notOwner() error.",
                    "Custom Errors",
                    "So let’s talk about these errors. They’re Solidity custom errors and we haven’t implemented them yet. They are actually declared outside the main body of the smart contract. Let’s declare a bunch of them now because we’re going to use them in the marketplace functions shortly. Note that we are declaring them after the import statements but before our smart contract declaration.",
                    "Also note how custom errors may or may not take arguments. Arguments, if passed, contain useful data about the error.",
                    "You’ll see that our first method, the listItem() method, uses three of these custom errors:",
                    "The NotOwner() error (via the isOwner() modifier).",
                    "The PriceMustBeAboveZero() error.",
                    "The NotApprovedForMarketplace() error.",
                    "These errors get “thrown”, which in Solidity means that the execution of the surrounding function is “reverted” when certain checks and conditions fail.",
                    "Implementing cancelListing()",
                    "If a token owner wants to de-list their token, it’s really a question of no longer holding that Listing in the application state. This means we must delete the corresponding entry from the s_listings state mapping. So we write the following method in after listItem().",
                    "This is an externally callable method, and it takes both the token’s contract address and the token ID as parameters. It uses two function modifiers to check that the caller is the owner and that the token is listed (worth checking, since we are trying to de-list an item!). We delete the listing and then we emit an event.",
                    "We have not implemented the isOwner modifier yet—we’ve only done the opposite check, isNotOwner! So back in the modifiers section of your code, insert the following modifier:",
                    "If you study this, you’ll see it’s the opposite logic to isNotListed. This modifier reverts if the item is not listed, whereas isNotListed reverts if the item is listed. If that’s confusing, remember what the modifier is called—it refers to the desired condition that is being checked.",
                    "Now we need to also write the ItemCanceled event, which gets emitted in the cancelListing() method. But we’re going to need a bunch of events for the other methods anyway, so we might as well implement them all now and get them out of the way.",
                    "The Other Events",
                    "If we look at our list of operations and their function signatures, we know that we need to write ItemCanceled and ItemBought events next.",
                    "So, under our ItemListed event we insert:",
                    "You’ll see that the only real difference is that one refers to the seller and the other refers to the buyer—simple enough.",
                    "Now let’s implement the rest of our marketplace operations.",
                    "Implementing BuyItem()",
                    "This method is the heart of the marketplace. It deals directly with payment—meaning the actual exchange of an NFT for some sort of digital asset. In this case, we are going to have our marketplace accept payments in ether (denominated in wei). This is also where we need the re-entrancy guard we discussed earlier to prevent a malicious account from draining all the tokens.",
                    "Given all this, we need to ensure the following:",
                    "The BuyItem() is externally callable, accepts payments, and protects against re-entrancy.",
                    "The payment received is not less than the listing’s price.",
                    "The payment received is added to the seller’s proceeds.",
                    "The listing is deleted after the exchange of value.",
                    "The token is actually transferred to the buyer.",
                    "The right event is emitted.",
                    "Note that we make an important assumption here that the seller has not de-approved the marketplace as the operator of the token. Remember that we did the approval check in the ListItem() method, but between listing the sale, the seller may have changed the approvals.",
                    "So, with all the above in mind, here’s what this method looks like:",
                    "In the above snippet, it’s important to note that we update the seller’s balance in s_proceeds. This stores the total ether the seller has received for selling their NFTs. We then call on the listed token’s contract to transfer ownership of the token to the buyer (msg.sender is the buyer calling this method). But we do not send the seller their proceeds. This is because we have a withdrawProceeds method later. This pattern “pulls” rather than “pushes” the proceeds; the principle behind the design is covered in this article. In a nutshell, having the seller actively withdraw the funds is a safer operation than having our marketplace contract push it to them, as pushing it may cause execution failures that our contract cannot control. It is better to delegate the power, choice, and responsibility of transferring sales proceeds to the seller, with our contract solely responsible for storing the sale proceeds’ balance.",
                    "Implementing updateListing()",
                    "This method allows a seller to update the price in their listing. This is simply a question of:",
                    "Checking that the item is already listed and the caller owns the token.",
                    "Checking that the new price is not zero.",
                    "Guarding against re-entrancy.",
                    "Updating the s_listing state mapping so that the correct Listing data object now refers to the updated price.",
                    "Emitting the right event.",
                    "Let’s do it!",
                    "Implementing withdrawProceeds()",
                    "Since we’re using the pull method as discussed when we implemented BuyItem(), withdrawing proceeds means simply sending the caller of the method whatever their balance in the s_proceeds state variable is. If a caller does not have any proceeds, we revert with a NoProceeds() custom error. This works if we trust that our code updates the s_proceeds state variable correctly, which, in our simple marketplace, it does. Importantly, we need to update the seller’s proceeds balance to zero.",
                    "In the above method, there is an unusual-looking statement:",
                    'payable(msg.sender).call{value: proceeds}(""); . This is how newer versions of Solidity send value to caller addresses. Value here refers to the amount of ether being sent, and the odd-looking (“”) is basically saying that the Solidity call() function is being called with no arguments, signified by the empty string being passed in. You can read more about this syntax here.',
                    "The .call() function returns two values, a boolean denoting success or not, and the data bytes—which we don’t use and hence don’t assign to any variable.",
                    "If success is false the entire method call reverts (is treated as an exception) by operation of the require() statement.",
                    "Implementing Utility Getter Methods",
                    "Now we’re almost done with our NFT marketplace! We just need to add two more utility methods. One utility method will help us retrieve the Listing object associated with a specific token ID so we can find out who the seller is and how much the token is listed for. The second utility function helps us retrieve how much a seller has earned (i.e. their sales proceeds). Note that these two methods are “getter” functions for specific values in our state variables.",
                    "With this, our NFT marketplace is complete! Now what we need to do is write some scripts to deploy to our Hardhat local blockchain and then run some scripts to list tokens.",
                    "Before we go on, let’s do a quick compile check. In your terminal, from inside your project root directory, run yarn hardhat compile. If this works, then you’re golden. If it doesn’t, please check the error message and retrace your steps. Debugging is a critical part of the development process!",
                    "Sample NFT Smart Contract",
                    "But before we move on to the scripts, we need a sample NFT smart contract so that we can mint tokens and list them on our marketplace. We’ll conform to the ERC721 token spec so we can inherit from OpenZeppelin’s ERC721 library. In the reference repo there are two sample NFT contracts in <<root>>/contracts/test. They don’t have to be inside a test folder, but they do have to be somewhere under the contracts folder.",
                    "So let’s make our BasicNft.sol, which points to a cute dog picture on IPFS that will function as our token’s artwork. The NFT contract is fairly simple.",
                    "Note that tokenURI() and getTokenCounter() are getters for state variables. The real logic here is in the mintNft() method, where we utilize the OpenZeppelin ERC721 base contract that we are inheriting from. mintNft() mints the token and registers the msg.sender (i.e. the function’s caller) as the owner of the NFT with the token ID passed in the second argument. We are using the s_tokenCounter state variable to track how many tokens are minted and also the token IDs. So we need to increment the counter after we emit the DogMinted event.",
                    "You can copy the second sample NFT contract, called BasicNftTwo.sol, from here if you want to have more than one type of NFT on your marketplace (the code in this blog refers to both, but it’s optional). You’ll see it’s pretty much the same as the BasicNft.sol, but the TOKEN_URI state variable points to a different IPFS file (a different species of dog!). Note that both contracts go into <<root>>/contracts/test.",
                    "Run yarn hardhat compile again to make sure everything is compiling as intended, and be sure to check that your NFT marketplace contract and your NFT contracts compile without errors."
                ]
            ],
            [
                "Deployment Scripts",
                "deployment-scripts",
                [
                    "Now let’s start on those deployment scripts.",
                    "The first step is understanding what a deployment script is. Deployment scripts compile Solidity into bytecode that can then be deployed onto an EVM-compatible blockchain for execution. Live smart contracts are data stored on the blockchain, and they’re stored as bytecode. The compile step also produces a JSON artifact file that contains the contract metadata, which includes a bunch of useful data such as the ABI (application binary interface)—a “schema” with which we can interact with the smart contract.",
                    "So deployment scripts are scripts that compile our smart contracts, and deploy them to a blockchain. You can take a quick read of the Hardhat docs on deploying contracts to grasp the principles, but we use a NPM package called “hardhat-deploy” which automates some of the steps for us. It also automatically runs all the scripts that we put into a deploy folder and adds a Hardhat task called deploy to the tasks registered with Hardhat so that all we need to do is run yarn hardhat deploy to run all our scripts.",
                    "So let’s start with a deploy folder at the same folder hierarchy level as contracts, like so: <<root>>/deploy.",
                    "Deploy NftMarketplace.sol",
                    "You can see the code below, but make sure your Hardhat config file (hardhat.config.js) has all the imports specified in the repo. Hardhat injects a bunch of these objects into the deploy scripts. Inside the deploy folder, create a script 01-deploy-nft-marketplace.js. We use the 01- prefix to number our scripts so they get executed by hardhat-deploy in lexicographic order.",
                    "So what’s going on here? First, we import the relevant objects and items we need. The imports from helper-hardhat-config and utils/verify will be explained in a moment.",
                    "Then we export an asynchronous function that takes an object as an argument. This argument is the HRE (Hardhat runtime environment), which is a collection of useful development tools that we need to access. The HRE is also enriched by plugins, including the hardhat-deploy plugin we discussed earlier.",
                    "This async function does the following:",
                    "Accesses utility functions to deploy contracts and log to console.",
                    "Pulls out the deployer index from the namedAccounts property in the hardhat.config.js file. This will default to index 0, which is the deployer. That is the Hardhat wallet (account) that deploys the contract (the test wallet that Hardhat gives us). This utility property is added by the hardhat-deploy package. Refer to this and this for details.",
                    "Using the deploy() function from the HRE, we deploy our smart contract to the Hardhat development chain locally, and pass in a configuration object that specifies who is deploying the contract, what arguments the contracts constructor takes, and other config data.",
                    "You’ll also see that we import and use developmentChains. This is to run conditional logic, where some of the logic in this script is run depending on whether we’re on development chains, which in this case is either the hardhat or localhost. You’ll see these networks referred to in hardhat.config.js.",
                    "In our project root directory we should create a file called helper-hardhat-config.js and export two pieces of data from it:",
                    "VERIFICATION_BLOCK_CONFIRMATIONS refers to the number of blocks that must be added to the blockchain before we assume that a transaction (including the creation of a new smart contract) is “confirmed”.",
                    "If you look at our 01 script you’ll see that for development chains we only wait for one block to confirm. We only verify our smart contract on Etherscan if we are not on a local Hardhat chain (i.e. we’re on a testnet or mainnet) and we have an Etherscan API key (you can get this on the free plan here, but we don’t need it for this blog as we’re running on a local Hardhat chain). To understand the implementation of the verify() utility, Check out Hardhat’s documentation.",
                    "Though we don’t need to verify on the local network, I’ll still leave it in the scripts so you get a hang of it. So we import a verify() utility function, and we need to create it in order for our code to compile. We create <<root>>/utils folder and put verify.js in it. You can copy the code from here.",
                    "So really, the core focus of this script is to deploy our NftMarketplace.sol smart contract to the local Hardhat development network. If you run yarn hardhat you should see that the deploy task is listed. If not, you need to check that your hardhat.config.js file and your deploy folder are as specified in this blog and the reference repo.",
                    "The “deploy” task correctly showing in the terminal. ",
                    "Then simply run the task with yarn hardhat deploy. If you get an “Unrecognized task deploy” error, that means the configuration for hardhat-deploy is not correct—the deploy task will not show up in the list of available tasks as shown above.",
                    "But if everything is working as intended, then this should produce a message that says you’ve compiled and deployed the marketplace contract alongside a transaction hash and the Ethereum address of the deployed smart contract.",
                    "NftMarketplace.sol successfully deployed. ",
                    "In case you’re wondering why it says 14 Solidity files were compiled, that’s because the Open Zeppelin libraries we depend on also need to be compiled!",
                    "Deploy the NFT Contract(s)",
                    "Next, we create the script 02-deploy-basic-nft.js, which deploys the NFTs to our local development chain. You’ll notice that it looks quite familiar because both the function signature logic are the same as the NFT marketplace contract. The key difference is that we are deploying the sample NFT contracts and not the NFT marketplace contract, as the script name indicates.",
                    "Now that you’re getting the hang of it, you know what to do next: We need to run yarn hardhat deploy to make sure that all our contracts deploy.",
                    "Successfully run the “deploy” task to compile and deploy all smart contracts. ",
                    "When checking the reference repo, you’ll see that there is a third script in <<root>>/deploy.  We don’t need this right now. This script is used to copy over the ABI JSON files (after the compile step these JSON files show up in <<root>>/artifacts/contracts/…) into a separate directory that houses the repo for the frontend web app that presents a UI where we can begin interacting with our smart contracts. That’s out of the scope of this blog, so we don’t need to create this third script. Your deploy folder should only contain the two scripts we’ve covered in this blog."
                ]
            ],
            [
                "A Standalone RPC Network",
                "a-standalone-rpc-network",
                [
                    "Before we discuss interaction scripts, let’s recap. We have written two NFT contracts and an NFT marketplace smart contract, and we’ve used deploy scripts to deploy the contracts to our local Hardhat development chain. But how do we interact with these smart contracts and check that our marketplace smart contract correctly runs the operations we discussed at the start of this blog?",
                    "This is where interaction scripts come in. Interaction scripts are similar to our deploy scripts in that they are written in JavaScript, but their purpose is to programmatically interact with our deployed smart contracts.",
                    "In order to interact with our deployed contracts, we need to work with a slightly different type of  Hardhat-provided local development chain. This time we work with the network called localhost which we specified in our hardhat.config.js file. We call this the “stand-alone network” (previously we were running the “in process” network). You can read about this in the Hardhat docs here. The Hardhat standalone network exposes a JSON RPC endpoint on the localhost IP address 127.0.0.1 on port 8545.",
                    "In your console, type yarn hardhat and take a look under the “AVAILABLE TASKS” heading.  You’ll see there is a task called node which “Starts a JSON-RPC server on top of Hardhat EVM.”  That’s the standalone localhost development chain.",
                    "Fire it up by entering yarn hardhat node. You will get multiple console outputs that are worth studying. Scrolling to the top of the output it will look something like this:",
                    "Firing up the standalone JSON-RPC local development blockchain. ",
                    "Note that the node task compiles and automatically deploys our contracts to this standalone dev chain. It also tells us that it “Started HTTP and WebSocket JSON-RPC server at http://127.0.0.1:8545/.”",
                    "Below that, it dumps out a bunch of wallet accounts and their private keys. Please read the warning here—these are development Ethereum accounts only and should never be used for actual transactions!",
                    "The benefit of having a standalone RPC endpoint is that we can connect frontend web apps to our development network and its smart contracts. We can even connect wallet apps like Metamask to it.",
                    "Now that we understand what’s going on with this standalone network, let’s kill that network with ctrl+c.  We will need to re-deploy our contracts every time we change our code anyway. We’ll also need to kill and restart this local development blockchain when our contracts get into a bad state so that we can start our NFT marketplace and token contracts with a fresh slate."
                ]
            ],
            [
                "Interaction Scripts",
                "interaction-scripts",
                [
                    "To interact with our contracts, we need to do the following:",
                    "Deploy the contracts using our deployer account (Hardhat test account with index 0).",
                    "Mint and list 3 NFTs with an “owner” account (Hardhat test account with index 1).",
                    "Buy NFT #0 with a buyer account (Hardhat test account with index 2).",
                    "Update NFT #1’s price and check the listing.",
                    "Cancel NFT #2 and check that it’s not longer listed.",
                    "Check that marketplace has correctly recorded the owner/seller’s proceeds from the sale of NFT #0 .",
                    "These steps cover the main operations of our marketplace contract. The code in this section of the blog is a bit different from the reference repo, but you can find the interaction script code for this blog in this gist with each script in its own file.",
                    "Minting and Listing Three NFTs",
                    "To interact programmatically with our deployed contracts, we’ll use the hardhat-ethers plugin. This plugin wraps around the ethers.js library, which provides useful APIs to work with EVM chains.",
                    "There are a couple of nuances to keep in mind here. You’ll recall from earlier in this blog that the owner of an NFT can approve another Ethereum address to manage and operate token-related operations such as token transfers. This means that after a user mints a token, they need to “approve” the marketplace so that the marketplace can transfer ownership when its buyItem() function gets called. You can read about ERC721’s approve() method here.",
                    "Note in the code below that the owner mints a token, then approves the marketplace to operate it on behalf of the owner, and then the owner lists it on the marketplace. To do this, first create a new <<root>>/scripts folder in your project directory. Then create a new mint-and-list-item.js file and paste in the script below.",
                    "Let’s break this down, because the same pattern will be repeated in the remaining scripts.",
                    "First note that the async mintAndList() function gets called at the bottom, and if it errors, we print the error to console and then exit with a non-zero error.",
                    "In the function body, we get a list of the twenty Hardhat accounts using getSigners() and we use JS destructuring assignment to access the first three address objects and give them variable names—deployer is the address that deployed the smart contract, owner mints and owns the NFT, and buyer1 will buy it in the next script.",
                    "We also create an IDENTITIES helper object which maps the addresses to their role. This makes debugging in the console easier.",
                    "We then access the contracts and run the mint, approve, and list operations. We can confirm if the value of mintedBy is read from the marketplace smart contract and that the address is the same as the owner. When listing, we pass in the PRICE constant, which is 0.1 ethers denominated in wei. You’ll note that we used the ethers.js utility function parseEther() for this (docs).",
                    "Now before we run the script, we need to get ready to use our standalone Hardhat RPC local testnet. We will need to have two terminal windows open to do this. In the first one, type yarn hardhat node. This will fire up the standalone RPC network we discussed previously.",
                    "In the second terminal window, type in yarn hardhat run scripts/mint-and-list-item.js --network localhost.  If you’ve done it right so far, you should see something like this:",
                    "Successfully mint and list your NFT. ",
                    "If you’re curious to see how the local RPC server is logging your transactions, switch to the first terminal window and read the output there.",
                    "That was token 0. We need to mint two more for the scripts that come later. Simply run the same mint-and-list script two more times to get up to token ID 2.",
                    "Buy a Token",
                    "From our list of scripts above, you’ll remember that next we want to get one of the accounts to buy token ID 0. The structure of this second script will be identical to mint-and-list, but we will need to change the actual logic inside the script. Create a new buy-item.js script inside your scripts folder as shown below:",
                    "This is starting to look pretty familiar! The key difference here is that we use the ethers.js  .connect(signer) method to send a transaction from another account. In this case, we want to make sure that buyer1 is the caller of the buyItem() method in the marketplace contract. Also note that we use the getListing() method to access the Listing details and retrieve the price, because that’s how much we need to pay in buyItem(). Finally, we check that the new owner of the token is actually the buyer by reading that data directly from the NFT contract’s state.",
                    "Run yarn hardhat run scripts/buy-item --network localhost and you should see something like this:",
                    "Successfully buy a listed NFT. ",
                    "Update a Token’s Price",
                    "Now that we have sold Token 0, it’s no longer listed on the marketplace. The next step is to update the price of token ID 1, which was minted and listed at the start. You’ll see the pattern repeating here, so create the update-listing script and paste the correct code from this gist. If you run yarn hardhat run scripts/update-listing --network localhost and have set the right TOKEN_ID, then you should see logs like the one below that show that the price has been updated:",
                    "Successfully update the price of a listed NFT. ",
                    "The Remaining Two Operations",
                    "All that’s left is to write two scripts—one to cancel a Listing and another to let the owner/seller know what their proceeds are from their token sale. Again, check the gists for the code and you should get logs in your console that look like the following when you run scripts/cancel-item.js:",
                    "Cancel the listing of an NFT. ",
                    "To see how much the owner of the NFTs got from the sale of their token, we run get-seller-proceeds.js, which should produce the following:",
                    "Check a seller’s proceeds stored in the marketplace smart contract. ",
                    "Note that the seller’s proceeds, stored in the marketplace contract’s s_proceeds mapping, are denominated in wei. To convert this back to a more readable ETH amount, we use the ether.js utility function .formatEther() (docs)."
                ]
            ],
            [
                "Wrapping Up",
                "wrapping-up",
                [
                    "It’s always a good idea to run automated tests on your code. This reference repo has a suite of tests that you can refer to that use Hardhat tools that leverage Mocha and Waffle utilities. The tests also check for the revert(), function modifier, and exception handling behavior that we expect. They’re incredibly useful for understanding the edge cases to look out for, so make sure to check them out.",
                    "If you want to build a frontend that interacts with the NFTMarketplace smart contract, take a look at this video from the Chainlink Spring 2022 Hackathon. Building a frontend would be a fun challenge and give you all the skills you need to sell an NFT collection on your own NFT marketplace!"
                ]
            ]
        ]
    },
    {
        "url": "/staking",
        "sections": [
            [
                "Staking ",
                null,
                []
            ],
            [
                "Staking on Exzo Network",
                "staking-on-exzo-network",
                [
                    "By staking your XZO tokens, you help secure the network and earn rewards while doing so.",
                    "You can stake by delegating your tokens to validators who process transactions and run the network.",
                    "Delegating stake is a shared-risk shared-reward financial model that may provide returns to holders of tokens delegated for a long period. This is achieved by aligning the financial incentives of the token-holders (delegators) and the validators to whom they delegate.",
                    "The more stake a validator has delegated to them, the more often this validator is chosen to write new transactions to the ledger. The more transactions the validator writes, the more rewards they and their delegators earn. Validators who configure their systems to be able to process more transactions at a time not only earn proportionally more rewards for doing so, they also keep the network running as fast and as smoothly as possible.",
                    "Validators incur costs by running and maintaining their systems, and this is passed on to delegators in the form of a fee collected as a percentage of rewards earned. This fee is known as a commission. Since validators earn more rewards the more stake is delegated to them, they may compete with one another to offer the lowest commission for their services.",
                    "You risk losing tokens when staking through a process known as slashing. Slashing involves the removal and destruction of a portion of a validator's delegated stake in response to intentional malicious behavior, such as creating invalid transactions or censoring certain types of transactions or network participants.",
                    "When a validator is slashed, all token holders who have delegated stake to that validator lose a portion of their delegation. While this means an immediate loss for the token holder, it also is a loss of future rewards for the validator due to their reduced total delegation.",
                    "Rewards and slashing align validator and token holder interests which helps keep the network secure, robust and performant.",
                    "Note: Slashing is not enabled on Mainnet at this time. "
                ]
            ],
            [
                "How do I stake my XZO tokens?",
                "how-do-i-stake-my-xzo-tokens",
                [
                    "In order to stake tokens on XZO, you first will need to transfer some XZO into a wallet that supports staking, then follow the steps or instructions provided by the wallet to create a stake account and delegate your stake. Different wallets will vary slightly in their process for this but the general description is below.",
                    "There are two options for staking in the Exzo Network system — creating your own pool and becoming a validator or Join an existing pool as a delegator.",
                    "To become a Validator user should have at least 1 mln of XZO Tokens",
                    "To become a Delegator user should have at least 1 XZO",
                    "Every 6 hours (currently) 19 nodes are chosen based on their reputation. When a node is chosen, it will generate a reward at the end of the epoch and it will be distributed between and all delegates.",
                    "Nodes and delegates generate rewards based on balance, the distribution of the reward generated in a node is 40% the for pool organizer (as a minimum), and 60% to be distributed among all the delegates based on their balance.",
                    "The process is done through a smart contract that the user can finish and withdraw their balance whenever they want, totally safe, and secure for the user.",
                    "Supported Wallets",
                    "Exzo Network command line tools can perform all stake operations in conjunction with a CLI-generated keypair file wallet and paper wallet. Staking commands using the Command Line Tools.",
                    "Create a Stake Account",
                    "A stake account is a different type of account from a wallet address that is used to simply send and receive XZO tokens to other addresses. If you have received XZO in a wallet address you control, you can use some of these tokens to create and fund a new stake account, which will have a different address than the wallet you used to create it. Depending on which wallet you are using the steps to create a stake account may vary slightly. Not all wallets support stake accounts, see Supported Wallets.",
                    "Delegate your Stake",
                    "For staking your XZO tokens use supported wallet, choose the validator and amount of XZO that will be delegated, then confirm to execute the smart contract."
                ]
            ],
            [
                "Stake Account Details",
                "stake-account-details",
                [
                    "For more information about the operations and permissions associated with a stake account, please see Stake Accounts"
                ]
            ],
            [
                "Stake Account Structure",
                "stake-account-structure",
                [
                    "A stake account on Exzo Network can be used to delegate tokens to validators on the network to potentially earn rewards for the owner of the stake account. Stake accounts are created and managed differently than a traditional wallet address, known as a system account. A system account is only able to send and receive XZO from other accounts on the network, whereas a stake account supports more complex operations needed to manage a delegation of tokens.",
                    "Stake accounts on Exzo Network also work differently than those of other Proof-of-Stake blockchain networks that you may be familiar with. This document describes the high-level structure and functions of a Exzo Network stake account.",
                    "Account Address",
                    "Each stake account has a unique address which can be used to look up the account information in the command line or in any network explorer tools. However, unlike a wallet address in which the holder of the address's keypair controls the wallet, the keypair associated with a stake account address does not necessarily have any control over the account. In fact, a keypair or private key may not even exist for a stake account's address.",
                    "The only time a stake account's address has a keypair file is when creating a stake account using the command line tools, a new keypair file is created first only to ensure that the stake account's address is new and unique.",
                    "Understanding Account Authorities",
                    "Certain types of accounts may have one or more signing authorities associated with a given account. An account authority is used to sign certain transactions for the account it controls. This is different from some other blockchain networks where the holder of the keypair associated with the account's address controls all of the account's activity.",
                    "Each stake account has two signing authorities specified by their respective address, each of which is authorized to perform certain operations on the stake account.",
                    "The stake authority is used to sign transactions for the following operations:",
                    "Delegating stake",
                    "Deactivating the stake delegation",
                    "Splitting the stake account, creating a new stake account with a portion of the funds in the first account",
                    "Merging two undelegated stake accounts into one",
                    "Setting a new stake authority",
                    "The withdraw authority signs transactions for the following:",
                    "Withdrawing un-delegated stake into a wallet address",
                    "Setting a new withdraw authority",
                    "Setting a new stake authority",
                    "The stake authority and withdraw authority are set when the stake account is created, and they can be changed to authorize a new signing address at any time. The stake and withdraw authority can be the same address or two different addresses.",
                    "The withdraw authority keypair holds more control over the account as it is needed to liquidate the tokens in the stake account, and can be used to reset the stake authority if the stake authority keypair becomes lost or compromised.",
                    "Securing the withdraw authority against loss or theft is of utmost importance when managing a stake account.",
                    "Multiple Delegations",
                    "Each stake account may only be used to delegate to one validator at a time. All of the tokens in the account are either delegated or un-delegated, or in the process of becoming delegated or un-delegated. To delegate a fraction of your tokens to a validator, or to delegate to multiple validators, you must create multiple stake accounts.",
                    "This can be accomplished by creating multiple stake accounts from a wallet address containing some tokens, or by creating a single large stake account and using the stake authority to split the account into multiple accounts with token balances of your choosing.",
                    "The same stake and withdraw authorities can be assigned to multiple stake accounts.",
                    "Merging stake accounts",
                    "Two stake accounts that have the same authorities and lockup can be merged into a single resulting stake account. A merge is possible between two stakes in the following states with no additional conditions:",
                    "two deactivated stakes",
                    "an inactive stake into an activating stake during its activation epoch",
                    "For the following cases, the voter pubkey and vote credits observed must match:",
                    "two activated stakes",
                    "two activating accounts that share an activation epoch, during the activation epoch",
                    'All other combinations of stake states will fail to merge, including all "transient" states, where a stake is activating or deactivating with a non-zero effective stake.',
                    "Delegation Warmup and Cooldown",
                    "When a stake account is delegated, or a delegation is deactivated, the operation does not take effect immediately.",
                    "A delegation or deactivation takes several epochs to complete, with a fraction of the delegation becoming active or inactive at each epoch boundary after the transaction containing the instructions has been submitted to the cluster.",
                    "There is also a limit on how much total stake can become delegated or deactivated in a single epoch, to prevent large sudden changes in stake across the network as a whole. Since warmup and cooldown are dependent on the behavior of other network participants, their exact duration is difficult to predict. Details on the warmup and cooldown timing can be found here.",
                    "Lockups",
                    "Stake accounts can have a lockup which prevents the tokens they hold from being withdrawn before a particular date or epoch has been reached. While locked up, the stake account can still be delegated, un-delegated, or split, and its stake and withdraw authorities can be changed as normal. Only withdrawal into a wallet address is not allowed.",
                    "A lockup can only be added when a stake account is first created, but it can be modified later, by the lockup authority or custodian, the address of which is also set when the account is created.",
                    "Destroying a Stake Account",
                    "Like other types of accounts on the Exzo Network network, a stake account that has a balance of 0 XZO is no longer tracked. If a stake account is not delegated and all of the tokens it contains are withdrawn to a wallet address, the account at that address is effectively destroyed, and will need to be manually re-created for the address to be used again.",
                    "Viewing Stake Accounts",
                    "Stake account details can be viewed on the Exzo Network Explorer by copying and pasting an account address into the search bar."
                ]
            ]
        ]
    },
    {
        "url": "/validating",
        "sections": [
            [
                "Validating ",
                null,
                [
                    "This section describes how run a Exzo Network validator node.",
                    "There are several clusters available to connect to, see choosing a Cluster for an overview of each."
                ]
            ],
            [
                "Hardware Requirements",
                "hardware-requirements",
                [
                    "CPU",
                    "12 cores / 24 threads, or more",
                    "2.8GHz, or faster",
                    "AVX2 instruction support (to use official release binaries, self-compile otherwise)",
                    "Support for AVX512f and/or SHA-NI instructions is helpful",
                    "The AMD Zen3 series is popular with the validator community",
                    "RAM",
                    "128GB, or more",
                    "Motherboard with 256GB capacity suggested",
                    "Disk",
                    "PCIe Gen3 x4 NVME SSD, or better",
                    "Accounts: 500GB, or larger. High TBW (Total Bytes Written)",
                    "Ledger: 1TB or larger. High TBW suggested",
                    "OS: (Optional) 500GB, or larger. SATA OK",
                    "The OS may be installed on the ledger disk, though testing has shown better performance with the ledger on its own disk",
                    "Accounts and ledger can be stored on the same disk, however due to high IOPS, this is not recommended",
                    "The Samsung 970 and 980 Pro series SSDs are popular with the validator community",
                    "GPUs",
                    "Not strictly necessary at this time",
                    "Motherboard and power supply speced to add one or more high-end GPUs in the future suggested"
                ]
            ],
            [
                "Suggested RPC Node Requirements",
                "suggested-rpc-node-requirements",
                [
                    "The above should be considered the bare minimum hardware requirements for running a RPC node as these nodes require more in-depth details, historical data and increased reliability. To provide the full functionality of an RPC node please upgrade the requirements to the recommended ones below.",
                    "CPU",
                    "16 cores / 32 threads, or more",
                    "RAM",
                    "256 GB, or more",
                    "Disk",
                    "Consider a larger ledger disk if longer transaction history is required",
                    "Accounts and ledger should not be stored on the same disk"
                ]
            ],
            [
                "Virtual Machines on Cloud Platforms",
                "virtual-machines-on-cloud-platforms",
                [
                    "While you can run a validator on a cloud computing platform, it may not be cost-efficient over the long term.",
                    "However, it may be convenient to run non-voting api nodes on VM instances for your own internal usage. This use case includes exchanges and services built on the Exzo Network.",
                    "In fact, the mainnet-beta validators operated by the team are currently (Mar. 2023) run on GCE n2-standard-32 (32 vCPUs, 128 GB memory) instances with 2048 GB SSD for operational convenience.",
                    "For other cloud platforms, select instance types with similar specs.",
                    "Also note that egress internet traffic usage may turn out to be high, especially for the case of running delegated validators."
                ]
            ],
            [
                "Docker",
                "docker",
                [
                    "Running validator for live clusters (including mainnet-beta) inside Docker is not recommended and generally not supported. This is due to concerns of general Docker's containerzation overhead and resultant performance degradation unless specially configured.",
                    "We use Docker only for development purposes."
                ]
            ],
            [
                "Software",
                "software",
                [
                    "We build and run on Ubuntu 20.04.",
                    "See Installing Exzo Network for the current Exzo Network  software release.",
                    "Be sure to ensure that the machine used is not behind a residential NAT to avoid NAT traversal issues. A cloud-hosted machine works best. Ensure that IP ports 8000 through 10000 are not blocked for Internet inbound and outbound traffic.",
                    "Prebuilt binaries are available for Linux x86_64 on CPUs supporting AVX2 (Ubuntu 20.04 recommended). MacOS or WSL users may build from source."
                ]
            ],
            [
                "GPU Requirements",
                "gpu-requirements",
                [
                    "CUDA is required to make use of the GPU on your system. The provided Exzo Network release binaries are built on Ubuntu 20.04 with CUDA Toolkit 10.1 update 1. If your machine is using a different CUDA version than you will need to rebuild from source."
                ]
            ],
            [
                "Stake Requirements",
                "stake-requirements",
                [
                    "Anyone can start a validator node, however it will not generate rewards before it's total delegated stake reaches 10,000 XZO or more."
                ]
            ],
            [
                "Configure the Exzo Network CLI",
                "configure-the-exzo-network-cli",
                [
                    "The Exzo Network cli includes get and set configuration commands to automatically set the --url argument for cli commands. For example:",
                    "While this section demonstrates how to connect to the Devnet cluster, the steps are similar for the other Exzo Network Clusters."
                ]
            ],
            [
                "Confirm The Cluster Is Reachable",
                "confirm-the-cluster-is-reachable",
                [
                    "Before attaching a validator node, sanity check that the cluster is accessible to your machine by fetching the transaction count:"
                ]
            ],
            [
                "Confirm your Installation",
                "confirm-your-installation",
                [
                    "Try running following command to join the gossip network and view all the other nodes in the cluster:"
                ]
            ],
            [
                "Enabling CUDA",
                "enabling-cuda",
                [
                    "If your machine has a GPU with CUDA installed (Linux-only currently), include the --cuda argument to exzo-network-validator.",
                    'When your validator is started look for the following log message to indicate that CUDA is enabled: "[<timestamp> solana::validator] CUDA is enabled"'
                ]
            ],
            [
                "System Tuning",
                "system-tuning",
                [
                    "Linux",
                    "Automatic",
                    "The Exzo Network repo includes a daemon to adjust system settings to optimize performance (namely by increasing the OS UDP buffer limits, and scheduling PoH with realtime policy).",
                    "The daemon (solana-sys-tuner) is included in the Exzo Network binary release. Restart it, before restarting your validator, after each software upgrade to ensure that the latest recommended settings are applied.",
                    "To run it:",
                    "Manual",
                    "If you would prefer to manage system settings on your own, you may do so with the following commands.",
                    "Increase UDP buffers",
                    "Increased memory mapped files limit",
                    "Add",
                    "to the [Service] section of your systemd service file, if you use one, otherwise add it to /etc/systemd/system.conf.",
                    "The identity public key can now be viewed by running:",
                    'Note: The "validator-keypair.json” file is also your (ed25519) private key.'
                ]
            ],
            [
                "Paper Wallet identity",
                "paper-wallet-identity",
                [
                    "You can create a paper wallet for your identity file instead of writing the keypair file to disk with:",
                    "The corresponding identity public key can now be viewed by running:",
                    "and then entering your seed phrase.",
                    "See Paper Wallet Usage for more info.",
                    "This page describes how to set up an on-chain vote account. Creating a vote account is needed if you plan to run a validator node on Velas."
                ]
            ],
            [
                "Create a Vote Account",
                "create-a-vote-account",
                [
                    "A vote account can be created with the create-vote-account command. The vote account can be configured when first created or after the validator is running. All aspects of the vote account can be changed except for the vote account address, which is fixed for the lifetime of the account.",
                    "Configure an Existing Vote Account",
                    "To change the validator identity, use vote-update-validator.",
                    "To change the vote authority, use vote-authorize-voter.",
                    "To change the withdraw authority, use vote-authorize-withdrawer.",
                    "To change the commission, use vote-update-commission."
                ]
            ],
            [
                "Vote Account Structure",
                "vote-account-structure",
                [
                    "Vote Account Address",
                    "A vote account is created at an address that is either the public key of a keypair file, or at a derived address based on a keypair file's public key and a seed string.",
                    "The address of a vote account is never needed to sign any transactions, but is just used to look up the account information.",
                    "When someone wants to delegate tokens in a stake account, the delegation command is pointed at the vote account address of the validator to whom the token-holder wants to delegate.",
                    "Validator Identity",
                    'The validator identity is a system account that is used to pay for all the vote transaction fees submitted to the vote account. Because the validator is expected to vote on most valid blocks it receives, the validator identity account is frequently (potentially multiple times per second) signing transactions and paying fees. For this reason the validator identity keypair must be stored as a "hot wallet" in a keypair file on the same system the validator process is running.',
                    'Because a hot wallet is generally less secure than an offline or "cold" wallet, the validator operator may choose to store only enough VLX on the identity account to cover voting fees for a limited amount of time, such as a few weeks or months. The validator identity account could be periodically topped off from a more secure wallet.',
                    "This practice can reduce the risk of loss of funds if the validator node's disk or file system becomes compromised or corrupted.",
                    "The validator identity is required to be provided when a vote account is created. The validator identity can also be changed after an account is created by using the vote-update-validator command.",
                    "Vote Authority",
                    "The vote authority keypair is used to sign each vote transaction the validator node wants to submit to the cluster. This doesn't necessarily have to be unique from the validator identity, as you will see later in this document. Because the vote authority, like the validator identity, is signing transactions frequently, this also must be a hot keypair on the same file system as the validator process.",
                    "The vote authority can be set to the same address as the validator identity. If the validator identity is also the vote authority, only one signature per vote transaction is needed in order to both sign the vote and pay the transaction fee. Because transaction fees on Exzo Network are assessed per-signature, having one signer instead of two will result in half the transaction fee paid compared to setting the vote authority and validator identity to two different accounts.",
                    "The vote authority can be set when the vote account is created. If it is not provided, the default behavior is to assign it the same as the validator identity. The vote authority can be changed later with the vote-authorize-voter command.",
                    "The vote authority can be changed at most once per epoch. If the authority is changed with vote-authorize-voter, this will not take effect until the beginning of the next epoch. To support a smooth transition of the vote signing, Exzo Network-validator allows the --authorized-voter argument to be specified multiple times. This allows the validator process to keep voting successfully when the network reaches an epoch boundary at which the validator's vote authority account changes.",
                    "Withdraw Authority",
                    "The withdraw authority keypair is used to withdraw funds from a vote account using the withdraw-from-vote-account command. Any network rewards a validator earns are deposited into the vote account and are only retrievable by signing with the withdraw authority keypair.",
                    "The withdraw authority is also required to sign any transaction to change a vote account's commission, and to change the validator identity on a vote account.",
                    "Because the vote account could accrue a significant balance, consider keeping the withdraw authority keypair in an offline/cold wallet, as it is not needed to sign frequent transactions.",
                    "The withdraw authority can be set at vote account creation with the --authorized-withdrawer option. If this is not provided, the validator identity will be set as the withdraw authority by default.",
                    "The withdraw authority can be changed later with the vote-authorize-withdrawer command.",
                    "Commission",
                    "Commission is the percent of network rewards earned by a validator that are deposited into the validator's vote account. The remainder of the rewards are distributed to all of the stake accounts delegated to that vote account, proportional to the active stake weight of each stake account.",
                    "For example, if a vote account has a commission of 10%, for all rewards earned by that validator in a given epoch, 10% of these rewards will be deposited into the vote account in the first block of the following epoch. The remaining 90% will be deposited into delegated stake accounts as immediately active stake.",
                    "A validator may choose to set a low commission to try to attract more stake delegations as a lower commission results in a larger percentage of rewards passed along to the delegator. As there are costs associated with setting up and operating a validator node, a validator would ideally set a high enough commission to at least cover their expenses.",
                    "Commission can be set upon vote account creation with the --commission option. If it is not provided, it will default to 100%, which will result in all rewards deposited in the vote account, and none passed on to any delegated stake accounts.",
                    "Commission can also be changed later with the vote-update-commission command.",
                    "When setting the commission, only integer values in the set [0-100] are accepted. The integer represents the number of percentage points for the commission, so creating an account with --commission 10 will set a 10% commission."
                ]
            ],
            [
                "Key Rotation",
                "key-rotation",
                [
                    "Rotating the vote account authority keys require special handling when dealing with a live validator.",
                    "Vote Account Validator Identity",
                    "You will need access to the withdraw authority keypair for the vote account to change the validator identity. The follow steps assume that ~/withdraw-authority.json is that keypair.",
                    "Create the new validator identity keypair, Exzo Network-keygen new -o ~/new-validator-keypair.json.",
                    "Ensure that the new identity account has been funded, Exzo Network transfer ~/new-validator-keypair.json 500.",
                    "Run Exzo Network vote-update-validator ~/vote-account-keypair.json ~/new-validator-keypair.json ~/withdraw-authority.json to modify the validator identity in your vote account",
                    "Restart your validator with the new identity keypair for the --identity argument"
                ]
            ],
            [
                "Vote Account Authorized Voter",
                "vote-account-authorized-voter",
                [
                    "The vote authority keypair may only be changed at epoch boundaries and requires some additional arguments to Exzo Network-validator for a seamless migration.",
                    "Run Exzo Network epoch-info. If there is not much time remaining time in the current epoch, consider waiting for the next epoch to allow your validator plenty of time to restart and catch up.",
                    "Create the new vote authority keypair, Exzo Network-keygen new -o ~/new-vote-authority.json.",
                    "Determine the current vote authority keypair by running Exzo Network vote-account ~/vote-account-keypair.json. It may be validator's identity account (the default) or some other keypair. The following steps assume that ~/validator-keypair.json is that keypair.",
                    "Run Exzo Network vote-authorize-voter ~/vote-account-keypair.json ~/validator-keypair.json ~/new-vote-authority.json. The new vote authority is scheduled to become active starting at the next epoch.",
                    "Exzo Network-validator now needs to be restarted with the old and new vote authority keypairs, so that it can smoothly transition at the next epoch. Add the two arguments on restart: --authorized-voter ~/validator-keypair.json --authorized-voter ~/new-vote-authority.json",
                    "After the cluster reaches the next epoch, remove the --authorized-voter ~/validator-keypair.json argument and restart Exzo Network-validator, as the old vote authority keypair is no longer required."
                ]
            ],
            [
                "Vote Account Authorized Withdrawer",
                "vote-account-authorized-withdrawer",
                [
                    "No special handling is required. Use the Exzo Network vote-authorize-withdrawer command as needed.",
                    "By default your validator will have no stake. This means it will be ineligible to become leader."
                ]
            ],
            [
                "Monitoring Catch Up",
                "monitoring-catch-up",
                [
                    "To delegate stake, first make sure your validator is running and has caught up to the cluster. It may take some time to catch up after your validator boots. Use the catchup command to monitor your validator through this process:",
                    "Until your validator has caught up, it will not be able to vote successfully and stake cannot be delegated to it.",
                    "Also if you find the cluster's slot advancing faster than yours, you will likely never catch up. This typically implies some kind of networking issue between your validator and the rest of the cluster."
                ]
            ],
            [
                "Create Stake Keypair",
                "create-stake-keypair",
                [
                    "If you haven’t already done so, create a staking keypair. If you have completed this step, you should see the “validator-stake-keypair.json” in your Exzo Network runtime directory."
                ]
            ],
            [
                "Delegate Stake",
                "delegate-stake",
                [
                    "Now delegate 1 XZO to your validator by first creating your stake account:",
                    "and then delegating that stake to your validator:",
                    "Don’t delegate your remaining XZO, as your validator will use those tokens to vote.",
                    "Stakes can be re-delegated to another node at any time with the same command, but only one re-delegation is permitted per epoch:",
                    "Assuming the node is voting, now you're up and running and generating validator rewards. Rewards are paid automatically on epoch boundaries.",
                    "The rewards lamport earned are split between your stake account and the vote account according to the commission rate set in the vote account. Rewards can only be earned while the validator is up and running. Further, once staked, the validator becomes an important part of the network. In order to safely remove a validator from the network, first deactivate its stake.",
                    "At the end of each slot, a validator is expected to send a vote transaction. These vote transactions are paid for by lamport from a validator's identity account.",
                    "This is a normal transaction so the standard transaction fee will apply. The transaction fee range is defined by the genesis block. The actual fee will fluctuate based on transaction load. You can determine the current fee via the RPC API “getRecentBlockhash” before submitting a transaction."
                ]
            ],
            [
                "Validator Stake Warm-up",
                "validator-stake-warm-up",
                [
                    "Stakes need to warm up, and warmup increments are applied at Epoch boundaries, so it can take an hour or more for stake to come fully online.",
                    "To monitor your validator during its warmup period:",
                    "View your vote account:exzonetwork vote-account ~/vote-account-keypair.json This displays the current state of all the votes the validator has submitted to the network.",
                    "View your stake account, the delegation preference and details of your stake:solana stake-account ~/validator-stake-keypair.json",
                    "exzonetwork validators displays the current active stake of all validators, including yours",
                    "exzonetwork stake-history shows the history of stake warming up and cooling down over recent epochs",
                    "Look for log messages on your validator indicating your next leader slot: [2019-09-27T20:16:00.319721164Z INFO exzonetwork_core::replay_stage] <VALIDATOR_IDENTITY_PUBKEY> voted and reset PoH at tick height ####. My next leader slot is ####",
                    "Once your stake is warmed up, you will see a stake balance listed for your validator by running exzonetwork validators"
                ]
            ],
            [
                "Monitor Your Staked Validator",
                "monitor-your-staked-validator",
                [
                    "Confirm your validator becomes a leader",
                    "After your validator is caught up, use the exzonetwork balance command to monitor the earnings as your validator is selected as leader and collects transaction fees",
                    "Exzo Network nodes offer a number of useful JSON-RPC methods to return information about the network and your validator's participation. Make a request by using curl (or another http client of your choosing), specifying the desired method in JSON-RPC-formatted data. For example:",
                    "Helpful JSON-RPC methods:",
                    "getEpochInfo An epoch is the time, i.e. number of slots, for which a leader schedule is valid. This will tell you what the current epoch is and how far into it the cluster is.",
                    "getVoteAccounts This will tell you how much active stake your validator currently has. A % of the validator's stake is activated on an epoch boundary. You can learn more about staking on Exzo Network here.",
                    "getLeaderSchedule At any given moment, the network expects only one validator to produce ledger entries. The validator currently selected to produce ledger entries is called the “leader”. This will return the complete leader schedule (on a slot-by-slot basis) for currently activated stake, the identity pubkey will show up 1 or more times here."
                ]
            ],
            [
                "Deactivating Stake",
                "deactivating-stake",
                [
                    "Before detaching your validator from the cluster, you should deactivate the stake that was previously delegated by running:",
                    "Stake is not deactivated immediately and instead cools down in a similar fashion as stake warm up. Your validator should remain attached to the cluster while the stake is cooling down. While cooling down, your stake will continue to earn rewards. Only after stake cooldown is it safe to turn off your validator or withdraw it from the network. Cooldown may take several epochs to complete, depending on active stake and the size of your stake.",
                    "Note that a stake account may only be used once, so after deactivation, use the cli's withdraw-stake command to recover the previously staked lamport."
                ]
            ],
            [
                "Check Gossip",
                "check-gossip",
                [
                    "Confirm the IP address and identity pubkey of your validator is visible in the gossip network by running:"
                ]
            ],
            [
                "Check Your Balance",
                "check-your-balance",
                [
                    "Your account balance should decrease by the transaction fee amount as your validator submits votes, and increase after serving as the leader. Pass the --lamports are to observe in finer detail:"
                ]
            ],
            [
                "Check Vote Activity",
                "check-vote-activity",
                [
                    "The exzonetwork vote-account command displays the recent voting activity from your validator:"
                ]
            ],
            [
                "Get Cluster Info",
                "get-cluster-info",
                [
                    "There are several useful JSON-RPC endpoints for monitoring your validator on the cluster, as well as the health of the cluster:",
                    "You can publish your validator information to the chain to be publicly visible to other users."
                ]
            ],
            [
                "Run Exzo Network validator-info",
                "run-exzo-network-validator-info",
                [
                    "Run the Exzo Network CLI to populate a validator info account:",
                    "For details about optional fields for VALIDATOR_INFO_ARGS:"
                ]
            ],
            [
                "Example Commands",
                "example-commands",
                [
                    "Example publish command:",
                    "Example query command:",
                    "which outputs"
                ]
            ],
            [
                "Keybase",
                "keybase",
                [
                    "Including a Keybase username allows client applications (like the Exzo Network Explorer) to automatically pull in your validator public profile, including cryptographic proofs, brand identity, etc. To connect your validator pubkey with Keybase:",
                    "Join https://keybase.io/ and complete the profile for your validator",
                    "Add your validator identity pubkey to Keybase:",
                    "Create an empty file on your local computer called validator-<PUBKEY>",
                    "In Keybase, navigate to the Files section, and upload your pubkey file to a exzonetwork subdirectory in your public folder: /keybase/public/<KEYBASE_USERNAME>/exzonetwork",
                    "To check your pubkey, ensure you can successfully browse to https://keybase.pub/<KEYBASE_USERNAME>/exzonetwork/validator-<PUBKEY> ",
                    "Add or update your exzonetwork validator-info with your Keybase username. The CLI will verify the validator-<PUBKEY> file"
                ]
            ],
            [
                "Ode to Linux System Administration Generic Best Practices",
                "ode-to-linux-system-administration-generic-best-practices",
                []
            ],
            [
                "Useful Links & Discussion",
                "useful-links-and-discussion",
                []
            ]
        ]
    },
    {
        "url": "/wallet_metamask",
        "sections": [
            [
                "Import a Wallet into MetaMask  ",
                null,
                [
                    "In order to import an existing wallet to a MetaMask account, follow these simple step-by-step instructions. You will need to install the MetaMask extension for your favorite browser, import a wallet using private key or JSON file and add PBL tokens to the list.",
                    "Step 1) Install the MetaMask extension",
                    "Open https://metamask.io website or search for “Metamask extension” in your favorite browser (you can install Metamask for Chrome, Firefox and Opera browsers).",
                    "Click Add to Chrome to install MetaMask as Google Chrome extension (same as for other browsers).",
                    "Click Add Extension.",
                    "Step 2) Import a wallet to MetaMask",
                    "There are two ways how to export an existing account. If you have a seed words (mnemonic phrase) you can export your wallet straight away:",
                    "Click on the icon in the upper right corner to open MetaMask extension, read and accept the terms. Click Continue.",
                    "Click Import With Seed Phrase.",
                    "Enter your wallets seed phrase (mnemonic phrase).",
                    "Enter a strong password.",
                    "Click Import.",
                    "You have successfully imported your wallet to MetaMask.",
                    "Alternative option — import a wallet using a private key or JSON file",
                    "If you have an existing wallet address but you don’t have a mnemonic phrase, you can import your wallet address to MetaMask using a private key or JSON file.",
                    "After creating an account, click on the “Account” button in the upper right corner (see screenshots below).",
                    "Click Import account.",
                    "Select preferred entry type. If you want to import an account using your wallet’s private key, simply paste your private key string and click Import.",
                    "That’s it! You have successfully imported your cryptocurrency wallet to your MetaMask account."
                ]
            ]
        ]
    },
    {
        "url": "/wallets",
        "sections": [
            [
                "Wallets ",
                null,
                [
                    "This document describes the different wallet options that are available to users of the Exzo Network who want to be able to send, receive and interact with XZO tokens on the Exzo Network blockchain."
                ]
            ],
            [
                "What is a Wallet?",
                "what-is-a-wallet",
                [
                    "A crypto wallet is an essential tool for anyone looking to securely manage their cryptocurrency holdings. It serves as a container for a collection of key pairs, enabling the sending, receiving, and tracking of cryptocurrency transactions. Wallets can come in various forms, including digital files, pieces of paper, or specialized hardware devices. Some wallets also offer user-friendly smartphone apps and computer programs to manage and interact with their keys.",
                    "Each keypair consists of a private key, which must be kept confidential at all times, and its corresponding public key or wallet address. The public key is used to receive cryptocurrency, and it can be shared openly, whereas the private key is required to sign transactions and make changes to the wallet.",
                    "Wallets provide various approaches to keypair security, ranging from ease of use to more robust backup solutions. Exzo Network supports multiple wallet types to ensure users can balance convenience with security according to their preferences.",
                    "To receive XZO tokens on the Exzo Network blockchain, creating a wallet is the first crucial step. Once created, the wallet generates a unique public key that can be shared with others to receive tokens. It's important to note that the private key must be kept secure and should never be shared with anyone. Losing the private key could result in the permanent loss of all tokens stored in the wallet."
                ]
            ],
            [
                "Supported Wallets",
                "supported-wallets",
                [
                    "As a versatile blockchain platform, Exzo Network supports various types of wallets to cater to users' diverse needs. These wallets can be accessed through the Exzo Network native command-line app or third-party solutions.",
                    "For most users, we recommend using one of our user-friendly app wallets or browser-based web wallets, which provide a familiar and intuitive interface for managing their cryptocurrency holdings. These wallets simplify the process of sending, receiving, and tracking transactions without requiring the user to learn complex command-line tools.",
                    "However, for advanced users or developers seeking to leverage the full capabilities of the Exzo Network blockchain, our command-line wallets may be more suitable. These wallets provide access to all features of the platform and are typically the first to support new features before third-party wallets integrate them.",
                    "In summary, whether you're a novice or an experienced user, Exzo Network has a wallet solution to suit your needs. We encourage users to explore our range of wallet options and select the one that offers the optimal balance of security, convenience, and functionality for their specific requirements."
                ]
            ],
            [
                "Exzo Network Wallets",
                "exzo-network-wallets",
                [
                    "Exzo Network provides users with a choice to register and log in to their own wallet on either the web version or desktop. Regardless of the version, the wallet functions are identical, enabling users to manage their cryptocurrency assets seamlessly.",
                    "Moreover, our wallet is designed to be user-friendly and intuitive, offering a straightforward interface that simplifies the process of sending and receiving tokens, as well as tracking transaction history. Additionally, we are continually updating the wallet with the latest exchange rates, ensuring users are informed about the value of their holdings in real-time.",
                    "By offering users a choice of web or desktop versions, we strive to provide flexibility and convenience to our users, making it easy for them to manage their cryptocurrency assets from any device, anywhere in the world.",
                    "The wallet is continually updated with the current XZO exchange rates against all fiat currencies.",
                    "Desktop Wallet",
                    "The desktop version enables users to store their wallet directly on their computer. Using the desktop Exzo Network wallet, users are protected against online attacks, including phishing, IP spoofing, and XSS. You can download App on every popular OS - MacOS, Windows, Linux.",
                    "Mobile Wallet",
                    "With mobile version you initialize your wallet with a single mnemonic phrase. This way you will never lose your private keys. You can easily, selling, transferring, as well as storing digital currency.",
                    "Available on: Android, iOS",
                    "While the web version of Exzo Network's wallet offers convenient access to your cryptocurrency assets from any device, it's essential to note that the security of your assets may be lower if you're not using a secure device.",
                    "Web wallets are susceptible to various security risks, including malware infections, phishing attacks, and other forms of cyber threats that can compromise the safety of your cryptocurrency holdings. Therefore, it's vital to ensure that you're using a trusted and secure device before logging into your web wallet.",
                    "That being said, Exzo Network takes security very seriously, and we implement various measures to protect our users' assets, such as advanced encryption protocols and multi-factor authentication. Additionally, we always recommend our users take additional steps to protect their cryptocurrency assets, such as enabling two-factor authentication and using secure devices to access their wallets.",
                    "In conclusion, while the web version of our wallet offers ease of use and flexibility, we urge our users to exercise caution when accessing their cryptocurrency assets from any device and take appropriate security measures to safeguard their holdings.",
                    "Exzo Network offers users the flexibility to choose between several wallet types, including Command Line Wallets and App Wallets, to interface with the Exzo Network blockchain.",
                    "For those new to using command line tools, we highly recommend using one of our App Wallets, which provide a user-friendly interface for sending and receiving XZO tokens without the need for any technical expertise.",
                    "However, for advanced users or developers who prefer to work with command line tools, we also offer Command Line Wallets, which provide direct access to the Exzo Network command line tools. To use a Command Line Wallet, users must first install the Exzo Network CLI tools, which can be downloaded from our website.",
                    "Regardless of which wallet type you choose, Exzo Network prioritizes security and offers advanced encryption protocols, multi-factor authentication, and other features to safeguard your cryptocurrency holdings.",
                    "To use a Command Line Wallet, you must first install the Exzo Network CLI tools"
                ]
            ],
            [
                "File System Wallet",
                "file-system-wallet",
                [
                    "A file system wallet, aka an FS wallet, is a directory in your computer's file system. Each file in the directory holds a keypair.",
                    "File System Wallet Security",
                    "A file system wallet is the most convenient and least secure form of wallet. It is convenient because the keypair is stored in a simple file. You can generate as many keys as you would like and trivially back them up by copying the files. It is insecure because the keypair files are unencrypted. If you are the only user of your computer and you are confident it is free of malware, an FS wallet is a fine solution for small amounts of cryptocurrency. If, however, your computer contains malware and is connected to the Internet, that malware may upload your keys and use them to take your tokens. Likewise, because the keypairs are stored on your computer as files, a skilled hacker with physical access to your computer may be able to access it. Using an encrypted hard drive, such as FileVault on MacOS, minimizes that risk.",
                    "File System Wallet"
                ]
            ],
            [
                "Paper Wallet",
                "paper-wallet",
                [
                    "A paper wallet is a collection of seed phrases written on paper. A seed phrase is some number of words (typically 12 or 24) that can be used to regenerate a keypair on demand.",
                    "Paper Wallet Security",
                    "In terms of convenience versus security, a paper wallet sits at the opposite side of the spectrum from an FS wallet. It is terribly inconvenient to use, but offers excellent security. That high security is further amplified when paper wallets are used in conjunction with offline signing. Custody services such as Coinbase Custody use this combination. Paper wallets and custody services are an excellent way to secure a large number of tokens for a long period of time.",
                    "If you have questions or are having trouble setting up or using your wallet of choice, please make sure you've read through all the relevant pages in our Wallet Guide. The Exzo Network team is working hard to support new features on popular wallets, and we do our best to keep our documents up to date with the latest available features.",
                    "If you have questions after reading the docs, feel free to reach out to us on our Telegram.",
                    "For technical support, contact our support team if you have any technical questions."
                ]
            ]
        ]
    },
    {
        "url": "/writing_programs",
        "sections": [
            [
                "Writing Programs ",
                null,
                []
            ]
        ]
    }
];
for (let { url , sections  } of data){
    for (let [title, hash, content] of sections){
        sectionIndex.add({
            url: url + (hash ? "#" + hash : ""),
            title,
            content: [
                title,
                ...content
            ].join("\n"),
            pageTitle: hash ? sections[0][0] : undefined
        });
    }
}
function search(query, options = {}) {
    let result = sectionIndex.search(query, {
        ...options,
        enrich: true
    });
    if (result.length === 0) {
        return [];
    }
    return result[0].result.map((item)=>({
            url: item.id,
            title: item.doc.title,
            pageTitle: item.doc.pageTitle
        }));
}


/***/ })

};
;