import { cpSync, rmSync } from 'node:fs';

rmSync('.claude/skills', { recursive: true, force: true });
cpSync('.agents/skills', '.claude/skills', { recursive: true });

cpSync('.cursor/mcp.json', '.mcp.json');

console.log('[sync] agent config updated (.claude/skills, .mcp.json)');
