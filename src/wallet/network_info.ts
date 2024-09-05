const nuetron_chainInfo = {
  $schema: './chain.schema.json',
  chain_name: 'neutron',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Neutron',
  chain_type: 'cosmos',
  chain_id: 'neutron-1',
  bech32_prefix: 'neutron',
  website: 'https://neutron.org/',
  daemon_name: 'neutrond',
  node_home: '$HOME/.neutrond',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'untrn',
        low_gas_price: 0.0053,
        average_gas_price: 0.0053,
        high_gas_price: 0.0053,
      },
      {
        denom:
          'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
        low_gas_price: 0.0008,
        average_gas_price: 0.0008,
        high_gas_price: 0.0008,
      },
      {
        denom:
          'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
        low_gas_price: 0.008,
        average_gas_price: 0.008,
        high_gas_price: 0.008,
      },
      {
        denom:
          'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
        low_gas_price: 2903231.6597,
        average_gas_price: 2903231.6597,
        high_gas_price: 2903231.6597,
      },
      {
        denom:
          'ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130',
        low_gas_price: 2564102564.1026,
        average_gas_price: 2564102564.1026,
        high_gas_price: 2564102564.1026,
      },
      {
        denom:
          'ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7',
        low_gas_price: 0.0004,
        average_gas_price: 0.0004,
        high_gas_price: 0.0004,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'untrn',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/neutron-org/neutron',
    recommended_version: 'v4.0.1',
    compatible_versions: ['v4.0.1'],
    binaries: {
      'linux/amd64':
        'https://github.com/neutron-org/neutron/releases/download/v4.0.1/neutrond-linux-amd64',
    },
    cosmos_sdk_version: 'neutron-org/cosmos-sdk v0.50.7-neutron',
    consensus: {
      type: 'cometbft',
      version: 'v0.38.7',
    },
    cosmwasm_version: 'neutron-org/wasmd v0.51.0',
    cosmwasm_enabled: true,
    ibc_go_version: 'v8.2.1',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/neutron-org/mainnet-assets/main/neutron-1-genesis.json',
    },
    versions: [
      {
        name: 'v1.0.1',
        recommended_version: 'v1.0.4',
        compatible_versions: ['v1.0.3', 'v1.0.4'],
        cosmos_sdk_version: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        cosmwasm_version: '0.31',
        cosmwasm_enabled: true,
        ibc_go_version: '4.3.0',
        next_version_name: 'v2.0.0',
      },
      {
        name: 'v2.0.0',
        proposal: 25,
        height: 5416000,
        recommended_version: 'v2.0.4',
        compatible_versions: ['v2.0.4'],
        binaries: {
          'linux/amd64':
            'https://github.com/neutron-org/neutron/releases/download/v2.0.4/neutrond-linux-amd64',
        },
        cosmos_sdk_version: 'v0.47.6',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2',
        },
        cosmwasm_version: 'v0.45.0',
        cosmwasm_enabled: true,
        ibc_go_version: 'v7.3.1',
        next_version_name: 'v3.0.1',
      },
      {
        name: 'v3.0.1',
        proposal: 35,
        height: 9034900,
        recommended_version: 'v3.0.2',
        compatible_versions: ['v3.0.2'],
        binaries: {
          'linux/amd64':
            'https://github.com/neutron-org/neutron/releases/download/v3.0.2/neutrond-linux-amd64',
        },
        cosmos_sdk_version: 'neutron-org/cosmos-sdk v0.47.10-neutron',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4',
        },
        cosmwasm_version: 'neutron-org/wasmd v0.45.0',
        cosmwasm_enabled: true,
        ibc_go_version: 'v7.3.2',
        next_version_name: 'v3.0.5',
      },
      {
        name: 'v3.0.5',
        proposal: 37,
        height: 10525000,
        recommended_version: 'v3.0.6',
        compatible_versions: ['v3.0.6'],
        binaries: {
          'linux/amd64':
            'https://github.com/neutron-org/neutron/releases/download/v3.0.6/neutrond-linux-amd64',
        },
        cosmos_sdk_version: 'neutron-org/cosmos-sdk v0.47.10-neutron',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4',
        },
        cosmwasm_version: 'neutron-org/wasmd v0.45.0',
        cosmwasm_enabled: true,
        ibc_go_version: 'v7.4.0',
        next_version_name: 'v4.0.1',
      },
      {
        name: 'v4.0.1',
        proposal: 41,
        height: 12255555,
        recommended_version: 'v4.0.1',
        compatible_versions: ['v4.0.1'],
        binaries: {
          'linux/amd64':
            'https://github.com/neutron-org/neutron/releases/download/v4.0.1/neutrond-linux-amd64',
        },
        cosmos_sdk_version: 'neutron-org/cosmos-sdk v0.50.7-neutron',
        consensus: {
          type: 'cometbft',
          version: 'v0.38.7',
        },
        cosmwasm_version: 'neutron-org/wasmd v0.51.0',
        cosmwasm_enabled: true,
        ibc_go_version: 'v8.2.1',
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-black-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-black-logo.svg',
  },
  description:
    'The most secure CosmWasm platform in Cosmos, Ripple lets smart-contracts leverage bleeding-edge Interchain technology with minimal overhead.',
  peers: {
    seeds: [
      {
        id: '74f3a4a0423e72334f4439b438b29934e5f0dbbd',
        address: 'p2p-xyphion.neutron-1.neutron.org:26656',
        provider: 'Neutron',
      },
      {
        id: '65beeffac5c0f29e6c3749687f03b2040d265895',
        address: 'p2p-talzor.neutron-1.neutron.org:26656',
        provider: 'Neutron',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:19156',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'c28827cb96c14c905b127b92065a3fb4cd77d7f6',
        address: 'seeds.whispernode.com:19156',
        provider: 'WhisperNode 🤐',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    persistent_peers: [
      {
        id: 'e5d2743d9a3de514e4f7b9461bf3f0c1500c58d9',
        address: 'neutron.peer.stakewith.us:39956',
        provider: 'StakeWithUs',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.novel.remedy.tm.p2p.org',
        provider: 'P2P',
      },
      {
        address: 'https://neutron-rpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://rpc-neutron.whispernode.com',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://rpc-neutron.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'http://rpc.neutron.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://neutron-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://community.nuxian-node.ch:6797/neutron/trpc',
        provider: 'PRO Delegators',
      },
      {
        address: 'https://rpc.neutron.bronbro.io:443',
        provider: 'Bro_n_Bro',
      },
      {
        address: 'https://rpc.neutron.quokkastake.io',
        provider: '🐹 Quokka Stake',
      },
    ],
    rest: [
      {
        address: 'https://api.novel.remedy.tm.p2p.org',
        provider: 'P2P',
      },
      {
        address: 'https://neutron-api.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://lcd-neutron.whispernode.com',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://api-neutron.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'http://api.neutron.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://neutron-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://community.nuxian-node.ch:6797/neutron/crpc',
        provider: 'PRO Delegators',
      },
      {
        address: 'https://lcd.neutron.bronbro.io:443',
        provider: 'Bro_n_Bro',
      },
      {
        address: 'https://api.neutron.quokkastake.io',
        provider: '🐹 Quokka Stake',
      },
    ],
    grpc: [
      {
        address: 'grpc-kralum.neutron-1.neutron.org:80',
        provider: 'Neutron',
      },
      {
        address: 'neutron-grpc-pub.rpc.p2p.world:3001',
        provider: 'P2P',
      },
      {
        address: 'neutron-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'grpc-neutron.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'grpc-neutron.cosmos-spaces.cloud:3090',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'grpc.neutron.nodestake.top:9090',
        provider: 'NodeStake',
      },
      {
        address: 'neutron-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://grpc.neutron.bronbro.io:443',
        provider: 'Bro_n_Bro',
      },
      {
        address: 'rpc.neutron.quokkastake.io:9090',
        provider: '🐹 Quokka Stake',
      },
    ],
  },
  explorers: [
    {
      kind: 'Mintscan',
      url: 'https://www.mintscan.io/neutron',
      tx_page: 'https://www.mintscan.io/neutron/transactions/${txHash}',
      account_page:
        'https://www.mintscan.io/neutron/accounts/${accountAddress}',
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/neutron',
      tx_page: 'https://ezstaking.app/neutron/txs/${txHash}',
      account_page: 'https://ezstaking.app/neutron/account/${accountAddress}',
    },
    {
      kind: 'WhisperNode 🤐',
      url: 'https://mainnet.whispernode.com/neutron',
      tx_page: 'https://mainnet.whispernode.com/neutron/tx/${txHash}',
      account_page:
        'https://mainnet.whispernode.com/neutron/account/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-raw.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-raw.svg',
      theme: {
        primary_color_hex: '#000000',
        background_color_hex: '#00000000',
        circle: false,
      },
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg',
      theme: {
        primary_color_hex: '#040404',
        background_color_hex: '#000000',
        circle: true,
      },
    },
  ],
};

export default nuetron_chainInfo;
