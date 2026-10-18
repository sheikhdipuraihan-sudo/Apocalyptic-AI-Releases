# Play Store Release Checklist

This checklist supports release preparation; it does not guarantee Google Play approval.

- Use a persistent upload key with Play App Signing and keep the keystore backup private.
- Submit the signed AAB, not the APK, for a Play production release.
- Keep the Play Console privacy-policy URL pointed at the public [`PRIVACY_POLICY.md`](https://github.com/sheikhdipuraihan-sudo/Apocalyptic-AI-Releases/blob/main/PRIVACY_POLICY.md).
- Complete the Data safety form from the actual shipped behavior and update it when behavior changes.
- Complete target audience, content rating, ads, app access, AI-generated content, permissions, and account-deletion declarations accurately.
- Provide an in-app way to report or flag offensive or unsafe AI-generated content and verify that the report destination is monitored.
- Verify every bundled library, manual chapter, map-data source, model link, name, logo, and downloaded model's redistribution terms.
- Test the release on supported Android versions, including permission denial, offline behavior, download failure, low storage, model failure, GPS denial, SMS handoff, backup behavior, and large-screen layouts.
- Use truthful store listing claims. Do not describe AI output as guaranteed emergency, medical, legal, navigation, or safety advice.
- Complete any current Google testing or production-access requirements for the developer account.

The current public release repository is for distribution and documentation. Store review remains Google's decision.
