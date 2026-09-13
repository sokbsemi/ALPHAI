# SOKB SEMICONDUCTOR

Official repository for **SOKB SEMICONDUCTOR** ([sokbsemi.in](https://sokbsemi.in)), a DPIIT-recognized deep-tech fabless semiconductor startup engineering sovereign RISC-V compute engines and edge chiplet architectures.

---

## 📌 Executive Overview
- **Domain:** [https://sokbsemi.in](https://sokbsemi.in)
- **Legal Entity:** SOKB Private Limited (CIN: U26109UP2025PTC228681)
- **Physical Design Office:** Barabanki, Uttar Pradesh, India (PIN: 225001)
- **Initiative Alignment:** India Semiconductor Mission (ISM 2.0) & Semicon 2.0 Design Linked Incentive (DLI) Scheme under MeitY
- **Official Inquiries:** [design@sokbsemi.in](mailto:design@sokbsemi.in) | +91-8287483811

---

> [!IMPORTANT]
> ### 📌 BOOKMARK: SPARK™ PRODUCT LAUNCH TIMER (`assets/js/spark-splash-timer.js`)
> - **Campaign Window:** **14 September 2026 (00:00:00 IST) — 20 September 2026 (23:59:59 IST)** *(Semicon 2.0)*
> - **Script File:** [`assets/js/spark-splash-timer.js`](assets/js/spark-splash-timer.js)
> - **Behavior:** Splash overlay stays dormant prior to 14 Sep, automatically activates 14–20 Sep, and auto-expires post 20 Sep.
> - **Injection Line:** When ready to activate scheduled behavior, inject this line in `index.html` before `</body>`:
>   ```html
>   <script src="assets/js/spark-splash-timer.js"></script>
>   ```
> - **Preview Bypass:** Test anytime prior to launch using `https://sokbsemi.in/?preview=spark`

---

## 🚀 Recent Updates & Product Campaigns

### 1. SPARK™ Proximity Marketing Launch Campaign
- **Product Focus:** Hardware-enabled proximity marketing solution for eventplaces (*Connect. Engage. Sell.*) featuring real-time client analytics, instant data-free opt-ins, and targeted localized delivery.
- **Overlay Splash UI:** Glassmorphic modal with spring physics (`cubic-bezier(0.175, 0.885, 0.32, 1.275)`), floating drop-shadow, and amber glow aura.
- **Transparent Backdrop:** Translucent backdrop blur (`bg-slate-950/68 backdrop-blur-md`) preserving main page visibility underneath.
- **Extreme Top-Right Close Button:** Pinned to the outer corner apex (`top: -1rem; right: -1rem; z-index: 60`), completely clearing the active graphic area and diagonal *"Place your Order"* ribbon.
- **Tactile Call-to-Action:** Direct `ORDER NOW →` button and graphic routing to [`contact.html?enquiry=spark#enquiry`](https://sokbsemi.in/contact.html?enquiry=spark#enquiry) with automatic scroll and visual illumination of official corporate channels.

### 2. Navigation Bar Modernization
- Removed legacy right-hand CTA buttons across all 7 pages.
- Distributed navigation links with consistent equidistant spacing (`space-x-8` / 32px) on desktop viewports.
- Standardized navigation labels (e.g. `IP Licensing`) for structural symmetry and crisp line-height alignment.

---

## 🛡️ Enterprise Security Hardening & VAPT Defenses

The web infrastructure incorporates multi-layered defense-in-depth security controls compliant with **OWASP Top 10 (2021)**, **CERT-In Cyber Security Guidelines**, and **GIGW 3.0 Mandatory Compliance**:

1. **Anti-Clickjacking Frame Buster (RFC 7034 / OWASP A01):**
   - Active inline frame-busting defense (`if (top !== self) top.location = self.location;`) coupled with `frame-ancestors 'none'` CSP directive preventing malicious framing or UI redress attacks.
2. **Anti-Bot Client Proof-of-Work (PoW) Engine (OWASP A04):**
   - Dynamic SHA-256 cryptographic challenge-response mechanism solved client-side during transmission requests. Prevents automated headless scraping, fuzzing, and DDoS submission flooding without inconveniencing human users.
3. **Anti-MITM Cryptographic Payload Integrity Checksum (OWASP A02):**
   - Generates a client-side SHA-256 HMAC digest over transmitted contact parameters, producing a verifiable tracking token (`SOKB-SEC-XXXXXXX`) ensuring tamper-proof end-to-end payload integrity.
4. **Content Security Policy (CSP) & Permissions Lockdown (OWASP A05):**
   - Strict CSP meta register (`object-src 'none'`, `base-uri 'self'`, `form-action 'self' mailto:`) with `strict-origin-when-cross-origin` referrer policy.
   - Explicit `Permissions-Policy` disabling unused device sensors (`camera=(), microphone=(), geolocation=(), usb=()`).
5. **DOM-Based XSS & Injection Neutralization (OWASP A03):**
   - Strict `textContent` assignment and complete elimination of dynamic `innerHTML` interpolation of user-supplied fields. Sanitization regex strips HTML tags, event attributes, and SQL keywords prior to ingestion.
6. **Coordinated Vulnerability Disclosure (RFC 9116 / OWASP A08):**
   - Active RFC 9116 security contact established at [`/.well-known/security.txt`](https://sokbsemi.in/.well-known/security.txt) for responsible vulnerability reporting.

---

## 📊 Privacy-Preserving Web Analytics (GoatCounter)

SOKB Semiconductor strictly respects user and institutional privacy:
- **Provider:** [GoatCounter](https://sokbsemi.goatcounter.com) (`https://gc.zgo.at/count.js`)
- **Zero Cookies:** Operates entirely without HTTP cookies, localStorage identifiers, or intrusive persistent fingerprinting.
- **Regulatory Compliance:** 100% compliant with **GDPR**, **CCPA**, and **PECR** regulations out of the box—no annoying cookie consent banners required.
- **Purpose:** Collects high-level aggregate traffic metrics (pageviews, referrers, and device categories) to optimize fabless IP discovery while protecting intellectual property and visitor privacy.

---

## 🏛️ Silicon IP Architecture & Products

- **ATLAS-I Chiplet:** Sovereign edge AI coprocessor engineered for drone avionics, smart infrastructure, and robotics (+30% power efficiency, +50% compute density).
- **ATLNode Dual-Core SoC:** Silicon-proven open RV32IMAC instruction set fabric targeted for 40nm Bulk CMOS process node with low-latency 64-bit AXI4 crossbar interconnect.
- **Unified SRAM Subsystem:** 512 KB SRAM arranged across 4 interleaved 128 KB banks with CDC timing closure.

---

## 📂 Pages & Directory Structure

```
.
├── index.html            # Institutional Showcase, SPARK™ Launch Overlay & Core Advantage
├── product.html          # ATLAS-I Chiplet Specifications & Early Access Registration
├── architecture.html     # Dual-Core SoC Architecture, Memory Map & CDC Timing
├── roadmap.html          # ISM 2.0 DLI Phase 1-3 Tape-Out Timeline
├── licensing.html        # Commercial IP Core Licensing & DLI Subsidy Allocation
├── contact.html          # Design Office & Official Corporate Channels Matrix
├── 404.html              # Custom Branded Trap Fault Error Page
├── assets/
│   ├── css/
│   │   └── style.css     # GIGW Controls, Theme Variables & SPARK Splash Overlay Styles
│   ├── js/
│   │   ├── main.js       # Core Security, Theme, Accessibility & UX Controller
│   │   └── spark-splash-timer.js # Standalone Scheduled Activation Script (14-20 Sep)
│   └── images/
│       ├── logo-mark.jpg # Official SOKB Semiconductor Emblem
│       └── spark-launch-campaign.png # SPARK™ Product Launch Campaign Poster
├── .well-known/
│   └── security.txt      # RFC 9116 Coordinated Vulnerability Disclosure
├── CNAME                 # GitHub Pages Custom Domain (sokbsemi.in)
├── DEPLOYMENT_GUIDE.md   # Production Deployment & DNS Documentation
├── SECURITY_AND_VAPT_AUDIT.md # Comprehensive Cybersecurity & VAPT Report
└── README.md             # This Documentation
```

---

## 📄 Intellectual Property & Licensing

All IP architectures, RTL definitions, layout blocks, and schematics are proprietary to **SOKB Private Limited**. Commercial licensing and fabless foundry allocations are coordinated via the Design Office at Barabanki, Uttar Pradesh.
