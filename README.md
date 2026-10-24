# Lightning Connect public documentation site

Static product, documentation, support, and privacy website for Lightning Connect. This directory is intended for the separate public repository: [KumarVikky/Lightning_Connect_Extension](https://github.com/KumarVikky/Lightning_Connect_Extension).

## Local preview

From this directory, run:

```powershell
npx serve .
```

Then open the local address printed by `serve`.

## Publish on GitHub Pages

1. Copy the **contents** of this folder—including the hidden `.github` folder—to the root of the public `Lightning_Connect_Extension` repository.
2. Commit and push that public repository to its `main` branch.
3. In the public repository, open **Settings → Pages** and select **GitHub Actions** as the publishing source.
4. The included **Deploy Lightning Connect documentation** workflow deploys the site to `https://kumarvikky.github.io/Lightning_Connect_Extension/`.

GitHub Pages is free for public repositories on GitHub Free. The website has no build step, server, analytics, or paid hosting dependency. The page theme selector saves only the visitor’s visual preference in that visitor’s browser.
