# VS Code setting
## Setting Emmet
1. Open command palette
2. Hotkey
    - Window **Ctrl + Shift + P**
    - Mac **Command+Shift+P**
3. Copy text

    ``` 
    Open Settings (JSON)
    ```

4. Add code in file settings.json

```
{
    "emmet.syntaxProfiles": {
        "javascript": "jsx"
    },
        "emmet.includeLanguages": {
    "javascript": "javascriptreact"
    },
        "emmet.triggerExpansionOnTab": true,
}
```





