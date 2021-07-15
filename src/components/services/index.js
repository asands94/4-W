const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE

export const DIARY_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/diary`
export const headers = { Authorization: `Bearer ${AIRTABLE_KEY}` };
export const DIRECTORY_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Character%20Info`
export const POTION_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/ingredients`
export const OWL_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/owl%20post`
export const MENAGERIE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/magical%20menagerie`