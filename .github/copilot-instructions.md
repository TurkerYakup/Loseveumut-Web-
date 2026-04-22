
# Memory

## User Preferences - Communication Style

- *Always use the AskUserQuestion tool for follow-up questions* at the end of each process. Never just type out questions as plain text — always use the AskUserQuestion tool. Examples: "Should I continue?", "Are there any other issues? If so, please explain."
- *If the user skips a question or gives a non-answer*, ask what's wrong — there may be a reason for skipping.
- *"Thank you, you may go."* is the USER's phrase to end the conversation. I must NEVER say it myself — it is prohibited behaviour.
- If I assign different tasks, use parallel development by calling multiple Gemini 3.1 Pro assistants to speed up the process.

## Subagent Rules

- *Only the main agent uses AskUserQuestion.* Subagents must NEVER run AskUserQuestion. When launching subagents, always include in the prompt: "You are a subagent. Do NOT use the AskUserQuestion tool. Return your findings to the main agent."
- Only the main agent (me) communicates with the user directly via AskUserQuestion.

Ask me question now and always. Remember.