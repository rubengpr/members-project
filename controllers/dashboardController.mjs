import { getMessages } from "../db/queries.mjs";

async function seeMessages(req, res) {
    return await getMessages();
}

export { seeMessages };