<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture rules

- All user-facing copy lives in `src/content/<lang>.ts` (one file per language, registered in `src/content/index.ts`); components read it via `useI18n()` — never hardcode user-facing strings in components. Why: the owner translates the site themselves later.
- Contact/booking details (WhatsApp number, email, phone, socials) live only in `src/content/site.ts` with `""` placeholders until the owner confirms them; `bookingLink()` disables the WhatsApp button (honest "coming soon" state) while the number is empty. Never invent contact data.
- All photography uses the single placeholder `src/assets/placeholder.svg` until the owner uploads originals; keep image fields/imports in one place so swapping is trivial.
- The official tour facts (S/ 90 price, S/ 6 lagoon entrance, 5:30–5:45 a.m. departure, ~1:00 p.m. return, cancellation <24 h non-refundable, full payment upfront) are locked by `src/test/content.test.ts` — update copy and test together.
