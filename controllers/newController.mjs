import { postMessage } from '../db/queries.mjs';

async function createMessage(req, res) {
    const { message_title, message_text } = req.body;
    const { username } = req.user;
    await postMessage(message_title, message_text, username);
    res.redirect('/dashboard');
}

export { createMessage };