const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE

export const DIARY_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/diary`
export const headers = { Authorization: `Bearer ${AIRTABLE_KEY}` };
export const DIRECTORY_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Character%20Info`
export const POTION_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/ingredients`
export const OWL_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/owl%20post`
export const MENAGERIE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/magical%20menagerie`
export const OLLIVANDERS_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/ollivanders`
export const FLOURISH_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/flourish%20and%20blotts`
export const MEALS_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/meals`
export const DRINKS_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/drinks`
export const SNACKS_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/snacks`