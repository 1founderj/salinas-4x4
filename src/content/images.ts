// ============================================================
// SITE PHOTOGRAPHY — the single place where every photo lives.
//
// Each entry is a CDN asset pointer (`.asset.json`) created with
// `lovable-assets`. To swap a photo later, upload the new file and
// update only this file — components never hardcode image URLs.
//
// Photo plan (orientation matched to its block):
// - Horizontal photos: hero slides, landscape banner, wide highlights.
// - Vertical photos: intro, tall highlights, journey and final CTA.
// ============================================================

import heroStoneForest from "@/assets/4x4-stone-forest.jpg.asset.json";
import heroRoadVolcanoes from "@/assets/4x4-road-volcanoes.jpg.asset.json";
import saltMirrorGroup from "@/assets/salt-mirror-group.jpg.asset.json";
import flamingosLagoon from "@/assets/flamingos-lagoon.jpg.asset.json";
import llamaHerdSalar from "@/assets/llama-herd-salar.jpg.asset.json";
import truckSaltFlat from "@/assets/4x4-salt-flat-portrait.jpg.asset.json";
import lagoonMirrorPortrait from "@/assets/lagoon-mirror-portrait.jpg.asset.json";
import travelersTruck from "@/assets/travelers-4x4-salt.jpg.asset.json";
import llamaBreakfast from "@/assets/llama-breakfast.jpg.asset.json";
import feedingLlamas from "@/assets/feeding-llamas.jpg.asset.json";

export const images = {
  heroStoneForest: heroStoneForest.url,
  heroRoadVolcanoes: heroRoadVolcanoes.url,
  saltMirrorGroup: saltMirrorGroup.url,
  flamingosLagoon: flamingosLagoon.url,
  llamaHerdSalar: llamaHerdSalar.url,
  truckSaltFlat: truckSaltFlat.url,
  lagoonMirrorPortrait: lagoonMirrorPortrait.url,
  travelersTruck: travelersTruck.url,
  llamaBreakfast: llamaBreakfast.url,
  feedingLlamas: feedingLlamas.url,
} as const;
