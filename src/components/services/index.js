const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE

export const DIARY_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/diary`
export const headers = { Authorization: `Bearer ${AIRTABLE_KEY}` };