# Agent Coordination Resources

This repository makes one shared operating context discoverable by Codex, Claude Code, GitHub Copilot in VS Code, Gemini/Antigravity, Perplexity, and other instruction-aware LLM clients.

Start with [AGENTS.md](AGENTS.md). The current capability matrix and synchronization procedure live in [resources/agent-coordination.md](resources/agent-coordination.md).

Run the local validation with:

```sh
./scripts/verify-agent-resources.sh
```

OAuth and other credentials are intentionally excluded. Each client must authenticate to Zapier locally.

The active GitHub repository is [OneManBand87/agent-coordination-system](https://github.com/OneManBand87/agent-coordination-system). The repository was safely repurposed from the earlier Neuro-DIV Bolt prototype; its former default state remains recoverable from `archive/neuro-div-bolt-prototype-2026-07-16`, and its original topic branches remain intact.
