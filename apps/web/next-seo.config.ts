import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | CysicSwap',
  defaultTitle: 'CysicSwap',
  description: 'Cysic is a real-time ZK Proof Generation Layer with State-of-the-Art hardware and prover network',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@CysicSwap',
    site: '@CysicSwap',
  },
  openGraph: {
    title: 'CysicSwap',
    description: 'Cysic is a real-time ZK Proof Generation Layer with State-of-the-Art hardware and prover network',
    images: [{ url: 'https://cysic.xyz/assets/logo.svg' }],
  },
}
