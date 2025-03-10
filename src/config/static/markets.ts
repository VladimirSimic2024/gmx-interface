/*
  This files is used to pre-build data during the build process.
  Avoid adding client-side code here, as it can break the build process.

  However, this files can be a dependency for the client code.
*/

import { parse } from "date-fns";

import { ARBITRUM, AVALANCHE, AVALANCHE_FUJI } from "./chains";

const p = (date: string) => parse(date, "dd MMM yyyy", new Date());

export const DEFAULT_LISTING = p("01 Jan 1970");

type MarketUiConfig = {
  enabled: true;
  listingDate: Date;
  marketTokenAddress: string;
  indexTokenAddress: string;
  longTokenAddress: string;
  shortTokenAddress: string;
};

export const MARKETS: Record<string, Record<string, MarketUiConfig>> = {
  [ARBITRUM]: {
    // BTC/USD [WBTC.e-USDC]
    "0x47c031236e19d024b42f8AE6780E44A573170703": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x47c031236e19d024b42f8AE6780E44A573170703",
      indexTokenAddress: "0x47904963fc8b2340414262125aF798B9655E58Cd",
      longTokenAddress: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
      shortTokenAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    },
    // ETH/USD [WETH-USDC]
    "0x70d95587d40A2caf56bd97485aB3Eec10Bee6336": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x70d95587d40A2caf56bd97485aB3Eec10Bee6336",
      indexTokenAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
      longTokenAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
      shortTokenAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    },
    // DOGE/USD [WETH-USDC]
    "0x6853EA96FF216fAb11D2d930CE3C508556A4bdc4": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x6853EA96FF216fAb11D2d930CE3C508556A4bdc4",
      indexTokenAddress: "0xC4da4c24fd591125c3F47b340b6f4f76111883d8",
      longTokenAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
      shortTokenAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    },
    // SOL/USD [SOL-USDC]
    "0x09400D9DB990D5ed3f35D7be61DfAEB900Af03C9": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x09400D9DB990D5ed3f35D7be61DfAEB900Af03C9",
      indexTokenAddress: "0x2bcC6D6CdBbDC0a4071e48bb3B969b06B3330c07",
      longTokenAddress: "0x2bcC6D6CdBbDC0a4071e48bb3B969b06B3330c07",
      shortTokenAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    },
    // LTC/USD [WETH-USDC]
    "0xD9535bB5f58A1a75032416F2dFe7880C30575a41": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0xD9535bB5f58A1a75032416F2dFe7880C30575a41",
      indexTokenAddress: "0xB46A094Bc4B0adBD801E14b9DB95e05E28962764",
      longTokenAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
      shortTokenAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    },
    // UNI/USD [UNI-USDC]
    "0xc7Abb2C5f3BF3CEB389dF0Eecd6120D451170B50": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0xc7Abb2C5f3BF3CEB389dF0Eecd6120D451170B50",
      indexTokenAddress: "0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0",
      longTokenAddress: "0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0",
      shortTokenAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    },
    // LINK/USD [LINK-USDC]
    "0x7f1fa204bb700853D36994DA19F830b6Ad18455C": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x7f1fa204bb700853D36994DA19F830b6Ad18455C",
      indexTokenAddress: "0xf97f4df75117a78c1A5a0DBb814Af92458539FB4",
      longTokenAddress: "0xf97f4df75117a78c1A5a0DBb814Af92458539FB4",
      shortTokenAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    },
    // ARB/USD [ARB-USDC]
    "0xC25cEf6061Cf5dE5eb761b50E4743c1F5D7E5407": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0xC25cEf6061Cf5dE5eb761b50E4743c1F5D7E5407",
      indexTokenAddress: "0x912CE59144191C1204E64559FE8253a0e49E6548",
      longTokenAddress: "0x912CE59144191C1204E64559FE8253a0e49E6548",
      shortTokenAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    },
    // SWAP-ONLY [USDC-USDC.e]
    "0x9C2433dFD71096C435Be9465220BB2B189375eA7": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x9C2433dFD71096C435Be9465220BB2B189375eA7",
      indexTokenAddress: "0x0000000000000000000000000000000000000000",
      longTokenAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
      shortTokenAddress: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
    },
    // SWAP-ONLY [USDC-USDT]
    "0xB686BcB112660343E6d15BDb65297e110C8311c4": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0xB686BcB112660343E6d15BDb65297e110C8311c4",
      indexTokenAddress: "0x0000000000000000000000000000000000000000",
      longTokenAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
      shortTokenAddress: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
    },
    // SWAP-ONLY [USDC-DAI]
    "0xe2fEDb9e6139a182B98e7C2688ccFa3e9A53c665": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0xe2fEDb9e6139a182B98e7C2688ccFa3e9A53c665",
      indexTokenAddress: "0x0000000000000000000000000000000000000000",
      longTokenAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
      shortTokenAddress: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    },
    // XRP/USD [WETH-USDC]
    "0x0CCB4fAa6f1F1B30911619f1184082aB4E25813c": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x0CCB4fAa6f1F1B30911619f1184082aB4E25813c",
      indexTokenAddress: "0xc14e065b0067dE91534e032868f5Ac6ecf2c6868",
      longTokenAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
      shortTokenAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    },
    // BNB/USD [BNB-USDC]
    "0x2d340912Aa47e33c90Efb078e69E70EFe2B34b9B": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x2d340912Aa47e33c90Efb078e69E70EFe2B34b9B",
      indexTokenAddress: "0xa9004A5421372E1D83fB1f85b0fc986c912f91f3",
      longTokenAddress: "0xa9004A5421372E1D83fB1f85b0fc986c912f91f3",
      shortTokenAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    },
    // AAVE [AAVE-USDC]
    "0x1CbBa6346F110c8A5ea739ef2d1eb182990e4EB2": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x1CbBa6346F110c8A5ea739ef2d1eb182990e4EB2",
      indexTokenAddress: "0xba5DdD1f9d7F570dc94a51479a000E3BCE967196",
      longTokenAddress: "0xba5DdD1f9d7F570dc94a51479a000E3BCE967196",
      shortTokenAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    },
    // ATOM [WETH-USDC]
    "0x248C35760068cE009a13076D573ed3497A47bCD4": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x248C35760068cE009a13076D573ed3497A47bCD4",
      indexTokenAddress: "0x7D7F1765aCbaF847b9A1f7137FE8Ed4931FbfEbA",
      longTokenAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
      shortTokenAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    },
    // NEAR [WETH-USDC]
    "0x63Dc80EE90F26363B3FCD609007CC9e14c8991BE": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x63Dc80EE90F26363B3FCD609007CC9e14c8991BE",
      indexTokenAddress: "0x1FF7F3EFBb9481Cbd7db4F932cBCD4467144237C",
      longTokenAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
      shortTokenAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    },
    // AVAX [WAVAX-USDC]
    "0x7BbBf946883a5701350007320F525c5379B8178A": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x7BbBf946883a5701350007320F525c5379B8178A",
      indexTokenAddress: "0x565609fAF65B92F7be02468acF86f8979423e514",
      longTokenAddress: "0x565609fAF65B92F7be02468acF86f8979423e514",
      shortTokenAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    },
    // OP [OP-USDC]
    "0x4fDd333FF9cA409df583f306B6F5a7fFdE790739": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x4fDd333FF9cA409df583f306B6F5a7fFdE790739",
      indexTokenAddress: "0xaC800FD6159c2a2CB8fC31EF74621eB430287a5A",
      longTokenAddress: "0xaC800FD6159c2a2CB8fC31EF74621eB430287a5A",
      shortTokenAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    },
    // BTC/USD [WBTC.e-WBTC.e]
    "0x7C11F78Ce78768518D743E81Fdfa2F860C6b9A77": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x7C11F78Ce78768518D743E81Fdfa2F860C6b9A77",
      indexTokenAddress: "0x47904963fc8b2340414262125aF798B9655E58Cd",
      longTokenAddress: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
      shortTokenAddress: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
    },
    // ETH/USD [WETH-WETH]
    "0x450bb6774Dd8a756274E0ab4107953259d2ac541": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x450bb6774Dd8a756274E0ab4107953259d2ac541",
      indexTokenAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
      longTokenAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
      shortTokenAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    },
    // GMX/USD [GMX-USDC]
    "0x55391D178Ce46e7AC8eaAEa50A72D1A5a8A622Da": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x55391D178Ce46e7AC8eaAEa50A72D1A5a8A622Da",
      indexTokenAddress: "0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a",
      longTokenAddress: "0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a",
      shortTokenAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    },
    // PEPE [PEPE-USDC]
    "0x2b477989A149B17073D9C9C82eC9cB03591e20c6": {
      enabled: true,
      listingDate: p("17 Jul 2024"),
      marketTokenAddress: "0x2b477989A149B17073D9C9C82eC9cB03591e20c6",
      indexTokenAddress: "0x25d887Ce7a35172C62FeBFD67a1856F20FaEbB00",
      longTokenAddress: "0x25d887Ce7a35172C62FeBFD67a1856F20FaEbB00",
      shortTokenAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    },
    // WIF [WIF-USDC]
    "0x0418643F94Ef14917f1345cE5C460C37dE463ef7": {
      enabled: true,
      listingDate: p("17 Jul 2024"),
      marketTokenAddress: "0x0418643F94Ef14917f1345cE5C460C37dE463ef7",
      indexTokenAddress: "0xA1b91fe9FD52141Ff8cac388Ce3F10BFDc1dE79d",
      longTokenAddress: "0xA1b91fe9FD52141Ff8cac388Ce3F10BFDc1dE79d",
      shortTokenAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    },
    // ETH/USD [wstETH-USDe]
    "0x0Cf1fb4d1FF67A3D8Ca92c9d6643F8F9be8e03E5": {
      enabled: true,
      listingDate: p("31 Jul 2024"),
      marketTokenAddress: "0x0Cf1fb4d1FF67A3D8Ca92c9d6643F8F9be8e03E5",
      indexTokenAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
      longTokenAddress: "0x5979D7b546E38E414F7E9822514be443A4800529",
      shortTokenAddress: "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
    },
    // SWAP-ONLY [wstETH-WETH]
    "0xb56E5E2eB50cf5383342914b0C85Fe62DbD861C8": {
      enabled: true,
      listingDate: p("31 Jul 2024"),
      marketTokenAddress: "0xb56E5E2eB50cf5383342914b0C85Fe62DbD861C8",
      indexTokenAddress: "0x0000000000000000000000000000000000000000",
      longTokenAddress: "0x5979D7b546E38E414F7E9822514be443A4800529",
      shortTokenAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    },
    // SWAP-ONLY [USDe-USDC]
    "0x45aD16Aaa28fb66Ef74d5ca0Ab9751F2817c81a4": {
      enabled: true,
      listingDate: p("31 Jul 2024"),
      marketTokenAddress: "0x45aD16Aaa28fb66Ef74d5ca0Ab9751F2817c81a4",
      indexTokenAddress: "0x0000000000000000000000000000000000000000",
      longTokenAddress: "0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34",
      shortTokenAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    },
    // SHIB/USD [WETH-USDC]
    "0xB62369752D8Ad08392572db6d0cc872127888beD": {
      enabled: true,
      listingDate: p("7 Aug 2024"),
      marketTokenAddress: "0xB62369752D8Ad08392572db6d0cc872127888beD",
      indexTokenAddress: "0x3E57D02f9d196873e55727382974b02EdebE6bfd",
      longTokenAddress: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
      shortTokenAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    },
    // APE/USD [APE-USDC]
    "0xdf034cd3df9a80eABFA0556232a91E03Ca67D5Cb": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0xdf034cd3df9a80eABFA0556232a91E03Ca67D5Cb",
      indexTokenAddress: "0x74885b4D524d497261259B38900f54e6dbAd2210",
      longTokenAddress: "0x74885b4D524d497261259B38900f54e6dbAd2210",
      shortTokenAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    },
    // STX/USD [wBTC-USDC]
    "0xD9377d9B9a2327C7778867203deeA73AB8a68b6B": {
      enabled: true,
      listingDate: p("14 Aug 2024"),
      marketTokenAddress: "0xD9377d9B9a2327C7778867203deeA73AB8a68b6B",
      indexTokenAddress: "0xBaf07cF91D413C0aCB2b7444B9Bf13b4e03c9D71",
      longTokenAddress: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
      shortTokenAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    },
    // ORDI/USD [wBTC-USDC]
    "0x93385F7C646A3048051914BDFaC25F4d620aeDF1": {
      enabled: true,
      listingDate: p("14 Aug 2024"),
      marketTokenAddress: "0x93385F7C646A3048051914BDFaC25F4d620aeDF1",
      indexTokenAddress: "0x1E15d08f3CA46853B692EE28AE9C7a0b88a9c994",
      longTokenAddress: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
      shortTokenAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    },
    // BTC/USD [TBTC]
    "0xd62068697bCc92AF253225676D618B0C9f17C663": {
      enabled: true,
      listingDate: p("11 Sep 2024"),
      marketTokenAddress: "0xd62068697bCc92AF253225676D618B0C9f17C663",
      indexTokenAddress: "0x47904963fc8b2340414262125aF798B9655E58Cd",
      longTokenAddress: "0x6c84a8f1c29108F47a79964b5Fe888D4f4D0dE40",
      shortTokenAddress: "0x6c84a8f1c29108F47a79964b5Fe888D4f4D0dE40",
    },
  },
  [AVALANCHE]: {
    // BTC/USD [BTC-USDC]
    "0xFb02132333A79C8B5Bd0b64E3AbccA5f7fAf2937": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0xFb02132333A79C8B5Bd0b64E3AbccA5f7fAf2937",
      indexTokenAddress: "0x152b9d0FdC40C096757F570A51E494bd4b943E50",
      longTokenAddress: "0x152b9d0FdC40C096757F570A51E494bd4b943E50",
      shortTokenAddress: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    },
    // ETH/USD [ETH-USDC]
    "0xB7e69749E3d2EDd90ea59A4932EFEa2D41E245d7": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0xB7e69749E3d2EDd90ea59A4932EFEa2D41E245d7",
      indexTokenAddress: "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
      longTokenAddress: "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
      shortTokenAddress: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    },
    // DOGE/USD [WAVAX-USDC]
    "0x8970B527E84aA17a33d38b65e9a5Ab5817FC0027": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x8970B527E84aA17a33d38b65e9a5Ab5817FC0027",
      indexTokenAddress: "0xC301E6fe31062C557aEE806cc6A841aE989A3ac6",
      longTokenAddress: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
      shortTokenAddress: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    },
    // SOL/USD [SOL-USDC]
    "0xd2eFd1eA687CD78c41ac262B3Bc9B53889ff1F70": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0xd2eFd1eA687CD78c41ac262B3Bc9B53889ff1F70",
      indexTokenAddress: "0xFE6B19286885a4F7F55AdAD09C3Cd1f906D2478F",
      longTokenAddress: "0xFE6B19286885a4F7F55AdAD09C3Cd1f906D2478F",
      shortTokenAddress: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    },
    // LTC/USD [WAVAX-USDC]
    "0xA74586743249243D3b77335E15FE768bA8E1Ec5A": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0xA74586743249243D3b77335E15FE768bA8E1Ec5A",
      indexTokenAddress: "0x8E9C35235C38C44b5a53B56A41eaf6dB9a430cD6",
      longTokenAddress: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
      shortTokenAddress: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    },
    // AVAX/USD [WAVAX-USDC]
    "0x913C1F46b48b3eD35E7dc3Cf754d4ae8499F31CF": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x913C1F46b48b3eD35E7dc3Cf754d4ae8499F31CF",
      indexTokenAddress: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
      longTokenAddress: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
      shortTokenAddress: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    },
    // SWAP-ONLY [USDC-USDT.e]
    "0xf3652Eba45DC761e7ADd4091627d5Cda21F61613": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0xf3652Eba45DC761e7ADd4091627d5Cda21F61613",
      indexTokenAddress: "0x0000000000000000000000000000000000000000",
      longTokenAddress: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
      shortTokenAddress: "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
    },
    // SWAP-ONLY [USDC-USDC.e]
    "0x297e71A931C5825867E8Fb937Ae5cda9891C2E99": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x297e71A931C5825867E8Fb937Ae5cda9891C2E99",
      indexTokenAddress: "0x0000000000000000000000000000000000000000",
      longTokenAddress: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
      shortTokenAddress: "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664",
    },
    // SWAP-ONLY [USDT-USDT.e]
    "0xA7b768d6a1f746fd5a513D440DF2970ff099B0fc": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0xA7b768d6a1f746fd5a513D440DF2970ff099B0fc",
      indexTokenAddress: "0x0000000000000000000000000000000000000000",
      longTokenAddress: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
      shortTokenAddress: "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
    },
    // SWAP-ONLY [USDC-DAI.e]
    "0xDf8c9BD26e7C1A331902758Eb013548B2D22ab3b": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0xDf8c9BD26e7C1A331902758Eb013548B2D22ab3b",
      indexTokenAddress: "0x0000000000000000000000000000000000000000",
      longTokenAddress: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
      shortTokenAddress: "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
    },
    // XRP/USD [WAVAX-USDC]
    "0xD1cf931fa12783c1dd5AbB77a0706c27CF352f25": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0xD1cf931fa12783c1dd5AbB77a0706c27CF352f25",
      indexTokenAddress: "0x34B2885D617cE2ddeD4F60cCB49809fc17bb58Af",
      longTokenAddress: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
      shortTokenAddress: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    },
    // BTC/USD [BTC-BTC]
    "0x3ce7BCDB37Bf587d1C17B930Fa0A7000A0648D12": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x3ce7BCDB37Bf587d1C17B930Fa0A7000A0648D12",
      indexTokenAddress: "0x152b9d0FdC40C096757F570A51E494bd4b943E50",
      longTokenAddress: "0x152b9d0FdC40C096757F570A51E494bd4b943E50",
      shortTokenAddress: "0x152b9d0FdC40C096757F570A51E494bd4b943E50",
    },
    // ETH/USD [ETH-ETH]
    "0x2A3Cf4ad7db715DF994393e4482D6f1e58a1b533": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x2A3Cf4ad7db715DF994393e4482D6f1e58a1b533",
      indexTokenAddress: "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
      longTokenAddress: "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
      shortTokenAddress: "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
    },
    // AVAX/USD [AVAX-AVAX]
    "0x08b25A2a89036d298D6dB8A74ace9d1ce6Db15E5": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x08b25A2a89036d298D6dB8A74ace9d1ce6Db15E5",
      indexTokenAddress: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
      longTokenAddress: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
      shortTokenAddress: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    },
  },
  [AVALANCHE_FUJI]: {
    // AVAX/USD [WAVAX-USDC]
    "0xD996ff47A1F763E1e55415BC4437c59292D1F415": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0xD996ff47A1F763E1e55415BC4437c59292D1F415",
      indexTokenAddress: "0x1D308089a2D1Ced3f1Ce36B1FcaF815b07217be3",
      longTokenAddress: "0x1D308089a2D1Ced3f1Ce36B1FcaF815b07217be3",
      shortTokenAddress: "0x3eBDeaA0DB3FfDe96E7a0DBBAFEC961FC50F725F",
    },
    // ETH/USD [ETH-USDC]
    "0xbf338a6C595f06B7Cfff2FA8c958d49201466374": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0xbf338a6C595f06B7Cfff2FA8c958d49201466374",
      indexTokenAddress: "0x82F0b3695Ed2324e55bbD9A9554cB4192EC3a514",
      longTokenAddress: "0x82F0b3695Ed2324e55bbD9A9554cB4192EC3a514",
      shortTokenAddress: "0x3eBDeaA0DB3FfDe96E7a0DBBAFEC961FC50F725F",
    },
    // ETH/USD [ETH-DAI]
    "0xDdF708B284C5C26BE67Adf9C51DFa935b5035bF8": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0xDdF708B284C5C26BE67Adf9C51DFa935b5035bF8",
      indexTokenAddress: "0x82F0b3695Ed2324e55bbD9A9554cB4192EC3a514",
      longTokenAddress: "0x82F0b3695Ed2324e55bbD9A9554cB4192EC3a514",
      shortTokenAddress: "0x51290cb93bE5062A6497f16D9cd3376Adf54F920",
    },
    // ETH/USD [USDC]
    "0xe28323955C05B75E25B56C1c996C1354Eb5Aa13D": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0xe28323955C05B75E25B56C1c996C1354Eb5Aa13D",
      indexTokenAddress: "0x82F0b3695Ed2324e55bbD9A9554cB4192EC3a514",
      longTokenAddress: "0x3eBDeaA0DB3FfDe96E7a0DBBAFEC961FC50F725F",
      shortTokenAddress: "0x3eBDeaA0DB3FfDe96E7a0DBBAFEC961FC50F725F",
    },
    // WBTC/USD [WBTC-USDC]
    "0x79E6e0E454dE82fA98c02dB012a2A69103630B07": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x79E6e0E454dE82fA98c02dB012a2A69103630B07",
      indexTokenAddress: "0x3Bd8e00c25B12E6E60fc8B6f1E1E2236102073Ca",
      longTokenAddress: "0x3Bd8e00c25B12E6E60fc8B6f1E1E2236102073Ca",
      shortTokenAddress: "0x3eBDeaA0DB3FfDe96E7a0DBBAFEC961FC50F725F",
    },
    // WBTC/USD [WBTC-DAI]
    "0x4b6ccF6E429f038087A26b13DD6ab4304F7E5DF1": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x4b6ccF6E429f038087A26b13DD6ab4304F7E5DF1",
      indexTokenAddress: "0x3Bd8e00c25B12E6E60fc8B6f1E1E2236102073Ca",
      longTokenAddress: "0x3Bd8e00c25B12E6E60fc8B6f1E1E2236102073Ca",
      shortTokenAddress: "0x51290cb93bE5062A6497f16D9cd3376Adf54F920",
    },
    // SOL/USD [ETH-USDC]
    "0xEDF9Be35bE84cD1e39Bda59Bd7ae8A704C12e06f": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0xEDF9Be35bE84cD1e39Bda59Bd7ae8A704C12e06f",
      indexTokenAddress: "0x137f4a7336df4f3f11894718528516edaaD0B082",
      longTokenAddress: "0x82F0b3695Ed2324e55bbD9A9554cB4192EC3a514",
      shortTokenAddress: "0x3eBDeaA0DB3FfDe96E7a0DBBAFEC961FC50F725F",
    },
    // SWAP-ONLY [USDC-USDT]
    "0xeE8827D67C054cAa89C9d6058Fdddccd1C499c74": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0xeE8827D67C054cAa89C9d6058Fdddccd1C499c74",
      indexTokenAddress: "0x0000000000000000000000000000000000000000",
      longTokenAddress: "0x3eBDeaA0DB3FfDe96E7a0DBBAFEC961FC50F725F",
      shortTokenAddress: "0x50df4892Bd13f01E4e1Cd077ff394A8fa1A3fD7c",
    },
    // DOGE/USD [ETH-DAI]
    "0xAC2c6C1b0cd1CabF78B4e8ad58aA9d43375318Cb": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0xAC2c6C1b0cd1CabF78B4e8ad58aA9d43375318Cb",
      indexTokenAddress: "0x2265F317eA5f47A684E5B26c50948617c945d986",
      longTokenAddress: "0x82F0b3695Ed2324e55bbD9A9554cB4192EC3a514",
      shortTokenAddress: "0x51290cb93bE5062A6497f16D9cd3376Adf54F920",
    },
    // LINK/USD [ETH-DAI]
    "0xeDf53322e288F597436f5d5849771662AEe16A1C": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0xeDf53322e288F597436f5d5849771662AEe16A1C",
      indexTokenAddress: "0x6BD09E8D65AD5cc761DF62454452d4EC1545e647",
      longTokenAddress: "0x82F0b3695Ed2324e55bbD9A9554cB4192EC3a514",
      shortTokenAddress: "0x51290cb93bE5062A6497f16D9cd3376Adf54F920",
    },
    // BNB/USD [ETH-DAI]
    "0x017de90B0fa830C592805C6148c089191716f04c": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x017de90B0fa830C592805C6148c089191716f04c",
      indexTokenAddress: "0x110892Dd5fa73bE430c0ade694febD9a4CAc68Be",
      longTokenAddress: "0x82F0b3695Ed2324e55bbD9A9554cB4192EC3a514",
      shortTokenAddress: "0x51290cb93bE5062A6497f16D9cd3376Adf54F920",
    },
    // ADA/USD [ETH-DAI]
    "0x695a07d3DD551b0E77A348cC6A873c1eb183FA98": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x695a07d3DD551b0E77A348cC6A873c1eb183FA98",
      indexTokenAddress: "0xE64dfFF37Fa6Fe969b792B4146cEe2774Ef6e1a1",
      longTokenAddress: "0x82F0b3695Ed2324e55bbD9A9554cB4192EC3a514",
      shortTokenAddress: "0x51290cb93bE5062A6497f16D9cd3376Adf54F920",
    },
    // TRX/USD [ETH-DAI]
    "0x927f31364b8836021e4F73B27a5d0EbB35C74679": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x927f31364b8836021e4F73B27a5d0EbB35C74679",
      indexTokenAddress: "0x0D1495527C255068F2f6feE31C85d326D0A76FE8",
      longTokenAddress: "0x82F0b3695Ed2324e55bbD9A9554cB4192EC3a514",
      shortTokenAddress: "0x51290cb93bE5062A6497f16D9cd3376Adf54F920",
    },
    // MATIC/USD [ETH-USDC]
    "0x62408de4cB1a499842EC53296EF8dD99A825CcEb": {
      enabled: true,
      listingDate: p("17 Sep 2024"),
      marketTokenAddress: "0x62408de4cB1a499842EC53296EF8dD99A825CcEb",
      indexTokenAddress: "0xadc4698B257F78187Fd675FBf591a09f4c975240",
      longTokenAddress: "0x82F0b3695Ed2324e55bbD9A9554cB4192EC3a514",
      shortTokenAddress: "0x3eBDeaA0DB3FfDe96E7a0DBBAFEC961FC50F725F",
    },
    // DOT/USD [ETH-USDC]
    "0xCc6AC193E1d1Ef102eCBBA864BBfE87E414a7A0D": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0xCc6AC193E1d1Ef102eCBBA864BBfE87E414a7A0D",
      indexTokenAddress: "0x65FFb5664a7B3377A5a27D9e59C72Fb1A5E94962",
      longTokenAddress: "0x82F0b3695Ed2324e55bbD9A9554cB4192EC3a514",
      shortTokenAddress: "0x3eBDeaA0DB3FfDe96E7a0DBBAFEC961FC50F725F",
    },
    // UNI/USD [ETH-USDC]
    "0xE446E8f7074c0A97bb7cd448fA2CC3346045F514": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0xE446E8f7074c0A97bb7cd448fA2CC3346045F514",
      indexTokenAddress: "0xF62dC1d2452d0893735D22945Af53C290b158eAF",
      longTokenAddress: "0x82F0b3695Ed2324e55bbD9A9554cB4192EC3a514",
      shortTokenAddress: "0x3eBDeaA0DB3FfDe96E7a0DBBAFEC961FC50F725F",
    },
    // TEST/USD [ETH-USDC]
    "0x1d9dC405CCEFA78b203BaD9CCe1b1623D2B25D9e": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x1d9dC405CCEFA78b203BaD9CCe1b1623D2B25D9e",
      indexTokenAddress: "0x42DD131E1086FFCc59bAE9498D71E20E0C889B14",
      longTokenAddress: "0x82F0b3695Ed2324e55bbD9A9554cB4192EC3a514",
      shortTokenAddress: "0x3eBDeaA0DB3FfDe96E7a0DBBAFEC961FC50F725F",
    },
    // WBTC/USD [USDC-USDT]
    "0xd783EB54407d6d3A4D5c94b634eC9BAE3F574098": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0xd783EB54407d6d3A4D5c94b634eC9BAE3F574098",
      indexTokenAddress: "0x3Bd8e00c25B12E6E60fc8B6f1E1E2236102073Ca",
      longTokenAddress: "0x3eBDeaA0DB3FfDe96E7a0DBBAFEC961FC50F725F",
      shortTokenAddress: "0x50df4892Bd13f01E4e1Cd077ff394A8fa1A3fD7c",
    },
    // ETH/USD [USDC-DAI]
    "0x6d72D2787107c32a48bbA4687Eb8F9C19FE5e29C": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x6d72D2787107c32a48bbA4687Eb8F9C19FE5e29C",
      indexTokenAddress: "0x82F0b3695Ed2324e55bbD9A9554cB4192EC3a514",
      longTokenAddress: "0x3eBDeaA0DB3FfDe96E7a0DBBAFEC961FC50F725F",
      shortTokenAddress: "0x51290cb93bE5062A6497f16D9cd3376Adf54F920",
    },
    // WBTC/USD [WBTC]
    "0x3b649015Fe0a4d15617e57aA11c0FbbfA03A9e11": {
      enabled: true,
      listingDate: DEFAULT_LISTING,
      marketTokenAddress: "0x3b649015Fe0a4d15617e57aA11c0FbbfA03A9e11",
      indexTokenAddress: "0x3Bd8e00c25B12E6E60fc8B6f1E1E2236102073Ca",
      longTokenAddress: "0x3Bd8e00c25B12E6E60fc8B6f1E1E2236102073Ca",
      shortTokenAddress: "0x3Bd8e00c25B12E6E60fc8B6f1E1E2236102073Ca",
    },
  },
};
