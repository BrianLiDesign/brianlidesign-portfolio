import { track } from "@vercel/analytics";

export function trackCaseStudyOpen(slug: string, location: string) {
  track("case_study_open", { slug, location });
}

export function trackResumeDownload(location: string) {
  track("resume_download", { location });
}

export function trackContactClick(channel: string, location: string) {
  track("contact_click", { channel, location });
}
