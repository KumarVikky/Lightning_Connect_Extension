# Lightning Craft

**Lightning Craft is a Chrome extension that brings common Salesforce data, metadata, and developer workflows into one focused workspace.** It opens from supported Salesforce pages, works with the Salesforce session already active in Chrome, and helps developers and admins move from context to action without repeatedly changing tools.

> Lightning Craft connects your current Salesforce context to the work you need to do next: inspect data, query records, prepare changes, retrieve metadata, or work with source files.

## What you can do

- **Launch from Salesforce** — Open the in-page Salesforce Connect launcher to explore objects, users, organization context, and direct workspace actions.
- **Data Export** — Browse objects and fields, create and validate SOQL, inspect paged results, and export or copy data as CSV or Excel.
- **Data Import** — Enter, paste, or upload CSV/XLS/XLSX records; map fields, validate staged rows, and run permitted create, update, upsert, or delete operations.
- **View records** — Inspect available fields and eligible record values in a metadata-aware data view.
- **Retrieve metadata** — Discover components, build a package selection, generate `package.xml`, inspect available dependencies, and download a Metadata API ZIP.
- **Use the Developer Console** — Browse supported Salesforce source, work in a Monaco-based editor, compare files or changes against the org, download metadata, and use optional local scratch files deliberately.

## How it works

Lightning Craft is built for a signed-in Salesforce user. It reads the active Salesforce session cookie only on supported Salesforce domains and makes requests to the Salesforce origin selected by the workflow. It does not ask for a separate Salesforce password or API token.

Salesforce permissions remain in control. Object permissions, field-level security, API limits, session state, and other Salesforce controls can affect what a user can view or do.

## Privacy at a glance

- Workspace preferences, query history, mappings, saved package configurations, and enabled Local Files are stored locally in the browser.
- Uploaded files and pasted data are handled only when a user initiates an import or related action.
- Salesforce data is requested from the active Salesforce org; the default architecture does not require a separate remote proxy.
- Lightning Craft does not sell Salesforce information or use it for advertising.

Read the full [Privacy Policy](privacy.html).

## Documentation site

This repository contains the public Lightning Craft product site, screenshots, feature guide, support information, and privacy policy.

| Page | Purpose |
| --- | --- |
| [Overview](index.html) | Product introduction and key workflows |
| [Features](features.html) | Detailed feature walkthrough and screenshot gallery |
| [Guide & support](support.html) | Installation, troubleshooting, and usage guidance |
| [Privacy policy](privacy.html) | Data handling and Chrome permission details |

## Local preview

This is a static site. From this directory, run:

```powershell
npx serve .
```

Open the local address printed by `serve`.

## Publish to GitHub Pages

1. Push this public repository to its `master` branch.
2. In GitHub, open **Settings → Pages** and select **GitHub Actions** as the source.
3. The included workflow at `.github/workflows/deploy-documentation.yml` publishes the site.

The expected site URL is `https://kumarvikky.github.io/Lightning_Craft_Extension/`.

## Report a bug or request help

Please use [GitHub Issues](https://github.com/KumarVikky/Lightning_Craft_Extension/issues). Include the workflow you used, the action you attempted, and non-sensitive error details. Do not include Salesforce session IDs, credentials, or customer data.
