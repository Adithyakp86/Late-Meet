# 🕒 Late-Meet: AI Meeting Copilot

Late-Meet is a high-performance, AI-driven Chrome Extension designed specifically for Google Meet to provide real-time meeting intelligence. Say goodbye to the anxiety of joining a meeting late or losing track of the discussion—Late-Meet acts as your silent, personal meeting assistant.

## The Problem Statement ⚠️
Joining a meeting late often leaves participants disconnected and scrambling for context. Forcing the meeting to pause while others catch you up disrupts the flow of the entire team. Existing AI note-takers often act as intrusive bots in the call and might produce massive transcripts that take too much time to read. There is a lack of instant, **private**, and concise briefings for users who simply want to know: *"What did I miss?"*

## Our Solution 💡
Late-Meet solves this by living natively within your browser. Without adding an obnoxious bot to the call, it captures audio locally, translates it to text, and uses AI to generate instant contextual briefings and summaries that only you can see. The sleek side-panel ensures you remain engaged with the meeting while catching up seamlessly.

---

### Phase 1: The Core Foundation (Current Phase) 🚀
The initial release focuses on establishing robust, private, and high-performance offline audio capture and AI insights.

- **Background Audio Capture (Offscreen API)**: Modern architectures utilizing Chrome's Offscreen Documents and `chrome.tabCapture` to reliably intercept meeting audio without disrupting tab activity.
- **OpenAI Whisper Integration**: Top-tier, real-time speech-to-text transcription directly piped from the meeting tab to the AI.
- **Premium Glassmorphism Interface**: A stunning, modern dark theme side-panel dashboard. Built with sleek CSS aesthetics—no clunky popups.
- **On-Demand Summaries**: Generate high-level summaries instantly localized in your browser to catch you up safely and privately.

### Phase 2: Live Collaboration & Sync (Coming Soon) 🔄
- **Supabase Realtime Backend**: Transition from local-only storage to live syncing across authorized team members, ensuring late joiners can fetch transcripts generated before they arrived.
- **AI Topic Tracking & Action Items**: Instantly detect and categorize action items (e.g., "Add Jira ticket for..."), tracking the active conversation topic.
- **Live Translation**: On-the-fly translation bridging language gaps for international teams.

### Phase 3: Enterprise & Scale (Coming Soon) 📈
- **Speaker Diarization (Who Spoke)**: Advanced voice fingerprinting to accurately partition transcripts by speaker.
- **Seamless Export Integrations**: Auto-push notes and action items to Slack, Notion, Jira, or Google Docs once the meeting ends.
- **Analytics Dashboard**: Post-meeting insights—visualize total talk-time per speaker, meeting efficiency rating, and focus areas.

---

## 🛠 Project Structure & Technology Stack
- **Extension Architecture**: Manifest V3 compliant, Offscreen Documents, Service Workers.
- **Styling**: Vanilla CSS designed with a custom *Dark Glassmorphism* aesthetic.
- **AI Pipeline**: OpenAI APIs.

## 📦 Installation & Setup (Developer)
1. Clone this repository: `git clone https://github.com/shouri123/Late-Meet.git`
2. Open Google Chrome and go to `chrome://extensions/`
3. Enable **Developer mode** in the top right corner.
4. Click **Load unpacked** and select the root directory of this extension.
5. Setup your API keys in the extension's options page.
6. Join a Google Meet and open the side-panel!
