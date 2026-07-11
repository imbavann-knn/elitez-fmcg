# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Elitez FMCG marketing site. The integration uses the PostHog JavaScript Web SDK loaded via a CDN snippet (`posthog.js`) placed in the `<head>` of every public-facing page. No build step or bundler is required. Twelve custom events are captured across seven files, with special focus on the quote request conversion funnel, service interest signals, and high-intent contact actions.

| Event name | Description | File |
|---|---|---|
| `quote_form_submitted` | User submits the quote/enquiry form on the contact page. | `pages/contact.html` |
| `quote_cta_clicked` | User clicks a 'Get a Quote' CTA button on the homepage (hero or bottom CTA section). | `index.html` |
| `service_card_clicked` | User clicks a service card on the homepage services section. | `index.html` |
| `blink_cta_clicked` | User clicks the 'Explore BLINK' button on the homepage or BLINK page. | `index.html`, `pages/blink.html` |
| `phone_number_clicked` | User clicks a phone number tel: link to call the team. | `pages/contact.html` |
| `email_link_clicked` | User clicks an email address link on the contact page. | `pages/contact.html` |
| `portfolio_project_opened` | User opens a project image in the portfolio lightbox. | `script.js` |
| `portfolio_filter_applied` | User applies a category filter on the portfolio page. | `pages/portfolio.html`, `script.js` |
| `linkedin_clicked` | User clicks the LinkedIn profile link on the contact page. | `pages/contact.html` |
| `services_page_viewed` | User lands on the services page — top of the consideration funnel. | `pages/services.html` |
| `contact_page_viewed` | User lands on the contact/quote page — top of the conversion funnel. | `pages/contact.html` |
| `nav_quote_cta_clicked` | User clicks the 'Get a Quote' link in the site navigation bar. | `script.js` |

## Next steps

We've built some insights and a dashboard to keep an eye on user behavior, based on the events just instrumented:

- **Dashboard:** [Analytics basics (wizard)](https://us.posthog.com/project/502544/dashboard/1814402)
- [Quote Conversion Funnel](https://us.posthog.com/project/502544/insights/JKs2qNyc) — Contact page view → Form submission conversion rate
- [Quote CTA Clicks Over Time](https://us.posthog.com/project/502544/insights/rDaJ28ja) — Hero + Nav CTA engagement trends
- [Service Interest by Type](https://us.posthog.com/project/502544/insights/RkvgedqZ) — Service card clicks broken down by service name
- [High-Intent Contact Signals](https://us.posthog.com/project/502544/insights/YbyTBNG4) — Phone, email, and LinkedIn click trends
- [BLINK & Services Page Interest](https://us.posthog.com/project/502544/insights/KoWn7FVK) — BLINK CTA and Services page view trends

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add the exact PostHog env var names (`POSTHOG_PROJECT_TOKEN`, `POSTHOG_HOST`) to `.env.example` and any bootstrap scripts so collaborators know what to set.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
