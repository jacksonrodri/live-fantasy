export const CONSTANTS = {
  CARD_SUITS: {
    DIAMOND: 1,
    CLUB: 2,
    HEART: 3,
    SPADE: 4,
  },
  //9 = J, 10 = Queen, 11 = King, 12 = Ace
  CARD_RANKS: [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ],
  CARD_POP_ACTIONS: {
    INCREASE: "INCREASE",
    DECREASE: "DECREASE",
    REPLACE: "REPLACE",
    POWER_MATCH: "POWER_MATCH",
    REPLACE_ALL: "REPLACE_ALL",
    NEW_HAND: "NEW_HAND",
  },
  MAX_ACE_PER_CARD: 2,
  MAX_ACE_CARDS: 5,
  POWER_ROYALS: {
    TENS: "10",
    JACK: "J",
    QUEEN: "Q",
    KING: "K",
    ACE: "A",
  },
  CARD_RANKS_INDEXES: {
    TENS: 8,
    JACK: 9,
    QUEEN: 10,
    KING: 11,
    ACE: 12,
  },

  SOCKET_EVENTS: {
    AUTH: "auth",
    AUTH_STATUS: "auth_status",
    AUTH_TYPE: {
      LOGIN: "login",
      REGISTER: "register",
      RESET_PASSWORD: "reset_password",
    },
    LANDING_PAGE_EMAIL: {
      ON: "on_landing_page_email",
      EMIT: "emit_landing_page_email",
    },
  },

  LOCAL_STORAGE_KEYS: {
    USER: "q3245fas45fa4w5#$rfa345__123@#42fadsfaw3424",
    CASH_BALANCE: "cash_balance",
    TOKEN_BALANCE: "token_balance",
    BTC_BALANCE: "btc_balance",
    ETH_BALANCE: "eth_balance",
    DISPLAY_BALANCE: "display_balance",
  },

  BUTTON_TYPE: {
    SUBMIT: "submit",
    BUTTON: "button",
    RESET: "reset",
  },

  BINGO_INVENTORY_STATE: {
    REPLACE_ALL: "replace_all",
    REPLACE: "replace",
    POWER_MATCH: "power_match",
    INCREASE_DECREASE: "increase_decrease",
  },

  FILTERS: {
    NHL: {
      CENTER: "c",
      LW: "lw",
      RW: "rw",
      D: "d",
      G: "g",
      TD: "td",
    },
    MLB: {
      P: "p",
      C: "c",
      SS: "ss",
      XB: "xb",
      OF: "of",
      D: "d",
    },
    NBA: {
      C: "c",
      PG: "pg",
      SG: "sg",
      F: "f",
      D: "d",
    },
    NFL: {
      QB: 'qb',
      RB: 'rb',
      WR: 'wr',
      TE: 'te',
      K: 'k',
      D: 'd'
    }
  },

  NHL_VIEW: {
    FV: "fv",
    C: "c",
    S: "s",
  },

  XP: {
    xp1_5: "xp1.5",
    xp2: "xp2",
    xp3: "xp3",
  },
};
