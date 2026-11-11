/* ============================================================
   Where the app gets its data

   apiBase empty -> everything runs locally, exactly as it has been.
   apiBase set   -> accounts, balances and payments come from the API.

   This origin must also be listed in the API's CORS_ORIGINS, or every
   call is refused by the browser before it leaves.

   The price feed and contract settlement stay local either way: the
   backend does not own them yet. That is worth knowing rather than
   assuming, while the browser decides outcomes, a balance is not
   a claim anyone should rely on.
   ============================================================ */
window.NEXAS_CONFIG = {
  /* The same API as Novi: LyraBinary is a second front end on one
     backend, so accounts, balances and payments are shared. */
  apiBase: 'https://sitesbackend.onrender.com',

  /* Supabase project. The publishable key is bound by row level
     security and is safe to ship in a browser. The service-role key
     must never appear in a file like this. */
  supabaseUrl: '' /* TODO: the new Supabase project URL */,
  supabaseKey: '' /* TODO: its publishable key */,

  /* The USDT deposit wallet. Public by nature — it is what people send
     money to — and here as a fallback so the deposit sheet works before
     /config answers, or if it does not. The server's copy wins when it
     arrives, so changing wallets is one environment variable on the API
     and this line is only the floor. TRC-20 is the only chain we take:
     a customer choosing a network from a menu is a customer who can
     choose the wrong one, and USDT sent over the wrong chain is gone. */
  usdt: {
    address: 'TLEDGCXYvTkUdEUYdCY7oHRN9vRKfWkngq',
    network: 'TRC-20'
  }
};

/* api.js reads this. Kept as a separate global so a host can override
   it with one inline script tag without editing config.js. */
window.NEXAS_API = window.NEXAS_API || window.NEXAS_CONFIG.apiBase;

/* The brand, for the shell: the rail's mark and the Trade glyph. */
window.NEX_BRAND = 'LyraBinary';
window.NEX_MARK = 'lb';
window.NEX_TRADE_ICON = 'trade';
