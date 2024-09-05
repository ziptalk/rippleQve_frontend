import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'viem';
import { mainnet, root } from 'viem/chains';

export const walletConfig = getDefaultConfig({
  appName: 'mytether-frontend-typescript',
  projectId: 'dd28643ef18d85bb03244bc90163b47d',
  chains: [root, mainnet],
  transports: {
    [root.id]: http('https://root.rootnet.live/archive'),
    [mainnet.id]: http('https://cloudflare-eth.com'),
  },
  ssr: false,
});
